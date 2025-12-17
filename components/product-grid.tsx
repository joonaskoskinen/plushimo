"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { ProductQuickView } from "@/components/product-quick-view"
import { CategoryFilter } from "@/components/category-filter"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "./scroll-reveal"
import { ProductCardSkeleton } from "./product-card-skeleton"
import type { ShopifyProduct } from "@/lib/shopify/types"

interface ProductGridProps {
  products: ShopifyProduct[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const { t } = useLanguage()
  const [selectedProduct, setSelectedProduct] = useState<ShopifyProduct | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(false)

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.productType?.toLowerCase() === activeCategory.toLowerCase())

  const handleCategoryChange = (category: string) => {
    setIsLoading(true)
    setActiveCategory(category)
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
                {t.products.title}
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">{t.products.subtitle}</p>
            </div>
          </ScrollReveal>

          <CategoryFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => <ProductCardSkeleton key={index} />)
              : filteredProducts.map((product, index) => (
                  <ScrollReveal key={product.id} delay={index * 50}>
                    <ProductCard product={product} onQuickView={setSelectedProduct} />
                  </ScrollReveal>
                ))}
          </div>

          {filteredProducts.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {activeCategory === "all"
                  ? "No products available. Please add products to your Shopify store."
                  : "No products found in this category."}
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedProduct && <ProductQuickView product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  )
}
