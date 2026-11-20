"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import siteContent from "@/content/site.json";

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

type PreviewContent = Record<string, Record<string, Bi>>;
type Preview = { lang: Lang; content: PreviewContent };

const contentKeys = new WeakMap<object, [string, string]>();
for (const [section, fields] of Object.entries(siteContent)) {
  for (const [key, text] of Object.entries(fields)) contentKeys.set(text, [section, key]);
}

type LanguageContextValue = {
  preview: PreviewContent | null;
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const siteLang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [preview, setPreview] = useState<Preview | null>(null);
  const lang = preview?.lang ?? siteLang;

  useEffect(() => {
    if (window.parent === window || new URLSearchParams(location.search).get("cms-preview") !== "1") return;
    function receive(event: MessageEvent) {
      if (event.origin !== location.origin || event.source !== window.parent) return;
      const data = event.data;
      if (data?.type !== "la-reine-preview" || (data.lang !== "nl" && data.lang !== "en") ||
          typeof data.content !== "object" || !data.content) return;
      setPreview({ lang: data.lang, content: data.content });
    }
    function blockNavigation(event: Event) {
      if (event.type === "submit" || (event.target instanceof Element && event.target.closest("a"))) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    window.addEventListener("message", receive);
    document.addEventListener("click", blockNavigation, true);
    document.addEventListener("submit", blockNavigation, true);
    window.parent.postMessage({ type: "la-reine-preview-ready" }, location.origin);
    return () => {
      window.removeEventListener("message", receive);
      document.removeEventListener("click", blockNavigation, true);
      document.removeEventListener("submit", blockNavigation, true);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Lang) {
    if (preview) setPreview({ ...preview, lang: next });
    else writeLang(next);
  }

  function toggleLang() {
    setLang(lang === "nl" ? "en" : "nl");
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, preview: preview?.content ?? null }}>
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
  const { lang, preview } = useLanguage();
  return function t<T = string>(bi: Bi<T>): T {
    const keys = preview && contentKeys.get(bi);
    const draft = keys && preview?.[keys[0]]?.[keys[1]]?.[lang];
    return typeof draft === "string" ? (draft as T) : bi[lang];
  };
}
