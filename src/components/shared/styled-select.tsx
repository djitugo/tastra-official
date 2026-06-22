"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollLock } from "./scroll-context";

export type SelectTheme = {
  bg: string;
  fg: string;
  panelBg: string;
  border: string;
  accent: string;
  radius: number;
  mono?: boolean;
};

// A fully styled dropdown that replaces the native <select> so forms never
// fall back to the basic browser control. Opens on a click anywhere in the
// field, not just an icon. Keyboard and outside click aware.
export function StyledSelect({
  options,
  value,
  onChange,
  placeholder = "Select",
  theme,
  name,
  ariaLabel,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  theme: SelectTheme;
  name?: string;
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useScrollLock(open);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const font = theme.mono ? "var(--font-mono)" : "inherit";

  return (
    <div ref={ref} className="relative">
      {name && <input type="hidden" name={name} value={value} />}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        className="w-full flex items-center justify-between gap-2 px-3 text-left text-sm"
        style={{ background: theme.bg, color: theme.fg, border: `1px solid ${theme.border}`, borderRadius: theme.radius, minHeight: 48, fontFamily: font }}
      >
        <span className={value ? "" : "opacity-50"}>{value || placeholder}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 mt-2 z-50 overflow-hidden shadow-xl max-h-64 overflow-y-auto"
          style={{ background: theme.panelBg, color: theme.fg, border: `1px solid ${theme.border}`, borderRadius: theme.radius, fontFamily: font }}
        >
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <li key={opt}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 text-sm transition-colors hover:opacity-80"
                  style={{ borderBottom: `1px solid ${theme.border}`, background: selected ? theme.accent : "transparent", color: selected ? theme.panelBg : theme.fg }}
                >
                  {opt}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
