import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import TextType from "../../../decoration/comingsoon/index"
import { Questrial } from "next/font/google";


const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});




export default function HomePage(){
    return (
        <div className={`${quesFont.className} bg-transparent`}>
            <div className="fixed z-30 w-full bg-transparent">
                <Navbar/>
            </div>
            <div className="">
                <div className="p-15">
                    <div>
                        <div className="pt-20 pb-10">
                            <h1 className="text-5xl">Pelayanan Kami</h1>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-3 grid-rows-2 gap-10">
                            <div className="h-100 border border-black rounded-3xl p-10 relative bg-amber-50">
                                <div className="flex flex-col gap-5 h-full justify-between ">
                                    {/* Gambar */}
                                    <div className="flex items-start justify-start">
                                        <img className="object-cover h-30 w-auto" src="iconservice/laptop.png" alt="icon" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-3xl">
                                        <h1>Digital Experience Development</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="h-100 border border-black rounded-3xl p-10 relative bg-red-50">
                                <div className="flex flex-col gap-5 h-full justify-between">
                                    {/* Gambar */}
                                    <div className="flex items-start justify-start">
                                        <img className="object-cover h-30 w-auto" src="iconservice/pena.png" alt="icon" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-3xl">
                                        <h1>Interface & Experience Design</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="h-100 border border-black rounded-3xl p-10 relative bg-green-50">
                                <div className="flex flex-col gap-5 h-full justify-between">
                                    {/* Gambar */}
                                    <div className="flex items-start justify-start">
                                        <img className="object-cover h-30 w-auto" src="iconservice/present.png" alt="icon" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-3xl">
                                        <h1>Visual Presentation Crafting</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="h-100 border border-black rounded-3xl p-10 relative bg-blue-50">
                                <div className="flex flex-col gap-5 h-full justify-between">
                                    {/* Gambar */}
                                    <div className="flex items-start justify-start">
                                        <img className="object-cover h-30 w-auto" src="iconservice/house.png" alt="icon" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-3xl">
                                        <h1>Brand Visual Direction</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="h-100 border border-black rounded-3xl p-10 relative bg-purple-50">
                                <div className="flex flex-col gap-5 h-full justify-between">
                                    {/* Gambar */}
                                    <div className="flex items-start justify-start">
                                        <img className="object-cover h-30 w-auto" src="iconservice/find.png" alt="icon" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-3xl">
                                        <h1>Conversion-Focused Page Design</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="h-100 border border-black rounded-3xl p-10 relative bg-gray-50">
                                <div className="flex flex-col gap-5 h-full justify-between">
                                    {/* Gambar */}
                                    <div className="flex items-start justify-start">
                                        <img className="object-cover h-30 w-auto" src="iconservice/more.png" alt="icon" />
                                    </div>
                                    {/* Text */}
                                    <div className="text-3xl">
                                        <h1>Dan Lainnya . . . </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className="flex min-h-screen items-center justify-center text-3xl" >
                    <TextType 
                        text={[
                            "Coming Soon",
                            "Kamar 320",
                            "develop by Benaya Joshua",
                            "under of halobenaya.com",
                                
                        ]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="|"
                        deletingSpeed={50}
                        variableSpeed={{ min: 60, max: 120 }}
                        cursorBlinkDuration={0.5}
                    />
                </div>     */}
            </div>
            <div className="relative z-20">
                <Footer/>
            </div>
        </div>
    )
}
