import { CreditCard, RefreshCw, Sparkles, Truck } from "lucide-react"

const trust = [
  { icon: Truck, label: "Fast pan-India shipping" },
  { icon: CreditCard, label: "UPI & Cash on Delivery" },
  { icon: RefreshCw, label: "7-day easy replacement" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 border-b border-border pb-10 sm:grid-cols-3">
          {trust.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="size-5 text-primary" />
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            <span className="font-serif text-lg font-semibold">AuraGlow</span>
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AuraGlow. Glow every day.
          </p>
        </div>
      </div>
    </footer>
  )
}
