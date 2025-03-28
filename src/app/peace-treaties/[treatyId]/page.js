import React from "react"
import postgres from "postgres";
import DisplayArticle from "@/app/components/DisplayArticle";
import TableOfContents from "@/app/components/TableOfContents";
const sql = postgres(process.env.POSTGRES_URL, {ssl: "require"});

export async function generateMetadata({params}){

    const {treatyId} = await params

    console.log(treatyId)

    const data = await sql`select * from "peace-treaties" where article_name = ${treatyId}`
    console.log(data)

    return{
        title: data[0].article_title
    }

}

export default async function page({params}){
    async function fetchData(article){
        console.log(article)
        const data = await sql`select * from "peace-treaties" where article_name = ${article}`
        console.log(data)
        return data
    }

    const param = (await params).treatyId


    const data = await fetchData(param);
    if (data?.length !== 0){
        return(
            <div className="bg-coal flex flex-col items-center justify-center pb-16 pt-20">
                <div 
                    className="relative h-screen w-screen bg-cover bg-no-repeat justify-center" 
                    style={{
                        backgroundImage: `url(${data[0].article_bg})`,
                        backgroundPosition: "center"
                    }}>
                    <div 
                        className="flex justify-center items-center h-screen w-screen absolute top-0 bg-gradient-to-t from-coal from-25%">
                        <div 
                            className=" bg-opacity-60 rounded border-soot border-2 text-snow flex items-center justify-center flex-col gap-4 h-1/2 w-3/4 md:w-2/3 px-2 backdrop-blur-sm">
                            <h1 className="text-center text-4xl md:text-7xl">{data[0].article_title}</h1>
                        </div>
                    </div>
                </div>
                
                <TableOfContents title={data[0].article_title}/>
                    
                <div className="bg-snow md:w-9/12 h-full py-16 rounded-lg flex flex-col gap-2">
                    <DisplayArticle data={data[0].article_body} articleHeadings={data[0].article_headings}/>
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