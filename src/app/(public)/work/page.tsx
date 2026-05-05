import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import TextType from "../../../decoration/comingsoon/index"
import Link from "next/link";

import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function HomePage(){
    return (
        <div className={` ${quesFont.className}`}>
            <div>
                <div className="fixed w-full z-30">
                    <Navbar/>
                </div>


                <div className="p-15">
                    <div className="flex flex-col">
                        {/* Judul */}
                        <div className="pt-30 pb-6">
                            <h1 className="text-4xl">More Work</h1>
                        </div>
                        {/* Section */}
                        <div className="text-xl">
                            {/* Section 1 */}
                            <div className="flex flex-col gap-y-5">
                                
                                <div className="border border-gray-200"/>
                                 <div className="flex flex-row">
                                    <div className=" basis-1/2">
                                        <div className="h-40 w-80 bg-amber-300">
                                            <img className="h-40 w-80 object-cover object-[center_0%] border border-gray-200" src="/work/kamar.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <span className="text-2xl font-semibold">Judul</span>
                                        <span className="flex text-lg">https://testing</span>
                                    </div>
                                </div>

                                <div className="border border-gray-200"/>
                                <div className="flex flex-row">
                                    <div className=" basis-1/2">
                                        <div className="h-40 w-80 bg-amber-300">
                                            <img className="h-40 w-80 object-cover object-[center_0%] border border-gray-200" src="work/photoscape.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <span className="text-2xl font-semibold">Photoscape - Management Photostudio</span>
                                        <span className="flex text-lg">
                                            <Link target="blank" href="https://photoscape-frontend.vercel.app/">
                                                klik disini untuk lihat demo
                                            </Link>
                                        </span>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="border border-gray-200"/>
                                 <div className="flex flex-row">
                                    <div className=" basis-1/2">
                                        <div className="h-40 w-80 bg-amber-300">
                                            <img className="h-40 w-80 object-cover object-[center_0%] border border-gray-200" src="/work/haloben.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <span className="text-2xl font-semibold">halobenaya - Website portfolio</span>
                                        <span className="flex text-lg">
                                            <Link target="blank" href="https://halobenaya.com">
                                                klik disini untuk lihat demo <span>{">"}</span> https://halobenaya.com
                                            </Link>
                                        </span>
                                    </div>
                                </div>

                             

                                <div className="border border-gray-200"/>
                            </div>
                        </div>
                    </div>
                </div>
                        
                <div>
                    <Footer/>
                </div>



            </div>  
        </div>
    )
}
