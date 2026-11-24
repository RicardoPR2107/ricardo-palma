export type Shot = {
  src: string
  alt: string
}

export type Project = {
  name: string
  /** Logo del proyecto (ícono de la app) */
  logo: string
  description: string
  challenge: string
  learned: string
  techs: string[]
  /** Capturas de la galería. La primera es la imagen principal de la tarjeta. */
  shots: Shot[]
  video: { mp4: string; webm: string; poster: string }
  /** Fondo detrás de la imagen principal, para que las franjas libres se fundan con la captura */
  coverBg?: string
  repo: string
  /** Solo si el proyecto está desplegado */
  demo?: string
}

const tf = '/media/taskflow'
const sp = '/media/simplify'

export const projects: Project[] = [
  {
    name: 'TaskFlow',
    logo: `${tf}/logo.svg`,
    description:
      'Gestor de tareas con tablero Kanban: arrastras las tareas entre columnas, filtras por estado o prioridad y ves tu avance en un dashboard.',
    challenge:
      'Con una sola instancia de la API, el 95 % de las respuestas tardaba hasta 1,66 s. Con 3 instancias detrás de Nginx bajó a 0,62 s, sin errores.',
    learned:
      'A medir el rendimiento con k6 y Grafana en lugar de suponer, y a probar en cuatro niveles, incluida la accesibilidad.',
    techs: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'Nginx', 'Render'],
    shots: [
      { src: `${tf}/tablero-claro.webp`, alt: 'Tablero Kanban con tareas en cuatro columnas' },
      { src: `${tf}/tablero-oscuro.webp`, alt: 'Tablero Kanban en tema oscuro' },
      { src: `${tf}/tareas-claro.webp`, alt: 'Lista de tareas con búsqueda y filtros' },
      { src: `${tf}/tareas-oscuro.webp`, alt: 'Lista de tareas en tema oscuro' },
      { src: `${tf}/dashboard-claro.webp`, alt: 'Dashboard de productividad con gráficos' },
      { src: `${tf}/dashboard-oscuro.webp`, alt: 'Dashboard en tema oscuro' },
      { src: `${tf}/nueva-tarea-claro.webp`, alt: 'Ventana para crear una tarea' },
      { src: `${tf}/movil-tablero-claro.webp`, alt: 'Tablero en el teléfono' },
      { src: `${tf}/movil-dashboard-oscuro.webp`, alt: 'Dashboard en el teléfono, tema oscuro' },
    ],
    video: { mp4: `${tf}/demo.mp4`, webm: `${tf}/demo.webm`, poster: `${tf}/demo-poster.jpg` },
    coverBg: 'linear-gradient(#faf8f2 50%, #f3eee5 50%)',
    repo: 'https://github.com/RicardoPR2107/taskflow',
    demo: 'https://taskflow-lrr4.onrender.com',
  },
  {
    name: 'Simplify',
    logo: `${sp}/logo.svg`,
    description:
      'App de finanzas personales: registras ingresos y gastos, y te muestra el balance del mes y en qué categorías se va tu dinero.',
    challenge:
      'Manejar dinero sin errores de redondeo, porque en JavaScript 0.1 + 0.2 no da 0.3, y que la app siga funcionando aunque se caiga un servidor.',
    learned:
      'A proteger las reglas del negocio desde la propia base de datos y a optimizar Docker: la imagen bajó de 347 MB a 102 MB.',
    techs: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'Nginx'],
    shots: [
      { src: `${sp}/dashboard-claro.webp`, alt: 'Dashboard con el balance del mes' },
      { src: `${sp}/dashboard-oscuro.webp`, alt: 'Dashboard en tema oscuro' },
      { src: `${sp}/historial-claro.webp`, alt: 'Historial de movimientos con filtros' },
      { src: `${sp}/estadisticas-oscuro.webp`, alt: 'Estadísticas de los últimos seis meses' },
      { src: `${sp}/categorias-claro.webp`, alt: 'Categorías de gastos e ingresos' },
      { src: `${sp}/nuevo-movimiento-claro.webp`, alt: 'Formulario para registrar un movimiento' },
      { src: `${sp}/movil-dashboard.webp`, alt: 'Dashboard en el teléfono' },
      { src: `${sp}/movil-historial.webp`, alt: 'Historial en el teléfono' },
    ],
    video: { mp4: `${sp}/demo.mp4`, webm: `${sp}/demo.webm`, poster: `${sp}/demo-poster.jpg` },
    repo: 'https://github.com/RicardoPR2107/Simplify',
  },
]
