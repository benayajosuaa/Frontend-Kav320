import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Loader from "@/components/loader";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Kamar 320",
  description: "Creative digital space from Kamar320",
  icons: {
    icon: [
      {
        url: "/logo/webicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/logo/webicon.png",
    apple: "/logo/webicon.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "bg-white overflow-x-hidden"
        ].join(" ")}
      >
        <Loader>
          {children}
        </Loader>
      </body>
    </html>
  );
}
