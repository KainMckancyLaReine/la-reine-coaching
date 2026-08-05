"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Taal / language"
      className={`relative flex h-8 w-[4.5rem] shrink-0 items-center rounded-full border border-line bg-paper/70 p-0.5 text-[11px] font-semibold ${className}`}
    >
      <motion.span
        layout
        transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
        className="absolute h-7 w-[2.125rem] rounded-full bg-forest"
        style={{ left: lang === "nl" ? 2 : "calc(50% - 1px)" }}
      />
      <button
        type="button"
        onClick={() => setLang("nl")}
        aria-pressed={lang === "nl"}
        className={`relative z-10 flex-1 py-1 text-center transition-colors ${
          lang === "nl" ? "text-cream" : "text-ink-soft"
        }`}
      >
        NL
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`relative z-10 flex-1 py-1 text-center transition-colors ${
          lang === "en" ? "text-cream" : "text-ink-soft"
        }`}
      >
        EN
      </button>
    </div>
  );
}
