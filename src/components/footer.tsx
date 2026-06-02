import Link from "next/link";
import { recoveryServiceLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#24231f] text-[#f7f1e8]">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.1fr_.9fr_.6fr]">
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
          <p className="text-xs uppercase text-[#b9ad9d]">Location</p>
          <p className="mt-4 text-sm text-[#ded0bd]">Popoyo, Nicaragua</p>
        </div>
      </div>
    </footer>
  );
}
