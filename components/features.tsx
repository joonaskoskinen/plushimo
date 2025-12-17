"use client"

import { Sparkles, Heart, Truck, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "./scroll-reveal"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Sparkles,
      title: t.features.quality.title,
      description: t.features.quality.description,
    },
    {
      icon: Heart,
      title: t.features.love.title,
      description: t.features.love.description,
    },
    {
      icon: Truck,
      title: t.features.shipping.title,
      description: t.features.shipping.description,
    },
    {
      icon: Shield,
      title: t.features.safe.title,
      description: t.features.safe.description,
    },
  ]

  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="flex flex-col items-center text-center gap-4 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:scale-110 group-hover:bg-primary/20 duration-300">
                  <feature.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110 duration-300" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-balance">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
