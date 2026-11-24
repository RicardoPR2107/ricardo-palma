import { useTheme } from '../hooks/useTheme'
import { MoonIcon, SunIcon } from './Icons'

const links = [
  { href: '#inicio', label: 'Inicio', desktopOnly: true },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
]

export function Navbar() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-12 sm:py-5">
        <a href="#inicio" className="text-xl font-bold sm:text-2xl" aria-label="Ir al inicio">
          RP<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-3.5 sm:gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-xs tracking-[0.08em] uppercase transition-colors hover:text-accent sm:text-[15px] sm:tracking-[0.12em] ${link.desktopOnly ? 'hidden sm:inline' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggle}
            className="grid size-9 place-items-center sm:size-11 border border-line transition-colors hover:border-accent hover:text-accent"
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
