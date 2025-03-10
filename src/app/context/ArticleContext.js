"use client"
import { createContext, useContext } from "react";
import { useState } from "react";

export const articleContext = createContext();

export function useArticleContext(){
    return useContext(articleContext)
}

export default function ArticleContext({children}){
    const [idsArr,setIds] = useState([])

    function displayText(){
        console.log(idsArr)
    }

    return (
        <articleContext.Provider value={{idsArr, setIds, displayText}}>
            {children}
        </articleContext.Provider>
    )
}