import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function DisplayArticle2({data}){
    console.log(data)
    return(
        <div className="flex flex-col">
            <Markdown 
                remarkPlugins={remarkGfm}
                components={
                    {
                        h1: ({node, ...props}) =>(
                            <h1 className="bg-darkRuby py-6 flex items-center justify-center font-bold text-2xl tracking-wider rounded-full shadow-xl" {...props}/>
                        ),
                        h2: ({node, ...props}) =>(
                            <h2 className="bg-white w-fit flex self-center py-4 px-6 justify-center items-center text-coal text-lg text-center md:text-xl my-4 rounded-lg shadow-lg" {...props}/>
                        ),
                        h3: ({node, ...props}) =>(
                            <h3 className="flex justify-center text-coal text-xl my-4" {...props}/>
                        ),
                        p: ({node, ...props}) =>(
                            <p className="indent-16 text-coal my-4 max-w-[1200px] self-center leading-[2rem] text-sm md:text-base" {...props}/>
                        ),
                        img: ({node, ...props}) => {
                            const {src, alt} = props
                            return (
                            <div className="text-soot flex flex-col italic">
                                <img src={src} alt={alt} className="rounded-lg shadow-lg border-soot border-2 border-opacity-50"/>
                                {alt}
                            </div>)
                        }
                    }
                }
                >{data}</Markdown>            
        </div>

    )
}