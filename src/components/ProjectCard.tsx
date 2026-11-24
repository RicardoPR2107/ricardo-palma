import { useState } from 'react'
import type { Project } from '../data/projects'
import { Gallery } from './Gallery'
import { ArrowUpRightIcon, EyeIcon, GithubIcon, PlayIcon } from './Icons'
import { VideoModal } from './VideoModal'

export function ProjectCard({ project }: { project: Project }) {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const cover = project.shots[0]

  return (
    <article className="grid border border-line bg-paper md:grid-cols-[1.25fr_1fr]">
      <button
        type="button"
        onClick={() => setGalleryOpen(true)}
        className="group relative block aspect-[16/10] overflow-hidden border-b border-line bg-(--shot) md:aspect-auto md:min-h-full md:border-r md:border-b-0"
        style={project.coverBg ? { background: project.coverBg } : undefined}
        aria-label={`Ver galería de ${project.name} (${project.shots.length} imágenes)`}
      >
        <img
          src={cover.src}
          alt={cover.alt}
          loading="lazy"
          className="absolute inset-0 size-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/15" aria-hidden="true" />
        <span
          className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full bg-accent text-on-accent transition-transform group-hover:scale-110"
          aria-hidden="true"
        >
          <EyeIcon size={18} />
        </span>
      </button>

      <div className="flex flex-col gap-3 px-5 py-5">
        <div className="flex items-center gap-3">
          <img src={project.logo} alt="" width={36} height={36} className="size-9 shrink-0" />
          <h3 className="text-2xl font-bold">{project.name}</h3>
        </div>
        <p className="text-sm leading-relaxed">{project.description}</p>

        <div>
          <p className="font-mono text-[11px] text-accent">EL RETO</p>
          <p className="mt-0.5 text-sm leading-relaxed">{project.challenge}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] text-accent">LO QUE APRENDÍ</p>
          <p className="mt-0.5 text-sm leading-relaxed">{project.learned}</p>
        </div>

        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías principales">
          {project.techs.map((tech) => (
            <li key={tech} className="border border-muted px-2 py-0.5 font-mono text-[11px]">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-1 flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="mr-1 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent underline underline-offset-4 hover:no-underline"
          >
            <PlayIcon size={14} />
            ver video
          </button>
          <a href={project.repo} target="_blank" rel="noreferrer" className="btn">
            <GithubIcon />
            Código
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-accent">
              Demo en vivo
              <ArrowUpRightIcon />
            </a>
          )}
        </div>
      </div>

      <Gallery
        title={project.name}
        shots={project.shots}
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
      <VideoModal project={project} open={videoOpen} onClose={() => setVideoOpen(false)} />
    </article>
  )
}
