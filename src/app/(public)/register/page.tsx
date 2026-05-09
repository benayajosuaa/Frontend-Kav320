"use client"
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
                    <div className="w-full max-w-310 rounded-xl border border-black bg-white">
                        <div className="p-6 sm:p-8 xl:p-10">
                            <div className="flex flex-col gap-y-10">
                                {/* Section 1 */}
                                <div className="flex flex-col gap-y-2">
                                    <h1 className="text-2xl font-semibold sm:text-3xl">hai! calon pengunjung kamar320</h1>
                                    <h1>daftarkan dirimu dengan melengkapi data-data dibawah ini ya </h1>
                                </div>

                                {/* Section 2 */}
                                <div className="flex flex-col gap-y-10">
                                    {/* Section 2a */}
                                    <div className="flex flex-col gap-8 md:flex-row md:gap-6 xl:gap-0">
                                        <div className="flex md:basis-1/2">
                                            <div className="flex w-full flex-col xl:w-auto xl:max-w-none">
                                                <span className="pb-1 text-base sm:text-lg">
                                                    Nama Lengkap
                                                </span>
                                                <input 
                                                    className="w-full border-b border-black p-2 pl-1 pr-5 text-lg sm:text-xl xl:w-120"
                                                    type="text" 
                                                    name="full_name"
                                                    autoComplete="name"
                                                    placeholder="Benaya Joshua I. Simamora"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex md:basis-1/2">
                                            <div className="flex w-full flex-col xl:w-auto xl:max-w-none">
                                                <span className="pb-1 text-base sm:text-lg">
                                                    Kami bisa panggil anda dengan ?
                                                </span>
                                                <input 
                                                    className="w-full border-b border-black p-2 pl-1 pr-5 text-lg sm:text-xl xl:w-120"
                                                    type="text" 
                                                    name="display_name"
                                                    autoComplete="nickname"
                                                    placeholder="ben"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Section 2b */}
                                    <div className="flex flex-col gap-8 md:flex-row md:gap-6 xl:gap-0">
                                        <div className="flex md:basis-1/2">
                                            <div className="flex w-full flex-col xl:w-auto xl:max-w-none">
                                                <span className="pb-1 text-base sm:text-lg">
                                                    Nomor Telephone / Whatsapp
                                                </span>
                                                <div className="flex w-full items-center border-b border-black xl:w-120">
                                                    <div className="flex items-center gap-2 pr-3 text-lg sm:text-xl">
                                                        <span className="font-medium">+62</span>
                                                    </div>
                                                    <input 
                                                        className="w-full p-2 pl-0 pr-5 text-lg outline-none sm:text-xl"
                                                        type="tel" 
                                                        name="phone_number"
                                                        autoComplete="tel-national"
                                                        inputMode="numeric"
                                                        pattern="[0-9]{8,15}"
                                                        placeholder="812 3456 7890"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex md:basis-1/2">
                                            <div className="flex w-full flex-col xl:w-auto xl:max-w-none">
                                                <span className="pb-1 text-base sm:text-lg">
                                                    Password
                                                </span>
                                                <input 
                                                    className="w-full border-b border-black p-2 pl-1 pr-5 text-lg sm:text-xl xl:w-120"
                                                    type="password" 
                                                    name="password"
                                                    autoComplete="new-password"
                                                    placeholder="6 kombinasi angka yang sulit ya, cth: 382736"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Section 2b */}
                                    <div className="flex flex-col gap-8 md:flex-row md:gap-6 xl:gap-0">
                                        <div className="flex md:basis-1/2">
                                            <div className="flex w-full flex-col xl:w-auto xl:max-w-none">
                                                <span className="pb-1 text-base sm:text-lg">
                                                    Email
                                                </span>
                                                <input 
                                                    className="w-full border-b border-black p-2 pl-1 pr-5 text-lg sm:text-xl xl:w-120"
                                                    type="email" 
                                                    name="email"
                                                    autoComplete="email"
                                                    placeholder="alamatemail@domain.mu"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex md:basis-1/2">
                                            <div className="flex w-full flex-col xl:w-auto xl:max-w-none">
                                                <span className="pb-1 text-base sm:text-lg">
                                                    Konfirmasi Password
                                                </span>
                                                <input 
                                                    className="w-full border-b border-black p-2 pl-1 pr-5 text-lg sm:text-xl xl:w-120"
                                                    type="password" 
                                                    name="confirm_password"
                                                    autoComplete="new-password"
                                                    placeholder="masukan kembali 6 kombinasi angka"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-6 xl:gap-0">
                                        <div className="md:basis-8/10">
                                            <div className="flex flex-col">
                                                <span className="font-semibold">Perhatian!</span>
                                                <span>
                                                    cek kembali segala data yang diberikan terkhususnya pada bagian nomor telephone dan alamat email, 
                                                    segala pemberitahuan akan disampaikan dari antara 2 media tersebut.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start md:basis-2/10 md:justify-end xl:justify-center">
                                            <button className="rounded-lg border border-black bg-[#dadada] px-8 py-2 text-lg sm:text-xl ">
                                                Daftar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>  
    )
}
