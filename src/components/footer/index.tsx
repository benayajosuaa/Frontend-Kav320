"use client"
import Link from "next/link";
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const navigationLink = [
    { href: "/work", label: "Kerjaan kamar320" },
    { href: "/services", label: "Pelayanan" },
    { href: "/contact", label: "Relasi" },
]


const sosialMedia = [
    { href: "/https://wa.me/628970052654", label: "Whatsapp"}, 
    { href: "https://instagram.com/benayajosuaa", label: "Instagram"}, 
]

export default function NavigationBar() {
    return (
        <div className={`${quesFont.className} relative`} data-navbar-theme="dark">
            {/* DESKTOP */}
            <div className="hidden md:block" data-navbar-theme="dark">
                <div className={`relative text-white isolate overflow-hidden pointer-events-none h-screen bg-[#4B4B4B]`}>
                {/* Section 1 */}
                <div>
                    {/* pembagian */}
                    <div className="grid grid-cols-2 items-center px-15 pt-9 pb-0">
                        {/* kiri */}
                        <div className=""/>
                            {/* kanan */}
                            <div className="">
                                <div className="grid grid-cols-4 gap-0 divide-y divide-[#ffffff] ">
                                    <div className="bg-transparent h-11"/>
                                    <div className="bg-transparent h-11"/>
                                    <div className="bg-transparent h-11"/>
                                    <div className="bg-transparent h-11"/>
                                    <div className="flex h-11 items-center border-l  border-b border-[#ffffff] px-1 justify-center ">
                                        <p className="text-lg ">Phone</p>
                                    </div>
                                    <div className="pl-5 p-2 col-span-3 flex h-11 items-center  border-r border-b border-l border-[#ffffff] px-1">
                                        <p className="text-lg">+62 897-0052-654</p>
                                    </div>
                                    <div className="flex h-11 items-center justify-center border-l  border-b border-[#ffffff] px-1">
                                        <p className="text-lg">Email</p>
                                    </div>
                                    <div className="pl-5 p-2  col-span-3 flex h-11 items-center  border-r  border-l border-[#ffffff] px-1">
                                        <p className="text-lg">
                                            contact@kamar320.com
                                        </p>
                                    </div>
                                    <div className="bg-transparent h-11 border-0"/>
                                    <div className="pl-5 p-2 col-span-3 flex h-auto items-center  border-r border-b border-l border-[#ffffff] px-1">
                                        <p className="text-lg">
                                            Jl. Boulevard M.H. Thamrin 1100, <br/> Lippo Village, Kelapa Dua, <br/> Tangerang, Banten <br/>Indonesia  
                                            <br/>
                                            <span className="text-sm italic">*alamat bisa berubah kapan saja</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Section 2*/}
                    <div className="absolute bottom-0 bg-transparent p-15">
                        <div>
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl">Kecakapan pelayanan profesional dan responsif</h1>
                        </div>
                        <div className="pt-10">
                            <h4 className="text-xl">
                                <span>2026 © kamar320  - </span>
                                <span>develop by Benaya Joshua, part of </span>
                                <span className="font-underline">halobenaya.com</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div className="md:hidden" data-navbar-theme="dark">
                <div className="p-8 pt-20 bg-[#4B4B4B]">
                   <div className="flex flex-col gap-y-6 text-white">
                        
                        <div>
                            <img 
                                className="h-12 w-auto"
                                src="logo/icon-pintu.png" alt="icon-kamar320" 
                            />
                        </div>
                        <div className="flex flex-row">
                            {/* Social Media */}
                            <div className="flex basis-1/2 flex-col">
                                <div className="pb-2">
                                    <h1 className="text-lg text-[#ababab] font-semibold">Sosial</h1>
                                </div>
                                <div className="gap-y-1 flex flex-col border-l pl-2">
                                    {
                                        sosialMedia.map((x)=> {
                                            return (
                                                <div key={x.href}>
                                                    <Link
                                                        key={x.href} 
                                                        href={x.href}
                                                        target="blank"
                                                        >
                                                            {x.label}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div> 
                            {/* Media sosial */}
                            <div className="flex basis-1/2 flex-col">
                                <div className="pb-3">
                                    <h1 className="text-lg text-[#ababab] font-semibold">Link</h1>
                                </div>
                                <div className="gap-y-1 flex flex-col border-l pl-2">
                                    {
                                        navigationLink.map((x) => {
                                            return (
                                                <div key={x.href}>
                                                    <Link
                                                        href={x.href}
                                                    >
                                                        {x.label}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div> 
                        </div>

                        <div>
                            <h1 className="text-sm pt-10">
                                Jl. Boulevard M.H. Thamrin 1100, <br/> Lippo Village, Kelapa Dua, <br/> Tangerang, Banten <br/>Indonesia 
                            </h1>
                        </div>

                        <div>
                            <h4 className="text-sm text-center pt-10 pb-10">
                                <span>2026 © kamar320  - </span>
                                <span>develop by Benaya Joshua, part of </span>
                                <span className="font-underline">halobenaya.com</span>
                            </h4>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
}
