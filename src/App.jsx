import Projects from '/src/components/Projects.jsx'
import AboutMe from '/src/components/AboutMe.jsx'
import Description from '/src/components/Description.jsx'
import Navbar from '/src/components/Navbar.jsx'
import Footer from '/src/components/Footer.jsx'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-950 antialised selection:bg-purple-400 selection:text-neutral-100">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-8">

      <Navbar />
      <Description />
      <AboutMe />
      <Projects />
      <Footer/>


    </div>
    </div>
  )
}

export default App
