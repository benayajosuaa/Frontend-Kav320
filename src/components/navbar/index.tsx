"use client"

import Link from "next/link";
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function NavigationBar() {
  return (
    <div className={`${quesFont.className} bg-transparent`}>
      {/* pembagian */}
      <div className="grid grid-cols-2 items-start px-15 pt-9 pb-0 ">
        {/* kiri */}
        <div className="bg-transparent">
          <Link href="/">
            <img src="/logo/kamarlogo.png" className="h-15 w-auto" />
          </Link>
        </div>

        {/* kanan */}
        <div className="bg-transparent">
          <div className="grid grid-cols-4 auto-rows-[2.75rem] content-start gap-0 bg-transparent">
            <Link href="/work" className="flex h-11 text-lg justify-center items-center border-l border-t border-b border-black px-1 bg-transparent">
                Work
            </Link>
            <Link href="/services" className="flex h-11 text-lg justify-center items-center border-t border-r border-b border-l border-black px-1 bg-transparent">
                Service
            </Link>
            <Link href="/contact" className="flex h-11 text-lg justify-center items-center border-t border-r border-b border-black px-1 bg-transparent">
                Relation
            </Link>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}