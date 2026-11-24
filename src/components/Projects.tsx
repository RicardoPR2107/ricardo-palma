import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="proyectos" className="mt-32 sm:mt-44">
      <h2 className="section-title">Proyectos</h2>
      <div className="mt-8 space-y-14 sm:space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
