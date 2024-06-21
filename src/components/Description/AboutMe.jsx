import aboutImg from "/Users/isha.kanu/Documents/GitHub/IKPort/src/assets/about.jpg"
import { ABOUTME_CONTENT } from "../../constants"

const AboutMe = () => {
  return (
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="about" />

            </div>
        </div>
        
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6">{ABOUTME_CONTENT}</p>

            </div>
        </div>

        
      
    </div>
  )
}

export default AboutMe
