# Decisiones del portfolio

## Objetivo

Una sola página con dos modos de visita (trabajador / freelance): CV orientado a empleo o escaparate de encargos, según lo que elija quien entra. El enlace «CV» descarga `/assets/img/pdf/CV.pdf`.

## Despliegue

- Servir siempre `dist/` (build Vite), nunca el árbol fuente
- GitHub Pages: Actions con `VITE_BASE=/Portfolio/` → `https://albergm98.github.io/Portfolio/`

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Sin CMS ni backend: el contenido vive en `src/datos/contenido.ts`
- Textos en castellano de España por defecto; inglés opcional (bandera en la barra superior)
- Preferencia de idioma en `localStorage` (`portfolio-idioma`)
- Capa EN en `src/datos/idioma.ts`; `obtenerContenido(modo, idioma)` fusiona la traducción

## Modos de visita

- Sin pantalla de entrada: el portfolio carga directo
- Interruptor Trabajador / Freelance bajo el menú; idioma (banderas ES/EN) dentro de la barra superior
- Preferencia en `localStorage` (`portfolio-modo`); por defecto `freelance`
- Helper `obtenerContenido(modo, idioma)` fusiona `comun` + variante + traducción
- Cinta de marcas sin enlaces (trabajador y freelance)
- `trabajador`: trabajos de cuenta (Chat TMT, Time to Win, B2B/BT, Dentsu Hub, ZeroScan, Merchandising, Hospitalities sin URL pública), stack, experiencia, estudios, cinta de cuentas; sin servicios
- `freelance`: trabajos propios (El Bule, CartaDigitalizada, Card Trade), servicios, stack, clientes, experiencia, estudios
- Proyectos internos de empresa: imagen y ficha sin `urlDemo` / `urlRepo`; la imagen se abre a pantalla completa desde la tarjeta
- Modo trabajador: chips con logos (Todas / MásOrange / Dentsu / ISDIN) filtran trabajos por `cliente`

## Modelo de venta (solo modo freelance)

- Servicios abiertos (landings, webs, automatización, apps internas, mejoras…), no paquetes cerrados
- Sin precios fijos: cada proyecto se presupuesta a medida tras contacto
- Sin pasarela de pago: menos fricción y mejor encaje freelance
- Contacto por email (`mailto` con asunto) y WhatsApp pre-relleno

## Estructura de la página (según modo)

1. Cabecera con anclas e interruptores de modo e idioma
2. Hero a viewport completo (marca dominante; textos por modo e idioma)
3. Trabajos (solo freelance)
4. Stack / habilidades
5. Servicios (solo freelance)
6. Cinta de clientes/cuentas + experiencia (git graph) + Estudios
7. Contacto
8. Pie

## Visual

- Skill `frontend-agencia` (dirección Ink & limón)
- Stack visual: anillos + barras de nivel (1–5) y chips de tecnologías
- Tipografía: Space Grotesk (display) + DM Sans (cuerpo)
- Paleta: tinta `#101010`, papel `#F0F0EE`, acento limón `#C8F54A`
- Hero oscuro a sangre con imagen de fondo armonizada + overlays de tinta
- Cinta de logos sobre fondo tinta, logos en blanco
- Iconos Lucide en CTAs, menú, contacto, servicios y stack
- Tecnologías del stack: `react-icons` + mapa en `iconosStack.tsx`
- Motion: entrada del hero, revelado al scroll, carga circular con GSAP
- Respeto a `prefers-reduced-motion`

## Fuera de alcance

Blog, autenticación, checkout/Stripe, URLs `?modo=` / `?lang=`, plantilla Astro heredada.
