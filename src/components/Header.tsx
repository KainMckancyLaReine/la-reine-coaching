"use client";
import { asset } from "@/lib/asset";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import {
  NAV_LINKS,
  NAV_PRIMARY_HREFS,
  NAV_MORE_LABEL,
  CALENDLY_URL,
  SOCIAL_LINKS,
} from "@/lib/nav";
import { Button } from "@/components/Button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/SocialIcons";

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
} as const;

const PRIMARY_LINKS = NAV_LINKS.filter((l) => NAV_PRIMARY_HREFS.includes(l.href));
const MORE_LINKS = NAV_LINKS.filter((l) => !NAV_PRIMARY_HREFS.includes(l.href));

export function Header() {
  const pathname = usePathname();
  const t = useT();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const moreRef = useRef<HTMLDivElement>(null);

  const moreActive = MORE_LINKS.some((l) => l.href === pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setMoreOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "border-line bg-cream/75 px-3 py-2 shadow-[0_10px_30px_-16px_rgba(43,38,32,0.25)] backdrop-blur-xl sm:px-4"
            : "border-transparent bg-cream/0 px-3 py-3 sm:px-4"
        }`}
      >
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <motion.span
            whileHover={{ rotate: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-100 ring-1 ring-inset ring-sage-300/50"
          >
            <Image
              src={asset("/images/lion-mark.png")}
              alt=""
              width={26}
              height={18}
              className="h-[18px] w-[26px] object-contain"
              priority
            />
          </motion.span>
          <span className="font-display leading-tight text-forest">
            <span className="block text-base tracking-tight sm:text-lg">
              La Reine
            </span>
            <span className="-mt-0.5 block text-[11px] italic tracking-[0.08em] text-gold-600">
              Coaching
            </span>
          </span>
        </Link>

        <nav
          className="hidden min-w-0 items-center gap-0.5 rounded-full border border-line/60 bg-paper/40 p-1 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {PRIMARY_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className={`relative whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                  active ? "text-forest" : "text-ink-soft hover:text-forest"
                }`}
              >
                <span className="relative z-10">{t(link.label)}</span>
                {(hovered === link.href || (!hovered && active)) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-sage-100"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}

          <div
            ref={moreRef}
            className="relative"
            onMouseEnter={() => setHovered("more")}
          >
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              className={`relative flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                moreActive || moreOpen
                  ? "text-forest"
                  : "text-ink-soft hover:text-forest"
              }`}
            >
              <span className="relative z-10">{t(NAV_MORE_LABEL)}</span>
              <motion.span
                animate={{ rotate: moreOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="relative z-10"
              >
                <ChevronDown size={13} />
              </motion.span>
              {(hovered === "more" || (!hovered && moreActive)) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-sage-100"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-[calc(100%+0.5rem)] min-w-[11rem] overflow-hidden rounded-2xl border border-line bg-paper/95 p-1.5 shadow-[0_20px_50px_-16px_rgba(43,38,32,0.3)] backdrop-blur-xl"
                >
                  {MORE_LINKS.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMoreOpen(false)}
                        className={`block whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                          active
                            ? "bg-sage-100 text-forest"
                            : "text-ink-soft hover:bg-sage-50 hover:text-forest"
                        }`}
                      >
                        {t(link.label)}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <LanguageToggle />
          <Button href={CALENDLY_URL} external variant="primary" size="sm">
            {t(COMMON.planFirstStep)}
            <ArrowUpRight size={14} />
          </Button>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 bg-paper/60 text-forest lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 overflow-hidden bg-cream/95 backdrop-blur-2xl lg:hidden"
          >
            <div
              aria-hidden
              className="absolute -top-24 right-[-15%] h-72 w-72 rounded-full bg-sage-200/50 blur-3xl animate-float"
            />
            <div
              aria-hidden
              className="absolute bottom-0 left-[-15%] h-72 w-72 rounded-full bg-gold-100/60 blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />

            <div className="relative flex h-full flex-col justify-center px-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8 flex items-center gap-2.5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-100 ring-1 ring-inset ring-sage-300/50">
                  <Image
                    src={asset("/images/lion-mark.png")}
                    alt=""
                    width={28}
                    height={20}
                    className="h-5 w-7 object-contain"
                  />
                </span>
                <span className="font-display text-lg text-forest">
                  La Reine <span className="italic text-gold-600">Coaching</span>
                </span>
              </motion.div>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="font-display block py-2.5 text-3xl text-ink transition-colors hover:text-forest"
                    >
                      {t(link.label)}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * NAV_LINKS.length, duration: 0.4 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Button href={CALENDLY_URL} external variant="primary">
                  {t(COMMON.planFirstStep)}
                </Button>
                <LanguageToggle />
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon =
                      SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
                    return (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-forest hover:text-forest"
                      >
                        <Icon width={15} height={15} />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
