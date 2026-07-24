"use client"

import { useEffect } from "react"
import { Minus, Plus, ShoppingBag, Truck, X } from "lucide-react"
import { formatINR, productById } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"

const FREE_SHIP_THRESHOLD = 499

export function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, setQty, removeItem, clear } = useCart()

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, closeCart])

  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal)

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
            <ShoppingBag className="size-5 text-primary" />
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close cart"
          >
            <X className="size-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="size-7 text-muted-foreground" />
            </div>
            <p className="font-serif text-lg font-medium">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">
              Add the Glow Combo Kit and start sculpting.
            </p>
            <Button onClick={closeCart} className="mt-2 h-10 rounded-full px-6">
              Continue shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="border-b border-border bg-accent/40 px-5 py-3">
              {remaining > 0 ? (
                <p className="flex items-center gap-2 text-sm text-accent-foreground">
                  <Truck className="size-4" />
                  Add {formatINR(remaining)} more for{" "}
                  <span className="font-semibold">free shipping</span>
                </p>
              ) : (
                <p className="flex items-center gap-2 text-sm font-medium text-accent-foreground">
                  <Truck className="size-4" />
                  You&apos;ve unlocked free shipping!
                </p>
              )}
            </div>

            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {lines.map((line) => {
                const product = productById(line.id)
                if (!product) return null
                return (
                  <li key={line.id} className="flex gap-4 py-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="size-20 shrink-0 rounded-xl bg-secondary object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-medium leading-tight">{product.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {formatINR(product.price)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(line.id)}
                          className="text-xs text-muted-foreground underline-offset-2 hover:text-destructive hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-auto flex items-center gap-2">
                        <div className="inline-flex items-center rounded-full border border-border">
                          <button
                            type="button"
                            onClick={() => setQty(line.id, line.qty - 1)}
                            className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={`Decrease ${product.name} quantity`}
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium tabular-nums">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(line.id, line.qty + 1)}
                            className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={`Increase ${product.name} quantity`}
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>
                        <span className="ml-auto text-sm font-semibold">
                          {formatINR(product.price * line.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="space-y-4 border-t border-border px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-serif text-xl font-semibold">
                  {formatINR(subtotal)}
                </span>
              </div>
              <Button className="h-12 w-full rounded-full text-base font-semibold">
                Checkout · UPI / COD
              </Button>
              <button
                type="button"
                onClick={clear}
                className="mx-auto block text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
