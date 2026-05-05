import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});


export default function HomePage(){
    return (
        <div className={`${quesFont.className} `}>
            <div className="fixed z-30 w-full">
                <Navbar/>
            </div>
            <div className="h-screen bg-blue-300">
                <div className="p-15 pt-28">
                    <div className="flex flex-col gap-y-2">
                        {/* judul */}
                        <div className="text-xl">
                            Info Relasi
                        </div>
                        {/* section */}
                        <div className="flex flex-row gap-x-2">
                            <div>Dudu</div>
                            <div>/</div>
                            <div>...</div>
                            <div>/</div>
                            <div>...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
