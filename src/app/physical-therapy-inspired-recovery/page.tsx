import type { Metadata } from "next";
import { ImagePanel } from "@/components/image-panel";
import { whatsappHref } from "@/lib/site";
export const metadata: Metadata = { title: "Physical Therapy-Inspired Recovery Popoyo", description: "Movement-based recovery, mobility, strength, balance, pain reduction, and return to activity in Popoyo." };
export default function Page(){return <main className="section-shell grid gap-10 py-16 md:grid-cols-2 md:items-center"><div><h1 className="font-editorial text-6xl">Physical Therapy-Inspired Recovery</h1><p className="mt-6 leading-8 text-[#676057]">Movement-based recovery using mobility, strength, balance, pain reduction, and return-to-activity principles.</p><a href={whatsappHref} className="mt-8 inline-flex bg-[#24231f] px-6 py-3 text-sm text-[#fbf8f1]">Book on WhatsApp</a></div><ImagePanel src="/images/coastal-recovery.jpg" alt="Recovery in Popoyo" className="aspect-[4/5]"/></main>}
