import TextType from "../../../decoration/comingsoon/index"
import { Questrial } from "next/font/google";
import { IoIosArrowRoundBack } from "react-icons/io";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});




export default function HomePage(){
    return (
        <div className={`${quesFont.className}`}>
            <div className="h-screen bg-white">
                <div>
                    <div className="flex min-h-screen items-center justify-center text-3xl" >
                        <TextType 
                            text={[
                                "On Progress to build",
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
            </div>
        </div>
    )
}
