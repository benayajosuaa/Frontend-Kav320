import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"

export default function HomePage(){
    return (
        <div className="relative">
            <div className="fixed w-full h-screen bottom-0 z-0">
                <Footer />
            </div>

            <div className="relative z-20 mb-[100vh] bg-amber-100">
                <div className="sticky top-0 z-30 bg-white">
                    <Navbar />
                </div>

                <div className="flex min-h-screen items-center justify-center">
                    <h1 className="text-3xl">Contact</h1>
                </div>

            </div>
        </div>
    )
}
