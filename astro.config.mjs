import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ramas.cl',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  server: {
    allowedHosts: ['.trycloudflare.com'],
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
