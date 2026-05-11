"use client"
import Link from "next/link";
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function LoginPage(){
    return (
        <div className={quesFont.className}>
            <div className="min-h-screen bg-[#e3e3e3] px-4 py-6 sm:px-6 sm:py-8">
                <div className="flex min-h-[calc(100vh-3rem)] items-center justify-center sm:min-h-[calc(100vh-4rem)]">
                    <div className="w-full max-w-152 rounded-3xl border border-black bg-white p-6 sm:p-8 md:p-10 lg:h-140 lg:w-150">
                        <div className="flex min-h-full flex-col items-center justify-center gap-y-5 sm:gap-y-6 lg:h-full lg:gap-y-7">
                            <div className="pb-4">
                                <h1 className="pb-2 text-center text-xl font-bold sm:text-2xl">satu langkah lagi !</h1>
                            </div>
                            <div className="flex w-full max-w-152 flex-col lg:w-auto lg:max-w-none">
                                <span className="pb-1 text-base sm:text-lg">
                                   Kode OTP
                                </span>
                                <input 
                                    className="w-full border-b border-black p-2 pl-1 pr-5 text-center text-lg sm:text-xl lg:w-120"
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]{6}"
                                    maxLength={6}
                                    autoComplete="one-time-code"
                                    placeholder="check wa / email, cth: 836725"
                                />
                            </div>
                           
                            <div className="flex w-full max-w-152 justify-end lg:w-120 lg:max-w-none">
                                <span className="text-sm font-semibold sm:text-base lg:text-lg">Tidak menerima kode?</span>
                            </div>
                            <div>
                                <button className="rounded-lg border border-black bg-[#dadada] px-7 py-3 text-base font-semibold sm:px-8 sm:text-lg lg:px-9">
                                    aktivasi
                                </button>
                            </div>
                            <div className="px-4 text-center sm:px-10">
                                <span>belum punya akun ? daftar </span>
                                <span className="underline">
                                    <Link href="/register">
                                        disini saja
                                    </Link>
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
