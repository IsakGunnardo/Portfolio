import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ArdoDev",
  description: "Isak Gunnardo - Portfolio",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` font-serif ${poppins.className} `}>

      <body>
        <Navbar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
