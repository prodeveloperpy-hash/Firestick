import { useEffect } from "react";
import { IPTV_FAQS } from "./HomeSections";
import { WHATSAPP_URL } from "./ui";

const SITE = "https://tvpackages.uk";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TV Packages",
  url: SITE,
  logo: SITE + "/logo.svg",
  image: SITE + "/iptv-logo.jpeg",
  description: "UK-based IPTV setup support and subscription guidance. Live TV, sports, movies and 4K streaming on any device via WhatsApp.",
  telephone: "+447395667292",
  email: "hello@tvpackages.uk",
  address: { "@type": "PostalAddress", addressCountry: "GB", addressRegion: "England" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  contactPoint: { "@type": "ContactPoint", contactType: "customer support", availableLanguage: "English" },
  sameAs: [WHATSAPP_URL.split("?")[0]],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: IPTV_FAQS.map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

/** Adds homepage-only JSON-LD to <head> and removes it when leaving the page. */
export function useHomeSchema() {
  useEffect(() => {
    const tags = [localBusiness, faqPage].map((data) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.text = JSON.stringify(data);
      document.head.appendChild(el);
      return el;
    });
    return () => tags.forEach((el) => el.remove());
  }, []);
}
