export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  cover: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "sunscreen-in-the-tropics",
    title: "Why sunscreen works differently in the tropics",
    excerpt:
      "Heat, humidity, and sweat change how protection behaves. Here is what actually matters when you pick an SPF for Indonesian weather.",
    category: "Education",
    date: "2026-05-02",
    readMinutes: 4,
    cover: "/products/banner-1.webp",
    body: [
      "Most sunscreen advice you read online was written for a temperate climate. In the tropics, the variables are different: stronger UV index year round, constant humidity, and sweat that breaks down films faster.",
      "That is why reapplication matters more here than almost anywhere else. A single morning layer is a starting point, not a full day of protection.",
      "Our UV Protector was built around this reality. It layers cleanly, never turns greasy in the heat, and reapplies without disturbing makeup.",
    ],
  },
  {
    slug: "barrier-first-routine",
    title: "Build a barrier first routine in three steps",
    excerpt:
      "Strong skin starts with a healthy barrier. A simple, repeatable routine beats a shelf full of products you never finish.",
    category: "Routine",
    date: "2026-04-18",
    readMinutes: 5,
    cover: "/products/design-1.webp",
    body: [
      "A healthy barrier holds moisture in and keeps irritants out. When it is compromised, everything stings and nothing absorbs well.",
      "Step one: cleanse gently with a low pH wash. Step two: restore with a barrier supporting moisturizer. Step three: protect with sunscreen every morning.",
      "That is the whole routine. Consistency beats complexity every single time.",
    ],
  },
  {
    slug: "reading-an-ingredient-list",
    title: "How to read an ingredient list without the panic",
    excerpt:
      "Ingredient lists look intimidating, but a few simple rules tell you most of what you need to know before you buy.",
    category: "Education",
    date: "2026-03-30",
    readMinutes: 6,
    cover: "/products/design-2.webp",
    body: [
      "Ingredients are listed by concentration, so the first five tell you most of the story. Actives near the bottom are often present in token amounts.",
      "Look for the actives that match your goal, then check for known irritants if your skin is reactive.",
      "We publish hero ingredients on every product page so you never have to guess what is doing the work.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
