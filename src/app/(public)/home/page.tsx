import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"

export default function HomePage() {
  return (
    <div className="relative">
        <div className="fixed inset-x-0 top-0 z-30">
            <Navbar />
        </div>

        <div className="min-h-screen bg-amber-100">
            <div className="flex min-h-screen items-center justify-center text-2xl">
                <h1>Testing</h1>
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}
