# Próximos pasos — KraftoHome

Checklist post-diseño, de mockup a sitio publicado e indexado.

## 1. Contenido / datos reales

- [ ] Confirmar o reescribir las 4 respuestas del FAQ (`#faq` en `index.html` + JSON-LD `FAQPage`) — son placeholders, no datos confirmados del negocio
- [ ] Decidir dirección para JSON-LD: dirección completa (`streetAddress`) si hay local con atención al público, o `areaServed` si solo fabrican y entregan

## 2. Pasar de mockup a producción ✅ hecho

- [x] Migrado a Astro en `../kraftohome-astro` (SSG, sin React/sin runtime de canvas de diseño)
- [x] Carruseles y toggle antes/después reimplementados en JS vanilla (más liviano)
- [x] Meta tags, JSON-LD (`FurnitureStore` + `FAQPage` generado desde `src/data/content.ts`), sección FAQ, accesibilidad (focus-visible, aria-pressed, alt text, reduced-motion), código en inglés — todo migrado
- [ ] Revisar visualmente en navegador (`npm run dev` dentro de `kraftohome-astro`, falta Node 22+ o usar nvm)

## 3. Dominio + hosting

- [ ] Comprar dominio
- [ ] Buscar/reemplazar `REEMPLAZAR-DOMINIO` en `kraftohome-astro`: `astro.config.mjs` (`site`), `src/layouts/Layout.astro`, `public/robots.txt`
- [ ] Deployar (Vercel/Netlify funcionan bien con Astro)

## 4. Crawlability ✅ hecho (falta dominio real)

- [x] `robots.txt` creado en `kraftohome-astro/public/`, apunta a sitemap
- [x] Sitemap automático vía `@astrojs/sitemap` (se genera en cada build)

## 5. Local SEO

- [ ] Crear/verificar Google Business Profile (ficha gratis en Google Maps — pesa más que el on-page para búsquedas locales)
- [ ] NAP consistente: mismo teléfono/dirección en footer visible, GBP y JSON-LD

## 6. Validar post-deploy

- [ ] Google Search Console: verificar dominio, enviar sitemap, pedir indexación
- [ ] Rich Results Test (search.google.com/test/rich-results) — validar los 2 JSON-LD
- [ ] PageSpeed Insights / Core Web Vitals reales una vez online
- [ ] Confirmar que el link `wa.me` funciona bien en mobile

## 7. Seguimiento

- [ ] Google Analytics / GA4 básico
- [ ] Pedir reseñas reales a clientes → suben a GBP (nunca inventar `AggregateRating` en el schema)
