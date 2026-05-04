import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import TextType from "../../../decoration/comingsoon/index"

import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function HomePage(){
    return (
        <div className={` ${quesFont.className}`}>
            <div>
                <div className="fixed w-full">
                    <Navbar/>
                </div>


                <div>
                    <div className="flex min-h-screen items-center justify-center text-3xl" >
                        <TextType 
                            text={[
                                "Coming Soon",
                                "Kamar 320",
                                "develop by Benaya Joshua",
                                "under of halobenaya.com",
                                
                            ]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor
                            cursorCharacter="|"
                            deletingSpeed={50}
                            variableSpeed={{ min: 60, max: 120 }}
                            cursorBlinkDuration={0.5}
                            />
                    </div>
                </div>
                        
                <div>
                    <Footer/>
                </div>



            </div>  
        </div>
    )
}
