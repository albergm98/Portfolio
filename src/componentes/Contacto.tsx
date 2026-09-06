import {
  crearEnlacePresupuesto,
  crearEnlaceWhatsApp,
} from '../datos/contenido'
import { usarContenido, usarModoVisita } from '../contexto/ModoVisita'
import { textosInterfaz } from '../datos/idioma'
import {
  IconoCorreo,
  IconoWhatsApp,
  iconoSocial,
  propsIconoMd,
} from '../utilidades/iconos'
import { Revelado } from './Revelado'

export const Contacto = () => {
  const { perfil, sociales, textos } = usarContenido()
  const { idioma } = usarModoVisita()
  const ui = textosInterfaz[idioma]

  return (
    <section
      id="contacto"
      className="scroll-mt-32 bg-tinta py-24 text-papel md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end md:gap-16 md:px-8">
        <Revelado>
          <p className="text-xs font-semibold tracking-[0.2em] text-acento uppercase">
            {textos.contactoEyebrow}
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {textos.contactoTitulo}
          </h2>
          <p className="mt-5 max-w-lg text-base text-papel/65 md:text-lg">
            {textos.contactoApoyo}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={crearEnlacePresupuesto(perfil.correo, textos.asuntoContacto)}
              className="pulso-boton inline-flex items-center justify-center gap-2.5 rounded-md bg-acento px-5 py-3.5 text-sm font-semibold text-tinta hover:bg-acento-oscuro"
            >
              <IconoCorreo {...propsIconoMd} />
              {textos.ctaPresupuesto}
            </a>
            <a
              href={crearEnlaceWhatsApp(
                perfil.telefonoWhatsApp,
                textos.mensajeWhatsApp,
              )}
              className="pulso-boton inline-flex items-center justify-center gap-2.5 rounded-md border border-papel/25 px-5 py-3.5 text-sm font-semibold text-papel hover:border-papel/50 hover:bg-papel/5"
              target="_blank"
              rel="noreferrer"
            >
              <IconoWhatsApp {...propsIconoMd} />
              {ui.whatsapp}
            </a>
          </div>
        </Revelado>

        <Revelado>
          <div className="border-t border-papel/15 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-papel/45 uppercase">
              {ui.email}
            </p>
            <a
              href={`mailto:${perfil.correo}`}
              className="mt-3 block font-display text-lg font-bold break-all text-papel underline decoration-acento/80 decoration-2 underline-offset-6 transition-opacity hover:opacity-80 sm:text-xl sm:break-words"
            >
              {perfil.correo}
            </a>

            <p className="mt-10 text-xs font-semibold tracking-[0.18em] text-papel/45 uppercase">
              {ui.tambienEn}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {sociales.map((red) => {
                const Icono = iconoSocial(red.etiqueta)
                return (
                  <li key={red.etiqueta}>
                    <a
                      href={red.url}
                      {...(red.descargar
                        ? { download: 'CV-Alberto-Gallardo.pdf' }
                        : { target: '_blank', rel: 'noreferrer' })}
                      className="pulso-boton inline-flex items-center gap-3 text-sm font-medium text-papel/75 transition-colors hover:text-acento"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-full border border-papel/20">
                        <Icono className="size-4 shrink-0" />
                      </span>
                      {red.etiqueta}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </Revelado>
      </div>
    </section>
  )
}
