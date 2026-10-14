import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const locales = ['en', 'de', 'fr', 'it', 'ja', 'ko', 'tr'];
const legalPages = /\/(privacy|imprint|datenschutz|impressum)\/$/;

export default defineConfig({
  site: 'https://teolam.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !legalPages.test(page),
      i18n: {
        defaultLocale: 'en',
        locales: Object.fromEntries(locales.map((l) => [l, l])),
      },
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales,
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
