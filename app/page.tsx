import { CartProvider } from "@/components/store/cart-context"
import { CartDrawer } from "@/components/store/cart-drawer"
import { Faq } from "@/components/store/faq"
import { Hero } from "@/components/store/hero"
import { HowToUse } from "@/components/store/how-to-use"
import { ProductCards } from "@/components/store/product-cards"
import { Reviews } from "@/components/store/reviews"
import { SiteFooter } from "@/components/store/site-footer"
import { SiteHeader } from "@/components/store/site-header"
import { StickyBuyBar } from "@/components/store/sticky-buy-bar"

export default function Page() {
  return (
    <CartProvider>
      <SiteHeader />
      <main className="pb-24 md:pb-0">
        <Hero />
        <ProductCards />
        <HowToUse />
        <Reviews />
        <Faq />
      </main>
      <SiteFooter />
      <StickyBuyBar />
      <CartDrawer />
    </CartProvider>
  )
}
