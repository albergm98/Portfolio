import { createElement, type ComponentType } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  FileText,
  FolderKanban,
  Globe,
  Layers,
  LayoutDashboard,
  Link2,
  Mail,
  Menu,
  MessageCircle,
  Server,
  Sparkles,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

/** Props comunes Lucide en la UI del portfolio. */
export const propsIcono = {
  className: 'size-4 shrink-0',
  strokeWidth: 1.75,
  'aria-hidden': true as const,
}

export const propsIconoMd = {
  className: 'size-5 shrink-0',
  strokeWidth: 1.75,
  'aria-hidden': true as const,
}

export const propsIconoLg = {
  className: 'size-7 shrink-0',
  strokeWidth: 1.5,
  'aria-hidden': true as const,
}

type PropsMarca = { className?: string }

/** Marca LinkedIn (Lucide ya no exporta iconos de marca). */
export const IconoLinkedIn = ({ className }: PropsMarca) =>
  createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      className: className ?? 'size-4 shrink-0',
      'aria-hidden': true,
    },
    createElement('path', {
      d: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z',
    }),
  )

import { Expand } from 'lucide-react'

export const IconoCorreo = Mail
export const IconoWhatsApp = MessageCircle
export const IconoMenu = Menu
export const IconoCerrar = X
export const IconoModoFreelance = Briefcase
export const IconoModoTrabajador = Code2
export const IconoProyecto = ArrowUpRight
export const IconoAmpliar = Expand
export const IconoStack = Layers
export const IconoTrabajos = FolderKanban

type IconoUi = LucideIcon | ComponentType<PropsMarca>

const sociales: Record<string, IconoUi> = {
  LinkedIn: IconoLinkedIn,
  CV: FileText,
  'CV online': FileText,
  'Online CV': FileText,
}

export const iconoSocial = (etiqueta: string): IconoUi =>
  sociales[etiqueta] ?? Link2

const servicios: Record<string, LucideIcon> = {
  'Webs y landings': Globe,
  'Websites and landings': Globe,
  Automatización: Zap,
  Automation: Zap,
  'Paneles y herramientas internas': LayoutDashboard,
  'Dashboards and internal tools': LayoutDashboard,
  'Mejoras sobre lo existente': Wrench,
  'Improvements on existing systems': Wrench,
}

export const iconoServicio = (titulo: string): LucideIcon =>
  servicios[titulo] ?? Sparkles

const habilidades: Record<string, LucideIcon> = {
  Backend: Server,
  Frontend: LayoutDashboard,
  'Infra y DevOps': Layers,
  'Infra & DevOps': Layers,
  Automatización: Zap,
  Automation: Zap,
  Herramientas: Wrench,
  Tools: Wrench,
  'IA y producto': Sparkles,
  'AI & product': Sparkles,
}

export const iconoHabilidad = (grupo: string): LucideIcon =>
  habilidades[grupo] ?? Code2
