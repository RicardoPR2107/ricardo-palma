import { useEffect, useState } from 'react'
import type { Shot } from '../data/projects'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'
import { Modal } from './Modal'

type GalleryProps = {
  title: string
  shots: Shot[]
  open: boolean
  onClose: () => void
}

export function Gallery({ title, shots, open, onClose }: GalleryProps) {
  const [index, setIndex] = useState(0)
  const total = shots.length
  const go = (step: number) => setIndex((i) => (i + step + total) % total)

  // Siempre empieza en la primera imagen
  useEffect(() => {
    if (open) setIndex(0)
  }, [open])

  // Flechas del teclado para avanzar y retroceder
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, total])

  const shot = shots[index]

  return (
    <Modal open={open} onClose={onClose} label={`Galería de ${title}`}>
      <div className="flex h-[min(70vh,640px)] items-center justify-center overflow-hidden bg-(--shot)">
        <img src={shot.src} alt={shot.alt} className="size-full object-contain" />
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <button type="button" onClick={() => go(-1)} className="btn" aria-label="Imagen anterior">
          <ChevronLeftIcon />
        </button>
        <p className="text-center text-sm" aria-live="polite">
          <span className="label mr-2">
            {index + 1} / {total}
          </span>
          {shot.alt}
        </p>
        <button type="button" onClick={() => go(1)} className="btn" aria-label="Imagen siguiente">
          <ChevronRightIcon />
        </button>
      </div>
    </Modal>
  )
}
