import type { MetadataRoute } from "next"
import { getProducts } from "@/lib/shopify"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://plushimo.com"

  // Staattiset sivut
  const routes = ["", "/about", "/wishlist"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Tuotesivut
  try {
    const products = await getProducts({ first: 100 })
    const productRoutes = products.map((product) => ({
      url: `${baseUrl}/product/${product.handle}`,
      lastModified: new Date(product.updatedAt).toISOString(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    }))

    return [...routes, ...productRoutes]
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return routes
  }
}
