import profilepic from "/src/assets/headshot.jpg"

import { motion } from "framer-motion"

const AboutMe = () => {
  return (

    <section id="about-me">
        <div className="flex flex-wrap justify-center">
            <motion.div 
            initial={{ opacity: 0, x:-100 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.25, delay: 1 }}
            className="w-full max-w-96 lg:p-8">
                <img className="rounded-2xl" src={profilepic} alt="Headshot" />
            </motion.div>
            
            <motion.div 
            initial={{ opacity: 0, x:100 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.25, delay: 1 }}
            className="w-full lg:w-1/2">
                <p className="my-2 max-w-xl py-6 text-2xl">I am a technically driven creative who loves to create and design beautiful human experiences</p>

                <div className="container mx-auto grid grid-cols-3">
                    <div>
                        <h2 className="font-bold text-lg text-purple-400">//Designer</h2>
                            <ul className="indent-3">
                                <li>UX Design</li>
                                <li>UI Design</li>
                                <li>CAD Design</li>
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                            </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg text-purple-400">//Developer</h2>
                            <ul className="indent-3">
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>HTML / CSS</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Tailwind</li>
                                <li>MATLAB</li>
                            </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg text-purple-400">//Researcher</h2>
                            <ul className="indent-3">
                                <li>A/B Testing</li>
                                <li>Usability Testing</li>
                                <li>User Interviews</li>
                                <li>User Personas</li>
                                <li>Storyboarding</li>
                                <li>Data Analytics</li>
                            </ul>
                    </div>
                </div>

            </motion.div>

            
        
        </div>
    </section>
  )
}

export default AboutMe
