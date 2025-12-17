import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { Ruler, Package, Info } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Size Guide - Plushimo",
  description: "Find the perfect size plushie with our comprehensive size guide.",
}

export default function SizeGuidePage() {
  const sizes = [
    {
      name: "Small",
      size: "15-25 cm",
      description: "Perfect for desks, shelves, or as a keychain companion",
      image: "/small-plushie-size-comparison.jpg",
    },
    {
      name: "Medium",
      size: "25-40 cm",
      description: "Great for cuddling and ideal for kids and adults alike",
      image: "/medium-plushie-size-comparison.jpg",
    },
    {
      name: "Large",
      size: "40-60 cm",
      description: "Maximum cuddle factor! Perfect for big hugs and comfort",
      image: "/large-plushie-size-comparison.jpg",
    },
    {
      name: "Extra Large",
      size: "60+ cm",
      description: "Statement pieces that become part of your furniture",
      image: "/xlarge-plushie-size-comparison.jpg",
    },
  ]

  const tips = [
    {
      icon: Ruler,
      title: "Measure Twice",
      description: "Check product dimensions carefully. All measurements are approximate and may vary slightly.",
    },
    {
      icon: Package,
      title: "Consider Space",
      description: "Think about where your plushie will live. Larger plushies need more room to shine!",
    },
    {
      icon: Info,
      title: "Age Appropriate",
      description: "Smaller plushies may contain parts unsuitable for children under 3 years old.",
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
                Size Guide
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Find your perfect plushie size! Use this guide to understand how big each plushie will be in real life.
              </p>
            </div>
          </div>
        </section>

        {/* Size Comparison */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">Size Comparison</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                All sizes are measured from top to bottom when standing
              </p>
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
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">Helpful Tips</h2>
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
                Quick Reference
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="pb-3 text-left font-semibold">Size</th>
                          <th className="pb-3 text-left font-semibold">Height</th>
                          <th className="pb-3 text-left font-semibold">Best For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-3 font-medium">Small</td>
                          <td className="py-3 text-muted-foreground">15-25 cm</td>
                          <td className="py-3 text-muted-foreground">Desk buddies, collecting</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">Medium</td>
                          <td className="py-3 text-muted-foreground">25-40 cm</td>
                          <td className="py-3 text-muted-foreground">Everyday cuddles, gifts</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">Large</td>
                          <td className="py-3 text-muted-foreground">40-60 cm</td>
                          <td className="py-3 text-muted-foreground">Serious cuddling, comfort</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">Extra Large</td>
                          <td className="py-3 text-muted-foreground">60+ cm</td>
                          <td className="py-3 text-muted-foreground">Statement pieces, decor</td>
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
