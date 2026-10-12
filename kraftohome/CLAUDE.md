# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es esto

Mockup de diseño de una landing page (KraftoHome, fabricante de muebles de melamina en Hurlingham, Buenos Aires), exportado desde una herramienta visual de diseño ("appifact design canvas"). **No es código de producción** — es una REFERENCIA de diseño: la marca, los valores exactos de estilo (colores, tipografía, espaciado, radios, sombras, layout) deben replicarse fielmente en la implementación real, pero no copiarse tal cual.

- `index.html` — el artboard exportado. Contiene un custom element `<x-dc>` con el markup, un bloque `<helmet><style>` con los estilos globales, y un `<script data-dc-script>` al final con la clase `Component extends DCLogic` que define los datos (productos, features, testimonios) y expone `props` editables (`waNumber`, `accent`).
  - El README menciona un archivo `Main.dc.html` — en este repo el artboard está en `index.html`; tenerlo en cuenta si se agregan instrucciones nuevas basadas en el README.
- `support.js`, `vendor/react.js`, `vendor/react-dom.js` — runtime que renderiza el `<x-dc>` en el browser (React + un soporte propio del editor de diseño). No forman parte del diseño, no tocar al editar contenido/estilo.
- `recibidor.jpg` — única foto de producto real cargada; el resto de productos/testimonios tienen placeholders entre `[corchetes]` a completar.

## Cómo ver el mockup

Servir la carpeta y abrir `index.html` (algunos browsers bloquean los scripts si se abre como `file://`):

```
python3 -m http.server
```

## Convenciones de datos (dentro del `<script data-dc-script>`)

- Colores definidos en `oklch(...)`, no hex (excepto el prop `accent` editable).
- Placeholders de texto pendiente usan formato `[EN MAYÚSCULA ENTRE CORCHETES]` (ej. `[TELÉFONO DE CONTACTO]`, `[PRECIO]`).
- Listas repetidas (productos, features, testimonios) se renderizan con `<sc-for list="{{...}}" as="...">` y condicionales con `<sc-if value="{{...}}">`; cualquier dato nuevo en un loop debe seguir ese patrón de template en vez de hardcodear HTML repetido.
- El link de WhatsApp se deriva siempre de `waNumber` vía `'https://wa.me/' + waNumber` — no hardcodear el link en otro lado del markup.
