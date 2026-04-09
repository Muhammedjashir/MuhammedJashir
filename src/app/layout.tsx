import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MuhammedJashir",
  description: "A high-end scrollytelling portfolio built with Next.js and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased no-scrollbar">
      <body className={`${inter.className} min-h-full flex flex-col bg-[#121212]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
