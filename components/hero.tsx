"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-accent/20 py-20 lg:py-32">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🧸</div>
        <div className="absolute bottom-20 right-20 text-8xl">💕</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">✨</div>
        <div className="absolute bottom-1/3 left-1/3 text-7xl">🎀</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left relative z-10">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-top-6 duration-700 delay-150">
              {t.hero.title}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty sm:text-xl animate-in fade-in slide-in-from-top-8 duration-700 delay-300">
              {t.hero.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button size="lg" className="gap-2 text-base transition-all hover:gap-3 hover:scale-105 group">
                {t.hero.shopButton} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[500px] animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-bounce-gentle">
                <Image
                  src="/cute-kawaii-pink-teddy-bear-plushie-with-bow-sitti.jpg"
                  alt={t.hero.imageAlt}
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
