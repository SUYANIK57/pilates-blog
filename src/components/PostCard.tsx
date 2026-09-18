"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, ArrowUpRight, Calendar } from "lucide-react";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  const { lang, t } = useLanguage();

  return (
    <Link
      href={`/post/${post.slug}`}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl glass-panel glass-panel-hover overflow-hidden"
    >
      {/* Subtle dynamic background gradient based on card */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${post.coverGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Top bar: Category + Read Time */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">
            {post.category[lang]}
          </span>
          <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>{post.readTime[lang]}</span>
          </div>
        </div>

        {/* Big Emoji / Icon Visual with kinetic bounce on card hover */}
        <div className="text-4xl sm:text-5xl mb-5 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
          {post.coverEmoji}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-200 line-clamp-2 leading-snug">
          {post.title[lang]}
        </h3>

        {/* Excerpt */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt[lang]}
        </p>

        {/* Bottom bar: Date + Read Action */}
        <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-1.5 text-neutral-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date[lang]}</span>
          </div>

          <span className="inline-flex items-center gap-1 text-orange-400 group-hover:text-orange-300 font-bold group-hover:translate-x-0.5 transition-all">
            <span>{t.readMore}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
          </span>
        </div>
      </div>
    </Link>
  );
}
