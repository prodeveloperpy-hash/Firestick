import { useLayoutEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WHATSAPP_URL, WhatsAppIcon } from "./components/ui";
import { BlogPage, BlogPostPage } from "./pages/Blog";
import { NotFoundPage } from "./pages/NotFound";
import { HomePage } from "./pages/Home";
import { ContactPage, DevicesPage, FaqsPage, HowItWorksPage, PackagesPage, PrivacyPage, TermsPage } from "./pages/SitePages";
import { AdultsPage } from "./pages/services/AdultsPage";
import { AppsPage } from "./pages/services/AppsPage";
import { LiveTvPage } from "./pages/services/LiveTvPage";
import { MoviesPage } from "./pages/services/MoviesPage";
import { NetflixPage } from "./pages/services/NetflixPage";
import { SportsPage } from "./pages/services/SportsPage";
import { navigate, useInitialHashScroll, usePageMeta, usePath } from "./router";
import { ServiceCarousel, ServiceSpotlight } from "./components/ServiceCarousel";
import { IptvFaqSection, SERVICES_FAQS } from "./components/HomeSections";
import { useServicesSchema } from "./components/HomeSchema";
import { PageHero, CtaSection } from "./components/PageParts";
import { useScrollReveal } from "./components/useScrollReveal";
import { useDifferencePath } from "./components/useDifferencePath";
import { useSettings } from "./settings";
import { adultService, netflixService, services } from "./data/home";

const HASH_TO_PATH: Record<string, string> = {
  "our-services": "/services",
  services: "/services",
  "popular-products": "/devices",
  products: "/devices",
  product: "/devices",
  "compatible-devices": "/devices",
  devices: "/devices",
  packages: "/packages",
  faqs: "/faqs",
  faq: "/faqs",
  contact: "/contact",
  "how-it-works": "/how-it-works",
  netflix: "/netflix",
  adults: "/adults",
};

export default function App() {
  const path = usePath().replace(/\/+$/, "") || "/";
  const { t } = useSettings();
  useScrollReveal(path);
  useDifferencePath(path);
  useLayoutEffect(() => {
    if (path === "/products") {
      navigate("/devices", { replace: true });
      return;
    }
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    const dest = HASH_TO_PATH[id];
    if (dest) navigate(dest, { replace: true });
  }, [path]);

  let page;
  if (path === "/") page = <HomePage />;
  else if (path === "/services") page = <ServicesPage />;
  else if (path === "/services/live-tv") page = <LiveTvPage />;
  else if (path === "/services/sports") page = <SportsPage />;
  else if (path === "/services/movies") page = <MoviesPage />;
  else if (path === "/services/apps") page = <AppsPage />;
  else if (path === "/devices" || path === "/products") page = <DevicesPage />;
  else if (path === "/packages") page = <PackagesPage />;
  else if (path === "/faqs") page = <FaqsPage />;
  else if (path === "/contact") page = <ContactPage />;
  else if (path === "/how-it-works") page = <HowItWorksPage />;
  else if (path === "/netflix") page = <NetflixPage />;
  else if (path === "/adults") page = <AdultsPage />;
  else if (path === "/privacy") page = <PrivacyPage />;
  else if (path === "/terms") page = <TermsPage />;
  else if (path === "/blog") page = <BlogPage />;
  else if (path.startsWith("/blog/")) page = <BlogPostPage slug={path.slice("/blog/".length)} />;
  else page = <NotFoundPage />;

  return (
    <div className="site-shell">
      <Header />
      {page}
      <Footer />
      <a
        className="floating-whatsapp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={t("Chat with us on WhatsApp")}
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}

function ServicesPage() {
  const { t } = useSettings();
  usePageMeta("UK IPTV Service: Live Channels, Sports, Movies & Apps | TVPackages.uk", "Our UK IPTV service gives you live TV, Sky Sports, Premier League, movies and 4K streaming on Firestick, Smart TV and more. WhatsApp setup included.");
  useInitialHashScroll();
  useServicesSchema();
  return (
    <main>
      <PageHero eyebrow={t("Our Services")} title={t("UK IPTV Service: Live Channels, Sports, Movies & On-Demand Apps")} lead={t("A UK IPTV service delivers live television channels, sports including Premier League and Sky Sports, movies, series and catch-up TV over your broadband connection, no satellite dish or cable contract required. TVPackages.uk includes personalised WhatsApp setup on your chosen device, so you're watching within the hour of signing up.")} />
      <section className="services services-page-carousel" id="our-services" aria-label={t("Our Services")}>
        <ServiceCarousel items={services} />
        <ServiceSpotlight service={netflixService} id="netflix" kicker="Movies & series" logo="/logos/netflix.svg" />
        <ServiceSpotlight service={adultService} id="adults" kicker="18+ only" />
      </section>
      <IptvFaqSection faqs={SERVICES_FAQS} heading="Frequently Asked Questions: UK IPTV Service" id="services-faq" />
      <CtaSection />
    </main>
  );
}

