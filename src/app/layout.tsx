import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/providers/NextAuthProvider"; // আগে বানিয়েছিলাম
import Navbar from "@/components/shared/Navbar"; // এটা নিচে বানাচ্ছি
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amader Agro Farm | Fresh & Organic from Bangladesh",
  description: "Exporting premium organic mangoes, spices, and agricultural products from Bangladesh to the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <NextAuthProvider>
          {/* হেডার/ন্যাভবার সব পেজে থাকবে */}
          <Navbar /> 
          
          {/* মেইন কন্টেন্ট */}
          <main className="flex-grow">
            {children}
          </main>

          {/* ফুটার সব পেজে থাকবে */}
          <Footer />
          
          {/* নোটিফিকেশনের জন্য */}
          <Toaster /> 
        </NextAuthProvider>
      </body>
    </html>
  );
}