"use client"

import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useOrder } from "./order-context"

export function SiteHeader() {
  const { openOrder } = useOrder()

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

        <Button
          onClick={openOrder}
          className="h-10 rounded-full px-5 text-sm font-semibold shadow-sm shadow-primary/20 transition-transform hover:scale-[1.03]"
        >
          Buy Now
        </Button>
      </div>
    </header>
  )
}
