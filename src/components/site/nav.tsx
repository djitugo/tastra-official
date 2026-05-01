"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { useState } from "react";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const { count, ready } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="display text-2xl sm:text-3xl tracking-tighter"
          aria-label="Tastra home"
        >
          TASTRA<span className="inline-block ml-1 w-2 h-2 bg-black align-middle" />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-sm uppercase tracking-widest hover:underline underline-offset-4"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className="btn btn-ghost relative !min-h-11 !px-4 !py-2 !text-xs"
            aria-label={`Cart, ${count} items`}
          >
            CART
            <span
              aria-hidden
              className="ml-1 inline-flex items-center justify-center min-w-[22px] h-[22px] px-1 rounded-full bg-black text-white text-[11px] font-bold leading-none"
            >
              {ready ? count : 0}
            </span>
          </Link>
          <button
            type="button"
            className="md:hidden btn btn-ghost !min-h-11 !px-3 !py-2"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-[2px] bg-black mb-1.5" />
            <span className="block w-5 h-[2px] bg-black mb-1.5" />
            <span className="block w-5 h-[2px] bg-black" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t-2 border-black bg-white"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-black/20 last:border-b-0">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-mono uppercase tracking-widest text-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
