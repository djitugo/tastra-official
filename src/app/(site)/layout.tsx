import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Marquee } from "@/components/site/marquee";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-black flex flex-col flex-1">
      <Marquee />
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
