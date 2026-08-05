"use client";
import { asset } from "@/lib/asset";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";

const PRODUCTS = [
  {
    image: asset("/images/products/happiness-101.png"),
    title: "Happiness 101",
    price: "€2,76",
    description: { nl: "Verkrijgbaar via Amazon.", en: "Available via Amazon." },
    cta: { nl: "Bekijk op Amazon", en: "View on Amazon" },
    href: "https://www.amazon.nl/s?k=Happiness+101",
    external: true,
  },
  {
    image: asset("/images/products/angst-perfectie-twijfel.png"),
    title: {
      nl: "Kom los van Angst, Perfectie & Twijfel",
      en: "Free Yourself from Fear, Perfection & Doubt",
    },
    price: { nl: "Gratis", en: "Free" },
    description: {
      nl: "Een gratis e-book gericht op het loslaten van angst, perfectionisme en twijfel.",
      en: "A free e-book focused on letting go of fear, perfectionism and doubt.",
    },
    cta: { nl: "Vraag het gratis e-book aan", en: "Request the free e-book" },
    href: "/contact",
  },
  {
    image: asset("/images/products/happiness-planner.png"),
    title: { nl: "90 dagen Happiness Planner", en: "90-Day Happiness Planner" },
    price: "€22,50",
    description: {
      nl: "Een planner om 90 dagen bewust aan je geluk te werken.",
      en: "A planner to consciously work on your happiness for 90 days.",
    },
    cta: COMMON.contact,
    href: "/contact",
  },
  {
    image: asset("/images/products/live-love-prosper.png"),
    title: "LIVE.LOVE.PROSPER",
    price: "€22,50",
    description: {
      nl: "Een samenwerkingsboek van Authors Who Care, voorwoord van Lisa Nichols.",
      en: "A collaboration book by Authors Who Care, foreword by Lisa Nichols.",
    },
    cta: COMMON.contact,
    href: "/contact",
  },
];

export function ShopContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title={t({ nl: "Boeken & tools voor je groei", en: "Books & tools for your growth" })}
        subtitle={t({
          nl: "Kleine bronnen met een grote impact — om zelf mee verder te oefenen.",
          en: "Small resources with a big impact — to keep practicing on your own.",
        })}
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => {
            const title = typeof product.title === "string" ? product.title : t(product.title);
            const price = typeof product.price === "string" ? product.price : t(product.price);
            return (
              <Reveal key={title} delay={i * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper transition-all hover:-translate-y-1 hover:border-sage-300 hover:shadow-[0_24px_60px_-24px_rgba(63,118,82,0.3)]">
                  <div className="relative aspect-square overflow-hidden bg-sage-50">
                    <Image
                      src={product.image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-paper/90 px-3 py-1 font-display text-sm text-forest shadow-sm">
                      {price}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg text-ink">{title}</h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-soft">
                      {t(product.description)}
                    </p>
                    <div className="mt-5">
                      <Button
                        href={product.href}
                        external={product.external}
                        variant="secondary"
                        className="w-full text-center"
                      >
                        {t(product.cta)}
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
