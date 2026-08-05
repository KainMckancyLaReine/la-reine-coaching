import type { Metadata } from "next";
import { ShopContent } from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Boeken, e-books en tools van La Reine Coaching om je eigen groei verder te brengen.",
};

export default function ShopPage() {
  return <ShopContent />;
}
