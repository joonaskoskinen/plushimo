import type { ShopifyProduct } from "./types"

const productImage = (url: string, altText: string) => ({
  node: { url, altText, thumbhash: null },
})

const variant = (handle: string, title: string, amount: string) => ({
  id: `mock-${handle}-variant`,
  title,
  availableForSale: true,
  selectedOptions: [{ name: "Koko", value: title }],
  price: { amount, currencyCode: "EUR" },
})

export const mockProducts: ShopifyProduct[] = [
  {
    id: "mock-boba-buddy",
    title: "Boba Buddy",
    description: "Suloinen boba-teemainen pehmolelu, joka tuo iloa jokaiseen päivään.",
    descriptionHtml: "<p>Suloinen boba-teemainen pehmolelu.</p>",
    handle: "boba-buddy",
    availableForSale: true,
    productType: "Pehmolelut",
    options: [{ id: "mock-boba-size", name: "Koko", values: ["Yksi koko"] }],
    images: { edges: [productImage("/images/kawaii-boba-tea-plushie.jpg", "Boba Buddy -pehmolelu")] },
    priceRange: { minVariantPrice: { amount: "24.90", currencyCode: "EUR" } },
    compareAtPriceRange: null,
    variants: [variant("boba-buddy", "Yksi koko", "24.90")],
  },
  {
    id: "mock-cloud-bear",
    title: "Cloud Bear",
    description: "Pehmeä ja rauhoittava pilvinalle halittavaksi päivästä toiseen.",
    descriptionHtml: "<p>Pehmeä ja rauhoittava pilvinalle.</p>",
    handle: "cloud-bear",
    availableForSale: true,
    productType: "Nallet",
    options: [{ id: "mock-cloud-size", name: "Koko", values: ["Yksi koko"] }],
    images: { edges: [productImage("/cozy-plushie-collection-on-shelves.jpg", "Cloud Bear -pehmolelu")] },
    priceRange: { minVariantPrice: { amount: "29.90", currencyCode: "EUR" } },
    compareAtPriceRange: null,
    variants: [variant("cloud-bear", "Yksi koko", "29.90")],
  },
  {
    id: "mock-sweet-panda",
    title: "Sweet Panda",
    description: "Ihanan pehmeä panda, joka sopii täydelliseksi lahjaksi.",
    descriptionHtml: "<p>Ihanan pehmeä panda lahjaksi tai omaksi kaveriksi.</p>",
    handle: "sweet-panda",
    availableForSale: true,
    productType: "Pehmolelut",
    options: [{ id: "mock-panda-size", name: "Koko", values: ["Yksi koko"] }],
    images: { edges: [productImage("/plushimo-cute-plushie-brand-logo.jpg", "Sweet Panda -pehmolelu")] },
    priceRange: { minVariantPrice: { amount: "26.90", currencyCode: "EUR" } },
    compareAtPriceRange: null,
    variants: [variant("sweet-panda", "Yksi koko", "26.90")],
  },
]

export function getMockProduct(handle: string) {
  return mockProducts.find((product) => product.handle === handle) ?? null
}
