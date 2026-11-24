import type { SVGProps } from 'react'
import { siGithub } from 'simple-icons'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

/** Base para íconos de línea (estilo outline, trazo de 1.75) */
function Line({ size = 18, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export const MailIcon = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Line>
)

export const DownloadIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    <path d="m7 11 5 5 5-5" />
    <path d="M12 4v12" />
  </Line>
)

export const EyeIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
    <path d="M21 12c-2.4 4-5.4 6-9 6s-6.6-2-9-6c2.4-4 5.4-6 9-6s6.6 2 9 6" />
  </Line>
)

export const PlayIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M7 4v16l13-8z" />
  </Line>
)

export const CloseIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Line>
)

export const ChevronLeftIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="m15 6-6 6 6 6" />
  </Line>
)

export const ChevronRightIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="m9 6 6 6-6 6" />
  </Line>
)

export const ArrowUpRightIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M17 7 7 17M8 7h9v9" />
  </Line>
)

export const SunIcon = (p: IconProps) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7" />
  </Line>
)

export const MoonIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
  </Line>
)

export const LinkedinIcon = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
  </Line>
)

/** Ícono genérico para tecnologías sin logo disponible (navegador con prueba aprobada) */
export const BrowserCheckIcon = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 8h18M6.5 6h.01M9 6h.01" />
    <path d="m9 14 2 2 4-4" />
  </Line>
)

/** Ícono relleno a partir de un trazo de simple-icons */
export function BrandIcon({ path, size = 18, ...props }: IconProps & { path: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d={path} />
    </svg>
  )
}

export const GithubIcon = (p: IconProps) => <BrandIcon path={siGithub.path} {...p} />
