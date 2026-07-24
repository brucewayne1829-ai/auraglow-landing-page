import { Droplets, Snowflake, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Droplets,
    title: "Fill",
    desc: "Pour water — or your organic recipe — into the top hole of the oval silicone mold.",
  },
  {
    icon: Snowflake,
    title: "Freeze",
    desc: "Stand the mold upright in your freezer for 4+ hours until fully frozen and solid.",
  },
  {
    icon: Sparkles,
    title: "Roll",
    desc: "Remove the top cap and massage in circular motions across your face and neck.",
  },
]

export function HowToUse() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Three simple steps
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            From freezer to face in one easy ritual — no batteries, no mess, no refills to buy.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-3xl bg-card p-8 ring-1 ring-border transition-transform hover:-translate-y-1"
            >
              <span className="font-serif text-5xl font-semibold text-primary/20">
                0{i + 1}
              </span>
              <span className="mt-3 flex size-12 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="size-6 text-primary" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
