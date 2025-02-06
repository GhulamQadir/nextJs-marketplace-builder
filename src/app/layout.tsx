import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import CopyrightBarFoot from "@/components/CopyrightBarFoot";
import CartProvider from "@/provider";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
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
          {/* <header> */}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* </header> */}
          <CartProvider>
            <TopBar />
            <Navbar />
            {children}
            <Footer />
            <CopyrightBarFoot />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
