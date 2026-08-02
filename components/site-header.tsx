"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["About", "Projects", "Services"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-paper">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 md:px-10 md:py-8">
        <a href="#top" className="relative z-30 leading-none" aria-label="Gulmohar Spaces home">
          <span className="display block text-2xl tracking-tight md:text-3xl">gulmohar</span>
          <span className="ml-[2px] block pt-1 text-[8px] font-bold uppercase tracking-[.35em]">spaces</span>
        </a>
        <nav className="hidden items-center gap-9 text-[10px] font-bold uppercase tracking-[.15em] md:flex" aria-label="Main navigation">
          {links.map((link) => <a key={link} className="transition-opacity hover:opacity-60" href={`#${link.toLowerCase()}`}>{link}</a>)}
          <a className="border-b border-paper pb-1 transition-opacity hover:opacity-60" href="#contact">Start a project</a>
        </nav>
        <button className="relative z-30 rounded-full p-2 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open && <div className="fixed inset-0 z-20 flex flex-col bg-ink px-6 pt-32 text-paper md:hidden">
        {links.map((link) => <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} className="display border-b border-white/15 py-5 text-4xl">{link}</a>)}
        <a onClick={() => setOpen(false)} href="#contact" className="mt-8 text-xs font-bold uppercase tracking-[.16em]">Start a project →</a>
      </div>}
    </header>
  );
}
