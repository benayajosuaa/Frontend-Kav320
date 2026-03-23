import Link from "next/link";
import { IBM_Plex_Serif} from "next/font/google"

const ibmFont = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: "400",
})


export default function NavigationBar() {
  return (
    <div className={`bg-white ${ibmFont.className} border-b`}>
        {/* pembagian */}
        <div className="flex flex-row justify-between ">
            <div className="pr-4">
                <Link href="/">
                    <img 
                        src="/logo/kav.png" 
                        alt=""
                        className="h-13"
                    />
                </Link>
            </div>
            <div className="h-auto flex-row flex items-center gap-x-6 text-xl pr-8">
                <div>
                    <Link href="/work">Work</Link>
                </div>
                <div>
                    <Link href="/services">Service</Link>
                </div>
                <div>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </div>
    </div>
  );
}
