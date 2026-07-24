import { Benefits } from "@/components/store/benefits"
import { Faq } from "@/components/store/faq"
import { Hero } from "@/components/store/hero"
import { HowToUse } from "@/components/store/how-to-use"
import { OrderDialog } from "@/components/store/order-dialog"
import { OrderProvider } from "@/components/store/order-context"
import { Recipes } from "@/components/store/recipes"
import { Reviews } from "@/components/store/reviews"
import { SiteFooter } from "@/components/store/site-footer"
import { SiteHeader } from "@/components/store/site-header"
import { StickyBuyBar } from "@/components/store/sticky-buy-bar"

export default function Page() {
  return (
    <OrderProvider>
      <SiteHeader />
      <main className="pb-24 md:pb-0">
        <Hero />
        <HowToUse />
        <Benefits />
        <Recipes />
        <Reviews />
        <Faq />
      </main>
      <SiteFooter />
      <StickyBuyBar />
      <OrderDialog />
    </OrderProvider>
  )
}
