import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function DisplayArticle({data}){
    console.log(data)
    return(
        <div className="flex flex-col">
            <div className="h-screen w-full bg-black/50 fixed"></div>
            <Markdown 
                remarkPlugins={remarkGfm}
                unwrapDisallowed={true}
                components={
                    {
                        h1: ({node, ...props}) =>(
                            <h1 className="bg-darkRuby py-6 flex items-center justify-center font-bold text-2xl tracking-wider rounded-full shadow-xl" {...props}/>
                        ),
                        h2: ({node, ...props}) =>(
                            <h2 className="bg-white w-fit flex self-center py-4 px-6 justify-center items-center text-coal text-lg text-center md:text-xl my-4 rounded-lg shadow-lg" {...props}/>
                        ),
                        h3: ({node, ...props}) =>(
                            <h3 className="flex justify-center text-coal text-lg my-4" {...props}/>
                        ),
                        p: ({node, children, ...props}) =>{
                            if (node.children.length === 1 && node.children[0].tagName === "img"){
                                return children
                            } else {
                                return <p className="indent-16 text-coal my-4 max-w-[1200px] leading-[2rem] text-sm md:text-base" {...props}>{children}</p>
                            }
                        }, 
                        img: ({node, ...props}) => {
                            const {src, alt} = props
                            return (
                            <div className="flex flex-col items-center text-soot italic my-4">
                                <img 
                                    src={src} 
                                    alt={alt} 
                                    className="rounded-lg shadow-lg border-coal border-2 w-1/2 cursor-pointer"
                                    loading="eager"
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

    )
}