# Iceberg · Landing ADOMTRA (República Dominicana)

Landing de una sola página, 100% en español, dirigida a técnicos y contratistas de
refrigeración y aire acondicionado de ADOMTRA en República Dominicana.

Es un proyecto **separado** de la landing de eventos (`refriamericas-landing-page`,
events.iceberg-refrigeration.com): repositorio, sitio de Netlify y dominio propios.

## Archivos

- `index.html`: la página.
- `config.js`: **aquí se edita casi todo**: WhatsApp y sus mensajes, correos, enlace de HubSpot Meetings, fotos del hero, catálogo.
- `privacidad.html`: política de privacidad (solo español).
- `assets/`: logos, fotos y la imagen para compartir (`og-share.jpg`).
- `netlify.toml`: configuración de Netlify (sitio estático, sin build).

## Pendiente

1. **HubSpot Meetings:** pega un enlace de reuniones en `config.js` → `hubspot.meetingUrl`.
   Mientras esté vacío, "Agendar llamada" abre WhatsApp.
2. **Dominio:** la página asume `https://iceberg-adomtra.netlify.app/` (canonical y
   vista previa al compartir). Si usas otro dominio, cámbialo en `index.html` y `privacidad.html`.
3. **Netlify Forms:** activa las notificaciones del formulario `cotizacion-adomtra`
   (Forms → Form notifications) para que lleguen a info@ y alberto@.

## Despliegue en Netlify

1. Netlify → **Add new site → Import from Git** → elige este repositorio.
2. Netlify lee `netlify.toml`; no hace falta configurar nada más → **Deploy**.
3. **Domain management → Add a domain** → `adomtra.iceberg-refrigeration.com`.

## Prueba local

```
python -m http.server 8766
```
y abre http://127.0.0.1:8766
