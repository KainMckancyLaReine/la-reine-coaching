"use client";
import { asset } from "@/lib/asset";

import Image from "next/image";
import { CircleSlash, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Testimonial } from "@/components/Testimonial";
import { PortraitFrame } from "@/components/PortraitFrame";
import { CALENDLY_URL, REVIEW_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";
import siteContent from "@/content/site.json";

const copy = siteContent["stop-playing-small"];

const RECOGNITIONS = [
  copy["je-denkt-na-voordat-je-iets-zegt-je-houdt-je-in-je-kiest-je-wo"],
  copy["je-zegt-niet-alles-wat-je-eigenlijk-wilt-zeggen"],
  copy["je-wacht-op-het-juiste-moment-of-tot-je-meer-zekerheid-voelt-m"],
  copy["je-speelt-kleiner-dan-je-bent"],
];

const ROOT_CAUSES = [
  { icon: "/images/icons/twijfel.png", title: copy["twijfel"] },
  { icon: "/images/icons/overtuigingen.png", title: copy["overtuigingen"] },
  {
    icon: "/images/icons/tegenhouden.png",
    title: copy["momenten-waarop-je-jezelf-tegenhoudt"],
  },
];

const RESULTS = [
  copy["zie-je-waar-je-jezelf-tegenhoudt"],
  copy["begrijp-je-wat-er-speelt"],
  copy["zet-je-een-eerste-stap-die-klopt"],
];

const TESTIMONIALS = [
  {
    quote: copy["ik-hield-mezelf-klein-nu-niet-meer"],
    name: "Amara Rahman",
  },
  {
    quote: copy["ik-spreek-me-uit-zonder-mezelf-kleiner-te-maken"],
    name: "Marieke van Dongen",
  },
  { quote: copy["niet-perfect-wel-echt"], name: "Isabella Rossi" },
];

export function StopPlayingSmallContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(copy["de-challenge"])}
        title={t(copy["stop-playing-small"])}
        subtitle={t(copy["je-weet-dat-er-meer-in-je-zit-de-vraag-is-wat-houdt-je-nog-teg"])}
      >
        <Button href={CALENDLY_URL} external variant="primary">
          {t(copy["start-jouw-eerste-stap"])}
        </Button>
        <Button href="/contact" variant="secondary">
          {t(COMMON.contact)}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="whitespace-pre-line font-display text-[2.15rem] leading-[1.2] tracking-[-0.015em] text-ink sm:text-[2.6rem]">
              {t(copy["je-hebt-een-stem-maar-ergens-gebruik-je-die-nog-niet-volledig"])}
            </p>
          </Reveal>
          <PortraitFrame
            src={asset("/images/foto-3-open-armen.jpg")}
            alt="Phaedra La Reine"
            accent="gold"
            rotate={-2}
            width={1800}
            height={1200}
            className="mx-auto w-full max-w-md"
          />
        </div>
      </section>

      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t(copy["je-herkent-dit"])}</SectionLabel>
            <h2 className="text-balance font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
              {t(copy["diep-van-binnen-weet-je-dit-klopt-niet"])}
            </h2>
            <p className="mt-5 text-balance font-display text-[1.4rem] leading-[1.35] text-ink-soft sm:text-[1.6rem]">
              {t(copy["niet-alleen-in-wat-je-zegt-maar-ook-in-wat-je-mist"])}
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {RECOGNITIONS.map((text, i) => (
              <Reveal key={text.nl} delay={i * 0.08}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-paper p-5">
                  <CircleSlash className="mt-0.5 shrink-0 text-gold-500" size={18} />
                  <p className="whitespace-pre-line text-[15px] leading-[1.75] text-ink-soft">
                    {t(text)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>
            {t(copy["het-ligt-niet-aan-je-stem"])}
          </SectionLabel>
          <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["het-zit-in-wat-eronder-ligt"])}
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {ROOT_CAUSES.map((cause, i) => (
            <Reveal key={cause.title.nl} delay={i * 0.1} className="h-full">
              <div className="flex h-full min-h-[15rem] flex-col items-center justify-center gap-6 rounded-3xl border border-line bg-paper px-8 py-12 text-center">
                <Image
                  src={asset(cause.icon)}
                  alt=""
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
                <h3 className="text-balance font-display text-[1.7rem] leading-snug tracking-[-0.01em] text-ink sm:text-[1.9rem]">
                  {t(cause.title)}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel tone="light">
              {t(copy["dit-is-waar-het-verandert"])}
            </SectionLabel>
            <div className="mx-auto mt-7 max-w-2xl space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-sage-100/85">
              <p>
                {t(copy["niet-door-harder-je-best-te-doen-maar-door-te-zien-waar-je-jez"])}
              </p>
              <p>
                {t(copy["zodat-wat-je-denkt-voelt-en-zegt-weer-op-een-lijn-komt"])}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-cream/15 bg-cream/5 p-8 text-left backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-200">
                {t(copy["begin-hier"])}
              </p>
              <div className="mt-5 space-y-5 whitespace-pre-line text-[15px] leading-[1.75] text-sage-100/90">
                <p>
                  {t(copy["je-hoeft-het-niet-alleen-te-doen-en-je-hoeft-ook-niet-te-blijv"])}
                </p>
                <p>
                  {t(copy["in-mijn-gratis-challenge-werk-je-5x-een-op-een-met-mij-online"])}
                </p>
                <p>
                  {t(copy["geen-theorie-maar-directe-begeleiding-waarin-je-ontdekt-waar-j"])}
                </p>
                <p className="font-semibold text-cream">
                  {t(copy["na-deze-sessies"])}
                </p>
              </div>
              <ul className="mt-5 space-y-3 text-[15px] leading-[1.7] text-sage-100/90">
                {RESULTS.map((r) => (
                  <li key={r.nl} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold-200" />
                    {t(r)}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={CALENDLY_URL} external variant="ghost">
                  {t(copy["stop-playing-small-plan-je-eerste-stap"])}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-12 whitespace-pre-line font-display text-[1.6rem] italic leading-[1.4] text-gold-100 sm:text-[1.9rem]">
              {t(copy["je-hoeft-het-niet-perfect-te-doen-je-hoeft-alleen-te-beginnen"])}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
              {t(copy["wat-anderen-zeggen"])}
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <Testimonial
                key={testimonial.name}
                quote={t(testimonial.quote)}
                name={testimonial.name}
                delay={i * 0.1}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href={REVIEW_URL} external={REVIEW_URL.startsWith("http")} variant="secondary">
              {t(copy["laat-een-review-achter"])}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
