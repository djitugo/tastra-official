"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { getPost, POSTS } from "@/lib/blog";
import { SmartImage } from "@/components/shared/smart-image";

const EASE = [0.22, 1, 0.36, 1] as const;
type Params = Promise<{ slug: string }>;

export default function Design1BlogPost({ params }: { params: Params }) {
  const { slug } = use(params);
  const post = getPost(slug);
  if (!post) return notFound();
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">
          <Link href="/design-1/blog" className="hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{post.category}</span>
        </div>
      </section>

      <article className="border-b-2 border-black">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-widest text-black/50">{post.category} · {post.readMinutes} min read</p>
            <h1 className="font-[family-name:var(--font-display)] uppercase text-4xl md:text-6xl mt-3 tracking-tighter">{post.title}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="relative aspect-[16/9] border-2 border-black bg-white mt-8 overflow-hidden"
          >
            <SmartImage src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </motion.div>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-black/80">
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </article>

      <section>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl tracking-tight mb-6">Keep reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {more.map((p) => (
              <Link key={p.slug} href={`/design-1/blog/${p.slug}`} className="block border-2 border-black p-5 hover:[box-shadow:6px_6px_0_0_#000] transition-shadow">
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-widest text-black/50">{p.category}</p>
                <h3 className="font-[family-name:var(--font-display)] uppercase text-xl mt-2 tracking-tight">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
