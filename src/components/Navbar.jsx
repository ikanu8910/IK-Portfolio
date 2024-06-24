import { SiAboutdotme } from "react-icons/si"
import { GoProjectRoadmap } from "react-icons/go"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
    <header className = "Navbar">
      <section id="TopNav">
        <nav className="mb-20 flex items-center justify-between py-6 text-purple-500">
            <>Isha Kanu</>
            
            <div className="m-8 flex items-center justify-center gap-4 py-2xl">

            <a href="#about-me">
              <SiAboutdotme />
            </a>
            
            <a href="#projects">
              <GoProjectRoadmap />
            </a>

            <a href="https://github.com/ikanu8910?tab=repositories" target="_blank">
              <FaGithub />
            </a>

            </div>
        
        </nav>

      </section>

    </header>

  )
}

export default Navbar
