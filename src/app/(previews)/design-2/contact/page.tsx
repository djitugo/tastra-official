"use client";

import { useState, FormEvent } from "react";
import { StyledSelect, type SelectTheme } from "@/components/shared/styled-select";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";

const SELECT_THEME: SelectTheme = {
  bg: "#ffffff",
  fg: INK,
  panelBg: "#ffffff",
  border: INK,
  accent: GOLD,
  radius: 0,
  mono: false,
};

const TOPICS = ["Product question", "Order help", "Partnership", "Press", "Other"];

export default function Design2Contact() {
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
      {/* HEADER */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
            Contact
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl leading-[1.05]">
            Say <em className="font-[family-name:var(--font-serif-alt)] font-light">hello.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg leading-[1.7]" style={{ color: `${INK}B3` }}>
            Questions about products, partnerships, or simply your routine. We read everything.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28 grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24">
          {sent ? (
            <div className="border p-12 text-center self-start" style={{ borderColor: INK }}>
              <p className="font-[family-name:var(--font-serif)] text-3xl mb-3 flex items-center justify-center gap-3">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="square" aria-hidden>
                  <path d="m5 12 5 5L20 7" />
                </svg>
                <em className="font-[family-name:var(--font-serif-alt)] font-light">Sent.</em>
              </p>
              <p className="leading-[1.8]" style={{ color: `${INK}B3` }}>
                Your message is in. We reply within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <label className="block">
                <span className="text-[11px] tracking-[0.3em] uppercase block mb-3" style={{ color: `${INK}99` }}>
                  Topic
                </span>
                <StyledSelect options={TOPICS} value={topic} onChange={setTopic} theme={SELECT_THEME} name="topic" ariaLabel="Topic" />
              </label>
              <label className="block">
                <span className="text-[11px] tracking-[0.3em] uppercase block mb-3" style={{ color: `${INK}99` }}>
                  Message <span aria-hidden>*</span>
                </span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-white px-4 py-3 text-base leading-[1.7] outline-none"
                  style={{ border: `1px solid ${INK}`, color: INK }}
                />
              </label>
              <button
                type="submit"
                disabled={busy}
                className="inline-flex items-center gap-2 min-h-[48px] px-8 py-3 text-[12px] tracking-[0.3em] uppercase disabled:opacity-50"
                style={{ background: INK, color: CREAM }}
              >
                {busy ? "Sending..." : "Send message"}
                {!busy && <Arrow />}
              </button>
            </form>
          )}

          <aside className="space-y-8">
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
      <span className="text-[11px] tracking-[0.3em] uppercase block mb-3" style={{ color: `${INK}99` }}>
        {label}
        {required && (
          <span aria-hidden className="ml-1">
            *
          </span>
        )}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-white px-4 text-base outline-none"
        style={{ border: `1px solid ${INK}`, color: INK, minHeight: 48 }}
      />
    </label>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-serif)] text-2xl hover:opacity-60">
      {value}
    </a>
  ) : (
    <p className="font-[family-name:var(--font-serif)] text-2xl">{value}</p>
  );
  return (
    <div className="border-t pt-5" style={{ borderColor: `${INK}33` }}>
      <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>
        {label}
      </p>
      {body}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden>
      <path d="M5 12h13" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
