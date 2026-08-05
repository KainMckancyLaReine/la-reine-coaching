import type { Metadata } from "next";
import { StopPlayingSmallContent } from "./StopPlayingSmallContent";

export const metadata: Metadata = {
  title: "Stop Playing Small",
  description:
    "Je weet dat er meer in je zit. De vraag is: wat houdt je nog tegen? Doe de gratis challenge en zet je eerste stap.",
};

export default function StopPlayingSmallPage() {
  return <StopPlayingSmallContent />;
}
