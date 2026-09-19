"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Activity,
  Award,
  Layers,
  MessageCircle,
} from "lucide-react";

interface GalleryItem {
  id: string;
  category: "cadillac" | "clinical";
  src: string;
  title: string;
  tag: string;
  desc: string;
  details?: string;
  isClinical?: boolean;
  aspect: string;
}

export default function ArchiveGallery() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "cadillac" | "clinical">("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const items: GalleryItem[] = [
    {
      id: "inversion",
      category: "cadillac",
      src: "/archive/archive-1-inversion.jpg",
      title: t.archive.items.inversion.title,
      tag: t.archive.items.inversion.tag,
      desc: t.archive.items.inversion.desc,
      aspect: "aspect-[3/4]",
    },
    {
      id: "cadillacExtension",
      category: "cadillac",
      src: "/archive/archive-2-cadillac-extension.jpg",
      title: t.archive.items.cadillacExtension.title,
      tag: t.archive.items.cadillacExtension.tag,
      desc: t.archive.items.cadillacExtension.desc,
      aspect: "aspect-[3/4]",
    },
    {
      id: "swissballBalance",
      category: "cadillac",
      src: "/archive/archive-3-swissball-balance.jpg",
      title: t.archive.items.swissballBalance.title,
      tag: t.archive.items.swissballBalance.tag,
      desc: t.archive.items.swissballBalance.desc,
      aspect: "aspect-[3/4]",
    },
    {
      id: "cadillacSplit",
      category: "cadillac",
      src: "/archive/archive-4-cadillac-split.jpg",
      title: t.archive.items.cadillacSplit.title,
      tag: t.archive.items.cadillacSplit.tag,
      desc: t.archive.items.cadillacSplit.desc,
      aspect: "aspect-[3/4]",
    },
    {
      id: "scoliosisTransformation",
      category: "clinical",
      src: "/archive/archive-5-scoliosis-transformation.jpg",
      title: t.archive.items.scoliosisTransformation.title,
      tag: t.archive.items.scoliosisTransformation.tag,
      desc: t.archive.items.scoliosisTransformation.desc,
      details: t.archive.items.scoliosisTransformation.details,
      isClinical: true,
      aspect: "aspect-[4/3] md:aspect-[16/10]",
    },
  ];

  const filteredItems = items.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => ((prev! + 1) % items.length));
  }, [selectedIndex, items.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => ((prev! - 1 + items.length) % items.length));
  }, [selectedIndex, items.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <section id="archive" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-widest text-orange-400 mb-4 shadow-sm">
          <Camera className="w-3.5 h-3.5" />
          <span>{t.archive.sectionBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          {t.archive.sectionTitle}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          {t.archive.sectionSubtitle}
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeFilter === "all"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white border border-white/10"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t.archive.filterAll}</span>
          </button>
          <button
            onClick={() => setActiveFilter("cadillac")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeFilter === "cadillac"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white border border-white/10"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.archive.filterCadillac}</span>
          </button>
          <button
            onClick={() => setActiveFilter("clinical")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeFilter === "clinical"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white border border-white/10"
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.archive.filterClinical}</span>
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch mb-12">
        {filteredItems.map((item) => {
          const originalIndex = items.findIndex((i) => i.id === item.id);
          const isWide = item.isClinical;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(originalIndex)}
              className={`group cursor-pointer rounded-3xl overflow-hidden glass-panel glass-panel-hover border border-white/10 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 ${
                isWide ? "lg:col-span-12 bg-gradient-to-br from-emerald-950/20 via-neutral-900/90 to-neutral-900/90 border-emerald-500/30 shadow-xl" : "lg:col-span-6"
              }`}
            >
              {/* Image Container with high-end framing and contrast enhancement */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-950/80 shadow-inner">
                <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center filter contrast-[1.08] saturate-[1.05] brightness-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md backdrop-blur-md ${
                        item.isClinical
                          ? "bg-emerald-500 text-white shadow-emerald-500/30"
                          : "bg-black/60 text-orange-400 border border-orange-500/30"
                      }`}
                    >
                      {item.isClinical && <Award className="w-3 h-3 inline mr-1" />}
                      {item.tag}
                    </span>
                  </div>

                  {/* Zoom hint on hover */}
                  <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 p-2.5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/40">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Before/After Overlay Marker for Clinical Item */}
                  {item.isClinical && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] sm:text-xs font-bold text-white px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                      <span className="flex items-center gap-1 text-rose-400">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        {t.archive.beforeLabel}
                      </span>
                      <span className="text-neutral-400 font-normal">➔ Klinik Pilates İle Düzleşme ➔</span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        {t.archive.afterLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Text Card Details */}
              <div className="pt-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                  {item.details && (
                    <div className="mt-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                      <strong>Not:</strong> {item.details}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span className="group-hover:text-orange-400 transition-colors flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{t.archive.clickToEnlarge}</span>
                  </span>
                  <span className="font-semibold text-[11px] text-orange-500">
                    Simge Bayraktar Pilates
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedItem && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label={t.archive.closeModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-50 shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label={t.archive.prev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-orange-500 text-white transition-all cursor-pointer z-50 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label={t.archive.next}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-orange-500 text-white transition-all cursor-pointer z-50 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enlarged Crisp Image */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black">
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                fill
                priority
                className="object-contain filter contrast-[1.08] saturate-[1.05] brightness-[1.02]"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full mt-4 p-5 rounded-2xl glass-panel border border-white/15 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-500 text-white uppercase tracking-wider">
                    {selectedItem.tag}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {selectedIndex + 1} / {items.length}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-white">
                  {selectedItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                  {selectedItem.desc}
                </p>
              </div>

              {/* Action Button: WhatsApp Booking */}
              <a
                href={`https://wa.me/905000000000?text=${encodeURIComponent(
                  `Merhaba Simge Hocam, Stüdyo Arşivinizde yer alan "${selectedItem.title}" çalışması hakkında bilgi ve randevu almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>{t.archive.ctaBook}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
