import Link from "next/link";
import {
  recoveryServiceLinks,
  siteConfig,
  whatsappFooterClass,
  whatsappHref,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#24231f] text-[#f7f1e8]">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.1fr_.9fr_.8fr]">
        <div>
          <p className="font-editorial text-3xl">{siteConfig.name}</p>
          <p className="mt-4 text-sm leading-7 text-[#ded0bd]">
            Premium recovery, movement, bodywork, and training in Popoyo.
          </p>
        </div>
        <nav aria-label="Recovery services">
          <p className="text-xs uppercase text-[#b9ad9d]">Recovery Services</p>
          <div className="mt-4 grid gap-3 text-sm text-[#ded0bd]">
            {recoveryServiceLinks.map((service) => (
              <Link key={service.href} href={service.href} className="hover:text-[#f7f1e8]">
                {service.title}
              </Link>
            ))}
          </div>
        </nav>
        <div>
          <a href={whatsappHref} className={whatsappFooterClass}>
            Message on WhatsApp
          </a>
          <p className="mt-4 text-xs text-[#b9ad9d]">Popoyo, Nicaragua</p>
        </div>
      </div>
    </footer>
  );
}
