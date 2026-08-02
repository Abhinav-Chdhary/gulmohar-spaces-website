import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://gulmoharspaces.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
