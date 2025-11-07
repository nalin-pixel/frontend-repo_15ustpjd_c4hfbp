import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <footer className="border-t border-gray-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-sm text-gray-600">Built with React, Tailwind, and Framer Motion</div>
        </div>
      </footer>
    </div>
  )
}

export default App
