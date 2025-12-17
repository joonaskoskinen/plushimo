"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "./scroll-reveal"

export function Newsletter() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-8 text-center lg:p-12 transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{t.newsletter.title}</h2>
            <p className="mb-8 text-lg text-muted-foreground text-pretty">{t.newsletter.description}</p>
            <form className="flex flex-col gap-3 sm:flex-row sm:gap-2">
              <Input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="flex-1 bg-background transition-all focus:scale-[1.02]"
              />
              <Button type="submit" size="lg" className="sm:w-auto transition-all hover:scale-105">
                {t.newsletter.button}
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
