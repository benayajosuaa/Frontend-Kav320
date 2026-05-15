import Link from "next/link";
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { Questrial } from "next/font/google";


const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});




export default function HomePage(){
    return (
        <div className={`${quesFont.className} bg-transparent`}>
            <div className="fixed z-30 w-full bg-transparent">
                <Navbar/>
            </div>
            <div>
                <div className="px-4 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-15 lg:py-15">
                    <div className="flex flex-col gap-y-5 sm:gap-y-8 lg:gap-y-10">
                        {/* SECTION JUDUL */}
                        <div className="pt-10 pb-1 sm:pt-20 sm:pb-2">
                            <h1 className="text-5xl font-bold text-[#5F2E6D] sm:text-5xl">Relasi</h1>
                        </div>
                        
                        {/* SECTION NAVBAR */}
                        <div className="flex flex-wrap gap-x-2 gap-y-1 pb-2 text-base sm:gap-x-4 sm:gap-y-2 sm:pb-6 sm:text-xl md:text-2xl lg:pb-8">
                            <div className="font-medium">
                                <Link href="/laci">
                                    Laci
                                </Link>
                            </div>
                            <div className="font-light text-[#868686]">/</div>
                            <div className="font-medium">Whatsapp</div>
                            <div className="font-light text-[#868686]">/</div>
                            <div className="font-medium">Instagram</div>
                            <div className="font-light text-[#868686]">/</div>
                            <div className="font-medium">Facebook</div>
                        </div>

                        {/* FORM CONTACT */}
                        <div className="flex flex-col gap-4 sm:gap-8 md:gap-10 lg:flex-row lg:items-stretch">
                            {/* BAGIAN_FORM_1 */}
                            <div className="basis-full px-1 py-2 sm:p-5 md:p-6 lg:basis-3/10 lg:p-0">
                                <div className="flex h-full flex-col gap-y-6 sm:gap-y-8">
                                    {/* Nama */}
                                    <div className="flex flex-col gap-y-1">
                                        <span>
                                            <h1  className="text-base">Nama</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-3 text-base font-medium outline-none sm:pr-5 sm:text-lg md:text-xl"
                                                type="text" 
                                                placeholder="Benaya Simamora"
                                            />
                                        </span>
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-col gap-y-1">
                                        <span>
                                            <h1 className="text-base">Email</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-3 text-base font-medium outline-none sm:pr-5 sm:text-lg md:text-xl"
                                                type="email" 
                                                placeholder="alamatemail@domain.mu"
                                            />
                                        </span>
                                    </div>
                                    {/* Phone */}
                                    <div className="flex flex-col gap-y-1">
                                        <span>
                                            <h1 className="text-base">Nomor Telephone</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-3 text-base font-medium outline-none sm:pr-5 sm:text-lg md:text-xl"
                                                type="tel" 
                                                placeholder="+62 897-0052-654"
                                            />
                                        </span>
                                    </div>
                                    {/* Title */}
                                    <div className="flex flex-col gap-y-1">
                                        <span>
                                            <h1 className="text-base">Keperluan</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-3 text-base font-medium outline-none sm:pr-5 sm:text-lg md:text-xl"
                                                type="text" 
                                                placeholder="Mau buat Landing Page"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* BAGIAN_2_FORM */}
                            <div className="basis-full px-1 py-2 sm:p-5 md:p-6 lg:basis-7/10 lg:p-0">
                                <div className="flex h-full flex-col">
                                    <div className="pb-1 sm:pb-2">
                                        <h1 className="text-base">Deskripsi Detail</h1>
                                    </div>
                                    <div className="w-full flex-1">
                                        <textarea
                                            className="h-full min-h-56 w-full resize-none border border-black px-3 py-3 pr-3 text-base font-medium outline-none sm:min-h-60 sm:px-3 sm:py-3 sm:pr-5 sm:text-lg md:min-h-64 md:text-xl lg:min-h-64"
                                            placeholder="Mau buat Landing Page dengan ... "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* BUTTON */}
                        <div className="pt-0 sm:pt-0">
                            <div className="flex items-center justify-stretch sm:justify-end">
                                <button className="w-full rounded-lg border border-black bg-[#dadada] px-5 py-3.5 text-base sm:w-auto sm:px-8 sm:py-2.5 sm:text-lg md:text-xl">
                                    kirim pesan
                                </button>
                            </div>
                        </div>


                        {/* PEMBERITAHUAN */}
                        <div className="flex flex-col gap-y-2 pt-1 sm:gap-y-3 sm:pt-0">
                            <div>
                                <h1 className="text-2xl sm:text-3xl">Perhatian!</h1>
                            </div>
                            <div className="flex text-base sm:text-lg">
                                <p className="w-full leading-relaxed md:max-w-[75%] lg:basis-3/5">
                                    Kamar320 mengimbau seluruh pengunjung untuk berhati-hati terhadap segala bentuk informasi palsu, 
                                    akun tiruan, maupun nomor yang mengatasnamakan pihak Kamar320. 
                                    Seluruh komunikasi resmi hanya dilakukan melalui kontak dan kanal 
                                    yang telah dicantumkan secara resmi oleh Kamar320, 
                                    termasuk nomor telepon resmi: +62 897-0052-654. 
                                    Kami tidak pernah meminta password, kode OTP, ataupun data pribadi sensitif melalui 
                                    chat pribadi maupun pihak ketiga. Jika menemukan aktivitas mencurigakan atau 
                                    informasi yang diragukan kebenarannya, harap segera melakukan verifikasi melalui kontak resmi Kamar320.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="relative z-20">
                <Footer/>
            </div>
        </div>
    )
}
