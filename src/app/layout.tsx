import type { Metadata } from "next";
import { Rajdhani, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Sharable/Navbar/Navbar";
import Footer from "@/Components/Sharable/Footer/Footer";
import ScrollToBottomToTop from "@/Utilits/ScrollToBottomToTop";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: "700",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "IT_Soluton",
  description: "A Page of it solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${rubik.variable} antialiased`}>
        <Navbar></Navbar>
        {children}

        <Footer></Footer>
        <ScrollToBottomToTop></ScrollToBottomToTop>
      </body>
    </html>
  );
}
