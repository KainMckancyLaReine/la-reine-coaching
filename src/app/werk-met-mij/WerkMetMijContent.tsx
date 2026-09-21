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
    description: {
      nl: "Voor als je er klaar voor bent\nom niet langer klein te blijven spelen.\n\nJe werkt één-op-één met mij aan je inner voice,\nje zichtbaarheid en hoe je spreekt.\n\nZodat je niet alleen weet wat je wilt zeggen.\nMaar het ook daadwerkelijk doet.",
      en: "For when you're ready\nto stop playing small.\n\nYou work one-on-one with me on your inner voice,\nyour visibility and how you speak.\n\nSo you not only know what you want to say.\nBut actually do it.",
    },
    cta: { nl: "Werk met mij", en: "Work with me" },
    href: "/coaching-voice-activation",
  },
  {
    icon: Mic2,
    title: { nl: "Spreker & Keynotes", en: "Speaker & Keynotes" },
    description: {
      nl: "Voor organisaties en events\ndie impact willen maken met een boodschap die blijft hangen.\n\nGeen standaard verhaal.\nMaar een keynote die raakt en in beweging zet.",
      en: "For organizations and events\nthat want to make impact with a message that sticks.\n\nNo standard story.\nBut a keynote that moves people into action.",
    },
    cta: { nl: "Boek mij als spreker", en: "Book me as a speaker" },
    href: "/spreker",
  },
  {
    icon: MessageCircle,
    title: { nl: "Vibes & Voices", en: "Vibes & Voices" },
    description: {
      nl: "De plek waar je je stem oefent.\n\nIn een veilige, ontspannen setting krijg je de ruimte om te spreken en jezelf te laten zien.\n\nNiet perfect. Wel echt.",
      en: "The place where you practice your voice.\n\nIn a safe, relaxed setting you get the space to speak and to show yourself.\n\nNot perfect. But real.",
    },
    cta: { nl: "Ontdek het event", en: "Discover the event" },
    href: "/vibes-voices",
  },
];

export function WerkMetMijContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(COMMON.workWithMe)}
        title={t({ nl: "Werk met mij", en: "Work with me" })}
        subtitle={t({
          nl: "Je hoeft het niet alleen te doen.\nJe hoeft ook niet te blijven waar je nu bent.",
          en: "You don't have to do it alone.\nAnd you don't have to stay where you are now.",
        })}
      >
        <Button href={CALENDLY_URL} external variant="primary">
          {t(COMMON.planFirstStep)}
        </Button>
      </PageHero>

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
                nl: "Dit zijn de manieren waarop je met mij kunt werken.",
                en: "These are the ways you can work with me.",
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
                  <h2 className="font-display text-2xl text-ink sm:text-3xl">
                    {t(way.title)}
                  </h2>
                  <p className="mt-3 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-ink-soft">
                    {t(way.description)}
                  </p>
                </div>
                <div className="lg:justify-self-end">
                  <Button href={way.href} variant="primary">
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
          <p className="mx-auto max-w-xl whitespace-pre-line font-display text-2xl leading-snug text-ink sm:text-3xl">
            {t({
              nl: "Je hoeft niet alles in één keer te weten.\nJe hoeft alleen te beginnen.",
              en: "You don't have to know everything at once.\nYou only have to begin.",
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
