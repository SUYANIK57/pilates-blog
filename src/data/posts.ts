export interface BlogPost {
  id: string;
  slug: string;
  category: {
    tr: string;
    en: string;
  };
  date: {
    tr: string;
    en: string;
  };
  readTime: {
    tr: string;
    en: string;
  };
  title: {
    tr: string;
    en: string;
  };
  excerpt: {
    tr: string;
    en: string;
  };
  coverEmoji: string;
  coverGradient: string;
  content: {
    tr: {
      intro: string;
      sections: { heading: string; body: string; tip?: string }[];
      quote: string;
    };
    en: {
      intro: string;
      sections: { heading: string; body: string; tip?: string }[];
      quote: string;
    };
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "reformer-vs-mat-pilates",
    category: {
      tr: "Rehber & Karşılaştırma",
      en: "Guide & Comparison"
    },
    date: {
      tr: "18 Eylül 2026",
      en: "September 18, 2026"
    },
    readTime: {
      tr: "4 dk okuma",
      en: "4 min read"
    },
    coverEmoji: "⚡",
    coverGradient: "from-orange-500/20 via-orange-500/5 to-transparent",
    title: {
      tr: "Reformer vs. Mat Pilates: Bedeniniz İçin Hangisi Doğru Seçim?",
      en: "Reformer vs. Mat Pilates: Which Choice Fits Your Body Best?"
    },
    excerpt: {
      tr: "Makinelerin yay direnci mi, yoksa kendi vücut ağırlığınızın saf gücü mü? Her iki disiplinin farklarını ve bedeninize katacaklarını keşfedin.",
      en: "Spring resistance of the apparatus or the pure power of your own body weight? Discover the key differences and what each brings to your physique."
    },
    content: {
      tr: {
        intro: "Pilates dünyasına adım atarken herkesin kafasındaki ilk soru: 'Aletli (Reformer) mi yapmalıyım, yoksa Mat Pilates mi?' İkisi de Joseph Pilates'in temel prensiplerine dayansa da bedenle kurdukları diyalog çok farklıdır.",
        sections: [
          {
            heading: "1. Mat Pilates: Bedeninle Baş Başa Kalmak",
            body: "Mat pilates sadece bir mat ve yerçekimi ile yapılır. Yardımcı yaylar yoktur; bu nedenle tüm denge ve kontrolü kendi kaslarınızla sağlamanız gerekir. Özellikle derin karın kaslarını (core) çalıştırmada inanılmaz etkilidir.",
            tip: "Her yerde uygulanabilir olması en büyük özgürlüğüdür."
          },
          {
            heading: "2. Reformer Pilates: Yayların Büyülü Desteği ve Direnci",
            body: "Reformer, yaylar ve makaralar sistemiyle çalışır. Yaylar bazen hareketi kolaylaştırıcı bir destek sunarken, bazen de kaslarınızı maksimum eforla çalıştırmak için ek direnç sağlar. Eklemlere baskı yapmadan omurgayı uzatır.",
            tip: "Duruş bozuklukları (postür) ve skolyoz gibi durumlarda kontrollü hareket için idealdir."
          },
          {
            heading: "3. Karar Zamanı: Hangisine Başlamalısınız?",
            body: "Eğer daha önce hiç spor yapmadıysanız veya eklem hassasiyetiniz varsa Reformer'ın rehberliği harika bir başlangıçtır. Ancak saf güç, beden farkındalığı ve kendi ağırlığını taşımayı öğrenmek istiyorsanız ikisini harmanlamak en iyi sonucu verir."
          }
        ],
        quote: "Değişim hareketle başlar, süreklilikle kalıcı hale gelir."
      },
      en: {
        intro: "Stepping into Pilates, the first question on everyone's mind is: 'Should I do Reformer or Mat Pilates?' While both build on Joseph Pilates' foundational principles, the dialogue they establish with your body is unique.",
        sections: [
          {
            heading: "1. Mat Pilates: Intimacy With Your Body",
            body: "Mat pilates relies purely on a mat and gravity. No springs to guide you; your deep stabilizers must carry every millimeter of movement. It builds tremendous intrinsic core power.",
            tip: "The greatest freedom is being able to practice anywhere, anytime."
          },
          {
            heading: "2. Reformer Pilates: The Dynamic Support of Springs",
            body: "Reformer uses springs and pulleys. Sometimes they cradle and assist you; other times they push muscle endurance to its peak. It elongates the spine without compressing the joints.",
            tip: "Unbeatable for postural rehabilitation and safe, aligned movement."
          },
          {
            heading: "3. The Verdict: Where Should You Start?",
            body: "If you want guided alignment with zero joint stress, Reformer is a gentle entry. If you seek absolute mastery of your own bodyweight, combining both will unlock ultimate results."
          }
        ],
        quote: "Change happens through movement and movement heals."
      }
    }
  },
  {
    id: "2",
    slug: "masa-basi-calisanlar-icin-omurga-akisi",
    category: {
      tr: "Günlük Pratik",
      en: "Daily Practice"
    },
    date: {
      tr: "15 Eylül 2026",
      en: "September 15, 2026"
    },
    readTime: {
      tr: "3 dk okuma",
      en: "3 min read"
    },
    coverEmoji: "🌿",
    coverGradient: "from-amber-500/20 via-orange-500/5 to-transparent",
    title: {
      tr: "Masa Başı Çalışanlar İçin 5 Dakikalık Akıcı Omurga Rutini",
      en: "A 5-Minute Fluid Spine Flow for Desk Workers"
    },
    excerpt: {
      tr: "Saatlerce ekrana kilitlenmek omurganızı katılaştırır. Sandalyenizden kalkmadan yapabileceğiniz bu 4 kinetik hareketle enerjinizi tazeleyin.",
      en: "Hours locked in front of screens rigidify the spine. Refresh your vitality without even leaving your desk with these 4 kinetic micro-movements."
    },
    content: {
      tr: {
        intro: "Modern insanın en büyük sağlık sınavı: oturmak. Saatler geçtikçe omuzlar öne düşer, göğüs kafesi kapanır ve nefes sığlaşır. Joseph Pilates'in dediği gibi: 'Omurganız ne kadar esnekse, o kadar gençsiniz.'",
        sections: [
          {
            heading: "Adım 1: Otururken Kedi-İnek (Cat-Cow)",
            body: "Sandalyenizin ucuna gelin, ellerinizi dizlerinize koyun. Nefes alırken göğsünüzü tavana doğru açın (omurga yay gibi açılsın). Nefes verirken çeneyi göğse çekip sırtınızı geriye doğru yuvarlayın. 6 tekrar yapın.",
            tip: "Hareketi belden değil, göğüs kafesinizden başlatmaya özen gösterin."
          },
          {
            heading: "Adım 2: Yan Gövde Uzaması (Side Reach)",
            body: "Sağ kolunuzu tavana uzatın, sol elinizle sandalyenin kenarından tutun. Nefes vererek sol tarafa doğru hafifçe uzanın. Sağ kaburga aralıklarınızın açıldığını hissedin. 3 derin nefes kalın ve taraf değiştirin."
          },
          {
            heading: "Adım 3: Boyun ve Omuz Çözülüşü",
            body: "Omuzlarınızı kulaklarınıza doğru çekip nefes alın, nefes verirken aniden değil, süzülerek geriye ve aşağıya indirin. 5 tur dairesel akış yapın."
          }
        ],
        quote: "Bedeniniz sadece dinlenerek değil, doğru hareket ederek iyileşir."
      },
      en: {
        intro: "The grand test of modern life: prolonged sitting. Shoulders round forward, ribcages collapse, and breathing turns shallow. As Joseph Pilates stated: 'You are only as young as your spine is flexible.'",
        sections: [
          {
            heading: "Step 1: Seated Cat-Cow",
            body: "Slide to the chair edge, hands resting on knees. Inhale, open your heart toward the ceiling. Exhale, round your spine backward, drawing the chin to chest. Repeat 6 fluid times.",
            tip: "Initiate the movement from your thoracic spine, not your lower back."
          },
          {
            heading: "Step 2: Lateral Ribcage Stretch",
            body: "Reach your right arm skyward while anchoring left hand to chair base. Exhale and curve gently left, feeling space between every rib. Breathe deeply for 3 cycles and switch."
          },
          {
            heading: "Step 3: Shoulder Glide & Release",
            body: "Roll shoulders slowly upward to ears on inhalation, melt them down your back with a long exhalation. Perform 5 circular kinetic waves."
          }
        ],
        quote: "The spine thrives not in stillness, but in conscious, fluid movement."
      }
    }
  },
  {
    id: "3",
    slug: "pilatesin-kalbi-powerhouse-ve-nefes",
    category: {
      tr: "Beden Felsefesi",
      en: "Body Philosophy"
    },
    date: {
      tr: "10 Eylül 2026",
      en: "September 10, 2026"
    },
    readTime: {
      tr: "5 dk okuma",
      en: "5 min read"
    },
    coverEmoji: "🔥",
    coverGradient: "from-orange-600/20 via-orange-500/5 to-transparent",
    title: {
      tr: "Powerhouse Nedir? Pilatesin Gizli Güç Merkezini Keşfedin",
      en: "What is the Powerhouse? Unlocking Pilates' Hidden Engine"
    },
    excerpt: {
      tr: "Tüm hareketlerin merkez üssü: Göğüs kafesinin altından kalça kemiğine kadar uzanan o görünmez korse. Bedeninizi nasıl dönüştürdüğünü öğrenin.",
      en: "The epicenter of all motion: that invisible corset stretching from your lower ribs to your pelvic floor. Learn how it redefines strength."
    },
    content: {
      tr: {
        intro: "Pilates dersine ilk kez katılan herkes aynı kelimeyi duyar: 'Powerhouse'u aktive et!' Peki bu sihirli kelime tam olarak ne anlama geliyor ve sadece karın kaslarından ibaret mi?",
        sections: [
          {
            heading: "Powerhouse: Bedenin Enerji Kutusu",
            body: "Powerhouse; karın kasları (transversus abdominis), sırtın alt kasları, pelvik taban ve kalça kaslarının oluşturduğu dinamik bir silindirdir. Kollarınız veya bacaklarınız hareket etmeden önce güç bu merkezden doğar.",
            tip: "Gövdenizi sağlam bir kale gibi düşünün; kollar ve bacaklar bu kalenin hareketli köprüleridir."
          },
          {
            heading: "Neden Sadece Mekik Çekmek Yetmez?",
            body: "Geleneksel mekik sadece yüzeydeki 'six-pack' kaslarını kasar ve boynu yorar. Pilates ise iç organları saran en derin kas katmanını çalıştırarak beli inceltir ve dik duruşu kalıcı kılar."
          },
          {
            heading: "Lateral (Yan) Göğüs Nefesi",
            body: "Karnınızı şişirerek değil, kaburgalarınızı yanlara doğru bir akordeon gibi genişleterek nefes almayı öğrenirsiniz. Bu sayede derin merkez kaslarınız hareket boyunca gevşemeden çalışmaya devam eder."
          }
        ],
        quote: "Fiziksel zindelik, mutluluğun ilk ve en önemli ön koşuludur."
      },
      en: {
        intro: "Step into your first Pilates studio and you will immediately hear the cue: 'Activate your powerhouse!' But what does this magical engine truly mean, and is it just about abs?",
        sections: [
          {
            heading: "The Powerhouse: The Energy Box",
            body: "The powerhouse is a dynamic cylinder formed by the deep transversus abdominis, lower back stabilizers, pelvic floor, and gluteal complex. Every movement of the limbs originates from this center.",
            tip: "Think of your core as a fortified sanctuary; limbs are the expressive bridges."
          },
          {
            heading: "Why Traditional Crunches Fall Short",
            body: "Crunches primarily compress the superficial rectus abdominis while straining the neck. Pilates recruits the deep stabilizing corset, cinching the waistline and elevating spine posture."
          },
          {
            heading: "Lateral Ribcage Respiration",
            body: "Rather than distending the belly, breathe laterally into the side and back of your ribs like an accordion. This preserves inner abdominal tone throughout every movement sequence."
          }
        ],
        quote: "Physical fitness is the first requisite of happiness."
      }
    }
  },
  {
    id: "4",
    slug: "esneklik-ve-guc-dengesi",
    category: {
      tr: "Eğitim & Denge",
      en: "Training & Balance"
    },
    date: {
      tr: "05 Eylül 2026",
      en: "September 05, 2026"
    },
    readTime: {
      tr: "4 dk okuma",
      en: "4 min read"
    },
    coverEmoji: "✨",
    coverGradient: "from-orange-400/20 via-orange-500/5 to-transparent",
    title: {
      tr: "Esneklik mi, Güç mü? Pilates Neden İkisini Birleştirir?",
      en: "Flexibility or Strength? Why Pilates Refuses to Choose"
    },
    excerpt: {
      tr: "Sadece güçlü olmak bedeni sertleştirir; sadece esnek olmak eklemleri savunmasız bırakır. İkisinin kusursuz dengesini keşfedin.",
      en: "Pure strength makes the body rigid; pure flexibility leaves joints vulnerable. Discover the kinetic sweet spot where power meets grace."
    },
    content: {
      tr: {
        intro: "Spor dünyasında sıklıkla bir ikilem yaşanır: Ağırlık kaldırıp iri ve güçlü mü olmalıyız, yoksa sadece esneme yapıp esnek mi kalmalıyız? Pilates bu iki kutbu birleştiren köprüdür.",
        sections: [
          {
            heading: "Eksantrik Kasılma: Uzarken Güçlenmek",
            body: "Pilates kasları kısaltıp şişirerek değil, uzarken gerilim altında tutarak (eksantrik çalışma) güçlendirir. Bu sayede kaslar hem uzun, zarif ve esnek görünür hem de inanılmaz bir dayanıklılığa sahip olur.",
            tip: "Uzun ve güçlü kaslar günlük yaşamda sakatlanma riskini neredeyse sıfıra indirir."
          },
          {
            heading: "Zihin ve Beden Senfonisi: Kinetik Farkındalık",
            body: "Pilates yaparken dalgın olamazsınız; parmak ucunuzun hizasından başınızın tepesine kadar her hücrenizi dinlemeniz gerekir. Zihin bedene hükmettiğinde hareket bir sanata dönüşür."
          }
        ],
        quote: "Az hareketle doğru çalışmak, çok hareketle yanlış çalışmaktan bin kat daha iyidir."
      },
      en: {
        intro: "In fitness, there is often a false divide: Do we lift heavy to be strong, or do we stretch passively to be pliable? Pilates builds the bridge uniting both worlds.",
        sections: [
          {
            heading: "Eccentric Loading: Strength in Elongation",
            body: "Pilates conditions muscles under tension while they lengthen rather than just shorten. This results in sleek, sculpted, and deeply resilient muscular architecture.",
            tip: "Elongated, toned muscles drop injury risk to near zero in everyday life."
          },
          {
            heading: "Kinetic Awareness: Mind Orchestrating Muscle",
            body: "You cannot be absent-minded during Pilates. Every breath, toe alignment, and pelvic position requires presence. When mind governs movement, exercise turns into art."
          }
        ],
        quote: "A few well-designed movements properly performed will outvalue hours of calisthenics."
      }
    }
  }
];
