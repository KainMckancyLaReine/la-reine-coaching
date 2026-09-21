import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function OfferCard({
  icon: Icon,
  title,
  description,
  href,
  cta = "Meer weten",
  delay = 0,
  external = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta?: string;
  delay?: number;
  external?: boolean;
}) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={href}
        {...linkProps}
        className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-[0_24px_60px_-24px_rgba(63,118,82,0.35)]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
          <Icon size={22} />
        </div>
        <h3 className="font-display mt-6 text-[1.6rem] leading-snug tracking-[-0.01em] text-ink">{title}</h3>
        <p className="mt-4 flex-1 whitespace-pre-line text-[15px] leading-[1.75] text-ink-soft">
          {description}
        </p>
        <span className="mt-7 inline-flex items-center gap-1 text-[15px] font-medium text-forest">
          {cta}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </Link>
    </Reveal>
  );
}
