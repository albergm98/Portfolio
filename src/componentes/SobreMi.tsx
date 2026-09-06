import { usarContenido, usarModoVisita } from '../contexto/ModoVisita'
import { textosInterfaz } from '../datos/idioma'
import { CintaMarcas } from './CintaMarcas'
import { GrafoTrayectoria } from './GrafoTrayectoria'
import { Revelado } from './Revelado'

export const SobreMi = () => {
  const { experiencia, estudios, marcas, textos, secciones } = usarContenido()
  const { idioma } = usarModoVisita()
  const ui = textosInterfaz[idioma]

  return (
    <>
      {secciones.marcas ? (
        <CintaMarcas marcas={marcas} apoyo={textos.marcasApoyo} />
      ) : null}

      <div
        id="sobre-mi"
        className="mx-auto max-w-7xl scroll-mt-32 px-5 py-20 md:px-8 md:py-28"
      >
        <section
          id="experiencia"
          className="scroll-mt-32"
          aria-labelledby="titulo-experiencia"
        >
          <Revelado>
            <p className="text-xs font-semibold tracking-[0.2em] text-tinta-suave uppercase">
              {textos.experienciaEyebrow}
            </p>
            <h2
              id="titulo-experiencia"
              className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl"
            >
              {textos.experienciaTitulo}
            </h2>
          </Revelado>

          <Revelado clase="mt-14">
            <GrafoTrayectoria
              hitos={experiencia}
              conActualidad
              etiquetaProduccion={ui.production}
            />
          </Revelado>
        </section>

        <section
          id="estudios"
          className="mt-20 scroll-mt-32 md:mt-28"
          aria-labelledby="titulo-estudios"
        >
          <Revelado>
            <p className="text-xs font-semibold tracking-[0.2em] text-tinta-suave uppercase">
              {textos.estudiosEyebrow}
            </p>
            <h2
              id="titulo-estudios"
              className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl"
            >
              {textos.estudiosTitulo}
            </h2>
          </Revelado>

          <Revelado clase="mt-14">
            <GrafoTrayectoria
              hitos={estudios}
              etiquetaProduccion={ui.formacion}
            />
          </Revelado>
        </section>
      </div>
    </>
  )
}
