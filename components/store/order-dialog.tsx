"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, Minus, Plus, Truck, X } from "lucide-react"
import { formatINR, product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { useOrder } from "./order-context"

export function OrderDialog() {
  const { isOpen, closeOrder, qty, setQty } = useOrder()
  const [placed, setPlaced] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOrder()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, closeOrder])

  useEffect(() => {
    if (!isOpen) setPlaced(false)
  }, [isOpen])

  const total = product.price * qty
  const saved = (product.compareAt - product.price) * qty

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeOrder}
        className={`absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Place your order"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-serif text-lg font-semibold">
            {placed ? "Order confirmed" : "Your order"}
          </h2>
          <button
            type="button"
            onClick={closeOrder}
            className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>

        {placed ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="size-8 text-primary" />
            </div>
            <p className="font-serif text-xl font-semibold">You&apos;re all set!</p>
            <p className="text-sm text-muted-foreground">
              We&apos;ve received your order for {qty} × {product.shortName}. Our team
              will call to confirm your address and payment method shortly.
            </p>
            <Button onClick={closeOrder} className="mt-2 h-11 rounded-full px-6">
              Continue browsing
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5">
              <div className="flex gap-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="size-24 shrink-0 rounded-2xl bg-secondary object-cover"
                />
                <div>
                  <p className="font-medium leading-tight">{product.name}</p>
                  <p className="mt-1 flex items-baseline gap-2">
                    <span className="font-serif text-lg font-semibold">
                      {formatINR(product.price)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatINR(product.compareAt)}
                    </span>
                  </p>
                  <span className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    {product.discountLabel}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium">Quantity</span>
                <div className="inline-flex items-center rounded-full border border-border">
                  <button
                    type="button"
                    onClick={() => setQty(qty - 1)}
                    className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-semibold tabular-nums">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty(qty + 1)}
                    className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Increase quantity"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-accent/40 px-4 py-3">
                <p className="flex items-center gap-2 text-sm text-accent-foreground">
                  <Truck className="size-4" />
                  Free shipping across India · Pay when it arrives
                </p>
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium">Payment method</legend>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <span className="rounded-xl border border-primary bg-primary/5 px-3 py-2.5 text-center text-sm font-medium text-primary">
                    Cash on Delivery
                  </span>
                  <span className="rounded-xl border border-border px-3 py-2.5 text-center text-sm font-medium text-muted-foreground">
                    UPI
                  </span>
                </div>
              </fieldset>
            </div>

            <div className="space-y-3 border-t border-border px-5 py-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>You save</span>
                <span className="font-medium text-primary">{formatINR(saved)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-serif text-xl font-semibold">
                  {formatINR(total)}
                </span>
              </div>
              <Button
                onClick={() => setPlaced(true)}
                className="h-12 w-full rounded-full text-base font-semibold"
              >
                Place Order · UPI / COD
              </Button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
