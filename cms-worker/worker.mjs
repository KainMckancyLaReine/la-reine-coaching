import editableImages from "../public/admin/images.json";

const contentPath = "src/content/site.json";
const encoder = new TextEncoder();
const maxBody = 12 * 1024 * 1024;
const maxImage = 768 * 1024;
const sessionSeconds = 4 * 60 * 60;

function fail(status, message) {
  throw Object.assign(new Error(message), { status });
}

async function readJson(request, maxBytes) {
  if (!request.body) fail(400, "Het verzoek bevat geen gegevens.");
  if (Number(request.headers.get("Content-Length")) > maxBytes) {
    fail(413, "Dit verzoek is te groot.");
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let text = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > maxBytes) {
      await reader.cancel();
      fail(413, "Dit verzoek is te groot.");
    }
    text += decoder.decode(value, { stream: true });
  }
  try {
    return JSON.parse(text + decoder.decode());
  } catch {
    fail(400, "Het verzoek bevat ongeldige gegevens.");
  }
}

async function matches(received, expected) {
  if (typeof received !== "string") return false;
  const a = await crypto.subtle.digest("SHA-256", encoder.encode(received));
  const b = await crypto.subtle.digest("SHA-256", encoder.encode(expected));
  const left = new Uint8Array(a);
  const right = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < left.length; i++) diff |= left[i] ^ right[i];
  return diff === 0;
}

async function sign(payload, secret) {
  const key = await crypto.subtle.importKey(
    "raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"],
  );
  return { key, payload: encoder.encode(payload) };
}

async function issueToken(secret) {
  const payload = `${Math.floor(Date.now() / 1000) + sessionSeconds}.${crypto.randomUUID()}`;
  const input = await sign(payload, secret);
  const signature = await crypto.subtle.sign("HMAC", input.key, input.payload);
  return `${payload}.${btoa(String.fromCharCode(...new Uint8Array(signature)))}`;
}

async function isAuthenticated(request, secret) {
  const header = request.headers.get("Authorization");
  const match = header?.match(/^Bearer (\d{10})\.([a-f0-9-]{36})\.([A-Za-z0-9+/]{43}=)$/);
  if (!match) return false;
  const [, expiry, nonce, signature] = match;
  if (Number(expiry) <= Date.now() / 1000) return false;
  const input = await sign(`${expiry}.${nonce}`, secret);
  return crypto.subtle.verify(
    "HMAC", input.key, Uint8Array.from(atob(signature), (char) => char.charCodeAt(0)), input.payload,
  );
}

async function github(env, query, variables) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "la-reine-coaching-cms",
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!response.ok) fail(502, "GitHub is niet bereikbaar of de toegang moet worden gecontroleerd.");
  return response.json();
}

async function currentContent(env) {
  const [owner, name] = env.GITHUB_REPOSITORY.split("/");
  const result = await github(env, `query($owner: String!, $name: String!, $branch: String!, $path: String!) {
    repository(owner: $owner, name: $name) {
      ref(qualifiedName: $branch) {
        target {
          oid
          ... on Commit { file(path: $path) { object { ... on Blob { text } } } }
        }
      }
    }
  }`, { owner, name, branch: `refs/heads/${env.GITHUB_BRANCH}`, path: contentPath });
  const target = result.data?.repository?.ref?.target;
  const text = target?.file?.object?.text;
  if (!text) fail(502, "De website-inhoud kon niet uit GitHub worden geladen.");
  return { revision: target.oid, content: JSON.parse(text) };
}

function sameKeys(a, b) {
  return a && typeof a === "object" && !Array.isArray(a) &&
    Object.keys(a).length === Object.keys(b).length &&
    Object.keys(b).every((key) => Object.hasOwn(a, key));
}

function validateContent(content, current) {
  if (!sameKeys(content, current)) return false;
  return Object.entries(current).every(([section, fields]) =>
    sameKeys(content[section], fields) &&
    Object.keys(fields).every((key) => {
      const text = content[section][key];
      return sameKeys(text, fields[key]) &&
        Object.values(text).every((value) => typeof value === "string" && value.length <= 6000);
    }),
  );
}

function imageAdditions(images) {
  if (!images || typeof images !== "object" || Array.isArray(images)) {
    fail(400, "De fotogegevens zijn ongeldig.");
  }
  return Object.entries(images).map(([path, contents]) => {
    if (!Object.hasOwn(editableImages, path) || typeof contents !== "string" ||
        contents.length > Math.ceil(maxImage / 3) * 4 || !/^[A-Za-z0-9+/]+={0,2}$/.test(contents)) {
      fail(400, "Een foto is te groot of kan niet worden vervangen.");
    }
    let image;
    try {
      image = atob(contents);
    } catch {
      fail(400, "Een foto kon niet worden gelezen.");
    }
    const correctFormat = path.endsWith(".png")
      ? image.startsWith("\x89PNG\r\n\x1a\n") && image.endsWith("IEND\xaeB\x60\x82")
      : image.startsWith("\xff\xd8\xff") && image.endsWith("\xff\xd9");
    if (!correctFormat || image.length > maxImage) fail(400, "Een foto heeft een ongeldig formaat.");
    return { path: `public/${path}`, contents };
  });
}

async function publish(request, env) {
  const body = await readJson(request, maxBody);
  const current = await currentContent(env);
  const conflict = "De website is intussen bijgewerkt. Laat dit tabblad open, laad de nieuwste versie in een nieuw tabblad en neem je wijzigingen daar over.";
  if (body?.revision !== current.revision) fail(409, conflict);
  if (!validateContent(body.content, current.content)) {
    fail(400, "De teksten komen niet overeen met de website, of een tekst is te lang.");
  }

  const additions = imageAdditions(body.images);
  const text = JSON.stringify(body.content, null, 2) + "\n";
  if (text !== JSON.stringify(current.content, null, 2) + "\n") {
    const bytes = encoder.encode(text);
    let binary = "";
    for (let i = 0; i < bytes.length; i += 8192) {
      binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
    }
    additions.push({ path: contentPath, contents: btoa(binary) });
  }
  if (!additions.length) return { revision: current.revision, unchanged: true };

  const result = await github(env, `mutation($input: CreateCommitOnBranchInput!) {
    createCommitOnBranch(input: $input) { commit { oid url } }
  }`, {
    input: {
      branch: { repositoryNameWithOwner: env.GITHUB_REPOSITORY, branchName: env.GITHUB_BRANCH },
      expectedHeadOid: current.revision,
      message: { headline: "Werk website-inhoud bij via het CMS" },
      fileChanges: { additions },
    },
  });
  const commit = result.data?.createCommitOnBranch?.commit;
  if (!commit) {
    if ((await currentContent(env)).revision !== current.revision) fail(409, conflict);
    fail(502, "GitHub kon de wijzigingen niet opslaan. Je invoer staat nog in het formulier.");
  }
  return { revision: commit.oid, url: commit.url };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    if (!env.SITE_ORIGIN || origin !== env.SITE_ORIGIN) return new Response(null, { status: 403 });

    const headers = {
      "Access-Control-Allow-Origin": env.SITE_ORIGIN,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      "Cache-Control": "no-store",
      Vary: "Origin",
    };
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

    try {
      if (!env.ADMIN_USERNAME || !env.ADMIN_PASSWORD || !env.SESSION_SECRET || !env.GITHUB_TOKEN ||
          !env.GITHUB_REPOSITORY || !env.GITHUB_BRANCH || !env.LOGIN_LIMIT) {
        fail(503, "Het beheer is nog niet volledig ingesteld.");
      }
      const path = new URL(request.url).pathname;
      if (path === "/login" && request.method === "POST") {
        const { success } = await env.LOGIN_LIMIT.limit({
          key: request.headers.get("CF-Connecting-IP") || "unknown",
        });
        if (!success) fail(429, "Te veel pogingen. Probeer het over een minuut opnieuw.");
        const body = await readJson(request, 4096);
        const [user, password] = await Promise.all([
          matches(body?.username, env.ADMIN_USERNAME),
          matches(body?.password, env.ADMIN_PASSWORD),
        ]);
        if (!user || !password) fail(401, "De gebruikersnaam of het wachtwoord klopt niet.");
        return Response.json({ token: await issueToken(env.SESSION_SECRET) }, { headers });
      }

      if (!(await isAuthenticated(request, env.SESSION_SECRET))) {
        fail(401, "Je sessie is verlopen. Log opnieuw in om verder te gaan.");
      }
      if (path === "/content" && request.method === "GET") {
        return Response.json(await currentContent(env), { headers });
      }
      if (path === "/publish" && request.method === "POST") {
        return Response.json(await publish(request, env), { headers });
      }
      fail(404, "Deze pagina bestaat niet.");
    } catch (error) {
      return Response.json(
        { error: error.status ? error.message : "Het beheer is tijdelijk niet bereikbaar. Probeer het opnieuw." },
        { status: error.status || 500, headers },
      );
    }
  },
};
