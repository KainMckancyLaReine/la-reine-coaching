export const NAV_LINKS = [
  { label: { nl: "Home", en: "Home" }, href: "/" },
  { label: { nl: "Stop Playing Small", en: "Stop Playing Small" }, href: "/stop-playing-small" },
  { label: { nl: "Werk met mij", en: "Work with me" }, href: "/werk-met-mij" },
  { label: { nl: "Vibes & Voices", en: "Vibes & Voices" }, href: "/vibes-voices" },
  { label: { nl: "Over mij", en: "About me" }, href: "/over-mij" },
  { label: { nl: "Contact", en: "Contact" }, href: "/contact" },
  { label: { nl: "Shop", en: "Shop" }, href: "/shop" },
] as const;

// Primary items always shown on one line; the rest live under the "More" menu.
export const NAV_PRIMARY_HREFS = ["/", "/werk-met-mij", "/vibes-voices", "/contact"];
export const NAV_MORE_LABEL = { nl: "Meer", en: "More" };

export const CALENDLY_URL =
  "https://calendly.com/lareinecoaching/even-bijpraten-clone";

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/lareinecoaching" },
  { label: "Instagram", href: "https://www.instagram.com/lareinecoaching" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/lareinecoaching" },
] as const;

export const SITE_URL = "https://www.lareinecoaching.nl";

export const KM_DEV_URL = "https://kainmckancylareine.github.io/KM-DEV/index.html";
