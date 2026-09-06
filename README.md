# Portfolio — Alberto

Portfolio one-page con dos modos: **trabajador** (empleo) y **freelance** (encargos).

## Arranque

```powershell
npm install
npm run dev
```

Build de producción:

```powershell
npm run build
npm run preview
```

## Editar contenido

Todo el texto editable está en [`src/datos/contenido.ts`](src/datos/contenido.ts):

- `comun`: nombre, contacto, habilidades, experiencia, estudios
- `modos.trabajador` / `modos.freelance`: rol, frase, nav, trabajos, servicios, marcas, textos y flags de sección
- `puerta`: copy de la pantalla de elección

El modo se elige con el interruptor debajo del menú y se guarda en `localStorage` (`portfolio-modo`).

Iconos: [Lucide](https://lucide.dev) vía `lucide-react`, mapeados en [`src/utilidades/iconos.ts`](src/utilidades/iconos.ts).

## Despliegue

Proyecto estático (Vite). Sube la carpeta `dist/` a Vercel, Netlify o cualquier hosting estático.

## Decisiones

Ver [`docs/decisiones.md`](docs/decisiones.md).
