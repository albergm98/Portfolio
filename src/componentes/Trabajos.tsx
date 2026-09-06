import { useEffect, useState, type MouseEvent } from 'react'
import { usarContenido, usarModoVisita } from '../contexto/ModoVisita'
import { textosInterfaz, logoCliente } from '../datos/idioma'
import { clases } from '../utilidades/clases'
import {
  IconoAmpliar,
  IconoCerrar,
  IconoProyecto,
  propsIconoMd,
} from '../utilidades/iconos'
import { Revelado } from './Revelado'

const handleClicEnlace = (evento: MouseEvent<HTMLAnchorElement>): void => {
  evento.stopPropagation()
  evento.currentTarget.blur()
}

export const Trabajos = () => {
  const { trabajos, textos } = usarContenido()
  const { idioma, modo } = usarModoVisita()
  const ui = textosInterfaz[idioma]
  const [volteada, setVolteada] = useState<string | null>(null)
  const [clienteFiltro, setClienteFiltro] = useState<string | null>(null)
  const [imagenAbierta, setImagenAbierta] = useState<{
    src: string
    titulo: string
  } | null>(null)

  const esTrabajador = modo === 'trabajador'
  const clientes = [
    ...new Set(
      trabajos
        .map((trabajo) => trabajo.cliente)
        .filter((cliente): cliente is string => Boolean(cliente)),
    ),
  ]
  const trabajosVisibles =
    esTrabajador && clienteFiltro
      ? trabajos.filter((trabajo) => trabajo.cliente === clienteFiltro)
      : trabajos

  const handleAlternar = (id: string) => () => {
    setVolteada((actual) => (actual === id ? null : id))
  }

  const handleElegirCliente = (cliente: string | null) => () => {
    setClienteFiltro(cliente)
    setVolteada(null)
  }

  const handleAbrirImagen =
    (src: string, titulo: string) => (evento: MouseEvent) => {
      evento.stopPropagation()
      setImagenAbierta({ src, titulo })
    }

  const handleCerrarImagen = () => setImagenAbierta(null)

  useEffect(() => {
    setClienteFiltro(null)
    setVolteada(null)
  }, [modo])

  useEffect(() => {
    if (!imagenAbierta) return
    const handleTecla = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') setImagenAbierta(null)
    }
    document.addEventListener('keydown', handleTecla)
    const anterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleTecla)
      document.body.style.overflow = anterior
    }
  }, [imagenAbierta])

  return (
    <section id="trabajos" className="mx-auto max-w-7xl scroll-mt-32 px-5 py-24 md:px-8">
      <Revelado>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-tinta-suave uppercase">
              {textos.trabajosEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {textos.trabajosTitulo}
            </h2>
          </div>
          <p className="max-w-sm text-sm text-tinta-suave sm:text-right">
            {textos.trabajosApoyo}
          </p>
        </div>
      </Revelado>

      {esTrabajador && clientes.length > 0 ? (
        <div
          role="group"
          aria-label={ui.filtrarCliente}
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          <button
            type="button"
            onClick={handleElegirCliente(null)}
            aria-pressed={clienteFiltro === null}
            className={clases(
              'pulso-boton inline-flex h-11 items-center justify-center rounded-full border px-4 text-sm font-semibold transition-colors',
              clienteFiltro === null
                ? 'border-acento bg-tinta text-papel'
                : 'border-tinta/15 bg-tinta/85 text-papel/70 hover:border-tinta/35 hover:text-papel',
            )}
          >
            {ui.todasLasMarcas}
          </button>
          {clientes.map((cliente) => {
            const activo = clienteFiltro === cliente
            const logo = logoCliente[cliente]
            return (
              <button
                key={cliente}
                type="button"
                onClick={handleElegirCliente(cliente)}
                aria-pressed={activo}
                aria-label={cliente}
                title={cliente}
                className={clases(
                  'pulso-boton inline-flex h-11 items-center justify-center rounded-full border px-4 transition-colors',
                  activo
                    ? 'border-acento bg-tinta'
                    : 'border-tinta/15 bg-tinta/85 hover:border-tinta/35',
                )}
              >
                {logo ? (
                  <img
                    src={logo}
                    alt=""
                    className="h-5 w-auto max-w-[6.5rem] object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-papel">
                    {cliente}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      ) : null}

      <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {trabajosVisibles.map((trabajo, indice) => {
          const esExterno = Boolean(trabajo.urlDemo?.startsWith('http'))
          const attrs =
            trabajo.urlDemo && esExterno
              ? { target: '_blank' as const, rel: 'noreferrer' }
              : {}
          const estaVolteada = volteada === trabajo.id
          const puedeAbrirImagen = Boolean(trabajo.imagen && !trabajo.urlDemo)

          return (
            <li key={trabajo.id}>
              <Revelado>
                <article className="flex flex-col items-center">
                  <button
                    type="button"
                    className="tarjeta-volteo group relative aspect-[4/3] w-full cursor-pointer border-0 bg-transparent p-0 text-left [perspective:1000px]"
                    aria-pressed={estaVolteada}
                    aria-label={`${trabajo.titulo}: ${ui.verDetalle}`}
                    onClick={handleAlternar(trabajo.id)}
                  >
                    <div
                      className={clases(
                        'tarjeta-volteo-cara relative size-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]',
                        estaVolteada && '[transform:rotateY(180deg)]',
                      )}
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-lg bg-tinta [backface-visibility:hidden]">
                        {trabajo.imagen ? (
                          <img
                            src={trabajo.imagen}
                            alt=""
                            className="size-full object-cover object-center"
                            loading={indice < 3 ? 'eager' : 'lazy'}
                          />
                        ) : (
                          <div className="flex size-full items-center justify-center bg-gradient-to-br from-tinta to-[#2a2a2a] p-4">
                            <span className="font-display text-lg font-bold text-papel">
                              {trabajo.titulo}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-tinta px-5 py-5 text-center text-papel [backface-visibility:hidden] [transform:rotateY(180deg)] md:px-6">
                        {trabajo.fecha ? (
                          <p className="text-xs font-semibold tracking-[0.14em] text-acento uppercase">
                            {trabajo.fecha}
                          </p>
                        ) : null}
                        <p className="line-clamp-4 max-w-[18rem] text-[0.95rem] leading-snug font-medium text-papel/90">
                          {trabajo.resumen}
                        </p>
                        <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                          {trabajo.etiquetas.slice(0, 3).map((etiqueta) => (
                            <li
                              key={etiqueta}
                              className="text-[11px] font-semibold tracking-[0.12em] text-papel/45 uppercase"
                            >
                              {etiqueta}
                            </li>
                          ))}
                        </ul>
                        {trabajo.urlDemo ? (
                          <a
                            href={trabajo.urlDemo}
                            className="pulso-boton mt-1 inline-flex size-11 items-center justify-center rounded-md bg-acento text-tinta hover:bg-acento-oscuro"
                            onClick={handleClicEnlace}
                            aria-label={`${ui.verProyecto} ${trabajo.titulo}`}
                            title={ui.verProyecto}
                            {...attrs}
                          >
                            <IconoProyecto {...propsIconoMd} />
                          </a>
                        ) : null}
                        {puedeAbrirImagen && trabajo.imagen ? (
                          <button
                            type="button"
                            className="pulso-boton mt-1 inline-flex size-11 items-center justify-center rounded-md bg-acento text-tinta hover:bg-acento-oscuro"
                            onClick={handleAbrirImagen(
                              trabajo.imagen,
                              trabajo.titulo,
                            )}
                            aria-label={`${ui.verImagen}: ${trabajo.titulo}`}
                            title={ui.verImagen}
                          >
                            <IconoAmpliar {...propsIconoMd} />
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </button>

                  <h3 className="mt-4 text-center font-display text-lg font-bold tracking-tight md:text-xl">
                    {trabajo.urlDemo ? (
                      <a
                        href={trabajo.urlDemo}
                        className="hover:underline hover:decoration-acento hover:decoration-2 hover:underline-offset-4"
                        onClick={handleClicEnlace}
                        {...attrs}
                      >
                        {trabajo.titulo}
                      </a>
                    ) : puedeAbrirImagen && trabajo.imagen ? (
                      <button
                        type="button"
                        className="hover:underline hover:decoration-acento hover:decoration-2 hover:underline-offset-4"
                        onClick={handleAbrirImagen(
                          trabajo.imagen,
                          trabajo.titulo,
                        )}
                      >
                        {trabajo.titulo}
                      </button>
                    ) : (
                      trabajo.titulo
                    )}
                  </h3>
                </article>
              </Revelado>
            </li>
          )
        })}
      </ul>

      {imagenAbierta ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-tinta/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={imagenAbierta.titulo}
          onClick={handleCerrarImagen}
        >
          <button
            type="button"
            className="pulso-boton absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full border border-papel/30 text-papel hover:bg-papel/10 md:top-6 md:right-6"
            onClick={handleCerrarImagen}
            aria-label={ui.cerrarImagen}
          >
            <IconoCerrar {...propsIconoMd} />
          </button>
          <img
            src={imagenAbierta.src}
            alt={imagenAbierta.titulo}
            className="max-h-full max-w-full rounded-lg object-contain shadow-[0_20px_60px_rgb(0_0_0/0.45)]"
            onClick={(evento) => evento.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  )
}
