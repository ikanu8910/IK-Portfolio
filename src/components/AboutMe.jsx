import aboutImg from "/Users/isha.kanu/Documents/GitHub/IKPort/src/assets/about.jpg"
import { ABOUTME_CONTENT } from "../constants/index"

const AboutMe = () => {
  return (
    <div className="flex flex-wrap">
        <div className="w-full max-w-96 lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="about" />

            </div>
        </div>
        
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6 text-2xl">{ABOUTME_CONTENT}</p>
            </div>

            <div className="container mx-auto grid grid-cols-3">
                <div>
                    <h2 className="font-bold text-lg">//Designer</h2>
                        <ul class="indent-2">
                            <li>UX Design</li>
                            <li>UI Design</li>
                            <li>CAD Design</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                        </ul>
                </div>
                <div>
                    <h2 className="font-bold text-lg">//Developer</h2>
                        <ul class="indent-2">
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
                    <h2 className="font-bold text-lg">//Researcher</h2>
                        <ul class="indent-2">
                            <li>A/B Testing</li>
                            <li>Usability Testing</li>
                            <li>User Interviews</li>
                            <li>User Personas</li>
                            <li>Storyboarding</li>
                            <li>Data Analytics</li>
                        </ul>
                </div>
            </div>

        </div>

        
      
    </div>
  )
}

export default AboutMe
