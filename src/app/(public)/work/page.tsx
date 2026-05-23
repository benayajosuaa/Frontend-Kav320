"use client"
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});


const listWork = [
    {   
        index:1,
        title:"Judul 1",
        gambar:"work/photoscape.png",
        link_demo:"https://instagram.com/benayajosuaa",
        magazine:"https://instagram.com/benayajosuaa",
        type:"Website"
    },
    {
        index:2,
        title:"Judul 2",
        gambar:"work/photoscape.png",
        link_demo:"https://instagram.com/benayajosuaa",
        magazine:"https://instagram.com/benayajosuaa",
        type:"Design"
    },
    {
        index:3,
        title:"Judul 3",
        gambar:"work/photoscape.png",
        link_demo:"https://instagram.com/benayajosuaa",
        magazine:"https://instagram.com/benayajosuaa",
        type:"Website"
    },
    {
        index:4,
        title:"Judul 4",
        gambar:"work/photoscape.png",
        link_demo:"https://instagram.com/benayajosuaa",
        magazine:"https://instagram.com/benayajosuaa",
        type:"Design"
    },
]


export default function HomePage(){

    const [navbarTheme, setNavbarTheme] = useState<"light" | "dark">("light");
    const darkSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleScroll = () => {
        const rect = darkSectionRef.current?.getBoundingClientRect();
        if (!rect) return;

        const isDark = rect.top <= 120 && rect.bottom >= 120;
        setNavbarTheme(isDark ? "dark" : "light");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
    };
    }, []);

    return (
        <div className={` ${quesFont.className}`}>
            <div>
                <div className="fixed w-full z-30">
                    <Navbar theme={navbarTheme} />
                </div>


                <div className="p-15">
                    <div className="flex flex-col">
                        {/* Judul */}
                        <div>
                            <div className="pt-24 sm:pt-28 sm:pb-6 md:pt-30 md:pb-15 lg:pt-20 ">
                                <h1 className="text-3xl font-bold text-[#5F2E6D] sm:text-4xl md:text-[2.7rem] lg:text-4xl">yang sudah dikerjakan kamar320</h1>
                            </div>
                        </div>
                        {/* Section */}
                        <div className="flex flex-col gap-y-5">
                            {
                                listWork.map((x) => {
                                    return (
                                        <div className="flex flex-col gap-y-7">
                                            <div>
                                                <div className="flex flex-row">
                                                    <div className="flex basis-4/10">
                                                        <div className="flex h-40 w-80 bg-amber-300">
                                                            <img 
                                                                className="h-40 w-80 object-cover object-[center_0%] border border-gray-200"
                                                                src={x.gambar} alt="" 
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex basis-6/10">
                                                        <div key={x.index} className="flex flex-col justify-between">
                                                            <div>
                                                                <h1 className="text-2xl font-semibold">
                                                                    {x.title}
                                                                </h1>
                                                            </div>
                                                            <div  className="flex flex-row gap-x-3 items-center">
                                                                <div>
                                                                    <h1 className="text-lg font-semibold">
                                                                        {x.type}
                                                                    </h1>
                                                                </div>
                                                                <span className="font-extrabold text-[#d0d0d0]"> | </span>
                                                                <div className="text-lg font-semibold">
                                                                    <Link href={x.magazine}>
                                                                        Majalah Project
                                                                    </Link>
                                                                </div>
                                                                <span className="font-extrabold text-[#d0d0d0]"> | </span>
                                                                <div className="text-lg font-semibold"> 
                                                                    <Link href={x.link_demo}>
                                                                        Demo Project
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-b border-[#d0d0d0]"/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                        
                <div ref={darkSectionRef} className="">
                    <Footer/>
                </div>
            </div>  
        </div>
    )
}
