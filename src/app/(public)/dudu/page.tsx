import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { Questrial } from "next/font/google";
import TextType from '../../../decoration/texttype';
import { MdQuestionMark } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Silkscreen } from "next/font/google";
import { MdOutlineEmail } from "react-icons/md";


const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"], // regular & bold
});

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const lockerNumbers = Array.from({ length: 20 }, (_, index) => index + 1);


export default function HomePage(){
    return (
        <div className={`${quesFont.className} `}>
            <div className="fixed z-30 w-full">
                <Navbar/>
            </div>
            
            {/* Section Loker DEKSTOP*/}
            <div>
                <div className="w-full bg-amber-50">

                    
                    <div className="relative w-full overflow-hidden p-10 pt-30">
                        {/* Loker Content */}
                        <div className="relative z-20">
                            <div className="grid grid-cols-2 auto-rows-[140px] gap-2 md:auto-rows-[165px] lg:grid-cols-4 2xl:grid-cols-5">
                                <div className="col-span-2 row-span-4 md:row-span-3 lg:row-span-2 border-slate-400 border-4 bg-gray-100 p-4 md:p-5">
                                    <div className="flex h-full flex-col justify-between gap-y-6 md:gap-y-10">
                                        {/* row 1 */}
                                        <div>
                                            <div className="f">
                                                <div className="">
                                                    <div className={silkscreen.className}>
                                                        <div className="w-full max-w-90 border-[#7b7b7b] border-6 bg-[#3d3d3d] p-2">
                                                            <span>
                                                                <TextType 
                                                                    text={[
                                                                        "Loker Kamar 320",
                                                                        "Cari Loker Mu",
                                                                        "Temukan Pesan di Loker Mu",
                                                                        "kamar320.com"
                                                                    ]}
                                                                    typingSpeed={75}
                                                                    pauseDuration={1500}
                                                                    showCursor
                                                                    cursorCharacter="|"
                                                                    deletingSpeed={50}
                                                                    cursorBlinkDuration={0.5}
                                                                    className="text-[#ffee00]"
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* row 2 */}
                                        <div>
                                            <div className="flex flex-col gap-2 md:flex-row">
                                                <div className="basis-6/10 border border-black bg-white">
                                                    <input type="text" placeholder="4 digit terakhir no telp/wa atau email" className="p-2 w-full" />
                                                </div>
                                                {/* row 2 */}
                                                <div className="flex basis-2/10 items-center justify-center rounded-lg border border-gray-500 bg-gray-200 p-2">
                                                    <button className="">
                                                        cari loker
                                                    </button>
                                                </div>
                                                {/* row 3 */}
                                                <div className="flex basis-2/10 items-center justify-center rounded-lg border border-gray-500 bg-gray-200 p-2">
                                                    <button className="flex flex-row gap-x-1">
                                                        <span className="flex items-center justify-center">tutorial</span>
                                                        <span className="flex items-center justify-center text-sm"><MdQuestionMark /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* row 3 */}
                                        <div className="mt-auto flex w-full flex-col gap-y-2 border-t border-slate-300 pt-3 md:pt-4">
                                            <div>
                                                <h1 className="pb-1 text-lg font-semibold md:pb-2 md:text-xl">butuh bantuan ?</h1>
                                            </div>
                                            <div className="flex items-start justify-start gap-x-2 text-sm leading-relaxed md:items-center md:text-base">
                                                <span className="mt-0.5 shrink-0 md:mt-0"><FaWhatsapp /></span>
                                                <span className="wrap-break-word">+62 897-0052-654</span>
                                            </div>
                                            <div className="flex items-start justify-start gap-x-2 text-sm leading-relaxed md:items-center md:text-base">
                                                <span className="mt-0.5 shrink-0 md:mt-0"><MdOutlineEmail /></span>
                                                <span className="break-all sm:wrap-break-word">help@kamar320.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {lockerNumbers.map((lockerNumber) => (
                                    <div key={lockerNumber} className="h-full border-slate-400 border-4 bg-white/80 p-3">
                                        <div className="flex h-full items-center justify-start">
                                            <span className="w-20 border-3 border-[#a9a9a9] bg-white p-1 text-end text-2xl font-bold text-[#737373]">
                                                {lockerNumber}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
