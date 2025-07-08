import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/gal-site',
  integrations: [tailwind()],
  output: 'static',
  outDir: './dist',
});