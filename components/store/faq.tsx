"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How long does shipping take?",
    a: "We dispatch within 24 hours. Metro cities receive orders in 2–3 days, and the rest of India in 4–6 days. You'll get a tracking link over SMS and email.",
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes! We support both UPI and Cash on Delivery across India, so you can pay however is most convenient for you.",
  },
  {
    q: "How often should I use the tools?",
    a: "For best results, use the Ice Roller and Gua Sha daily — once in the morning to depuff and once at night to sculpt and relax facial muscles.",
  },
  {
    q: "How do I keep the ice roller cold?",
    a: "Simply store the detachable roller head in your freezer for at least 2 hours. It stays cool through your entire routine and the handle never gets uncomfortably cold.",
  },
  {
    q: "What is your return policy?",
    a: "If you're not glowing, we offer a hassle-free 7-day replacement on any manufacturing defects. Just reach out to our support team.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Good to know
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-shadow hover:shadow-sm"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium text-foreground">{faq.q}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
