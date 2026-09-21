import type { Metadata } from "next";
import { OverMijContent } from "./OverMijContent";

export const metadata: Metadata = {
  title: "Over mij",
  description:
    "Ik help mensen stoppen met zichzelf klein houden, zodat ze hun stem durven gebruiken. Phaedra La Reine — spreker, voice activation coach en de enige Lisa Nichols Certified Transformational Trainer in Nederland.",
};

export default function OverMijPage() {
  return <OverMijContent />;
}
