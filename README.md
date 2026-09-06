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

### albertogallardo.cloud (Dokploy)

**Importante:** si en los logs aparece `GET /src/principal.tsx`, el Build Type está mal.
`Static` monta el repo entero en nginx y rompe Vite. El Dockerfile del repo usa `nginx:1.27`; si ves `nginx/1.31.x`, no está usando el Dockerfile.

Elige **una** de estas dos opciones en la app de Dokploy (General → Build Type) y haz **Redeploy**:

#### Opción A — Dockerfile (recomendada)

1. Build Type: `Dockerfile`
2. Dockerfile Path: `Dockerfile`
3. Docker Context Path: `.`
4. Save → Redeploy

#### Opción B — Nixpacks + carpeta `dist`

1. Build Type: `Nixpacks`
2. Publish Directory: `dist`
3. Save → Redeploy

Comprobación: tras el deploy, los logs deben pedir `/assets/index-….js`, no `/src/principal.tsx`.

## Decisiones

Ver [`docs/decisiones.md`](docs/decisiones.md).
