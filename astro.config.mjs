// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xiachedan.cn',
  integrations: [svelte(), tailwind(), sitemap()],
  output: 'static',
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
});