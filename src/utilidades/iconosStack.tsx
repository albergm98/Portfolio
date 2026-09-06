import type { IconType } from 'react-icons'
import { BiLogoAws, BiLogoMicrosoftTeams } from 'react-icons/bi'
import { RiFileExcel2Fill } from 'react-icons/ri'
import {
  SiAnthropic,
  SiBitbucket,
  SiBootstrap,
  SiClaude,
  SiCodeigniter,
  SiCss,
  SiCursor,
  SiDocker,
  SiGit,
  SiHostinger,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLaravel,
  SiLivewire,
  SiMysql,
  SiN8N,
  SiOpenapiinitiative,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTelegram,
  SiVuedotjs,
  SiWordpress,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import {
  Code2,
  Languages,
  Layers,
  Plug,
  Sparkles,
  Terminal,
  Users,
  Workflow,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

type IconoStack = IconType | ComponentType<SVGProps<SVGSVGElement>>

const lucide =
  (Icono: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>) =>
  ({ className }: { className?: string }) => (
    <Icono className={className} aria-hidden />
  )

const mapa: Record<string, IconoStack> = {
  Laravel: SiLaravel,
  PHP: SiPhp,
  MySQL: SiMysql,
  CodeIgniter: SiCodeigniter,
  Livewire: SiLivewire,
  OpenAPI: SiOpenapiinitiative,
  APIs: SiPostman,
  Stripe: SiStripe,
  React: SiReact,
  'Vue.js': SiVuedotjs,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  'Tailwind CSS': SiTailwindcss,
  Bootstrap: SiBootstrap,
  WordPress: SiWordpress,
  Git: SiGit,
  Docker: SiDocker,
  Dokploy: SiDocker,
  Hostinger: SiHostinger,
  AWS: BiLogoAws,
  Bitbucket: SiBitbucket,
  n8n: SiN8N,
  'Power Automate': lucide(Workflow),
  Azure: VscAzure,
  Teams: BiLogoMicrosoftTeams,
  Python: SiPython,
  Cursor: SiCursor,
  Kiro: lucide(Sparkles),
  Jira: SiJira,
  Scrum: lucide(Users),
  Excel: RiFileExcel2Fill,
  'Scripts CMD': lucide(Terminal),
  'Bots Telegram': SiTelegram,
  'Arquitectura full-stack': lucide(Layers),
  'Consumo de APIs': lucide(Plug),
  'Anthropic Claude': SiClaude,
  'Amazon Q': SiAnthropic,
  'Inglés B2': lucide(Languages),
}

export const iconoTecnologia = (nombre: string): IconoStack =>
  mapa[nombre] ?? lucide(Code2)

export const propsIconoTech = {
  className: 'size-3.5 shrink-0',
  'aria-hidden': true as const,
}
