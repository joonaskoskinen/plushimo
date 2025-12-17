"use client"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Truck, Shield, ArrowLeft, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/components/toast"
import { ProductCard } from "@/components/product-card"
import { getProduct, getProducts } from "@/lib/shopify"
import type { ShopifyProduct, ProductVariant } from "@/lib/shopify/types"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { VariantSelector } from "@/components/variant-selector"

interface ProductPageClientProps {
  initialProduct: ShopifyProduct | null
  initialError: string | null
  productId: string
}

export default function ProductPageClient({ initialProduct, initialError, productId }: ProductPageClientProps) {
  const { t } = useLanguage()
  const { addToCart, toggleWishlist, isInWishlist } = useCart()
  const { showToast, ToastContainer } = useToast()
  const [product, setProduct] = useState<ShopifyProduct | null>(initialProduct)
  const [relatedProducts, setRelatedProducts] = useState<ShopifyProduct[]>([])
  const [loading, setLoading] = useState(!initialProduct && !initialError)
  const [error, setError] = useState<string | null>(initialError)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)

  useEffect(() => {
    async function fetchProduct() {
      if (!initialProduct && !initialError) {
        setLoading(true)
      }

      try {
        const productData = await getProduct(productId)
        if (!productData) {
          notFound()
        }
        setProduct(productData)
        setSelectedVariant(productData.variants[0] || null)

        document.title = `${productData.title} | Plushimo`
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
          metaDescription.setAttribute(
            "content",
            productData.description || `Osta ${productData.title} Plushimosta. Laadukkaita pehmoleluja.`,
          )
        }

        const allProducts = await getProducts({ first: 8 })
        const related = allProducts
          .filter((p) => p.productType === productData.productType && p.handle !== productData.handle)
          .slice(0, 4)
        setRelatedProducts(related)
      } catch (error) {
        console.error("Error fetching product:", error)
        setError(error instanceof Error ? error.message : "Failed to load product")
        if (!initialProduct) {
          notFound()
        }
      } finally {
        setLoading(false)
      }
    }

    if (!initialProduct && !initialError) {
      fetchProduct()
    } else if (initialProduct && !selectedVariant) {
      setSelectedVariant(initialProduct.variants[0] || null)
    }
  }, [productId, initialProduct, initialError, selectedVariant])

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
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
    )
  }

  if (!product) {
    notFound()
  }

  const isLiked = isInWishlist(product.handle)
  const productName = product.title
  const price = selectedVariant
    ? Number.parseFloat(selectedVariant.price.amount)
    : Number.parseFloat(product.priceRange.minVariantPrice.amount)
  const imageUrl = product.images.edges[0]?.node.url || "/placeholder.svg"

  const handleAddToCart = () => {
    const variantId = selectedVariant?.id

    if (!variantId) {
      showToast("Valitse ensin koko", "error")
      return
    }

    if (!selectedVariant.availableForSale) {
      showToast("Valittu koko ei ole saatavilla", "error")
      return
    }

    addToCart({
      id: product.handle,
      title: product.title,
      price: price,
      image: imageUrl,
      variantId: variantId,
    })
    showToast(t.cart.addedToCart, "success")
  }

  const handleToggleWishlist = () => {
    toggleWishlist(product.handle)
    if (!isLiked) {
      showToast(t.wishlist.added, "wishlist")
    }
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    image: imageUrl,
    description: product.description,
    offers: {
      "@type": "Offer",
      url: typeof window !== "undefined" ? window.location.href : "",
      priceCurrency: "EUR",
      price: price.toFixed(2),
      availability: selectedVariant?.availableForSale ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  }

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

        <div className="mb-6">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              {t.productDetail.backToShop}
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 mb-16">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={productName}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{productName}</h1>
            </div>

            <p className="text-4xl sm:text-5xl font-bold text-primary">{price.toFixed(2)} €</p>

            <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
              {product.description}
            </p>

            <VariantSelector product={product} selectedVariant={selectedVariant} onVariantChange={setSelectedVariant} />

            <div className="space-y-3">
              <Button size="lg" className="w-full gap-2 text-base sm:text-lg h-12 sm:h-14" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5" />
                {t.products.addToCart}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full gap-2 text-base sm:text-lg h-12 sm:h-14 bg-transparent"
                onClick={handleToggleWishlist}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-primary text-primary" : ""}`} />
                {isLiked ? t.wishlist.removeFromWishlist : t.wishlist.addToWishlist}
              </Button>
            </div>

            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{t.productDetail.freeShipping}</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{t.productDetail.returns}</span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">{t.productDetail.relatedProducts}</h2>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  )
}
