# Carpeta de materiales (assets)

Coloca aquí los archivos reales de Iceberg. Luego apunta a ellos desde `../config.js`.
Los campos vacíos en `config.js` simplemente no se muestran, así que la página funciona
aunque falten algunos archivos.

## Archivos sugeridos y dónde se usan

| Archivo (nombre sugerido)        | Dónde se usa                         | Campo en config.js            |
|----------------------------------|--------------------------------------|-------------------------------|
| `iceberg-logo.svg` / `.png`      | Encabezado y footer                  | `logoUrl`                     |
| `iceberg-capabilities.pdf`       | Botón de descarga (thank-you + footer)| `brochureUrl`                |
| `keeprite.png`                   | Franja "Marcas autorizadas"          | `manufacturers[].logo`        |
| Otros logos de fabricantes       | Franja "Marcas autorizadas"          | `manufacturers[].logo`        |

## Materiales que impactan más la conversión (según la agencia)

Reúne y reemplaza los placeholders con material REAL de Iceberg:

- [ ] **Logo e identidad** de Iceberg (SVG o PNG en alta resolución)
- [ ] **Fotos de proyectos** de refrigeración (cámaras, cuartos fríos, instalaciones)
- [ ] **Imágenes de equipos y paneles** (unidades condensadoras, compresores, chillers, hielo)
- [ ] **Logos de fabricantes** que Iceberg está autorizado a mostrar (Keeprite confirmado)
- [ ] **Fotos del equipo humano** (para "Sobre Iceberg" / credibilidad)
- [ ] **Permiso de marca de RefriAméricas** para usar su nombre/logo, si aplica
- [ ] **Brochure de capacidades** en PDF (para descarga tras el formulario)
- [ ] **Copy en español** revisado por el equipo comercial (razones específicas para reunirse)

> Nota: la sección de fotos/galería no está incrustada todavía porque no hay imágenes reales.
> Cuando las tengas, dime y las integro (hero, soluciones y "Sobre Iceberg" son los mejores lugares).

## Formatos recomendados

- Imágenes: `.webp` o `.jpg` optimizadas (< 300 KB c/u), ancho máx. ~1600 px.
- Logos: `.svg` preferido; si no, `.png` con fondo transparente.
- Brochure: `.pdf` (< 8 MB).
