import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
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
  title: "Dreamlytix - You Dream, We Build",
  description: "Transforming your ideas into exceptional digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} 
          antialiased flex flex-col min-h-screen 
          overflow-x-hidden
        `}
      >
        {/* 🔥 Background shape spanning Header + Hero */}
        <div className="absolute top-0 right-0 -z-10 pointer-events-none">
          <img
            src="/hero-bg.svg"
            alt="background shape"
            // className="w-[900px] md:w-[1100px] h-auto translate-x-40 -translate-y-40"
          />
        </div>

        {/* 🔥 Content above background */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
