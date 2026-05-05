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
          <div className="grid grid-cols-2 items-start px-15 pt-9 pb-0 ">
            {/* kiri */}
            <div className="">
              <Link href="/" className="bg-transparent">
                <img src="/logo/kamarlogo.png" className="h-15 w-auto" />
              </Link>
            </div>

            {/* kanan */}
            <div className="">
              <div className="grid grid-cols-4 auto-rows-[2.75rem] content-start gap-0 bg-transparent">
                <Link href="/work" className="bg-linear-to-b from-white/50 to-white/70 backdrop-blur-md flex h-11 text-lg justify-center items-center border-l border-t border-b border-black px-1 bg-transparent">
                    Work
                </Link>
                <Link href="/services" className="bg-linear-to-b from-white/50 to-white/70 backdrop-blur-md flex h-11 text-lg justify-center items-center border-t border-r border-b border-l border-black px-1 bg-transparent">
                    Service
                </Link>
                <Link href="/contact" className="bg-linear-to-b from-white/50 to-white/70 backdrop-blur-md flex h-11 text-lg justify-center items-center border-t border-r border-b border-black px-1 bg-transparent">
                    Relation
                </Link>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Tampilan Mobile */}

      <div className="md:hidden">
        <div className="flex flex-row justify-between items-center p-5 pt-3 pb-2 bg-white border-b">
          {/* Logo */}
          <div>
            <img className="h-11 w-auto" src="/logo/kamarlogo.png" alt="logo" />
          </div>

          {/* Hamburger Menu */}
          <div className="text-2xl cursor-pointer">
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}