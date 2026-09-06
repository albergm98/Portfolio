import { useEffect, useRef, useState } from 'react'
import { usarModoVisita } from '../contexto/ModoVisita'
import { textosInterfaz } from '../datos/idioma'
import { clases } from '../utilidades/clases'

type PropsBarra = {
  nivel: number
  retrasoMs?: number
}

export const BarraNivel = ({ nivel, retrasoMs = 0 }: PropsBarra) => {
  const ref = useRef<HTMLDivElement>(null)
  const [activo, setActivo] = useState(false)
  const porcentaje = Math.min(5, Math.max(1, nivel)) * 20

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada?.isIntersecting) {
          window.setTimeout(
            () => setActivo(true),
            reduceMotion ? 0 : retrasoMs,
          )
          observador.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observador.observe(nodo)
    return () => observador.disconnect()
  }, [retrasoMs])

  return (
    <div ref={ref} className="w-full">
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className={clases(
            'h-full rounded-full bg-acento transition-[width] duration-1000 ease-out',
            !activo && 'motion-reduce:transition-none',
          )}
          style={{ width: activo ? `${porcentaje}%` : '0%' }}
        />
      </div>
    </div>
  )
}

type PropsAnillo = {
  nivel: number
  etiqueta: string
  retrasoMs?: number
}

export const AnilloNivel = ({ nivel, etiqueta, retrasoMs = 0 }: PropsAnillo) => {
  const ref = useRef<HTMLDivElement>(null)
  const [activo, setActivo] = useState(false)
  const { idioma } = usarModoVisita()
  const etiquetasNivel = textosInterfaz[idioma].niveles
  const valor = Math.min(5, Math.max(1, nivel))
  const grados = activo ? valor * 72 : 0

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada?.isIntersecting) {
          window.setTimeout(
            () => setActivo(true),
            reduceMotion ? 0 : retrasoMs,
          )
          observador.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observador.observe(nodo)
    return () => observador.disconnect()
  }, [retrasoMs])

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div
        className="relative grid size-24 place-items-center rounded-full sm:size-28"
        style={{
          background: `conic-gradient(#c8f54a ${grados}deg, rgb(255 255 255 / 0.1) 0deg)`,
          transition: 'background 1s ease-out',
        }}
        role="img"
        aria-label={`${etiqueta}: ${etiquetasNivel[valor]}`}
      >
        <div className="grid size-[4.5rem] place-items-center rounded-full bg-tinta sm:size-[5.25rem]">
          <span className="font-display text-xl font-bold tabular-nums text-papel sm:text-2xl">
            {valor}
          </span>
        </div>
      </div>
      <div className="px-1 text-center">
        <p className="font-display text-xs font-bold tracking-tight text-papel sm:text-sm">
          {etiqueta}
        </p>
        <p className="mt-0.5 text-xs font-medium tracking-wide text-acento">
          {etiquetasNivel[valor]}
        </p>
      </div>
    </div>
  )
}

export const textoNivel = (nivel: number, idioma: 'es' | 'en' = 'es'): string =>
  textosInterfaz[idioma].niveles[Math.min(5, Math.max(1, nivel))] ??
  textosInterfaz[idioma].niveles[3]
