import siteContent from "@/content/site.json";

const copy = siteContent["nav"];
export const NAV_LINKS = [
  { label: copy["home"], href: "/" },
  { label: copy["stop-playing-small"], href: "/stop-playing-small" },
  { label: copy["werk-met-mij"], href: "/werk-met-mij" },
  { label: copy["coaching-voice-activation"], href: "/coaching-voice-activation" },
  { label: copy["vibes-voices"], href: "/vibes-voices" },
  { label: copy["spreker"], href: "/spreker" },
  { label: copy["over-mij"], href: "/over-mij" },
  { label: copy["contact"], href: "/contact" },
  { label: copy["shop"], href: "/shop" },
] as const;

// Primary items always shown on one line; the rest live under the "More" menu.
export const NAV_PRIMARY_HREFS = ["/", "/werk-met-mij", "/spreker", "/contact"];
export const NAV_MORE_LABEL = copy["meer"];

export const CALENDLY_URL =
  "https://calendly.com/lareinecoaching/even-bijpraten-clone";

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/lareinecoaching" },
  { label: "Instagram", href: "https://www.instagram.com/lareinecoaching" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/lareinecoaching" },
] as const;

export const SITE_URL = "https://www.lareinecoaching.nl";

export const KM_DEV_URL = "https://kainmckancylareine.github.io/KM-DEV/index.html";

// Link naar de review-tool (reviews worden eerst door Phaedra goedgekeurd).
// Vervang deze link zodra de definitieve review-link bekend is.
export const REVIEW_URL = "/contact";
