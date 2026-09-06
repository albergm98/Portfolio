import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { obtenerContenido } from '../datos/contenido'
import type { Idioma } from '../datos/idioma'
import type { ContenidoResuelto, ModoVisita } from '../tipos/contenido'

const CLAVE_MODO = 'portfolio-modo'
const CLAVE_IDIOMA = 'portfolio-idioma'
const MODO_INICIAL: ModoVisita = 'freelance'
const IDIOMA_INICIAL: Idioma = 'es'

type ValorModoVisita = {
  modo: ModoVisita
  idioma: Idioma
  listo: boolean
  contenido: ContenidoResuelto
  cambiarModo: (modo: ModoVisita) => void
  cambiarIdioma: (idioma: Idioma) => void
}

const ContextoModoVisita = createContext<ValorModoVisita | null>(null)

const esModoValido = (valor: string | null): valor is ModoVisita =>
  valor === 'trabajador' || valor === 'freelance'

const esIdiomaValido = (valor: string | null): valor is Idioma =>
  valor === 'es' || valor === 'en'

export const ProveedorModoVisita = ({ children }: { children: ReactNode }) => {
  const [modo, setModo] = useState<ModoVisita>(MODO_INICIAL)
  const [idioma, setIdioma] = useState<Idioma>(IDIOMA_INICIAL)
  const [listo, setListo] = useState(false)

  useEffect(() => {
    const modoGuardado = localStorage.getItem(CLAVE_MODO)
    const idiomaGuardado = localStorage.getItem(CLAVE_IDIOMA)
    if (esModoValido(modoGuardado)) setModo(modoGuardado)
    if (esIdiomaValido(idiomaGuardado)) setIdioma(idiomaGuardado)
    setListo(true)
  }, [])

  useEffect(() => {
    document.documentElement.lang = idioma
  }, [idioma])

  const cambiarModo = (siguiente: ModoVisita) => {
    if (siguiente === modo) return
    localStorage.setItem(CLAVE_MODO, siguiente)
    setModo(siguiente)
  }

  const cambiarIdioma = (siguiente: Idioma) => {
    if (siguiente === idioma) return
    localStorage.setItem(CLAVE_IDIOMA, siguiente)
    setIdioma(siguiente)
  }

  const valor: ValorModoVisita = {
    modo,
    idioma,
    listo,
    contenido: obtenerContenido(modo, idioma),
    cambiarModo,
    cambiarIdioma,
  }

  return (
    <ContextoModoVisita.Provider value={valor}>
      {children}
    </ContextoModoVisita.Provider>
  )
}

export const usarModoVisita = (): ValorModoVisita => {
  const contexto = useContext(ContextoModoVisita)
  if (!contexto) {
    throw new Error('usarModoVisita debe usarse dentro de ProveedorModoVisita')
  }
  return contexto
}

export const usarContenido = (): ContenidoResuelto =>
  usarModoVisita().contenido
