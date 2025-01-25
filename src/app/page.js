"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, keyframes, useInView } from "framer-motion";
import { motion } from "framer-motion";
import LandingTimelineSection from "./components/LandingTimelineSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { useRouter } from "next/navigation";

export default function Home() {

  const [aboutSelected, setAbout] = useState(false)
  const timelineRef = useRef()
  const timelineInView = useInView(timelineRef, {amount: 1, once: true})
  const slideInView = useRef([false,false,false,false])
  const [slidesInView, setView] = useState([false,false,false,false])
  const router = useRouter()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1
    },

  }

  useEffect(()=>{
    // slideInView.current=[true,false,false,false]
    setView([true,false,false,false])
    console.log(timelineInView)
  },[timelineInView])

  const CustomButtongroup = ({next, previous, goToSlide, carouselState}) =>{
    console.log(carouselState.currentSlide)
    let width
    switch (carouselState.currentSlide) {
      case 0:
        width="16%"
        break;
      case 1:
        width="41%"
        break;
      case 2:
        width="60%"
        break;
      case 3:
        width="83%"
        break;
      default:
        width="83%"
        break;
    }
    return(
      <div className="absolute top-0 w-full h-48 text-black bg-coal ">
        <motion.div 
          initial={{width: "0%"}}
          animate={{width: "83%"}}
          transition={{
            ease: "easeInOut",
            duration: 0.5
          }}
          className={` rounded-r-full border-ruby border-2 h-6 absolute z-0 top-[4.5rem]`}>
        </motion.div>
        <motion.div 
          initial={{width: "0%"}}
          animate={{width: width}}
          transition={{
            ease: "easeInOut",
            duration: 0.5
          }}
          className={` rounded-r-full bg-darkRuby h-6 absolute z-10 top-[4.5rem]`}>
        </motion.div>
        <div className="flex justify-evenly z-20 relative top-7">
          <motion.div 
            initial={{scale: 0}}
            animate={{
              scale: (timelineInView ? 1 : [0])
            }}
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              type: keyframes,
              duration: 0.3,
              ease:"easeOut"
            }}
            className="cursor-pointer flex justify-center items-center w-28 h-28 bg-ruby rounded-full shadow-2xl" onClick={()=>goToSlide(0)}>
            <div className="cursor-pointer flex justify-center items-center w-20 h-20 bg-white rounded-full text-center font-bold select-none">1936</div>
          </motion.div>
          <motion.div 
            initial={{scale: 0}}
            animate={{
              scale: (timelineInView ? 1 : [0])
            }}
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              type: keyframes,
              duration: 0.3,
              ease:"easeOut"
            }}
            className="cursor-pointer flex justify-center items-center w-28 h-28 bg-ruby rounded-full shadow-2xl" onClick={()=>goToSlide(1)}>
            <div className="cursor-pointer flex justify-center items-center w-20 h-20 bg-white rounded-full text-center font-bold select-none">1940</div>
          </motion.div>
          <motion.div
            initial={{scale: 0}}
            animate={{
              scale: (timelineInView ? 1 : [0])
            }}
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              type: keyframes,
              duration: 0.3,
              ease:"easeOut"
            }}
            className="cursor-pointer flex justify-center items-center w-28 h-28 bg-ruby rounded-full shadow-2xl" onClick={()=>goToSlide(2)}>
            <div className="cursor-pointer flex justify-center items-center w-20 h-20 bg-white rounded-full text-center font-bold select-none">1944</div>
          </motion.div>
          <motion.div
            initial={{scale: 0}}
            animate={{
              scale: (timelineInView ? 1 : [0])
            }}
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              type: keyframes,
              duration: 0.3,
              ease:"easeOut"
            }}
            className="cursor-pointer flex justify-center items-center w-28 h-28 bg-ruby rounded-full shadow-2xl" onClick={()=>goToSlide(3)}>
            <div className="cursor-pointer flex justify-center items-center w-20 h-20 bg-white rounded-full text-center font-bold select-none">1948</div>
          </motion.div>          
        </div>

      </div>
    )
  }

  const CustomRightArrow = ({onClick, ...rest}) =>{
    return(
      <div className="w-16 h-16 rounded-xl flex justify-center items-center text-xl text-white bg-charcoal bg-opacity-80 absolute right-10 cursor-pointer transition-all scale-100 duration-500 hover:scale-110 hover:text-ruby" onClick={()=>onClick()}>
        <FontAwesomeIcon icon={faChevronRight} size="2xl"/>
      </div>
    )
  }

  const CustomLeftArrow = ({onClick, ...rest}) =>{
    console.log(rest)
    return(
      <div className="w-16 h-16 rounded-xl flex justify-center items-center text-xl text-white bg-charcoal bg-opacity-80 absolute left-10 cursor-pointer transition-all scale-100 duration-500 hover:scale-110 hover:text-ruby" onClick={()=>onClick()}>
        <FontAwesomeIcon icon={faChevronLeft} size="2xl"/>
      </div>
    )
  }


  

  return (
    <div className="min-h-screen text-snow">
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


          <div>
            <button className="flex justify-self-center self-center text-lg items-center gap-2 bg-ruby py-2 px-4 rounded transition-all duration-200 hover:bg-darkRuby active:scale-90"
              onClick={()=>setAbout(!aboutSelected)}
            >
              About
              <FontAwesomeIcon icon={faArrowRight}/>
            </button>            
          </div>


      </div>
      <div className="flex justify-center items-center bg-darkRuby h-32 text-6xl font-bold " ref={timelineRef}
      >
        <h1 className="border py-4 px-8 tracking-wider rounded">Timeline of Events</h1>
      </div>

      <Carousel 
        responsive={responsive}
        sliderClass="bg-green-500 flex justify-center top-20"
        containerClass="h-screen"
        customButtonGroup={<CustomButtongroup/>}
        customRightArrow={<CustomRightArrow/>}
        customLeftArrow={<CustomLeftArrow/>}
        >
        <LandingTimelineSection title={"The State of the World"} year={"1936"} link={"/articles/1936-1940"} backgroundImage={"/images/treatyParis_France.jpg"} isInView={slidesInView}/>
        <LandingTimelineSection title={"A Clash Between Hammers and Claws"} year={"1940"} link={"/articles/1940-1944"} backgroundImage={"/images/treatyLondon.jpg"} isInView={slidesInView}/>
        <LandingTimelineSection title={"The War Beyond Europe"} year={"1944"} link={"/articles/1944-1948"} backgroundImage={"/images/russia.png"} isInView={slidesInView}/>
        <LandingTimelineSection title={"The Eagle Reigns Supreme"} year={"1948"} link={"/articles/1948-1951"} backgroundImage={"/images/northAmerica.png"} isInView={slidesInView}/>

      </Carousel>

      <div className="flex justify-center items-center bg-darkRuby h-32 text-6xl font-bold mt-8"
      >
        <h1 className="border py-4 px-8 tracking-wider rounded">Peace Treaties</h1>
      </div>      
      <div className="h-screen bg-charcoal grid grid-rows-1 grid-cols-2 px-4">
        <div className="w-full flex justify-center items-center h-full">
          <div className="relative w-full h-5/6 p-4 border-2 rounded">
            <div className="relative w-full h-full rounded">
              <Image
                src={"/images/KRworld1951V2.png"}
                fill={true}
                alt="peace treaty image"
                style={{objectFit: "cover", borderRadius: "4px"}}
              />               
            </div>            
          </div>

         

        </div>
        <div className="h-full flex flex-col justify-center items-center gap-10 border-coal">
            <div className="w-9/12 p-4 text-xl border-2 rounded">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam. Integer malesuada nunc vel risus commodo viverra maecenas. Donec adipiscing tristique risus nec feugiat. Ornare massa eget egestas purus viverra accumsan. Vitae congue mauris rhoncus aenean. Enim eu turpis egestas pretium. Justo nec ultrices dui sapien eget mi proin. Purus ut faucibus pulvinar elementum integer. Massa sed elementum tempus egestas.</p>
            </div>
            <motion.div              
              className="flex bg-ruby rounded items-center text-xl gap-2 px-4 py-2 duration-200 hover:scale-110 cursor-pointer" onClick={()=>router.push("/articles/peace-treaties")}
              >
                <h3 className="font-bold tracking-wide">Read More</h3>
                <FontAwesomeIcon icon={faArrowRight}/>
            </motion.div>
        </div>
      </div>


    </div>
  );
}
