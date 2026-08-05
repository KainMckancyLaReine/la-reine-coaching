"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircleHeart, Send, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useT } from "@/lib/i18n";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const GREETING = {
  nl: "Hoi, ik ben de assistente van La Reine Coaching. Stel je vraag over coaching, Vibes & Voices of de shop — ik denk met je mee.",
  en: "Hi, I'm La Reine Coaching's assistant. Ask me anything about coaching, Vibes & Voices or the shop — I'm happy to help.",
};

const FALLBACK_REPLIES = {
  nl: [
    "Dank je voor je vraag. De AI-assistente van La Reine Coaching wordt op dit moment nog aangesloten — laat je vraag achter en Phaedra reageert persoonlijk.",
    "Goede vraag. Zodra de AI-koppeling live is, geef ik je direct antwoord. Wil je nu al iets kwijt? Gebruik het contactformulier of plan je eerste stap.",
  ],
  en: [
    "Thanks for your question. La Reine Coaching's AI assistant is still being connected — leave your question and Phaedra will reply personally.",
    "Good question. Once the AI is live, I'll answer you directly. Want to reach out now? Use the contact form or book your first step.",
  ],
};

export function ChatWidget() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => [
    { role: "assistant", text: t(GREETING) },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      // Placeholder reply — swap for a real Claude/OpenAI call once an
      // API key and backend are wired up.
      const replies = t(FALLBACK_REPLIES);
      const reply = replies[text.length % replies.length];
      await new Promise((resolve) => setTimeout(resolve, 500));
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.button
        aria-label={t({ nl: "Stel je vraag", en: "Ask a question" })}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-[0_12px_30px_-8px_rgba(18,74,59,0.55)]"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircleHeart size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_24px_60px_-16px_rgba(43,38,32,0.25)]"
          >
            <div className="flex items-center justify-between bg-forest px-5 py-4 text-cream">
              <div>
                <p className="font-display text-lg">
                  {t({ nl: "Stel je vraag", en: "Ask a question" })}
                </p>
                <p className="text-xs text-sage-100/80">
                  {t({ nl: "AI-assistente", en: "AI assistant" })} &middot; La Reine Coaching
                </p>
              </div>
              <button
                aria-label={t({ nl: "Sluiten", en: "Close" })}
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-cream/80 hover:text-cream"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-sage-50/60 px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-forest text-cream"
                        : "bg-paper text-ink border border-line"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <span className="flex items-center gap-1 rounded-2xl border border-line bg-paper px-4 py-2.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-ink-faint"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </span>
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-line bg-paper p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t({ nl: "Typ je vraag...", en: "Type your question..." })}
                className="flex-1 rounded-full border border-line bg-cream px-4 py-2 text-sm text-ink outline-none focus:border-sage-500"
              />
              <button
                type="submit"
                aria-label={t({ nl: "Verstuur", en: "Send" })}
                disabled={loading}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-cream transition-transform hover:scale-105 disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
