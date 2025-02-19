import React from "react"
import postgres from "postgres";
import DisplayArticle2 from "@/app/components/DisplayArticle2";
const sql = postgres(process.env.POSTGRES_URL, {ssl: "require"});

export default async function page({params}){
    async function fetchData(article){
        console.log(article)
        const data = sql`select * from "peace-treaties" where article_name = ${article}`
        console.log(data)
        return data
    }

    const param = (await params).treatyId
    console.log(param)


    const data = await fetchData(param);
    console.log(data)
    if (data?.length !== 0){
        return(
            <div className="bg-coal flex flex-col items-center justify-center pb-16 pt-20">
                <div 
                    className="relative h-screen w-screen bg-cover bg-no-repeat justify-center" 
                    style={{
                        backgroundImage: 'url("/images/treatyParis_France.jpg")',
                        backgroundPosition: "center"
                    }}>
                    <div 
                        className="flex justify-center items-center h-screen w-screen absolute top-0 bg-gradient-to-t from-coal from-25%">
                        <div 
                            className=" bg-opacity-60 rounded-t border-t-soot border-r-soot border-l-soot border-t-2 border-l-2 border-r-2 text-snow flex items-center justify-center flex-col gap-4 h-1/2 w-fit px-2 backdrop-blur-sm">
                            <h1 className="text-5xl md:text-7xl">{data[0].article_title}</h1>
                        </div>
                    </div>
                </div>
                
                <div className="bg-snow w-11/12 h-full px-4 md:px-8 py-16 rounded-lg flex flex-col gap-2">
                    <DisplayArticle2 data={data[0].article_body}/>
                </div>
            </div>
        )        
    } else {
        return(
        <div className="h-screen flex justify-center items-center">
            Error 404: Article not found
        </div>)
    }

}