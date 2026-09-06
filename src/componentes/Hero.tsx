import { crearEnlacePresupuesto } from '../datos/contenido'
import { usarContenido, usarModoVisita } from '../contexto/ModoVisita'
import {
  IconoCorreo,
  IconoTrabajos,
  iconoSocial,
  propsIcono,
} from '../utilidades/iconos'
import { Fondo } from './Fondo'

export const Hero = () => {
  const { perfil, textos, secciones, sociales } = usarContenido()
  const { modo } = usarModoVisita()

  return (
    <section
      id="inicio"
      className="relative flex min-h-dvh items-end overflow-hidden px-5 pt-32 pb-14 md:px-8 md:pt-36 md:pb-20"
    >
      <Fondo />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 md:gap-12">
        {perfil.foto ? (
          <div className="entrada-hero mt-5 flex justify-center md:mt-8">
            <div className="relative translate-y-2 md:translate-y-3">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full border border-acento/35 md:-inset-4"
              />
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgb(200_245_74/0.18),transparent_68%)] blur-sm"
              />
              <img
                src={perfil.foto}
                alt={perfil.nombre}
                width={512}
                height={512}
                className="relative size-32 rounded-full object-cover object-top shadow-[0_24px_60px_rgb(0_0_0/0.5)] md:size-44 lg:size-48"
                decoding="async"
              />
            </div>
          </div>
        ) : null}

        <div className="grid gap-10 md:grid-cols-2 md:items-end md:gap-12 lg:gap-20">
          <div className="entrada-hero-retraso mx-auto max-w-xl text-center md:mx-0 md:text-left">
            <h1 className="font-display text-[clamp(2.75rem,9vw,5.5rem)] leading-[0.92] font-extrabold tracking-[-0.03em] text-papel">
              {perfil.nombre}
            </h1>
            <p className="mt-4 text-sm font-medium tracking-wide text-acento md:text-base">
              {perfil.rol}
            </p>
            <p className="mx-auto mt-5 max-w-md text-base text-papel/70 md:mx-0 md:mt-6 md:text-lg">
              {perfil.frase}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
              {modo === 'trabajador'
                ? sociales.map((red) => {
                    const Icono = iconoSocial(red.etiqueta)
                    const esPrincipal = red.etiqueta === 'LinkedIn'
                    return (
                      <a
                        key={red.etiqueta}
                        href={red.url}
                        {...(red.descargar
                          ? { download: 'CV-Alberto-Gallardo.pdf' }
                          : { target: '_blank', rel: 'noreferrer' })}
                        className={
                          esPrincipal
                            ? 'pulso-boton inline-flex items-center gap-2 rounded-md bg-acento px-4 py-2.5 text-sm font-semibold text-tinta hover:bg-acento-oscuro'
                            : 'pulso-boton inline-flex items-center gap-2 rounded-md border border-papel/25 px-4 py-2.5 text-sm font-semibold text-papel hover:border-papel/50 hover:bg-papel/5'
                        }
                        aria-label={red.etiqueta}
                      >
                        <Icono className="size-4 shrink-0" />
                        {red.etiqueta}
                      </a>
                    )
                  })
                : (
                  <>
                    <a
                      href={crearEnlacePresupuesto(
                        perfil.correo,
                        textos.asuntoContacto,
                      )}
                      className="pulso-boton inline-flex items-center gap-2 rounded-md bg-acento px-4 py-2.5 text-sm font-semibold text-tinta hover:bg-acento-oscuro"
                      aria-label={textos.ctaPresupuesto}
                    >
                      <IconoCorreo {...propsIcono} className="size-4 shrink-0" />
                      {textos.ctaPresupuesto}
                    </a>
                    {secciones.trabajos ? (
                      <a
                        href="#trabajos"
                        className="pulso-boton inline-flex items-center gap-2 rounded-md border border-papel/25 px-4 py-2.5 text-sm font-semibold text-papel hover:border-papel/50 hover:bg-papel/5"
                        aria-label={textos.ctaTrabajos}
                      >
                        <IconoTrabajos
                          {...propsIcono}
                          className="size-4 shrink-0"
                        />
                        {textos.ctaTrabajos}
                      </a>
                    ) : null}
                  </>
                )}
            </div>
          </div>

          <aside className="entrada-hero-retraso-2 flex flex-col items-center gap-3 border-t border-papel/15 pt-6 text-center md:items-end md:border-t-0 md:border-l md:pt-0 md:pl-10 md:text-right">
            <p className="text-xs font-semibold tracking-[0.2em] text-papel/45 uppercase">
              {textos.heroAsideEyebrow}
            </p>
            <p className="font-display text-xl font-semibold text-papel md:text-2xl">
              {textos.heroAsideTitulo}
            </p>
            <p className="text-sm text-papel/55">{textos.heroAsideDetalle}</p>

            {modo === 'freelance' ? (
              <ul className="mt-2 flex flex-wrap justify-center gap-2 md:justify-end">
                {sociales.map((red) => {
                  const Icono = iconoSocial(red.etiqueta)
                  return (
                    <li key={red.etiqueta}>
                      <a
                        href={red.url}
                        {...(red.descargar
                          ? { download: 'CV-Alberto-Gallardo.pdf' }
                          : { target: '_blank', rel: 'noreferrer' })}
                        className="pulso-boton inline-flex size-11 items-center justify-center rounded-full border border-papel/25 text-papel transition-colors hover:border-acento hover:text-acento"
                        aria-label={red.etiqueta}
                        title={red.etiqueta}
                      >
                        <Icono className="size-5 shrink-0" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  )
}
