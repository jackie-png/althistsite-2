import postgres from "postgres"
import parse from "html-react-parser"
import DisplayArticle from "../components/DisplayArticle";
import DisplayArticle2 from "../components/DisplayArticle2";

const sql = postgres(process.env.POSTGRES_URL, {ssl: "require"});
export default async function Page(){
    
    async function fetchData(){
        const data = sql`select * from articles where article_name = '1948-1951'`
        return data
    }

    const data = await fetchData();
    console.log(data[0].article_HTML)
    
    return (<div className="bg-snow w-9/12 h-full px-4 py-16 rounded-lg flex flex-col gap-2">
        <DisplayArticle2 data={data[0].article_HTML}/>
    </div>)
}