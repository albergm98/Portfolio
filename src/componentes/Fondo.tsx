import imagenHero from '../assets/hero-fondo.png'

export const Fondo = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    <img
      src={imagenHero}
      alt=""
      fetchPriority="high"
      className="absolute inset-0 size-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-tinta/65" />
    <div className="absolute inset-0 bg-gradient-to-t from-tinta via-tinta/55 to-tinta/30" />
    <div className="absolute -top-1/4 right-[-15%] h-[70vh] w-[55vw] rounded-full bg-[radial-gradient(circle,rgb(200_245_74/0.14),transparent_65%)]" />
    <div className="grano absolute inset-0 opacity-[0.08] mix-blend-overlay" />
  </div>
)
