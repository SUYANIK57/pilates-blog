"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  Flame,
  Users,
  User,
  LayoutGrid,
  Table as TableIcon,
  MessageCircle,
} from "lucide-react";

export default function Pricing() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"cards" | "table">("cards");

  const packages = [
    {
      key: "single",
      data: t.pricing.packages.single,
      icon: User,
      popular: true,
      perPerson: false,
    },
    {
      key: "duet",
      data: t.pricing.packages.duet,
      icon: Users,
      popular: false,
      perPerson: true,
    },
    {
      key: "trio",
      data: t.pricing.packages.trio,
      icon: Users,
      popular: false,
      perPerson: true,
    },
    {
      key: "quad",
      data: t.pricing.packages.quad,
      icon: Users,
      popular: false,
      perPerson: true,
    },
  ];

  const getWhatsAppLink = (pkgName: string, price: string) => {
    const text =
      lang === "tr"
        ? `Merhaba Simge Hocam, ${pkgName} (${price}) seans paketi hakkında bilgi ve randevu almak istiyorum.`
        : `Hello Simge, I would like to inquire and book the ${pkgName} (${price}) session package.`;
    return `https://wa.me/905000000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-widest text-orange-400 mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.pricing.sectionBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          {t.pricing.sectionTitle}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          {t.pricing.sectionSubtitle}
        </p>

        {/* Interactive View Switcher: Cards vs Table */}
        <div className="flex items-center justify-center mt-8">
          <div className="inline-flex p-1 rounded-full bg-neutral-900/90 border border-white/10 shadow-inner">
            <button
              onClick={() => setActiveTab("cards")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === "cards"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>{t.pricing.tabCards}</span>
            </button>
            <button
              onClick={() => setActiveTab("table")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === "table"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <TableIcon className="w-4 h-4" />
              <span>{t.pricing.tabTable}</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: Modern Kinetic Cards Grid */}
      {activeTab === "cards" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12 animate-in fade-in duration-300">
          {packages.map(({ key, data, icon: Icon, popular, perPerson }) => (
            <div
              key={key}
              className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                popular
                  ? "pricing-popular-card bg-gradient-to-b from-orange-500/15 via-neutral-900/95 to-neutral-900/95 border-2 border-orange-500 shadow-2xl shadow-orange-500/20 lg:-translate-y-2"
                  : "glass-panel glass-panel-hover border border-white/10 hover:border-orange-500/40"
              }`}
            >
              {/* Popular Badge */}
              {popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] sm:text-[11px] font-black tracking-wider uppercase px-3.5 py-1 rounded-full shadow-lg shadow-orange-500/30 whitespace-nowrap flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-white" />
                  <span>{data.badge}</span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tracking-widest text-orange-400 uppercase">
                    {data.badge}
                  </span>
                  <div
                    className={`p-2 rounded-xl ${
                      popular
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-white/5 text-neutral-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight mb-1">
                  {data.name}
                </h3>
                <p className="text-xs font-semibold text-neutral-400 mb-4">
                  {data.sessions}
                </p>

                {/* Price Display */}
                <div className="pricing-price-box p-4 rounded-2xl bg-black/20 border border-white/5 mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-orange-500 tracking-tight">
                      {data.price}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-medium block mt-1">
                    {perPerson ? t.pricing.perPersonSuffix : t.pricing.sessionsSuffix}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-5 min-h-[48px]">
                  {data.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                  {data.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          popular ? "text-orange-400" : "text-emerald-400"
                        }`}
                      />
                      <span className="text-xs text-neutral-300 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppLink(data.name, data.price)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-2xl font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer ${
                  popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
                    : "bg-neutral-900/90 hover:bg-neutral-800 text-white border border-white/10 hover:border-orange-500/40"
                }`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>{t.pricing.bookWhatsapp}</span>
              </a>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 2: Official Studio Board Table (Mirrors physical studio poster) */}
      {activeTab === "table" && (
        <div className="max-w-2xl mx-auto mb-12 animate-in fade-in duration-300">
          <div className="pricing-table-card glass-panel p-6 sm:p-10 rounded-3xl border-2 border-orange-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#181a20]/90 to-[#0e1014]/90">
            {/* Top Logo & Title from Studio Flyer */}
            <div className="flex flex-col items-center justify-center text-center mb-8">
              <div className="relative p-2.5 rounded-2xl bg-[#faf7f2] border border-orange-500/30 shadow-md mb-3">
                <Image
                  src="/logo.jpg"
                  alt="Simge Bayraktar Pilates Logo"
                  width={130}
                  height={75}
                  className="w-28 sm:w-32 h-auto object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-black tracking-widest text-white uppercase">
                SİMGE BAYRAKTAR
              </h3>
              <p className="text-xs font-semibold text-orange-400 tracking-wider uppercase">
                PİLATES STÜDYO
              </p>
            </div>

            {/* Exact 2-Column Clean Table Layout */}
            <div className="pricing-table-inner rounded-2xl overflow-hidden border border-orange-500/30 bg-black/30 divide-y divide-orange-500/20 shadow-inner">
              {/* Table Header */}
              <div className="grid grid-cols-12 bg-orange-500/15 p-3.5 text-xs font-bold text-orange-400 uppercase tracking-wider">
                <div className="col-span-7 sm:col-span-8">
                  {t.pricing.tableHeaderProgram}
                </div>
                <div className="col-span-5 sm:col-span-4 text-right">
                  {t.pricing.tableHeaderPrice}
                </div>
              </div>

              {/* Row 1: Bireysel Ders 8 Seans (8500 TL) */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-white/5 transition-colors bg-orange-500/5">
                <div className="col-span-7 sm:col-span-8 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm sm:text-base text-white">
                      {t.pricing.packages.single.name}
                    </span>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-orange-500 text-white uppercase">
                      VIP
                    </span>
                  </div>
                  <span className="text-xs font-bold text-orange-400 block mt-0.5">
                    {t.pricing.packages.single.sessions}
                  </span>
                </div>
                <div className="col-span-5 sm:col-span-4 text-right">
                  <span className="text-xl sm:text-2xl font-black text-orange-400 tracking-tight">
                    {t.pricing.packages.single.price}
                  </span>
                </div>
              </div>

              {/* Row 2: 2 Kişilik Grup Dersi (6500 TL) */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-white/5 transition-colors">
                <div className="col-span-7 sm:col-span-8 pr-2">
                  <span className="font-bold text-sm sm:text-base text-white block">
                    {t.pricing.packages.duet.name}
                  </span>
                  <span className="text-xs text-neutral-400 block mt-0.5">
                    ({lang === "tr" ? "KİŞİ BAŞI" : "PER PERSON"}) • 8 SEANS
                  </span>
                </div>
                <div className="col-span-5 sm:col-span-4 text-right">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {t.pricing.packages.duet.price}
                  </span>
                </div>
              </div>

              {/* Row 3: 3 Kişilik Grup Dersi (5500 TL) */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-white/5 transition-colors">
                <div className="col-span-7 sm:col-span-8 pr-2">
                  <span className="font-bold text-sm sm:text-base text-white block">
                    {t.pricing.packages.trio.name}
                  </span>
                  <span className="text-xs text-neutral-400 block mt-0.5">
                    ({lang === "tr" ? "KİŞİ BAŞI" : "PER PERSON"}) • 8 SEANS
                  </span>
                </div>
                <div className="col-span-5 sm:col-span-4 text-right">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {t.pricing.packages.trio.price}
                  </span>
                </div>
              </div>

              {/* Row 4: 4 Kişilik Grup Dersi (4500 TL) */}
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-white/5 transition-colors">
                <div className="col-span-7 sm:col-span-8 pr-2">
                  <span className="font-bold text-sm sm:text-base text-white block">
                    {t.pricing.packages.quad.name}
                  </span>
                  <span className="text-xs text-neutral-400 block mt-0.5">
                    ({lang === "tr" ? "KİŞİ BAŞI" : "PER PERSON"}) • 8 SEANS
                  </span>
                </div>
                <div className="col-span-5 sm:col-span-4 text-right">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {t.pricing.packages.quad.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="text-[11px] text-neutral-400 text-center mt-4">
              {t.pricing.tableSubnote}
            </p>

            {/* Table Bottom Signature Slogan */}
            <div className="mt-8 text-center pt-6 border-t border-white/10">
              <p className="text-base sm:text-lg font-bold text-orange-400 italic">
                {t.pricing.slogan}
              </p>
            </div>

            {/* Table WhatsApp booking */}
            <div className="mt-6 flex justify-center">
              <a
                href={getWhatsAppLink("Seans Paketleri", "Stüdyo Fiyat Listesi")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>{t.pricing.bookWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Universal Studio Perks (Included in all packages) */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
        <h4 className="text-center text-xs font-extrabold uppercase tracking-widest text-orange-400 mb-6">
          {t.pricing.perksTitle}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-1">
                {t.pricing.perk1Title}
              </h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t.pricing.perk1Desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-1">
                {t.pricing.perk2Title}
              </h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t.pricing.perk2Desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-1">
                {t.pricing.perk3Title}
              </h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t.pricing.perk3Desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-1">
                {t.pricing.perk4Title}
              </h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t.pricing.perk4Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
