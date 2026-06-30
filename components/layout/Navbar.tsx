import Link from "next/link";

export function Navbar() {
  return (
    <header className="site-poster-header fixed inset-x-0 top-0 z-50">
      <nav className="site-poster-nav" aria-label="Primary navigation">
        <Link className="home-wordmark" href="/">Winnie Lin</Link>

        <div className="home-nav-center">
          <Link href="/projects">projects</Link>
          <Link href="/experience">growth</Link>
          <Link href="/life">life</Link>
          <Link href="/contact">contact</Link>
        </div>

        <div className="home-nav-right">
          <Link href="/about">about</Link>
          <span aria-hidden="true">*</span>
          <Link href="/resume">resume</Link>
        </div>
      </nav>
    </header>
  );
}
