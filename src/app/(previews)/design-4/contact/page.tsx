"use client";

import { useState, FormEvent } from "react";
import { StyledSelect, type SelectTheme } from "@/components/shared/styled-select";

const GREEN = "#2d5a3d";
const GREEN_LIGHT = "#e8efe8";
const GREEN_SOFT = "#f4f7f3";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";

const SELECT_THEME: SelectTheme = {
  bg: "#ffffff",
  fg: INK,
  panelBg: "#ffffff",
  border: "#d6e0d6",
  accent: GREEN,
  radius: 12,
  mono: false,
};

const TOPICS = ["Product question", "Order help", "Partnership", "Press", "Other"];

function CheckIcon({ size = 26, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Design4Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [topic, setTopic] = useState("Product question");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setTimeout(() => {
      setSent(true);
      setBusy(false);
    }, 600);
  }

  return (
    <>
      <section className="py-20 md:py-28 border-b" style={{ background: GREEN_LIGHT, borderColor: `${INK}14` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>✦ Contact</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ color: INK }}>Say hello</h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: `${INK}99` }}>
            Questions about products, partnerships, or just want to share your routine. We read everything.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: CREAM }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">
          {sent ? (
            <div className="rounded-2xl p-10 text-center" style={{ background: GREEN_SOFT }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: GREEN, color: CREAM }}><CheckIcon /></div>
              <p className="text-2xl font-extrabold mb-3" style={{ color: INK }}>Message sent</p>
              <p style={{ color: `${INK}99` }}>Your message is in. We reply within 2 business days.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl p-6 md:p-8 space-y-5" style={{ background: GREEN_SOFT }}>
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: `${INK}99` }}>Topic</span>
                <StyledSelect options={TOPICS} value={topic} onChange={setTopic} theme={SELECT_THEME} name="topic" ariaLabel="Topic" />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: `${INK}99` }}>Message *</span>
                <textarea name="message" required rows={6} className="w-full rounded-xl border-2 bg-white px-4 py-3 text-base focus:outline-none" style={{ borderColor: "#d6e0d6", color: INK }} />
              </label>
              <button
                type="submit"
                disabled={busy}
                className="rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-[1.02] disabled:opacity-50"
                style={{ background: GREEN, color: CREAM }}
              >
                {busy ? "Sending..." : "Send message →"}
              </button>
            </form>
          )}

          <aside className="space-y-4">
            <Info label="Customer support" value="halo@tastraofficial.com" />
            <Info label="Instagram" value="@tastraofficial" href="https://instagram.com/tastraofficial" />
            <Info label="TikTok" value="@tastra_official" href="https://www.tiktok.com/@tastra_official" />
            <Info label="Hours" value="Mon to Fri, 9am to 5pm WIB" />
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: `${INK}99` }}>
        {label}{required && <span aria-hidden className="ml-1">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border-2 bg-white px-4 py-3 text-base focus:outline-none"
        style={{ borderColor: "#d6e0d6", color: INK }}
      />
    </label>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-lg font-extrabold hover:opacity-70" style={{ color: GREEN }}>{value}</a>
  ) : (
    <p className="text-lg font-extrabold" style={{ color: INK }}>{value}</p>
  );
  return (
    <div className="rounded-2xl p-5" style={{ background: GREEN_SOFT }}>
      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: `${INK}80` }}>{label}</p>
      {body}
    </div>
  );
}
