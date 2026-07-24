import { Eye, Gem, ShieldCheck, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "De-puffs eyes",
    desc: "Cold therapy calms morning puffiness and tired, swollen under-eyes fast.",
  },
  {
    icon: Sparkles,
    title: "Tightens skin",
    desc: "Instantly firms and refreshes, shrinking the look of pores for a smooth finish.",
  },
  {
    icon: Gem,
    title: "Sculpts jawline",
    desc: "Circular massage helps drain lymph and define your jaw and cheekbones.",
  },
  {
    icon: ShieldCheck,
    title: "Reusable & leak-proof",
    desc: "Food-grade silicone you refill again and again — zero waste, zero leaks.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why you&apos;ll love it
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            One tool, a whole routine of benefits
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl bg-card p-6 ring-1 ring-border transition-transform hover:-translate-y-1"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                <b.icon className="size-6 text-primary" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
