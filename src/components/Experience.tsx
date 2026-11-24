import { experience } from '../data/experience'
import { Highlight } from './Highlight'

export function Experience() {
  return (
    <section id="experiencia" className="mt-16">
      <h2 className="section-title">Experiencia</h2>
      <ol className="mt-3 space-y-3">
        {experience.map((job) => (
          <li key={job.company + job.period} className="flex gap-4 border border-line bg-paper px-5 py-5">
            <div className="flex w-2.5 flex-col items-center pt-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-accent" />
              <span className="mt-1 w-px flex-1 bg-line" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold">
                  {job.role} <span className="font-normal text-muted">·</span>{' '}
                  <span className="text-accent">{job.company}</span>
                </h3>
                <span className="font-mono text-[11px]">{job.period}</span>
              </div>
              <p className="label mt-1">{job.detail}</p>
              {job.paragraphs.map((text, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed">
                  <Highlight text={text} />
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
