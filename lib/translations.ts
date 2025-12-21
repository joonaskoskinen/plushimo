export const translations = {
  en: {
    nav: {
      shop: "Shop",
      about: "About",
    },
    header: {
      favorites: "Favorites",
      cart: "Shopping Cart",
      menu: "Menu",
    },
    hero: {
      badge: "",
      title: "Love in Every Hug",
      description:
        "Discover your perfect cuddle companion from our wide selection of adorable, high-quality plushies. Each plushie is crafted with love.",
      shopButton: "Browse Collection",
      imageAlt: "Cute teddy bear plushie",
    },
    products: {
      title: "Our Favorites",
      subtitle: "Find your next cuddly friend",
      items: {
        dreamBear: "Dream Bear",
        cloudBunny: "Cloud Bunny",
        starKitty: "Star Kitty",
        softPanda: "Soft Panda",
        unicornDream: "Unicorn Dream",
        heartPuppy: "Heart Puppy",
        fluffySheep: "Fluffy Sheep",
        roseFox: "Rose Fox",
      },
      addToCart: "Add to Cart",
      quickView: "Quick View",
    },
    features: {
      quality: {
        title: "Premium Quality",
        description: "Every plushie made from the finest materials",
      },
      love: {
        title: "Made with Love",
        description: "Carefully curated selection of super cute characters",
      },
      shipping: {
        title: "Fast Shipping",
        description: "Free shipping on orders over €50",
      },
      safe: {
        title: "Safe Shopping",
        description: "30-day return policy and secure payment",
      },
    },
    footer: {
      description: "Lovable plushies for every home. Creating happiness and joy one hug at a time.",
      shop: {
        title: "Shop",
        all: "All Products",
        bestsellers: "Bestsellers",
      },
      about: {
        title: "About",
        about: "About Us",
        contact: "Contact",
        shipping: "Shipping",
      },
      customer: {
        title: "Customer Service",
        returns: "Returns",
        privacy: "Privacy",
        terms: "Terms",
      },
      copyright: "Made with",
      contact: "Contact: support@plushimo.com",
    },
    cart: {
      title: "Shopping Cart",
      empty: "Your cart is empty",
      continueShopping: "Continue Shopping",
      total: "Total",
      checkout: "Checkout",
      addedToCart: "Added to cart!",
    },
    wishlist: {
      added: "Added to wishlist!",
      removed: "Removed from wishlist",
      addToWishlist: "Add to Wishlist",
      removeFromWishlist: "Remove from Wishlist",
    },
    productDetail: {
      reviews: "reviews",
      viewFull: "View Full Details",
      freeShipping: "Free shipping on orders over €50",
      returns: "30-day return policy",
      backToShop: "Back to Shop",
      relatedProducts: "You Might Also Like",
    },
    filters: {
      all: "All Products",
    },
    reviews: {
      title: "What Our Customers Say",
      subtitle: "Real reviews from real plushie lovers",
      review1:
        "I ordered this as a gift and honestly didn’t expect it to be this soft. The plush looks exactly like the photos and the quality feels really good. Shipping took a bit, but it arrived well packaged and in perfect condition.",
      review2: "Bought one on a whim and ended up ordering another a week later. The material feels durable and not cheap at all. Customer support also replied quickly when I had a question about shipping.",
      review3:
        "Super cute and very cozy. Slightly bigger than I expected, which was actually a nice surprise. Took a little while to arrive, but overall I’m really happy with the purchase.",
    },
    trust: {
      secure: "Hand-Picked With Care",
      freeShipping: "Loved by Our Customers",
      payment: "Safe & Secure Checkout",
      quality: "Quality You Can Feel",
    },
  },
}

export type Language = keyof typeof translations
export type Translations = typeof translations.en
