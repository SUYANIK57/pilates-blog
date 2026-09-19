"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0d0f12]/85 border-b border-white/5 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Logo with kinetic pulsing dot */}
        <Link href="/" className="group flex items-center gap-3 sm:gap-4">
          <div className="relative flex items-center justify-center h-14 sm:h-16 w-24 sm:w-28 rounded-2xl overflow-hidden bg-[#faf7f2] border border-orange-500/40 group-hover:border-orange-500 transition-all duration-300 shadow-md p-1 shrink-0">
            <Image
              src="/logo.jpg"
              alt="Simge Bayraktar Pilates Logo"
              width={140}
              height={85}
              className="w-full h-full object-contain"
              priority
            />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping opacity-75" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base md:text-lg font-black tracking-wider text-white flex items-center gap-1.5">
              SİMGE KARAHAN <span className="text-orange-500">BAYRAKTAR</span>
            </span>
            <span className="text-xs tracking-tight text-neutral-400 font-medium">
              {t.brandTagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <Link
            href="/"
            className="hover:text-orange-400 transition-colors py-1 relative group"
          >
            {t.nav.home}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <a
            href="#pricing"
            className="hover:text-orange-400 transition-colors py-1 relative group"
          >
            {t.nav.pricing}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#articles"
            className="hover:text-orange-400 transition-colors py-1 relative group"
          >
            {t.nav.articles}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#testimonials"
            className="hover:text-orange-400 transition-colors py-1 relative group"
          >
            {t.nav.testimonials}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#location"
            className="hover:text-orange-400 transition-colors py-1 relative group"
          >
            {t.nav.location}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Right side controls: Language switcher + Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dual Language Switcher */}
          <div className="flex items-center bg-neutral-900/90 p-1 rounded-full border border-white/10 shadow-inner">
            <button
              onClick={() => setLang("tr")}
              className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
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
              className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                lang === "en"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>🇬🇧</span>
              <span>EN</span>
            </button>
          </div>

          {/* Theme Toggle Button (Açık / Koyu Tema) */}
          <button
            onClick={toggleTheme}
            aria-label="Temayı Değiştir"
            className="p-2 sm:px-3 sm:py-2 rounded-full bg-neutral-900/90 border border-white/10 hover:border-orange-500/40 text-neutral-300 hover:text-white transition-all duration-200 flex items-center gap-1.5 shadow-inner cursor-pointer"
            title={theme === "dark" ? "Açık Temaya Geç" : "Koyu Temaya Geç"}
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden md:inline text-xs font-bold text-neutral-300">
                  {lang === "tr" ? "Açık" : "Light"}
                </span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-orange-500" />
                <span className="hidden md:inline text-xs font-bold text-neutral-700">
                  {lang === "tr" ? "Koyu" : "Dark"}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
