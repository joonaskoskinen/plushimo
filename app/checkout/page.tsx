"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { createCheckoutSession } from "@/app/actions/checkout"
import { Button } from "@/components/ui/button"
import { Loader2, ShoppingBag, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart()
  const { t } = useLanguage()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Redirect if cart is empty
    if (cart.length === 0) {
      router.push("/products")
      return
    }

    // Automatically start checkout process
    handleCheckout()
  }, [])

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await createCheckoutSession(cart)

      if (result.success && result.checkoutUrl) {
        // Clear local cart before redirecting
        clearCart()
        // Redirect to Shopify checkout
        window.location.href = result.checkoutUrl
      } else {
        setError(result.error || "Failed to create checkout session")
        setIsLoading(false)
      }
    } catch (err) {
      console.error("[v0] Checkout error:", err)
      setError("An unexpected error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  if (cart.length === 0 && !isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center space-y-6">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/50" />
          <h1 className="text-2xl font-bold">{t.cart?.empty || "Your cart is empty"}</h1>
          <Button asChild>
            <Link href="/products">{t.cart?.continueShopping || "Continue Shopping"}</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        {error ? (
          <div className="text-center space-y-6">
            <AlertCircle className="h-16 w-16 mx-auto text-destructive" />
            <h1 className="text-2xl font-bold">Checkout Error</h1>
            <p className="text-muted-foreground">{error}</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleCheckout} disabled={isLoading}>
                Try Again
              </Button>
              <Button variant="outline" asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <Loader2 className="h-16 w-16 mx-auto animate-spin text-primary" />
            <h1 className="text-2xl font-bold">Redirecting to Checkout...</h1>
            <p className="text-muted-foreground">
              Please wait while we prepare your secure checkout session with Shopify.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Total: {cartTotal.toFixed(2)} €</p>
              <p>{cart.length} items</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
