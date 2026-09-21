import type { Metadata } from "next";
import { CoachingContent } from "./CoachingContent";

export const metadata: Metadata = {
  title: "Coaching & Voice Activation",
  description:
    "Voor vrouwen die voelen dat ze zichzelf nog inhouden. Persoonlijke coaching rond je inner voice, zichtbaarheid en de manier waarop je spreekt.",
};

export default function CoachingPage() {
  return <CoachingContent />;
}
