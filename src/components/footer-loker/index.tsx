"use client"

import Link from "next/link";
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});





export default function NavigationBar() {
    return (
        <div className={`${quesFont.className}`}>
            {/* DESKTOP */}
            <div className="hidden md:block">
                <div className={`relative isolate overflow-hidden bg-[#444444]`}>
                    <div className="flex flex-col gap-y-10 text-white p-20">
                        {/* atas */}
                        <div className="min-h pt-10">
                            <div className="flex flex-col gap-y-4">
                                {/* Section 1 */}
                                <div className="-ml-3 -mb-6">
                                    <img className="h-20" src="logo/logo-laci-putih.svg" alt="" />
                                </div>

                                {/* Section 2 */}
                                <div>
                                    <p className="text-2xl">Laci, tempat kamu menitipkan pesan <br/> kepada orang secara privat</p>
                                </div>

                                {/* Section Link */}
                                <div className="flex flex-row gap-x-3 pt-9 text-xl pointer-events-auto">
                                    <div className="font-semibold">
                                        <Link target="blank" href="/loker">
                                            Bantuan
                                        </Link>
                                    </div>
                                    <div><span> / </span></div>
                                    <div  className="font-semibold">
                                        <Link target="blank" href="/loker">
                                            Tentang Laci
                                        </Link>
                                    </div>
                                    <div><span> / </span></div>
                                    <div  className="font-semibold">
                                        <Link target="blank" href="/loker">
                                            Dapatkan Lokermu!
                                        </Link>
                                    </div>
                                    <div><span> / </span></div>
                                    <div  className="font-semibold">
                                        <Link target="blank" href="/loker">
                                            Ide atau Masukan?
                                        </Link>
                                    </div>
                                    <div><span> / </span></div>
                                    <div  className="font-semibold">
                                        <Link target="blank" href="https://id.pinterest.com/">
                                            kamar320.com
                                        </Link>
                                    </div>
                                </div>

                               

                                {/* Section 3 */}
                                <div className="flex flex-row gap-x-10 justify-between pt-10">
                                    <div className="basis-2/6 flex flex-col">
                                        <span className="mb-3 text-3xl font-semibold">Rahasia Tetap Rahasia</span>
                                        <span>Hanya orang dengan kode akses yang dapat membuka dan melihat isi Laci yang dituju</span>
                                    </div>
                                    <div className=" basis-2/6  flex flex-col">
                                        <span className="text-3xl mb-3 font-semibold">Kirim Tanpa Jejak</span>
                                        <span>Pesan dapat dikirim tanpa identitas, tanpa riwayat publik, dan tanpa keramaian media sosial</span>
                                    </div>
                                    <div className="basis-2/6 flex flex-col">
                                        <span className="text-3xl mb-3 font-semibold">Bukan Sekadar Kotak Pesan</span>
                                        <span>Laci menghadirkan cara baru untuk menyimpan dan menemukan pesan secara lebih personal, tersembunyi, dan berkesan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white" />
                        {/* bawah */}
                        <div className="">
                            <div className="flex flex-col">
                                <div className="text-lg">
                                    <h1>2026 © Laci, bagian dari kamar320.com. dibuat oleh <span className="underline">Benaya Joshua </span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
