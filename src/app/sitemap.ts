import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/nav";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "stop-playing-small",
  "werk-met-mij",
  "vibes-voices",
  "over-mij",
  "contact",
  "shop",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
