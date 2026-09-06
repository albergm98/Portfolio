import { usarContenido, usarModoVisita } from '../contexto/ModoVisita'
import { iconoHabilidad, propsIcono } from '../utilidades/iconos'
import { iconoTecnologia, propsIconoTech } from '../utilidades/iconosStack'
import { AnilloNivel, BarraNivel, textoNivel } from './Medidores'
import { Revelado } from './Revelado'

export const Habilidades = () => {
  const { habilidades, textos } = usarContenido()
  const { idioma } = usarModoVisita()

  return (
    <section id="habilidades" className="scroll-mt-32 bg-tinta py-24 text-papel md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Revelado>
          <p className="text-xs font-semibold tracking-[0.2em] text-acento uppercase">
            {textos.stackEyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            {textos.stackTitulo}
          </h2>
          <p className="mt-4 max-w-xl text-base text-papel/60 md:text-lg">{textos.stackApoyo}</p>
        </Revelado>

        <Revelado clase="mt-14">
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-6">
            {habilidades.map((grupo, indice) => (
              <li key={grupo.grupo}>
                <AnilloNivel
                  nivel={grupo.nivel}
                  etiqueta={grupo.grupo}
                  retrasoMs={indice * 80}
                />
              </li>
            ))}
          </ul>
        </Revelado>

        <ul className="mt-16 space-y-8 border-t border-white/10 pt-12">
          {habilidades.map((grupo, indice) => {
            const Icono = iconoHabilidad(grupo.grupo)
            return (
              <li key={grupo.grupo}>
                <Revelado>
                  <div className="grid gap-4 md:grid-cols-[11rem_1fr] md:items-center md:gap-8">
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
                        <Icono {...propsIcono} className="size-4 text-acento" />
                        {grupo.grupo}
                      </h3>
                      <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-acento uppercase">
                        {textoNivel(grupo.nivel, idioma)}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <BarraNivel nivel={grupo.nivel} retrasoMs={indice * 60} />
                      <ul className="flex flex-wrap gap-2">
                        {grupo.items.map((item) => {
                          const IconoTech = iconoTecnologia(item)
                          return (
                            <li key={item}>
                              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-papel/85 transition-colors hover:border-acento/50 hover:bg-acento/10">
                                <IconoTech
                                  {...propsIconoTech}
                                  className="size-3.5 shrink-0 text-acento"
                                />
                                {item}
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </Revelado>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
