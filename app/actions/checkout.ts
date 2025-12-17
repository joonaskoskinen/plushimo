"use server"

import { createCart, addCartLines } from "@/lib/shopify"

interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
  variantId?: string
}

export async function createCheckoutSession(cartItems: CartItem[]) {
  try {
    // Create a new Shopify cart
    const cart = await createCart()

    // Transform cart items to Shopify cart lines format
    const lines = cartItems.map((item) => ({
      merchandiseId: item.variantId || item.id,
      quantity: item.quantity,
    }))

    // Add all items to the Shopify cart
    const updatedCart = await addCartLines(cart.id, lines)

    // Return the checkout URL
    return {
      success: true,
      checkoutUrl: updatedCart.checkoutUrl,
    }
  } catch (error) {
    console.error("[v0] Checkout error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create checkout session",
    }
  }
}
