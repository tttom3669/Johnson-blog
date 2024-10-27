import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tttom3669.github.io',
  base: 'Johnson-blog',
  integrations: [mdx(), sitemap()],
  build: {
    rollupOptions: {
      external: ['sharp'],
    },
  },
});
