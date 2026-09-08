import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
}

const DEFAULT_TITLE =
  "Energy Data Technology | AI Utility Intelligence for Power Theft Detection";
const DEFAULT_DESCRIPTION =
  "Energy Data Technology (EDT) helps electricity utilities detect power theft, reduce non-technical losses, protect revenue, and strengthen grid reliability with AI-powered utility intelligence.";
const DEFAULT_IMAGE = "https://energydatanetwork.com/images/og-image.png";
const SITE_NAME = "Energy Data Technology";

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  author,
  publishedTime,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const updateMetaTag = (
      attribute: string,
      value: string,
      content: string
    ) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    // Update meta description
    updateMetaTag("name", "description", description);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    }

    // Update Open Graph tags
    updateMetaTag("property", "og:title", fullTitle);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", image);
    updateMetaTag("property", "og:type", type);
    if (url) {
      updateMetaTag("property", "og:url", url);
    }

    // Update Twitter tags
    updateMetaTag("name", "twitter:title", fullTitle);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", image);

    // Article-specific tags
    if (type === "article") {
      if (author) {
        updateMetaTag("name", "author", author);
        updateMetaTag("property", "article:author", author);
      }
      if (publishedTime) {
        updateMetaTag("property", "article:published_time", publishedTime);
      }
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [
    fullTitle,
    description,
    keywords,
    image,
    url,
    type,
    author,
    publishedTime,
  ]);

  return null;
};

// SEO data for each page
export const pageSEO = {
  home: {
    title: undefined, // Uses default
    description:
      "Energy Data Technology helps electricity providers detect power theft, reduce non-technical losses, and recover lost revenue using AI, smart meter analytics, and utility intelligence.",
    keywords:
      "power theft detection, non-technical losses, revenue protection, utility intelligence, smart meter analytics, electricity theft, AI utilities",
  },
  about: {
    title: "About Us",
    description:
      "Learn how Energy Data Technology builds AI-powered utility intelligence for power theft detection, revenue protection, and non-technical loss reduction.",
    keywords:
      "about EDT, utility intelligence company, power theft AI, revenue assurance, Africa utilities",
  },
  products: {
    title: "Revenue Protection Platform",
    description:
      "Explore the EDT Revenue Protection Platform for electricity theft detection, customer risk scoring, GIS theft mapping, and inspection prioritization.",
    keywords:
      "revenue protection platform, theft detection engine, customer risk scoring, GIS theft mapping, meter tampering detection",
  },
  events: {
    title: "Events and Briefings",
    description:
      "Join EDT product demos, NTL roundtables, AI clinics, and utility intelligence briefings for revenue protection teams.",
    keywords:
      "utility intelligence events, revenue protection demo, non-technical losses roundtable, power theft detection briefing",
  },
  blog: {
    title: "Insights",
    description:
      "Read EDT insights on power theft detection, utility revenue protection, non-technical losses, smart meter analytics, and AI for electricity distribution.",
    keywords:
      "utility intelligence insights, power theft detection articles, non-technical losses, smart meter analytics, revenue assurance",
  },
  contact: {
    title: "Contact Us",
    description:
      "Contact Energy Data Technology to request a demo or discuss power theft detection, revenue protection, and utility intelligence partnerships.",
    keywords:
      "contact EDT, request demo, utility revenue protection, power theft detection partnership",
  },
  careers: {
    title: "Careers",
    description:
      "Join Energy Data Technology and help build AI systems for power theft detection, non-technical loss reduction, utility analytics, and revenue protection.",
    keywords:
      "utility analytics careers, AI energy jobs, power theft detection jobs, revenue assurance careers, GIS utility jobs",
  },
};
