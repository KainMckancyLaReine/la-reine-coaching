const labels = {
  home: "Home",
  "stop-playing-small": "Stop Playing Small",
  "werk-met-mij": "Werk met mij",
  "coaching-voice-activation": "Coaching & Voice Activation",
  "vibes-voices": "Vibes & Voices",
  spreker: "Spreker",
  "over-mij": "Over mij",
  shop: "Shop",
  contact: "Contact",
  nav: "Navigatie",
  "common-dict": "Gedeelde knoppen en teksten",
  ContactForm: "Contactformulier",
  NewsletterForm: "Nieuwsbriefformulier",
  ChatWidget: "Chat en veelgestelde vragen",
};
const languages = { nl: "Nederlands", en: "Engels" };
const maxImageBytes = 768 * 1024;
const login = document.querySelector("#login");
const editor = document.querySelector("#editor");
const status = document.querySelector("#status");
const section = document.querySelector("#section");
const entries = document.querySelector("#entries");
const search = document.querySelector("#search");
const fields = document.querySelector("#fields");
const publish = document.querySelector("#publish");
const confirmPublish = document.querySelector("#confirm-publish");
const logout = document.querySelector("#logout");
const selectedImages = new Map();
const publishedPreviews = new Map();
let imageLabels;
let workerURL;
let token;
let revision;
let content;
let savedContent;
let busy = false;
let imageVersion = "";
let displayedSection = "";

function message(text, error = false) {
  status.textContent = text;
  status.toggleAttribute("data-error", error);
}

function hasChanges() {
  return selectedImages.size > 0 || JSON.stringify(content) !== savedContent;
}

function update() {
  const dirty = Boolean(content && hasChanges());
  document.querySelector("#draft-status").textContent = dirty ? "Ongepubliceerde wijzigingen" : "Geen wijzigingen";
  publish.disabled = busy || !token || !dirty;
  fields.disabled = busy;
  logout.disabled = busy;
}

async function api(path, body) {
  const headers = {};
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body) headers["Content-Type"] = "application/json";
  const response = await fetch(new URL(path, workerURL), {
    headers,
    method: body ? "POST" : "GET",
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(30000),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401 && path !== "/login") {
      token = undefined;
      login.hidden = false;
      editor.hidden = true;
      login.elements.username.focus();
    }
    throw new Error(data.error || "Het beheer is tijdelijk niet bereikbaar.");
  }
  return data;
}

function render() {
  const group = section.value;
  const showingImages = group === "images";
  document.querySelector("#search-label").hidden = showingImages;
  entries.classList.toggle("images", showingImages);
  entries.replaceChildren();

  if (showingImages) {
    for (const [path, label] of Object.entries(imageLabels)) renderImage(path, label);
    return;
  }
  const query = search.value.trim().toLowerCase();
  for (const [key, text] of Object.entries(content[group])) {
    if (query && !Object.values(text).some((value) => value.toLowerCase().includes(query))) continue;

    const pair = document.createElement("div");
    pair.className = "panel text-pair";
    for (const [lang, name] of Object.entries(languages)) {
      const label = document.createElement("label");
      label.append(name);
      const input = document.createElement("textarea");
      input.rows = Math.min(9, Math.max(2, text[lang].split("\n").length, Math.ceil(text[lang].length / 58)));
      input.maxLength = 6000;
      input.value = text[lang];
      input.setAttribute("aria-label", `${name} · ${key.replaceAll("-", " ")}`);
      input.addEventListener("input", () => {
        text[lang] = input.value;
        update();
      });
      label.append(input);
      pair.append(label);
    }
    entries.append(pair);
  }
  if (!entries.childElementCount) entries.textContent = "Geen teksten gevonden.";
}

async function prepareImage(file, path) {
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 25 * 1024 * 1024) {
    throw new Error("Kies een JPG-, PNG- of WebP-bestand van maximaal 25 MB.");
  }

  const bitmap = await createImageBitmap(file);
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const mime = path.endsWith(".png") ? "image/png" : "image/jpeg";
    const largestSide = Math.max(bitmap.width, bitmap.height);

    for (const limit of [1800, 1400, 1000, 700, 500, 350]) {
      const scale = Math.min(1, limit / largestSide);
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      if (mime === "image/jpeg") {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      const url = canvas.toDataURL(mime, 0.87);
      const base64 = url.split(",")[1];
      if (base64 && base64.length <= maxImageBytes * 4 / 3) return { url, base64 };
    }
    throw new Error("Deze foto kon niet klein genoeg worden gemaakt.");
  } finally {
    bitmap.close();
  }
}

function renderImage(path, title) {
  const card = document.createElement("article");
  card.className = "panel image-card";
  const heading = document.createElement("h2");
  heading.textContent = title;
  const preview = document.createElement("img");
  preview.alt = title;
  preview.loading = "lazy";
  const current = new URL(`../${path}`, location.href);
  if (imageVersion) current.searchParams.set("cms", imageVersion);

  const label = document.createElement("label");
  label.append("Foto vervangen");
  const file = document.createElement("input");
  file.type = "file";
  file.accept = "image/jpeg,image/png,image/webp";
  file.setAttribute("aria-label", `Foto vervangen · ${title}`);
  label.append(file);

  const undo = document.createElement("button");
  undo.type = "button";
  undo.className = "secondary";
  undo.textContent = "Vervanging ongedaan maken";
  function showPreview() {
    preview.src = selectedImages.get(path)?.url || publishedPreviews.get(path) || current.href;
    undo.hidden = !selectedImages.has(path);
    update();
  }

  file.addEventListener("change", async () => {
    const picked = file.files[0];
    if (!picked) return;
    busy = true;
    update();
    try {
      selectedImages.set(path, await prepareImage(picked, path));
      showPreview();
      message("");
    } catch (error) {
      message(error.message || "De foto kon niet worden geopend.", true);
    } finally {
      file.value = "";
      busy = false;
      update();
    }
  });
  undo.addEventListener("click", () => {
    selectedImages.delete(path);
    showPreview();
  });
  showPreview();
  card.append(heading, preview, label, undo);
  entries.append(card);
}

section.addEventListener("change", () => {
  if (displayedSection !== section.value) search.value = "";
  displayedSection = section.value;
  render();
});
search.addEventListener("input", render);

login.addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = login.querySelector("button");
  button.disabled = true;
  message("Inloggen…");
  try {
    const { token: nextToken } = await api("/login", {
      username: login.elements.username.value,
      password: login.elements.password.value,
    });
    token = nextToken;
    if (!content) {
      const latest = await api("/content");
      content = latest.content;
      revision = latest.revision;
      savedContent = JSON.stringify(content);
      imageVersion = revision;
      section.replaceChildren();
      for (const [key, label] of Object.entries(labels)) {
        if (Object.hasOwn(content, key)) section.add(new Option(label, key));
      }
      section.add(new Option("Foto’s en logo", "images"));
      displayedSection = section.value;
      search.value = "";
    }
    login.reset();
    login.hidden = true;
    editor.hidden = false;
    render();
    update();
    section.focus();
    message("");
  } catch (error) {
    token = undefined;
    message(error.message, true);
  } finally {
    button.disabled = false;
    login.elements.password.value = "";
  }
});

logout.addEventListener("click", () => {
  if (hasChanges() && !window.confirm("Je wijzigingen zijn nog niet gepubliceerd. Toch uitloggen?")) return;
  token = undefined;
  content = undefined;
  selectedImages.clear();
  publishedPreviews.clear();
  entries.replaceChildren();
  editor.hidden = true;
  login.hidden = false;
  login.elements.username.focus();
  message("Je bent uitgelogd.");
});

publish.addEventListener("click", () => {
  confirmPublish.returnValue = "";
  confirmPublish.showModal();
});
confirmPublish.addEventListener("close", async () => {
  if (confirmPublish.returnValue !== "publish") return;
  busy = true;
  update();
  message("Wijzigingen opslaan…");
  status.scrollIntoView({ block: "nearest" });
  try {
    const images = Object.fromEntries([...selectedImages].map(([path, image]) => [path, image.base64]));
    const payload = { revision, content, images };
    if (new Blob([JSON.stringify(payload)]).size > 12 * 1024 * 1024) {
      throw new Error("Publiceer minder foto’s tegelijk. Je geselecteerde foto’s staan nog in het formulier.");
    }
    const result = await api("/publish", payload);
    revision = result.revision;
    savedContent = JSON.stringify(content);
    message(result.unchanged
      ? "Er zijn geen wijzigingen om te publiceren."
      : "Opgeslagen. De bijgewerkte website verschijnt zodra GitHub Pages klaar is met publiceren.");
    // Keep local previews until GitHub Pages has finished serving the new images.
    for (const card of entries.querySelectorAll(".image-card")) {
      card.querySelector(".secondary").hidden = true;
    }
    for (const [path, image] of selectedImages) {
      publishedPreviews.set(path, image.url);
    }
    selectedImages.clear();
  } catch (error) {
    message(error.message, true);
    status.scrollIntoView({ block: "nearest" });
  } finally {
    busy = false;
    update();
  }
});

window.addEventListener("beforeunload", (event) => {
  if (content && hasChanges()) {
    event.preventDefault();
    event.returnValue = "";
  }
});

try {
  const [config, images] = await Promise.all(
    ["config.json", "images.json"].map(async (file) => {
      const response = await fetch(`./${file}`, { cache: "no-store" });
      if (!response.ok) throw new Error("De instellingen van het beheer konden niet worden geladen.");
      return response.json();
    }),
  );
  if (!config.workerURL) throw new Error("Het beheer is nog niet gekoppeld aan de publicatieservice.");
  workerURL = new URL(config.workerURL);
  if (workerURL.protocol !== "https:" && workerURL.hostname !== "localhost") {
    throw new Error("De publicatieservice heeft een beveiligde URL nodig.");
  }
  imageLabels = images;
  login.hidden = false;
  message("");
} catch (error) {
  message(error.message, true);
}
