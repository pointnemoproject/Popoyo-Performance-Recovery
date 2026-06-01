import Link from "next/link";
import { ImagePanel } from "@/components/image-panel";
import type { SeoLandingPageContent } from "@/lib/seo-pages";
import { whatsappButtonClass, whatsappHref } from "@/lib/site";

export function SeoLandingPage({ page }: { page: SeoLandingPageContent }) {
  return (
    <main>
      <section className="section-shell grid gap-10 py-14 md:grid-cols-[.95fr_1.05fr] md:items-center md:py-16">
        <div>
          <p className="text-xs uppercase text-[#386575]">{page.eyebrow}</p>
          <h1 className="font-editorial mt-5 text-5xl leading-none md:text-7xl">
            {page.hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#676057]">
            {page.hero.copy}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappHref} className={whatsappButtonClass}>
              Book on WhatsApp
            </a>
            <Link href="/#services" className="border border-[#817869] px-6 py-3 text-sm">
              Explore Services
            </Link>
          </div>
        </div>
        <ImagePanel
          src={page.hero.image}
          alt={page.hero.imageAlt}
          priority
          className="aspect-[4/5] min-h-[440px]"
        />
      </section>

      {page.intro ? (
        <section className="border-y hairline bg-[#f7f1e8]">
          <div className="section-shell grid gap-6 py-14 md:grid-cols-[.8fr_1.2fr] md:py-16">
            <h2 className="font-editorial text-4xl leading-tight md:text-5xl">
              {page.intro.heading}
            </h2>
            <p className="leading-8 text-[#676057]">{page.intro.body}</p>
          </div>
        </section>
      ) : null}

      {page.sections?.length ? (
        <section className="section-shell py-14 md:py-16">
          <div className="grid gap-8">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className="grid gap-5 border-t hairline pt-8 md:grid-cols-[.7fr_1.3fr]"
              >
                <div>
                  {section.eyebrow ? (
                    <p className="text-xs uppercase text-[#a6684a]">{section.eyebrow}</p>
                  ) : null}
                  <h2 className="font-editorial mt-3 text-4xl leading-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="grid gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-8 text-[#676057]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {page.highlights?.length ? (
        <section className="border-y hairline bg-[#24231f] text-[#f7f1e8]">
          <div className="section-shell py-14 md:py-16">
            <p className="text-xs uppercase text-[#ded0bd]">What sessions may include</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {page.highlights.map((highlight) => (
                <p key={highlight} className="border-t border-[#ded0bd]/25 pt-4 leading-7">
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.faqs?.length ? (
        <section className="section-shell py-14 md:py-16">
          <p className="text-xs uppercase text-[#386575]">FAQ</p>
          <h2 className="font-editorial mt-4 text-4xl leading-tight md:text-5xl">
            Common questions.
          </h2>
          <div className="mt-8 grid gap-6">
            {page.faqs.map((faq) => (
              <article key={faq.question} className="border-t hairline pt-6">
                <h3 className="font-editorial text-3xl">{faq.question}</h3>
                <p className="mt-3 max-w-3xl leading-8 text-[#676057]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-t hairline">
        <div className="section-shell grid gap-6 py-14 md:grid-cols-[1fr_auto] md:items-center md:py-16">
          <div>
            <p className="font-editorial text-5xl leading-none">
              {page.finalCta?.heading ?? "Move better in Popoyo."}
            </p>
            {page.finalCta?.copy ? (
              <p className="mt-4 max-w-2xl leading-8 text-[#676057]">{page.finalCta.copy}</p>
            ) : null}
          </div>
          <a href={whatsappHref} className={whatsappButtonClass}>
            Book on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
