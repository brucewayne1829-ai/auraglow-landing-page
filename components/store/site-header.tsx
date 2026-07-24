"use client"

import { ShoppingBag, Sparkles } from "lucide-react"
import { useCart } from "./cart-context"

const nav = [
  { label: "Shop", href: "#shop" },
  { label: "How to Use", href: "#how-to-use" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const { count, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            AuraGlow
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCart}
          className="relative inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:shadow-sm active:translate-y-px"
          aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
        >
          <ShoppingBag className="size-4" />
          <span className="hidden sm:inline">Cart</span>
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
