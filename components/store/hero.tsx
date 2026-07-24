"use client"

import { Check, Snowflake, Sparkles, Star } from "lucide-react"
import { formatINR, productById } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"

const benefits = [
  { icon: Snowflake, label: "Anti-puffiness" },
  { icon: Sparkles, label: "Cheekbone sculpting" },
  { icon: Check, label: "Instant cooling glow" },
]

export function Hero() {
  const { addItem } = useCart()
  const combo = productById("combo-kit")!

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 size-72 rounded-full bg-accent/50 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-16">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            Loved by 12,000+ glowing faces
          </span>

          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Depuff, sculpt & glow with the{" "}
            <span className="text-primary">Glow Combo Kit</span>
          </h1>

          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            The daily 2-minute ritual for lifted cheekbones and calm, radiant
            skin. Ice Roller to cool the puffiness, Gua Sha to sculpt the glow.
          </p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {benefits.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-sm ring-1 ring-border"
              >
                <b.icon className="size-4 text-primary" />
                {b.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              onClick={() => addItem("combo-kit")}
              className="h-12 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20"
              size="lg"
            >
              Claim Offer · {formatINR(combo.price)}
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground line-through">
                {formatINR(combo.compareAt!)}
              </span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                Save {formatINR(combo.compareAt! - combo.price)}
              </span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9/5</span> from
              2,400+ reviews
            </span>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[2rem] bg-accent/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border">
            <img
              src="/hero-model.png"
              alt="Woman using the AuraGlow ice roller on her cheekbone for depuffed, glowing skin"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-background/95 p-3 pr-4 shadow-xl ring-1 ring-border backdrop-blur animate-float">
            <img
              src={combo.image || "/placeholder.svg"}
              alt="Glow Combo Kit"
              className="size-14 rounded-xl bg-secondary object-cover"
            />
            <div>
              <p className="text-xs text-muted-foreground">Bundle & save</p>
              <p className="font-serif text-lg font-semibold leading-none">
                {formatINR(combo.price)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
