import { useCallback, useState } from 'react'

export type Theme = 'light' | 'dark'

/** El tema inicial lo fija el script de index.html (preferencia guardada o la del sistema). */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) ?? 'light',
  )

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Sin acceso al almacenamiento: el tema solo dura esta visita
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
