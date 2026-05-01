"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

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
    <div>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-black/60">★ Contact</p>
          <h1 className="display text-6xl md:text-8xl mt-3">Sapa kami.</h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-black/70">
            Pertanyaan tentang produk, kerjasama, atau cuma mau cerita rutinitas
            skincare kamu — kami baca semua.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid lg:grid-cols-[1fr_400px] gap-10">
          {sent ? (
            <div className="border-2 border-black p-10 text-center">
              <p className="display text-3xl mb-3">✓ Terkirim.</p>
              <p className="text-black/70">
                Pesan kamu sudah masuk. Kami akan balas paling lambat 2x24 jam.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="border-2 border-black p-6 space-y-5">
              <Field label="Nama" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Subjek" name="subject" required />
              <label className="block">
                <span className="font-mono text-xs uppercase tracking-widest block mb-1">Pesan *</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full border-2 border-black bg-white px-3 py-3 text-base font-mono focus:outline-none focus:[box-shadow:4px_4px_0_0_#000]"
                />
              </label>
              <button type="submit" className="btn btn-invert" disabled={busy}>
                {busy ? "Mengirim..." : "Kirim pesan →"}
              </button>
              <p className="text-[11px] font-mono uppercase tracking-widest text-black/60">
                Demo lokal — belum terhubung ke email server.
              </p>
            </form>
          )}

          <aside className="space-y-6">
            <Info label="Customer support" value="halo@tastraofficial.com" />
            <Info label="Instagram" value="@tastraofficial" href="https://instagram.com/tastraofficial" />
            <Info label="TikTok" value="@tastra_official" href="https://www.tiktok.com/@tastra_official" />
            <Info label="Jam operasional" value="Senin–Jumat, 09.00–17.00 WIB" />
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest block mb-1">
        {label}
        {required && <span aria-hidden className="ml-1">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border-2 border-black bg-white px-3 py-3 text-base font-mono focus:outline-none focus:[box-shadow:4px_4px_0_0_#000]"
      />
    </label>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  const Body = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="display text-2xl hover:underline underline-offset-4"
    >
      {value}
    </a>
  ) : (
    <p className="display text-2xl">{value}</p>
  );
  return (
    <div className="border-2 border-black p-5">
      <p className="font-mono text-xs uppercase tracking-widest text-black/60 mb-2">{label}</p>
      {Body}
    </div>
  );
}
