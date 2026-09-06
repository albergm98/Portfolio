import type { Marca } from '../tipos/contenido'

type Props = {
  marcas: Marca[]
  apoyo: string
}

const ItemMarca = ({
  marca,
  decorativo = false,
}: {
  marca: Marca
  decorativo?: boolean
}) => (
  <span className="inline-flex items-center" aria-hidden={decorativo}>
    {marca.imagen ? (
      <img
        src={marca.imagen}
        alt={decorativo ? '' : marca.nombre}
        className={[
          'h-10 w-auto max-w-none object-contain opacity-80 transition duration-200 hover:opacity-100 md:h-12',
          marca.monocromo !== false ? 'brightness-0 invert' : '',
          marca.redonda ? 'size-11 rounded-full md:size-12' : '',
        ].join(' ')}
      />
    ) : (
      <span className="font-display text-lg font-bold tracking-tight text-papel/70 transition duration-200 hover:text-papel md:text-xl">
        {marca.nombre}
      </span>
    )}
  </span>
)

const FilaMarcas = ({
  marcas,
  decorativo = false,
}: {
  marcas: Marca[]
  decorativo?: boolean
}) => (
  <ul
    className="flex shrink-0 items-center justify-center md:justify-start"
    aria-hidden={decorativo}
  >
    {marcas.map((marca, indice) => (
      <li key={`${marca.nombre}-${indice}`} className="mx-5 shrink-0 md:mx-8">
        <ItemMarca marca={marca} decorativo={decorativo} />
      </li>
    ))}
  </ul>
)

/** Franja oscura con un carrusel infinito de clientes. Sin enlaces. */
export const CintaMarcas = ({ marcas, apoyo }: Props) => {
  if (marcas.length === 0) return null

  const bloque: Marca[] = []
  while (bloque.length < 12) {
    bloque.push(...marcas)
  }

  return (
    <section aria-label={apoyo} className="bg-tinta py-16 md:py-20">
      <p className="mx-auto mb-10 max-w-7xl px-5 text-center text-xs font-semibold tracking-[0.2em] text-papel/45 uppercase md:mb-12 md:px-8">
        {apoyo}
      </p>

      <div className="mx-auto w-full max-w-6xl overflow-hidden px-4 mask-[linear-gradient(to_right,transparent_0,black_40px,black_calc(100%-40px),transparent_100%)] md:px-6 md:mask-[linear-gradient(to_right,transparent_0,black_96px,black_calc(100%-96px),transparent_100%)]">
        <div className="cinta-marcas flex w-max">
          <FilaMarcas marcas={bloque} />
          <FilaMarcas marcas={bloque} decorativo />
        </div>
      </div>
    </section>
  )
}
