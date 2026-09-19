"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0c0e] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column: Logo, Brand Name & Studio Address */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="p-2.5 rounded-2xl bg-[#faf7f2] border border-orange-500/40 w-44 sm:w-52 h-auto mb-4 flex items-center justify-center shadow-md">
            <Image
              src="/logo.jpg"
              alt="Simge Bayraktar Pilates Logo"
              width={208}
              height={124}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base font-extrabold text-white tracking-wider">
              SİMGE KARAHAN <span className="text-orange-500">BAYRAKTAR</span>
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-bold">
              Pilates Stüdyo
            </span>
          </div>
          <p className="text-neutral-400 text-xs max-w-md leading-relaxed">
            {t.footer.note}
          </p>
        </div>

        {/* Right Column: Copyright */}
        <div className="flex flex-col items-center md:items-end text-neutral-500 text-xs">
          <p>© {new Date().getFullYear()} Simge Karahan Bayraktar. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
