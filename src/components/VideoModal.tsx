import type { Project } from '../data/projects'
import { Modal } from './Modal'

type VideoModalProps = {
  project: Project
  open: boolean
  onClose: () => void
}

export function VideoModal({ project, open, onClose }: VideoModalProps) {
  const { video, name } = project

  return (
    <Modal open={open} onClose={onClose} label={`Video de demostración de ${name}`}>
      {/* Al cerrar, el modal desmonta el video y la reproducción se detiene */}
      <video
        controls
        autoPlay
        muted
        loop
        playsInline
        poster={video.poster}
        className="mx-auto max-h-[78vh] w-full bg-(--shot)"
      >
        <source src={video.webm} type="video/webm" />
        <source src={video.mp4} type="video/mp4" />
        Tu navegador no puede reproducir este video.
      </video>
      <p className="label mt-2 text-center">Demostración de {name}</p>
    </Modal>
  )
}
