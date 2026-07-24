"use client"

import { Check, Plus } from "lucide-react"
import { formatINR, products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCart } from "./cart-context"

export function ProductCards() {
  const { addItem } = useCart()

  return (
    <section id="shop" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Choose your glow
        </span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Buy single or bundle & save
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Pick a single tool, or grab the Combo Kit for the full sculpting
          ritual at the best price.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {products.map((product) => {
          const isBundle = product.id === "combo-kit"
          return (
            <article
              key={product.id}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl bg-card p-5 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                isBundle
                  ? "ring-2 ring-primary lg:-my-4 lg:shadow-lg"
                  : "ring-border",
              )}
            >
              {product.badge && (
                <span className="absolute left-5 top-5 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  {product.badge}
                </span>
              )}

              <div className="relative overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="font-serif text-xl font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>

                <ul className="mt-4 space-y-2">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="size-3 text-primary" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-semibold">
                        {formatINR(product.price)}
                      </span>
                      {product.compareAt && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatINR(product.compareAt)}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Free COD available
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => addItem(product.id)}
                  variant={isBundle ? "default" : "outline"}
                  className="mt-4 h-11 w-full rounded-full text-sm font-semibold"
                >
                  <Plus className="size-4" />
                  {isBundle ? "Add Combo Kit" : "Add to cart"}
                </Button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
