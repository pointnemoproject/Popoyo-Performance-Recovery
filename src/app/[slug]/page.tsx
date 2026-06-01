import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/components/seo-landing-page";
import {
  getSeoLandingPage,
  getSeoLandingPageMetadata,
  seoLandingPages,
} from "@/lib/seo-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    return {};
  }

  return getSeoLandingPageMetadata(page);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}
