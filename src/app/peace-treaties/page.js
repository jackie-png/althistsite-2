"use client"
import { SelectableCountries2 } from "@/app/components/SelectableCountries2";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export default function page(){
    const [currentHovered, setCurrentHovered] = useState("Hover over the map to select a treaty")
    const router = useRouter();

    function goToLink(link){
        router.push(`/articles/peace-treaties/${link}`)
    }

    useEffect(()=>{
        console.log(currentHovered)
    },[currentHovered])
    return(
        <div>
            <div className="pt-24 pb-4 bg-darkRuby flex justify-center text-snow">
                
                <motion.h1 
                    key={currentHovered}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    className="text-4xl tracking-wide font-bold">
                    {currentHovered}
                </motion.h1>
            </div>
            <div className="min-h-screen bg-[#0B0B2B]">
                <SelectableCountries2 onHoverStart={setCurrentHovered} onClick={goToLink}/>
            </div>
        </div>
    )
}