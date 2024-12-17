// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xiachedan.cn',
  integrations: [svelte(), tailwind(), sitemap()],
  output: 'static',
  adapter: vercel({
    imageService: true,
  }),
});