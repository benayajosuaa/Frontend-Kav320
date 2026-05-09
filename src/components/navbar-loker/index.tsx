"use client"
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function NavigationBar() {
  return (
    <div className={`${quesFont.className} bg-transparent`}>
      {/* Tampilan Desktop */}
      <div className="hidden md:block">
         <div className="w-full">
          {/* pembagian */}
          <div className="grid grid-cols-2 px-15 pt-3 pb-0 ">
            {/* kiri */}
            <div className="">
              <img src="logo/logo-laci.svg" className="h-24 w-auto" />
            </div>

            {/* kanan */}
            <div className="flex items-center justify-end">
                <Link href="">
                    <div className="rounded-xl border border-[#bcbcbc] bg-white/10 px-6 py-2 text-[#2f3338] ">
                        mau kirim sesuatu ?
                    </div>
                </Link>
            </div>
          </div>
        </div>
      </div>



      {/* Tampilan Mobile */}

      <div className="md:hidden">
        <div className="flex flex-row justify-between items-center p-5 pt-3 pb-2 bg-white border-b">
            {/* Logo */}
            <div>
                <img className="h-11 w-auto" src="logo/logo-laci.svg" alt="logo" />
            </div>

            {/* Hamburger Menu */}
            <div className="rounded-lg border text-sm border-[#bcbcbc] bg-white/10 px-4 py-1 text-[#2f3338] ">
                mau kirim sesuatu ?
            </div>
        </div>
      </div>
    </div>
  );
}