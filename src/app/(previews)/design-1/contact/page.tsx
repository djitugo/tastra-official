"use client";

import { useState, FormEvent } from "react";
import { StyledSelect, type SelectTheme } from "@/components/shared/styled-select";

const SELECT_THEME: SelectTheme = {
  bg: "#ffffff",
  fg: "#000000",
  panelBg: "#ffffff",
  border: "#000000",
  accent: "#000000",
  radius: 0,
  mono: true,
};

const TOPICS = ["Product question", "Order help", "Partnership", "Press", "Other"];

export default function Design1Contact() {
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
      <section className="border-b-2 border-black">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">★ Contact</p>
          <h1 className="font-[family-name:var(--font-display)] uppercase text-6xl md:text-8xl mt-3 tracking-tighter">Say hello.</h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-black/70">Questions about products, partnerships, or just want to share your routine. We read everything.</p>
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28 grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
          {sent ? (
            <div className="border-2 border-black p-10 text-center">
              <p className="font-[family-name:var(--font-display)] uppercase text-3xl mb-3 tracking-tight inline-flex items-center gap-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6 9 17l-5-5" /></svg>
                Sent.
              </p>
              <p className="text-black/70">Your message is in. We reply within 2 business days.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="border-2 border-black p-6 space-y-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <label className="block">
                <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest block mb-1">Topic</span>
                <StyledSelect options={TOPICS} value={topic} onChange={setTopic} theme={SELECT_THEME} name="topic" ariaLabel="Topic" />
              </label>
              <label className="block">
                <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest block mb-1">Message *</span>
                <textarea name="message" required rows={6} className="w-full border-2 border-black bg-white px-3 py-3 text-base font-[family-name:var(--font-mono)]" />
              </label>
              <button type="submit" className="btn btn-invert" disabled={busy}>{busy ? "Sending..." : "Send message →"}</button>
            </form>
          )}

          <aside className="space-y-6">
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
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest block mb-1">{label}{required && <span aria-hidden className="ml-1">*</span>}</span>
      <input name={name} type={type} required={required} className="w-full border-2 border-black bg-white px-3 py-3 text-base font-[family-name:var(--font-mono)]" />
    </label>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-display)] text-2xl hover:underline underline-offset-4">{value}</a>
  ) : (
    <p className="font-[family-name:var(--font-display)] text-2xl">{value}</p>
  );
  return (
    <div className="border-2 border-black p-5">
      <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60 mb-2">{label}</p>
      {body}
    </div>
  );
}
