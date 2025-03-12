"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faList } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { useState } from "react"
import { useArticleContext } from "@/app/context/ArticleContext"
export default function TableOfContents({title}){
    const [isTableOpen,setTableOpen] = useState(false);
    const [h1Selected,seth1Selected] = useState(false);
    const [h1,setH1] = useState("")
    const [h2Selected,seth2Selected] = useState(false);
    const [h2,setH2] = useState("")

    const {idsArr, setIds, displayText, h2Map, seth2Map} = useArticleContext();

    console.log(idsArr)
    return (
        <div className={`fixed top-[5rem] self-start transition-all duration-200 ease-in-out ${isTableOpen ? "left-0" : "-left-[75vw] lg:-left-[25vw]"} z-40 flex items-center`}>
            <div className="relative z-30 w-[75vw] lg:w-[25vw] h-[calc(100vh-5rem)] bg-coal border-r-ruby border-r-4 border-t-soot border-t-2 border-b-soot border-b-2 md:rounded">
                <div className="text-snow w-full h-4 box-border py-8 text-xl font-bold tracking-wider border-b-2 border-soot flex items-center justify-center">
                    Table of Contents
                </div>
                <div className={`flex flex-col relative w-full h-[calc(100%-4rem)] transition-all duration-200 ${!h1Selected ? "left-0" : "-left-full"}`}>         
                    <h1 className="text-snow p-4 text-xl transition-all duration-200 bg-ruby/30 border-l-8 border-l-ruby" onClick={()=>seth1Selected(false)}>{title}</h1>
                    {idsArr.map((elem, index) => {
                        if (elem.tag === "h1"){
                            return (
                                <div className="pl-8">
                                    <h1 
                                        key={index} className="text-snow p-2 cursor-pointer transition-all border-l-8 border-soot duration-200 bg-soot/30 hover:bg-soot/75 hover:border-snow" tabIndex={0}
                                        onClick={()=>{
                                            setH1(elem.heading);
                                            seth1Selected(true);
                                            document.getElementById(elem.heading).scrollIntoView({behavior:"smooth", block:"center"});
                                        }}
                                    >{elem.heading}</h1>                                
                                </div>)
                        } else {
                            return <></>
                        }
                    })}
                </div>
                <div className={`flex flex-col w-full h-[calc(100%-4rem-1px)] bg-coal absolute top-[calc(4rem+1.5px)] z-10 transition-all duration-200 ${h1Selected ? !h2Selected ? "left-0" : "-left-full" : "-left-full"}`}>
                    <h1 className="text-snow flex items-center gap-2 p-4 text-xl transition-all duration-200 bg-ruby/30 hover:bg-ruby/70 cursor-pointer border-l-8 border-l-ruby" onClick={()=>seth1Selected(false)}>
                    <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6 text-snow"/>
                    {h1}</h1>
                    {idsArr.map((elem,index)=>{
                        if(elem.section === h1 && elem.tag === "h2"){
                            return (
                            <div className="pl-8">
                                <h2 className="text-snow cursor-pointer p-2 transition-all border-l-8 border-soot duration-200 bg-soot/30 hover:bg-soot/75 hover:border-snow"
                                    onClick={()=>{
                                        if (h2Map.get(elem.heading) > 0){
                                            setH2(elem.heading);
                                            seth2Selected(true);
                                        }
                                        document.getElementById(elem.heading).scrollIntoView({behavior:"smooth", block:"center"});
                                    }}
                                >{elem.heading}</h2>
                            </div>)
                        }
                    })}
                </div>
                <div className={`flex flex-col w-full h-[calc(100%-4rem-1px)] bg-coal absolute top-[calc(4rem+1.5px)] z-0 transition-all duration-200 ${h2Selected ? "left-0" : "-left-full"}`}>
                    <h1 className="text-snow flex items-center gap-2 p-4 text-xl transition-all duration-200 bg-ruby/30 hover:bg-ruby/70 cursor-pointer border-l-8 border-l-ruby" onClick={()=>seth2Selected(false)}>
                    <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6 text-snow"/>
                    {h2}</h1>
                    {idsArr.map((elem,index)=>
                        {
                            if (elem.subsection === h2 && elem.tag === "h3"){
                                return(
                                    <div className="pl-8">
                                        <h2 
                                            className="text-snow cursor-pointer p-2 transition-all border-l-8 border-soot duration-200 bg-soot/30 hover:bg-soot/75 hover:border-snow"
                                            onClick={()=>{
                                                document.getElementById(elem.heading).scrollIntoView({behavior:"smooth", block:"center"});
                                            }}
                                            >
                                            {elem.heading}
                                        </h2>
                                    </div>                            
                                )
                            } else {
                                <></>
                            }
                        })
                    }
                </div>

            </div>
            <button 
                className={`bg-ruby w-12 h-12 flex justify-center self-start md:self-center items-center ${isTableOpen ? "rounded-tr rounded-br" : "rounded"}`}
                onClick={()=>setTableOpen(!isTableOpen)}
                >
            <FontAwesomeIcon icon={faList} className="text-snow w-4 h-4" />
            </button>
        </div>
    )
}