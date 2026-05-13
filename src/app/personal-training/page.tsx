import type { Metadata } from "next";
import { ImagePanel } from "@/components/image-panel";
import { whatsappHref } from "@/lib/site";
export const metadata: Metadata = { title: "Personal Training Popoyo", description: "One-on-one personal training in Popoyo." };
export default function Page(){return <main className="section-shell grid gap-10 py-16 md:grid-cols-2 md:items-center"><div><h1 className="font-editorial text-6xl">Personal Training</h1><p className="mt-6 leading-8 text-[#676057]">Strength, balance, mobility, conditioning, surf performance, general fitness, and personalized goals.</p><a href={whatsappHref} className="mt-8 inline-flex bg-[#24231f] px-6 py-3 text-sm text-[#fbf8f1]">Book on WhatsApp</a></div><ImagePanel src="/images/personal-training.jpg" alt="Personal training" className="aspect-[4/5]"/></main>}
