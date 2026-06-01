import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export type SeoPageSection = {
  eyebrow?: string;
  title: string;
  body: string[];
  items?: string[];
  afterItems?: string[];
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
  keywords?: string[];
  ctaLabel?: string;
  hero: {
    heading: string;
    copy: string;
    image: string;
    imageAlt: string;
  };
  intro?: {
    heading: string;
    body: string[];
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

export const seoLandingPages: SeoLandingPageContent[] = [
  {
    slug: "physical-therapy-popoyo",
    eyebrow: "Physical therapy Popoyo",
    title: "Physical Therapy in Popoyo, Nicaragua | Popoyo Recovery",
    description:
      "Looking for physical therapy in Popoyo? Popoyo Recovery offers movement-focused injury support, mobility, strength, and return-to-activity sessions for surfers, expats, and travelers.",
    keywords: [
      "physical therapy Popoyo",
      "physical therapy Nicaragua",
      "sports rehab Popoyo",
      "injury support Popoyo",
      "recovery clinic Popoyo",
    ],
    ctaLabel: "Book a Recovery Session",
    hero: {
      heading: "Physical Therapy in Popoyo, Nicaragua",
      copy:
        "Sports recovery, injury support, mobility, strength, and return-to-activity planning for surfers, expats, travelers, and active people in Popoyo.",
      image: "/images/coastal-recovery.jpg",
      imageAlt: "Movement-based recovery support in Popoyo",
    },
    intro: {
      heading: "Looking for physical therapy in Popoyo?",
      body: [
        "Many people use that search when pain, stiffness, or a minor injury is getting in the way of surfing, training, travel, or daily life.",
        "Popoyo Recovery provides practical, movement-based support for active people who want to move better, recover smarter, and get back to doing the things they came here to do.",
      ],
    },
    sections: [
      {
        title: "If You're Searching for Physical Therapy in Popoyo",
        body: [
          "If you are in Popoyo and searching for physical therapy, you are probably trying to answer one of a few questions:",
        ],
        items: [
          "Can I keep surfing, training, or moving normally?",
          "Is this something I should rest, strengthen, stretch, or get checked out?",
          "What can I do today so this does not derail the rest of my trip?",
          "Do I need medical care, or do I need structured recovery and movement support?",
        ],
        afterItems: [
          "That is where Popoyo Recovery can help.",
          "We work with surfers, expats, travelers, and active people dealing with minor pain, stiffness, overuse issues, and return-to-activity questions. Surf is a major part of life in Popoyo, and many of the people we work with are surfers, but the same approach applies broadly to active people who want to keep moving well.",
        ],
      },
      {
        title: "Support for Surf, Training, and Active Life",
        body: [
          "Popoyo is known for surf, but the people who live and travel here tend to stay active in all kinds of ways. Whether pain comes from surfing, training, travel, or everyday movement, the goal is the same: understand what is limiting you, calm things down, rebuild capacity, and return to activity gradually.",
          "Our work is especially relevant for surfers, but it applies broadly to active people dealing with minor injuries, soreness, stiffness, and movement limitations.",
        ],
      },
      {
        title: "What We Help With",
        body: ["Sessions may be useful for:"],
        items: [
          "Shoulder pain or paddling-related irritation",
          "Low back tightness after surfing, training, or travel",
          "Hip stiffness or limited mobility",
          "Knee discomfort during training, walking, or surfing",
          "Ankle tweaks, balance issues, or lower-leg stiffness",
          "Neck and upper back tension",
          "General soreness from heavy activity days",
          "Minor strains, overuse issues, or movement limitations",
          "Returning to surfing, training, or daily activity after a minor setback",
        ],
        afterItems: [
          "The goal is to help you understand how you are moving, what may be contributing to the issue, and what practical steps you can take next.",
        ],
      },
      {
        title: "What a Session May Include",
        body: ["Depending on what you need, a session may include:"],
        items: [
          "Movement and mobility checks",
          "Corrective exercise",
          "Strength work",
          "Mobility and flexibility work",
          "Soft-tissue recovery or bodywork",
          "Balance, stability, and control training",
          "Surf-specific or activity-specific movement preparation",
          "Gradual return-to-activity planning",
        ],
        afterItems: [
          "This is especially useful if you are not dealing with a major injury, but you also do not feel right ignoring the issue.",
        ],
      },
      {
        title: "Built for Surfers, Expats, and Travelers",
        body: [
          "Popoyo is an active place. People surf hard, train inconsistently, travel long distances, sleep in different beds, and often push through pain because they do not want to miss a swell, a session, or the activities they came here for.",
          "That combination can turn small issues into bigger ones.",
          "Our approach is designed for people who want practical support. We help you figure out what you can do now, what to avoid for the moment, and how to build back gradually.",
        ],
      },
      {
        title: "When to Seek Medical Care",
        body: [
          "Some situations need a higher level of medical evaluation. We recommend seeking care from a qualified medical provider if you are dealing with acute trauma, severe or worsening pain, a suspected fracture or dislocation, major swelling or bruising, inability to bear weight, numbness, tingling, weakness, or other neurological symptoms.",
          "If you are in the early phase after surgery, still under direct medical restrictions, or need wound care, formal post-operative protocols, or hospital-based follow-up, you should continue working with your surgeon or medical provider.",
          "For the longer tail of recovery - rebuilding strength, mobility, balance, confidence, and returning to activity - Popoyo Recovery can help support the process with movement-based training, mobility work, bodywork, and gradual return-to-activity planning.",
        ],
      },
      {
        title: "How Popoyo Recovery Fits In",
        body: [
          "Think of Popoyo Recovery as a practical resource for sports recovery, injury support, movement, and return to activity.",
          "We can help when you are dealing with minor pain, stiffness, soreness, or uncertainty around returning to activity. Sessions are built around movement, mobility, strength, bodywork, and simple planning.",
          "For many surfers, expats, and active travelers, that is exactly what they are looking for when they search for physical therapy in Popoyo.",
        ],
      },
    ],
    finalCta: {
      heading: "Book a Session",
      copy:
        "Do not let a small issue derail your trip, training, or time in Popoyo. Book a recovery, mobility, or injury support session, and we will help you figure out the next practical step.",
    },
  },
];

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
    title: {
      absolute: page.title,
    },
    description: page.description,
    keywords: page.keywords,
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
