const ITEMS = [
  "FREE ONGKIR SE-INDONESIA",
  "DISKON HINGGA 50%",
  "BAYAR DI TEMPAT TERSEDIA",
  "BAHAN ALAMI · FORMULA MODERN",
  "★",
];

export function Marquee() {
  const seq = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div
      className="bg-black text-white border-b-2 border-black overflow-hidden"
      role="region"
      aria-label="Site announcements"
    >
      <div className="marquee-track py-2 font-mono text-xs uppercase tracking-widest">
        {seq.map((t, i) => (
          <span key={i} className="px-6 whitespace-nowrap" aria-hidden={i >= ITEMS.length}>
            {t} <span className="px-3 opacity-50">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
