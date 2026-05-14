import { siteConfig, whatsappFooterClass, whatsappHref } from "@/lib/site";

export function Footer(){return <footer className="bg-[#24231f] text-[#f7f1e8]"><div className="section-shell grid gap-8 py-12 md:grid-cols-2"><div><p className="font-editorial text-3xl">{siteConfig.name}</p><p className="mt-4 text-sm leading-7 text-[#ded0bd]">Premium recovery, movement, bodywork, and training in Popoyo.</p></div><div><a href={whatsappHref} className={whatsappFooterClass}>Message on WhatsApp</a><p className="mt-4 text-xs text-[#b9ad9d]">Popoyo, Nicaragua</p></div></div></footer>}
