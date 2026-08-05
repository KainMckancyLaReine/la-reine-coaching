import type { Metadata } from "next";
import { OverMijContent } from "./OverMijContent";

export const metadata: Metadata = {
  title: "Over mij",
  description:
    "Phaedra La Reine — spreker en voice activation coach. De enige Lisa Nichols Certified Transformational Trainer in Nederland.",
};

export default function OverMijPage() {
  return <OverMijContent />;
}
