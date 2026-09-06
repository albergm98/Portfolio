import { createElement, useState } from 'react'
import { obtenerEtiquetaModo } from '../datos/contenido'
import { textosInterfaz, type Idioma } from '../datos/idioma'
import { usarContenido, usarModoVisita } from '../contexto/ModoVisita'
import type { ModoVisita } from '../tipos/contenido'
import { clases } from '../utilidades/clases'
import { IconoCerrar, IconoMenu, propsIcono } from '../utilidades/iconos'

const modos: ModoVisita[] = ['trabajador', 'freelance']
const iconoMenu = { ...propsIcono, size: 18 }
const cajaFlotante =
  'rounded-full border border-papel/35 bg-tinta shadow-[0_10px_40px_rgb(0_0_0/0.35)]'

const BanderaEspana = ({ className }: { className?: string }) =>
  createElement(
    'svg',
    {
      viewBox: '0 0 24 16',
      className: className ?? 'h-3.5 w-5',
      'aria-hidden': true,
    },
    createElement('rect', { width: '24', height: '16', fill: '#AA151B' }),
    createElement('rect', { y: '4', width: '24', height: '8', fill: '#F1BF00' }),
  )

const BanderaReinoUnido = ({ className }: { className?: string }) =>
  createElement(
    'svg',
    {
      viewBox: '0 0 24 16',
      className: className ?? 'h-3.5 w-5',
      'aria-hidden': true,
    },
    createElement('rect', { width: '24', height: '16', fill: '#012169' }),
    createElement('path', {
      d: 'M0 0 L24 16 M24 0 L0 16',
      stroke: '#fff',
      strokeWidth: '3',
    }),
    createElement('path', {
      d: 'M0 0 L24 16 M24 0 L0 16',
      stroke: '#C8102E',
      strokeWidth: '1.5',
    }),
    createElement('path', {
      d: 'M12 0 V16 M0 8 H24',
      stroke: '#fff',
      strokeWidth: '5',
    }),
    createElement('path', {
      d: 'M12 0 V16 M0 8 H24',
      stroke: '#C8102E',
      strokeWidth: '3',
    }),
  )

const iconoIdioma: Record<Idioma, typeof BanderaEspana> = {
  es: BanderaEspana,
  en: BanderaReinoUnido,
}

const etiquetaIdioma: Record<Idioma, string> = {
  es: 'Español',
  en: 'English',
}

export const Cabecera = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const { perfil, navegacion } = usarContenido()
  const { modo, idioma, cambiarModo, cambiarIdioma } = usarModoVisita()
  const ui = textosInterfaz[idioma]
  const siguienteIdioma: Idioma = idioma === 'es' ? 'en' : 'es'
  const IconoIdioma = iconoIdioma[siguienteIdioma]

  const handleCerrarMenu = () => setMenuAbierto(false)
  const handleAlternarMenu = () => setMenuAbierto((abierto) => !abierto)
  const handleElegirModo = (siguiente: ModoVisita) => () => {
    cambiarModo(siguiente)
    setMenuAbierto(false)
  }
  const handleCambiarIdioma = () => {
    cambiarIdioma(siguienteIdioma)
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto max-w-7xl px-5 pt-3 md:px-8 md:pt-4">
        <div
          className={clases(
            cajaFlotante,
            'flex w-full items-center justify-between gap-3 px-4 py-2.5 md:gap-6 md:px-6 md:py-3',
          )}
        >
          <a
            href="#inicio"
            className="inline-flex shrink-0 items-center"
            aria-label={`${perfil.nombre}, ${idioma === 'en' ? 'home' : 'inicio'}`}
          >
            {perfil.logo ? (
              <img
                src={perfil.logo}
                alt=""
                className="h-8 w-auto object-contain md:h-9"
              />
            ) : (
              <span className="font-display text-base font-bold tracking-tight text-papel md:text-lg">
                {perfil.nombre}
              </span>
            )}
          </a>

          <nav
            className="hidden items-center gap-5 lg:gap-7 md:flex"
            aria-label={ui.navPrincipal}
          >
            {navegacion.map((enlace) => (
              <a
                key={enlace.ancla}
                href={enlace.ancla}
                className="text-sm font-medium text-papel/75 transition-colors hover:text-papel md:text-base"
              >
                {enlace.etiqueta}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className="pulso-boton inline-flex size-10 items-center justify-center rounded-full border border-papel/25 text-papel hover:border-papel/50 hover:bg-papel/5 md:size-11"
              onClick={handleCambiarIdioma}
              aria-label={`${ui.idioma}: ${etiquetaIdioma[siguienteIdioma]}`}
              title={etiquetaIdioma[siguienteIdioma]}
            >
              <IconoIdioma className="h-3.5 w-5 rounded-[2px]" />
            </button>

            <button
              type="button"
              className="pulso-boton inline-flex size-10 items-center justify-center rounded-full border border-papel/25 text-papel md:hidden"
              aria-expanded={menuAbierto}
              aria-controls="menu-movil"
              aria-label={menuAbierto ? ui.cerrarMenu : ui.abrirMenu}
              onClick={handleAlternarMenu}
            >
              {menuAbierto ? (
                <IconoCerrar {...iconoMenu} />
              ) : (
                <IconoMenu {...iconoMenu} />
              )}
            </button>
          </div>
        </div>

        <div className="mt-2 flex justify-center">
          <div
            role="group"
            aria-label={ui.modoVisita}
            className={clases(cajaFlotante, 'inline-flex items-center gap-1 p-1')}
          >
            {modos.map((valor) => {
              const activo = modo === valor
              return (
                <button
                  key={valor}
                  type="button"
                  onClick={handleElegirModo(valor)}
                  aria-pressed={activo}
                  className={clases(
                    'pulso-boton rounded-full px-4 py-1.5 text-sm font-semibold transition-colors md:px-5 md:py-2',
                    activo
                      ? 'bg-acento text-tinta'
                      : 'text-papel/70 hover:text-papel',
                  )}
                >
                  {obtenerEtiquetaModo(valor, idioma)}
                </button>
              )
            })}
          </div>
        </div>

        <div
          id="menu-movil"
          className={clases(
            'mt-2 overflow-hidden rounded-2xl border border-papel/35 bg-tinta shadow-[0_10px_40px_rgb(0_0_0/0.35)] md:hidden',
            menuAbierto ? 'block' : 'hidden',
          )}
        >
          <nav
            className="flex flex-col items-center gap-1 px-4 py-3 text-center"
            aria-label={ui.navMovil}
          >
            {navegacion.map((enlace) => (
              <a
                key={enlace.ancla}
                href={enlace.ancla}
                className="w-full rounded-full px-4 py-2.5 text-base font-medium text-papel hover:bg-papel/5"
                onClick={handleCerrarMenu}
              >
                {enlace.etiqueta}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
