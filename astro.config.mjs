import { defineConfig } from 'astro/config';
import tailwind from "@tailwindcss/vite";
import {i18n, filterSitemapByDefaultLocale} from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "tr";
const locales = {
  tr: "tr", 
  en: "en",
  de: "de",
};

export default defineConfig({
  integrations: [
    i18n({
      defaultLocale,
      locales,
      showDefaultLangInUrl: true,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
  vite: {
    plugins: [tailwind()]
  },
  // This ensures we can serve images from public directory
  site: 'https://gokcan-dogaltaslar.com',
});