"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { POSTS } from "@/lib/blog";
import { PlaceholderGraphic } from "@/components/shared/placeholder-graphic";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const INK = "#1a1a1a";
const GOLD = "#9a7b4f";
const CREAM_DEEP = "#ede5d3";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design2Blog() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      {/* HEADER */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
            The Journal
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl leading-[1.05]">
            Notes on the <em className="font-[family-name:var(--font-serif-alt)] font-light">ritual.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg leading-[1.7]" style={{ color: `${INK}B3` }}>
            Short reads on ingredients, routines, and skin in a tropical climate.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <Reveal>
            <Link href={`/design-2/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="relative aspect-[4/3] overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                <PlaceholderGraphic bg={CREAM_DEEP} fg={INK} label={featured.category} />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
                  {featured.category} · {featured.readMinutes} min read
                </p>
                <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl leading-[1.1]">{featured.title}</h2>
                <p className="mt-6 leading-[1.8]" style={{ color: `${INK}B3` }}>
                  {featured.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.3em] uppercase border-b pb-1" style={{ borderColor: INK }}>
                  Read the essay
                  <Arrow />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <RevealStagger stagger={0.12} className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {rest.map((post) => (
              <RevealItem key={post.slug} y={32}>
                <Link href={`/design-2/blog/${post.slug}`} className="group block">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="relative aspect-[16/10] mb-6 overflow-hidden"
                  >
                    <PlaceholderGraphic bg={CREAM_DEEP} fg={INK} label={post.category} />
                  </motion.div>
                  <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>
                    {post.category} · {post.readMinutes} min
                  </p>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl leading-[1.15]">{post.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8]" style={{ color: `${INK}99` }}>
                    {post.excerpt}
                  </p>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden>
      <path d="M5 12h13" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
