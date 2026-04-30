import React from "react";
import Link from "next/link";
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function NavigationBar() {
  return (
    <div className={`relative min-h-screen bg-gray-50 px-8 py-8 ${quesFont.className}`}>
         <div className="grid grid-cols-2 items-center pt-15 pb-3 px-15">
                {/* kiri */}
                <div className="bg-blue-50">
                    
                </div>

                {/* kanan */}
                <div className="bg-red-50">
                    <div className="flex justify-start">
                        <div className="flex border border-black divide-x divide-black">
                            {/* <button className="p-2 w-40">
                                <Link href="/work">Work</Link>
                            </button>
                            <button className="p-2 w-40">Service & Payment</button>
                            <button className="p-2 w-40">Contact</button> */}
                            <div className="w-40 p-2 text-center">
                                <h1>Testing</h1>
                            </div>
                            <div className="w-120 p-2 text-cente">
                                <h1>Testing</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  );
}