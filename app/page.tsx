import { Hero } from "@/components/store/hero"
import { OrderDialog } from "@/components/store/order-dialog"
import { OrderProvider } from "@/components/store/order-context"
import { SiteFooter } from "@/components/store/site-footer"
import { SiteHeader } from "@/components/store/site-header"
import { StickyBuyBar } from "@/components/store/sticky-buy-bar"

export default function Page() {
  return (
    <OrderProvider>
      <SiteHeader />
      <main className="pb-24 md:pb-0">
        <Hero />
      </main>
      <SiteFooter />
      <StickyBuyBar />
      <OrderDialog />
    </OrderProvider>
  )
}
