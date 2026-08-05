import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Testimonial({
  quote,
  name,
  role,
  delay = 0,
}: {
  quote: string;
  name: string;
  role?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col justify-between rounded-3xl border border-line bg-paper p-8 shadow-[0_20px_50px_-24px_rgba(43,38,32,0.18)]">
        <Quote className="mb-4 text-gold-300" size={28} />
        <p className="font-display text-xl leading-snug text-ink">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-6">
          <p className="text-sm font-semibold text-forest">{name}</p>
          {role && <p className="text-xs text-ink-faint">{role}</p>}
        </div>
      </div>
    </Reveal>
  );
}
