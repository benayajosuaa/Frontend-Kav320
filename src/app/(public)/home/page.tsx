import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function HomePage() {
  return (
    <div className={`${quesFont.className} bg-transparent`}>
        {/* SECTION: NAVBAR */}
        <div className="fixed inset-x-0 top-0 z-30">
            <Navbar />
        </div>

        <div className="min-h-screen bg-amber-100">
            <div className="flex min-h-screen items-center justify-center text-2xl">
                <h1>Testing</h1>
            </div>
        </div>
        
        {/* Garis */}
        <div className="ml-15 mr-15 border-[#838383] border border-b"/>

        {/* SECTION: KEBERLANJUTAN */}
        <div className="bg-green-50">
            <div className="h-screen">
                <div className="p-25">
                    {/* Judul */}
                    <div>
                        <span>
                            <h1 className="text-6xl">Keberlanjutan Kami</h1>
                        </span>
                        <span className="flex pt-10">
                            <p className="text-3xl">
                                kamar 320 bukanlah suatu projek yang bersifat temporal <br/>
                                melainkan suatu ambisi berkelanjutan yang akan menghadiran pelayanan holistik <br/>
                                yang membantu masyarakat untuk mendapatkan kebutuhan teknologi yang memadai
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        

        {/* SECTION: FOOTER */}
        <div>
            <Footer />
        </div>
    </div>
  )
}
