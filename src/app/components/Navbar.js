"use client"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { TimelineCircle } from "./TimelineCircle";
import { TimelineTriangle } from "./TimelineTriangle";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar(){
    const [timelineOpen, setTimelineOpen] = useState(false)
    const [dropdownOpen, setDropdown] = useState(false)
    const [peaceOpen, setPeaceOpen] = useState(false)
    const [menuOption, setMenuOption] = useState([false,false]) // timeline dropdown or peace treaty dropdown
    const router = useRouter();
    useEffect(()=>{
        console.log(`dropdown: ${dropdownOpen}`);
        console.log(`timeline: ${menuOption[0]}`);
        console.log(`peace: ${menuOption[1]}`);
    },[dropdownOpen, menuOption])

    useEffect(()=>{
        if (!menuOption[0] && !menuOption[1]){
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    },[menuOption])

    function handleDropdownOpen(whichOpened){
        let newOption = [...menuOption];
        if (whichOpened === 0){
            newOption[0] = !newOption[0]
            newOption[1] = false
        } else {
            newOption[0] = false
            newOption[1] = !newOption[1]
        }
        setMenuOption(newOption);

    }

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
                onClick={()=>router.push(link)}
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
                    <div className={`gap-8 h-12 flex flex-grow border-solid border-2 border-soot rounded items-center justify-center select-none`}>
                        <div 
                            className={`${menuOption[0] ? "bg-ruby" : "bg-none"} flex gap-2 px-2 border-solid border-2 ${menuOption[0] ? "border-darkRuby" : "border-soot"} rounded h-6 items-center justify-center hover:border-ruby hover:cursor-pointer`}
                            onClick={()=>handleDropdownOpen(0)}>
                            <h2 className="text-sm">Timeline</h2>
                            <div className={`flex justify-center items-center w-5 h-5 ${menuOption[0] ? "text-snow" : "text-ruby"}`}>
                                <FontAwesomeIcon icon={faChevronDown} className={`transition-all duration-300 ease-in-out ${menuOption[0] ? "rotate-180" : "rotate-0"}`}/>
                            </div>
                        </div>
                        <div 
                            className={`${menuOption[1] ? "bg-ruby" : "bg-none"} flex gap-2 px-2 border-solid border-2 ${menuOption[1] ? "border-darkRuby" : "border-soot"} rounded h-6 items-center justify-center select-none hover:border-ruby hover:cursor-pointer`} 
                            onClick={()=>router.push("/peace-treaties")}>
                            <h2 className="text-sm">Peace Treaties</h2>
                            <div className={`flex justify-center items-center w-5 h-5 ${menuOption[1] ? "text-snow" : "text-ruby"}`}>
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </div>
                        </div>
                    </div>

                </div>                
            </div>
            <AnimatePresence>
                {/**dropdown*/}
                {dropdownOpen && 
                <motion.div 
                    initial={{height:0, opacity:0}}
                    animate={{height:(menuOption[0] ? "100%" : "0px"), opacity: 1}}
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
                </motion.div>}                
            </AnimatePresence>

        </div>
    )
}