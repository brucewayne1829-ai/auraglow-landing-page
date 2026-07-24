import { Star } from "lucide-react"

const reviews = [
  {
    name: "Ananya R.",
    location: "Mumbai",
    rating: 5,
    text: "My morning puffiness is gone in seconds. This ice roller mold is my new obsession — I use it every single day before work.",
  },
  {
    name: "Priya K.",
    location: "Bengaluru",
    rating: 5,
    text: "I freeze green tea in it every night. Two weeks in and my jawline looks so much more defined in photos.",
  },
  {
    name: "Sneha M.",
    location: "Delhi",
    rating: 5,
    text: "Best ₹299 I've spent on skincare. The silicone never leaks and cash on delivery made it super easy too.",
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "size-4 fill-primary text-primary"
              : "size-4 text-border"
          }
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Real results
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            See the depuffed, sculpted difference
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            A consistent daily ritual visibly reduces puffiness and lifts the
            contours of your face. Here&apos;s the before &amp; after our
            customers love.
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl ring-1 ring-border">
            <div className="relative">
              <img
                src="/before-after.png"
                alt="Before and after comparison showing reduced puffiness and more sculpted skin"
                className="aspect-[3/2] w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur">
                Before
              </span>
              <span className="absolute bottom-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                After
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 rounded-3xl bg-primary/5 p-5 ring-1 ring-primary/15">
            <span className="font-serif text-4xl font-semibold text-primary">
              4.9
            </span>
            <div>
              <Stars rating={5} />
              <p className="mt-1 text-sm text-muted-foreground">
                Based on 2,400+ verified reviews
              </p>
            </div>
          </div>

          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-3xl bg-card p-5 ring-1 ring-border"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm font-medium text-muted-foreground">
                {review.name} · {review.location}
                <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  Verified
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
