export const siteConfig = {
  name: "Popoyo Performance & Recovery",
  url: "https://popoyorecovery.com",
  description:
    "Massage, mobility training, and physical therapy-informed recovery for surfers, athletes, and active travelers in Popoyo.",
  whatsappDisplay: "+505 8617 1764",
  whatsappNumber: "50586171764",
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi Popoyo Performance & Recovery, I would like to book a session.")}`;

export const whatsappButtonClass =
  "inline-flex border border-[#817869] bg-[#fbf8f1] px-6 py-3 text-sm text-[#24231f] transition hover:border-[#24231f] hover:bg-[#f7f1e8]";

export const whatsappFloatingClass =
  "fixed bottom-4 right-4 z-50 inline-flex border border-[#817869] bg-[#fbf8f1]/95 px-5 py-3 text-sm text-[#24231f] shadow-[0_10px_24px_rgba(36,35,31,0.14)] backdrop-blur transition hover:border-[#24231f] hover:bg-[#f7f1e8]";

export const whatsappFooterClass =
  "inline-flex border border-[#ded0bd] px-5 py-3 text-sm text-[#f7f1e8] transition hover:bg-[#f7f1e8] hover:text-[#24231f]";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book", href: "/book" },
];

export const services = [
  {
    title: "Surf Recovery & Repair",
    href: "/surf-recovery-repair",
    image: "/images/surf-running.jpg",
    copy:
      "Recover faster between sessions and get back in the water feeling strong. For paddling fatigue, shoulder tension, low back stiffness, tight hips, and surf-related wear and tear.",
  },
  {
    title: "Sports Massage & Bodywork",
    href: "/sports-massage-bodywork",
    image: "/images/sports-massage.jpg",
    copy:
      "Targeted hands-on work for tight muscles, chronic tension, and deep release. Designed to improve tissue quality and help your body reset after surfing, training, travel, or daily stress.",
  },
  {
    title: "Performance Training",
    href: "/performance-training",
    image: "/images/personal-training.jpg",
    copy:
      "Personalized strength, balance, and conditioning built around your goals. One-on-one training for surf performance, general fitness, endurance, balance, and body control.",
  },
  {
    title: "Movement & Mobility",
    href: "/movement-mobility",
    image: "/images/stretch-mobility.jpg",
    copy:
      "Move with more range, control, and confidence. Focused sessions using assisted stretching, joint mobility, stability work, posture, and body control.",
  },
  {
    title: "Injury Support",
    href: "/injury-support",
    image: "/images/coastal-recovery.jpg",
    copy:
      "Structured support for minor injuries, pain, and return to activity. Sessions may include movement checks, corrective exercise, mobility work, strengthening, and physical therapy-informed recovery planning.",
  },
];

export const recoveryServiceLinks = [
  { title: "Physical Therapy in Popoyo", href: "/physical-therapy-popoyo" },
  { title: "Sports Massage in Popoyo", href: "/sports-massage-popoyo" },
  { title: "Surf Recovery & Repair", href: "/surf-recovery-repair-popoyo" },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.whatsappDisplay,
  priceRange: "Contact for pricing",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Popoyo",
    addressCountry: "NI",
  },
};
