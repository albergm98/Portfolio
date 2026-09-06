import { Cabecera } from './componentes/Cabecera'
import { CargaCircular } from './componentes/CargaCircular'
import { Contacto } from './componentes/Contacto'
import { Habilidades } from './componentes/Habilidades'
import { Hero } from './componentes/Hero'
import { Pie } from './componentes/Pie'
import { Servicios } from './componentes/Servicios'
import { SobreMi } from './componentes/SobreMi'
import { Trabajos } from './componentes/Trabajos'
import { ProveedorModoVisita, usarModoVisita } from './contexto/ModoVisita'

const Portfolio = () => {
  const { listo, contenido } = usarModoVisita()

  if (!listo) {
    return <div className="min-h-dvh bg-tinta" aria-hidden />
  }

  const { secciones } = contenido

  return (
    <CargaCircular>
      <Cabecera />
      <main>
        <Hero />
        {secciones.trabajos ? <Trabajos /> : null}
        {secciones.habilidades ? <Habilidades /> : null}
        {secciones.servicios ? <Servicios /> : null}
        <SobreMi />
        <Contacto />
      </main>
      <Pie />
    </CargaCircular>
  )
}

export const Aplicacion = () => (
  <ProveedorModoVisita>
    <Portfolio />
  </ProveedorModoVisita>
)
