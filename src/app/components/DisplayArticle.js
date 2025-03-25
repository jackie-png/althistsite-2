"use client"
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { useState } from "react";
import {Image} from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faList } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { articleContext, useArticleContext } from "@/app/context/ArticleContext";
import { resolve } from "styled-jsx/css";
export default function DisplayArticle({data, articleHeadings = []}){
    console.log(articleHeadings)

    const [isImgView, setImgView] = useState(false);
    const [imgSrc, setImgSrc] = useState("/images/KRworld1951V2.png")
    const {idsArr, setIds, displayText, h2Map, seth2Map} = useArticleContext()
    console.log(data)

    useEffect(()=>{
        const newIds =[]
        const newH2Map = new Map()
        let currentTag = ""    
        let currentH2 = ""    
        articleHeadings.forEach((heading)=>{
            const hashtags = Array.from(heading.matchAll("#")).length

            switch (hashtags) {
                case 1:
                    newIds.push({
                        tag:"h1",
                        heading:heading.substring(hashtags + 1),
                        section:"",
                        subsection:""
                    });
                    currentTag = heading.substring(hashtags + 1);
                break;

                case 2:
                    newIds.push({
                        tag:"h2",
                        heading:heading.substring(hashtags + 1),
                        section: currentTag,
                        subsection:""
                    });
                    currentH2 = heading.substring(hashtags + 1);
                    newH2Map.set(heading.substring(hashtags + 1), 0);
                break;

                case 3:
                    newIds.push({
                        tag:"h3",
                        heading:heading.substring(hashtags + 1),
                        section: currentTag,
                        subsection:currentH2
                    });
                    newH2Map.set(currentH2, newH2Map.get(currentH2)+1);
                break;
            
                default:
                    break;
            }
        })
        setIds(newIds)
        seth2Map(newH2Map)
    },[])

    return(
        <div>
            {isImgView && <div className="top-0 left-0 h-screen z-[9999] w-full bg-black/50 fixed">
                <div className="flex items-center p-4 top-0 left-0 absolute z-[9999] w-full ">
                    <button
                        onClick={()=>setImgView(false)}
                        className="w-6 h-6 text-snow"
                    >
                        <FontAwesomeIcon icon={faClose} className="w-6 h-6"/>
                    </button>                    
                </div>
                <Image src={imgSrc} alt="image in view" fill className="h-screen" style={{objectFit: "contain"}} loading="eager"/>
            </div>}

            <div className="relative flex flex-col w-full items-center">
                <Markdown 
                    remarkPlugins={remarkGfm}
                    unwrapDisallowed={true}
                    components={
                        {
                            h1: ({node, children, ...props}) =>{
                                return (<h1 id={`${children}`} className="bg-darkRuby text-snow py-6 w-full md:w-11/12 mx-4 flex items-center justify-center font-bold text-2xl tracking-wider rounded-none md:rounded-full shadow-xl" {...props}>{children}</h1>)
                            },
                            h2: ({node, children, ...props}) =>(
                                <h2 id={`${children}`} className="bg-white w-fit flex self-center py-4 px-6 justify-center items-center text-coal text-base text-center md:text-xl mx-4 my-4 rounded-lg shadow-lg" {...props}>{children}</h2>
                            ),
                            h3: ({node, children, ...props}) =>(
                                <h3 id={`${children}`} className="flex justify-center text-coal text-xl my-4 mx-4 text-center underline underline-offset-4" {...props}>{children}</h3>
                            ),
                            p: ({node, children, ...props}) =>{
                                if (node.children.length === 1 && node.children[0].tagName === "img"){
                                    return children
                                } else {
                                    return <p className="indent-8 md:indent-16 text-coal mx-8 my-4 max-w-[1200px] leading-[2rem] md:leading-[2.5rem] text-sm md:text-base text-justify md:text-left" {...props}>{children}</p>
                                }
                            }, 
                            img: ({node, ...props}) => {
                                const {src, alt} = props
                                return (
                                <div className="flex flex-col items-center text-soot italic my-4">
                                    <img 
                                        src={src} 
                                        alt={alt} 
                                        className="rounded-lg shadow-lg border-coal border-2 w-11/12 md:w-3/4 lg:w-1/2 cursor-pointer"
                                        loading="eager"
                                        onClick={()=>{
                                            setImgSrc(src)
                                            setImgView(true)
                                        }}
                                    />
                                    {alt && <span className="indent-0 text-sm text-center">{alt}</span>}                                    
                                </div>)
                            },
                            ul: ({ node, ...props }) => <ul className="list-disc pl-6" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-6" {...props} />,
                            li: ({ node, ...props }) => <li className="text-coal ml-4" {...props} />
                        }}
                    >{data}</Markdown>                 
            </div>
           
        </div>

    )
}