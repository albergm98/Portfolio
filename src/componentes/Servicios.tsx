import {
  crearEnlacePresupuesto,
  crearEnlaceWhatsApp,
} from '../datos/contenido'
import { usarContenido } from '../contexto/ModoVisita'
import {
  IconoCorreo,
  IconoWhatsApp,
  iconoServicio,
  propsIconoMd,
} from '../utilidades/iconos'
import { Revelado } from './Revelado'

export const Servicios = () => {
  const { perfil, servicios, textos } = usarContenido()

  return (
    <section id="servicios" className="scroll-mt-32 bg-tinta py-24 text-papel md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Revelado>
          <p className="text-xs font-semibold tracking-[0.2em] text-acento uppercase">
            {textos.serviciosEyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-5xl">
            {textos.serviciosTitulo}
          </h2>
          <p className="mt-4 max-w-xl text-base text-papel/60 md:text-lg">
            {textos.serviciosApoyo}
          </p>
        </Revelado>

        <Revelado clase="mt-14">
          <ul className="border-t border-white/12">
            {servicios.map((servicio) => {
              const Icono = iconoServicio(servicio.titulo)
              return (
                <li
                  key={servicio.titulo}
                  className="grid gap-3 border-b border-white/12 py-7 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-14"
                >
                  <h3 className="flex items-start gap-3 font-display text-xl font-bold tracking-tight md:text-2xl">
                    <Icono
                      {...propsIconoMd}
                      className="mt-1 size-5 shrink-0 text-acento"
                    />
                    {servicio.titulo}
                  </h3>
                  <p className="text-papel/60 md:pt-1">{servicio.resumen}</p>
                </li>
              )
            })}
          </ul>
        </Revelado>

        <Revelado clase="mt-12 flex flex-wrap gap-3">
          <a
            href={crearEnlacePresupuesto(perfil.correo, textos.asuntoContacto)}
            className="pulso-boton inline-flex size-12 items-center justify-center rounded-md bg-acento text-tinta hover:bg-acento-oscuro"
            aria-label={textos.ctaPresupuesto}
            title={textos.ctaPresupuesto}
          >
            <IconoCorreo {...propsIconoMd} />
          </a>
          <a
            href={crearEnlaceWhatsApp(
              perfil.telefonoWhatsApp,
              textos.mensajeWhatsApp,
            )}
            className="pulso-boton inline-flex size-12 items-center justify-center rounded-md border border-papel/25 text-papel hover:bg-papel/5"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <IconoWhatsApp {...propsIconoMd} />
          </a>
        </Revelado>
      </div>
    </section>
  )
}
