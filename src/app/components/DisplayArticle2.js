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
                            <h1 className="bg-darkRuby py-6 flex items-center justify-center font-bold text-3xl tracking-wider my-8 rounded-full shadow-xl" {...props}/>
                        ),
                        h2: ({node, ...props}) =>(
                            <h2 className="bg-white w-fit flex self-center py-4 px-6 justify-center items-center text-coal text-3xl my-4 rounded-lg shadow-lg" {...props}/>
                        ),
                        h3: ({node, ...props}) =>(
                            <h3 className="flex justify-center text-coal text-2xl my-4" {...props}/>
                        ),
                        p: ({node, ...props}) =>(
                            <p className="indent-16 text-coal text-xl max-w-[1200px] self-center leading-[3rem]" {...props}/>
                        )
                    }
                }
                >{data}</Markdown>            
        </div>

    )
}