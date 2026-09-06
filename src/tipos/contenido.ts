export type ModoVisita = 'trabajador' | 'freelance'

export type EnlaceNavegacion = {
  etiqueta: string
  ancla: string
}

export type EnlaceSocial = {
  etiqueta: string
  url: string
  /** Si es true, el enlace descarga el archivo en lugar de abrirlo */
  descargar?: boolean
}

export type Trabajo = {
  id: string
  titulo: string
  resumen: string
  etiquetas: string[]
  /** Marca / cliente de cuenta (filtro en modo trabajador) */
  cliente?: string
  /** Ruta pública, p. ej. `/assets/img/elbule.png` */
  imagen?: string
  fecha?: string
  urlDemo?: string
  urlRepo?: string
}

export type Servicio = {
  titulo: string
  resumen: string
}

export type Habilidad = {
  grupo: string
  /** Nivel 1 a 5: básico a dominio */
  nivel: number
  items: string[]
}

export type Marca = {
  nombre: string
  /** Ruta pública del logo, p. ej. `/assets/img/marcas/orange.svg` */
  imagen?: string
  /** Si es true (por defecto), el logo se fuerza a blanco sobre fondo oscuro */
  monocromo?: boolean
  /** Marco circular sin recortar el contenido (object-contain) */
  redonda?: boolean
}

export type Hito = {
  periodo: string
  empresa: string
  puesto: string
  detalle: string
  /** Rama visual tipo git, p. ej. freelance o dentsu */
  rama?: string
}

export type TextosContenido = {
  ctaPresupuesto: string
  ctaTrabajos: string
  pie: string
  trabajosEyebrow: string
  trabajosTitulo: string
  trabajosApoyo: string
  stackEyebrow: string
  stackTitulo: string
  stackApoyo: string
  serviciosEyebrow: string
  serviciosTitulo: string
  serviciosApoyo: string
  experienciaEyebrow: string
  experienciaTitulo: string
  marcasApoyo: string
  estudiosEyebrow: string
  estudiosTitulo: string
  contactoEyebrow: string
  contactoTitulo: string
  contactoApoyo: string
  /** Bloque derecho del hero */
  heroAsideEyebrow: string
  heroAsideTitulo: string
  heroAsideDetalle: string
  /** Asunto mailto del CTA principal */
  asuntoContacto: string
  /** Mensaje WhatsApp del bloque de contacto */
  mensajeWhatsApp: string
}

export type SeccionesModo = {
  trabajos: boolean
  servicios: boolean
  habilidades: boolean
  marcas: boolean
}

export type ContenidoResuelto = {
  perfil: {
    nombre: string
    rol: string
    frase: string
    correo: string
    telefonoWhatsApp: string
    /** Logo de marca (PNG transparente) */
    logo?: string
    /** Foto de perfil (PNG transparente) */
    foto?: string
  }
  navegacion: EnlaceNavegacion[]
  sociales: EnlaceSocial[]
  trabajos: Trabajo[]
  servicios: Servicio[]
  habilidades: Habilidad[]
  marcas: Marca[]
  experiencia: Hito[]
  estudios: Hito[]
  textos: TextosContenido
  secciones: SeccionesModo
}

export type VarianteModo = {
  rol: string
  frase: string
  navegacion: EnlaceNavegacion[]
  trabajos: Trabajo[]
  servicios: Servicio[]
  marcas: Marca[]
  textos: TextosContenido
  secciones: SeccionesModo
}

export type ContenidoFuente = {
  comun: {
    nombre: string
    correo: string
    telefonoWhatsApp: string
    logo?: string
    foto?: string
    sociales: EnlaceSocial[]
    habilidades: Habilidad[]
    experiencia: Hito[]
    estudios: Hito[]
  }
  modos: Record<ModoVisita, VarianteModo>
  puerta: {
    titulo: string
    apoyo: string
    trabajador: { etiqueta: string; apoyo: string }
    freelance: { etiqueta: string; apoyo: string }
  }
}
