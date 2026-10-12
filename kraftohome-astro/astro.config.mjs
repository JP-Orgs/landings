// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Si consiguen dominio propio: cambiar site a ese dominio y quitar base.
  site: 'https://jp-orgs.github.io',
  base: '/landings',
  integrations: [sitemap()]
});