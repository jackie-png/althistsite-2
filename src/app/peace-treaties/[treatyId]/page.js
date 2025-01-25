import Image from "next/image";
export default async function page({params}){

    return (
        <div className="bg-coal flex flex-col items-center justify-center">
            <div 
                className="relative h-screen w-screen bg-cover bg-no-repeat justify-center" 
                style={{
                    backgroundImage: 'url("/images/treatyParis_France.jpg")',
                    backgroundPosition: "center"
                }}>
                <div 
                    className="flex justify-center items-center h-screen w-screen absolute top-0 bg-gradient-to-t from-coal from-25%">
                    <div 
                        className="bg-coal bg-opacity-60 rounded-t border-t-soot border-r-soot border-l-soot border-t-2 border-l-2 border-r-2 text-snow flex items-center justify-center flex-col gap-4 h-1/2 w-1/2">
                        <h2 className="text-8xl">Treaty of Paris</h2>
                    </div>
                </div>
            </div>
            <div className="bg-snow w-9/12 h-full px-4 py-16 rounded-lg">

            </div>
        </div>
    )
}