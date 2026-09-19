"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Star, MessageSquareQuote, CheckCircle2, Heart } from "lucide-react";

interface Review {
  id: string;
  name: string;
  role: {
    tr: string;
    en: string;
  };
  program: {
    tr: string;
    en: string;
  };
  rating: number;
  comment: {
    tr: string;
    en: string;
  };
  date: {
    tr: string;
    en: string;
  };
  avatarBg: string;
}

const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Zeynep T.",
    role: { tr: "Avukat", en: "Attorney" },
    program: { tr: "Birebir Reformer (3. Ay)", en: "1-on-1 Reformer (3rd Month)" },
    rating: 5,
    comment: {
      tr: "Masa başı çalışmaktan sırt ve bel ağrılarım dayanılmaz boyuttaydı. Simge Hoca ile 3. ayımı bitirdim, resmen duruşum değişti, boyum uzadı sanki :) Stüdyonun sakinliği ve Simge Hanım'ın dikkati inanılmaz.",
      en: "Desk job left me with intolerable back tension. Finishing my 3rd month with Simge, my posture transformed completely, feels like I grew taller :) Studio serenity and attention to form is unmatched."
    },
    date: { tr: "3 gün önce", en: "3 days ago" },
    avatarBg: "bg-orange-500/20 text-orange-500 border-orange-500/30"
  },
  {
    id: "2",
    name: "Mert K.",
    role: { tr: "Yazılımcı", en: "Software Dev" },
    program: { tr: "Aletli Pilates", en: "Reformer Pilates" },
    rating: 5,
    comment: {
      tr: "reformer e başlayalı 2 ay oldu gercekten bel agrım kalmadı diyebilirim stüdyonun enerjiside hocanın ilgiside harika",
      en: "been doing reformer for 2 months now my lower back pain is basically gone, the energy of the studio is great"
    },
    date: { tr: "1 hafta önce", en: "1 week ago" },
    avatarBg: "bg-amber-500/20 text-amber-500 border-amber-500/30"
  },
  {
    id: "3",
    name: "Buse A.",
    role: { tr: "İç Mimar", en: "Interior Architect" },
    program: { tr: "Düet Reformer (6. Ay)", en: "Duet Reformer (6th Month)" },
    rating: 5,
    comment: {
      tr: "Simge Hanım'ın her hareketteki ince anatomik yönlendirmeleri ve sabrı muazzam. Kendime haftada 2 saat ayırmak zihnime de bedenime de inanılmaz iyi geliyor. Kesinlikle Mecidiyeköy'ün en iyi stüdyosu.",
      en: "Simge's delicate anatomical cues and patience are immense. Dedicating 2 hours a week to myself heals both my mind and body. Definitely the top studio in Mecidiyeköy."
    },
    date: { tr: "2 hafta önce", en: "2 weeks ago" },
    avatarBg: "bg-orange-500/20 text-orange-500 border-orange-500/30"
  },
  {
    id: "4",
    name: "Canan D.",
    role: { tr: "Öğretmen", en: "Teacher" },
    program: { tr: "Omurga & Postür Programı", en: "Spine & Posture Program" },
    rating: 5,
    comment: {
      tr: "daha önce spor salonlarında denemiştim ama burası bambaşkaymış, simge hoca her birimizle tek tek ozenle ilgilenio çok memnunum <3",
      en: "tried big gyms before but this is on another level, teacher simge cares so much about every single detail <3"
    },
    date: { tr: "3 hafta önce", en: "3 weeks ago" },
    avatarBg: "bg-rose-500/20 text-rose-500 border-rose-500/30"
  },
  {
    id: "5",
    name: "Elif & Kerem S.",
    role: { tr: "Çift / Düet Dersi", en: "Duet Couple" },
    program: { tr: "Haftalık 2 Seans", en: "2 Sessions / Week" },
    rating: 5,
    comment: {
      tr: "Eşimle birlikte akşam saatlerinde derse katılıyoruz. Hem günün stresini atıyoruz hem de inanılmaz güçlendik. Herkese tüm kalbimizle tavsiye ediyoruz.",
      en: "We attend duet sessions together in the evenings. It melts away daily fatigue while building deep functional core power. Wholeheartedly recommended."
    },
    date: { tr: "1 ay önce", en: "1 month ago" },
    avatarBg: "bg-orange-500/20 text-orange-500 border-orange-500/30"
  }
];

export default function Testimonials() {
  const { lang, t } = useLanguage();

  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>{t.testimonials.sectionBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          {t.testimonials.sectionTitle}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          {t.testimonials.sectionSubtitle}
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS.map((review, idx) => (
          <div
            key={review.id}
            className={`group relative p-6 sm:p-7 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between ${
              idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div>
              {/* Top: Stars + Verified Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                  <CheckCircle2 className="w-3 h-3 text-orange-400" />
                  <span>{lang === "tr" ? "Doğrulanmış Danışan" : "Verified Client"}</span>
                </span>
              </div>

              {/* Comment text */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                "{review.comment[lang]}"
              </p>
            </div>

            {/* Bottom: Client Profile */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm ${review.avatarBg}`}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-orange-400 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-neutral-400 text-xs">
                    {review.program[lang]}
                  </p>
                </div>
              </div>

              <span className="text-[11px] text-neutral-500">
                {review.date[lang]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
