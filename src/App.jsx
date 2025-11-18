import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import AnimatedBackground from './components/AnimatedBackground'
import Cursor from './components/Cursor'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <AnimatedBackground />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Footer />
    </div>
  )
}

export default App
