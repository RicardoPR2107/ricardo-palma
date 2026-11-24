import { experience } from '../data/experience'
import { Highlight } from './Highlight'

export function Experience() {
  return (
    <section id="experiencia" className="mt-32 sm:mt-44">
      <h2 className="section-title">Experiencia</h2>
      <ol className="mt-8 space-y-4">
        {experience.map((job) => (
          <li key={job.company + job.period} className="flex gap-5 border border-line bg-paper px-6 py-7 sm:px-8 sm:py-8">
            <div className="flex w-2.5 flex-col items-center pt-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-accent" />
              <span className="mt-1 w-px flex-1 bg-line" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold sm:text-2xl">
                  {job.role} <span className="font-normal text-muted">·</span>{' '}
                  <span className="text-accent">{job.company}</span>
                </h3>
                <span className="font-mono text-xs sm:text-[13px]">{job.period}</span>
              </div>
              <p className="label mt-1.5 text-xs">{job.detail}</p>
              {job.paragraphs.map((text, i) => (
                <p key={i} className="mt-4 max-w-5xl text-[15px] leading-relaxed sm:text-base">
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
