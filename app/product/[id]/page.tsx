import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import ProductPageClient from "./product-page-client"
import { getProduct } from "@/lib/shopify"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const productId = params.id

  try {
    const product = await getProduct(productId)
    if (!product) {
      return {
        title: "Tuotetta ei löydy",
        description: "Haettua tuotetta ei löytynyt Plushimosta.",
      }
    }
    return {
      title: `${product.title} | Plushimo`,
      description: product.description || `Osta ${product.title} Plushimosta. Laadukkaita pehmoleluja.`,
      openGraph: {
        title: `${product.title} | Plushimo`,
        description: product.description || `Osta ${product.title} Plushimosta.`,
        images: [
          {
            url: product.images.edges[0]?.node.url || "/plushimo-logo.png",
            width: 1200,
            height: 630,
            alt: product.title,
          },
        ],
      },
    }
  } catch (error) {
    console.error("Error fetching product for metadata:", error)
    return {
      title: "Lataa tuotetta...",
      description: "Katso tuotteen tiedot Plushimosta",
    }
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id

  let product = null
  let error: string | null = null
  try {
    product = await getProduct(productId)
  } catch (e) {
    console.error("Error fetching product on server:", e)
    error = e instanceof Error ? e.message : "Failed to load product"
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 lg:py-12">
        <ProductPageClient initialProduct={product} initialError={error} productId={productId} />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}
