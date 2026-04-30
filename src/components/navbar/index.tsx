"use client"

import Link from "next/link";
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});





export default function NavigationBar() {

    
    return (
        <div className={` ${quesFont.className} bg-transparent`}>
            {/* pembagian */}
            <div className="grid grid-cols-2 items-center pt-10 pb-3 px-15">
                {/* kiri */}
                <div className="bg-b">
                    <Link href="/">
                    <img src="/logo/kamarlogo.png" className="h-15 w-auto" />
                    </Link>
                </div>

                {/* kanan */}
                <div className="">
                    <div className="flex justify-start">
                        <div className="flex border border-black divide-x divide-black">
                            <button className="p-2 w-40">
                                <Link href="/work">Work</Link>
                            </button>
                            <button className="p-2 w-40">Service & Payment</button>
                            <button className="p-2 w-40">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
