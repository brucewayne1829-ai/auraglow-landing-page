"use client"

import { Zap } from "lucide-react"
import { formatINR, productById } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"

export function StickyBuyBar() {
  const { addItem } = useCart()
  const combo = productById("combo-kit")!

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="flex items-center gap-3 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="min-w-0">
          <p className="truncate text-xs text-muted-foreground">Glow Combo Kit</p>
          <p className="flex items-baseline gap-1.5 font-serif text-lg font-semibold leading-none">
            {formatINR(combo.price)}
            <span className="text-xs font-normal text-muted-foreground line-through">
              {formatINR(combo.compareAt!)}
            </span>
          </p>
        </div>
        <Button
          onClick={() => addItem("combo-kit")}
          className="ml-auto h-12 flex-1 rounded-full text-sm font-semibold"
        >
          <Zap className="size-4" />
          Buy Now · UPI / COD
        </Button>
      </div>
    </div>
  )
}
