import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://tsumic.pages.dev',
  base: '/',
  trailingSlash: 'always',
  markdown: {
    drafts: true,
  }
});