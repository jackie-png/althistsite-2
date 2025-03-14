"use client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faChevronRight, faChevronLeft, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, keyframes, useInView, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css"
import { useRouter } from "next/navigation";
import Logo from "./components/Logo";
import Head from "next/head";

export default function Home() {

  const [aboutSelected, setAbout] = useState(false)
  const router = useRouter()

  function TimelineSection({date, title, image, last, link, text}){
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
        {!last ? <div className="absolute z-20 bottom-0 w-full h-1 flex justify-center items-center">
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
        </div>
        :
        <div className="absolute z-20 bottom-2 w-full h-1 flex justify-center items-center">
          <button 
            className="text-ruby animate-bounce text-2xl"
            onClick={() =>
              window.scrollTo({
                top: 0+window.innerHeight+160,
                behavior: "smooth",
              })
            }            >
            <FontAwesomeIcon icon={faChevronUp}/>
          </button>
        </div>
      }
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
              className="flex w-2/3 justify-center items-center self-center justify-self-center md:text-nowrap text-center text-3xl lg:text-4xl font-bold">
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
                    <p className="text-xs">{text}</p>
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
                    <TimelineSection date={1936} title={"The State of the World"} image={"/images/1936-bg.png"} link={"/1936-1940"} text="                            The interwar period held great signifcance in the lead up to the Second Weltkreig. The now exiled British and French governments compete with the internationale for influence in many different regional wars, the US is gripped with political instability, the Japanese find themselves in a crossroad for the future of their democracy, and Germany faces the challenges Black Monday and in maintaining their positions after the First Weltkreig. This section covers the major events of each continent leading up to the outbreak of war in 1940."/>
                    <TimelineSection date={1940} title={"The Clash between Hammers and Claws"} image={"/images/1940-bg.png"} link={"/1940-1944"} text="                            Tentions between the major factions of the world reach their boiling point in 1940, the Canadian and French Exile governments ramp up their anti-syndicalist rhetoric as calls to return to the homeland roar louder. The Third Internationale and the Reichspakt stare eye to eye with eachother, the Russian Republic begin preparations to rectify the failures of the Tsar and reclaim the west, all the while the Japanese Empire waits for an oppertune time to strike at German East Asia. This section covers the start of the Second Weltkreig, the Battle of Western Europe and the eventual fall of the Third Internationale, and the start of the Third Weltkreig."/>
                    <TimelineSection date={1944} title={"The War Beyond Europe"} image={"/images/1944-bg.png"} link={"/1944-1948"} text="                            Despite having high hopes for the future of the Reichspakt, the alliance's war enthusiasm sees rapid decline as the wars goes on. The sudden and surprising declaration of war from Canada and the French Exiles plunged the German Empire into a long war, covering fronts from North America, Africa, and India. The Russians fight tooth and nail to make the German advance to the Urals as slow and gruesome as possible, the Japanese secure and fortify their holdings for a future German Invasion, and all the while a sleeping giant was about to wake up."/>
                    <TimelineSection date={1948} title={"Rise of a New World Order"} image={"/images/1948-bg.png"} link={"/1948-1951"} last text="                            American Intervention into the now considered Third Weltkreig gave new life to the Entante who after the fall of India were on their last legs. After the fall of the Japanese Empire, all eyes were on North America as one last struggle to take down the American Junta begins, German victory was all but guaranteed at this point of the war, yet the Americans would not go down without a fight to the death. The world now watches as the Germans prepare themselves for a battle that will decide who should stand to claim global hegemony"/>
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
                        This section holds an archive of all the peace treaties the Germans would partake in between 1940-1951 and the resulting borders changes that came with each treaty. Notable treaties include the Treaties of Paris and London, the Treaty of Moscow, the Treaty of Japan, and the Treaty of Ottawa.
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
