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

const servicesFaqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    [
      "What does a UK IPTV service include?",
      "A UK IPTV service includes live TV channels (BBC, ITV, Channel 4, Sky Sports, TNT Sports), Premier League and Champions League football, movies, series and catch-up TV, all streamed over your broadband connection with no satellite dish or cable contract required.",
    ],
    [
      "Do I need a TV licence to use IPTV in the UK?",
      "Yes. If you watch or record live TV on any channel, including through IPTV, you legally need a TV licence in the UK. This is a requirement under the Communications Act, regardless of which device or service you use.",
    ],
    [
      "What is the difference between IPTV and a Firestick package?",
      "IPTV is the technology, it delivers TV channels over the internet. A Firestick is a device that plays IPTV. You need both: an IPTV subscription for the channels, and a compatible device such as a Firestick, Smart TV or phone to watch them on.",
    ],
    [
      "Does IPTV include Netflix and Disney+?",
      "Yes. Our IPTV package includes Netflix, Disney+ and Amazon Prime Video, together with all world TV channels, live sports, movies and series, all in one package.",
    ],
    [
      "Can I use IPTV on more than one device at the same time?",
      "This depends on your plan. Message us on WhatsApp and we'll confirm how many devices your plan covers and help you set up each one.",
    ],
  ].map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

const servicesBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "IPTV Service UK", item: SITE + "/services" },
  ],
};

const devicesFaqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    [
      "What devices can I use IPTV on in the UK?",
      "IPTV works on Amazon Firestick (all models), Samsung Smart TVs (Tizen OS), LG Smart TVs (webOS), Android TV boxes, Sony TVs (Android TV), iPhones and iPads (iOS), Android smartphones and tablets, and Windows PCs. Any device with an internet connection and an IPTV app can run a UK IPTV subscription.",
    ],
    [
      "How do I set up IPTV on a Firestick?",
      "To set up IPTV on a Firestick: (1) Enable apps from unknown sources in Firestick settings. (2) Download the Downloader app from the Amazon App Store. (3) Use Downloader to install TiviMate or IPTV Smarters Pro. (4) Enter your subscription credentials (M3U URL or Xtream Codes). TV Packages completes this entire setup for you via WhatsApp.",
    ],
    [
      "What is the best IPTV app for Firestick UK?",
      "Popular IPTV apps for Firestick in the UK include TiviMate and IPTV Smarters Pro, both known for a clear TV guide (EPG) and easy channel switching. We install and configure the right app for you via WhatsApp.",
    ],
    [
      "Does IPTV work on Samsung Smart TV?",
      "Yes. IPTV works on Samsung Smart TVs running Tizen OS. TV Packages provides WhatsApp setup support for Samsung Smart TVs and will check that your model is compatible.",
    ],
    [
      "What internet speed do I need for IPTV on 4K?",
      "For 4K IPTV streaming, a minimum of 25 Mbps download speed is recommended. For HD streaming, 10 Mbps is sufficient. We'll check your connection speed as part of the setup process.",
    ],
  ].map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

const devicesBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "IPTV on Firestick UK", item: SITE + "/devices" },
  ],
};

const packagesFaqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    [
      "How much does IPTV setup cost in the UK?",
      "TV Packages charges a one-off setup support fee, we configure your chosen device via WhatsApp so it is ready to stream. Your IPTV subscription (the channels) is a separate cost paid directly to the provider, typically £10–£20 per month.",
    ],
    [
      "What is included in the TV Packages setup service?",
      "Our setup service includes: device configuration via WhatsApp, IPTV app installation, subscription credential entry, EPG (TV guide) setup, and a test to confirm all channels and sports are working correctly. We support Firestick, Smart TV, Android box, iPhone and more.",
    ],
    [
      "Do I need to pay a monthly fee to TV Packages?",
      "No. TV Packages charges a one-off setup fee. Your monthly subscription payment goes directly to your IPTV provider, we do not take ongoing fees. We are available on WhatsApp if you need help at any point after setup.",
    ],
    [
      "What happens if my IPTV stops working after setup?",
      "Contact us on WhatsApp and our UK-based team will troubleshoot the issue with you. Common fixes include refreshing your subscription credentials, reconnecting to Wi-Fi, or clearing the app cache.",
    ],
  ].map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

const packagesService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IPTV Setup Support UK",
  provider: { "@type": "LocalBusiness", name: "TV Packages", url: SITE },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description: "One-off IPTV setup support via WhatsApp. We configure your Firestick, Smart TV or any device so it is ready to stream live TV, sports and 4K content.",
};

const packagesBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "IPTV Setup Packages", item: SITE + "/packages" },
  ],
};

/** Adds Packages-page JSON-LD (FAQPage + Service + BreadcrumbList) to <head> and removes it on leave. */
export function usePackagesSchema() {
  useEffect(() => {
    const tags = [packagesFaqPage, packagesService, packagesBreadcrumb].map((data) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.text = JSON.stringify(data);
      document.head.appendChild(el);
      return el;
    });
    return () => tags.forEach((el) => el.remove());
  }, []);
}

/** Adds Devices-page JSON-LD (FAQPage + BreadcrumbList) to <head> and removes it on leave. */
export function useDevicesSchema() {
  useEffect(() => {
    const tags = [devicesFaqPage, devicesBreadcrumb].map((data) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.text = JSON.stringify(data);
      document.head.appendChild(el);
      return el;
    });
    return () => tags.forEach((el) => el.remove());
  }, []);
}

/** Adds Services-page JSON-LD (FAQPage + BreadcrumbList) to <head> and removes it on leave. */
export function useServicesSchema() {
  useEffect(() => {
    const tags = [servicesFaqPage, servicesBreadcrumb].map((data) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.text = JSON.stringify(data);
      document.head.appendChild(el);
      return el;
    });
    return () => tags.forEach((el) => el.remove());
  }, []);
}

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
