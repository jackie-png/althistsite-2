import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmpire } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";
export default function Footer(){
    const router = useRouter()
    return (
        <div className="bg-coal h-40 text-snow flex items-center gap-8 px-4 border-t-solid border-t border-t-soot">
            <div className="h-16 w-16">
                <Logo/>                
            </div>

            <div className="flex items-center border-solid border border-soot rounded h-4/6 px-4">
                <h1 className="text-2xl">Rise of the German Hegemony</h1>
            </div>
            <div className="flex justify-center gap-8 flex-grow items-center border-solid border border-soot rounded h-4/6"
            >
                <button className="border-solid border border-soot rounded px-4 py-2 transition-colors duration-200 hover:bg-ruby hover:border-darkRuby"
                    onClick={()=>router.push("/1936-1940")}>
                    1936
                </button>
                <button className="border-solid border border-soot rounded px-4 py-2 transition-colors duration-200 hover:bg-ruby hover:border-darkRuby"
                    onClick={()=>router.push("/1940-1944")}

                >
                    1940
                </button>
                <button className="border-solid border border-soot rounded px-4 py-2 transition-colors duration-200 hover:bg-ruby hover:border-darkRuby"
                    onClick={()=>router.push("/1944-1948")}
                    >
                    1944
                </button>
                <button className="border-solid border border-soot rounded px-4 py-2 transition-colors duration-200 hover:bg-ruby hover:border-darkRuby"
                    onClick={()=>router.push("/1948-1951")}
                    >
                    1948
                </button>
                <button className="border-solid border border-soot rounded px-4 py-2 transition-colors duration-200 hover:bg-ruby hover:border-darkRuby"
                    onClick={()=>router.push("/peace-treaties")}
                    >
                    Peace Treaties
                </button>
            </div>
        </div>
    )
}