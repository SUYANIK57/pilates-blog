"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "tr" | "en";

interface Dictionary {
  brandName: string;
  brandTagline: string;
  nav: {
    home: string;
    articles: string;
    philosophy: string;
    testimonials: string;
    location: string;
    about: string;
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    exploreBtn: string;
    startFlowBtn: string;
  };
  stats: {
    stat1: string;
    stat1Sub: string;
    stat2: string;
    stat2Sub: string;
    stat3: string;
    stat3Sub: string;
  };
  filters: {
    all: string;
    guides: string;
    daily: string;
    philosophy: string;
    training: string;
  };
  searchPlaceholder: string;
  readMore: string;
  backToArticles: string;
  shareArticle: string;
  copiedText: string;
  keyTakeaways: string;
  testimonials: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
  };
  location: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    addressTitle: string;
    addressVal: string;
    transitTitle: string;
    transitDesc: string;
    hoursTitle: string;
    hoursDesc: string;
    getDirections: string;
    contactBtn: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    success: string;
  };
  footer: {
    note: string;
    rights: string;
  };
}

const DICTIONARY: Record<Language, Dictionary> = {
  tr: {
    brandName: "SİMGE KARAHAN BAYRAKTAR",
    brandTagline: "Pilates Stüdyosu • Beden & Zihin",
    nav: {
      home: "Ana Sayfa",
      articles: "Yazılar",
      philosophy: "Felsefe",
      testimonials: "Danışanlar",
      location: "Konum",
      about: "Hakkımızda",
    },
    hero: {
      badge: "SİMGE KARAHAN BAYRAKTAR • PILATES STUDYO",
      titlePrefix: "Daha güçlü daha dengeli bir sen için",
      titleHighlight: "buradayız 🧡",
      description:
        "Simge Karahan Bayraktar Pilates Stüdyosu'ndan derin güç, omurga sağlığı ve kinetik beden farkındalığı üzerine ilham veren rehberler.",
      exploreBtn: "Yazıları Keşfet",
      startFlowBtn: "Akışı Başlat",
    },
    stats: {
      stat1: "Powerhouse",
      stat1Sub: "Derin Merkez Kontrolü",
      stat2: "Kinetik Denge",
      stat2Sub: "Zihin & Beden Uyumu",
      stat3: "Omurga Akışı",
      stat3Sub: "Esneklik & Güç",
    },
    filters: {
      all: "Tüm Yazılar",
      guides: "Rehber & Karşılaştırma",
      daily: "Günlük Pratik",
      philosophy: "Beden Felsefesi",
      training: "Eğitim & Denge",
    },
    searchPlaceholder: "Yazılarda veya konularda ara...",
    readMore: "Yazıyı Oku",
    backToArticles: "Tüm Yazılara Dön",
    shareArticle: "Yazıyı Paylaş",
    copiedText: "Bağlantı kopyalandı!",
    keyTakeaways: "Önemli Çıkarımlar & İpuçları",
    testimonials: {
      sectionBadge: "DANIŞAN DENEYİMLERİ",
      sectionTitle: "Danışanlarımızın Gözünden Stüdyomuz",
      sectionSubtitle:
        "Bedenini keşfeden, omurga ağrılarından kurtulan ve gücüne kavuşan üyelerimizin gerçek yorumları.",
    },
    location: {
      sectionBadge: "STÜDYO KONUMU & ULAŞIM",
      sectionTitle: "Bize Kolayca Ulaşın",
      sectionSubtitle:
        "İstanbul'un kalbinde, ferah ve huzurlu bir stüdyo ortamında sizleri ağırlamaktan mutluluk duyuyoruz.",
      addressTitle: "Açık Adresimiz",
      addressVal: "Mecidiyeköy Mahallesi Şehit Ahmet Sokak No:100 Mecidiyeköy İş Merkezi, Şişli / İstanbul",
      transitTitle: "Toplu Taşıma Kolaylığı",
      transitDesc: "Mecidiyeköy Metrobüs durağına ve M2/M7 Metro hatlarına yalnızca 3 dakika yürüme mesafesinde.",
      hoursTitle: "Çalışma Saatleri",
      hoursDesc: "Pazartesi - Cumartesi: 07:30 - 21:00 (Pazar günleri randevu ile)",
      getDirections: "Google Haritalarda Aç",
      contactBtn: "WhatsApp İletişim Hattı",
    },
    newsletter: {
      title: "Haftalık Akış Bülteni",
      subtitle:
        "Bedeninizi masa başından kurtaracak mikro akışlar ve duruş rehberleri her pazartesi e-postanızda.",
      placeholder: "E-posta adresinizi yazın...",
      button: "Bültene Katıl",
      success: "Aramıza hoş geldiniz! İlk akış pazartesi sabahı kutunuzda.",
    },
    footer: {
      note: "Mecidiyeköy Mahallesi Şehit Ahmet Sokak No:100 Mecidiyeköy İş Merkezi",
      rights: "Tüm hakları saklıdır.",
    },
  },
  en: {
    brandName: "SİMGE KARAHAN BAYRAKTAR",
    brandTagline: "Pilates Studio • Body & Mind",
    nav: {
      home: "Home",
      articles: "Articles",
      philosophy: "Philosophy",
      testimonials: "Reviews",
      location: "Location",
      about: "About",
    },
    hero: {
      badge: "SİMGE KARAHAN BAYRAKTAR • PILATES STUDIO",
      titlePrefix: "For a stronger, more balanced you,",
      titleHighlight: "we are here 🧡",
      description:
        "Thoughtful guides from Simge Karahan Bayraktar Pilates Studio on core activation, spinal longevity, and kinetic movement.",
      exploreBtn: "Explore Articles",
      startFlowBtn: "Begin Flow",
    },
    stats: {
      stat1: "Powerhouse",
      stat1Sub: "Deep Core Mastery",
      stat2: "Kinetic Balance",
      stat2Sub: "Mind & Muscle Alignment",
      stat3: "Spinal Longevity",
      stat3Sub: "Fluid Elasticity",
    },
    filters: {
      all: "All Articles",
      guides: "Guide & Comparison",
      daily: "Daily Practice",
      philosophy: "Body Philosophy",
      training: "Training & Balance",
    },
    searchPlaceholder: "Search guides or exercises...",
    readMore: "Read Article",
    backToArticles: "Back to Articles",
    shareArticle: "Share Article",
    copiedText: "Link copied to clipboard!",
    keyTakeaways: "Key Movement Cues & Tips",
    testimonials: {
      sectionBadge: "CLIENT EXPERIENCES",
      sectionTitle: "Through Our Members' Words",
      sectionSubtitle:
        "Genuine feedback from clients revitalizing their posture and reclaiming their core power.",
    },
    location: {
      sectionBadge: "STUDIO LOCATION & ACCESS",
      sectionTitle: "Find Your Way To Us",
      sectionSubtitle:
        "Located in the heart of Istanbul, welcoming you in a serene, spacious, and dedicated studio atmosphere.",
      addressTitle: "Studio Address",
      addressVal: "Mecidiyeköy Mahallesi Şehit Ahmet Sokak No:100 Mecidiyeköy İş Merkezi, Şişli / Istanbul",
      transitTitle: "Transit Ease",
      transitDesc: "Only a 3-minute walking distance from Mecidiyeköy Metrobus stop and M2/M7 Metro lines.",
      hoursTitle: "Studio Hours",
      hoursDesc: "Monday - Saturday: 07:30 - 21:00 (Sundays by appointment)",
      getDirections: "Open in Google Maps",
      contactBtn: "WhatsApp Contact",
    },
    newsletter: {
      title: "Weekly Movement Dispatch",
      subtitle:
        "Micro-movements and posture resets to liberate your spine from sedentary work, every Monday.",
      placeholder: "Enter your email address...",
      button: "Join The Flow",
      success: "Welcome aboard! Your first movement sequence arrives Monday.",
    },
    footer: {
      note: "Mecidiyeköy Mahallesi Şehit Ahmet Sokak No:100 Mecidiyeköy İş Merkezi, Istanbul",
      rights: "All rights reserved.",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("pilates_lang") as Language;
    if (saved === "tr" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("pilates_lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: DICTIONARY[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
