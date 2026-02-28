import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";


const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minakshi Banerjee | Creative Portfolio",
  description:
    "Graphic Designer portfolio — branding, digital content, and visual communication by Minakshi Banerjee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} antialiased`}>
        <Preloader />
        <CustomCursor />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
