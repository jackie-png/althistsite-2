"use client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faChevronRight, faChevronLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, keyframes, useInView, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css"
import { useRouter } from "next/navigation";
import Logo from "./components/Logo";

export default function Home() {

  const [aboutSelected, setAbout] = useState(false)
  const router = useRouter()

  function TimelineSection({date, title, image, last, link}){
    const ref = useRef(null);
    const isInView = useInView(ref,{once: true, amount: 0.7});
    const [height,setHeight] = useState(0);
    const [hasReachedBottom, setHasReached] = useState(false);
    const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["start end", "end end"]
    })

    useEffect(()=>{
      console.log(isInView);
    },[isInView])

  useEffect(() => {
    return scrollYProgress.onChange((value) => {
      console.log("scrollYProgress:", value); // This will return a number (0 to 1)
      if(!hasReachedBottom){
        setHeight(value * 100);
      }
    });
  }, [scrollYProgress]);
  
    return (
      <div className="bg-coal relative min-h-screen" ref={ref}>
        {!last && <div className="absolute z-20 bottom-0 w-full h-1 flex justify-center items-center">
          {/* <motion.div 
            initial={{width: 0}}
            animate={{width: (isInView ? "40%" : 0)}}
            transition={{
              delay: 0.8,
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="bg-darkRuby h-full rounded">
          </motion.div> */}
          <button 
            className="text-ruby animate-bounce text-2xl"
            onClick={() =>
              window.scrollBy({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }            >
            <FontAwesomeIcon icon={faChevronDown}/>
          </button>
        </div>}
        <Image src={image} alt="landingpageimage" fill style={{objectFit: "cover"}}/>
        <div className={`absolute w-10 z-20 top-0 left-[5%] ${height >=100 ? "rounded-b-none" : "rounded-b-full" } hidden lg:flex flex-col items-center justify-center`} style={{height: `100%`}}>
            <motion.div 
              initial={{scale: 0}}
              animate={{
                scale: (isInView ? 1 : 0)
              }}
              className="bg-darkRuby w-32 h-32 flex justify-center items-center rounded-full shadow-lg">
                <motion.div
                  initial={{scale: 0}}
                  animate={{
                    scale: (isInView ? 1 : 0)
                  }}
                  transition={{
                    delay: 0.2
                  }}
                  className="bg-white w-24 h-24 flex justify-center items-center rounded-full">
                  <h1 className="text-coal text-2xl font-bold">{date}</h1>
                </motion.div>
            </motion.div>
        </div>
        <div className={`absolute w-10 z-10 top-0 left-[5%] bg-ruby ${height >=100 ? "rounded-b-none" : "rounded-b-full" } hidden lg:flex flex-col items-center justify-center`} style={{height: `${height}%`}}>
        </div>
        <div className="absolute bg-coal bg-opacity-30 h-full w-full grid grid-rows-4 md:grid-rows-3 z-0">
            <div className="bg-gradient-to-t from-transparent to-coal to-70%"></div>
            <motion.div 
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: (isInView ? 1 : 0),
                y: (isInView ? 0 : 20),
              }}
              transition={{
                duration: 0.5,
                delay: 0.3
              }}
              className="flex w-2/3 justify-center items-center self-center justify-self-center md:text-nowrap text-xl md:text-3xl lg:text-4xl font-bold">
              <h1 className="underline-offset-8s underline">{title}</h1>
            </motion.div>
            <div className="bg-gradient-to-b row-span-2 md:row-span-1 from-transparent to-coal to-70% flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
                <motion.div 
                  initial={{
                    opacity: 0,
                    x: -30
                  }}
                  animate={{
                    opacity: (isInView ? 1 : 0),
                    x: (isInView ? 0 : -30)
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="border border-soot rounded p-2 max-w-[90%] md:max-w-[50%] backdrop-blur-sm">
                    <p className="text-[0.5rem] lg:text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam. Integer malesuada nunc vel risus commodo viverra maecenas. Donec adipiscing tristique risus nec feugiat. Ornare massa eget egestas purus viverra accumsan. Vitae congue mauris rhoncus aenean. Enim eu turpis egestas pretium. Justo nec ultrices dui sapien eget mi proin. Purus ut faucibus pulvinar elementum integer. Massa sed elementum tempus egestas.</p>
                </motion.div>
                <motion.button
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: (isInView ? 1 : 0),
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  onClick={()=>router.push(link)}
                  className="flex items-center gap-2 bg-ruby rounded p-2 transition-transform duration-200 text-[0.6rem] lg:text-xs hover:scale-110">
                    Read More
                    <FontAwesomeIcon icon={faArrowRight}/>
                </motion.button>                        
            </div>
        </div>
      </div>
    )
  }


  

  return (
    <div className="min-h-screen text-snow bg-snow">
      <div 
        className="relative grid grid-rows-4 grid-cols-1 min-h-screen bg-cover bg-no-repeat justify-center" 
        style={{
            backgroundImage: 'url("/images/KRworld1951V2_1_3.jpg")',
            backgroundPosition: "center"
        }}>
          <div className="text-[290px] row-span-2 justify-self-center flex items-center">
            <div className="h-[250px] w-[250px] flex self-center">
              <Logo/>              
            </div>
          </div>

          <AnimatePresence>
            { aboutSelected ? 
              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.2}}
              exit={{opacity: 0}}
              className="bg-coal flex flex-col row-span-1 w-full md:w-9/12 h-full bg-opacity-50 rounded self-center gap-4 justify-self-center px-8 py-4">
                <h1 className="text-2xl font-bold text-center">About this website</h1>
                <h3 className="mb-4 text-sm">This was a Hearts of Iron IV campaign that I enjoyed a lot so I turned it into a website and documented it like a history website in this world</h3>
                <h3 className="text-sm">The campaign took place in the mod Kaiserreich which explores a world built on the premise of “What if Germany won World War 1?”. When the devs updated the German focus tree I had such a fun time conquering the world, so much that this was made as a memento.</h3>
              </motion.div>
              :
              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.2}}
              exit={{opacity: 0}}
              className="text-5xl font-bold select-none justify-self-center justify-center text-center self-center">
              <h1>Rise of the German Hegemony</h1>
            </motion.div>
            }            
          </AnimatePresence>


          <div className="self-center justify-self-center">
            <button className="flex justify-self-center self-center text-sm items-center gap-2 bg-ruby py-2 px-4 rounded transition-all duration-200 hover:bg-darkRuby active:scale-90"
              onClick={()=>setAbout(!aboutSelected)}
            >
              About
              <FontAwesomeIcon icon={faArrowRight}/>
            </button>            
          </div>


      </div>
        <div className="flex justify-center items-center bg-darkRuby h-32 text-2xl md:text-3xl lg:text-4xl font-bold "
        >
          <h1 className="border py-4 px-8 tracking-wider rounded">Timeline of Events</h1>
        </div>
        <div className="relative">
            <div className="relative grid grid-rows-[max-content_max-content_max-content_max-content] z-10">
                <TimelineSection date={1936} title={"The State of the World"} image={"/images/1936-bg.png"} link={"/1936-1940"}/>
                <TimelineSection date={1940} title={"The Clash between Hammers and Claws"} image={"/images/1940-bg.png"} link={"/1940-1944"}/>
                <TimelineSection date={1944} title={"The War Beyond Europe"} image={"/images/1944-bg.png"} link={"/1944-1948"}/>
                <TimelineSection date={1948} title={"Rise of a New World Order"} image={"/images/1948-bg.png"} link={"/1948-1951"} last/>
            </div>        
        </div>
        <div className="flex justify-center items-center bg-darkRuby h-32 text-2xl md:text-3xl lg:text-4xl font-bold ">
        <h1 className="border py-4 px-8 tracking-wider rounded">Peace Treaties</h1>
        </div>
        <div className="bg-soot h-screen relative">
            <div className="absolute top-0 left-0 w-full h-screen bg-coal z-10 bg-opacity-30"></div>
            <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-coal z-20 flex justify-center items-center">
                <div className="md:max-w-[50%] border-t-2 md:border-l-2 md:border-r-2 p-4 flex flex-col justify-center items-center gap-8 md:gap-4 border-soot backdrop-blur-sm md:rounded-tl md:rounded-tr">
                    <p className=" text-xs lg:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam. Integer malesuada nunc vel risus commodo viverra maecenas. Donec adipiscing tristique risus nec feugiat. Ornare massa eget egestas purus viverra accumsan. Vitae congue mauris rhoncus aenean. Enim eu turpis egestas pretium. Justo nec ultrices dui sapien eget mi proin. Purus ut faucibus pulvinar elementum integer. Massa sed elementum tempus egestas.
                    </p>
                    <button 
                      className="flex items-center gap-4 text-2xl font-bold bg-ruby py-2 px-4 rounded transition-transform duration-200 hover:scale-110"
                      onClick={()=>router.push("/peace-treaties")}
                      >
                        <p className="text-sm">See More</p>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>
                </div>
            </div>
            <Image src={"/images/KRworld1951V2.png"} fill style={{objectFit: "cover", objectPosition:"center"}} alt="peace treaty image"/>
        </div>
    </div>
  );
}
