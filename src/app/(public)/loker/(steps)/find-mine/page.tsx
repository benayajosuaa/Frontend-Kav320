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
      <div className="flex min-h-screen items-center justify-center bg-amber-100">
        <div className="h-150 w-300 border-8 border-[#777777] rounded-2xl bg-[#e1e1e1]">
          <div className="flex flex-row gap-x-10 p-10">
            <div className="basis-6/10 flex flex-col gap-y-10">
              <div>
                {/* Disini Tempat Iklan ya Wok */}
                <div className="h-80 w-full bg-amber-100 border-3 border-[#848484] rounded-xl">

                </div>
              </div>

              <div className={vt323.className}>
                <input
                  className="w-full border-10 border-[#858585] bg-[#444242] p-3 text-center text-5xl tracking-[0.35em] text-white outline-none"
                  type="text"
                  value={pinInput}
                  readOnly
                  placeholder="ENTER PIN"
                />
              </div>
            </div>

            <div className="basis-4/10 flex flex-col justify-between">
              <div>
                <div>
                  <div className={`${quesFont.className} grid grid-cols-3 grid-rows-4 gap-3`}>
                  {keypadButtons.map((button) => {
                    return (
                      <button
                        key={button}
                        type="button"
                        onClick={() => handleKeypadClick(button)}
                        className="h-20 border-3 rounded-lg bg-[#e9e9e9] border-[#6b6b6b] text-4xl flex items-center justify-center"
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
                        className="mt-6 w-full h-20 flex items-center justify-center text-3xl bg-[#e9e9e9] border-3 rounded-lg border-[#6b6b6b]"
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
