"use client"

import { Check, Snowflake, Sparkles, Star, Truck } from "lucide-react"
import { formatINR, product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { useOrder } from "./order-context"

const benefits = [
  { icon: Snowflake, label: "Anti-puffiness" },
  { icon: Sparkles, label: "Cheekbone sculpting" },
  { icon: Check, label: "Reusable silicone" },
]

export function Hero() {
  const { openOrder } = useOrder()

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 size-72 rounded-full bg-accent/50 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-16">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Star className="size-3.5 fill-primary" />
            {product.rating}/5 · Loved by {product.reviewCount.toLocaleString("en-IN")}+ glowing faces
          </span>

          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Instant Morning Glow &amp; Anti-Puffiness in{" "}
            <span className="text-primary">60 Seconds</span>
          </h1>

          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Fill with water, tea, or cucumber. Freeze, pop the top, and sculpt
            your skin daily with the AuraGlow refillable silicone ice roller.
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

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-serif text-4xl font-semibold text-foreground">
              {formatINR(product.price)}
            </span>
            <span className="text-lg text-muted-foreground line-through">
              {formatINR(product.compareAt)}
            </span>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              {product.discountLabel}
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button
              onClick={openOrder}
              className="h-12 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] sm:self-start"
              size="lg"
            >
              Order Now — Cash on Delivery / UPI Available
            </Button>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Truck className="size-4 text-primary" />
              Free shipping across India · Pay when it arrives
            </p>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[2rem] bg-accent/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border">
            <img
              src={product.hero || "/placeholder.svg"}
              alt="Woman using the AuraGlow oval silicone ice roller on her cheekbone"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-background/95 p-3 pr-4 shadow-xl ring-1 ring-border backdrop-blur animate-float">
            <img
              src={product.image || "/placeholder.svg"}
              alt="AuraGlow oval silicone ice roller mold"
              className="size-14 rounded-xl bg-secondary object-cover"
            />
            <div>
              <p className="text-xs text-muted-foreground">Refillable mold</p>
              <p className="font-serif text-lg font-semibold leading-none">
                {formatINR(product.price)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
