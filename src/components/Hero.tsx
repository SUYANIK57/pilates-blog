"use client";

import React from "react";
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
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/80 border border-orange-500/30 text-xs font-semibold tracking-wider text-orange-400 mb-8 shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          {t.hero.badge}
        </div>

        {/* Kinetic Main Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          {t.hero.titlePrefix} <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 drop-shadow-[0_4px_24px_rgba(255,107,0,0.3)]">
            {t.hero.titleHighlight}
          </span>
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
            href="#philosophy"
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
