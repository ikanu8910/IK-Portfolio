import aboutImg from "/Users/isha.kanu/Documents/GitHub/IKPort/src/assets/about.jpg"
import { motion } from "framer-motion"

const Projects = () => {
  return (

    <div className="flex flex-wrap">
        <div className="w-full pt-20">
            <motion.h1
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x:-100 }}
            transition={{ duration: 1.5, delay: 0 }}
            className="font-bold text-4xl text-purple-400">//Selected Works</motion.h1>
        </div>


        <motion.div 
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x:100 }}
        transition={{ duration: 1.5, delay: 0 }}
        className="container mx-auto grid grid-cols-3 justify-items-center">

            <div className="max-w-80 pb-22 pt-10">
              <a href="https://github.com/ikanu8910/DISH-Technologies-ITONICS-Landing-Page.git" target="_blank" className="font-bold text-xl underline">DISH Technologies</a>
                <p className="pb-2">Innovation Management Platform Landing Page For Hardware Engineering</p>
                  <a href="https://github.com/ikanu8910/DISH-Technologies-ITONICS-Landing-Page.git" target="_blank">
                    <img className="rounded-2xl pb-2" src={aboutImg} alt="about" />
                  </a>
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Design</span>
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Development</span>
                    <span className="mr-2 rounded bg-purple-300 px-2 py-1 text-sm font-medium text-neutral-100">2023</span>
            </div>

            <div className="max-w-80 pb-22 pt-10">
              <a href="https://github.com/ikanu8910/AR-Hololens-CPR-Guide.git" target="_blank" className="font-bold text-xl underline">Hololens CPR Guide</a>
                <p className="pb-2">Augmented Reality CPR Guide that displays the Red Cross CPR instructions</p>
                  <a href="https://github.com/ikanu8910/AR-Hololens-CPR-Guide.git" target="_blank">
                    <img className="rounded-2xl pb-2" src={aboutImg} alt="about" />
                  </a>
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Design</span>
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Development</span>
                    <span className="mr-2 rounded bg-purple-300 px-2 py-1 text-sm font-medium text-neutral-100">2021</span>
            </div>

            <div className="max-w-80 pb-22 pt-10">
              <a href="https://github.com/ikanu8910/VR-Escape-Room.git" target="_blank" className="font-bold text-xl underline">VR Escape Room</a>
                <p className="pb-8">3 Puzzle Virtual Reality Escape Room</p>
                  <a href="https://github.com/ikanu8910/VR-Escape-Room.git" target="_blank">
                    <img className="rounded-2xl pb-2" src={aboutImg} alt="about" />
                  </a>
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Design</span>
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Development</span>
                    <span className="mr-2 rounded bg-purple-300 px-2 py-1 text-sm font-medium text-neutral-100">2021</span>
            </div>

        </motion.div>

    </div>




  )
}

export default Projects
