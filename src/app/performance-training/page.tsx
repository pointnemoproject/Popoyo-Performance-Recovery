import type { Metadata } from "next";
import { ImagePanel } from "@/components/image-panel";
import { whatsappHref } from "@/lib/site";
export const metadata: Metadata = { title: "Performance Training Popoyo", description: "Performance training in Popoyo for surf performance, general fitness, strength, endurance, balance, and body control." };
export default function Page(){return <main className="section-shell grid gap-10 py-16 md:grid-cols-2 md:items-center"><div><h1 className="font-editorial text-6xl">Performance Training</h1><p className="mt-6 leading-8 text-[#676057]">Personalized strength, balance, and conditioning built around your goals. One-on-one training for surf performance, general fitness, strength, endurance, balance, and body control.</p><a href={whatsappHref} className="mt-8 inline-flex bg-[#24231f] px-6 py-3 text-sm text-[#fbf8f1]">Book on WhatsApp</a></div><ImagePanel src="/images/personal-training.jpg" alt="Performance training" className="aspect-[4/5]"/></main>}
