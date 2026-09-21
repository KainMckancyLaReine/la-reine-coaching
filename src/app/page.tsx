import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";

export const metadata: Metadata = {
  title: "Stop Playing Small — Voice Activation Coaching",
  description:
    "Je hebt een stem. Gebruik je die, of houd je jezelf nog tegen? Voice Activation Coaching door Phaedra La Reine: inner voice, public voice, collective voice.",
};

export default function HomePage() {
  return <HomeContent />;
}
