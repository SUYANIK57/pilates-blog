"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Navigation, Clock, Train, Phone, ExternalLink } from "lucide-react";

export default function LocationMap() {
  const { lang, t } = useLanguage();

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Mecidiyek%C3%B6y+Mahallesi+%C5%9Eehit+Ahmet+Sokak+No:100+Mecidiyek%C3%B6y+%C4%B0%C5%9F+Merkezi+%C5%9Ei%C5%9Fli+%C4%B0stanbul";

  const mapEmbedSrc =
    "https://maps.google.com/maps?q=Mecidiyek%C3%B6y+Mahallesi+%C5%9Eehit+Ahmet+Sokak+No:100+Mecidiyek%C3%B6y+%C4%B0%C5%9F+Merkezi+%C5%9Ei%C5%9Fli+%C4%B0stanbul&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>{t.location.sectionBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          {t.location.sectionTitle}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          {t.location.sectionSubtitle}
        </p>
      </div>

      {/* Grid: Info Cards Left + Interactive Map Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Info Cards (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          {/* Address Card */}
          <div className="glass-panel p-6 rounded-3xl border border-orange-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/30 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1.5">
                  {t.location.addressTitle}
                </h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {t.location.addressVal}
                </p>
              </div>
            </div>
          </div>

          {/* Public Transit Card */}
          <div className="glass-panel p-6 rounded-3xl border border-white/5">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/30 shrink-0">
                <Train className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1.5">
                  {t.location.transitTitle}
                </h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {t.location.transitDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="glass-panel p-6 rounded-3xl border border-white/5">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/30 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1.5">
                  {t.location.hoursTitle}
                </h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {t.location.hoursDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 group"
            >
              <Navigation className="w-4 h-4 transition-transform group-hover:rotate-45" />
              <span>{t.location.getDirections}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 rounded-2xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-white/10 font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>{t.location.contactBtn}</span>
            </a>
          </div>
        </div>

        {/* Interactive Google Map (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border border-orange-500/30 shadow-2xl relative min-h-[380px] lg:min-h-full">
          <iframe
            title="Simge Bayraktar Pilates Stüdyo Konum"
            src={mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "380px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-3xl filter contrast-[1.05] opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
