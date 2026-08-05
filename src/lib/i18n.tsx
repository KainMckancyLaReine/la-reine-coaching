"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "nl" | "en";

export type Bi<T = string> = { nl: T; en: T };

const STORAGE_KEY = "lrc-lang";
const listeners = new Set<() => void>();
let cachedLang: Lang | null = null;

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "nl";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : "nl";
}

function getSnapshot(): Lang {
  if (cachedLang === null) {
    cachedLang = readStoredLang();
  }
  return cachedLang;
}

function getServerSnapshot(): Lang {
  return "nl";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function writeLang(next: Lang) {
  cachedLang = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((l) => l());
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Lang) {
    writeLang(next);
  }

  function toggleLang() {
    writeLang(lang === "nl" ? "en" : "nl");
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  const { lang } = useLanguage();
  return function t<T = string>(bi: Bi<T>): T {
    return bi[lang];
  };
}
