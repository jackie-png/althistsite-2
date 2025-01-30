"use client"
import parse from "html-react-parser"
import { useState,useEffect } from "react";
export default function DisplayArticle({ htmlString }) {
    const [parsedHtml, setParsedHtml] = useState("");
    
    useEffect(() => {
        if (typeof window !== "undefined") {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        setParsedHtml(doc.body.innerHTML);
        }
    }, [htmlString]);
    
    return <div className="flex flex-col">
        {parse(parsedHtml,{replace(node){
            if (node.type === "tag" && node.name === "h1"){
                return <h1 className="text-snow bg-darkRuby my-6 py-6 rounded flex items-center justify-center font-bold text-4xl tracking-wider">{node.children[1].children[0].data}</h1>
            }

            if (node.type === "tag" && node.name === "h2"){
                return <h2 className="text-coal bg-white font-semibold w-fit self-center p-6 shadow-lg rounded my-4 flex items-center justify-center  text-3xl tracking-wider">{node.children[1].children[0].data}</h2>
            }

            if (node.type === "tag" && node.name === "h3"){
                return <h3 className="text-coal rounded my-3 flex items-center justify-center font-bold text-2xl tracking-wider">{node.children[1].children[0].data}</h3>
            }

            if (node.type === "tag" && node.name === "p"){
                console.log(node.children[1].children)
                return <p className="text-coal rounded w-2/3 self-center my-4 justify-center text-xl tracking-wider">{node.children[1].children[0].data}</p>
            }
        }})}
        </div>;
}
    