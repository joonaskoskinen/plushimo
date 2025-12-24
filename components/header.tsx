"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Menu, Tag } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"

export function Header() {
  const { t } = useLanguage()
  const { cartCount, wishlist, setIsCartOpen } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium flex items-center justify-center gap-2">
            <Tag className="h-4 w-4" />
            Use code <strong className="font-bold">PLUSHIMO10</strong> for 10% off your first order!
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
              <Image
                src="/plushimo-logo.png"
                alt="Plushimo"
                width={180}
                height={180}
                className="h-16 w-auto"
                priority
                style={{ objectFit: "contain" }}
              />
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/about"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/shipping"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t.nav.shipping}
              </Link>
              <Link
                href="/returns"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t.nav.returns}
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {wishlist.length}
                  </span>
                )}
                <span className="sr-only">{t.header.favorites}</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative transition-transform hover:scale-110"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground animate-in zoom-in">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">{t.header.cart}</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">{t.header.menu}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
