import { useEffect, useRef, useState, type ReactNode } from 'react'
import { clases } from '../utilidades/clases'

type Props = {
  children: ReactNode
  clase?: string
}

export const Revelado = ({ children, clase }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada?.isIntersecting) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { threshold: 0.12 },
    )

    observador.observe(nodo)
    return () => observador.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={clases(
        'transition-[opacity,transform] duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        clase,
      )}
    >
      {children}
    </div>
  )
}
