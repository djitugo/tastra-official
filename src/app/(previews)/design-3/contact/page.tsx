"use client";

import { useState, FormEvent } from "react";
import { StyledSelect, type SelectTheme } from "@/components/shared/styled-select";

const PEACH_DEEP = "#ffe0d0";
const ROSE = "#f4a8a4";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";
const PEACH = "#fff5ee";

const SELECT_THEME: SelectTheme = {
  bg: "#ffffff",
  fg: INK,
  panelBg: "#ffffff",
  border: "#ffd9c7",
  accent: ROSE,
  radius: 16,
  mono: false,
};

const TOPICS = ["Product question", "Order help", "Partnership", "Press", "Other"];

function Sparkle({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

function MailIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

const fieldClass =
  "w-full rounded-2xl bg-white px-4 py-3 text-base outline-none";

export default function Design3Contact() {
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
      <section className="py-16 md:py-24">
        <div className="w-full max-w-3xl mx-auto px-5 sm:px-8 lg:px-16 text-center">
          <p className="text-sm font-bold mb-3 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}>
            <Sparkle size={14} /> Say hello <Sparkle size={14} />
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Let us <em className="italic" style={{ color: ROSE_DEEP }}>chat</em>
          </h1>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: `${INK}99` }}>
            Questions about products, partnerships, or just want to share your routine? We read everything.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
          {sent ? (
            <div className="rounded-3xl p-10 text-center flex flex-col items-center justify-center" style={{ background: "#fff" }}>
              <div className="mb-4" style={{ color: ROSE_DEEP }} aria-hidden><MailIcon size={48} /></div>
              <p className="text-2xl font-extrabold mb-2">Message sent!</p>
              <p style={{ color: `${INK}99` }}>Your message is in. We reply within 2 business days.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-3xl p-6 md:p-8 space-y-5" style={{ background: "#fff" }}>
              <label className="block">
                <span className="text-sm font-bold block mb-1.5">Name</span>
                <input name="name" required autoComplete="name" className={fieldClass} style={{ border: "2px solid #ffe0d0" }} />
              </label>
              <label className="block">
                <span className="text-sm font-bold block mb-1.5">Email</span>
                <input name="email" type="email" required autoComplete="email" className={fieldClass} style={{ border: "2px solid #ffe0d0" }} />
              </label>
              <label className="block">
                <span className="text-sm font-bold block mb-1.5">Topic</span>
                <StyledSelect options={TOPICS} value={topic} onChange={setTopic} theme={SELECT_THEME} name="topic" ariaLabel="Topic" />
              </label>
              <label className="block">
                <span className="text-sm font-bold block mb-1.5">Message</span>
                <textarea name="message" required rows={6} className={fieldClass} style={{ border: "2px solid #ffe0d0" }} />
              </label>
              <button
                type="submit"
                disabled={busy}
                className="rounded-full px-7 py-4 font-bold text-sm w-full sm:w-auto disabled:opacity-50 transition-transform hover:scale-[1.02]"
                style={{ background: INK, color: PEACH }}
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

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-lg font-extrabold hover:opacity-70" style={{ color: INK }}>
      {value}
    </a>
  ) : (
    <p className="text-lg font-extrabold">{value}</p>
  );
  return (
    <div className="rounded-3xl p-5" style={{ background: PEACH_DEEP }}>
      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: ROSE_DEEP }}>{label}</p>
      {body}
    </div>
  );
}
