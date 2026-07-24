import { Droplets, Snowflake, Sparkles, Wind } from "lucide-react"

const steps = [
  {
    icon: Droplets,
    title: "Prep & cleanse",
    desc: "Start on clean skin. Apply a few drops of your favourite serum or facial oil for smooth glide.",
  },
  {
    icon: Snowflake,
    title: "Roll to depuff",
    desc: "Glide the chilled Ice Roller upward and outward for 60 seconds to calm puffiness and redness.",
  },
  {
    icon: Wind,
    title: "Sculpt with Gua Sha",
    desc: "Sweep the stone along your jaw and cheekbones to lift, contour and drain lymph.",
  },
  {
    icon: Sparkles,
    title: "Reveal the glow",
    desc: "Finish with moisturiser. Repeat morning and night for visibly sculpted, radiant skin.",
  },
]

export function HowToUse() {
  return (
    <section
      id="how-to-use"
      className="scroll-mt-20 bg-secondary/50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            The 2-minute ritual
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            How to use your AuraGlow tools
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-3xl bg-card p-6 ring-1 ring-border"
            >
              <span className="font-serif text-4xl font-semibold text-primary/25">
                0{i + 1}
              </span>
              <span className="mt-2 flex size-11 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold">{step.title}</h3>
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
