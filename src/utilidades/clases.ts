import { clsx, type ClassValue } from 'clsx'

export const clases = (...valores: ClassValue[]): string => clsx(valores)
