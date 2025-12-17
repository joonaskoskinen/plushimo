"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import type { ShopifyProduct, ProductVariant, ProductOption } from "@/lib/shopify/types"

interface VariantSelectorProps {
  product: ShopifyProduct
  selectedVariant: ProductVariant | null
  onVariantChange: (variant: ProductVariant) => void
}

export function VariantSelector({ product, selectedVariant, onVariantChange }: VariantSelectorProps) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    // Initialize with the first variant's options
    const initialOptions: Record<string, string> = {}
    if (selectedVariant) {
      selectedVariant.selectedOptions.forEach((option) => {
        initialOptions[option.name] = option.value
      })
    } else if (product.variants[0]) {
      product.variants[0].selectedOptions.forEach((option) => {
        initialOptions[option.name] = option.value
      })
    }
    return initialOptions
  })

  // Find matching variant based on selected options
  const findMatchingVariant = useMemo(() => {
    return (options: Record<string, string>) => {
      return product.variants.find((variant) => {
        return variant.selectedOptions.every((option) => options[option.name] === option.value)
      })
    }
  }, [product.variants])

  const handleOptionChange = (optionName: string, value: string) => {
    const newOptions = {
      ...selectedOptions,
      [optionName]: value,
    }
    setSelectedOptions(newOptions)

    const matchingVariant = findMatchingVariant(newOptions)
    if (matchingVariant) {
      onVariantChange(matchingVariant)
    }
  }

  // Check if a specific option value is available
  const isOptionAvailable = (optionName: string, value: string) => {
    const testOptions = {
      ...selectedOptions,
      [optionName]: value,
    }
    const matchingVariant = findMatchingVariant(testOptions)
    return matchingVariant?.availableForSale ?? false
  }

  if (product.options.length === 0 || product.variants.length <= 1) {
    return null
  }

  return (
    <div className="space-y-6">
      {product.options.map((option: ProductOption) => (
        <div key={option.id} className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">{option.name}</label>
            <span className="text-sm text-muted-foreground">{selectedOptions[option.name]}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {option.values.map((value) => {
              const isSelected = selectedOptions[option.name] === value
              const isAvailable = isOptionAvailable(option.name, value)

              return (
                <Button
                  key={value}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  className={`min-w-[3rem] ${!isAvailable ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={!isAvailable}
                  onClick={() => handleOptionChange(option.name, value)}
                >
                  {value}
                </Button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
