import type { Metadata } from "next";
import { ImagePanel } from "@/components/image-panel";
import { whatsappButtonClass, whatsappHref } from "@/lib/site";
export const metadata: Metadata = { title: "Movement & Mobility Popoyo", description: "Movement and mobility in Popoyo using assisted stretching, joint mobility, stability work, posture, and body control." };
export default function Page(){return <main className="section-shell grid gap-10 py-16 md:grid-cols-2 md:items-center"><div><h1 className="font-editorial text-6xl">Movement & Mobility</h1><p className="mt-6 leading-8 text-[#676057]">Move with more range, control, and confidence. Focused mobility and movement sessions using assisted stretching, joint mobility, stability work, posture, and body control.</p><a href={whatsappHref} className={`mt-8 ${whatsappButtonClass}`}>Book on WhatsApp</a></div><ImagePanel src="/images/stretch-mobility.jpg" alt="Movement and mobility" className="aspect-[4/5]"/></main>}
