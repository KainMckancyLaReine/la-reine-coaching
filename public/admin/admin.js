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
const loginView = document.querySelector("#login-view");
const editor = document.querySelector("#editor");
const status = document.querySelector("#status");
const pages = document.querySelector("#pages");
const preview = document.querySelector("#preview");
const draftStatus = document.querySelector("#draft-status");
const globalSections = new Set(["nav", "common-dict", "ContactForm", "NewsletterForm", "ChatWidget", "images"]);
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
let displayedSection = "home";
let previewLanguage = "nl";
let currentPage = "home";
let previewUpdate;

function updatePreview() {
  cancelAnimationFrame(previewUpdate);
  previewUpdate = requestAnimationFrame(() => {
    if (!content || !token) return;
    preview.contentWindow?.postMessage({
      type: "la-reine-preview",
      content,
      lang: previewLanguage,
    }, location.origin);
    const document = preview.contentDocument;
    if (!document?.head || document.location.origin !== location.origin) return;
    let styles = document.getElementById("cms-preview-images");
    if (!styles) {
      styles = document.createElement("style");
      styles.id = "cms-preview-images";
      document.head.append(styles);
    }
    const images = new Map([...publishedPreviews].map(([path, url]) => [path, url]));
    for (const [path, image] of selectedImages) images.set(path, image.url);
    styles.textContent = [...images].map(([path, url]) => {
      const source = new URL(`../${path}`, location.href).pathname;
      return `img[src=${JSON.stringify(source)}] { content: url(${JSON.stringify(url)}); }`;
    }).join("\n");
  });
}

function selectSection(group) {
  displayedSection = group;
  search.value = "";
  fields.scrollTop = 0;
  for (const button of pages.querySelectorAll("button")) {
    button.setAttribute("aria-current", String(button.dataset.section === group));
  }
  const page = group === "ContactForm" ? "contact"
    : group === "NewsletterForm" ? "vibes-voices"
    : globalSections.has(group) ? currentPage : group;
  currentPage = page;
  document.querySelector("#page-title").textContent = labels[page];
  const path = page === "home" ? "../" : `../${page}/`;
  const url = new URL(path, location.href);
  url.searchParams.set("cms-preview", "1");
  if (preview.src !== url.href) preview.src = url.href;
  document.querySelector("#inspector-title").textContent =
    group === "images" ? "Foto’s en logo" : `Teksten · ${labels[group]}`;
  render();
  updatePreview();
}

function renderPages() {
  pages.replaceChildren();
  for (const [title, global] of [["Pagina’s", false], ["Site-inhoud", true]]) {
    const heading = document.createElement("h2");
    heading.textContent = title;
    pages.append(heading);
    for (const [key, label] of Object.entries({ ...labels, images: "Foto’s en logo" })) {
      if (globalSections.has(key) !== global || (key !== "images" && !Object.hasOwn(content, key))) continue;
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.section = key;
      button.textContent = label;
      button.addEventListener("click", () => selectSection(key));
      pages.append(button);
    }
  }
}

function setEditing(open) {
  editor.hidden = !open;
  draftStatus.hidden = !open;
  logout.hidden = !open;
  publish.hidden = !open;
  if (!open) preview.removeAttribute("src");
}


function message(text, error = false) {
  status.textContent = text;
  status.toggleAttribute("data-error", error);
}

function hasChanges() {
  return selectedImages.size > 0 || JSON.stringify(content) !== savedContent;
}

function update() {
  const dirty = Boolean(content && hasChanges());
  draftStatus.textContent = dirty ? "Ongepubliceerde wijzigingen" : "Geen wijzigingen";
  draftStatus.toggleAttribute("data-dirty", dirty);
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
      loginView.hidden = false;
      setEditing(false);
      login.elements.username.focus();
    }
    throw new Error(data.error || "Het beheer is tijdelijk niet bereikbaar.");
  }
  return data;
}

function render() {
  const group = displayedSection;
  const showingImages = group === "images";
  const query = search.value.trim().toLowerCase();
  search.placeholder = showingImages ? "Zoek een foto" : "Zoek een woord of zin";
  entries.classList.toggle("images", showingImages);
  entries.replaceChildren();

  if (showingImages) {
    for (const [path, label] of Object.entries(imageLabels)) {
      if (label.toLowerCase().includes(query)) renderImage(path, label);
    }
    if (!entries.childElementCount) entries.textContent = "Geen foto’s gevonden.";
    return;
  }
  for (const [key, text] of Object.entries(content[group])) {
    if (query && !Object.values(text).some((value) => value.toLowerCase().includes(query))) continue;

    const pair = document.createElement("div");
    pair.className = "panel text-pair";
    const heading = document.createElement("h3");
    const textLabel = key.replaceAll("-", " ");
    heading.textContent = textLabel.charAt(0).toUpperCase() + textLabel.slice(1);
    pair.append(heading);
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
        updatePreview();
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
    updatePreview();
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

preview.addEventListener("load", updatePreview);
window.addEventListener("message", (event) => {
  if (event.origin === location.origin && event.source === preview.contentWindow &&
      event.data?.type === "la-reine-preview-ready") updatePreview();
});
for (const button of document.querySelectorAll("[data-device], [data-lang]")) {
  button.addEventListener("click", () => {
    for (const sibling of button.parentElement.querySelectorAll("button")) {
      sibling.setAttribute("aria-pressed", String(sibling === button));
    }
    if (button.dataset.device) preview.dataset.device = button.dataset.device;
    if (button.dataset.lang) {
      previewLanguage = button.dataset.lang;
      updatePreview();
    }
  });
}
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
      displayedSection = "home";
      currentPage = "home";
    }
    login.reset();
    loginView.hidden = true;
    setEditing(true);
    renderPages();
    selectSection(displayedSection);
    update();
    pages.querySelector('[aria-current="true"]')?.focus();
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
  setEditing(false);
  loginView.hidden = false;
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
  loginView.hidden = false;
  message("");
} catch (error) {
  message(error.message, true);
}
