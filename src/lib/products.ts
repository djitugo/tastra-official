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
    tagline: "Tameng matahari yang nggak berasa di kulit.",
    description:
      "Sunscreen broad-spectrum SPF 50+ PA++++ dengan tekstur ringan, no white-cast, dan diformulasikan ulang khusus iklim tropis. Pakai tiap pagi, lupakan kerusakan UV.",
    category: "sunscreen",
    price: 150150,
    originalPrice: 273000,
    images: ["/products/uv-protector.webp", "/products/uv-protector-2.webp", "/products/sunscreen-siluet.webp"],
    bestFor: ["Semua jenis kulit", "Kulit sensitif", "Pemakaian harian"],
    ingredients: ["Niacinamide 4%", "Zinc Oxide", "Vitamin E", "Centella Asiatica"],
    howTo: [
      "Pakai pagi hari, jadi langkah skincare terakhir sebelum makeup.",
      "Aplikasikan minimal dua ruas jari ke seluruh wajah dan leher.",
      "Re-apply setiap 2 jam saat aktivitas outdoor.",
    ],
    size: "30ml",
  },
  {
    slug: "moisturizer",
    name: "Moisturizer",
    tagline: "Hidrasi 24 jam tanpa lengket. Titik.",
    description:
      "Moisturizer water-based yang langsung meresap. Memperkuat skin barrier, mengunci kelembapan, dan bikin kulit bouncy tiap kali bercermin.",
    category: "moisturizer",
    price: 51150,
    originalPrice: 93000,
    images: ["/products/moisturizer.webp", "/products/moisturizer-2.webp"],
    bestFor: ["Kulit kering", "Kulit kombinasi", "Setelah eksfoliasi"],
    ingredients: ["Hyaluronic Acid", "Ceramide", "Squalane", "Panthenol"],
    howTo: [
      "Apply pagi & malam setelah toner/serum.",
      "Tepuk-tepuk halus, jangan digosok.",
      "Lanjut sunscreen di pagi hari.",
    ],
    size: "50ml",
  },
  {
    slug: "facial-wash",
    name: "Facial Wash",
    tagline: "Cuci muka yang nggak nyiksa.",
    description:
      "Cleanser low-pH dengan busa lembut. Bersih maksimal tanpa bikin kulit ketarik. Aman untuk pemakaian dua kali sehari.",
    category: "cleanser",
    price: 55000,
    originalPrice: 100000,
    images: ["/products/facial-wash.webp", "/products/facial-wash-2.webp"],
    bestFor: ["Pagi & malam", "Setelah olahraga", "Semua jenis kulit"],
    ingredients: ["Amino Acid Surfactant", "Aloe Vera", "Glycerin", "Green Tea"],
    howTo: [
      "Basahi wajah dengan air biasa.",
      "Tuang seukuran kacang, busakan di tangan.",
      "Pijat lembut 30 detik, bilas bersih.",
    ],
    size: "100ml",
  },
  {
    slug: "complete-glow-collection",
    name: "Complete Glow Collection",
    tagline: "Satu paket, kulit kelar.",
    description:
      "Bundle lengkap: cleanser, moisturizer, dan sunscreen dalam satu set. Ritual pagi-malam yang gampang diingat dan susah dilewatin.",
    category: "package",
    price: 233000,
    originalPrice: 466000,
    images: ["/products/complete-glow.webp", "/products/design-1.webp"],
    bestFor: ["Pemula skincare", "Hadiah", "Travel-friendly"],
    ingredients: ["Bundle isi 3 produk full-size"],
    howTo: [
      "Pagi: Facial Wash → Moisturizer → UV Protector.",
      "Malam: Facial Wash → Moisturizer.",
      "Konsisten 28 hari, lihat bedanya.",
    ],
    size: "3 produk",
    bundle: ["facial-wash", "moisturizer", "uv-protector"],
  },
  {
    slug: "fresh-sunsafe-combo",
    name: "Fresh & SunSafe Combo",
    tagline: "Cuci muka + tameng matahari. Done.",
    description:
      "Duo esensial: Facial Wash buat bersihin, UV Protector buat melindungi. Kombo paling masuk akal buat yang baru mulai.",
    category: "package",
    price: 186500,
    originalPrice: 373000,
    images: ["/products/fresh-sunsafe.webp", "/products/design-2.webp"],
    bestFor: ["Pemula", "Daily kit", "Travel set"],
    ingredients: ["Bundle isi 2 produk full-size"],
    howTo: [
      "Pagi: Facial Wash → UV Protector.",
      "Malam: Facial Wash.",
    ],
    size: "2 produk",
    bundle: ["facial-wash", "uv-protector"],
  },
  {
    slug: "daily-essentials-pack",
    name: "Daily Essentials Pack",
    tagline: "Hidrasi + bersih. Ritual minimum.",
    description:
      "Moisturizer + Facial Wash. Pasangan dasar yang dipakai tiap pagi dan malam. Nggak ribet, nggak banyak step.",
    category: "package",
    price: 96500,
    originalPrice: 193000,
    images: ["/products/daily-essentials.webp", "/products/design-3.webp"],
    bestFor: ["Minimalist routine", "Cocok semua usia", "Refill bulanan"],
    ingredients: ["Bundle isi 2 produk full-size"],
    howTo: [
      "Pagi: Facial Wash → Moisturizer.",
      "Malam: Facial Wash → Moisturizer.",
    ],
    size: "2 produk",
    bundle: ["facial-wash", "moisturizer"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getByCategory(cat: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}

export const CATEGORIES: { slug: Category; label: string }[] = [
  { slug: "sunscreen", label: "Sunscreen" },
  { slug: "moisturizer", label: "Moisturizer" },
  { slug: "cleanser", label: "Cleanser" },
  { slug: "package", label: "Package" },
];
