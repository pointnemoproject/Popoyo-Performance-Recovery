import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { jsonLd, siteConfig } from "@/lib/site";

export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` }, description: siteConfig.description, keywords: ["Popoyo recovery","Popoyo physical therapy","physical therapy Popoyo","sports massage Popoyo","surf recovery Popoyo","performance training Popoyo","movement mobility Popoyo","mobility training Popoyo","injury support Popoyo","shoulder pain surfing","back pain Popoyo","recovery massage Popoyo"], openGraph: { title: siteConfig.name, description: siteConfig.description, images: ["/images/hero-surf-recovery.jpg"] } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f1e8" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Header/>{children}<Footer/><StickyWhatsApp/></body></html>}
