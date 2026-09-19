"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  Sparkles,
  Quote,
  Lightbulb,
} from "lucide-react";

export default function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    notFound();
  }

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Top Reading Progress Bar (Kinetic Orange) */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 z-[100] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-orange-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{t.backToArticles}</span>
          </Link>
        </div>

        {/* Post Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">
            {post.category[lang]}
          </span>
          <div className="flex items-center gap-1 text-neutral-400 text-xs">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>{post.readTime[lang]}</span>
          </div>
          <span className="text-neutral-600">•</span>
          <div className="flex items-center gap-1 text-neutral-400 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date[lang]}</span>
          </div>
        </div>

        {/* Big Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
          {post.title[lang]}
        </h1>

        {/* Visual Hero Banner with Emoji */}
        <div
          className={`w-full p-8 sm:p-14 rounded-3xl bg-gradient-to-br ${post.coverGradient} border border-orange-500/20 flex flex-col items-center justify-center text-center mb-12 shadow-xl`}
        >
          <span className="text-6xl sm:text-7xl mb-4 transform hover:scale-110 transition-transform">
            {post.coverEmoji}
          </span>
          <p className="text-neutral-300 max-w-xl text-base sm:text-lg italic leading-relaxed">
            "{post.excerpt[lang]}"
          </p>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-8 text-neutral-300 text-base sm:text-lg leading-relaxed">
          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl text-neutral-200 font-medium leading-relaxed border-l-4 border-orange-500 pl-5">
            {post.content[lang].intro}
          </p>

          {/* Sections */}
          {post.content[lang].sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {sec.heading}
              </h2>
              <p className="text-neutral-300">{sec.body}</p>

              {sec.tip && (
                <div className="p-4 sm:p-5 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-start gap-3 my-4">
                  <Lightbulb className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-orange-400 text-sm block mb-1">
                      {lang === "tr" ? "Eğitmen İpucu" : "Instructor's Cue"}
                    </span>
                    <span className="text-neutral-300 text-sm">{sec.tip}</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Quote */}
          <div className="my-10 p-6 sm:p-8 rounded-2xl glass-panel border border-orange-500/30 relative overflow-hidden">
            <Quote className="w-12 h-12 text-orange-500/20 absolute -top-2 -left-2" />
            <p className="relative z-10 text-xl font-bold text-white italic text-center">
              "{post.content[lang].quote}"
            </p>
          </div>
        </article>

        {/* Share Action */}
        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={handleShare}
            className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold border border-white/10 flex items-center gap-2 transition-all cursor-pointer hover:border-orange-500/50"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400">{t.copiedText}</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-neutral-400" />
                <span>{t.shareArticle}</span>
              </>
            )}
          </button>

          <Link
            href="/"
            className="text-sm font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
          >
            <span>{t.backToArticles}</span>
            <span>→</span>
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>
              {lang === "tr" ? "Diğer Akışlar" : "More Recommended Reads"}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherPosts.map((op) => (
              <Link
                key={op.id}
                href={`/post/${op.slug}`}
                className="glass-panel p-5 rounded-2xl glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl mb-2 block">{op.coverEmoji}</span>
                  <h4 className="font-bold text-white text-base hover:text-orange-400 transition-colors line-clamp-2">
                    {op.title[lang]}
                  </h4>
                </div>
                <div className="mt-4 text-xs text-neutral-400 flex items-center justify-between">
                  <span>{op.category[lang]}</span>
                  <span className="text-orange-400 font-bold">
                    {op.readTime[lang]}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
