import postgres from "postgres"
const sql = postgres(process.env.POSTGRES_URL, {ssl: "require"});
export default async function Page(){
    async function fetchData(){
        const data = sql`select * from articles`

        return data
    }

    const data = await fetchData();
    console.log(data[0].article_HTML)
    return (<div>{data[0].article_name}</div>)
}