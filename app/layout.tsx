import type { Metadata } from "next";
import "./globals.css";
import { CelestialParticles } from "@/components/home/ButterflyParticles";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingMusicPlayer } from "@/components/music/FloatingMusicPlayer";
import { ButterflyCursor } from "@/components/layout/ButterflyCursor";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { PageTransition } from "@/components/motion/PageTransition";

export const metadata: Metadata = {
  title: "Winnie Lin | Portfolio",
  description: "Personal portfolio for Winnie Lin",
  openGraph: {
    title: "Winnie Lin | Portfolio",
    description: "A personal archive of software, AI projects, experiences, and life outside of tech.",
    url: "https://wiwiwashere.github.io/",
    siteName: "Winnie Lin",
    images: [
      {
        url: "https://wiwiwashere.github.io/home.png",
        width: 1200,
        height: 630,
        alt: "Winnie Lin Portfolio"
      }
    ],
    type: "website"
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;var k="winnie-home-entrance-seen";var h=window.location.pathname==="/";var s=window.sessionStorage.getItem(k)==="true";var m=!r&&h&&!s?"full":"settled";document.documentElement.dataset.homeEntrance=m;if(m==="full")window.sessionStorage.setItem(k,"true")}catch(e){document.documentElement.dataset.homeEntrance="full"}`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <MotionProvider>
          <div className="site-bg" aria-hidden="true" />
          <div className="global-butterfly global-celestial" aria-hidden="true">
            <div className="butterfly-field">
              <CelestialParticles />
            </div>
          </div>
          <Navbar />
          <FloatingMusicPlayer />
          <ButterflyCursor />
          <PageTransition />
          <main id="main-content" className="relative z-10 pt-24">{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
