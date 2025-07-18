import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/trpc";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Nexst App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} bg-background text-foreground font-base antialiased`}
      >
        <TRPCProvider>
            {children}
        </TRPCProvider>
      </body>
    </html>
  );
}
