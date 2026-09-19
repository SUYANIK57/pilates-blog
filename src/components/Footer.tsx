"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0c0e] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#faf7f2] border border-orange-500/30 flex items-center justify-center p-0.5 shadow-sm">
              <Image
                src="/logo.jpg"
                alt="Simge Bayraktar Pilates Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold text-white tracking-wider">
                SİMGE KARAHAN <span className="text-orange-500">BAYRAKTAR</span>
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-bold">
                Pilates Stüdyo
              </span>
            </div>
          </div>
          <p className="text-neutral-500 text-xs max-w-md leading-relaxed">
            {t.footer.note}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-neutral-500 text-xs">
          <p>© {new Date().getFullYear()} Kinetic Pilates. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
