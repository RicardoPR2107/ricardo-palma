import { useTheme } from '../hooks/useTheme'
import { MoonIcon, SunIcon } from './Icons'

const links = [
  { href: '#inicio', label: 'inicio' },
  { href: '#experiencia', label: 'experiencia' },
  { href: '#proyectos', label: 'proyectos' },
]

export function Navbar() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" className="text-[15px] font-bold" aria-label="Ir al inicio">
          RP<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.04em] transition-colors hover:text-accent sm:text-xs"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggle}
            className="grid size-8 place-items-center border border-line transition-colors hover:border-accent hover:text-accent"
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
