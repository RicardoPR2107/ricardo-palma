import { useEffect, useRef, type ReactNode } from 'react'
import { CloseIcon } from './Icons'

type ModalProps = {
  open: boolean
  onClose: () => void
  label: string
  children: ReactNode
}

/**
 * Ventana modal basada en <dialog>: el navegador maneja el foco y la tecla Esc.
 * Se cierra con el botón, con Esc o haciendo clic fuera del contenido.
 */
export function Modal({ open, onClose, label, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = 'hidden'
    }
    if (!open && dialog.open) dialog.close()
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="m-auto max-h-[92vh] w-[min(1100px,94vw)] overflow-visible bg-transparent p-0 text-ink"
    >
      {open && (
        <div className="relative border border-line bg-paper p-3 sm:p-4">
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-3 -right-3 z-10 grid size-9 place-items-center rounded-full border border-line bg-paper transition-colors hover:border-accent hover:text-accent"
            aria-label="Cerrar"
          >
            <CloseIcon size={18} />
          </button>
          {children}
        </div>
      )}
    </dialog>
  )
}
