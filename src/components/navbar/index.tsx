"use client";

import Link from "next/link";
import { Questrial } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";

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
  const isDark = theme === "dark";

  const desktopLogo = isDark
    ? "/logo/kamar320-putih.png"
    : "/logo/kamar320.png";

  const mobileLogo = isDark
    ? "/logo/kamar320-putih.png"
    : "/logo/kamarlogo.png";

  const textColorClass = isDark ? "text-white" : "text-[#1A1A1A]";
  const borderColorClass = isDark ? "border-white" : "border-[#5F2E6D]";
  const glassBackgroundClass = isDark
    ? "bg-transparent"
    : "bg-white/65";
  const blurClass = isDark ? "" : "backdrop-blur-md";
  const mobileSurfaceClass = isDark
    ? "bg-black/30 border-white/20"
    : "bg-white/85 border-black/10";

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
        "transition-all duration-100 ease-out",
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

      <div className="md:hidden">
        <div
          className={[
            "flex items-center justify-between px-5 pt-3 pb-2",
            "border-b transition-all duration-500 ease-out",
            blurClass,
            mobileSurfaceClass,
          ].join(" ")}
        >
          <Link href="/">
            <img
              src={mobileLogo}
              alt="Kamar320 Logo"
              className="h-11 w-auto transition-all duration-500 ease-out"
            />
          </Link>

          <button
            type="button"
            aria-label="Open navigation menu"
            className={[
              "cursor-pointer text-2xl transition-all duration-500 ease-out",
              textColorClass,
            ].join(" ")}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
}
