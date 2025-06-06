import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import CopyrightBarFoot from "@/components/CopyrightBarFoot";
import CartProvider from "@/provider";
import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {" "}
          <ClerkLoading>
            <div className="flex h-screen justify-center items-center text-2xl">
              Loading...
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <CartProvider>
              <TopBar />
              <Navbar />
              {children}
              <Footer />
              <CopyrightBarFoot />
            </CartProvider>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
