"use client"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faBars, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
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
                className="flex justify-center items-center h-12 md:h-16 bg-white border-ruby border-[10px] text-sm md:text-base rounded-full md:rounded-full w-24 lg:w-32 py-1 text-coal font-bold tracking-wide"
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
        <div className="fixed w-full top-0">            
            {/**upper navbar */}
            <div className={`bg-coal text-snow relative h-20 flex flex-col px-1 md:px-4 py-4 ${dropdownOpen ? "border-b-2" : ""} border-solid border-soot`}>
                <div className="flex items-center justify-between gap-2 md:gap-8">
                    <div className="h-12 w-12 cursor-pointer" onClick={()=>router.push("/")}>
                        <Logo/>                
                    </div>
                    <div className="flex items-center justify-center border-solid border-2 border-soot rounded h-12 px-4 cursor-pointer" onClick={()=>router.push("/")}>
                        <h1 className="text-[0.85rem] md:text-xl">Rise of the German Hegemony</h1>
                    </div>
                    <div className={`hidden md:flex gap-8 h-12 flex-grow border-solid border-2 border-soot rounded items-center justify-center select-none`}>
                            <div 
                                className={`flex gap-2 px-2 border-solid border-2 ${dropdownOpen ? "bg-ruby" : "bg-none"} ${dropdownOpen ? "border-darkRuby" : "border-soot"} rounded h-6 items-center justify-center hover:border-ruby hover:cursor-pointer`}
                                onClick={()=>setDropdown(!dropdownOpen)}>
                                <h2 className="text-snow text-sm">Timeline</h2>
                                <div className={`flex justify-center items-center w-5 h-5 text-snow`}>
                                    <FontAwesomeIcon icon={faChevronDown} className={`transition-all duration-300 ease-in-out ${dropdownOpen ? "rotate-180" : "rotate-0"}`}/>
                                </div>
                            </div>
                            <div 
                                className={`text-snow flex gap-2 px-2 border-solid border-2 border-soot rounded h-6 items-center justify-center select-none hover:border-ruby hover:cursor-pointer`} 
                                onClick={()=>router.push("/peace-treaties")}>
                                <h2 className=" text-snow text-sm">Peace Treaties</h2>
                                <div className={`flex justify-center items-center w-5 h-5 "text-ruby"`}>
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </div>
                            </div>
                        </div>
                        
                        <button
                            onClick={()=>{
                                setDropdown(!dropdownOpen);
                                setTimelineOpen(false)
                            }}
                            className="block md:hidden"
                        >
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    
                    

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
                    className={`w-full bg-coal grid grid-rows-[6rem_6rem] overflow-auto`}>
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
                    className={`w-full bg-coal flex flex-col `}>
                    <div className={`p-2 w-full`}>
                        <div className="text-lg flex items-center justify-between gap-2" onClick={()=>setTimelineOpen(!timelineOpen)}>
                            <h1 className="text-snow">Timeline</h1>
                            <div className={`${timelineOpen ? "rotate-180" : "rotate-0"} duration-200 transition-all`}>
                                <FontAwesomeIcon icon={faChevronDown} className="text-ruby"/>
                            </div>
                        </div>
                        <AnimatePresence>
                            {timelineOpen && 
                            <motion.div 
                                initial={{height: 0, opacity: 0}}
                                animate={{height: "100vh", opacity: 1}}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                    transition:{
                                        opacity: { duration: 0.2 }, // Height-specific duration
                                        delay: 0.2,
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }                                    
                                }}
                                transition={{
                                    duration: 0.5
                                }}

                                className="w-full relative"
                                >
                                    <motion.div 
                                        initial={{
                                            height: 0
                                        }}
                                        animate={{
                                            height: "93.5%"
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.4
                                        }}
                                        className="w-full absolute top-1 z-20 flex justify-center">
                                        <div className="bg-ruby w-4"></div>
                                    </motion.div>
                                    <div className="w-full h-full absolute z-30 top-0 flex flex-col justify-between items-center">
                                        <motion.div 
                                            initial={{height: 0, width: 0}}
                                            animate={{height: "5rem", width: "5rem"}}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut"
                                            }}
                                            className="bg-darkRuby flex items-center justify-center w-20 h-20 rounded-full">
                                            <motion.div 
                                            initial={{height: 0, width: 0}}
                                            animate={{height: "3.5rem", width: "3.5rem"}}
                                            transition={{
                                                duration: 0.2,
                                                ease: "easeInOut",
                                                delay: 0.2

                                            }}
                                            className="bg-snow flex items-center justify-center w-14 h-14 rounded-full"></motion.div>
                                        </motion.div>

                                        <TimelineButton link={"/1936-1940"} date={1936} delay={0.5} duration={0.5}/>
                                        <TimelineButton link={"/1940-1944"} date={1940} delay={0.6} duration={0.5}/>
                                        <TimelineButton link={"/1944-1948"} date={1944} delay={0.7} duration={0.5}/>
                                        <TimelineButton link={"/1948-1951"} date={1948} delay={0.8} duration={0.5}/>       
                                        <motion.div 
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.5
                                            }}
                                            className="w-16 h-16 rotate-90 flex">
                                            <TimelineTriangle/>
                                        </motion.div>
                                    </div>
                                
                            </motion.div>}                            
                        </AnimatePresence>

                    </div>
                    <div 
                        className="flex items-center w-full justify-between gap-2 text-lg p-2 border-y-soot border-y-2 border-y-solid"
                        onClick={()=>{setDropdown(!dropdownOpen);router.push("/peace-treaties")}}
                        >
                        <h1 className="text-snow">Peace Treaties</h1>
                        <FontAwesomeIcon icon={faArrowRight} className="text-ruby"/>
                    </div>
                </motion.div>)
            }                
            </AnimatePresence>

        </div>
    )
}