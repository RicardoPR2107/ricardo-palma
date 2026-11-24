import type { CSSProperties } from 'react'
import { profile } from '../data/profile'
import { stack } from '../data/stack'
import { BrandIcon, BrowserCheckIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'

export function Hero() {
  return (
    <section id="inicio" className="pt-20 sm:pt-28">
      <div className="text-center">
        <h1 className="text-[clamp(3.25rem,10vw,7.75rem)] leading-[0.95] font-bold tracking-[-0.03em]">
          {profile.name}
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-7 flex items-center justify-center gap-4 text-lg font-medium sm:text-xl">
          <span className="hidden h-0.5 w-10 bg-accent sm:block" aria-hidden="true" />
          <span>
            {profile.degree} <span className="text-muted">/</span> {profile.role}
          </span>
          <span className="hidden h-0.5 w-10 bg-accent sm:block" aria-hidden="true" />
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed sm:text-lg">
          Diseño soluciones web eficientes y confiables con{' '}
          <strong className="font-medium text-accent">React.js, Node.js y Express.js</strong>, uniendo
          buenas prácticas de desarrollo, testing funcional y automatización para garantizar la calidad
          del software.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn btn-lg">
            <MailIcon size={20} />
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-lg">
            <GithubIcon size={20} />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-lg">
            <LinkedinIcon size={20} />
            LinkedIn
          </a>
        </div>
        <div className="mt-4">
          <a href={profile.cv} download className="btn btn-lg btn-accent">
            <DownloadIcon size={20} />
            Descargar CV
          </a>
        </div>
      </div>

      <ul
        aria-label="Tecnologías que uso"
        className="mt-10 grid grid-cols-3 gap-x-2 gap-y-7 border border-line bg-paper px-4 py-8 sm:mt-12 sm:grid-cols-6 xl:grid-cols-12"
      >
        {stack.map((tech) => (
          <li
            key={tech.name}
            className="group flex flex-col items-center gap-2.5"
            style={{ '--brand': tech.color } as CSSProperties}
          >
            <span className="transition-colors group-hover:text-(--brand)">
              {tech.path ? <BrandIcon path={tech.path} size={34} /> : <BrowserCheckIcon size={34} />}
            </span>
            <span className="label text-xs">{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
