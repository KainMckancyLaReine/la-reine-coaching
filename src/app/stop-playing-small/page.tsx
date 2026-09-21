import type { Metadata } from "next";
import { StopPlayingSmallContent } from "./StopPlayingSmallContent";

export const metadata: Metadata = {
  title: "Stop Playing Small",
  description:
    "Je weet dat er meer in je zit. De vraag is: wat houdt je nog tegen? In de gratis challenge werk je 5x één-op-één met Phaedra La Reine.",
};

export default function StopPlayingSmallPage() {
  return <StopPlayingSmallContent />;
}
