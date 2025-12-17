"use client"

import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const { t } = useLanguage()

  const categories = [{ key: "all", label: t.filters.all, icon: Gift }]

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
      {categories.map((category) => (
        <Button
          key={category.key}
          variant={activeCategory === category.key ? "default" : "outline"}
          size="lg"
          className={`gap-2 transition-all duration-300 ${
            activeCategory === category.key ? "scale-105 shadow-lg" : "hover:scale-105 bg-transparent"
          }`}
          onClick={() => onCategoryChange(category.key)}
        >
          <category.icon className="h-4 w-4" />
          {category.label}
        </Button>
      ))}
    </div>
  )
}
