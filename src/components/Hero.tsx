"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, Flame, Activity, ShieldCheck } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Kinetic Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-orange-500/15 blur-[120px] rounded-full pointer-events-none animate-glow-pulse" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Prominent High-Resolution Logo Showcase */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative p-3.5 sm:p-4 rounded-3xl bg-[#faf7f2] border-2 border-orange-500/40 shadow-2xl shadow-orange-500/15 hover:scale-[1.02] transition-all duration-300">
            <Image
              src="/logo.jpg"
              alt="Simge Bayraktar Pilates Stüdyo"
              width={260}
              height={155}
              className="w-48 sm:w-64 h-auto object-contain"
              priority
            />
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-orange-500 animate-ping opacity-75" />
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-orange-500 shadow-md" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-orange-500/30 text-xs font-semibold tracking-wider text-orange-400 mt-4 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>{t.hero.badge}</span>
          </div>
        </div>

        {/* Kinetic Main Typography - 5 satırlı turuncu ve 🧡 kalpli */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 drop-shadow-[0_4px_24px_rgba(255,107,0,0.3)] mb-6 leading-[1.14]">
          <span className="block">{t.hero.line1}</span>
          <span className="block">{t.hero.line2}</span>
          <span className="block">{t.hero.line3}</span>
          <span className="block">{t.hero.line4}</span>
          <span className="block">{t.hero.line5}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-10">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#articles"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <span>{t.hero.exploreBtn}</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-white/10 font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
          >
            {t.hero.startFlowBtn}
          </a>
        </div>

        {/* 3 Core Pillars / Kinetic Stats */}
        <div
          id="philosophy"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left"
        >
          <div className="glass-panel p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">{t.stats.stat1}</h4>
              <p className="text-neutral-400 text-xs mt-0.5">
                {t.stats.stat1Sub}
              </p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">{t.stats.stat2}</h4>
              <p className="text-neutral-400 text-xs mt-0.5">
                {t.stats.stat2Sub}
              </p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">{t.stats.stat3}</h4>
              <p className="text-neutral-400 text-xs mt-0.5">
                {t.stats.stat3Sub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
