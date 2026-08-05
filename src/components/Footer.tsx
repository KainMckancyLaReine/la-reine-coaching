"use client";
import { asset } from "@/lib/asset";

import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/SocialIcons";
import { NAV_LINKS, SOCIAL_LINKS, CALENDLY_URL, KM_DEV_URL } from "@/lib/nav";
import { Button } from "@/components/Button";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
} as const;

export function Footer() {
  const t = useT();

  return (
    <footer className="border-t border-line bg-sage-50">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 ring-1 ring-inset ring-sage-300/50">
                <Image
                  src={asset("/images/lion-mark.png")}
                  alt=""
                  width={28}
                  height={20}
                  className="h-5 w-7 object-contain"
                />
              </span>
              <p className="font-display text-2xl text-forest">
                La Reine <span className="text-gold-500 italic">Coaching</span>
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              {t(COMMON.footerTagline)}
            </p>
            <div className="mt-6">
              <Button href={CALENDLY_URL} external variant="ghost">
                {t(COMMON.planFirstStep)}
              </Button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
              {t(COMMON.navigation)}
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-forest"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
              {t(COMMON.followMe)}
            </p>
            <ul className="mt-4 space-y-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon =
                  SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-forest"
                    >
                      <Icon width={16} height={16} />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-8 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} La Reine Coaching.{" "}
            {t(COMMON.allRightsReserved)}
          </p>
          <a
            href={KM_DEV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink-soft transition-colors hover:text-forest"
          >
            {t(COMMON.buildByKm)}
          </a>
        </div>
      </div>
    </footer>
  );
}
