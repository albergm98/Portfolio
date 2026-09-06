import type {
  ContenidoFuente,
  ContenidoResuelto,
  ModoVisita,
} from '../tipos/contenido'
import { capaIngles, type Idioma } from './idioma'

/** Edita aquí perfil, trabajos, servicios y textos de cada modo (castellano). */
export const fuente: ContenidoFuente = {
  comun: {
    nombre: 'Alberto Gallardo',
    correo: 'gallardomorales.98@gmail.com',
    telefonoWhatsApp: '34678344983',
    logo: '/assets/img/logo.png',
    foto: '/assets/img/me.png',
    sociales: [
      { etiqueta: 'LinkedIn', url: 'https://www.linkedin.com/' },
      {
        etiqueta: 'CV',
        url: '/assets/img/pdf/CV.pdf',
        descargar: true,
      },
    ],
    habilidades: [
      {
        grupo: 'Backend',
        nivel: 5,
        items: ['Laravel', 'PHP', 'MySQL', 'CodeIgniter', 'Livewire', 'OpenAPI', 'APIs', 'Stripe'],
      },
      {
        grupo: 'Frontend',
        nivel: 4,
        items: [
          'React',
          'Vue.js',
          'JavaScript',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'Bootstrap',
          'WordPress',
        ],
      },
      {
        grupo: 'Infra y DevOps',
        nivel: 4,
        items: ['Git', 'Docker', 'Dokploy', 'Hostinger', 'AWS', 'Bitbucket'],
      },
      {
        grupo: 'Automatización',
        nivel: 4,
        items: ['n8n', 'Power Automate', 'Azure', 'Teams', 'Python', 'Bots Telegram'],
      },
      {
        grupo: 'Herramientas',
        nivel: 4,
        items: ['Cursor', 'Kiro', 'Jira', 'Scrum', 'Excel', 'Scripts CMD'],
      },
      {
        grupo: 'IA y producto',
        nivel: 3,
        items: [
          'Arquitectura full-stack',
          'Consumo de APIs',
          'Anthropic Claude',
          'Amazon Q',
          'Inglés B2',
        ],
      },
    ],
    experiencia: [
      {
        periodo: 'Ago 2026 — hoy',
        empresa: 'Freelance',
        puesto: 'Desarrollador full-stack',
        detalle:
          'Proyectos propios en paralelo al empleo: SaaS Carta Digitalizada, web El Bule con CMS, encargos de paneles y automatización.',
        rama: 'freelance',
      },
      {
        periodo: 'Sep 2025 — hoy',
        empresa: 'Dentsu Creative Spain',
        puesto: 'Data Management Developer',
        detalle:
          'Desarrollo web y datos en cuenta. Jira, Agile, bots y flujos en Power Automate sobre Azure, y avisos en Teams.',
        rama: 'dentsu',
      },
      {
        periodo: 'Ene 2024 — Sep 2025',
        empresa: 'Dentsu Creative Spain',
        puesto: 'Desarrollador web',
        detalle:
          'PHP, JavaScript y bases de datos para proyectos digitales de cliente, con entregas iterativas en equipo Agile.',
        rama: 'dentsu',
      },
      {
        periodo: 'Abr 2023 — Ene 2024',
        empresa: 'AKAYA SOLUTIONS · Kumobe',
        puesto: 'Desarrollador web',
        detalle:
          'Agencia partner: piezas web, integraciones y soporte a campañas con plazos de cliente.',
        rama: 'akaya',
      },
    ],
    estudios: [
      {
        periodo: 'Sep 2021 — Jun 2023',
        empresa: 'DAW',
        puesto: 'Desarrollo de Aplicaciones Web',
        detalle:
          'Ciclo formativo de grado superior: bases de datos, backend, frontend y despliegue de aplicaciones web.',
        rama: 'daw',
      },
    ],
  },
  puerta: {
    titulo: '¿Cómo quieres verme?',
    apoyo: 'Elige el contexto y te muestro el contenido que encaja.',
    trabajador: {
      etiqueta: 'Trabajador',
      apoyo: 'Stack, experiencia y cuentas en las que he aportado en equipo.',
    },
    freelance: {
      etiqueta: 'Freelance',
      apoyo: 'Proyectos propios, clientes y encargos a medida.',
    },
  },
  modos: {
    trabajador: {
      rol: 'Desarrollador Full-Stack',
      frase:
        'APIs, datos e interfaces en producción. Laravel, React y MySQL. Entrego código claro que el equipo y el negocio puedan seguir.',
      navegacion: [
        { etiqueta: 'Trabajos', ancla: '#trabajos' },
        { etiqueta: 'Stack', ancla: '#habilidades' },
        { etiqueta: 'Experiencia', ancla: '#experiencia' },
        { etiqueta: 'Estudios', ancla: '#estudios' },
        { etiqueta: 'Contacto', ancla: '#contacto' },
      ],
      /** Proyectos de cuenta / empleo (distintos del modo freelance). */
      trabajos: [
        {
          id: 'chat-tmt',
          titulo: 'Chat TMT',
          resumen:
            'IA que estudia el contenido del proyecto TMT y guía a los usuarios en normas y uso de la plataforma, con respuestas ancladas a la documentación interna.',
          etiquetas: ['IA', 'Conocimiento', 'Interno'],
          cliente: 'MásOrange',
          imagen: '/assets/img/chattmt.png',
        },
        {
          id: 'time-to-win',
          titulo: 'Time to Win',
          resumen:
            'Plataforma de incentivos para comerciales: contabiliza ventas y reparte el dinero cada mes a través de la API de Chequemotiva.',
          etiquetas: ['Incentivos', 'API', 'Chequemotiva'],
          cliente: 'MásOrange',
          imagen: '/assets/img/timetowin.png',
        },
        {
          id: 'b2b-bt',
          titulo: 'B2B / BT',
          resumen:
            'Misma plataforma con distinto estilo para gestionar documentación interna de Orange: B2B para grandes empresas y BT para pymes.',
          etiquetas: ['Documentación', 'Orange', 'Interno'],
          cliente: 'MásOrange',
          imagen: '/assets/img/b2b_bt.png',
        },
        {
          id: 'dentsu-hub',
          titulo: 'Dentsu Hub',
          resumen:
            'Espacio personal que agrupé para tener a mano Jira, correo, Jenkins, Teams, Bitbucket, enlaces útiles y archivos .bat en un solo sitio.',
          etiquetas: ['Hub', 'Productividad', 'Interno'],
          cliente: 'Dentsu',
          imagen: '/assets/img/dentsu_hub.png',
        },
        {
          id: 'zeroscan',
          titulo: 'ZeroScan',
          resumen:
            'Herramienta para ISDIN que automatiza y valida la nomenclatura de piezas (banners, newsletters, TH/PDP/MI) antes de subirlas a su herramienta interna, donde un nombre incorrecto hace fallar la carga.',
          etiquetas: ['ISDIN', 'Automatización', 'Nomenclatura'],
          cliente: 'ISDIN',
          imagen: '/assets/img/zeroscan.png',
        },
        {
          id: 'merchandising',
          titulo: 'Merchandising',
          resumen:
            'Catálogo interno para solicitar productos de regalo a clientes: el comercial elige piezas y stock, y el pedido queda pendiente de la aprobación del superior.',
          etiquetas: ['Catálogo', 'Aprobaciones', 'Interno'],
          cliente: 'MásOrange',
          imagen: '/assets/img/merchandising.png',
        },
        {
          id: 'hospitalities',
          titulo: 'Hospitalities',
          resumen:
            'Plataforma de Orange para gestionar entradas a eventos e invitar a clientes: calendario, disponibilidad y solicitudes con seguimiento.',
          etiquetas: ['Eventos', 'Entradas', 'Clientes'],
          cliente: 'MásOrange',
          imagen: '/assets/img/hospitalities.png',
        },
      ],
      servicios: [],
      marcas: [
        {
          nombre: 'MásOrange',
          imagen: '/assets/img/marcas/masorange.svg',
        },
        {
          nombre: 'Dentsu',
          imagen: '/assets/img/marcas/dentsu.svg',
        },
        {
          nombre: 'Endesa',
          imagen: '/assets/img/marcas/endesa.svg',
        },
        {
          nombre: 'CaixaBank',
          imagen: '/assets/img/marcas/caixabank.svg',
        },
        {
          nombre: 'ISDIN',
          imagen: '/assets/img/marcas/isdin.svg',
        },
        {
          nombre: 'TLC',
          imagen: '/assets/img/marcas/tlc.png',
        },
        {
          nombre: 'Chequemotiva',
          imagen: '/assets/img/marcas/chequemotiva.svg',
        },
      ],
      textos: {
        ctaPresupuesto: 'Contactar',
        ctaTrabajos: 'Ver experiencia',
        pie: 'Collado Villalba · híbrido o remoto',
        trabajosEyebrow: 'Proyectos',
        trabajosTitulo: 'Qué he construido en equipo',
        trabajosApoyo: 'Piezas y entregas en cuentas de cliente.',
        stackEyebrow: 'Stack',
        stackTitulo: 'Con qué puedo aportaros',
        stackApoyo:
          'Laravel, React y MySQL en el núcleo. El resto, agrupado por área para encajar en vuestro equipo.',
        serviciosEyebrow: '',
        serviciosTitulo: '',
        serviciosApoyo: '',
        experienciaEyebrow: 'Laboral',
        experienciaTitulo: 'Experiencia profesional',
        marcasApoyo: 'Cuentas y marcas con las que he trabajado',
        estudiosEyebrow: 'Formación',
        estudiosTitulo: 'Estudios',
        contactoEyebrow: 'Contacto',
        contactoTitulo: 'Hablemos cuando quieras',
        contactoApoyo:
          'Email o WhatsApp. Cuéntame el contexto y te respondo con calma, sin formularios eternos.',
        heroAsideEyebrow: 'Experiencia',
        heroAsideTitulo: '+3 años',
        heroAsideDetalle: 'En desarrollo full-stack',
        asuntoContacto: 'Conversación — Alberto Gallardo',
        mensajeWhatsApp:
          'Hola Alberto, te escribo para hablar de un posible encaje. ¿Tienes un momento esta semana?',
      },
      secciones: {
        trabajos: true,
        servicios: false,
        habilidades: true,
        marcas: true,
      },
    },
    freelance: {
      rol: 'Desarrollador Full-Stack',
      frase:
        'Webs, paneles y automatización a medida. Alcance, plazo y precio claros antes de empezar.',
      navegacion: [
        { etiqueta: 'Trabajos', ancla: '#trabajos' },
        { etiqueta: 'Stack', ancla: '#habilidades' },
        { etiqueta: 'Servicios', ancla: '#servicios' },
        { etiqueta: 'Experiencia', ancla: '#experiencia' },
        { etiqueta: 'Estudios', ancla: '#estudios' },
        { etiqueta: 'Contacto', ancla: '#contacto' },
      ],
      trabajos: [
        {
          id: 'card-trade',
          titulo: 'Card Trade',
          resumen:
            'Landing HTML/CSS para un concurso freelance: marca Card Trade, captación y storytelling de una app de intercambio seguro de cartas sin comisiones de marketplace.',
          etiquetas: ['Landing', 'HTML/CSS', 'Concurso'],
          imagen: '/assets/img/concurso.png',
          fecha: 'Septiembre 2026',
          urlDemo: '/trabajos/card-trade/index.html',
        },
        {
          id: 'el-bule',
          titulo: 'El Bule',
          resumen:
            'Web del gastro cocktail bar de Logroño. El local edita carta, textos e imágenes desde un panel propio, sin depender de un técnico para cada cambio.',
          etiquetas: ['Laravel', 'Panel admin', 'Hostelería'],
          imagen: '/assets/img/elbule.png',
          fecha: 'Agosto 2026',
          urlDemo: 'https://el-bule.com',
        },
        {
          id: 'carta-digitalizada',
          titulo: 'CartaDigitalizada',
          resumen:
            'SaaS en Laravel y MySQL con Stripe. El restaurante crea la carta, la actualiza al momento y la comparte por enlace o QR. Planes de gratis a premium, con panel y plantillas para autoadministrarse.',
          etiquetas: ['Laravel', 'MySQL', 'Stripe', 'SaaS'],
          imagen: '/assets/img/cartadigitalizada.png',
          fecha: 'Marzo 2026',
          urlDemo: 'https://cartadigitalizada.es/',
        },
      ],
      servicios: [
        {
          titulo: 'Webs y landings',
          resumen:
            'Sitios de marca o captación con Laravel o React. Entrega usable y panel si el cliente tiene que editar contenido.',
        },
        {
          titulo: 'Automatización',
          resumen:
            'Flujos con n8n, Power Automate o integraciones a medida. Menos trabajo manual y datos que llegan a tiempo.',
        },
        {
          titulo: 'Paneles y herramientas internas',
          resumen:
            'Apps para gestionar carta, inventario, reservas o datos de equipo. Priorizo que el usuario final se valga solo.',
        },
        {
          titulo: 'Mejoras sobre lo existente',
          resumen:
            'Rendimiento, APIs, rediseño o funciones nuevas en PHP y JavaScript sin rehacer todo desde cero.',
        },
      ],
      marcas: [
        {
          nombre: 'El Bule',
          imagen: '/assets/img/marcas/elbule.png',
        },
        {
          nombre: 'CartaDigitalizada',
          imagen: '/assets/img/marcas/cartadigitalizada.png',
        },
      ],
      textos: {
        ctaPresupuesto: 'Pedir presupuesto',
        ctaTrabajos: 'Ver proyectos',
        pie: 'Collado Villalba · encargos freelance',
        trabajosEyebrow: 'Proyectos',
        trabajosTitulo: 'Qué he construido',
        trabajosApoyo: 'Producto propio y clientes reales.',
        stackEyebrow: 'Stack',
        stackTitulo: 'Con qué trabajo',
        stackApoyo: 'Laravel, React y MySQL en el núcleo. El resto, agrupado por área.',
        serviciosEyebrow: 'Freelance',
        serviciosTitulo: 'Qué puedo hacerte',
        serviciosApoyo:
          'Sin paquetes cerrados. Me dices el objetivo y te digo alcance, plazo y precio.',
        experienciaEyebrow: 'Laboral',
        experienciaTitulo: 'Experiencia profesional',
        marcasApoyo: 'Clientes para los que he trabajado',
        estudiosEyebrow: 'Formación',
        estudiosTitulo: 'Estudios',
        contactoEyebrow: 'Contacto',
        contactoTitulo: 'Cuéntame el proyecto',
        contactoApoyo:
          'Dime qué necesitas y te digo alcance, plazo y precio. Email o WhatsApp, lo que te venga mejor.',
        heroAsideEyebrow: 'Experiencia',
        heroAsideTitulo: '+3 años',
        heroAsideDetalle: 'En desarrollo full-stack',
        asuntoContacto: 'Consulta freelance — Alberto Gallardo',
        mensajeWhatsApp:
          'Hola Alberto, te escribo por un encargo de web, panel o automatización. ¿Tienes hueco para hablar del alcance?',
      },
      secciones: {
        trabajos: true,
        servicios: true,
        habilidades: true,
        marcas: true,
      },
    },
  },
}

export const obtenerContenido = (
  modo: ModoVisita,
  idioma: Idioma = 'es',
): ContenidoResuelto => {
  const { comun } = fuente
  const variante = fuente.modos[modo]
  const base: ContenidoResuelto = {
    perfil: {
      nombre: comun.nombre,
      correo: comun.correo,
      telefonoWhatsApp: comun.telefonoWhatsApp,
      logo: comun.logo,
      foto: comun.foto,
      rol: variante.rol,
      frase: variante.frase,
    },
    navegacion: variante.navegacion,
    sociales: comun.sociales,
    trabajos: variante.trabajos,
    servicios: variante.servicios,
    habilidades: comun.habilidades,
    marcas: variante.marcas,
    experiencia: comun.experiencia,
    estudios: comun.estudios,
    textos: variante.textos,
    secciones: variante.secciones,
  }

  if (idioma === 'es') return base

  const en = capaIngles.modos[modo]
  return {
    ...base,
    perfil: {
      ...base.perfil,
      rol: en.rol,
      frase: en.frase,
    },
    navegacion: en.navegacion,
    sociales: capaIngles.sociales,
    habilidades: capaIngles.habilidades,
    experiencia: capaIngles.experiencia,
    estudios: capaIngles.estudios,
    textos: en.textos,
    trabajos: base.trabajos.map((trabajo) => {
      const trad = en.trabajos?.[trabajo.id]
      if (!trad) return trabajo
      return { ...trabajo, ...trad }
    }),
    servicios: en.servicios ?? base.servicios,
  }
}

export const obtenerEtiquetaModo = (
  modo: ModoVisita,
  idioma: Idioma,
): string =>
  idioma === 'en' ? capaIngles.puerta[modo] : fuente.puerta[modo].etiqueta

export const crearEnlacePresupuesto = (
  correo: string,
  asunto: string,
): string => `mailto:${correo}?subject=${encodeURIComponent(asunto)}`

export const crearEnlaceWhatsApp = (
  telefonoWhatsApp: string,
  mensaje: string,
): string =>
  `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`
