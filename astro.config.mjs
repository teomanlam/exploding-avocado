import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://teolam.com',
  output: 'static',
  integrations: [sitemap()],
});
