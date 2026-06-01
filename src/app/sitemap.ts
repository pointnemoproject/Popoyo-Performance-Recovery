import type { MetadataRoute } from "next";
import { seoLandingPages } from "@/lib/seo-pages";
import { services, siteConfig } from "@/lib/site";

const staticRoutes = ["/", "/pricing", "/book"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...services.map((service) => service.href),
    ...seoLandingPages.map((page) => `/${page.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
