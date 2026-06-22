"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { getPost, POSTS } from "@/lib/blog";
import { PlaceholderGraphic } from "@/components/shared/placeholder-graphic";

const INK = "#2a1f17";
const OCHRE = "#b8956a";
const EASE = [0.22, 1, 0.36, 1] as const;

type Params = Promise<{ slug: string }>;

export default function Design6BlogPost({ params }: { params: Params }) {
  const { slug } = use(params);
  const post = getPost(slug);
  if (!post) return notFound();
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="w-full px-5 sm:px-8 lg:px-16 py-4 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-60">
          <div className="mx-auto max-w-3xl">
          <Link href="/design-6/blog" className="hover:opacity-100">Reading Room</Link>
          <span className="mx-3">⸻</span>
          <span style={{ color: INK }}>{post.category}</span>
          </div>
        </div>
      </section>

      <article className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="w-full px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="text-center">
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: OCHRE }}>
              {post.category} · {post.readMinutes} min read
            </p>
            <h1 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl leading-[1.2]">{post.title}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="relative aspect-[16/9] mt-12 overflow-hidden"
          >
            <PlaceholderGraphic bg="#ebe2cf" fg="#2a1f17" label={post.title} />
          </motion.div>

          <div className="mt-14 space-y-7 text-[17px] leading-[1.95]" style={{ color: `${INK}CC` }}>
            {post.body.map((para, i) => (
              <p key={i}>
                {i === 0 ? (
                  <>
                    <span className="float-left font-[family-name:var(--font-lora)] text-6xl leading-[0.8] mr-3 mt-1" style={{ color: OCHRE }}>
                      {para.charAt(0)}
                    </span>
                    {para.slice(1)}
                  </>
                ) : (
                  para
                )}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-6 border-t text-center font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase" style={{ borderColor: `${INK}33`, color: OCHRE }}>
            ⸻ Of Ingredient & Restraint ⸻
          </div>
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section>
          <div className="w-full px-5 sm:px-8 lg:px-16 py-20 md:py-24">
            <div className="mx-auto max-w-3xl">
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: OCHRE }}>
              ⸻ Continue Reading
            </p>
            <div className="grid sm:grid-cols-2 gap-10">
              {more.map((p) => (
                <Link key={p.slug} href={`/design-6/blog/${p.slug}`} className="group block border-t pt-6" style={{ borderColor: `${INK}33` }}>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: OCHRE }}>{p.category}</p>
                  <h3 className="font-[family-name:var(--font-lora)] text-xl leading-tight group-hover:opacity-70 transition-opacity">{p.title}</h3>
                </Link>
              ))}
            </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
