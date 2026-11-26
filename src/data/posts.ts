import { freeTrialPost } from "./post-iptv-free-trial";

export type PostBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "callout"; variant: "answer" | "tip" | "warn" | "good"; title: string; text?: string; items?: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "faq"; items: [string, string][] }
  | { type: "cta"; text: string; buttons: { label: string; href: string; secondary?: boolean }[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date
  readTime: string;
  image: string;
  imageAlt: string;
  body: PostBlock[];
  /** Optional SEO overrides and structured-data inputs. */
  seoTitle?: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string[];
  /** [question, answer] pairs emitted as FAQPage schema. */
  faqs?: [string, string][];
};

/** Category label to URL slug, e.g. "Guide" becomes "guide". */
export const categorySlug = (category: string) => category.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/** Categories shown in the header "Blogs" dropdown. */
export const blogCategories = [
  { label: "Comparison", slug: "comparison", blurb: "Side-by-side comparisons to help you choose the right device or service." },
  { label: "Guide", slug: "guide", blurb: "Step-by-step guides, checklists and expert tips for getting more from IPTV." },
];

export const posts: Post[] = [
  freeTrialPost,
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
