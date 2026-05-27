"use client";
import Link from "next/link";
import { Questrial } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";


const quesFont = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Service" },
  { href: "/contact", label: "Relation" },
] as const;

export type NavigationBarTheme = "light" | "dark";

type NavigationBarProps = {
  theme?: NavigationBarTheme;
};

export default function NavigationBar({theme = "light",}: NavigationBarProps) {
  const [isMenuOpen, setIsOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const isDark = theme === "dark";

  const desktopLogo = isDark
    ? "/logo/kamar320-putih.png"
    : "/logo/kamar320.png";

  const mobileLogo = isDark
    ? "/logo/kamar320-putih.png"
    : "/logo/kamar320.png";

  const textColorClass = isDark ? "text-white" : "text-[#1A1A1A]";
  const borderColorClass = isDark ? "border-white" : "border-[#5F2E6D]";
  const glassBackgroundClass = !isHydrated || isDark
    ? "bg-transparent"
    : "bg-white/65";
  const blurClass = !isHydrated || isDark ? "" : "backdrop-blur-md";
  const mobileSurfaceClass = !isHydrated || isDark
    ? "bg-transparent"
    : "bg-white/85 border-black/10";
  const mobileIconColorClass = isDark ? "text-white" : "text-[#5F2E6D]";
  const mobileMenuPanelClass = isDark
    ? "border-white/20 bg-[#5F2E6D] text-white"
    : "border-[#592f63] bg-white text-[#5F2E6D]";

  const navItemClass = [
    "flex h-11 items-center justify-center px-1 text-lg",
    "transition-all duration-500 ease-out",
    blurClass,
    textColorClass,
    borderColorClass,
    glassBackgroundClass,
  ].join(" ");

  return (
    <header
      className={[
        quesFont.className,
        "fixed top-0 left-0 z-50 w-full",
        "bg-transparent transition-all duration-100 ease-out",
      ].join(" ")}
    >
      <div className="hidden md:block">
        <div className="grid grid-cols-2 items-start px-15 pt-9">
          <div>
            <Link href="/">
              <img
                src={desktopLogo}
                alt="Kamar320 Logo"
                className="h-10 w-auto select-none transition-all duration-500 ease-out"
              />
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-4 auto-rows-[2.75rem]">
              {navItems.map((item, index) => {
                const borderClass =
                  index === 0
                    ? "border-l border-t border-b"
                    : index === navItems.length - 1
                      ? "border-t border-r border-b"
                      : "border";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${navItemClass} ${borderClass}`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div />
            </div>
          </div>
        </div>
      </div>
      

      {/* Mobile */}
      <div className="md:hidden">
        <div
          className={[
            "flex items-center justify-between px-5 pt-7 pb-2",
            "transition-all duration-500 ease-out",
            blurClass,
            mobileSurfaceClass,
          ].join(" ")}
        >
          <Link href="/">
            <img
              src={mobileLogo}
              alt="Kamar320 Logo"
              className="h-7 w-auto transition-all duration-500 ease-out"
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isMenuOpen)}
          >
            <span className={`text-2xl ${mobileIconColorClass}`}>
              {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </span>
          </button>
        </div>

        <div
          className={`
            overflow-hidden
            transition-all duration-300
            ${isMenuOpen ? "max-h-screen" : "max-h-0"}
            
          `}
        >
          <div className={`flex h-screen flex-col gap-2  pt-4 pl-5 pr-5 ${mobileMenuPanelClass}`}>
            {
              navItems.map((items) => (
                <Link
                  key={items.href}
                  href={items.href}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-2xl">
                      {items.label}
                    </span>
                    <span className="text-2xl">
                      <MdArrowOutward />
                    </span>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  );
}
