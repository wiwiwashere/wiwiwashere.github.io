"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/projects", label: "projects" },
  { href: "/experience", label: "growth" },
  { href: "/life", label: "life" },
  { href: "/contact", label: "contact" },
  { href: "/about", label: "about" },
  { href: "/resume", label: "resume" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-poster-header fixed inset-x-0 top-0 z-50">
      <nav className="site-poster-nav" aria-label="Primary navigation">
        <Link className="home-wordmark" href="/" onClick={() => setIsOpen(false)}>Winnie Lin</Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-list"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "close" : "menu"}
        </button>

        <div className="home-nav-center desktop-nav-links">
          {navItems.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>

        <div className="home-nav-right desktop-nav-links">
          <Link href="/about">about</Link>
          <span aria-hidden="true">*</span>
          <Link href="/resume">resume</Link>
        </div>

        <div id="mobile-nav-list" className={`mobile-nav-list ${isOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
