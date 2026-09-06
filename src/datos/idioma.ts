import type {
  EnlaceNavegacion,
  Habilidad,
  Hito,
  ModoVisita,
  Servicio,
  TextosContenido,
  Trabajo,
} from '../tipos/contenido'

export type Idioma = 'es' | 'en'

/** Logos del filtro de trabajos (modo trabajador); pensados para fondo oscuro. */
export const logoCliente: Record<string, string> = {
  MásOrange: '/assets/img/marcas/masorange.svg',
  ISDIN: '/assets/img/marcas/isdin.svg',
  Dentsu: '/assets/img/marcas/dentsu.svg',
}

export const textosInterfaz = {
  es: {
    modoVisita: 'Modo de visita',
    idioma: 'Idioma',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
    navPrincipal: 'Principal',
    navMovil: 'Móvil',
    email: 'Email',
    tambienEn: 'También en',
    whatsapp: 'WhatsApp',
    verProyecto: 'Ver proyecto',
    verDetalle: 'ver detalle',
    verImagen: 'Ver imagen',
    cerrarImagen: 'Cerrar imagen',
    filtrarCliente: 'Filtrar por cliente',
    todasLasMarcas: 'Todas',
    enTotal: 'en total',
    production: 'production',
    formacion: 'formación',
    niveles: {
      1: 'Básico',
      2: 'Medio',
      3: 'Sólido',
      4: 'Avanzado',
      5: 'Dominio',
    } as Record<number, string>,
  },
  en: {
    modoVisita: 'Visit mode',
    idioma: 'Language',
    abrirMenu: 'Open menu',
    cerrarMenu: 'Close menu',
    navPrincipal: 'Primary',
    navMovil: 'Mobile',
    email: 'Email',
    tambienEn: 'Also on',
    whatsapp: 'WhatsApp',
    verProyecto: 'View project',
    verDetalle: 'view details',
    verImagen: 'View image',
    cerrarImagen: 'Close image',
    filtrarCliente: 'Filter by client',
    todasLasMarcas: 'All',
    enTotal: 'total',
    production: 'production',
    formacion: 'education',
    niveles: {
      1: 'Basic',
      2: 'Intermediate',
      3: 'Solid',
      4: 'Advanced',
      5: 'Expert',
    } as Record<number, string>,
  },
} as const

export type CapaModoEn = {
  rol: string
  frase: string
  navegacion: EnlaceNavegacion[]
  textos: TextosContenido
  trabajos?: Record<string, Pick<Trabajo, 'resumen' | 'etiquetas' | 'fecha'>>
  servicios?: Servicio[]
}

export const capaIngles = {
  puerta: {
    trabajador: 'Employee',
    freelance: 'Freelance',
  },
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
      grupo: 'Infra & DevOps',
      nivel: 4,
      items: ['Git', 'Docker', 'Dokploy', 'Hostinger', 'AWS', 'Bitbucket'],
    },
    {
      grupo: 'Automation',
      nivel: 4,
      items: ['n8n', 'Power Automate', 'Azure', 'Teams', 'Python', 'Telegram bots'],
    },
    {
      grupo: 'Tools',
      nivel: 4,
      items: ['Cursor', 'Kiro', 'Jira', 'Scrum', 'Excel', 'CMD scripts'],
    },
    {
      grupo: 'AI & product',
      nivel: 3,
      items: [
        'Full-stack architecture',
        'API consumption',
        'Anthropic Claude',
        'Amazon Q',
        'English B2',
      ],
    },
  ] satisfies Habilidad[],
  experiencia: [
    {
      periodo: 'Aug 2026 — today',
      empresa: 'Freelance',
      puesto: 'Full-stack developer',
      detalle:
        'Side projects alongside employment: Carta Digitalizada SaaS, El Bule website with CMS, panel and automation work.',
      rama: 'freelance',
    },
    {
      periodo: 'Sep 2025 — today',
      empresa: 'Dentsu Creative Spain',
      puesto: 'Data Management Developer',
      detalle:
        'Web and data work on client accounts. Jira, Agile, bots and Power Automate flows on Azure, plus Teams alerts.',
      rama: 'dentsu',
    },
    {
      periodo: 'Jan 2024 — Sep 2025',
      empresa: 'Dentsu Creative Spain',
      puesto: 'Web developer',
      detalle:
        'PHP, JavaScript and databases for client digital projects, with iterative delivery in an Agile team.',
      rama: 'dentsu',
    },
    {
      periodo: 'Apr 2023 — Jan 2024',
      empresa: 'AKAYA SOLUTIONS · Kumobe',
      puesto: 'Web developer',
      detalle:
        'Partner agency: web pieces, integrations and campaign support under client deadlines.',
      rama: 'akaya',
    },
  ] satisfies Hito[],
  estudios: [
    {
      periodo: 'Sep 2021 — Jun 2023',
      empresa: 'DAW',
      puesto: 'Web Application Development',
      detalle:
        'Higher vocational training: databases, backend, frontend and web app deployment.',
      rama: 'daw',
    },
  ] satisfies Hito[],
  modos: {
    trabajador: {
      rol: 'Full-Stack Developer',
      frase:
        'APIs, data and UIs in production. Laravel, React and MySQL. I ship clear code teams and businesses can keep building on.',
      navegacion: [
        { etiqueta: 'Work', ancla: '#trabajos' },
        { etiqueta: 'Stack', ancla: '#habilidades' },
        { etiqueta: 'Experience', ancla: '#experiencia' },
        { etiqueta: 'Education', ancla: '#estudios' },
        { etiqueta: 'Contact', ancla: '#contacto' },
      ],
      textos: {
        ctaPresupuesto: 'Contact',
        ctaTrabajos: 'View experience',
        pie: 'Collado Villalba · hybrid or remote',
        trabajosEyebrow: 'Projects',
        trabajosTitulo: 'What I have built in teams',
        trabajosApoyo: 'Pieces and deliveries on client accounts.',
        stackEyebrow: 'Stack',
        stackTitulo: 'What I can bring',
        stackApoyo:
          'Laravel, React and MySQL at the core. The rest grouped by area to fit your team.',
        serviciosEyebrow: '',
        serviciosTitulo: '',
        serviciosApoyo: '',
        experienciaEyebrow: 'Career',
        experienciaTitulo: 'Professional experience',
        marcasApoyo: 'Accounts and brands I have worked with',
        estudiosEyebrow: 'Education',
        estudiosTitulo: 'Studies',
        contactoEyebrow: 'Contact',
        contactoTitulo: 'Let us talk whenever you want',
        contactoApoyo:
          'Email or WhatsApp. Share the context and I will reply calmly, no endless forms.',
        heroAsideEyebrow: 'Experience',
        heroAsideTitulo: '+3 years',
        heroAsideDetalle: 'In full-stack development',
        asuntoContacto: 'Conversation — Alberto Gallardo',
        mensajeWhatsApp:
          'Hi Alberto, I am reaching out about a possible fit. Do you have time this week?',
      },
      trabajos: {
        'chat-tmt': {
          resumen:
            'AI that studies the TMT project content and guides users on rules and platform usage, with answers grounded in internal documentation.',
          etiquetas: ['AI', 'Knowledge', 'Internal'],
        },
        'time-to-win': {
          resumen:
            'Sales incentive platform: it tracks commercial sales and pays out monthly through the Chequemotiva API.',
          etiquetas: ['Incentives', 'API', 'Chequemotiva'],
        },
        'b2b-bt': {
          resumen:
            'Same platform with a different look for Orange internal documentation: B2B for large companies and BT for SMEs.',
          etiquetas: ['Documentation', 'Orange', 'Internal'],
        },
        'dentsu-hub': {
          resumen:
            'Personal workspace I built to keep Jira, email, Jenkins, Teams, Bitbucket, useful links and .bat files in one place.',
          etiquetas: ['Hub', 'Productivity', 'Internal'],
        },
        zeroscan: {
          resumen:
            'Tool for ISDIN that automates and validates asset naming (banners, newsletters, TH/PDP/MI) before upload to their internal system, where a wrong name breaks the load.',
          etiquetas: ['ISDIN', 'Automation', 'Naming'],
        },
        merchandising: {
          resumen:
            'Internal catalogue to request client gifts: the sales rep picks items and stock, and the order waits for manager approval.',
          etiquetas: ['Catalogue', 'Approvals', 'Internal'],
        },
        hospitalities: {
          resumen:
            'Orange platform to manage event tickets and invite clients: calendar, availability and requests with follow-up.',
          etiquetas: ['Events', 'Tickets', 'Clients'],
        },
      },
    },
    freelance: {
      rol: 'Full-Stack Developer',
      frase:
        'Custom websites, dashboards and automation. Clear scope, timeline and price before we start.',
      navegacion: [
        { etiqueta: 'Work', ancla: '#trabajos' },
        { etiqueta: 'Stack', ancla: '#habilidades' },
        { etiqueta: 'Services', ancla: '#servicios' },
        { etiqueta: 'Experience', ancla: '#experiencia' },
        { etiqueta: 'Education', ancla: '#estudios' },
        { etiqueta: 'Contact', ancla: '#contacto' },
      ],
      textos: {
        ctaPresupuesto: 'Request a quote',
        ctaTrabajos: 'View projects',
        pie: 'Collado Villalba · freelance work',
        trabajosEyebrow: 'Projects',
        trabajosTitulo: 'What I have built',
        trabajosApoyo: 'Own product and real clients.',
        stackEyebrow: 'Stack',
        stackTitulo: 'What I work with',
        stackApoyo:
          'Laravel, React and MySQL at the core. The rest grouped by area.',
        serviciosEyebrow: 'Freelance',
        serviciosTitulo: 'What I can do for you',
        serviciosApoyo:
          'No fixed packages. Tell me the goal and I will outline scope, timeline and price.',
        experienciaEyebrow: 'Career',
        experienciaTitulo: 'Professional experience',
        marcasApoyo: 'Clients I have worked with',
        estudiosEyebrow: 'Education',
        estudiosTitulo: 'Studies',
        contactoEyebrow: 'Contact',
        contactoTitulo: 'Tell me about the project',
        contactoApoyo:
          'Tell me what you need and I will outline scope, timeline and price. Email or WhatsApp, whichever works best.',
        heroAsideEyebrow: 'Experience',
        heroAsideTitulo: '+3 years',
        heroAsideDetalle: 'In full-stack development',
        asuntoContacto: 'Freelance enquiry — Alberto Gallardo',
        mensajeWhatsApp:
          'Hi Alberto, I am writing about a website, dashboard or automation project. Do you have time to discuss scope?',
      },
      trabajos: {
        'card-trade': {
          resumen:
            'HTML/CSS landing for a freelance contest: Card Trade branding, acquisition and storytelling for a secure card-trading app without marketplace fees.',
          etiquetas: ['Landing', 'HTML/CSS', 'Contest'],
          fecha: 'September 2026',
        },
        'el-bule': {
          resumen:
            'Website for a gastro cocktail bar in Logroño. The venue edits the menu, copy and images from its own panel, without needing a developer for every change.',
          etiquetas: ['Laravel', 'Admin panel', 'Hospitality'],
          fecha: 'August 2026',
        },
        'carta-digitalizada': {
          resumen:
            'Laravel and MySQL SaaS with Stripe. Restaurants create the menu, update it live and share it by link or QR. Free to premium plans, with a self-serve panel and templates.',
          etiquetas: ['Laravel', 'MySQL', 'Stripe', 'SaaS'],
          fecha: 'March 2026',
        },
      },
      servicios: [
        {
          titulo: 'Websites and landings',
          resumen:
            'Brand or lead-gen sites with Laravel or React. Usable delivery and an admin panel when the client needs to edit content.',
        },
        {
          titulo: 'Automation',
          resumen:
            'Flows with n8n, Power Automate or custom integrations. Less manual work and data that arrives on time.',
        },
        {
          titulo: 'Dashboards and internal tools',
          resumen:
            'Apps to manage menus, inventory, bookings or team data. I prioritize tools end users can run themselves.',
        },
        {
          titulo: 'Improvements on existing systems',
          resumen:
            'Performance, APIs, redesign or new features in PHP and JavaScript without rebuilding everything from scratch.',
        },
      ],
    },
  } as Record<ModoVisita, CapaModoEn>,
}
