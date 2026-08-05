import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { Preloader } from "@/components/Preloader";
import { LanguageProvider } from "@/lib/i18n";
import { SITE_URL } from "@/lib/nav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "La Reine Coaching | Voice Activation Coaching",
    template: "%s | La Reine Coaching",
  },
  description:
    "Stop met jezelf klein houden. Voice Activation Coaching door Phaedra La Reine — voor je innerlijke stem, publieke stem en collectieve stem.",
  openGraph: {
    title: "La Reine Coaching | Voice Activation Coaching",
    description:
      "Stop met jezelf klein houden. Voice Activation Coaching door Phaedra La Reine.",
    url: SITE_URL,
    siteName: "La Reine Coaching",
    locale: "nl_NL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <LanguageProvider>
          <Preloader />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
