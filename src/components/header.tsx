import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Header(){return <header className="sticky top-0 z-40 border-b hairline bg-[#fbf8f1]/90 backdrop-blur"><div className="section-shell flex min-h-20 flex-col justify-center gap-3 py-3 md:flex-row md:items-center md:justify-between"><Link href="/" className="font-editorial text-xl md:text-2xl">{siteConfig.name}</Link><nav className="flex gap-4 overflow-x-auto text-sm text-[#676057]" aria-label="Primary navigation">{navItems.map((item)=><Link key={item.href} href={item.href} className={item.label==="Book"?"border border-[#24231f] px-4 py-2 text-[#24231f]":"py-2"}>{item.label}</Link>)}</nav></div></header>}
