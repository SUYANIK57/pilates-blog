"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0d0f12]/80 border-b border-white/5 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo with kinetic pulsing dot */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl overflow-hidden bg-[#faf7f2] border border-orange-500/30 group-hover:border-orange-500 transition-all duration-300 shadow-sm">
            <Image
              src="/logo.jpg"
              alt="Simge Bayraktar Pilates Logo"
              width={44}
              height={44}
              className="w-full h-full object-contain p-0.5"
            />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping opacity-75" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-wider text-white flex items-center gap-1.5">
              SİMGE KARAHAN <span className="text-orange-500">BAYRAKTAR</span>
            </span>
            <span className="text-xs tracking-tight text-neutral-400 font-medium">
              {t.brandTagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <Link
            href="/"
            className="hover:text-orange-400 transition-colors py-1 relative group"
          >
            {t.nav.home}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <a
            href="#articles"
            className="hover:text-orange-400 transition-colors py-1 relative group"
          >
            {t.nav.articles}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#philosophy"
            className="hover:text-orange-400 transition-colors py-1 relative group"
          >
            {t.nav.philosophy}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Right side controls: Language switcher + Lesson Badge */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Dual Language Switcher */}
          <div className="flex items-center bg-neutral-900/90 p-1 rounded-full border border-white/10 shadow-inner">
            <button
              onClick={() => setLang("tr")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                lang === "tr"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>🇹🇷</span>
              <span>TR</span>
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                lang === "en"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>🇬🇧</span>
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
