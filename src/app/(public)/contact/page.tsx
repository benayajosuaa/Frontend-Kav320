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
                <div className="px-5 py-14 sm:px-8 md:px-10 lg:px-15 lg:py-15">
                    <div className="flex flex-col gap-y-10">
                        {/* SECTION JUDUL */}
                        <div className="pt-18 pb-2 sm:pt-20">
                            <h1 className="text-4xl sm:text-5xl">Relasi</h1>
                        </div>
                        
                        {/* SECTION NAVBAR */}
                        <div className="flex flex-wrap gap-x-3 gap-y-2 pb-6 text-lg sm:gap-x-4 sm:text-xl md:text-2xl lg:pb-8">
                            <div className="font-medium">Laci</div>
                            <div className="font-light text-[#868686]">/</div>
                            <div className="font-medium">Whatsapp</div>
                            <div className="font-light text-[#868686]">/</div>
                            <div className="font-medium">Instagram</div>
                            <div className="font-light text-[#868686]">/</div>
                            <div className="font-medium">Facebook</div>
                        </div>

                        {/* FORM CONTACT */}
                        <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-stretch">
                            {/* BAGIAN_FORM_1 */}
                            <div className="basis-full  p-4 sm:p-5 md:p-6 lg:basis-3/10 lg:p-0">
                                <div className="flex h-full flex-col gap-y-8">
                                    {/* Nama */}
                                    <div className="flex flex-col">
                                        <span>
                                            <h1  className="text-base">Nama</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-5 text-base font-medium outline-none sm:text-lg md:text-xl"
                                                type="text" 
                                                placeholder="Benaya Simamora"
                                            />
                                        </span>
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-col">
                                        <span>
                                            <h1 className="text-base">Email</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-5 text-base font-medium outline-none sm:text-lg md:text-xl"
                                                type="email" 
                                                placeholder="alamatemail@domain.mu"
                                            />
                                        </span>
                                    </div>
                                    {/* Phone */}
                                    <div className="flex flex-col">
                                        <span>
                                            <h1 className="text-base">Nomor Telephone</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-5 text-base font-medium outline-none sm:text-lg md:text-xl"
                                                type="tel" 
                                                placeholder="+62 897-0052-654"
                                            />
                                        </span>
                                    </div>
                                    {/* Title */}
                                    <div className="flex flex-col">
                                        <span>
                                            <h1 className="text-base">Keperluan</h1>
                                        </span>
                                        <span>
                                            <input 
                                                className="w-full border-b border-black px-1 py-2 pr-5 text-base font-medium outline-none sm:text-lg md:text-xl"
                                                type="text" 
                                                placeholder="Mau buat Landing Page"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* BAGIAN_2_FORM */}
                            <div className="basis-full  p-4 sm:p-5 md:p-6 lg:basis-7/10 lg:p-0">
                                <div className="flex h-full flex-col">
                                    <div className="pb-2">
                                        <h1 className="text-base">Deskripsi Detail</h1>
                                    </div>
                                    <div className="w-full flex-1">
                                        <textarea
                                            className="h-full min-h-52 w-full resize-none border border-black px-1 py-2 pr-5 text-base font-medium outline-none sm:min-h-60 sm:text-lg md:min-h-64 md:text-xl lg:min-h-64"
                                            placeholder="Mau buat Landing Page dengan ... "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* BUTTON */}
                        <div>
                            <div className="flex items-center justify-stretch sm:justify-end">
                                <button className="w-full rounded-lg border border-black bg-[#dadada] px-6 py-2 text-base sm:w-auto sm:px-8 sm:text-lg md:text-xl">
                                    kirim pesan
                                </button>
                            </div>
                        </div>


                        {/* PEMBERITAHUAN */}
                        <div className="flex flex-col gap-y-3">
                            <div>
                                <h1 className="text-2xl sm:text-3xl">Perhatian!</h1>
                            </div>
                            <div className="flex text-base sm:text-lg">
                                <p className="w-full md:max-w-[75%] lg:basis-3/5">
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


