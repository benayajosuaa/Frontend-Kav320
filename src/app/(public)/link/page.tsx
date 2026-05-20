"use client"
import { Questrial } from "next/font/google";
import Link from "next/link";
import { useState } from "react";


const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const daftarLink = [
    {nomor:1, href:"/", label:"website"},
    {nomor:2, href:"https://instagram.com/benayajosuaa", label:"instagram"},
    {nomor:3, href:"https://wa.me/6281263110320?text=Halo%20Kamar320", label:"whatsapp"},
    {nomor:4, href:"/services", label:"cara kerja kami"},
]

export default function LinkPage (){
    const [pressedButton, setPressedButton] = useState<number | null>(null)


    return(
        <div className={`${quesFont.className} min-h-screen bg-[linear-gradient(180deg,#f7f1f8_0%,#ffffff_42%,#f7f0f5_100%)]`}>
            <div className="w-screen px-6 py-10 sm:px-8">
                <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center">
                    {/* Logo */}
                    <div className="flex flex-col items-center gap-y-3 pb-10 pt-10 w-full">
                        <span>
                            <img 
                                className="h-9"
                                src="logo/kamar320.png" 
                                alt="logo kamar320" 
                            />
                        </span>
                        <span>
                            <h1 className="font-light text-sm pt-2">tempat merealisasikan ide sebelum tidur</h1>
                        </span>
                        <div className="w-full pt-5">
                            <div className="w-full border-t border-2 border-[#5F2E6D]/50" />
                        </div>
                    </div>

                    {/* section */}
                    <div className="flex w-full flex-col gap-y-3">
                        
                            {
                            daftarLink.map((item) => {
                                return (
                                    <Link
                                        target="_blank"
                                        rel="noreferrer"
                                        href={item.href}
                                        key={item.nomor}
                                        onMouseDown={() => setPressedButton(item.nomor)}
                                        onMouseUp={() => setPressedButton(null)}
                                        onMouseLeave={() => setPressedButton(null)}
                                        onTouchStart={() => setPressedButton(item.nomor)}
                                        onTouchEnd={() => setPressedButton(null)}
                                        className={[
                                            "group relative w-full overflow-hidden rounded-xl border border-[#5F2E6D]",
                                            "bg-white/92 px-4 py-3 text-center text-[#5F2E6D] shadow-[0_10px_30px_rgba(95,46,109,0.08)]",
                                            "transition-all duration-200 ease-out",
                                            "hover:-translate-y-0.5 hover:bg-[#5F2E6D] hover:text-white hover:shadow-[0_14px_36px_rgba(95,46,109,0.16)]",
                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F2E6D]/30 focus-visible:ring-offset-2",
                                            "active:scale-[0.98] active:bg-[#5F2E6D] active:text-white",
                                            pressedButton === item.nomor
                                                ? "scale-[0.985] bg-[#5F2E6D] text-white shadow-[0_8px_22px_rgba(95,46,109,0.18)]"
                                                : "",
                                        ].join(" ")}
                                    >
                                        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.18)_50%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <span className="relative flex items-center justify-center text-base font-medium tracking-[0.02em] sm:text-lg">
                                            {item.label}
                                        </span>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    {/* copyright */}
                    <div className="pt-12">
                        <span>
                            <h4 className="text-sm text-center">
                                <span>2026 © kamar320.com  - </span>
                                <span>develop by Benaya Joshua, part of </span>
                                <span className="font-underline">halobenaya.com</span>
                            </h4>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
