"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 my-16">
      <div className="relative p-8 sm:p-12 rounded-3xl glass-panel border border-orange-500/30 overflow-hidden text-center">
        {/* Glow */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/20 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/30 mb-6">
            <Mail className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
            {t.newsletter.title}
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
            {t.newsletter.subtitle}
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-orange-500/15 border border-orange-500/40 text-orange-400 text-sm font-semibold">
              <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
              <span>{t.newsletter.success}</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                className="flex-1 px-4 py-3.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.newsletter.button}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
