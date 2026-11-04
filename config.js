/* ============================================================================
   ICEBERG · LANDING ADOMTRA (República Dominicana) — CONFIGURACIÓN
   ----------------------------------------------------------------------------
   Edita SOLO este archivo para cambios normales. No hace falta tocar index.html.
   Guarda y recarga la página con Ctrl+Shift+R para ver los cambios.
   Los campos vacíos ("") simplemente NO se muestran en la página.
   ============================================================================ */
window.ICEBERG_CONFIG = {

  /* ---- Contacto ---- */
  whatsappNumber: "17867820215",              // formato internacional, solo dígitos: +1 (786) 782-0215
  emailPrimary:   "info@iceberg-refrigeration.com",
  emailAlberto:   "alberto@iceberg-refrigeration.com",
  phone:          "+13053632001",             // +1 (305) 363-2001

  /* ---- Mensajes de WhatsApp pre-escritos ----
     Cada botón abre WhatsApp con el mensaje ya escrito; el visitante solo
     tiene que enviarlo. Edítalos libremente. */
  waMessages: {
    // Botones generales (hero, pie de página, botón flotante)
    default: "Hola Iceberg, soy técnico/contratista de ADOMTRA en República Dominicana y me gustaría hablar con su equipo sobre equipos de refrigeración. Código: ADOMTRA2027",
    // Botón "Cotizar por WhatsApp"
    quote:   "Hola Iceberg, soy de ADOMTRA (República Dominicana) y quiero cotizar equipos de refrigeración. Código: ADOMTRA2027. Esta es mi lista:",
    // Botón "Repuestos"
    parts:   "Hola Iceberg, soy de ADOMTRA (República Dominicana) y necesito repuestos de refrigeración. Código: ADOMTRA2027. Esto es lo que busco:",
    // Botón "Tengo un proyecto"
    project: "Hola Iceberg, soy de ADOMTRA y tengo un proyecto de refrigeración o cuarto frío en República Dominicana. Código: ADOMTRA2027. Se los cuento:",
    // Botón "Cotizar KeepRite" (sección de marcas)
    keeprite: "Hola Iceberg, soy de ADOMTRA (República Dominicana) y quiero cotizar equipos KeepRite Refrigeration. Código: ADOMTRA2027. Esto es lo que necesito:",
    // Botón para agendar una llamada
    meet:    "Hola Iceberg, soy de ADOMTRA (República Dominicana) y me gustaría agendar una llamada o videollamada con su equipo."
  },

  /* ---- Calendario de Cal.com ----
     calLink: usuario/evento de Cal.com (lo que va después de cal.com/).
     Se muestra embebido en la sección "Agende una llamada".
     Vacío = se usa HubSpot (abajo) o, si tampoco hay, WhatsApp. */
  calcom: {
    calLink: "alberto-toledano/meeting"
  },

  /* ---- HubSpot (Hub ID 243983862, región na2) ----
     meetingUrl: pega aquí un enlace de HubSpot Meetings para este público
     (ej. https://meetings-na2.hubspot.com/alberto-toledano/adomtra).
     Vacío = en lugar del calendario se muestra un botón para agendar por WhatsApp. */
  hubspot: {
    portalId:   "243983862",
    region:     "na2",
    meetingUrl: ""
  },

  /* ---- Fondo del hero: fotos deslizándose ---- */
  heroMedia: {
    strip: [
      { src: "assets/hero/produce-cooler.jpg?v=5", alt: "Cuarto frío con evaporador sobre cajas de producto" },
      { src: "assets/hero/floral-cooler.jpg?v=4",  alt: "Cuarto frío con estantes y evaporador de techo" },
      { src: "assets/hero/freezer-cooler.jpg?v=5", alt: "Congelador walk-in con evaporador de tres ventiladores" }
    ]
  },

  /* ---- Folleto descargable (opcional) ---- */
  brochureUrl:   "",   // ej. "assets/iceberg-catalogo.pdf". Vacío = sin botón de descarga.
  brochureLabel: "Descargar catálogo",

  /* ---- Analítica / conversión ---- */
  // Conversión "Contacto" de Google Ads. Se dispara al hacer clic en WhatsApp,
  // al elegir un cliente de correo o al enviar el formulario. "" = desactivado.
  gtagConversionId: "AW-861651186/e5J4CLOg9dUcEPKB75oD"
};
