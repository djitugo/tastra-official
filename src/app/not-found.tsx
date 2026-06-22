export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.4em] opacity-60">Error 404</p>
      <h1 className="mt-4 text-6xl sm:text-8xl font-black tracking-tighter">Not Found</h1>
      <p className="mt-4 text-sm opacity-60 max-w-sm">
        This page does not exist.
      </p>
    </main>
  );
}
