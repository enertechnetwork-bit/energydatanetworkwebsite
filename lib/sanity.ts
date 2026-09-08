import { createClient } from "@sanity/client";

// Sanity client configuration
export const sanityClient = createClient({
  projectId: "k0bic3ii",
  dataset: "production",
  useCdn: true, // Set to false for fresh data during development
  apiVersion: "2024-01-01",
});

// Define SanityImageSource type
export type SanityImageSource = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

// Image URL builder using Sanity CDN directly
export function urlFor(source: SanityImageSource | undefined) {
  if (!source?.asset?._ref) return "";

  // Parse the asset reference: image-{id}-{dimensions}-{format}
  const ref = source.asset._ref;
  const [, id, dimensions, format] = ref.split("-");

  return `https://cdn.sanity.io/images/k0bic3ii/production/${id}-${dimensions}.${format}`;
}

// TypeScript interfaces for blog data
export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image?: SanityImageSource;
  bio?: string;
  role?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  color?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author?: Author;
  mainImage?: SanityImageSource;
  categories?: Category[];
  publishedAt?: string;
  excerpt?: string;
  body?: any[];
  featured?: boolean;
}

// GROQ Queries
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  featured,
  "author": author->{
    _id,
    name,
    slug,
    image
  },
  "categories": categories[]->{
    _id,
    title,
    slug,
    color
  }
}`;

export const featuredPostQuery = `*[_type == "post" && featured == true][0] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "author": author->{
    _id,
    name,
    image
  },
  "categories": categories[]->{
    _id,
    title,
    color
  }
}`;

export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug
}`;
