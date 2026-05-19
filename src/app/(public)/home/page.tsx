"use client"
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { Questrial } from "next/font/google";
import BlurText from "../../../decoration/blurtext"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io"; 

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

type KategoriPekerjaan = "dalam pengerjaan" | "project mendatang" | "selesai"

export default function HomePage() {
    const [navbarTheme, setNavbarTheme] = useState<"light" | "dark">("light");
    const heroSectionRef = useRef<HTMLDivElement>(null);
    const section1SectionRef = useRef<HTMLDivElement>(null);
    const darkSectionRef = useRef<HTMLDivElement>(null);
    const footerSectionRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<KategoriPekerjaan>("dalam pengerjaan")

    useEffect(() => {
        const isSectionActive = (section: HTMLDivElement | null) => {
            const rect = section?.getBoundingClientRect();

            if (!rect) {
                return false;
            }

            return rect.top <= 200 && rect.bottom >= 200;
        };

        const handleScroll = () => {
            const isDark =
                isSectionActive(section1SectionRef.current) ||
                isSectionActive(heroSectionRef.current) ||
                isSectionActive(darkSectionRef.current) ||
                isSectionActive(footerSectionRef.current);

            setNavbarTheme(isDark ? "dark" : "light");
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div className={`${quesFont.className} bg-transparent`}>
            {/* SECTION: NAVBAR */}
            <div className="fixed z-30 w-full">
                <Navbar theme={navbarTheme} />
            </div>

            {/* SECTION: 1 */}
            <div ref={section1SectionRef}>
                <div   className="flex flex-col relative bg-[#5F2E6D]">
                    <div className="relative flex min-h-screen items-center justify-center px-4 text-2xl sm:px-6 md:px-10 lg:px-0">
                        {/* Background Image
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img src="/ulitity/tesing.png" alt="background" className="w-full h-full object-cover" />
                        </div> */}

                        {/* Text Content */}
                        <div className="relative z-10 flex flex-col gap-y-4 text-center text-white">
                            <div className="relative">
                                <BlurText
                                    text="Selamat datang di Kamar 320"
                                    delay={300}
                                    animateBy="words"
                                    direction="top"
                                    onAnimationComplete={handleAnimationComplete}
                                    className="mb-8 text-3xl sm:text-4xl md:text-5xl"
                                />
                            </div>         
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION: 2 */}
            <div className="bg-white py-20 sm:pt-27 md:py-24 lg:pt-30 lg:pb-30">
                <div className="px-4 sm:px-6 md:px-10 lg:p-15">
                    <div className="flex flex-col">
                        <div className="pb-5 sm:pb-6">
                            <h1 className="text-3xl font-semibold text-[#5f2e6d] sm:text-4xl">Aktivitas di Kamar320</h1>
                        </div>
                        {/* Tabsnya */}
                        <div>
                            <div className="mb-8 flex gap-6 overflow-x-auto border-b  text-sm whitespace-nowrap sm:mb-10 sm:gap-10 sm:text-base md:text-lg lg:gap-15">
                                <button
                                    onClick={() => setActiveTab("dalam pengerjaan")}
                                    className={`shrink-0 pb-2 transition-all ${
                                    activeTab === "dalam pengerjaan"
                                        ? "border-b-3 border-[#5F2E6D] text-black"
                                        : "text-gray-500"
                                    }`}
                                >
                                    dalam pengerjaan
                                </button>
                                <button
                                    onClick={() => setActiveTab("project mendatang")}
                                    className={`shrink-0 pb-2 transition-all ${
                                    activeTab === "project mendatang"
                                        ? "border-b-3 border-[#5F2E6D]  text-black"
                                        : "text-gray-500"
                                    }`}
                                >
                                    project mendatang
                                </button>
                                <button
                                    onClick={() => setActiveTab("selesai")}
                                    className={`shrink-0 pb-2 transition-all ${
                                    activeTab === "selesai"
                                        ? "border-b-3 border-[#5F2E6D]  text-black"
                                        : "text-gray-500"
                                    }`}
                                >
                                    yang sudah selesai
                                </button>
                            </div>
                        </div>
                        {/* dalam pengerjaan */}
                        {activeTab === "dalam pengerjaan" && (
                            <div className="flex flex-col gap-y-8">
                                <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-stretch lg:gap-x-10">
                                    {/* SISI KIRI - A */}
                                    <div className="flex flex-col gap-y-4 lg:basis-6/10">
                                        {/* judul */}
                                        <div className="flex flex-col">
                                            <span className="text-sm text-[#6b6b6b]">Nama Project: </span>
                                            <span className="text-2xl font-semibold sm:text-3xl">
                                                CONTOH JUDUL PROJECTNYA YAITU KAMAR320
                                            </span>
                                        </div>
                                        <div className="mt-auto flex flex-col gap-y-4">
                                            {/* ringkasan */}
                                            <div className="flex flex-col">
                                                <span className="text-sm text-[#6b6b6b]">Ringkasan Project: </span>
                                                <span className="text-sm leading-relaxed sm:text-base">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* SISI KANAN - B */}
                                    <div className="flex flex-col gap-y-4 lg:basis-4/10">
                                        {/* gambar */}
                                        <div className="h-56 w-full rounded-xl bg-green-500 sm:h-64 md:h-72 lg:h-75 lg:w-auto">
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:pr-30">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-[#6b6b6b]">Pemilik Project: </span>
                                        <span className="text-lg font-semibold sm:text-xl">
                                            Benaya Simamora
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#6b6b6b] text-sm">status:</span>
                                        <span className="text-lg font-semibold sm:text-xl">
                                            dalam pengerjaan
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#6b6b6b] text-sm">dimulai:</span>
                                        <span className="text-lg font-semibold sm:text-xl">
                                            Januari 29, 2026
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#6b6b6b] text-sm">estimasi:</span>
                                        <span className="text-lg font-semibold sm:text-xl">
                                            Agustus 9, 2026
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#6b6b6b] text-sm">progress project:</span>
                                        <span className="text-lg font-semibold sm:text-xl">
                                            67 %
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* project mendatang */}
                        {activeTab === "project mendatang" && (
                            <div className="flex flex-col gap-y-8">
                                <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-stretch lg:gap-x-10">
                                    <div className="flex flex-col gap-y-4 lg:basis-6/10">
                                        <div className="flex flex-col">
                                            <span className="text-sm text-[#6b6b6b]">Nama Project: </span>
                                            <span className="text-2xl font-semibold sm:text-3xl">
                                                Project Mendatang Kamar320
                                            </span>
                                        </div>
                                        <div className="mt-auto flex flex-col gap-y-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm text-[#6b6b6b]">Ringkasan Project: </span>
                                                <span className="text-sm leading-relaxed sm:text-base">
                                                    Section ini khusus untuk menampilkan project yang masih dalam tahap perencanaan atau belum dimulai.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-4 lg:basis-4/10">
                                        <div className="h-56 w-full rounded-xl bg-[#e8dff0] sm:h-64 md:h-72 lg:h-75 lg:w-auto">
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:pr-30">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-[#6b6b6b]">Pemilik Project: </span>
                                        <span className="text-lg font-semibold sm:text-xl">
                                            Benaya Simamora
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#6b6b6b] text-sm">status:</span>
                                        <span className="text-lg font-semibold sm:text-xl">
                                            project mendatang
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#6b6b6b] text-sm">rencana mulai:</span>
                                        <span className="text-lg font-semibold sm:text-xl">
                                            Oktober 2026
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#6b6b6b] text-sm">target:</span>
                                        <span className="text-lg font-semibold sm:text-xl">
                                            belum ditentukan
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* project selesai */}
                        {activeTab === "selesai" && (
                            <div className="flex flex-col gap-y-8">
                                <div className="flex flex-col items-stretch gap-y-8">
                                    {/* KONTEN */}
                                    {/* contoh konten 1 */}
                                    <div className="flex w-full flex-col gap-5 md:flex-row">
                                        {/* Kiri */}
                                        <div className="flex md:basis-7/10">
                                            <div className="flex flex-col">
                                                <span className="text-sm text-[#6b6b6b]">Nama Project: </span>
                                                <span className="text-2xl sm:text-3xl">
                                                    Project Yang Sudah Selesai
                                                </span>
                                            </div>
                                        </div>
                                        {/* Kanan */}
                                        <div className="flex md:basis-3/10 md:justify-end">
                                            <div className="flex flex-col">
                                                <span className="text-sm text-[#6b6b6b]">Tanggal Selesai: </span>
                                                <span className="text-2xl sm:text-3xl">
                                                    September 10, 2026
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-[#a7a7a7]"/>
                                    
                                    {/* contoh konten 2 */}
                                    <div className="flex w-full flex-col gap-5 md:flex-row">
                                        {/* Kiri */}
                                        <div className="flex md:basis-7/10">
                                            <div className="flex flex-col">
                                                <span className="text-sm text-[#6b6b6b]">Nama Project: </span>
                                                <span className="text-2xl sm:text-3xl">
                                                    Project Yang Sudah Selesai
                                                </span>
                                            </div>
                                        </div>
                                        {/* Kanan */}
                                        <div className="flex md:basis-3/10 md:justify-end">
                                            <div className="flex flex-col">
                                                <span className="text-sm text-[#6b6b6b]">Tanggal Selesai: </span>
                                                <span className="text-2xl sm:text-3xl">
                                                    September 10, 2026
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-[#a7a7a7]"/>

                                    <div className="flex flex-col gap-y-6 pt-2 text-sm sm:pt-10 sm:text-base md:pt-15 md:text-xl">
                                        <span>
                                            <h1>
                                                untuk melihat lebih detail pekerjaan yang dikerjakan <br/>
                                                bisa langsung menuju ke galeri kamar320
                                            </h1>
                                        </span>
                                        <span>
                                            <button>
                                                <Link
                                                    href="/work"
                                                    className="inline-flex items-center justify-between gap-x-3 rounded-2xl bg-[#5F2E6D] px-4 py-3 text-base text-white transition-all duration-300 ease-out sm:w-fit sm:justify-center sm:rounded-xl sm:px-5 sm:py-2.5 sm:text-lg"
                                                >
                                                    <span className="font-medium">galeri kamar320</span>
                                                    <span className="flex items-center text-2xl sm:text-[1.7rem]">
                                                        <IoIosArrowRoundForward />
                                                    </span>
                                                </Link>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            {/* SECTION: ... */}
            <div ref={heroSectionRef} className="bg-[#5F2E6D]">
                <div className="">
                    <div className="px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24 md:px-10 md:pb-24 md:pt-28 lg:p-15 lg:pt-35">
                        {/* Judul */}
                        <div className="flex flex-col gap-y-8 sm:gap-y-10">
                            <div>
                                <h1 className="text-3xl font-semibold text-[#ffffff] sm:text-4xl">
                                    Tentang Kamar 320
                                </h1>
                            </div>

                            <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-stretch lg:gap-x-10">
                                
                                <div>
                                    <img
                                        className="h-auto w-full max-w-lg lg:w-130"
                                        src="ulitity/real320.png"
                                        alt=""
                                    />
                                </div>

                                <div className="flex flex-1 items-center">
                                    <p className="text-sm leading-relaxed text-white sm:text-base md:text-lg">
                                        Kamar320 merupakan representasi dari sebuah ruang kecil yang melahirkan ide-ide besar. Berawal dari sebuah kamar pribadi pada asrama kampus yang menjadi tempat bertumbuhnya kreativitas, eksperimen, dan ketertarikan terhadap dunia digital, Kamar320 berkembang menjadi identitas yang membawa semangat inovasi dan eksplorasi tanpa batas.
                                        <br/><br/>
                                        Di ruang sederhana tersebut, berbagai proses dimulai dari rasa penasaran, pembelajaran tanpa henti, hingga keberanian untuk mencoba menciptakan sesuatu yang baru. Mulai dari pengembangan website, eksplorasi desain digital, pengembangan sistem, hingga berbagai ide kreatif lainnya, seluruh perjalanan tersebut menjadi fondasi terbentuknya Kamar320 sebagai ruang berkembang bagi inovasi digital yang adaptif dan relevan dengan kebutuhan masa kini.
                                        <br/><br/>
                                        Kamar320 hadir bukan hanya sebagai sebuah nama, tetapi juga sebagai simbol bahwa setiap ide besar selalu memiliki titik awal yang sederhana. Kami percaya bahwa teknologi bukan sekadar tentang perkembangan digital, melainkan tentang bagaimana sebuah gagasan dapat memberikan dampak nyata, membantu banyak orang, serta menciptakan pengalaman yang lebih baik melalui kreativitas dan inovasi.
                                        <br/><br/>
                                        Dengan semangat untuk terus belajar, berkembang, dan beradaptasi, Kamar320 berupaya menjadi ruang yang mampu menghadirkan solusi digital yang modern, fungsional, dan bermakna. Karena bagi kami, setiap proses kreatif selalu dimulai dari sebuah ruang untuk berpikir, bereksperimen, dan berani mewujudkan ide menjadi kenyataan.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION: FOOTER */}
            <div ref={footerSectionRef} className="">
                <Footer />
            </div>
        </div>
  )
}
