"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Plushimo</h3>
            <p className="text-sm text-muted-foreground">{t.footer.description}</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t.footer.shop.title}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.shop.all}
                </Link>
              </li>
              <li>
                <Link href="/bestsellers" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.shop.bestsellers}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t.footer.about.title}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.about.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.about.contact}
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.about.shipping}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t.footer.customer.title}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.customer.returns}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.customer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.customer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            {t.footer.copyright} <Heart className="h-4 w-4 fill-primary text-primary" /> © {new Date().getFullYear()}{" "}
            Plushimo
          </p>
          <p className="mt-2">{t.footer.contact}</p>
        </div>
      </div>
    </footer>
  )
}
