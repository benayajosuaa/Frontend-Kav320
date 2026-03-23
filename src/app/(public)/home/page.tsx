import Navbar from "../../../components/navbar"

export default function HomePage(){
    return (
        <div className="min-h-screen">
            <div className="sticky top-0 z-20">
                <Navbar />
            </div>

            <div className="min-h-screen flex items-center justify-center bg-amber-100">
                <h1 className="text-3xl">Testing</h1>
            </div>
            <div className="min-h-screen flex items-center justify-center bg-blue-100">
                <h1 className="text-3xl">Testing</h1>
            </div>
        </div>
    )
}