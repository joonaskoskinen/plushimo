"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { useToast } from "@/components/toast"
import { getProducts } from "@/lib/shopify"
import type { ShopifyProduct } from "@/lib/shopify/types"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useCart()
  const { t } = useLanguage()
  const { showToast, ToastContainer } = useToast()
  const [wishlistProducts, setWishlistProducts] = useState<ShopifyProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchWishlistProducts() {
      try {
        const allProducts = await getProducts({ first: 50 })
        const filtered = allProducts.filter((p) => wishlist.includes(p.handle))
        setWishlistProducts(filtered)
      } catch (error) {
        console.error("Error fetching wishlist products:", error)
        setError(error instanceof Error ? error.message : "Failed to load products")
      } finally {
        setLoading(false)
      }
    }

    if (wishlist.length > 0) {
      fetchWishlistProducts()
    } else {
      setLoading(false)
    }
  }, [wishlist])

  const handleAddToCart = (product: ShopifyProduct) => {
    const price = Number.parseFloat(product.priceRange.minVariantPrice.amount)
    const imageUrl = product.images.edges[0]?.node.url || "/placeholder.svg"

    addToCart({
      id: product.handle,
      title: product.title,
      price: price,
      image: imageUrl,
      variantId: product.variants[0]?.id,
    })
    showToast(t.cart.addedToCart, "success")
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 lg:py-16 min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{t.header.favorites}</h1>
            <p className="text-muted-foreground">
              {wishlistProducts.length} {wishlistProducts.length === 1 ? "item" : "items"}
            </p>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Tuotteiden lataus epäonnistui</AlertTitle>
              <AlertDescription>
                <p>Shopify-yhteys epäonnistui. Tarkista Storefront API -asetukset.</p>
                <p className="text-xs mt-2 opacity-80">{error}</p>
              </AlertDescription>
            </Alert>
          )}

          {loading ? (
            <p className="text-center text-muted-foreground">Loading...</p>
          ) : wishlistProducts.length === 0 && !error ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Heart className="h-24 w-24 text-muted-foreground/50 mb-6" />
              <h2 className="text-2xl font-semibold mb-3">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">Save your favorite plushies here for later!</p>
              <Button asChild size="lg">
                <Link href="/">Browse Collection</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlistProducts.map((product) => {
                const price = Number.parseFloat(product.priceRange.minVariantPrice.amount)
                const imageUrl = product.images.edges[0]?.node.url || "/placeholder.svg"

                return (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
                  >
                    <div className="relative aspect-square overflow-hidden bg-secondary">
                      <Image
                        src={imageUrl || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                        onClick={() => toggleWishlist(product.handle)}
                      >
                        <Heart className="h-4 w-4 fill-primary text-primary" />
                      </Button>
                    </div>
                    <div className="p-4 space-y-3">
                      <h3 className="font-semibold text-lg text-balance">{product.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{price.toFixed(2)} €</span>
                        <Button size="sm" className="gap-2" onClick={() => handleAddToCart(product)}>
                          <ShoppingCart className="h-4 w-4" />
                          {t.products.addToCart}
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CartSidebar />
      <ToastContainer />
    </div>
  )
}
