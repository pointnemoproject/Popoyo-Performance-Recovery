import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export type SeoPageSection = {
  eyebrow?: string;
  title: string;
  body: string[];
};

export type SeoPageFaq = {
  question: string;
  answer: string;
};

export type SeoLandingPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  hero: {
    heading: string;
    copy: string;
    image: string;
    imageAlt: string;
  };
  intro?: {
    heading: string;
    body: string;
  };
  sections?: SeoPageSection[];
  highlights?: string[];
  faqs?: SeoPageFaq[];
  relatedLinks?: {
    label: string;
    href: string;
  }[];
  finalCta?: {
    heading: string;
    copy?: string;
  };
};

export const seoLandingPages: SeoLandingPageContent[] = [];

export const seoLandingPagesBySlug = new Map(
  seoLandingPages.map((page) => [page.slug, page]),
);

export function getSeoLandingPage(slug: string) {
  return seoLandingPagesBySlug.get(slug);
}

export function getSeoLandingPageMetadata(page: SeoLandingPageContent): Metadata {
  const path = `/${page.slug}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      images: [page.hero.image],
    },
  };
}
