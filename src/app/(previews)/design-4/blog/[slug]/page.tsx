"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { getPost, POSTS } from "@/lib/blog";
import { SmartImage } from "@/components/shared/smart-image";

const GREEN = "#2d5a3d";
const GREEN_LIGHT = "#e8efe8";
const GREEN_SOFT = "#f4f7f3";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";
const EASE = [0.22, 1, 0.36, 1] as const;

type Params = Promise<{ slug: string }>;

export default function Design4BlogPost({ params }: { params: Params }) {
  const { slug } = use(params);
  const post = getPost(slug);
  if (!post) return notFound();
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="border-b" style={{ borderColor: `${INK}1A`, background: CREAM }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-3 text-xs font-semibold" style={{ color: `${INK}99` }}>
          <Link href="/design-4/blog" className="hover:opacity-60">Blog</Link>
          <span className="mx-2">·</span>
          <span style={{ color: INK }}>{post.category}</span>
        </div>
      </section>

      <article style={{ background: CREAM }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: GREEN }}>{post.category} · {post.readMinutes} min read</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-3 leading-tight tracking-tight" style={{ color: INK }}>{post.title}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden mt-8"
            style={{ background: GREEN_LIGHT }}
          >
            <SmartImage src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </motion.div>
          <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: `${INK}CC` }}>
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </article>

      <section className="pb-16" style={{ background: CREAM }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold mb-6" style={{ color: INK }}>Keep reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/design-4/blog/${p.slug}`}
                className="block rounded-2xl p-5 transition-transform hover:-translate-y-1"
                style={{ background: GREEN_SOFT }}
              >
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: GREEN }}>{p.category}</p>
                <h3 className="text-lg font-extrabold mt-2 leading-tight" style={{ color: INK }}>{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
