import type { CSSProperties } from 'react'
import { profile } from '../data/profile'
import { stack } from '../data/stack'
import { BrandIcon, BrowserCheckIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'

export function Hero() {
  return (
    <section id="inicio" className="pt-16 sm:pt-20">
      <div className="text-center">
        <h1 className="text-[clamp(2.75rem,9vw,4.75rem)] leading-[0.95] font-bold tracking-[-0.03em]">
          {profile.name}
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-4 flex items-center justify-center gap-3 text-[15px] font-medium">
          <span className="hidden h-0.5 w-6 bg-accent sm:block" aria-hidden="true" />
          <span>
            {profile.degree} <span className="text-muted">/</span> {profile.role}
          </span>
          <span className="hidden h-0.5 w-6 bg-accent sm:block" aria-hidden="true" />
        </p>

        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed">
          Diseño soluciones web eficientes y confiables con{' '}
          <strong className="font-medium text-accent">React.js, Node.js y Express.js</strong>, uniendo
          buenas prácticas de desarrollo, testing funcional y automatización para garantizar la calidad
          del software.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <a href={`mailto:${profile.email}`} className="btn">
            <MailIcon />
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn">
            <GithubIcon />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn">
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>
        <div className="mt-2.5">
          <a href={profile.cv} download className="btn btn-accent">
            <DownloadIcon />
            Descargar CV
          </a>
        </div>
      </div>

      <ul
        aria-label="Tecnologías que uso"
        className="mt-12 grid grid-cols-3 gap-x-2 gap-y-5 border border-line bg-paper px-3 py-5 sm:grid-cols-6"
      >
        {stack.map((tech) => (
          <li
            key={tech.name}
            className="group flex flex-col items-center gap-2"
            style={{ '--brand': tech.color } as CSSProperties}
          >
            <span className="transition-colors group-hover:text-(--brand)">
              {tech.path ? <BrandIcon path={tech.path} size={28} /> : <BrowserCheckIcon size={28} />}
            </span>
            <span className="label">{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
