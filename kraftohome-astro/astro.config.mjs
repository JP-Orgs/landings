// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio real antes de publicar (requerido para sitemap/canonical)
  site: 'https://REEMPLAZAR-DOMINIO',
  integrations: [sitemap()]
});