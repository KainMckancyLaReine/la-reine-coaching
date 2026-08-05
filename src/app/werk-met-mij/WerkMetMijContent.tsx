"use client";
import { asset } from "@/lib/asset";

import { Sparkles, Mic2, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PortraitFrame } from "@/components/PortraitFrame";
import { CALENDLY_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";

const WAYS = [
  {
    icon: Sparkles,
    title: { nl: "Coaching & Voice Activation", en: "Coaching & Voice Activation" },
    tagline: {
      nl: "Voor wie klaar is om te stoppen met klein spelen",
      en: "For those ready to stop playing small",
    },
    description: {
      nl: "Je werkt één-op-één met mij aan je innerlijke stem, zichtbaarheid en de manier waarop je spreekt. Zodat je niet alleen weet wat je wilt zeggen — maar het ook daadwerkelijk doet.",
      en: "You work one-on-one with me on your inner voice, visibility and the way you speak. So you not only know what you want to say — but actually do it.",
    },
    cta: COMMON.planFirstStep,
    href: CALENDLY_URL,
    external: true,
  },
  {
    icon: Mic2,
    title: { nl: "Spreker & Keynotes", en: "Speaker & Keynotes" },
    tagline: {
      nl: "Voor organisaties en events die impact willen",
      en: "For organizations and events that want impact",
    },
    description: {
      nl: "Geen standaardverhaal, maar een keynote die raakt en beweegt. Voor teams en publieken die een boodschap nodig hebben die blijft hangen.",
      en: "No standard story, but a keynote that resonates and moves people. For teams and audiences who need a message that sticks.",
    },
    cta: COMMON.contact,
    href: "/contact",
  },
  {
    icon: MessageCircle,
    title: { nl: "Vibes & Voices", en: "Vibes & Voices" },
    tagline: { nl: "De plek waar je je stem oefent", en: "The place where you practice your voice" },
    description: {
      nl: "In een veilige, ontspannen setting oefen je met authentieke expressie — tussen mensen die hetzelfde willen: hun stem echt laten horen.",
      en: "In a safe, relaxed setting you practice authentic expression — among people who want the same thing: to truly let their voice be heard.",
    },
    cta: { nl: "Ontdek Vibes & Voices", en: "Discover Vibes & Voices" },
    href: "/vibes-voices",
  },
];

export function WerkMetMijContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(COMMON.workWithMe)}
        title={t({ nl: "Je hoeft het niet alleen te doen", en: "You don't have to do it alone" })}
        subtitle={t({
          nl: "Je hoeft niet te blijven waar je nu bent. Dit zijn de manieren waarop je met mij kunt werken.",
          en: "You don't have to stay where you are now. Here are the ways you can work with me.",
        })}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <PortraitFrame
            src={asset("/images/phaedra-desk.jpg")}
            alt="Phaedra La Reine aan het werk"
            accent="gold"
            rotate={-2}
            width={1400}
            height={1400}
            className="mx-auto w-full max-w-sm"
          />
          <Reveal delay={0.1}>
            <p className="text-balance font-display text-2xl leading-snug text-ink sm:text-3xl">
              {t({
                nl: "Elke manier van werken begint bij hetzelfde: jouw stem, echt gehoord.",
                en: "Every way of working starts with the same thing: your voice, truly heard.",
              })}
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              {t({
                nl: "Of je nu één-op-één werkt aan je innerlijke stem, het podium op gaat als spreker, of oefent tussen gelijkgestemden bij Vibes & Voices — het uitgangspunt blijft: niet perfect, wel echt.",
                en: "Whether you work one-on-one on your inner voice, step on stage as a speaker, or practice among like-minded people at Vibes & Voices — the starting point stays the same: not perfect, but real.",
              })}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="space-y-8">
          {WAYS.map((way, i) => (
            <Reveal key={way.title.nl} delay={i * 0.08}>
              <div className="grid gap-8 rounded-3xl border border-line bg-paper p-8 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-forest">
                  <way.icon size={26} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">
                    {t(way.tagline)}
                  </p>
                  <h2 className="font-display mt-2 text-2xl text-ink sm:text-3xl">
                    {t(way.title)}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                    {t(way.description)}
                  </p>
                </div>
                <div className="lg:justify-self-end">
                  <Button href={way.href} external={way.external} variant="primary">
                    {t(way.cta)}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sage-50 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            {t({ nl: "Niet zeker welke stap bij jou past?", en: "Not sure which step fits you?" })}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            {t({
              nl: "Plan een vrijblijvend gesprek — samen kijken we wat jij nu nodig hebt.",
              en: "Book a no-obligation call — together we'll look at what you need right now.",
            })}
          </p>
          <div className="mt-8">
            <Button href={CALENDLY_URL} external variant="primary">
              {t(COMMON.planFirstStep)}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
