import { useEffect } from "react";
import { faqs as pageFaqs, plans } from "../data/home";
import { IPTV_FAQS, PACKAGES_FAQS, SERVICES_FAQS } from "./HomeSections";
import { WHATSAPP_URL } from "./ui";

const SITE = "https://tvpackages.uk";

const HOME = SITE + "/";
const BUSINESS_ID = SITE + "/#business";

/** Plans shown on the site (kept in line with the visible pricing in IPTV_FAQS). */
const PLANS: [string, string, string][] = [
  ["1 Month IPTV Plan", "15.00", "1 month subscription: all world TV channels, Netflix, Disney+, Amazon Prime Video and WhatsApp setup. No contract."],
  ["3 Month IPTV Plan", "25.00", "3 month subscription: all world TV channels, Netflix, Disney+, Amazon Prime Video and WhatsApp setup. No contract."],
  ["6 Month IPTV Plan", "35.00", "6 month subscription: all world TV channels, Netflix, Disney+, Amazon Prime Video and WhatsApp setup. No contract."],
  ["1 Year IPTV Plan", "60.00", "12 month subscription: all world TV channels, Netflix, Disney+, Amazon Prime Video and WhatsApp setup. Best value, no contract."],
];

const planOffers = PLANS.map(([name, price, description]) => ({
  "@type": "Offer",
  name,
  price,
  priceCurrency: "GBP",
  description,
  availability: "https://schema.org/InStock",
  url: SITE + "/packages",
}));

/** Homepage knowledge graph: one connected block (@id references) instead of separate islands. */
const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: "TV Packages",
      alternateName: "TVPackages.uk",
      url: HOME,
      logo: { "@type": "ImageObject", url: SITE + "/logo-mark.svg", contentUrl: SITE + "/logo-mark.svg" },
      image: SITE + "/iptv-logo.jpeg",
      description: "UK-based IPTV setup support and subscription guidance. Live TV, sports, movies, Netflix, Disney+, Amazon Prime Video and 4K streaming on any device, set up via WhatsApp. No contract.",
      slogan: "UK IPTV Packages, Set Up Via WhatsApp",
      telephone: "+447395667292",
      email: "hello@tvpackages.uk",
      priceRange: "££",
      currenciesAccepted: "GBP",
      address: { "@type": "PostalAddress", addressCountry: "GB", addressRegion: "England" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+447395667292",
        email: "hello@tvpackages.uk",
        availableLanguage: "English",
        areaServed: "GB",
      },
      sameAs: [WHATSAPP_URL.split("?")[0]],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "22:00",
      },
    },
    {
      "@type": "WebSite",
      "@id": SITE + "/#website",
      url: HOME,
      name: "TV Packages",
      alternateName: "TVPackages.uk",
      description: "UK IPTV packages with live TV, sports, movies, Netflix, Disney+ and 4K streaming, set up on any device via WhatsApp.",
      publisher: { "@id": BUSINESS_ID },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id": SITE + "/#webpage",
      url: HOME,
      name: "Best IPTV Service UK | TV Packages & Setup | TVPackages.uk",
      description: "Get live TV, sports, movies, Netflix, Disney+, Prime Video and 4K streaming set up on any device via WhatsApp. No contract. UK-based team.",
      isPartOf: { "@id": SITE + "/#website" },
      about: { "@id": BUSINESS_ID },
      primaryImageOfPage: { "@type": "ImageObject", url: SITE + "/iptv-logo.jpeg" },
      breadcrumb: { "@id": SITE + "/#breadcrumb" },
      inLanguage: "en-GB",
    },
    {
      "@type": "BreadcrumbList",
      "@id": SITE + "/#breadcrumb",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: HOME }],
    },
    {
      "@type": "Service",
      "@id": SITE + "/#iptv-service",
      name: "UK IPTV Subscription & Setup Service",
      serviceType: "IPTV Streaming Service",
      description: "IPTV subscriptions for UK households: live TV channels, sports, movies, Netflix, Disney+, Amazon Prime Video and 4K content, installed on Fire TV Stick, Smart TV, Android box, iPhone and more through personalised WhatsApp setup.",
      url: HOME,
      provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "GBP",
        lowPrice: "15.00",
        highPrice: "60.00",
        offerCount: String(PLANS.length),
        availability: "https://schema.org/InStock",
        offers: planOffers,
      },
    },
    {
      "@type": "FAQPage",
      "@id": SITE + "/#faqpage",
      mainEntity: IPTV_FAQS.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
  ],
};

const SERVICES_URL = SITE + "/services";

/** Services listed on /services, matching the cards shown on the page (slug → real route). */
const SERVICE_LIST: { name: string; path: string; description: string }[] = [
  { name: "Live TV Channels", path: "/services/live-tv", description: "10,000+ live UK and international TV channels via IPTV, including BBC, ITV, Channel 4, Channel 5 and Sky channels, streamed in HD and 4K on Firestick, Smart TV and Android devices." },
  { name: "Premium Sports", path: "/services/sports", description: "All major UK sports channels via IPTV, including Sky Sports, TNT Sports 1–4, Premier League, Champions League, Formula 1, cricket, boxing and rugby, with no Sky contract or satellite dish." },
  { name: "Movies & TV Series", path: "/services/movies", description: "Thousands of on-demand movies and TV series in HD and 4K, covering Hollywood, Bollywood, world cinema and 12 genre categories." },
  { name: "Entertainment Apps", path: "/services/apps", description: "Netflix, Disney+, Amazon Prime Video, HBO and more through a single IPTV subscription, on Firestick, Smart TV, phone or tablet." },
  { name: "Netflix", path: "/netflix", description: "Netflix is included in your IPTV package. We install it on your Fire TV Stick or Smart TV through WhatsApp-guided setup." },
  { name: "18+ Adult Channels", path: "/adults", description: "A separate, PIN-protected 18+ section within your IPTV subscription, enabled only for verified adult subscribers during WhatsApp setup." },
];

const servicesGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": SERVICES_URL + "#webpage",
      url: SERVICES_URL,
      name: "UK IPTV Service: Live Channels, Sports, Movies & Apps | TV Packages",
      description: "Our UK IPTV service gives you live TV, Sky Sports, Premier League, movies and 4K streaming on Firestick, Smart TV and more. WhatsApp setup included.",
      inLanguage: "en-GB",
      isPartOf: { "@id": SITE + "/#website" },
      about: { "@id": SITE + "/#business" },
      breadcrumb: { "@id": SERVICES_URL + "#breadcrumb" },
      mainEntity: { "@id": SERVICES_URL + "#service-list" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": SERVICES_URL + "#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "Services", item: SERVICES_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": SERVICES_URL + "#service-list",
      name: "IPTV Services by TV Packages",
      numberOfItems: SERVICE_LIST.length,
      itemListElement: SERVICE_LIST.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          "@id": SITE + s.path + "#service",
          name: s.name,
          description: s.description,
          url: SITE + s.path,
          provider: { "@id": SITE + "/#business" },
          areaServed: { "@type": "Country", name: "United Kingdom" },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": SERVICES_URL + "#faqpage",
      mainEntity: SERVICES_FAQS.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
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

const PACKAGES_URL = SITE + "/packages";

/** Plan products built from the same `plans` data that renders the pricing cards, so price/features always match. */
const packagePlanItems = plans.map((plan, i) => ({
  "@type": "ListItem",
  position: i + 1,
  item: {
    "@type": "Product",
    "@id": `${PACKAGES_URL}#plan-${i + 1}`,
    name: `${plan.name} IPTV Plan`,
    description: `${plan.description} ${plan.features.join(", ")}. No long-term contract.`,
    category: "IPTV Subscription",
    brand: { "@type": "Brand", name: "TV Packages" },
    url: PACKAGES_URL,
    image: SITE + "/iptv-logo.jpeg",
    offers: {
      "@type": "Offer",
      name: `${plan.name} IPTV Subscription`,
      price: plan.price.replace(/[^0-9.]/g, "") + ".00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: PACKAGES_URL,
      seller: { "@id": SITE + "/#business" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
    },
  },
}));

const packagesGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PACKAGES_URL + "#webpage",
      url: PACKAGES_URL,
      name: "IPTV Setup UK: Packages & Pricing | TV Packages",
      description: "IPTV plans from £15: 1 month £15, 3 months £25, 6 months £35, 1 year £60. UK-based WhatsApp setup on Firestick, Smart TV or any device. No long-term contract.",
      inLanguage: "en-GB",
      isPartOf: { "@id": SITE + "/#website" },
      about: { "@id": SITE + "/#business" },
      breadcrumb: { "@id": PACKAGES_URL + "#breadcrumb" },
      mainEntity: { "@id": PACKAGES_URL + "#plan-list" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": PACKAGES_URL + "#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "Packages", item: PACKAGES_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": PACKAGES_URL + "#service",
      name: "IPTV Setup Support UK",
      serviceType: "IPTV Setup and Subscription",
      description: "IPTV subscription with WhatsApp setup. We configure your Firestick, Smart TV or any device so it is ready to stream live TV, sports and 4K content.",
      url: PACKAGES_URL,
      provider: { "@id": SITE + "/#business" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
    },
    {
      "@type": "ItemList",
      "@id": PACKAGES_URL + "#plan-list",
      name: "TV Packages IPTV Subscription Plans",
      description: "Four IPTV plans (1 month, 3 months, 6 months and 1 year) with the same full access and no long-term contract.",
      url: PACKAGES_URL,
      numberOfItems: plans.length,
      itemListElement: packagePlanItems,
    },
    {
      "@type": "FAQPage",
      "@id": PACKAGES_URL + "#faqpage",
      mainEntity: PACKAGES_FAQS.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
  ],
};

/** Adds Packages-page JSON-LD (one linked @graph) to <head> and removes it on leave. */
export function usePackagesSchema() {
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(packagesGraph);
    document.head.appendChild(el);
    return () => el.remove();
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

/** Adds Services-page JSON-LD (one linked @graph) to <head> and removes it on leave. */
export function useServicesSchema() {
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(servicesGraph);
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
}

type ServiceSchemaConfig = { path: string; name: string; serviceType: string; description: string; crumb: string; offer?: Record<string, unknown>; audience?: string };

const liveTvSchemaConfig: ServiceSchemaConfig = {
  path: "/services/live-tv",
  name: "Live TV Channels UK — IPTV Service",
  serviceType: "IPTV Live Television Streaming",
  description: "TV Packages provides 10,000+ live UK and international TV channels via IPTV, including BBC, ITV, Sky Sports, TNT Sports and Asian channels, streamed in HD and 4K on Firestick, Smart TV and Android devices.",
  crumb: "Live TV Channels UK",
};

const sportsSchemaConfig: ServiceSchemaConfig = {
  path: "/services/sports",
  name: "Premium Sports Channels UK — IPTV Sports Package",
  serviceType: "IPTV Sports Streaming",
  description: "TV Packages provides access to all major UK sports channels via IPTV, including Sky Sports (all channels), TNT Sports 1–4, Premier League, Champions League, Formula 1, cricket, boxing, rugby and golf — streamed in HD and 4K on Firestick, Smart TV and Android devices over UK broadband.",
  crumb: "Premium Sports Channels UK",
};

const moviesSchemaConfig: ServiceSchemaConfig = {
  path: "/services/movies",
  name: "Movies & TV Series — IPTV On-Demand Service UK",
  serviceType: "IPTV Video On Demand Streaming",
  description: "TV Packages provides on-demand access to movies and TV series including Hollywood, Bollywood, Lollywood, Tollywood, Kollywood, Mollywood, Korean, Chinese and UK cinema, across 12 genre categories, with studio and app compatibility including Netflix, HBO, Disney+, Max, Prime Video, Apple TV, Paramount+, Warner Bros., STARZ, Showtime, MUBI, Tubi and Crunchyroll, streamed in HD and 4K on Firestick, Smart TV and Android devices.",
  crumb: "Movies & TV Series",
};

const netflixSchemaConfig: ServiceSchemaConfig = {
  path: "/netflix",
  name: "Netflix Included in IPTV Package",
  serviceType: "IPTV Streaming Service with Netflix",
  description: "Netflix is included in every TV Packages IPTV subscription. We install Netflix directly onto your Fire TV Stick or Smart TV — covering Bollywood, Hollywood, Korean cinema, Lollywood, Nollywood and more — with WhatsApp-guided setup.",
  crumb: "Netflix",
  offer: {
    priceCurrency: "GBP",
    price: "20.00",
    description: "Monthly IPTV subscription including Netflix, Disney+, Prime Video and world TV channels",
    availability: "https://schema.org/InStock",
  },
};

const adultsSchemaConfig: ServiceSchemaConfig = {
  path: "/adults",
  name: "18+ Adult Channels — IPTV UK",
  serviceType: "IPTV Adult Content Subscription",
  description: "TV Packages includes a dedicated 18+ adults section within its UK IPTV subscription. PIN-protected and enabled only for verified adult subscribers. Available on Fire TV Stick, Smart TV, Android box and MAG devices with no additional hardware required.",
  crumb: "18+ Adults",
  audience: "Adults aged 18 and over",
  offer: {
    priceCurrency: "GBP",
    price: "20.00",
    description: "Monthly IPTV subscription including 18+ adults section, live channels, movies and entertainment apps",
    availability: "https://schema.org/InStock",
    eligibleRegion: { "@type": "Country", name: "GB" },
  },
};

/**
 * Adds a service page’s JSON-LD (Service + FAQPage + BreadcrumbList) to <head> and removes it on leave.
 * The FAQPage is built from the same list rendered on the page so markup always matches visible content.
 */
function useServicePageSchema(config: ServiceSchemaConfig, faqs: [string, string][]) {
  useEffect(() => {
    const url = SITE + config.path;
    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: config.name,
      serviceType: config.serviceType,
      description: config.description,
      provider: {
        "@type": "LocalBusiness",
        name: "TV Packages",
        url: SITE,
        areaServed: "GB",
        contactPoint: { "@type": "ContactPoint", contactType: "customer support", availableLanguage: "English" },
      },
      areaServed: "GB",
      url,
      ...(config.audience && { audience: { "@type": "Audience", audienceType: config.audience } }),
      ...(config.offer && { offers: { "@type": "Offer", ...config.offer } }),
    };
    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "Services", item: SITE + "/services" },
        { "@type": "ListItem", position: 3, name: config.crumb, item: url },
      ],
    };
    const tags = [service, faqPage, breadcrumb].map((data) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.text = JSON.stringify(data);
      document.head.appendChild(el);
      return el;
    });
    return () => tags.forEach((el) => el.remove());
  }, [config, faqs]);
}

export function useLiveTvSchema(faqs: [string, string][]) {
  useServicePageSchema(liveTvSchemaConfig, faqs);
}

export function useSportsSchema(faqs: [string, string][]) {
  useServicePageSchema(sportsSchemaConfig, faqs);
}

export function useMoviesSchema(faqs: [string, string][]) {
  useServicePageSchema(moviesSchemaConfig, faqs);
}

export function useNetflixSchema(faqs: [string, string][]) {
  useServicePageSchema(netflixSchemaConfig, faqs);
}

export function useAdultsSchema(faqs: [string, string][]) {
  useServicePageSchema(adultsSchemaConfig, faqs);
}

/** Adds homepage-only JSON-LD to <head> and removes it when leaving the page. */
export function useHomeSchema() {
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(homeGraph);
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
}

const FAQS_URL = SITE + "/faqs";

/** FAQs-page graph, built from the same `faqs` list the page renders so markup always matches visible content. */
const faqsGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": FAQS_URL + "#webpage",
      url: FAQS_URL,
      name: "FAQs | TV Packages",
      description: "Answers about supported devices, channels, UK and international entertainment, and how TV Packages setup works.",
      inLanguage: "en-GB",
      isPartOf: { "@id": SITE + "/#website" },
      about: { "@id": SITE + "/#business" },
      breadcrumb: { "@id": FAQS_URL + "#breadcrumb" },
      mainEntity: { "@id": FAQS_URL + "#faqpage" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": FAQS_URL + "#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "FAQs", item: FAQS_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": FAQS_URL + "#faqpage",
      url: FAQS_URL,
      mainEntity: (pageFaqs as [string, string][]).map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
  ],
};

/** Adds FAQs-page JSON-LD (one linked @graph) to <head> and removes it on leave. */
export function useFaqsSchema() {
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(faqsGraph);
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
}
