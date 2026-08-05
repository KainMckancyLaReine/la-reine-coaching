"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { useT } from "@/lib/i18n";

export function NewsletterForm() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-sage-300 bg-sage-50 p-5 text-forest">
        <CheckCircle2 size={20} />
        <p className="text-sm font-medium">
          {t({
            nl: "Dankjewel en welkom bij Vibes & Voices!",
            en: "Thank you and welcome to Vibes & Voices!",
          })}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 sm:grid-cols-[1fr_1fr_1.2fr_auto]"
    >
      <input
        required
        placeholder={t({ nl: "Voornaam", en: "First name" })}
        className="rounded-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-sage-500"
      />
      <input
        required
        placeholder={t({ nl: "Achternaam", en: "Last name" })}
        className="rounded-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-sage-500"
      />
      <input
        required
        type="email"
        placeholder={t({ nl: "E-mailadres", en: "Email address" })}
        className="rounded-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-sage-500"
      />
      <button
        type="submit"
        className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
      >
        {t({ nl: "Aanmelden", en: "Subscribe" })}
      </button>
    </form>
  );
}
