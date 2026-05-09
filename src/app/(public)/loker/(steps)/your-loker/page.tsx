"use client"
import { useEffect, useState } from 'react';
import TextType from '../../../../../decoration/texttype';
import { Questrial} from "next/font/google";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

function FakeLoker() {
  return (
    <div className="h-160 w-250 border-6 rounded-3xl md:rounded-xl border-[#8aa0bd] bg-white/70 p-6 md:p-8">
      <div className="h-full w-full"></div>
    </div>
  );
}

export default function YourLoker(){
    const [viewportWidth, setViewportWidth] = useState<number | null>(null);

    useEffect(() => {
        const syncViewport = () => setViewportWidth(window.innerWidth);

        syncViewport();
        window.addEventListener("resize", syncViewport);

        return () => window.removeEventListener("resize", syncViewport);
    }, []);

    const isMobile = viewportWidth !== null && viewportWidth < 640;
    const isTablet = viewportWidth !== null && viewportWidth >= 640 && viewportWidth < 1024;
    const responsiveScale = isMobile ? 0.31 : isTablet ? 0.5 : null;

    return(
        <div className={quesFont.className}>
            <div className="h-screen overflow-hidden bg-gray-300">
                <div className="flex h-full items-center justify-center px-3 sm:px-6 lg:px-0">
                <div
                    className="grid min-w-max origin-center grid-cols-3 grid-rows-3 gap-3 scale-[1.08] md:gap-4 md:scale-[1.12] xl:scale-[1.16]"
                    style={responsiveScale ? { transform: `scale(${responsiveScale})` } : undefined}
                >
                    <FakeLoker />
                    <FakeLoker />
                    <FakeLoker />
                    <FakeLoker />

                    {/* LOKER UTAMA YANG AKAN DI KLIK */}
                    <div className="h-160 w-250 border-6 border-[#8aa0bd] rounded-3xl md:rounded-xl bg-white/90 p-6 md:p-8 lg:p-10">
                        <div className="flex h-full w-full items-center pr-4 md:pr-6 lg:pr-10">
                            {/* LAYAR DISPLAY */}
                            <div className="flex h-30 w-60 items-center justify-end rounded-xl border-6 border-[#8aa0bd] bg-[#e6e6e6] p-2 pr-3 lg:border-8">
                                <button>
                                    <span className={vt323.className}>
                                        <TextType 
                                            text={[
                                                "hai!",
                                                "ini lokermu",
                                                "klik disini"
                                            ]}
                                                typingSpeed={55}
                                                pauseDuration={2500}
                                                showCursor
                                                cursorCharacter=""
                                                deletingSpeed={50}
                                                cursorBlinkDuration={0.5}
                                                className="text-4xl text-[#282828] md:text-4xl"
                                        />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <FakeLoker />
                    <FakeLoker />
                    <FakeLoker />
                    <FakeLoker />
                </div>
                </div>
            </div>
        </div>
    )
}
