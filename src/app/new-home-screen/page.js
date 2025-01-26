"use client"
import Image from "next/image";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, keyframes, useInView } from "framer-motion";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css"
import { useRouter } from "next/navigation";
import { TimelineCircle } from "../components/TimelineCircle";

export default function Home() {

  const [aboutSelected, setAbout] = useState(false)
  const router = useRouter()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1
    },

  }

  function TimelineSection({date, title, image}){
    return (
        <div className="bg-coal relative">
                <Image src={image} alt="landingpageimage" fill style={{objectFit: "cover"}}/>
                <div className="absolute w-10 z-10 top-0 left-[5%] h-full bg-red-500 flex flex-col items-center justify-center">
                    <div className="bg-darkRuby w-44 h-44 flex justify-center items-center rounded-full shadow-lg">
                        <div className="bg-white w-32 h-32 flex justify-center items-center rounded-full">
                            <h1 className="text-coal text-4xl font-bold">{date}</h1>
                        </div>
                    </div>
                </div>
                <div className="absolute bg-coal bg-opacity-30 h-full w-full grid grid-rows-3 z-0">
                    <div className="bg-gradient-to-t from-transparent to-coal">                       
                    </div>
                    <div className="flex justify-center items-center text-7xl font-bold">
                        <h1 className="underline-offset-8s  underline">{title}</h1>
                    </div>
                    <div className="bg-gradient-to-b from-transparent to-coal to-70% flex items-center justify-center gap-10">
                        <div className="border border-soot rounded p-2 max-w-[50%] backdrop-blur-sm">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam. Integer malesuada nunc vel risus commodo viverra maecenas. Donec adipiscing tristique risus nec feugiat. Ornare massa eget egestas purus viverra accumsan. Vitae congue mauris rhoncus aenean. Enim eu turpis egestas pretium. Justo nec ultrices dui sapien eget mi proin. Purus ut faucibus pulvinar elementum integer. Massa sed elementum tempus egestas.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-ruby rounded p-2 transition-transform duration-200 hover:scale-110">
                            Read More
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>                        
                    </div>
                </div>
            </div>
    )
  }


  

  return (
    <div className="min-h-screen text-snow bg-snow">
      <div 
        className="relative grid grid-rows-4 grid-cols-1 h-screen bg-cover bg-no-repeat justify-center" 
        style={{
            backgroundImage: 'url("/images/KRworld1951V2_1_3.jpg")',
            backgroundPosition: "center"
        }}>
          <div className="text-[290px] row-span-2 justify-self-center">
            <FontAwesomeIcon icon={faEmpire} size="lg"/>            
          </div>

          <AnimatePresence>
            { aboutSelected ? 
              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.2}}
              exit={{opacity: 0}}                className="bg-coal flex flex-col row-span-1 w-9/12 h-full bg-opacity-50 rounded self-center gap-4 justify-self-center px-8 py-4">
                <h1 className="text-2xl font-bold text-center">About this website</h1>
                <h3 className="mb-4 text-lg">This was a Hearts of Iron IV campaign that I enjoyed a lot so I turned it into a website and documented it like a history website in this world</h3>
                <h3 className="text-lg">The campaign took place in the mod Kaiserreich which explores a world built on the premise of “What if Germany won World War 1?”. When the devs updated the German focus tree I had such a fun time conquering the world, so much that this was made as a memento.</h3>
              </motion.div>
              :
              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.2}}
              exit={{opacity: 0}}
              className="text-7xl font-bold select-none justify-self-center justify-center text-center self-center">
              <h1>Rise of the German Hegemony</h1>
            </motion.div>
            }            
          </AnimatePresence>


          <div className="self-center justify-self-center">
            <button className="flex justify-self-center self-center text-lg items-center gap-2 bg-ruby py-2 px-4 rounded transition-all duration-200 hover:bg-darkRuby active:scale-90"
              onClick={()=>setAbout(!aboutSelected)}
            >
              About
              <FontAwesomeIcon icon={faArrowRight}/>
            </button>            
          </div>


      </div>
        <div className="flex justify-center items-center bg-darkRuby h-32 text-6xl font-bold "
        >
            <h1 className="border py-4 px-8 tracking-wider rounded">Timeline of Events</h1>
        </div>
        <div className="relative">
            <div className="absolute w-10 z-10 top-0 left-[5%] h-full bg-red-500 flex flex-col items-center"></div>

            <div className="relative grid grid-rows-[100vh_100vh_100vh_100vh] z-10">
                <TimelineSection date={1936} title={"The State of the World"} image={"/images/treatyLondon.jpg"}/>
                <TimelineSection date={1940} title={"The Clash between Hammers and Claws"} image={"/images/image2.png"}/>
                <TimelineSection date={1944} title={"The War Beyond Europe"} image={"/images/russia.png"}/>
                <TimelineSection date={1948} title={"Rise of a New World Order"} image={"/images/northAmerica.png"}/>
            </div>        
        </div>
        <div className="flex justify-center items-center bg-darkRuby h-32 text-6xl font-bold ">
        <h1 className="border py-4 px-8 tracking-wider rounded">Peace Treaties</h1>
        </div>
        <div className="bg-soot h-screen relative">
            <div className="absolute top-0 left-0 w-full h-screen bg-coal z-10 bg-opacity-30"></div>
            <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-coal z-20 flex justify-center items-center">
                <div className="max-w-[50%] border-t-2 border-l-2 border-r-2 p-4 flex flex-col justify-center items-center gap-4 border-soot backdrop-blur-sm rounded-tl rounded-tr">
                    <p className="text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam. Integer malesuada nunc vel risus commodo viverra maecenas. Donec adipiscing tristique risus nec feugiat. Ornare massa eget egestas purus viverra accumsan. Vitae congue mauris rhoncus aenean. Enim eu turpis egestas pretium. Justo nec ultrices dui sapien eget mi proin. Purus ut faucibus pulvinar elementum integer. Massa sed elementum tempus egestas.
                    </p>
                    <button className="flex items-center gap-4 text-2xl font-bold bg-ruby py-2 px-4 rounded transition-transform duration-200 hover:scale-110">
                        <p className="text-2xl">See More</p>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>
                </div>
            </div>
            <Image src={"/images/KRworld1951V2.png"} fill style={{objectFit: "cover", objectPosition:"center"}} alt="peace treaty image"/>
        </div>



     

    </div>
  );
}
