"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { productById, type Product } from "@/lib/products"

type CartLine = { id: Product["id"]; qty: number }

type CartContextValue = {
  lines: CartLine[]
  isOpen: boolean
  count: number
  subtotal: number
  openCart: () => void
  closeCart: () => void
  addItem: (id: Product["id"], qty?: number) => void
  removeItem: (id: Product["id"]) => void
  setQty: (id: Product["id"], qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((id: Product["id"], qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.id === id)
      if (existing) {
        return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l))
      }
      return [...prev, { id, qty }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: Product["id"]) => {
    setLines((prev) => prev.filter((l) => l.id !== id))
  }, [])

  const setQty = useCallback((id: Product["id"], qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
    )
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const { count, subtotal } = useMemo(() => {
    return lines.reduce(
      (acc, line) => {
        const product = productById(line.id)
        acc.count += line.qty
        acc.subtotal += (product?.price ?? 0) * line.qty
        return acc
      },
      { count: 0, subtotal: 0 },
    )
  }, [lines])

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      isOpen,
      count,
      subtotal,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      removeItem,
      setQty,
      clear,
    }),
    [lines, isOpen, count, subtotal, addItem, removeItem, setQty, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
