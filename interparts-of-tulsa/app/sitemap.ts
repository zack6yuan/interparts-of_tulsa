import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/site-config";

// These dates are pinned by hand, NOT `new Date()`. With `new Date()` every
// deploy stamped both URLs as freshly modified — even a CSS-only change — and
// Google stops trusting a lastmod that moves on every crawl without the page
// actually changing. Bump the relevant date when the page's content really
// changes; ignore styling and build-only commits.
const HOME_LAST_MODIFIED = "2026-07-20";
const TERMS_LAST_MODIFIED = "2026-07-03";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: TERMS_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
