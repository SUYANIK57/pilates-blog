"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0c0e] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base font-extrabold text-white tracking-wider">
              KINETIC <span className="text-orange-500">PILATES</span>
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-bold">
              v1.0
            </span>
          </div>
          <p className="text-neutral-500 text-xs max-w-md leading-relaxed">
            {t.footer.note}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-neutral-500 text-xs gap-1.5">
          <div className="flex items-center gap-1.5">
            <span>Next.js • React • Vercel</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-orange-400">
              <Sparkles className="w-3 h-3" /> Ders 1 Projesi
            </span>
          </div>
          <p>© {new Date().getFullYear()} Kinetic Pilates. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
