import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroI18n from "astro-i18n-aut/integration";

export default defineConfig({
  integrations: [
    tailwind(),
    astroI18n({
      defaultLanguage: "tr",
      supportedLanguages: ["tr", "en", "de"],
      showDefaultLangInUrl: true,
    })
  ],
  // This ensures we can serve images from public directory
  site: 'https://gokcan-dogaltaslar.com',
});