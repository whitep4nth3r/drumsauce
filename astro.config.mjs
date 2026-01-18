// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  adapter: netlify(),
  site: "https://drumsauce.net/",
  integrations: [
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
    }),
  ],
});
