"use client";

import Link from "next/link";
import { POSTS } from "@/lib/blog";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const BEIGE_SOFT = "#f7f2e8";

export default function Design5Blog() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      {/* HEADER */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Journal</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
            Notes on <span className="italic font-[family-name:var(--font-serif-alt)]">skin.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.8] opacity-70">
            Short reads on ingredients, routines, and skin in a tropical climate.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="border-b border-black/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
            <Reveal>
              <Link href={`/design-5/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: BEIGE_SOFT }}>
                  <SmartImage src={featured.cover} alt={featured.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50">{featured.category} · {featured.readMinutes} min read</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mt-5 leading-[1.1]">{featured.title}</h2>
                  <p className="mt-6 text-base leading-[1.8] opacity-70">{featured.excerpt}</p>
                  <span className="mt-8 inline-block text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 group-hover:opacity-60 transition-opacity">
                    Read the story
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* GRID */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
          <RevealStagger stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {rest.map((post) => (
              <RevealItem key={post.slug}>
                <Link href={`/design-5/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] mb-5 overflow-hidden" style={{ background: BEIGE_SOFT }}>
                    <SmartImage src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50">{post.category} · {post.readMinutes} min</p>
                  <h3 className="text-xl mt-3 leading-[1.2]">{post.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] opacity-70">{post.excerpt}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
