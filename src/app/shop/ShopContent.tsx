"use client";
import { asset } from "@/lib/asset";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";
import siteContent from "@/content/site.json";

const copy = siteContent["shop"];

const PRODUCTS = [
  {
    image: asset("/images/products/happiness-101.png"),
    title: copy["happiness-101-titel"],
    price: copy["happiness-101-prijs"],
    description: copy["verkrijgbaar-via-amazon"],
    cta: copy["bekijk-op-amazon"],
    href: "https://www.amazon.nl/dp/B0D6CXN4NT",
    external: true,
  },
  {
    image: asset("/images/products/angst-perfectie-twijfel.png"),
    title: copy["kom-los-van-angst-perfectie-twijfel"],
    price: copy["gratis"],
    description: copy["een-gratis-e-book-gericht-op-het-loslaten-van-angst-perfection"],
    cta: copy["download-het-gratis-e-book"],
    href: asset("/downloads/kom-los-van-angst-perfectie-en-twijfel.pdf"),
    external: true,
  },
  {
    image: asset("/images/products/happiness-planner.png"),
    title: copy["90-dagen-happiness-planner"],
    price: copy["happiness-planner-prijs"],
    description: copy["een-planner-om-90-dagen-bewust-aan-je-geluk-te-werken"],
    cta: COMMON.contact,
    href: "/contact",
  },
  {
    image: asset("/images/products/live-love-prosper.png"),
    title: copy["live-love-prosper-titel"],
    price: copy["live-love-prosper-prijs"],
    description: copy["a-positive-mindset-can-make-anything-possible-by-authors-who-c"],
    cta: COMMON.contact,
    href: "/contact",
  },
];

export function ShopContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(copy["shop"])}
        title={t(copy["boeken-tools-voor-je-groei"])}
        subtitle={t(copy["kleine-bronnen-met-een-grote-impact-om-zelf-mee-verder-te-oefe"])}
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => {
            const title = t(product.title);
            const price = t(product.price);
            return (
              <Reveal key={product.image} delay={i * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper transition-all hover:-translate-y-1 hover:border-sage-300 hover:shadow-[0_24px_60px_-24px_rgba(63,118,82,0.3)]">
                  <div className="relative aspect-square overflow-hidden bg-sage-50">
                    <Image
                      src={product.image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-paper/90 px-3 py-1 font-display text-[15px] text-forest shadow-sm">
                      {price}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl leading-snug text-ink">{title}</h3>
                    <p className="mt-3 flex-1 whitespace-pre-line text-[14px] leading-[1.7] text-ink-soft">
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
