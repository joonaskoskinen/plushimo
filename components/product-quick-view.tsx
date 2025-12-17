"use client"

import { Button } from "@/components/ui/button"
import { X, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/components/toast"
import type { ShopifyProduct, ProductVariant } from "@/lib/shopify/types"
import { VariantSelector } from "@/components/variant-selector"
import { useState } from "react"

interface ProductQuickViewProps {
  product: ShopifyProduct
  onClose: () => void
}

export function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const { t } = useLanguage()
  const { addToCart, toggleWishlist, isInWishlist } = useCart()
  const { showToast } = useToast()
  const isLiked = isInWishlist(product.handle)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(product.variants[0] || null)

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

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in" onClick={onClose} />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <div className="relative mx-4 rounded-2xl bg-background shadow-2xl border">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
            {/* Image Section */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
              <Image src={imageUrl || "/placeholder.svg"} alt={productName} fill className="object-cover" />
            </div>

            {/* Details Section */}
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-3xl font-bold text-balance mb-2">{productName}</h2>
              </div>

              <p className="text-4xl font-bold text-primary">{price.toFixed(2)} €</p>

              <p className="text-muted-foreground text-pretty">{product.description}</p>

              {/* Variant Selector */}
              <VariantSelector
                product={product}
                selectedVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
              />

              <div className="mt-auto space-y-3">
                <Button size="lg" className="w-full gap-2" onClick={handleAddToCart}>
                  <ShoppingCart className="h-5 w-5" />
                  {t.products.addToCart}
                </Button>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 gap-2 bg-transparent"
                    onClick={handleToggleWishlist}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? "fill-primary text-primary" : ""}`} />
                    {isLiked ? t.wishlist.removeFromWishlist : t.wishlist.addToWishlist}
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href={`/product/${product.handle}`}>{t.productDetail.viewFull}</Link>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">{t.productDetail.freeShipping}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
