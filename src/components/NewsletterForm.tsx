"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { useT } from "@/lib/i18n";
import { sendForm } from "@/lib/forms";
import siteContent from "@/content/site.json";

const copy = siteContent["NewsletterForm"];

export function NewsletterForm() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();
    setSending(true);
    setError(false);
    try {
      await sendForm(
        "Nieuwe aanmelding nieuwsbrief Vibes & Voices",
        {
          Voornaam: get("voornaam"),
          Achternaam: get("achternaam"),
          "E-mailadres": get("email"),
        },
        get("email"),
      );
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-sage-300 bg-sage-50 p-5 text-forest">
        <CheckCircle2 size={20} />
        <p className="text-sm font-medium">
          {t(copy["dankjewel-en-welkom-bij-vibes-voices"])}
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
        name="voornaam"
        required
        placeholder={t(copy["voornaam"])}
        className="rounded-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-sage-500"
      />
      <input
        name="achternaam"
        required
        placeholder={t(copy["achternaam"])}
        className="rounded-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-sage-500"
      />
      <input
        name="email"
        required
        type="email"
        placeholder={t(copy["e-mailadres"])}
        className="rounded-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-sage-500"
      />
      <button
        type="submit"
        disabled={sending}
        className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {sending ? "…" : t(copy["aanmelden"])}
      </button>
      {error && (
        <p role="alert" className="text-sm text-red-700 sm:col-span-4">
          {t(copy["aanmelden-lukte-niet-probeer-het-later-opnieuw"])}
        </p>
      )}
    </form>
  );
}
