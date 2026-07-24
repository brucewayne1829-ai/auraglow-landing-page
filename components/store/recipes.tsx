"use client"

import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useOrder } from "./order-context"

const recipes = [
  {
    name: "Green Tea",
    for: "Acne & inflammation",
    desc: "Brew, cool, and freeze for antioxidant-rich calming ice.",
  },
  {
    name: "Cucumber",
    for: "Puffiness & tired eyes",
    desc: "Blend and strain cucumber for an instant de-puffing chill.",
  },
  {
    name: "Rosewater",
    for: "Glow & hydration",
    desc: "Fill with rosewater to tone and leave skin dewy and radiant.",
  },
  {
    name: "Aloe + Lemon",
    for: "Brightening",
    desc: "A splash of aloe and lemon to even tone and refresh dull skin.",
  },
]

export function Recipes() {
  const { openOrder } = useOrder()

  return (
    <section id="recipes" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] bg-accent/40 ring-1 ring-border">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-1 ring-border">
                <Leaf className="size-3.5" />
                DIY glow recipes
              </span>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Freeze your own skincare
              </h2>
              <p className="mt-3 text-pretty text-muted-foreground">
                Skip the chemicals. Fill your mold with these natural blends for
                a customised cold ritual every morning.
              </p>

              <ul className="mt-6 space-y-4">
                {recipes.map((r) => (
                  <li key={r.name} className="flex gap-3">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {r.name}{" "}
                        <span className="font-normal text-primary">— {r.for}</span>
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {r.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <Button
                onClick={openOrder}
                className="mt-8 h-11 rounded-full px-6 font-semibold shadow-sm shadow-primary/20 transition-transform hover:scale-[1.02]"
              >
                Start your ritual — ₹299
              </Button>
            </div>

            <div className="relative h-full min-h-64">
              <img
                src="/recipes.png"
                alt="Natural ice recipe ingredients: cucumber, green tea, rose petals and lemon beside a pink silicone ice mold"
                className="h-full w-full object-cover md:absolute md:inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
