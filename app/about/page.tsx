import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { Heart, Users, Sparkles, Award } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "About Us - Plushimo",
  description: "Learn about Plushimo's mission to bring joy and comfort through adorable plushies.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every plushie is carefully selected and crafted with attention to detail and quality.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We build lasting relationships with our customers and listen to their feedback.",
    },
    {
      icon: Sparkles,
      title: "Quality Materials",
      description: "Only the softest, safest, and most durable materials for our plushies.",
    },
    {
      icon: Award,
      title: "Customer Satisfaction",
      description: "Your happiness is our priority. We stand behind every product we sell.",
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
                About Plushimo
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                We believe that everyone deserves a cuddly companion to brighten their days. Since 2020, Plushimo has
                been bringing smiles to homes around the world with our carefully curated collection of adorable,
                high-quality plushies.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src="/cozy-plushie-collection-shelf.jpg"
                  alt="Our plushie collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Plushimo was born from a simple idea: everyone needs more hugs in their life. Our founder started
                  collecting plushies as a way to cope with stress and quickly realized the incredible comfort and joy
                  these cuddly companions could bring.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What began as a personal collection has grown into a thriving community of plushie lovers. We work
                  directly with skilled artisans and manufacturers who share our commitment to quality and cuteness.
                  Each plushie in our store is tested and approved by our team to ensure it meets our high standards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, Plushimo is more than just a store - it's a celebration of comfort, joy, and the simple
                  pleasure of a perfect hug.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground text-pretty">What makes Plushimo special</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground text-balance">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Join Our Community</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Discover your perfect cuddly companion today and join our community of plushie lovers.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/">Browse Collection</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}
