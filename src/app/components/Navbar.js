"use client"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faBars, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { TimelineCircle } from "./TimelineCircle";
import { TimelineTriangle } from "./TimelineTriangle";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar(){
    const [timelineOpen, setTimelineOpen] = useState(false);
    const [dropdownOpen, setDropdown] = useState(false);
    const [isMobile, setMobile] = useState(false);



    const router = useRouter();

    useEffect(()=>{
        function checkMobile(){
            console.log(window.innerWidth)
            if (window.innerWidth < 768){
                setMobile(true)
            } else {
                setMobile(false)
            }
        }

        checkMobile();

        window.addEventListener("resize", checkMobile)

        return ()=>{
            window.removeEventListener("resize", checkMobile)
        }
    },[])


    function TimelineButton({link, date, delay, duration}){
        return(
            <motion.button 
                initial={{opacity:0, y: -30}}
                animate={{opacity:1, y: 0}}
                transition={{
                    delay: delay,
                    duration: duration
                }}
                className="flex justify-center items-center h-16 bg-white border-ruby border-[10px] rounded-full w-20 lg:w-32 py-1 text-coal font-bold tracking-wide"
                onClick={()=>{
                    router.push(link);
                    setDropdown(!dropdownOpen)
                }}
                >
                <h1 className="w-full h-full flex items-center justify-center">{date}</h1>
            </motion.button>
        )
    }

    return(
        <div className="absolute w-full top-0 z-50">            
            {/**upper navbar */}
            <div className={`bg-coal text-snow relative z-50 h-20 flex flex-col px-4 py-4 ${dropdownOpen ? "border-b-2" : ""} border-solid border-soot`}>
                <div className="flex items-center gap-8">
                    <div className="h-12 w-12 flex items-center justify-center cursor-pointer" onClick={()=>router.push("/")}>
                        <Logo/>
                    </div>
                    <div className="flex items-center justify-center border-solid border-2 border-soot rounded h-12 px-4 cursor-pointer" onClick={()=>router.push("/")}>
                        <h1 className="text-xl">Rise of the German Hegemony</h1>
                    </div>
                    {!isMobile ? <div className={`gap-8 h-12 flex flex-grow border-solid border-2 border-soot rounded items-center justify-center select-none`}>
                            <div 
                                className={`flex gap-2 px-2 border-solid border-2 ${dropdownOpen ? "bg-ruby" : "bg-none"} ${dropdownOpen ? "border-darkRuby" : "border-soot"} rounded h-6 items-center justify-center hover:border-ruby hover:cursor-pointer`}
                                onClick={()=>setDropdown(!dropdownOpen)}>
                                <h2 className="text-sm">Timeline</h2>
                                <div className={`flex justify-center items-center w-5 h-5 text-snow`}>
                                    <FontAwesomeIcon icon={faChevronDown} className={`transition-all duration-300 ease-in-out ${dropdownOpen ? "rotate-180" : "rotate-0"}`}/>
                                </div>
                            </div>
                            <div 
                                className={`flex gap-2 px-2 border-solid border-2 border-soot rounded h-6 items-center justify-center select-none hover:border-ruby hover:cursor-pointer`} 
                                onClick={()=>router.push("/peace-treaties")}>
                                <h2 className="text-sm">Peace Treaties</h2>
                                <div className={`flex justify-center items-center w-5 h-5 "text-ruby"`}>
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </div>
                            </div>
                        </div>
                        :
                        <button
                            onClick={()=>setDropdown(!dropdownOpen)}
                        >
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    
                    }

                </div>                
            </div>
            <AnimatePresence>
                {/**dropdown*/}
                {dropdownOpen && 
                (!isMobile ? <motion.div 
                    initial={{height:0, opacity:0}}
                    animate={{height:(dropdownOpen ? "100%" : "0px"), opacity: 1}}
                    exit={{
                        height:"0px",
                        opacity: 0
                    }}
                    transition={{
                        duration:0.3,
                        ease:"easeInOut",
                    }}
                    className={`w-full bg-coal grid grid-rows-[6rem_6rem] `}>
                    <motion.div 
                        initial={{scale:0}}
                        animate={{scale:1}}
                        transition={{
                            duration: 0.3,
                            delay: 0.3
                        }}
                        className="flex text-snow justify-center">
                        <div className="border-soot border-2 border-solid py-2 px-8 rounded text-2xl h-fit self-center">
                            <h2>Timeline of Major Years</h2>
                        </div>
                    </motion.div>   
                    <div className="w-full relative self-center">
                        <div className="bg-ruby w-[96%] h-4 absolute top-0 ml-2"></div>
                        <div className="w-full h-4 absolute top-0 flex items-center justify-between">
                            <div className="h-16 w-16 rounded-full bg-darkRuby flex items-center justify-center">
                              <div className="h-10 w-10 rounded-full bg-white"></div>  
                            </div>
                            <TimelineButton link={"/1936-1940"} date={1936} delay={0.7} duration={0.5}/>
                            <TimelineButton link={"/1940-1944"} date={1940} delay={0.8} duration={0.5}/>

                            <TimelineButton link={"/1944-1948"} date={1944} delay={0.9} duration={0.5}/>

                            <TimelineButton link={"/1948-1951"} date={1948} delay={1} duration={0.5}/>

                            <div className="w-20 h-20 flex justify-center items-center ">
                                <TimelineTriangle/>
                            </div>
                        </div>

                    </div>
                </motion.div>:
                <motion.div 
                    initial={{height:0, opacity:0}}
                    animate={{height:(dropdownOpen ? "100%" : "0px"), opacity: 1}}
                    exit={{
                        height:"0px",
                        opacity: 0
                    }}
                    transition={{
                        duration:0.3,
                        ease:"easeInOut",
                    }}
                    className={`w-full bg-coal grid grid-rows-2 `}>
                    <div className="flex flex-col justify-center p-2 w-full">
                        <div className="text-lg flex items-center justify-between gap-2" onClick={()=>setTimelineOpen(!timelineOpen)}>
                            <h1>Timeline</h1>
                            <div className={`${timelineOpen ? "rotate-180" : "rotate-0"} duration-200 transition-all`}>
                                <FontAwesomeIcon icon={faChevronDown} className="text-ruby"/>
                            </div>
                        </div>
                        {timelineOpen && <div>
                            hi there
                        </div>}
                    </div>
                    <div 
                        className="flex items-center w-full justify-between gap-2 text-lg p-2 border-y-soot border-y-2 border-y-solid"
                        onClick={()=>{setDropdown(!dropdownOpen);router.push("/peace-treaties")}}
                        >
                        <h1>Peace Treaties</h1>
                        <FontAwesomeIcon icon={faArrowRight} className="text-ruby"/>
                    </div>
                </motion.div>)
            }                
            </AnimatePresence>

        </div>
    )
}