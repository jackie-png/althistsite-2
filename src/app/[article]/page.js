import React from "react"
import Image from "next/image"
import { motion , useScroll } from "framer-motion"
import parse from "html-react-parser"
import DisplayArticle from "../components/DisplayArticle";
import postgres from "postgres";
import DisplayArticle2 from "../components/DisplayArticle2";
const sql = postgres(process.env.POSTGRES_URL, {ssl: "require"});
export default async function page(){
    // const {scrollYProgress} = useScroll()
    //     const [height,setHeight] = useState(0);
    //     const [hasReachedBottom, setHasReached] = useState(false);
    
    //   useEffect(() => {
    //     return scrollYProgress.onChange((value) => {
    //       console.log("scrollYProgress:", value); // This will return a number (0 to 1)
    //       if(!hasReachedBottom){
    //         setHeight(value);
    //       }
    //     });
    //   }, [scrollYProgress]);
    async function fetchData(){
        const data = sql`select * from articles where article_name = '1940-1944'`
        return data
    }

    const data = await fetchData();
    console.log(data[0].article_HTML)
    return(
        <div className="bg-coal flex flex-col items-center justify-center pb-16">
            {/* <motion.div
                className="fixed top-0 left-0 origin-top-left z-[9999] w-full h-3 bg-ruby"
                style={{width: `${height*100}%`}}
            ></motion.div> */}
            <div 
                className="relative h-screen w-screen bg-cover bg-no-repeat justify-center" 
                style={{
                    backgroundImage: 'url("/images/treatyParis_France.jpg")',
                    backgroundPosition: "center"
                }}>
                <div 
                    className="flex justify-center items-center h-screen w-screen absolute top-0 bg-gradient-to-t from-coal from-25%">
                    <div 
                        className=" bg-opacity-60 rounded-t border-t-soot border-r-soot border-l-soot border-t-2 border-l-2 border-r-2 text-snow flex items-center justify-center flex-col gap-4 h-1/2 w-1/2 backdrop-blur-sm">
                        <h1 className="text-9xl">1936-1940</h1>
                        <h2 className="text-6xl">The State of The World</h2>
                    </div>
                </div>
            </div>
            
            <div className="bg-snow w-9/12 h-full px-4 py-16 rounded-lg flex flex-col gap-2">
                <DisplayArticle2 data={data[0].article_HTML}/>
            </div>
        </div>
    )
}