import aboutImg from "/Users/isha.kanu/Documents/GitHub/IKPort/src/assets/about.jpg"

const Projects = () => {
  return (

    <div className="flex flex-wrap">
        <div className="w-full pt-20">
            <h1 className="font-bold text-4xl text-purple-400">//Selected Works</h1>
        </div>


        <div className="container mx-auto grid grid-cols-3 justify-items-center">

            <div className="max-w-80 pb-20">
              <h1 className="font-bold text-xl pt-10 pb-2 underline">DISH Technologies</h1>
                <p className="pb-2">Innovation Management Platform Landing Page For Hardware Engineering</p>
                  <img className="rounded-2xl pb-2" src={aboutImg} alt="about" />
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Design</span>
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Development</span>
                    <span className="mr-2 rounded bg-purple-300 px-2 py-1 text-sm font-medium text-neutral-100">2024</span>
            </div>

            <div className="max-w-80 pb-20">
              <h1 className="font-bold text-xl pt-10 pb-2 underline">Hololens CPR Guide</h1>
                <p className="pb-2">Augmented Reality CPR Guide that displays the Red Cross CPR instructions</p>
                  <img className="rounded-2xl pb-2" src={aboutImg} alt="about" />
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Design</span>
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Development</span>
                    <span className="mr-2 rounded bg-purple-300 px-2 py-1 text-sm font-medium text-neutral-100">2022</span>
            </div>

            <div className="max-w-80 pb-20">
              <h1 className="font-bold text-xl pt-10 pb-2 underline">VR Escape Room</h1>
                <p className="pb-8">3 Puzzle Virtual Reality Escape Room</p>
                  <img className="rounded-2xl pb-2" src={aboutImg} alt="about" />
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Design</span>
                    <span className="mr-2 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">Development</span>
                    <span className="mr-2 rounded bg-purple-300 px-2 py-1 text-sm font-medium text-neutral-100">2022</span>
            </div>

          </div>

        </div>




  )
}

export default Projects
