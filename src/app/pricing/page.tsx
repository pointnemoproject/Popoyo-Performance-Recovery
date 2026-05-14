import type { Metadata } from "next";
import { whatsappButtonClass, whatsappHref } from "@/lib/site";
export const metadata: Metadata = { title: "Pricing", description: "Pricing for bodywork, surf recovery, performance training, movement, mobility, and injury support in Popoyo." };
export default function PricingPage(){return <main className="section-shell py-16"><p className="text-xs uppercase text-[#386575]">Pricing</p><h1 className="font-editorial mt-5 text-6xl leading-none">Contact for pricing.</h1><p className="mt-6 max-w-2xl leading-8 text-[#676057]">Pricing is confirmed by WhatsApp based on session type, duration, location, and goals.</p><a href={whatsappHref} className={`mt-8 ${whatsappButtonClass}`}>Book on WhatsApp</a></main>}
