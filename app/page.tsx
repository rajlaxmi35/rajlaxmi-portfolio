import Header from './components/Header'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Projects from './components/Experiences'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}