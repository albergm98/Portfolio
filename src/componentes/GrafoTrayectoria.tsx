import { useEffect, useState } from 'react'
import { usarModoVisita } from '../contexto/ModoVisita'
import { textosInterfaz } from '../datos/idioma'
import type { Hito } from '../tipos/contenido'
import {
  formatearDuracion,
  formatearDuracionEmpresa,
  formatearDuracionProduccion,
} from '../utilidades/duracion'

const coloresPorRama: Record<string, string> = {
  freelance: '#2F9E44',
  dentsu: '#228BE6',
  akaya: '#E8590C',
  daw: '#0B7285',
}

const colorPorDefecto = '#868e96'
const colorProduccion = '#101010'
const rellenoNodo = '#f0f0ee'

const obtenerColor = (rama: string): string =>
  coloresPorRama[rama] ?? colorPorDefecto

const estaActiva = (hito: Hito): boolean => {
  const periodo = hito.periodo.toLowerCase()
  return periodo.includes('hoy') || periodo.includes('today')
}

/** Carriles: 1 cerca del tronco (akaya, daw, dentsu), 2 paralelo (freelance). */
const obtenerCarril = (rama: string): number => {
  if (rama === 'freelance') return 2
  return 1
}

const NodoUnion = ({
  x,
  y,
  grosor,
}: {
  x: number
  y: number
  grosor: number
}) => (
  <circle
    cx={x}
    cy={y}
    r={5}
    fill="#ffffff"
    stroke={colorProduccion}
    strokeWidth={grosor}
    strokeOpacity="0.45"
  />
)

type PropsGrafo = {
  hitos: Hito[]
  /** Muestra el punto común de actualidad para ramas abiertas. */
  conActualidad?: boolean
  etiquetaProduccion?: string
}

export const GrafoTrayectoria = ({
  hitos,
  conActualidad = false,
  etiquetaProduccion = 'production',
}: PropsGrafo) => {
  const { idioma } = usarModoVisita()
  const ui = textosInterfaz[idioma]
  const [altoFila, setAltoFila] = useState(168)

  useEffect(() => {
    const consulta = window.matchMedia('(max-width: 767px)')
    const actualizar = () => setAltoFila(consulta.matches ? 232 : 168)
    actualizar()
    consulta.addEventListener('change', actualizar)
    return () => consulta.removeEventListener('change', actualizar)
  }, [])

  const total = hitos.length
  const margen = 36
  const altoSvg = total * altoFila + margen * 2
  const xProd = 20
  const xCarril1 = 52
  const xCarril2 = 84
  const grosor = 2.5
  const yActualidad = 16
  const usaCarril2 = hitos.some((hito) => obtenerCarril(hito.rama ?? '') === 2)
  const anchoVista = usaCarril2 ? 100 : 72

  const xDeCarril = (carril: number): number =>
    carril === 2 ? xCarril2 : xCarril1

  const ramasAbiertas = new Set(
    hitos.filter((hito) => estaActiva(hito)).map((hito) => hito.rama ?? 'otra'),
  )

  const duracionProduccion = formatearDuracionProduccion(hitos, new Date(), idioma)

  const hitosPorRama = hitos.reduce<Record<string, Hito[]>>((acc, hito) => {
    const rama = hito.rama ?? 'otra'
    acc[rama] = [...(acc[rama] ?? []), hito]
    return acc
  }, {})

  const duracionPorRama = Object.fromEntries(
    Object.entries(hitosPorRama).map(([rama, grupo]) => [
      rama,
      formatearDuracionEmpresa(grupo, new Date(), idioma),
    ]),
  )

  return (
    <div>
      {duracionProduccion ? (
        <p className="mb-8 font-mono text-sm text-tinta/50">
          {etiquetaProduccion} · {duracionProduccion}
        </p>
      ) : null}

      <div
        className={`relative grid ${usaCarril2 ? 'grid-cols-[5.5rem_1fr] md:grid-cols-[7rem_1fr]' : 'grid-cols-[4.5rem_1fr] md:grid-cols-[5.5rem_1fr]'}`}
        style={{ minHeight: altoSvg }}
      >
        <svg
          className={`pointer-events-none absolute top-0 left-0 ${usaCarril2 ? 'w-[5.5rem] md:w-28' : 'w-[4.5rem] md:w-[5.5rem]'}`}
          width={usaCarril2 ? 112 : 88}
          height={altoSvg}
          viewBox={`0 0 ${anchoVista} ${altoSvg}`}
          fill="none"
          aria-hidden="true"
        >
          <line
            x1={xProd}
            y1={0}
            x2={xProd}
            y2={altoSvg}
            stroke={colorProduccion}
            strokeWidth={grosor}
            strokeOpacity="0.22"
            strokeLinecap="round"
          />

          {conActualidad ? (
            <NodoUnion x={xProd} y={yActualidad} grosor={grosor} />
          ) : null}

          {hitos.map((hito, indice) => {
            const y = margen + indice * altoFila + 36
            const rama = hito.rama ?? 'otra'
            const color = obtenerColor(rama)
            const activa = estaActiva(hito)
            const abierta = ramasAbiertas.has(rama)
            const xTip = xDeCarril(obtenerCarril(rama))
            const anterior = hitos[indice - 1]
            const siguiente = hitos[indice + 1]
            const mismaRamaArriba = anterior?.rama === rama
            const mismaRamaAbajo = siguiente?.rama === rama
            const esInicio = !mismaRamaAbajo
            const esFin = !mismaRamaArriba
            const arco = Math.min(36, altoFila * 0.42)
            const yArriba = y - arco
            const yAbajo = y + arco

            return (
              <g key={`${hito.empresa}-${hito.puesto}-${indice}`}>
                {mismaRamaAbajo ? (
                  <line
                    x1={xTip}
                    y1={y}
                    x2={xTip}
                    y2={y + altoFila}
                    stroke={color}
                    strokeWidth={grosor}
                    strokeLinecap="round"
                  />
                ) : null}

                {esInicio ? (
                  abierta ? (
                    <>
                      <path
                        d={`M ${xProd} ${yAbajo} C ${xProd} ${y}, ${xTip} ${yAbajo}, ${xTip} ${y}`}
                        stroke={color}
                        strokeWidth={grosor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <NodoUnion x={xProd} y={yAbajo} grosor={grosor} />
                    </>
                  ) : (
                    <>
                      <path
                        d={`M ${xProd} ${yArriba} C ${xProd} ${y}, ${xTip} ${yArriba}, ${xTip} ${y}`}
                        stroke={color}
                        strokeWidth={grosor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <NodoUnion x={xProd} y={yArriba} grosor={grosor} />
                    </>
                  )
                ) : null}

                {esFin && abierta && conActualidad ? (
                  <>
                    {y > yActualidad + arco ? (
                      <line
                        x1={xTip}
                        y1={y}
                        x2={xTip}
                        y2={yActualidad + arco}
                        stroke={color}
                        strokeWidth={grosor}
                        strokeLinecap="round"
                      />
                    ) : null}
                    <path
                      d={`M ${xTip} ${yActualidad + arco} C ${xTip} ${yActualidad}, ${xProd} ${yActualidad + arco}, ${xProd} ${yActualidad}`}
                      stroke={color}
                      strokeWidth={grosor}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </>
                ) : null}

                {esFin && !abierta ? (
                  <>
                    <path
                      d={`M ${xTip} ${y} C ${xTip} ${yAbajo}, ${xProd} ${y}, ${xProd} ${yAbajo}`}
                      stroke={color}
                      strokeWidth={grosor}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <NodoUnion x={xProd} y={yAbajo} grosor={grosor} />
                  </>
                ) : null}

                <circle
                  cx={xTip}
                  cy={y}
                  r={6}
                  fill={activa ? color : rellenoNodo}
                  stroke={color}
                  strokeWidth={grosor}
                />
                {activa ? (
                  <circle cx={xTip} cy={y} r={2.5} fill={rellenoNodo} />
                ) : null}
              </g>
            )
          })}
        </svg>

        <ol className="col-start-2">
          {hitos.map((hito, indice) => {
            const rama = hito.rama ?? 'otra'
            const color = obtenerColor(rama)
            const anterior = hitos[indice - 1]
            const esPuntaEmpresa = anterior?.rama !== rama
            const duracionEmpresa = duracionPorRama[rama]
            const rolesEnEmpresa = hitosPorRama[rama]?.length ?? 1

            return (
              <li
                key={`${hito.empresa}-${hito.puesto}-${indice}`}
                className="box-border border-t border-linea first:border-t-0"
                style={{ height: altoFila }}
              >
                <div className="flex h-full flex-col justify-center gap-2 py-3 md:grid md:grid-cols-[10.5rem_minmax(0,1fr)] md:items-start md:gap-8 md:py-5">
                  <div className="shrink-0 md:pt-1">
                    <p className="font-mono text-[12px] leading-snug tracking-wide text-tinta/45">
                      {hito.periodo}
                    </p>
                    <p className="mt-1 text-[12px] font-medium text-tinta/55">
                      {formatearDuracion(hito.periodo, new Date(), idioma)}
                    </p>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <p
                        className="text-[13px] font-semibold tracking-wide"
                        style={{ color }}
                      >
                        {hito.empresa}
                      </p>
                      {esPuntaEmpresa && duracionEmpresa ? (
                        <p className="text-[12px] text-tinta/45">
                          {rolesEnEmpresa > 1
                            ? `${duracionEmpresa} ${ui.enTotal}`
                            : duracionEmpresa}
                        </p>
                      ) : null}
                    </div>
                    <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-tinta md:text-2xl">
                      {hito.puesto}
                    </h3>
                    <p className="mt-1.5 line-clamp-4 max-w-2xl text-sm leading-relaxed text-tinta-suave md:mt-2 md:line-clamp-none md:text-base">
                      {hito.detalle}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
