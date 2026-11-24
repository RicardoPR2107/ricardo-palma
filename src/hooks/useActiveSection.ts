import { useEffect, useState } from 'react'

/**
 * Devuelve el id de la sección que se está viendo. Una sección cuenta como activa
 * cuando su parte superior ya pasó el primer tercio de la pantalla.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight / 3
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      // Al llegar al final de la página, la última sección siempre queda activa
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      setActive(atBottom ? ids[ids.length - 1] : current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}
