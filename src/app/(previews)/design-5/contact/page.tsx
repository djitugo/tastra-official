"use client";

import { useState, FormEvent } from "react";
import { StyledSelect, type SelectTheme } from "@/components/shared/styled-select";

const INK = "#0a0a0a";

const SELECT_THEME: SelectTheme = {
  bg: "#ffffff",
  fg: "#0a0a0a",
  panelBg: "#ffffff",
  border: "rgba(10,10,10,0.15)",
  accent: "#0a0a0a",
  radius: 0,
  mono: false,
};

const TOPICS = ["Product question", "Order help", "Partnership", "Press", "Other"];

export default function Design5Contact() {
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
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Contact</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
            Say <span className="italic font-[family-name:var(--font-serif-alt)]">hello.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.8] opacity-70">
            Questions about products, partnerships, or just want to share your
            routine. We read everything.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20 grid lg:grid-cols-[1fr_360px] gap-16">
          {sent ? (
            <div className="border-t border-black/10 pt-12">
              <p className="text-3xl">
                Thank <span className="italic font-[family-name:var(--font-serif-alt)]">you.</span>
              </p>
              <p className="mt-4 text-sm leading-[1.9] opacity-70 max-w-md">
                Your message is in. We reply within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 block mb-3">Topic</span>
                <StyledSelect options={TOPICS} value={topic} onChange={setTopic} theme={SELECT_THEME} name="topic" ariaLabel="Topic" />
              </label>
              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 block mb-3">Message *</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-white border border-black/15 px-3 py-3 text-sm leading-relaxed outline-none focus:border-black transition-colors"
                />
              </label>
              <button
                type="submit"
                disabled={busy}
                className="min-h-11 px-10 py-4 text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black"
                style={{ background: INK, color: "#fff" }}
              >
                {busy ? "Sending..." : "Send message"}
              </button>
            </form>
          )}

          <aside className="lg:border-l lg:border-black/10 lg:pl-16 space-y-10">
            <Info label="Customer support" value="halo@tastraofficial.com" href="mailto:halo@tastraofficial.com" />
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
      <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 block mb-3">
        {label}{required && <span aria-hidden className="ml-1">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-white border border-black/15 px-3 py-3 text-sm outline-none focus:border-black transition-colors min-h-11"
      />
    </label>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-lg hover:opacity-60 transition-opacity">
      {value}
    </a>
  ) : (
    <p className="text-lg">{value}</p>
  );
  return (
    <div>
      <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2">{label}</p>
      {body}
    </div>
  );
}
