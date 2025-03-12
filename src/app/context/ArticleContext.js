"use client"
import { createContext, useContext } from "react";
import { useState } from "react";

export const articleContext = createContext();

export function useArticleContext(){
    return useContext(articleContext)
}

export default function ArticleContext({children}){
    const [idsArr,setIds] = useState([]);
    const [h2Map,seth2Map] = useState(new Map());

    function displayText(){
        console.log(idsArr)
    }

    return (
        <articleContext.Provider value={{idsArr, setIds, displayText, h2Map, seth2Map}}>
            {children}
        </articleContext.Provider>
    )
}