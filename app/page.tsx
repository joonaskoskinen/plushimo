import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { Features } from "@/components/features"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { FloatingElements } from "@/components/floating-elements"
import { CustomerReviews } from "@/components/customer-reviews"
import { TrustBadges } from "@/components/trust-badges"
import { AnimatedBackground } from "@/components/animated-background"
import { MicroInteractions } from "@/components/micro-interactions"
import { BackToTop } from "@/components/back-to-top"
import { getProducts } from "@/lib/shopify"
import { mockProducts } from "@/lib/shopify/mock-products"

export default async function Home() {
  let products = []

  try {
    products = await getProducts({ first: 12 })
  } catch (error) {
    console.error("Error fetching products:", error)
    products = mockProducts
  }

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <FloatingElements />
      <MicroInteractions />
      <Header />
      <main>
        <Hero />
        <TrustBadges />

        <div id="products">
          <ProductGrid products={products} />
        </div>
        <CustomerReviews />
        <Features />
      </main>
      <Footer />
      <CartSidebar />
      <BackToTop />
    </div>
  )
}
