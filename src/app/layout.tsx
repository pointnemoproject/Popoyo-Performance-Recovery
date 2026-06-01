import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { jsonLd, siteConfig } from "@/lib/site";

export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` }, description: siteConfig.description, keywords: ["Popoyo recovery","Popoyo physical therapy","physical therapy Popoyo","sports massage Popoyo","surf recovery Popoyo","performance training Popoyo","movement mobility Popoyo","mobility training Popoyo","injury support Popoyo","shoulder pain surfing","back pain Popoyo","recovery massage Popoyo"], openGraph: { title: siteConfig.name, description: siteConfig.description, images: ["/images/hero-surf-recovery.jpg"] } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f1e8" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Script src="https://www.googletagmanager.com/gtag/js?id=G-EQWLK5VEK4" strategy="afterInteractive"/><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-EQWLK5VEK4');`}</Script><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Header/>{children}<Footer/><StickyWhatsApp/></body></html>}
