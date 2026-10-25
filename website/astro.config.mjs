// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// The production address. Override with SITE_URL when you attach a custom domain.
const site = process.env.SITE_URL || 'https://tkdb.pages.dev';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/search') })],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
