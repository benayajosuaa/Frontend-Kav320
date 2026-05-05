"use client"
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { Questrial } from "next/font/google";
import BlurText from "../../../decoration/blurtext"
import { IoIosArrowRoundDown } from "react-icons/io";


const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



export default function HomePage() {
  return (
    <div className={`${quesFont.className} bg-transparent`}>
        {/* SECTION: NAVBAR */}
        <div className="fixed z-30 w-full">
            <Navbar />
        </div>

        <div className="flex flex-col relative bg-transparent">
            <div className="relative flex min-h-screen items-center justify-center text-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img src="/ulitity/tesing.png" alt="background" className="w-full h-full object-cover" />
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col gap-y-4">
                    <div className="relative">
                        <BlurText
                            text="Selamat datang di Kamar 320"
                            delay={200}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-5xl mb-8"
                        />
                    </div>         
                </div>
            </div>
        </div>

        {/* SECTION: KEBERLANJUTAN */}
        <div className="">
            <div className="">
                <div className="pb-25 pl-25 pr-25 pt-15">
                    {/* Judul */}
                    <div>
                        <h1 className="text-6xl">Tentang Kamar 320</h1>
                        <div className="flex pt-10">
                            <p className="text-3xl">
                                kamar 320 bukanlah suatu projek yang bersifat temporal <br/>
                                melainkan suatu ambisi berkelanjutan yang akan menghadiran pelayanan holistik <br/>
                                yang membantu masyarakat untuk mendapatkan kebutuhan teknologi yang memadai
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION: FOOTER */}
        <div className="">
            <Footer />
        </div>
    </div>
  )
}