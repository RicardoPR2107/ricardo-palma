import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="proyectos" className="mt-16">
      <h2 className="section-title">Proyectos</h2>
      <div className="mt-3 space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
