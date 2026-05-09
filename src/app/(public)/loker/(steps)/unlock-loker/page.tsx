"use client";

import { useState } from "react";
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

const keypadButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "<"];

export default function FindMyLoker() {
  const [pinInput, setPinInput] = useState("");

  const handleKeypadClick = (value: string) => {
    if (value === "C") {
      setPinInput("");
      return;
    }

    if (value === "<") {
      setPinInput((currentValue) => currentValue.slice(0, -1));
      return;
    }

    setPinInput((currentValue) => `${currentValue}${value}`);
  };

  return (
    <div className={quesFont.className}>
      <div className="flex min-h-screen items-center justify-center bg-amber-100 px-4 py-6 sm:px-6 sm:py-8">
        <div className="w-full max-w-300 rounded-2xl border-4 border-[#777777] bg-[#e1e1e1] sm:border-[6px] xl:h-150 xl:w-300 xl:border-8">
          <div className="flex flex-col gap-6 p-4 sm:gap-8 sm:p-6 md:p-8 lg:flex-row lg:gap-x-10 lg:p-10">
            <div className="flex flex-col gap-y-6 lg:basis-6/10 lg:gap-y-10">
              <div>
                {/* Disini Tempat Iklan ya Wok */}
                <div className="h-48 w-full rounded-xl border-3 border-[#848484] bg-amber-100 sm:h-56 md:h-64 lg:h-72 xl:h-80"></div>
              </div>

              <div className={vt323.className}>
                <input
                  className="w-full border-4 border-[#858585] bg-[#444242] px-3 py-4 text-center text-2xl tracking-[0.2em] text-white outline-none placeholder:text-white/70 sm:border-[6px] sm:text-3xl md:text-4xl lg:border-[8px] lg:text-5xl lg:tracking-[0.28em] xl:border-[10px] xl:tracking-[0.35em]"
                  type="text"
                  value={pinInput}
                  readOnly
                  placeholder="ENTER PIN"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between lg:basis-4/10">
              <div>
                <div>
                  <div className={`${quesFont.className} grid grid-cols-3 grid-rows-4 gap-2 sm:gap-3`}>
                  {keypadButtons.map((button) => {
                    return (
                      <button
                        key={button}
                        type="button"
                        onClick={() => handleKeypadClick(button)}
                        className="flex h-16 items-center justify-center rounded-lg border-3 border-[#6b6b6b] bg-[#e9e9e9] text-2xl sm:h-18 sm:text-3xl md:h-20 md:text-4xl"
                      >
                        {button}
                      </button>
                    );
                  })}
                  </div>
                </div>
              </div>
              <div>
                <button
                        type="button"
                        className="mt-4 flex h-16 w-full items-center justify-center rounded-lg border-3 border-[#6b6b6b] bg-[#e9e9e9] text-2xl sm:mt-5 sm:h-18 sm:text-3xl md:mt-6 md:h-20"
                    >
                        BUKA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
