"use client"
import { Questrial } from "next/font/google";
import Link from "next/link";


const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});




export default function UnderDevelopment(){
    return (
        <div className={quesFont.className}>
            <div className="relative flex min-h-screen overflow-hidden bg-white px-6 py-10 text-[#4B4B4B] sm:px-10 md:px-14 lg:px-20">
                <div className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-center">
                    {/* section gambar */}
                    <div className="flex w-full flex-col items-center justify-center gap-8 text-center md:flex-row md:gap-10 md:text-left lg:gap-14">
                        <div className="flex shrink-0 items-center justify-center">
                            <img
                                src="utilitas/nukang.png"
                                className="h-auto w-52 max-w-full sm:w-64 md:w-72 lg:w-80"
                                alt="Ilustrasi halaman sedang dalam pembangunan"
                            />
                        </div>
                        <div className="max-w-xl">
                            <p className="flex flex-col text-2xl leading-tight sm:text-3xl md:text-4xl">
                                <span>dalam proses pembangunan</span>
                                <span>tunggu kabar selanjutnya ya...</span>
                                <span className="pt-6 text-base text-[#848484] sm:text-lg">
                                    <Link href="/" className="underline underline-offset-4 transition-colors hover:text-[#4B4B4B]">
                                        kembali ke awal
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
