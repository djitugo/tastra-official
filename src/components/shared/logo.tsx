import Image from "next/image";

const RATIO = 766 / 196;

// The Tastra wordmark. Black artwork, so pass invert on dark backgrounds to
// render it white. height drives the rendered size (width is derived).
export function Logo({
  height = 30,
  invert = false,
  priority = false,
  className = "",
}: {
  height?: number;
  invert?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const width = Math.round(height * RATIO);
  return (
    <Image
      src="/brand/tastra-logo.png"
      alt="Tastra"
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={invert ? { filter: "invert(1)" } : undefined}
    />
  );
}
