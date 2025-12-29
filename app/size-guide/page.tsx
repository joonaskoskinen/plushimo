"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { Ruler, Package, Info } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export default function SizeGuidePage() {
  const { t } = useLanguage()

  const sizes = [
    {
      name: t.sizeGuidePage.comparison.sizes.small.name,
      size: t.sizeGuidePage.comparison.sizes.small.size,
      description: t.sizeGuidePage.comparison.sizes.small.description,
      image: "/small-plushie-size-comparison.jpg",
    },
    {
      name: t.sizeGuidePage.comparison.sizes.medium.name,
      size: t.sizeGuidePage.comparison.sizes.medium.size,
      description: t.sizeGuidePage.comparison.sizes.medium.description,
      image: "/medium-plushie-size-comparison.jpg",
    },
    {
      name: t.sizeGuidePage.comparison.sizes.large.name,
      size: t.sizeGuidePage.comparison.sizes.large.size,
      description: t.sizeGuidePage.comparison.sizes.large.description,
      image: "/large-plushie-size-comparison.jpg",
    },
    {
      name: t.sizeGuidePage.comparison.sizes.xlarge.name,
      size: t.sizeGuidePage.comparison.sizes.xlarge.size,
      description: t.sizeGuidePage.comparison.sizes.xlarge.description,
      image: "/xlarge-plushie-size-comparison.jpg",
    },
  ]

  const tips = [
    {
      icon: Ruler,
      title: t.sizeGuidePage.tips.measure.title,
      description: t.sizeGuidePage.tips.measure.description,
    },
    {
      icon: Package,
      title: t.sizeGuidePage.tips.space.title,
      description: t.sizeGuidePage.tips.space.description,
    },
    {
      icon: Info,
      title: t.sizeGuidePage.tips.age.title,
      description: t.sizeGuidePage.tips.age.description,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-accent/20 py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl mb-6">
                {t.sizeGuidePage.title}
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">{t.sizeGuidePage.intro}</p>
            </div>
          </div>
        </section>

        {/* Size Comparison */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">
                {t.sizeGuidePage.comparison.title}
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">{t.sizeGuidePage.comparison.subtitle}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sizes.map((size, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg duration-300">
                  <div className="relative aspect-square bg-secondary">
                    <Image
                      src={size.image || "/placeholder.svg"}
                      alt={`${size.name} size plushie`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xl font-bold">{size.name}</h3>
                      <span className="text-lg font-semibold text-primary">{size.size}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{size.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Measurement Tips */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">
                {t.sizeGuidePage.tips.title}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {tips.map((tip, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <tip.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground text-balance">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reference Table */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-8 text-center">
                {t.sizeGuidePage.reference.title}
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="pb-3 text-left font-semibold">{t.sizeGuidePage.reference.headers.size}</th>
                          <th className="pb-3 text-left font-semibold">{t.sizeGuidePage.reference.headers.height}</th>
                          <th className="pb-3 text-left font-semibold">{t.sizeGuidePage.reference.headers.bestFor}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-3 font-medium">{t.sizeGuidePage.comparison.sizes.small.name}</td>
                          <td className="py-3 text-muted-foreground">{t.sizeGuidePage.reference.rows.small.height}</td>
                          <td className="py-3 text-muted-foreground">{t.sizeGuidePage.reference.rows.small.bestFor}</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">{t.sizeGuidePage.comparison.sizes.medium.name}</td>
                          <td className="py-3 text-muted-foreground">{t.sizeGuidePage.reference.rows.medium.height}</td>
                          <td className="py-3 text-muted-foreground">
                            {t.sizeGuidePage.reference.rows.medium.bestFor}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">{t.sizeGuidePage.comparison.sizes.large.name}</td>
                          <td className="py-3 text-muted-foreground">{t.sizeGuidePage.reference.rows.large.height}</td>
                          <td className="py-3 text-muted-foreground">{t.sizeGuidePage.reference.rows.large.bestFor}</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">{t.sizeGuidePage.comparison.sizes.xlarge.name}</td>
                          <td className="py-3 text-muted-foreground">{t.sizeGuidePage.reference.rows.xlarge.height}</td>
                          <td className="py-3 text-muted-foreground">
                            {t.sizeGuidePage.reference.rows.xlarge.bestFor}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}
