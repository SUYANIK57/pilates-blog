"use client";

import React, { useState, useMemo } from "react";
import { BLOG_POSTS } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";
import PostCard from "./PostCard";
import { Search, Sparkles, Filter } from "lucide-react";

export default function BlogFeed() {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    return [
      { key: "all", label: t.filters.all },
      { key: "guides", label: t.filters.guides },
      { key: "daily", label: t.filters.daily },
      { key: "philosophy", label: t.filters.philosophy },
      { key: "training", label: t.filters.training },
    ];
  }, [t]);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      // Filter by category
      let matchesCategory = true;
      if (selectedCategory === "guides") {
        matchesCategory = post.category.en.toLowerCase().includes("guide");
      } else if (selectedCategory === "daily") {
        matchesCategory = post.category.en.toLowerCase().includes("daily");
      } else if (selectedCategory === "philosophy") {
        matchesCategory = post.category.en.toLowerCase().includes("philosophy");
      } else if (selectedCategory === "training") {
        matchesCategory = post.category.en.toLowerCase().includes("training");
      }

      // Filter by search query
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        post.title[lang].toLowerCase().includes(query) ||
        post.excerpt[lang].toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  return (
    <section id="articles" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "tr" ? "Son Makaleler" : "Latest Articles"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === "tr" ? "Beden & Hareket Kütüphanesi" : "Mind & Movement Library"}
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-semibold mr-2 shrink-0">
          <Filter className="w-3.5 h-3.5" />
          <span>{lang === "tr" ? "Filtrele:" : "Filter:"}</span>
        </div>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                  : "bg-neutral-900/60 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl glass-panel">
          <p className="text-neutral-400 text-base">
            {lang === "tr"
              ? "Aramanıza uygun yazı bulunamadı."
              : "No articles found matching your search."}
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-orange-500/20 text-orange-400 text-xs font-bold hover:bg-orange-500/30 transition-colors"
          >
            {lang === "tr" ? "Filtreleri Sıfırla" : "Reset Filters"}
          </button>
        </div>
      )}
    </section>
  );
}
