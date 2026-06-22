// A branded, intentional-looking graphic for sections that need imagery but
// have no real photo yet (about, editorial, testimonials). Not a "broken
// image" look. Themeable per design via bg/fg. Fills its (relative) parent.
export function PlaceholderGraphic({
  label,
  bg = "#efeae0",
  fg = "#1a1a1a",
  className = "",
}: {
  label?: string;
  bg?: string;
  fg?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: bg, color: fg }}
      role="img"
      aria-label={label ?? "Decorative graphic"}
    >
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g stroke="currentColor" fill="none" opacity="0.18">
          <circle cx="200" cy="200" r="60" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="110" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="160" strokeWidth="1.2" />
        </g>
        <path
          d="M60 300 C 140 250, 260 250, 340 300"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.2"
          opacity="0.25"
        />
        <path
          d="M200 120 C 230 160, 230 210, 200 250 C 170 210, 170 160, 200 120 Z"
          fill="currentColor"
          opacity="0.16"
        />
      </svg>
      {label && (
        <span
          className="relative font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] opacity-50"
        >
          {label}
        </span>
      )}
    </div>
  );
}
