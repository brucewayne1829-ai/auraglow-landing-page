"use client"

import { createContext, useContext, useMemo, useState } from "react"

type OrderContextValue = {
  isOpen: boolean
  qty: number
  openOrder: () => void
  closeOrder: () => void
  setQty: (qty: number) => void
}

const OrderContext = createContext<OrderContextValue | null>(null)

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [qty, setQtyState] = useState(1)

  const value = useMemo<OrderContextValue>(
    () => ({
      isOpen,
      qty,
      openOrder: () => setIsOpen(true),
      closeOrder: () => setIsOpen(false),
      setQty: (next: number) => setQtyState(Math.min(5, Math.max(1, next))),
    }),
    [isOpen, qty],
  )

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export function useOrder() {
  const ctx = useContext(OrderContext)
  if (!ctx) throw new Error("useOrder must be used within OrderProvider")
  return ctx
}
