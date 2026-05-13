import type { Metadata } from "next";
import { ImagePanel } from "@/components/image-panel";
import { whatsappHref } from "@/lib/site";
export const metadata: Metadata = { title: "Mobility Training Popoyo", description: "Mobility and movement training in Popoyo." };
export default function Page(){return <main className="section-shell grid gap-10 py-16 md:grid-cols-2 md:items-center"><div><h1 className="font-editorial text-6xl">Mobility & Movement</h1><p className="mt-6 leading-8 text-[#676057]">Flexibility, stability, posture, body control, stiffness, and confidence moving.</p><a href={whatsappHref} className="mt-8 inline-flex bg-[#24231f] px-6 py-3 text-sm text-[#fbf8f1]">Book on WhatsApp</a></div><ImagePanel src="/images/stretch-mobility.jpg" alt="Mobility and movement" className="aspect-[4/5]"/></main>}
