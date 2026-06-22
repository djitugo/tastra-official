"use client";

import { useState, FormEvent } from "react";
import { StyledSelect, type SelectTheme } from "@/components/shared/styled-select";

const CREAM = "#f7f1e6";
const INK = "#2a1f17";
const OCHRE = "#b8956a";

const SELECT_THEME: SelectTheme = {
  bg: CREAM,
  fg: INK,
  panelBg: CREAM,
  border: INK,
  accent: OCHRE,
  radius: 0,
  mono: true,
};

const TOPICS = ["Product question", "Order help", "Partnership", "Press", "Other"];

export default function Design6Contact() {
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
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: OCHRE }}>
            ⸻ A Word, If You Wish
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl leading-[1.05]">
            Write <span className="italic" style={{ color: OCHRE }}>to us.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.9]" style={{ color: `${INK}B3` }}>
            A question on a formulation, a partnership, or simply your own
            ritual. We read everything that arrives, and reply in good time.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-[1fr_360px] gap-16">
          {sent ? (
            <div className="border-t pt-10" style={{ borderColor: `${INK}33` }}>
              <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: OCHRE }}>
                ⸻ Received
              </p>
              <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl leading-[1.2]">
                Your letter is <span className="italic" style={{ color: OCHRE }}>with us.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-[1.9] max-w-md" style={{ color: `${INK}B3` }}>
                Thank you for writing. We reply within two working days, and
                often sooner.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <label className="block">
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase block mb-3" style={{ color: OCHRE }}>Topic</span>
                <StyledSelect options={TOPICS} value={topic} onChange={setTopic} theme={SELECT_THEME} name="topic" ariaLabel="Topic" />
              </label>
              <label className="block">
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase block mb-3" style={{ color: OCHRE }}>Message <span aria-hidden>*</span></span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-transparent border px-4 py-3 text-[15px] leading-[1.8] outline-none focus:border-[#b8956a]"
                  style={{ borderColor: INK }}
                />
              </label>
              <button
                type="submit"
                disabled={busy}
                className="min-h-11 px-10 py-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50"
                style={{ background: INK, color: CREAM }}
              >
                {busy ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}

          <aside className="space-y-10">
            <Info label="Customer Support" value="halo@tastraofficial.com" href="mailto:halo@tastraofficial.com" />
            <Info label="Instagram" value="@tastraofficial" href="https://instagram.com/tastraofficial" />
            <Info label="TikTok" value="@tastra_official" href="https://www.tiktok.com/@tastra_official" />
            <Info label="Hours" value="Monday to Friday, 9am to 5pm WIB" />
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase block mb-3" style={{ color: OCHRE }}>
        {label}{required && <span aria-hidden className="ml-1">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border px-4 py-3 text-[15px] outline-none focus:border-[#b8956a]"
        style={{ borderColor: INK, minHeight: 48 }}
      />
    </label>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="border-t pt-5" style={{ borderColor: `${INK}33` }}>
      <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: OCHRE }}>{label}</p>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-[family-name:var(--font-lora)] text-xl hover:opacity-60">
          {value}
        </a>
      ) : (
        <p className="font-[family-name:var(--font-lora)] text-xl">{value}</p>
      )}
    </div>
  );
}
