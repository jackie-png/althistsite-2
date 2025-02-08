"use client"
import { useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function ArticleLayout({children}){
    const {scrollYProgress} = useScroll()
        const [height,setHeight] = useState(0);
        const [hasReachedBottom, setHasReached] = useState(false);
    
      useEffect(() => {
        return scrollYProgress.onChange((value) => {
          console.log("scrollYProgress:", value); // This will return a number (0 to 1)
          if(!hasReachedBottom){
            setHeight(value);
          }
        });
      }, [scrollYProgress]);

      useEffect(()=>{
        console.log(height)
        if(height >= 0.9995){
            setHasReached(true)
        } else {
            setHasReached(false)
        }
      },[height])

    return (<div>
        <motion.div
            className={`fixed top-0 left-0 origin-top-left z-[9999] w-full h-2 bg-ruby ${hasReachedBottom ? "rounded-none" : "rounded-r-full"}`}
            style={{width: `${height*100}%`}}
        ></motion.div>
        {children}
    </div>)
}