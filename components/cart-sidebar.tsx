"use client"

import { Button } from "@/components/ui/button"
import { X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function CartSidebar() {
  const { cart, cartTotal, cartCount, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()
  const { t } = useLanguage()

  if (!isCartOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-6">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <h2 className="text-xl font-bold">
                {t.cart.title} ({cartCount})
              </h2>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
                <p className="text-lg text-muted-foreground">{t.cart.empty}</p>
                <Button onClick={() => setIsCartOpen(false)}>{t.cart.continueShopping}</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-sm">{item.title}</h3>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-md border">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="font-bold text-primary">{(item.price * item.quantity).toFixed(2)} €</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>{t.cart.total}</span>
                <span className="text-primary">{cartTotal.toFixed(2)} €</span>
              </div>
              <Button className="w-full" size="lg" asChild>
                <Link href="/checkout">{t.cart.checkout}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
