"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "tr" | "en";

interface PackageDetails {
  name: string;
  sessions: string;
  price: string;
  priceNumber: string;
  unit: string;
  badge: string;
  desc: string;
  features: string[];
}

interface Dictionary {
  brandName: string;
  brandTagline: string;
  nav: {
    home: string;
    pricing: string;
    articles: string;
    philosophy: string;
    testimonials: string;
    location: string;
    about: string;
  };
  hero: {
    badge: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
    description: string;
    exploreBtn: string;
    startFlowBtn: string;
  };
  pricing: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    slogan: string;
    tabCards: string;
    tabTable: string;
    bookWhatsapp: string;
    sessionsSuffix: string;
    perPersonSuffix: string;
    tableHeaderProgram: string;
    tableHeaderPrice: string;
    tableSubnote: string;
    packages: {
      single: PackageDetails;
      duet: PackageDetails;
      trio: PackageDetails;
      quad: PackageDetails;
    };
    perksTitle: string;
    perk1Title: string;
    perk1Desc: string;
    perk2Title: string;
    perk2Desc: string;
    perk3Title: string;
    perk3Desc: string;
    perk4Title: string;
    perk4Desc: string;
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
      pricing: "Paketler",
      articles: "Yazılar",
      philosophy: "Felsefe",
      testimonials: "Danışanlar",
      location: "Konum",
      about: "Hakkımızda",
    },
    hero: {
      badge: "SİMGE KARAHAN BAYRAKTAR • PILATES STUDYO",
      line1: "Daha güçlü,",
      line2: "Daha esnek,",
      line3: "Daha dengeli",
      line4: "bir sen için",
      line5: "buradayız 🧡",
      description:
        "Simge Karahan Bayraktar Pilates Stüdyosu'ndan derin güç, omurga sağlığı ve kinetik beden farkındalığı üzerine ilham veren rehberler.",
      exploreBtn: "Yazıları Keşfet",
      startFlowBtn: "Paketler",
    },
    pricing: {
      sectionBadge: "SEANS PAKETLERİ & ÜCRETLER",
      sectionTitle: "Hedeflerinize Özel Seans Paketleri",
      sectionSubtitle:
        "Aletli Pilates (Reformer & Cadillac) donanımlı butik stüdyomuzda Simge Karahan Bayraktar eşliğinde bedenini yeniden inşa et.",
      slogan: "Daha Güçlü, Daha Dengeli Bir Sen İçin Buradayız 🧡",
      tabCards: "Kart Detayları",
      tabTable: "Resmi Seans Tablosu",
      bookWhatsapp: "WhatsApp ile Randevu Al",
      sessionsSuffix: "8 Seanslık Paket",
      perPersonSuffix: "8 Seans / Kişi Başı",
      tableHeaderProgram: "PROGRAM & SEANS BİLGİSİ",
      tableHeaderPrice: "PAKET ÜCRETİ",
      tableSubnote: "* Tüm seanslar 50 dakikadır. Paketler 1 ay içerisinde tamamlanacak şekilde planlanır.",
      packages: {
        single: {
          name: "BİREYSEL DERS",
          sessions: "8 SEANS",
          price: "8.500 ₺",
          priceNumber: "8.500",
          unit: "8 Seanslık VIP Paket",
          badge: "En Çok Tercih Edilen • VIP",
          desc: "Tamamen sizin anatomik yapınıza, postürünüze ve kişisel hedefinize özel hazırlanan birebir premium seanslar.",
          features: [
            "Birebir eğitmen ile 50 dk kesintisiz odak",
            "Kapsamlı postür & omurga hareket analizi",
            "Reformer, Cadillac, Chair tam ekipman",
            "Kişiye özel esnek gün ve saat takvimi",
            "Haftalık gelişim ve esneklik takibi",
          ],
        },
        duet: {
          name: "2 KİŞİLİK GRUP DERSİ",
          sessions: "8 SEANS (KİŞİ BAŞI)",
          price: "6.500 ₺",
          priceNumber: "6.500",
          unit: "8 Seans / Kişi Başı",
          badge: "Düet / Partnerli",
          desc: "Eşiniz, arkadaşınız veya spor partnerinizle birlikte katılabileceğiniz yüksek motivasyonlu düet reformer dersi.",
          features: [
            "2 kişilik özel butik sınıf ortamı",
            "Partnerle birlikte yüksek motivasyon",
            "Kişiye özel direnç yayı ayarları",
            "Reformer & Tower aletleriyle derin güçlenme",
            "Bireysel duruş ve nefes kontrolü",
          ],
        },
        trio: {
          name: "3 KİŞİLİK GRUP DERSİ",
          sessions: "8 SEANS (KİŞİ BAŞI)",
          price: "5.500 ₺",
          priceNumber: "5.500",
          unit: "8 Seans / Kişi Başı",
          badge: "Butik Trio",
          desc: "Samimi ve butik bir ortamda, kalabalıktan uzak 3 kişilik grup enerjisiyle hem sosyalleşin hem güçlenin.",
          features: [
            "Maksimum 3 kişilik butik grup kapasitesi",
            "Eğitmenin her üyeyle tek tek ilgilendiği kontrol",
            "Akıcı reformer koreografileri ve merkezleme",
            "Kondisyon, esneklik ve denge odaklı program",
            "Düzenli haftalık program disiplini",
          ],
        },
        quad: {
          name: "4 KİŞİLİK GRUP DERSİ",
          sessions: "8 SEANS (KİŞİ BAŞI)",
          price: "4.500 ₺",
          priceNumber: "4.500",
          unit: "8 Seans / Kişi Başı",
          badge: "Mini Grup",
          desc: "En avantajlı ücretle reformer pilates kalitesini yaşatan, dinamik ve ritmik küçük grup çalışması.",
          features: [
            "Maksimum 4 kişilik sınırlı kontenjan",
            "Yüksek tempolu, eğlenceli ve motive edici atmosfer",
            "Tüm vücut güçlendirici reformer serileri",
            "Omurga sağlığı ve sıkılaşma odağı",
            "Ekonomik ve sürdürülebilir pilates rutini",
          ],
        },
      },
      perksTitle: "Tüm Paketlerimizde Standart Ayrıcalıklar",
      perk1Title: "50 Dakika Tam Seans",
      perk1Desc: "Isınmadan esnemeye eksiksiz ve yüksek verimli akış.",
      perk2Title: "Ücretsiz Postür Analizi",
      perk2Desc: "İlk seans öncesi omurga ve kas dengesi tespiti.",
      perk3Title: "Hijyenik & Butik Ortam",
      perk3Desc: "Her dersten sonra dezenfekte edilen profesyonel aletler.",
      perk4Title: "Merkezi Kolay Ulaşım",
      perk4Desc: "Mecidiyeköy Metrobüs & Metro hatlarına 3 dk yürüyüş.",
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
      pricing: "Packages",
      articles: "Articles",
      philosophy: "Philosophy",
      testimonials: "Reviews",
      location: "Location",
      about: "About",
    },
    hero: {
      badge: "SİMGE KARAHAN BAYRAKTAR • PILATES STUDIO",
      line1: "Stronger,",
      line2: "More flexible,",
      line3: "More balanced,",
      line4: "for a vital you,",
      line5: "we are here 🧡",
      description:
        "Thoughtful guides from Simge Karahan Bayraktar Pilates Studio on core activation, spinal longevity, and kinetic movement.",
      exploreBtn: "Explore Articles",
      startFlowBtn: "Packages",
    },
    pricing: {
      sectionBadge: "SESSION PACKAGES & PRICING",
      sectionTitle: "Session Packages Tailored To Your Goals",
      sectionSubtitle:
        "Rebuild your posture and kinetic strength under the expert guidance of Simge Karahan Bayraktar in our fully-equipped boutique studio.",
      slogan: "Daha Güçlü, Daha Dengeli Bir Sen İçin Buradayız 🧡",
      tabCards: "Card Details",
      tabTable: "Official Price Table",
      bookWhatsapp: "Book via WhatsApp",
      sessionsSuffix: "8-Session Package",
      perPersonSuffix: "8 Sessions / Per Person",
      tableHeaderProgram: "PROGRAM & SESSION INFO",
      tableHeaderPrice: "PACKAGE FEE",
      tableSubnote: "* All sessions run for a full 50 minutes. Packages are designed to be completed within 1 month.",
      packages: {
        single: {
          name: "INDIVIDUAL PRIVATE",
          sessions: "8 SESSIONS",
          price: "8.500 ₺",
          priceNumber: "8.500",
          unit: "8 Sessions VIP Package",
          badge: "Most Popular • VIP",
          desc: "Bespoke 1-on-1 private sessions curated specifically for your anatomical posture and personal wellness goals.",
          features: [
            "Undivided 50-min attention from certified instructor",
            "Comprehensive posture & spinal movement assessment",
            "Full access to Reformer, Cadillac, and Chair",
            "Personalized flexible scheduling",
            "Weekly progression and mobility benchmarks",
          ],
        },
        duet: {
          name: "2-PERSON DUET CLASS",
          sessions: "8 SESSIONS (PER PERSON)",
          price: "6.500 ₺",
          priceNumber: "6.500",
          unit: "8 Sessions / Per Person",
          badge: "Duet / Partnered",
          desc: "Train alongside a friend, spouse, or partner with high motivation and semi-private individualized pacing.",
          features: [
            "Intimate 2-person boutique environment",
            "Mutual accountability and shared energy",
            "Custom resistance spring adjustments",
            "Reformer & Tower core conditioning",
            "Dedicated breath & alignment cues",
          ],
        },
        trio: {
          name: "3-PERSON GROUP CLASS",
          sessions: "8 SESSIONS (PER PERSON)",
          price: "5.500 ₺",
          priceNumber: "5.500",
          unit: "8 Sessions / Per Person",
          badge: "Boutique Trio",
          desc: "A boutique group setting that balances camaraderie with attentive, close supervision away from crowded gyms.",
          features: [
            "Capped at max 3 participants",
            "Instructor checks form and posture for every client",
            "Fluid reformer choreography and core stabilization",
            "Balanced strength, stamina, and mobility flow",
            "Consistent weekly routine and discipline",
          ],
        },
        quad: {
          name: "4-PERSON GROUP CLASS",
          sessions: "8 SESSIONS (PER PERSON)",
          price: "4.500 ₺",
          priceNumber: "4.500",
          unit: "8 Sessions / Per Person",
          badge: "Mini Group",
          desc: "The most economical route to premium reformer training with vibrant tempo and encouraging peer energy.",
          features: [
            "Limited to max 4 participants per session",
            "High tempo, engaging, and motivating vibe",
            "Full-body sculpting reformer sequences",
            "Spinal longevity and firming emphasis",
            "Sustainable, affordable pilates routine",
          ],
        },
      },
      perksTitle: "Included in Every Single Package",
      perk1Title: "Full 50-Minute Sessions",
      perk1Desc: "Complete warm-up to cool-down without cutting corners.",
      perk2Title: "Complimentary Posture Analysis",
      perk2Desc: "Assessment of spinal curvature and imbalances prior to start.",
      perk3Title: "Hygienic Boutique Setting",
      perk3Desc: "Hospital-grade equipment sanitized after every single class.",
      perk4Title: "Central Transit Accessibility",
      perk4Desc: "3-min walking distance to Mecidiyeköy Metrobus & Metro.",
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
