"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { useState } from "react"
export default function TableOfContents(){
    const [isTableOpen,setTableOpen] = useState(false);
    return (
        <div className={`fixed top-0 self-start transition-all duration-200 ease-in-out ${isTableOpen ? "left-0" : "-left-[25vw]"} z-40 flex items-center`}>
            <div className="relative w-[25vw] bg-coal h-screen border-r-ruby border-r-8">

            </div>
            <button 
                className={`bg-ruby w-16 h-14 flex justify-center items-center`}
                onClick={()=>setTableOpen(!isTableOpen)}
                >
            <FontAwesomeIcon icon={faList} className="w-4 h-4" />
            </button>
        </div>
    )
}