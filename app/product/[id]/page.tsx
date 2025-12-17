"use client"

import { use, useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Truck, Shield, ArrowLeft, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/components/toast"
import { ProductCard } from "@/components/product-card"
import { getProduct, getProducts } from "@/lib/shopify"
import type { ShopifyProduct } from "@/lib/shopify/types"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { t } = useLanguage()
  const { addToCart, toggleWishlist, isInWishlist } = useCart()
  const { showToast, ToastContainer } = useToast()
  const [product, setProduct] = useState<ShopifyProduct | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<ShopifyProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productData = await getProduct(resolvedParams.id)
        if (!productData) {
          notFound()
        }
        setProduct(productData)

        // Fetch related products
        const allProducts = await getProducts({ first: 8 })
        const related = allProducts
          .filter((p) => p.productType === productData.productType && p.handle !== productData.handle)
          .slice(0, 4)
        setRelatedProducts(related)
      } catch (error) {
        console.error("Error fetching product:", error)
        setError(error instanceof Error ? error.message : "Failed to load product")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [resolvedParams.id])

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-8 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-8 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Tuotteen lataus epäonnistui</AlertTitle>
              <AlertDescription>
                <p>Shopify-yhteys epäonnistui. Tarkista Storefront API -asetukset.</p>
                <p className="text-xs mt-2 opacity-80">{error}</p>
              </AlertDescription>
            </Alert>
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Palaa etusivulle
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  const isLiked = isInWishlist(product.handle)
  const productName = product.title
  const price = Number.parseFloat(product.priceRange.minVariantPrice.amount)
  const imageUrl = product.images.edges[0]?.node.url || "/placeholder.svg"

  const handleAddToCart = () => {
    addToCart({
      id: product.handle,
      title: product.title,
      price: price,
      image: imageUrl,
      variantId: product.variants[0]?.id,
    })
    showToast(t.cart.addedToCart, "success")
  }

  const handleToggleWishlist = () => {
    toggleWishlist(product.handle)
    if (!isLiked) {
      showToast(t.wishlist.added, "wishlist")
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                {t.productDetail.backToShop}
              </Link>
            </Button>
          </div>

          {/* Product Details */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 mb-16">
            {/* Image Gallery */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
              <Image src={imageUrl || "/placeholder.svg"} alt={productName} fill className="object-cover" />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold text-balance mb-4">{productName}</h1>
              </div>

              <p className="text-5xl font-bold text-primary">{price.toFixed(2)} €</p>

              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{product.description}</p>

              <div className="space-y-3">
                <Button size="lg" className="w-full gap-2 text-lg h-14" onClick={handleAddToCart}>
                  <ShoppingCart className="h-5 w-5" />
                  {t.products.addToCart}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 text-lg h-14 bg-transparent"
                  onClick={handleToggleWishlist}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-primary text-primary" : ""}`} />
                  {isLiked ? t.wishlist.removeFromWishlist : t.wishlist.addToWishlist}
                </Button>
              </div>

              {/* Product Features */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm">{t.productDetail.freeShipping}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">{t.productDetail.returns}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">{t.productDetail.relatedProducts}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
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
