# Portafolio · Ricardo A. Palma

Sitio personal con mi presentación, experiencia y proyectos (TaskFlow y Simplify). Estilo de plano técnico, con modo claro y oscuro.

## Tecnologías

React · TypeScript · Vite · Tailwind CSS. Es un sitio estático: no necesita servidor ni base de datos.

## Cómo ejecutarlo

Necesitas Node.js 20 o superior.

```bash
npm install
npm run dev        # abre http://localhost:5173
npm run build      # genera la versión final en dist/
npm run preview    # sirve dist/ para revisarla
```

## Dónde se cambia cada cosa

Todo el contenido está en `src/data/`, separado del diseño:

| Archivo | Contenido |
| --- | --- |
| `profile.ts` | Nombre, título, correo, GitHub, LinkedIn y ruta del CV |
| `stack.ts` | Tecnologías de la portada |
| `experience.ts` | Experiencia laboral (el texto entre `**asteriscos**` se resalta) |
| `projects.ts` | Proyectos: textos, capturas, video, repositorio y demo |

Los archivos estáticos están en `public/`:

- `public/cv/Ricardo-Palma-CV.pdf`: el CV que se descarga. Para actualizarlo, reemplaza el archivo con el mismo nombre.
- `public/media/<proyecto>/`: capturas (`.webp`) y video de demostración (`.mp4`, `.webm` y la imagen `demo-poster.jpg`).

Para agregar un proyecto: copia sus capturas y su video a `public/media/<nombre>/` y añade un bloque en `projects.ts`. Si el proyecto no está desplegado, omite el campo `demo` y el botón "Demo en vivo" no aparece.

### Convertir un GIF a video (con ffmpeg)

```bash
ffmpeg -i demo.gif -movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 24 demo.mp4
ffmpeg -i demo.gif -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libvpx-vp9 -b:v 0 -crf 36 demo.webm
ffmpeg -ss 7 -i demo.mp4 -vframes 1 demo-poster.jpg
```

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), entra con tu cuenta de GitHub y elige **Add New → Project**.
3. Importa el repositorio. Vercel detecta Vite solo (comando `npm run build`, carpeta `dist`).
4. Pulsa **Deploy**. Cada vez que subas cambios a GitHub, el sitio se actualiza solo.

Después del primer despliegue, cambia en `index.html` la línea `og:image` por la dirección completa (por ejemplo `https://tu-sitio.vercel.app/og-image.png`). LinkedIn y WhatsApp solo muestran la vista previa con una dirección completa.
