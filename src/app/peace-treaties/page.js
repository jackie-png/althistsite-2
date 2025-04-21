"use client"
import { SelectableCountries2 } from "@/app/components/SelectableCountries2";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

export default function page(){
    const [currentHovered, setCurrentHovered] = useState("Click the coloured territory to select a treaty")
    const router = useRouter();
    const [isMobile, setMobile] = useState(false)
    const [link, setLink] = useState("")

    console.log(link === "")

    function goToLink(links){
        router.push(`/peace-treaties/${links}`)
    }

    useEffect(()=>{
        console.log(currentHovered)
    },[currentHovered])

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

    function handleMobilePress(location){
        const locationSplit = location.split("-").map((ele) => (ele === "of" ? ele : ele[0].toUpperCase() + ele.substring(1)));
        console.log(locationSplit)
        setCurrentHovered(locationSplit.reduce((prev, ele) => prev + " " + ele, "" ))
        setLink(location)
    }

    return(
        <>
            <Head>
                <title>Peace Treaties</title>
            </Head>
            <main>
                <div className="relative min-h-screen">
                    <div className="pt-24 pb-4 bg-darkRuby flex justify-center text-snow">
                        
                        <motion.h1 
                            key={currentHovered}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className="text-lg text-center md:text-2xl tracking-wide font-bold">
                            {currentHovered}
                        </motion.h1>
                    </div>
                    <div className="bg-[#0B0B2B] overflow-auto relative">
                        <div className="w-[1200px] h-full md:w-full relative z-0 top-0">
                            {!isMobile ? 
                                <SelectableCountries2 onHoverStart={setCurrentHovered} onClick={goToLink}/>
                                :
                                <SelectableCountries2 onHoverStart={setCurrentHovered} onClick={handleMobilePress}/>
                            }
                        </div>
                    </div>
                    <AnimatePresence>
                        {link !== "" && 
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            className={`flex md:none w-full items-end justify-center absolute z-10 bottom-10 left-0`}>
                            <button className="text-snow flex items-center justify-center gap-2 p-2 bg-ruby rounded" onClick={()=>goToLink(link)}>
                                Go to Article
                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4"/>
                            </button>                                
                        </motion.div>}                
                    </AnimatePresence>

                </div>                
            </main>
        </>

    )
}