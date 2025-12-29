"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { Heart, Users, Sparkles, Award } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Heart,
      title: t.aboutPage.values.love.title,
      description: t.aboutPage.values.love.description,
    },
    {
      icon: Users,
      title: t.aboutPage.values.community.title,
      description: t.aboutPage.values.community.description,
    },
    {
      icon: Sparkles,
      title: t.aboutPage.values.materials.title,
      description: t.aboutPage.values.materials.description,
    },
    {
      icon: Award,
      title: t.aboutPage.values.satisfaction.title,
      description: t.aboutPage.values.satisfaction.description,
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
                {t.aboutPage.title}
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{t.aboutPage.intro}</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src="/cozy-plushie-collection-on-shelves.jpg"
                  alt="Our plushie collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  {t.aboutPage.story.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{t.aboutPage.story.p1}</p>
                <p className="text-muted-foreground leading-relaxed">{t.aboutPage.story.p2}</p>
                <p className="text-muted-foreground leading-relaxed">{t.aboutPage.story.p3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">
                {t.aboutPage.values.title}
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">{t.aboutPage.values.subtitle}</p>
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
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{t.aboutPage.cta.title}</h2>
              <p className="text-lg text-muted-foreground text-pretty">{t.aboutPage.cta.description}</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/">{t.aboutPage.cta.browseButton}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{t.aboutPage.cta.contactButton}</Link>
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
