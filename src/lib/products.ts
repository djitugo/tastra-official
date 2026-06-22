export type Category = "sunscreen" | "moisturizer" | "cleanser" | "package";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  price: number;
  originalPrice: number;
  images: string[];
  bestFor: string[];
  ingredients: string[];
  howTo: string[];
  size: string;
  bundle?: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "uv-protector",
    name: "UV Protector",
    tagline: "Sun shield so light you forget it is there.",
    description:
      "A broad-spectrum SPF 50+ PA++++ sunscreen with a featherlight texture, zero white cast, and a formula rebuilt for tropical weather. Wear it every morning and forget about UV damage.",
    category: "sunscreen",
    price: 150150,
    originalPrice: 273000,
    images: ["/products/uv-protector.webp", "/products/uv-protector-2.webp", "/products/sunscreen-siluet.webp"],
    bestFor: ["All skin types", "Sensitive skin", "Daily wear"],
    ingredients: ["Niacinamide 4%", "Zinc Oxide", "Vitamin E", "Centella Asiatica"],
    howTo: [
      "Apply in the morning as the last step before makeup.",
      "Use at least two finger lengths across face and neck.",
      "Reapply every 2 hours during outdoor activity.",
    ],
    size: "30ml",
  },
  {
    slug: "moisturizer",
    name: "Moisturizer",
    tagline: "24 hour hydration with no sticky finish. Period.",
    description:
      "A water based moisturizer that absorbs on contact. It strengthens the skin barrier, locks in moisture, and leaves skin bouncy every time you look in the mirror.",
    category: "moisturizer",
    price: 51150,
    originalPrice: 93000,
    images: ["/products/moisturizer.webp", "/products/moisturizer-2.webp"],
    bestFor: ["Dry skin", "Combination skin", "After exfoliation"],
    ingredients: ["Hyaluronic Acid", "Ceramide", "Squalane", "Panthenol"],
    howTo: [
      "Apply morning and night after toner or serum.",
      "Pat gently, do not rub.",
      "Follow with sunscreen in the morning.",
    ],
    size: "50ml",
  },
  {
    slug: "facial-wash",
    name: "Facial Wash",
    tagline: "A cleanse that never leaves skin tight.",
    description:
      "A low pH cleanser with a soft foam. It clears the day without stripping your skin, gentle enough for twice daily use.",
    category: "cleanser",
    price: 55000,
    originalPrice: 100000,
    images: ["/products/facial-wash.webp", "/products/facial-wash-2.webp"],
    bestFor: ["Morning and night", "After workouts", "All skin types"],
    ingredients: ["Amino Acid Surfactant", "Aloe Vera", "Glycerin", "Green Tea"],
    howTo: [
      "Wet your face with lukewarm water.",
      "Dispense a pea sized amount and lather in your hands.",
      "Massage gently for 30 seconds, then rinse clean.",
    ],
    size: "100ml",
  },
  {
    slug: "complete-glow-collection",
    name: "Complete Glow Collection",
    tagline: "One set, skin sorted.",
    description:
      "The full routine in one box: cleanser, moisturizer, and sunscreen. A morning and night ritual that is easy to remember and hard to skip.",
    category: "package",
    price: 233000,
    originalPrice: 466000,
    images: ["/products/complete-glow.webp", "/products/design-1.webp"],
    bestFor: ["Skincare beginners", "Gifting", "Travel friendly"],
    ingredients: ["Bundle of 3 full size products"],
    howTo: [
      "Morning: Facial Wash, Moisturizer, UV Protector.",
      "Night: Facial Wash, Moisturizer.",
      "Stay consistent for 28 days and see the difference.",
    ],
    size: "3 products",
    bundle: ["facial-wash", "moisturizer", "uv-protector"],
  },
  {
    slug: "fresh-sunsafe-combo",
    name: "Fresh and SunSafe Combo",
    tagline: "Cleanse plus sun shield. Done.",
    description:
      "The two essentials: Facial Wash to clear, UV Protector to defend. The most sensible duo for anyone just starting out.",
    category: "package",
    price: 186500,
    originalPrice: 373000,
    images: ["/products/fresh-sunsafe.webp", "/products/design-2.webp"],
    bestFor: ["Beginners", "Daily kit", "Travel set"],
    ingredients: ["Bundle of 2 full size products"],
    howTo: [
      "Morning: Facial Wash, then UV Protector.",
      "Night: Facial Wash.",
    ],
    size: "2 products",
    bundle: ["facial-wash", "uv-protector"],
  },
  {
    slug: "daily-essentials-pack",
    name: "Daily Essentials Pack",
    tagline: "Hydrate plus cleanse. The minimum ritual.",
    description:
      "Moisturizer plus Facial Wash. The base pair you reach for morning and night. No fuss, no extra steps.",
    category: "package",
    price: 96500,
    originalPrice: 193000,
    images: ["/products/daily-essentials.webp", "/products/design-3.webp"],
    bestFor: ["Minimalist routine", "Suits all ages", "Monthly refill"],
    ingredients: ["Bundle of 2 full size products"],
    howTo: [
      "Morning: Facial Wash, then Moisturizer.",
      "Night: Facial Wash, then Moisturizer.",
    ],
    size: "2 products",
    bundle: ["facial-wash", "moisturizer"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getByCategory(cat: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS.filter((p) =>
    [p.name, p.tagline, p.category, p.description, ...p.ingredients]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

export const CATEGORIES: { slug: Category; label: string }[] = [
  { slug: "sunscreen", label: "Sunscreen" },
  { slug: "moisturizer", label: "Moisturizer" },
  { slug: "cleanser", label: "Cleanser" },
  { slug: "package", label: "Package" },
];
