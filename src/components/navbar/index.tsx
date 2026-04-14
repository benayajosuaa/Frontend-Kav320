"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IBM_Plex_Serif} from "next/font/google"
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const ibmFont = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: "400",
})



export default function NavigationBar() {
    const pathname = usePathname()
    const menuNavbar = [
        {name: "Work", href:"/work"},
        {name: "Service", href:"/services"},
        {name: "Contact", href:"/contact"},
        {name: "ben ?", href:"/login"},
        
    ]
    
    return (
        <div className={`bg-white ${quesFont.className} border-b`}>
            {/* pembagian */}
            <div className="flex flex-row justify-between ">
                <div className="pr-4">
                    <Link href="/">
                        <img 
                            src="/logo/kav.png" 
                            alt=""
                            className="h-13"
                        />
                    </Link>
                </div>
                <div className="h-auto flex-row flex items-center gap-x-4 text-xl pr-8">
                    {
                        menuNavbar.map((e) => (
                            <div>
                                <Link
                                    key={e.href}
                                    href={e.href}
                                    className={`${pathname === e.href ? "text-black" : "text-gray-500 hover:text-black"} transition`}
                                >
                                    {e.name}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
