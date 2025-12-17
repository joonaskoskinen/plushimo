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
import { getProducts } from "@/lib/shopify"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default async function Home() {
  let products = []
  let shopifyError = null

  try {
    products = await getProducts({ first: 12 })
  } catch (error) {
    console.error("Error fetching products:", error)
    shopifyError = error instanceof Error ? error.message : "Unknown error"
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

        {shopifyError && (
          <div className="container mx-auto px-4 py-8">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Shopify Connection Failed</AlertTitle>
              <AlertDescription>
                <div className="space-y-2">
                  <p className="font-semibold">Online Store channel is locked</p>
                  <p>Activate Storefront API in your Shopify admin panel:</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Log in to Shopify Admin</li>
                    <li>
                      Go to <strong>Settings → Apps and sales channels</strong>
                    </li>
                    <li>
                      Click <strong>Develop apps</strong>
                    </li>
                    <li>Create a new app or select an existing one</li>
                    <li>
                      Activate <strong>Storefront API</strong> and grant the following permissions:
                      <ul className="list-disc list-inside ml-4">
                        <li>Read products, variants, and collections</li>
                        <li>Read customer tags</li>
                        <li>Manage checkouts</li>
                      </ul>
                    </li>
                  </ol>
                  <p className="text-xs mt-2 opacity-80">Error: {shopifyError}</p>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        )}

        <ProductGrid products={products} />
        <CustomerReviews />
        <Features />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}
