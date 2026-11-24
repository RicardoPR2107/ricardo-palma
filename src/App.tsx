import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { profile } from './data/profile'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <Experience />
        <Projects />
      </main>
      <footer className="mx-auto mt-16 max-w-5xl px-5 sm:px-8">
        <div className="flex flex-wrap justify-between gap-2 border-t border-line py-4">
          <span className="label">© {new Date().getFullYear()} {profile.name}</span>
          <a href={`mailto:${profile.email}`} className="label hover:text-accent">
            {profile.email}
          </a>
        </div>
      </footer>
    </>
  )
}
