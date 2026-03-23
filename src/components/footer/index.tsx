import React from "react";
import { Questrial } from "next/font/google";

const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function NavigationBar() {
  return (
    <section className={`relative min-h-screen bg-gray-50 px-8 py-8 ${quesFont.className}`}>

        {/* Business Inquiry */}
        <div className="pt-32 space-y-3">
            <h2 className="text-3xl text-slate-600">
            Business Inquiries
            </h2>

            <h1 className="text-7xl text-slate-800">
            contact@kav320.id
            </h1>
        </div>
        <div className="w-full mt-8 border border-slate-900"/>
        <div>
            <h1 className="text-xl pt-5">or +62 812 63110320</h1>
        </div>
            
        {/* Bottom Information */}
        <div className="absolute inset-x-0 bottom-60 flex justify-between px-8">
            

            <div>
            <div className="flex flex-col">
                <span className="text-3xl leading-tight">
                    Kav 320 — A place built to serve you.  <br/>Don’t hesitate to reach out.
                </span>
            </div>
            </div>

            <div className="max-w-xl text-left">
            <div className="flex flex-col">
                <span className="text-slate-600 text-2xl">
                Current Location
                </span>

                <span className="text-4xl leading-tight">
                Lippo Village, Karawaci,
                Tangerang, Banten, Indonesia
                </span>
            </div>
            </div>

        </div>

        {/* Logo */}
        <div className="absolute bottom-30 left-8">
            <img
            src="/logo/kav.png"
            alt="KAV logo"
            className="h-20"
            />
        </div>
        <div className="absolute w-full flex justify-center items-center bottom-10">
            <h1>2027 © Develop by Benaya Joshua, halobenaya.com</h1>
        </div>

    </section>
  );
}