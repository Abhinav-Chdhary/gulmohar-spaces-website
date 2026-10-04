"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "PROCESS", href: "#process" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Gulmohar Spaces home">
        <img src="/decorations/gulmohar-logo.svg" alt="" />
      </a>

      <img
        className="site-header__scribble"
        src="/decorations/header-scribble.svg"
        alt=""
        aria-hidden="true"
      />

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        <span />
        <span />
      </button>

      <nav id="main-navigation" className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
        <a className="site-nav__cta" href="mailto:hello@gulmoharspaces.com" onClick={() => setOpen(false)}>START A PROJECT</a>
      </nav>
    </header>
  );
}
