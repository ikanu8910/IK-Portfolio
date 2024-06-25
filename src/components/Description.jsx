import { motion } from "framer-motion"

const Description = () => {
  return (

    <div className="flex flex-wrap">
        <div className="w-full pb-20">
            <motion.h1 
            initial={{x: -100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{ duration: 1.25, delay: 0}} 
            className="leading-normal font-bold text-7xl xs:text-base text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">Designer & Creative Technologist</motion.h1>
        </div>
    </div>

  )
}

export default Description