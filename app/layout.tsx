import type { Metadata } from "next";
import "./globals.css";
import { ButterflyParticles } from "@/components/home/ButterflyParticles";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Winnie Lin | Portfolio",
  description: "Personal portfolio for Winnie Lin"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="site-bg" aria-hidden="true" />
        <div className="global-butterfly" aria-hidden="true">
          <ButterflyParticles />
        </div>

        <Navbar />

        <main className="relative z-10 pt-24">{children}</main>
        
      </body>
    </html>
  );
}
