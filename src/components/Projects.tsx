import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="proyectos" className="mt-24 sm:mt-32">
      <h2 className="section-title">Proyectos</h2>
      <div className="mt-6 space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
