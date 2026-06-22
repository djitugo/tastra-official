"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { POSTS } from "@/lib/blog";
import { PlaceholderGraphic } from "@/components/shared/placeholder-graphic";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const PEACH_DEEP = "#ffe0d0";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";
const EASE = [0.22, 1, 0.36, 1] as const;

function Sparkle({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

export default function Design3Blog() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="w-full max-w-3xl mx-auto px-5 sm:px-8 lg:px-16 text-center">
          <p className="text-sm font-bold mb-3 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}>
            <Sparkle size={14} /> Journal <Sparkle size={14} />
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            The <em className="italic" style={{ color: ROSE_DEEP }}>blog</em>
          </h1>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: `${INK}99` }}>
            Short reads on ingredients, routines, and skin in a tropical climate.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="pb-6">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <Reveal>
            <Link
              href={`/design-3/blog/${featured.slug}`}
              className="group grid md:grid-cols-2 rounded-[36px] overflow-hidden transition-all hover:shadow-xl"
              style={{ background: "#fff" }}
            >
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                <PlaceholderGraphic bg={PEACH_DEEP} fg={INK} label={featured.category} />
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ROSE_DEEP }}>
                  {featured.category} · {featured.readMinutes} min read
                </p>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-3 leading-tight">{featured.title}</h2>
                <p className="mt-4 text-sm md:text-base" style={{ color: `${INK}99` }}>{featured.excerpt}</p>
                <span className="mt-6 text-sm font-bold inline-flex items-center gap-1.5" style={{ color: ROSE_DEEP }}>
                  Read more <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24 pt-6">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <RevealStagger stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <RevealItem key={post.slug}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: EASE }} className="h-full">
                  <Link
                    href={`/design-3/blog/${post.slug}`}
                    className="group block rounded-3xl overflow-hidden h-full transition-shadow hover:shadow-xl"
                    style={{ background: "#fff" }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <PlaceholderGraphic bg={PEACH_DEEP} fg={INK} label={post.category} />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ROSE_DEEP }}>
                        {post.category} · {post.readMinutes} min
                      </p>
                      <h3 className="text-xl font-extrabold tracking-tight mt-2">{post.title}</h3>
                      <p className="mt-3 text-sm line-clamp-2" style={{ color: `${INK}99` }}>{post.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
