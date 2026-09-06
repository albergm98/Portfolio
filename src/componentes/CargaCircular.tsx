import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, type ReactNode } from 'react'
import { fuente } from '../datos/contenido'

gsap.registerPlugin(useGSAP)

type Props = {
  children: ReactNode
}

/** Capa de carga a pantalla completa: revelado circular con GSAP. */
export const CargaCircular = ({ children }: Props) => {
  const [visible, setVisible] = useState(true)
  const capaRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const logo = fuente.comun.logo

  useGSAP(() => {
    const capa = capaRef.current
    if (!capa) return

    const reducida = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducida) {
      setVisible(false)
      return
    }

    gsap.set(capa, { clipPath: 'circle(150% at 50% 50%)' })
    if (logoRef.current) gsap.set(logoRef.current, { opacity: 0, scale: 0.85 })

    const linea = gsap.timeline({
      onComplete: () => setVisible(false),
    })

    if (logoRef.current) {
      linea
        .to(logoRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: 'power2.out',
        })
        .to(logoRef.current, {
          opacity: 0,
          scale: 1.08,
          duration: 0.35,
          ease: 'power2.in',
          delay: 0.15,
        })
    }

    linea.to(capa, {
      clipPath: 'circle(0% at 50% 50%)',
      duration: 1.05,
      ease: 'power3.inOut',
    })
  }, [])

  return (
    <>
      {children}
      {visible ? (
        <div
          ref={capaRef}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-tinta/70 backdrop-blur-[28px]"
          style={{ clipPath: 'circle(150% at 50% 50%)' }}
          aria-hidden
        >
          {logo ? (
            <img
              ref={logoRef}
              src={logo}
              alt=""
              className="h-24 w-auto object-contain md:h-32"
            />
          ) : null}
        </div>
      ) : null}
    </>
  )
}
