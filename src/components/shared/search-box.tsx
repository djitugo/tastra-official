"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { searchProducts } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "./smart-image";
import { useScrollLock } from "./scroll-context";

export type SearchTheme = {
  /** Field background + text */
  fieldBg: string;
  fieldFg: string;
  /** Dropdown panel */
  panelBg: string;
  panelFg: string;
  muted: string;
  border: string;
  accent: string;
  radius: number;
  mono?: boolean;
  thumbBg: string;
};

export function SearchBox({
  design,
  theme,
  placeholder = "Search products",
  className = "",
}: {
  design: string;
  theme: SearchTheme;
  placeholder?: string;
  className?: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const results = query.trim() ? searchProducts(query) : [];

  useScrollLock(open && query.trim().length > 0);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const font = theme.mono ? "var(--font-mono)" : "inherit";

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <div
        className="flex items-center gap-2 px-3"
        style={{
          background: theme.fieldBg,
          color: theme.fieldFg,
          border: `1px solid ${theme.border}`,
          borderRadius: theme.radius,
          minHeight: 44,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          aria-label="Search products"
          className="flex-1 bg-transparent outline-none text-sm py-2 placeholder:opacity-50"
          style={{ fontFamily: font }}
        />
      </div>

      {open && query.trim() && (
        <div
          className="absolute left-0 right-0 mt-2 z-50 overflow-hidden shadow-xl max-h-[60vh] overflow-y-auto"
          style={{
            background: theme.panelBg,
            color: theme.panelFg,
            border: `1px solid ${theme.border}`,
            borderRadius: theme.radius,
            fontFamily: font,
          }}
          role="listbox"
        >
          {results.length === 0 ? (
            <p className="px-4 py-5 text-sm" style={{ color: theme.muted }}>
              No products match &ldquo;{query}&rdquo;.
            </p>
          ) : (
            <ul>
              {results.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${design}/shop/${p.slug}`}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                    }}
                    className="flex items-center gap-3 px-3 py-3 transition-colors hover:opacity-80"
                    style={{ borderBottom: `1px solid ${theme.border}` }}
                  >
                    <span className="relative w-12 h-12 flex-shrink-0 overflow-hidden" style={{ background: theme.thumbBg, borderRadius: Math.max(0, theme.radius - 4) }}>
                      <SmartImage src={p.images[0]} alt={p.name} fill sizes="48px" className="object-contain p-1" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold truncate">{p.name}</span>
                      <span className="block text-xs capitalize" style={{ color: theme.muted }}>{p.category}</span>
                    </span>
                    <span className="text-sm font-bold" style={{ color: theme.accent }}>{formatRupiah(p.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
