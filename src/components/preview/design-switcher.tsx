"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const DESIGNS = [
  { slug: "design-1", label: "Modern" },
  { slug: "design-2", label: "Elegant" },
  { slug: "design-3", label: "Soft" },
  { slug: "design-4", label: "Wardah" },
  { slug: "design-5", label: "Romelle" },
  { slug: "design-6", label: "Aesop" },
];

const LOADER_KEYS = DESIGNS.map((_, i) => `tastra-loader-${i + 1}-seen`);

export function DesignSwitcher() {
  const path = usePathname();
  const router = useRouter();
  const onPreview = path?.startsWith("/design-");
  if (!onPreview) return null;

  const replay = () => {
    LOADER_KEYS.forEach((k) => sessionStorage.removeItem(k));
    router.refresh();
    window.location.reload();
  };

  return (
    <div
      role="navigation"
      aria-label="Design previews"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] max-w-[calc(100vw-1rem)] bg-black text-white border-2 border-white rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.35)] p-1 flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest overflow-x-auto"
    >
      <span className="px-3 py-1 opacity-60 hidden md:inline shrink-0">Preview</span>
      {DESIGNS.map((d, i) => {
        const active = path === `/${d.slug}`;
        return (
          <Link
            key={d.slug}
            href={`/${d.slug}`}
            aria-current={active ? "page" : undefined}
            className={`min-h-[36px] px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors shrink-0 ${
              active ? "bg-white text-black" : "hover:bg-white/10"
            }`}
            title={d.label}
          >
            <span className="opacity-60">0{i + 1}</span>
            <span className="hidden sm:inline">{d.label}</span>
          </Link>
        );
      })}
      <button
        type="button"
        onClick={replay}
        title="Replay intro animations"
        aria-label="Replay loader animation"
        className="min-h-[36px] min-w-[36px] px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-white/10 transition-colors border-l border-white/20 ml-1 shrink-0"
      >
        <span aria-hidden>↻</span>
        <span className="hidden md:inline">Intro</span>
      </button>
    </div>
  );
}
