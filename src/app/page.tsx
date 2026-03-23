import React from "react";
import HomePage from "./(public)/home/page"
import Footer from "../components/footer"


export default function Home() {
  return (
    <div className="relative">
      <div className="fixed w-full h-screen bottom-0 z-0">
        <Footer />
      </div>

      <div className="relative z-20 mb-[100vh] bg-amber-100">
        <div className="">
          <HomePage />
        </div>
      </div>
    </div>
  );
}
