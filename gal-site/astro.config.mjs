import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://st-man-hori.github.io/',
  base: '/gal-site-web',
  integrations: [tailwind()],
  output: 'static',
  outDir: '../gal-site-web',
});