"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/components/toast"
import { use3DTilt } from "@/hooks/use-3d-tilt"
import { useState } from "react"
import type { ShopifyProduct } from "@/lib/shopify/types"

interface ProductCardProps {
  product: ShopifyProduct
  onQuickView?: (product: ShopifyProduct) => void
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { t } = useLanguage()
  const { addToCart, toggleWishlist, isInWishlist } = useCart()
  const { showToast } = useToast()
  const isLiked = isInWishlist(product.handle)
  const { ref, style } = use3DTilt()
  const [isHovered, setIsHovered] = useState(false)

  const productName = product.title
  const categoryName = product.productType || "Plushies"
  const price = Number.parseFloat(product.priceRange.minVariantPrice.amount)
  const imageUrl = product.images.edges[0]?.node.url || "/placeholder.svg"

  const handleAddToCart = () => {
    const variantId = product.variants[0]?.id

    if (!variantId) {
      showToast("Product not available", "error")
      console.error("[v0] Product has no variants:", product.handle)
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
    <Card
      ref={ref}
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={productName}
            fill
            className={`object-cover transition-all duration-700 ${isHovered ? "scale-125" : "scale-100"}`}
          />

          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
            <Button size="sm" className="gap-2" onClick={() => onQuickView?.(product)}>
              <Eye className="h-4 w-4" />
              {t.products.quickView}
            </Button>
            <Button size="sm" variant="secondary" className="gap-2" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
              {t.products.addToCart}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all hover:scale-110"
            onClick={handleToggleWishlist}
          >
            <Heart
              className={`h-4 w-4 transition-all duration-300 ${
                isLiked ? "fill-primary text-primary scale-110" : "text-foreground"
              }`}
            />
            <span className="sr-only">{t.header.favorites}</span>
          </Button>
          <div className="absolute left-2 top-2 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground">
            {categoryName}
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-balance">{productName}</h3>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">{price.toFixed(2)} €</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
