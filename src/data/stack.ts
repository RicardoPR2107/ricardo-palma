import {
  siDocker,
  siExpress,
  siGithubactions,
  siK6,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
  siVitest,
} from 'simple-icons'

export type Tech = {
  name: string
  /** Trazo SVG del logo (viewBox 0 0 24 24). Sin trazo se usa un ícono genérico. */
  path?: string
  /** Color de marca que toma el logo al pasar el mouse */
  color: string
}

export const stack: Tech[] = [
  { name: 'React', path: siReact.path, color: '#61DAFB' },
  { name: 'TypeScript', path: siTypescript.path, color: '#3178C6' },
  { name: 'Tailwind', path: siTailwindcss.path, color: '#06B6D4' },
  { name: 'Node.js', path: siNodedotjs.path, color: '#5FA04E' },
  { name: 'Express', path: siExpress.path, color: 'currentColor' },
  { name: 'PostgreSQL', path: siPostgresql.path, color: '#4169E1' },
  { name: 'Prisma', path: siPrisma.path, color: 'currentColor' },
  { name: 'Playwright', color: '#2EAD33' },
  { name: 'Vitest', path: siVitest.path, color: '#6E9F18' },
  { name: 'k6', path: siK6.path, color: '#7D64FF' },
  { name: 'Docker', path: siDocker.path, color: '#2496ED' },
  { name: 'Actions', path: siGithubactions.path, color: '#2088FF' },
]
