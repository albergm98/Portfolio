import { usarContenido } from '../contexto/ModoVisita'

export const Pie = () => {
  const anio = new Date().getFullYear()
  const { perfil } = usarContenido()

  return (
    <footer className="border-t border-papel/10 bg-tinta px-5 py-8 text-papel/45 md:px-8">
      <p className="mx-auto max-w-7xl text-center text-sm">
        © {anio} {perfil.nombre}
      </p>
    </footer>
  )
}
