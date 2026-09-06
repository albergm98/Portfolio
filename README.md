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

Hay que servir la carpeta `dist/` tras `npm run build`. No subas el repo fuente como sitio estático: el `index.html` de desarrollo apunta a `/src/principal.tsx` y falla en producción.

### GitHub Pages (este repo)

1. Settings → Pages → Source: **GitHub Actions**
2. Cada push a `master`/`main` construye y publica en `https://albergm98.github.io/Portfolio/`
3. El workflow fija `VITE_BASE=/Portfolio/`

### Otro hosting (raíz de dominio)

```powershell
npm run build
```

Sube solo `dist/` (Vercel, Netlify, Hostinger, etc.). `VITE_BASE` por defecto es `/`.

## Decisiones

Ver [`docs/decisiones.md`](docs/decisiones.md).
