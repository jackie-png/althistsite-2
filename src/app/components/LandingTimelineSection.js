"use client"
import React, { useEffect, useRef } from "react"
import { animate, motion, useInView, useMotionValue, useTransform} from "framer-motion"
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function LandingTimelineSection({title, year, link, backgroundImage, isInView}){
    const router = useRouter();
    const titleCount = useMotionValue(0);
    const sectionRef = useRef();
    const sectionInView = useInView(sectionRef, {amount: 0.5, once: true});
    const roundedtitle = useTransform(titleCount, (latest)=> Math.round(latest));
    const displayedTitle = useTransform(roundedtitle, (latest) => title.slice(0,latest))
    useEffect(()=>{
        if (sectionInView){
        const controls = animate(titleCount, title.length, {
            type: "tween",
            duration: 1,
            ease: "easeInOut"
        })
        return controls.stop}            

    },[sectionInView])

    useEffect(()=>{
        console.log(`${title} : ${sectionInView}`)
    },[sectionInView])


    return(
        <div className={`w-screen transition-all duration-500 bg-coal`} ref={sectionRef}>
            <div className="shadow-lg shadow-zinc-700 w-full h-[30rem] bg-white mb-3 bg-center rounded-t bg-no-repeat bg-cover" style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className="w-full h-full bg-black bg-opacity-50 rounded-t flex flex-col justify-center items-center select-none gap-4">
                    <motion.span className="text-5xl underline font-bold tracking-wider">{displayedTitle}</motion.span>
                    <motion.h1
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: (sectionInView ? 1 : 0), y: (sectionInView ? 0 : 30)}}
                        transition={{
                            duration: 1,
                            delay: 1
                        }}
                        className="text-5xl underline font-bold tracking-wider">{year}</motion.h1>
                </div>
            </div>
            <div className="flex items-center justify-evenly p-4">
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: (sectionInView ? 1 : 0)}}
                    transition={{
                        duration: 1,
                        delay: 1.5
                    }} 
                    className="w-3/6 p-4 border-snow border rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam. Integer malesuada nunc vel risus commodo viverra maecenas. Donec adipiscing tristique risus nec feugiat. Ornare massa eget egestas purus viverra accumsan. Vitae congue mauris rhoncus aenean. Enim eu turpis egestas pretium. Justo nec ultrices dui sapien eget mi proin. Purus ut faucibus pulvinar elementum integer. Massa sed elementum tempus egestas.</motion.p>
                <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: (sectionInView ? 1 : 0)}}
                        transition={{
                            duration: 0.5,
                            delay: 1.7,
                            ease: "easeInOut"
                        }}                    
                        className="flex bg-ruby rounded items-center gap-2 px-4 py-2 duration-200 hover:scale-110 cursor-pointer" onClick={()=>router.push(link)}
                        >
                    <h3 className="font-bold tracking-wide">Read More</h3>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </motion.div>
            </div>
        </div>
    )
}