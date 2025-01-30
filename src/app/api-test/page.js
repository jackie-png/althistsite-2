import postgres from "postgres"
import parse from "html-react-parser"
import DisplayArticle from "../components/DisplayArticle";

const sql = postgres(process.env.POSTGRES_URL, {ssl: "require"});
export default async function Page(){
    
    async function fetchData(){
        const data = sql`select * from articles where article_name = '1940-1944'`
        return data
    }

    const data = await fetchData();
    console.log(data[0].article_HTML)
    
    return (<div><DisplayArticle htmlString={data[0].article_HTML}/></div>)
}