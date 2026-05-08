"use client"
import { useEffect, useState } from "react";
import { Questrial } from "next/font/google";

const quesFont = Questrial({ subsets: ["latin"], weight: "400" });

export default function MineLoker() {
  const [kertasOpen, setKertasOpen] = useState(false);
  const [startY, setStartY] = useState<number | null>(null);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  useEffect(() => {
    const syncViewport = () => setViewportWidth(window.innerWidth);

    syncViewport();
    window.addEventListener("resize", syncViewport);

    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  const isMobile = viewportWidth !== null && viewportWidth < 640;
  const isTablet = viewportWidth !== null && viewportWidth >= 640 && viewportWidth < 1024;

  const kertasLeft = kertasOpen ? (isMobile ? "5%" : isTablet ? "3%" : "4%") : "22%";
  const kertasRight = kertasOpen ? (isMobile ? "5%" : isTablet ? "3%" : "4%") : "22%";
  const kertasBottom = kertasOpen ? (isMobile ? "0%" : isTablet ? "0%" : "0%") : "0%";
  const kertasHeight = kertasOpen ? (isMobile ? "90%" : isTablet ? "90%" : "90%") : (isMobile ? "13%" : "15%");

  const handleSwipeStart = (e: React.TouchEvent | React.MouseEvent) => {
    const y = "touches" in e ? e.touches[0].clientY : e.clientY;
    setStartY(y);
  };

  const handleSwipeEnd = (e: React.TouchEvent | React.MouseEvent) => {
    const y = "changedTouches" in e ? e.changedTouches[0].clientY : e.clientY;
    if (startY === null) return;
    if (startY - y > 30) setKertasOpen(true);   // swipe up → buka
    if (y - startY > 30) setKertasOpen(false);  // swipe down → tutup
  };

  return (
    <div className={quesFont.className}>
      <div className="flex min-h-screen items-center justify-center bg-[#858585] px-4 py-6">
        
        {/* Loker frame */}
        <div className="relative aspect-[1.08/1] w-full max-w-105 overflow-hidden border-8 border-[#6b6b6b] bg-[#6b6b6b] sm:aspect-3/2 sm:max-w-700 sm:border-12 md:border-16 xl:h-200 xl:w-300 xl:max-w-none xl:border-20">

          {/* Back wall */}
          <div className="absolute bg-[#cecece]"
            style={{ top: "14%", left: "16%", right: "16%", bottom: "14%" }} />

          {/* Dinding atas */}
          <div className="absolute bg-[#b0b0b0]"
            style={{ top: 0, left: 0, right: 0, height: "14%",
              clipPath: "polygon(0% 0%, 100% 0%, 84% 100%, 16% 100%)" }} />

          {/* Dinding bawah */}
          <div className="absolute bg-[#9e9e9e]"
            style={{ bottom: 0, left: 0, right: 0, height: "14%",
              clipPath: "polygon(16% 0%, 84% 0%, 100% 100%, 0% 100%)" }} />

          {/* Dinding kiri */}
          <div className="absolute bg-[#a8a8a8]"
            style={{ top: 0, left: 0, bottom: 0, width: "16%",
              clipPath: "polygon(0% 0%, 100% 14%, 100% 86%, 0% 100%)" }} />

          {/* Dinding kanan */}
          <div className="absolute bg-[#c0c0c0]"
            style={{ top: 0, right: 0, bottom: 0, width: "16%",
              clipPath: "polygon(0% 14%, 100% 0%, 100% 100%, 0% 86%)" }} />

          {/* Label back wall */}
          <div className="absolute flex items-center justify-center"
            style={{ top: "14%", left: "16%", right: "16%", bottom: "14%" }}>
            <p className="text-[10px] tracking-[2px] text-[#a4a4a4] lowercase sm:text-[13px] sm:tracking-[4px]">
              properti kamar320
            </p>
          </div>

          {/* ===== KERTAS ===== */}
          {/* Kertas */}
          <div
            onClick={() => setKertasOpen(!kertasOpen)}
            onMouseDown={handleSwipeStart}
            onMouseUp={handleSwipeEnd}
            onTouchStart={handleSwipeStart}
            onTouchEnd={handleSwipeEnd}
            className="absolute z-10 overflow-hidden cursor-pointer select-none"
            style={{
              left: kertasLeft,
              right: kertasRight,
              bottom: kertasBottom,
              height: kertasHeight,
              background: "#f5f5f0",
              borderRadius: kertasOpen ? "10px 10px 4px 4px" : "4px 4px 2px 2px",
              boxShadow: kertasOpen
                ? "0 -8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)"
                : "0 -3px 12px rgba(0,0,0,0.13)",
              transform: kertasOpen ? "translateY(-1%) scaleX(1)" : "translateY(0) scaleX(1)",
              transition: "all 0.55s cubic-bezier(0.34,1.2,0.64,1)",
            }}
          >
            {/* Lipatan atas */}
            <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-lg"
              style={{ background: "linear-gradient(180deg, #e8e8e2 0%, #f5f5f0 100%)" }} />

            {/* Isi kertas saat terbuka */}
            {kertasOpen && (
              <div className="h-full overflow-y-auto box-border px-5 pb-14 pt-5 sm:px-7 sm:pb-16 sm:pt-6 md:px-10 md:pb-18 md:pt-8 lg:px-12 lg:pb-20 lg:pt-10">
                <div className="max-w-[30ch] sm:max-w-[34ch] md:max-w-[40ch]">
                  <p className="mb-3 text-[0.95rem] font-bold uppercase tracking-[3px] text-[#555] sm:text-lg md:text-2xl md:tracking-[6px] lg:text-[1.9rem]">untuk kamu</p>
                  <p className="mb-5 text-[10px] tracking-[1.6px] text-[#a0a0a0] sm:text-[11px] md:mb-5 md:text-xs">properti kamar320</p>
                  <p className="text-[12px] leading-[1.9] text-[#888] sm:text-[12px] md:text-[13px] lg:text-[15px] lg:leading-[1.9]">
                    Isi catatanmu di sini...<br />
                    Tulis apa saja yang ingin kamu simpan. <br/>
                    Isi catatanmu di sini...<br />
                    Tulis apa saja yang ingin kamu simpan. <br/>
                    Isi catatanmu di sini...<br />
                    Tulis apa saja yang ingin kamu simpan. <br/>
                    Isi catatanmu di sini...<br />
                    Tulis apa saja yang ingin kamu simpan. <br/>
                    Isi catatanmu di sini...<br />
                    Tulis apa saja yang ingin kamu simpan. <br/>
                    Isi catatanmu di sini...<br />
                    Tulis apa saja yang ingin kamu simpan. <br/>
                    Isi catatanmu di sini...<br />
                    Tulis apa saja yang ingin kamu simpan. <br/>

                  </p>
                </div>
              </div>
            )}

            {/* Tab hint tertutup */}
            {!kertasOpen && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] text-[#aaa] tracking-[2px] sm:text-[11px] sm:tracking-[3px]">↑ KERTAS</span>
              </div>
            )}

            {/* Hint tutup */}
            {kertasOpen && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center sm:bottom-3">
                <span className="text-[10px] text-[#bbb] tracking-[1.5px] sm:tracking-[2px]">↓ tutup</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
