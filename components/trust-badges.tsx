"use client"

import { HandHeart, Heart, CreditCard, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TrustBadges() {
  const { t } = useLanguage()

  const badges = [
    { icon: HandHeart, label: t.trust.secure },
    { icon: Heart, label: t.trust.freeShipping },
    { icon: CreditCard, label: t.trust.payment },
    { icon: Sparkles, label: t.trust.quality },
  ]

  return (
    <div className="border-y bg-muted/30 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-center">
              <badge.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
