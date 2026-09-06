import type { Hito } from '../tipos/contenido'
import type { Idioma } from '../datos/idioma'

const meses: Record<string, number> = {
  ene: 1,
  jan: 1,
  feb: 2,
  mar: 3,
  abr: 4,
  apr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  ago: 8,
  aug: 8,
  sep: 9,
  oct: 10,
  nov: 11,
  dic: 12,
  dec: 12,
}

type FechaMes = { anio: number; mes: number }

const parsearFecha = (texto: string, referencia: Date): FechaMes | null => {
  const limpio = texto.trim().toLowerCase()
  if (limpio === 'hoy' || limpio === 'today') {
    return { anio: referencia.getFullYear(), mes: referencia.getMonth() + 1 }
  }

  const partes = limpio.match(/^([a-záéíóú]+)\s+(\d{4})$/)
  if (!partes) return null

  const mes = meses[partes[1].slice(0, 3)]
  const anio = Number(partes[2])
  if (!mes || !anio) return null

  return { anio, mes }
}

const aNumero = (fecha: FechaMes): number => fecha.anio * 12 + fecha.mes

const contarMeses = (inicio: FechaMes, fin: FechaMes): number =>
  Math.max(aNumero(fin) - aNumero(inicio) + 1, 1)

const obtenerRango = (
  periodo: string,
  referencia: Date,
): { inicio: FechaMes; fin: FechaMes } | null => {
  const [inicioTexto, finTexto] = periodo.split(/\s*[—–-]\s*/)
  if (!inicioTexto || !finTexto) return null

  const inicio = parsearFecha(inicioTexto, referencia)
  const fin = parsearFecha(finTexto, referencia)
  if (!inicio || !fin) return null

  return { inicio, fin }
}

export const formatearMeses = (
  totalMeses: number,
  idioma: Idioma = 'es',
): string => {
  const anios = Math.floor(totalMeses / 12)
  const mesesRestantes = totalMeses % 12

  if (idioma === 'en') {
    if (anios === 0) {
      return totalMeses === 1 ? '1 month' : `${totalMeses} months`
    }
    const textoAnios = anios === 1 ? '1 year' : `${anios} years`
    if (mesesRestantes === 0) return textoAnios
    const textoMeses =
      mesesRestantes === 1 ? '1 month' : `${mesesRestantes} months`
    return `${textoAnios} · ${textoMeses}`
  }

  if (anios === 0) {
    return totalMeses === 1 ? '1 mes' : `${totalMeses} meses`
  }

  const textoAnios = anios === 1 ? '1 año' : `${anios} años`
  if (mesesRestantes === 0) return textoAnios

  const textoMeses = mesesRestantes === 1 ? '1 mes' : `${mesesRestantes} meses`
  return `${textoAnios} · ${textoMeses}`
}

/** Duración de un periodo concreto ("Ene 2024 — Sep 2025"). */
export const formatearDuracion = (
  periodo: string,
  referencia: Date = new Date(),
  idioma: Idioma = 'es',
): string => {
  const rango = obtenerRango(periodo, referencia)
  if (!rango) return ''
  return formatearMeses(contarMeses(rango.inicio, rango.fin), idioma)
}

/** Unión temporal de varios periodos (inicio más antiguo → fin más reciente). */
export const formatearDuracionEmpresa = (
  hitos: Hito[],
  referencia: Date = new Date(),
  idioma: Idioma = 'es',
): string => {
  const rangos = hitos
    .map((hito) => obtenerRango(hito.periodo, referencia))
    .filter((rango): rango is NonNullable<typeof rango> => rango !== null)

  if (rangos.length === 0) return ''

  const inicio = rangos.reduce(
    (acc, rango) => (aNumero(rango.inicio) < aNumero(acc) ? rango.inicio : acc),
    rangos[0].inicio,
  )
  const fin = rangos.reduce(
    (acc, rango) => (aNumero(rango.fin) > aNumero(acc) ? rango.fin : acc),
    rangos[0].fin,
  )

  return formatearMeses(contarMeses(inicio, fin), idioma)
}

/** Total de production: del primer empleo a la fecha más reciente. */
export const formatearDuracionProduccion = (
  hitos: Hito[],
  referencia: Date = new Date(),
  idioma: Idioma = 'es',
): string => formatearDuracionEmpresa(hitos, referencia, idioma)
