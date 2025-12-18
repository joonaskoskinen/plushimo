"use client"

import { Button } from "@/components/ui/button"
import { X, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"
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
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in touch-none"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
        <div className="relative w-full max-w-4xl rounded-2xl bg-background shadow-2xl border my-auto max-h-[calc(100vh-2rem)] sm:max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background sticky"
            onClick={onClose}
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <div className="grid gap-4 p-4 sm:gap-6 sm:p-6 md:grid-cols-2 md:p-8 md:gap-8">
            {/* Image Section */}
            <div className="relative w-full">
              <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
                <Image src={imageUrl || "/placeholder.svg"} alt={productName} fill className="object-cover" />
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-balance mb-2">{productName}</h2>
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{price.toFixed(2)} €</p>

              <p className="text-sm sm:text-base text-muted-foreground text-pretty line-clamp-4 sm:line-clamp-none">
                {product.description}
              </p>

              {/* Variant Selector */}
              <VariantSelector
                product={product}
                selectedVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
              />

              <div className="mt-auto space-y-2 sm:space-y-3">
                <Button size="lg" className="w-full gap-2 text-sm sm:text-base h-11 sm:h-12" onClick={handleAddToCart}>
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  {t.products.addToCart}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 bg-transparent text-sm sm:text-base h-11 sm:h-12"
                  onClick={handleToggleWishlist}
                >
                  <Heart className={`h-4 w-4 sm:h-5 sm:w-5 ${isLiked ? "fill-primary text-primary" : ""}`} />
                  <span className="hidden sm:inline">
                    {isLiked ? t.wishlist.removeFromWishlist : t.wishlist.addToWishlist}
                  </span>
                  <span className="sm:hidden">{isLiked ? "Poista" : "Lisää"}</span>
                </Button>

                <p className="text-xs sm:text-sm text-muted-foreground text-center">{t.productDetail.freeShipping}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
