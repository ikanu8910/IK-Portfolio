import { SiAboutdotme } from "react-icons/si"
import { GoProjectRoadmap } from "react-icons/go"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
    <header className = "Navbar">
      <nav className="mb-20 flex items-center justify-between py-6 text-purple-500">
          <>Isha Kanu</>
          
          <div className="m-8 flex items-center justify-center gap-4 py-2xl">
          <SiAboutdotme />
          <GoProjectRoadmap />
          <FaGithub />
          </div>
      
      </nav>
    </header>

  )
}

export default Navbar
