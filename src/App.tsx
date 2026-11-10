import { useEffect, useLayoutEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WHATSAPP_URL, WhatsAppIcon } from "./components/ui";
import { BlogPage, BlogPostPage } from "./pages/Blog";
import { NotFoundPage } from "./pages/NotFound";
import { HomePage } from "./pages/Home";
import { AdultsPage, ContactPage, DevicesPage, FaqsPage, HowItWorksPage, NetflixPage, PackagesPage, PrivacyPage, TermsPage } from "./pages/SitePages";
import { navigate, useInitialHashScroll, usePageMeta, usePath } from "./router";
import { ServiceCarousel, ServiceSpotlight } from "./components/ServiceCarousel";
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
  else if (path.startsWith("/services/")) {
    const slug = decodeURIComponent(path.slice("/services/".length));
    page = services.some((service) => service.slug === slug) ? <ServicesPage slug={slug} /> : <NotFoundPage />;
  }
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

function ServicesPage({ slug }: { slug?: string }) {
  const { t } = useSettings();
  const index = slug ? services.findIndex((service) => service.slug === slug) : -1;
  const current = index >= 0 ? services[index] : null;
  usePageMeta(
    current ? `${current.title} | Tv Packages` : "Services | Tv Packages",
    current ? current.text : "Explore live TV, sports, movies, series and entertainment apps with Tv Packages. Get compatible-device guidance and personal support on WhatsApp.",
  );
  useInitialHashScroll();
  useEffect(() => {
    if (!current) return;
    const frame = requestAnimationFrame(() => document.getElementById("our-services")?.scrollIntoView({ block: "start" }));
    return () => cancelAnimationFrame(frame);
  }, [current]);
  return (
    <main>
      <PageHero eyebrow={t("Our Services")} title={<>{t("Everything You Love. ")}<em>{t("All in One Place.")}</em></>} lead={t("Explore live TV, premium sports, movies, series and entertainment apps across your compatible devices.")} />
      <section className="services services-page-carousel" id="our-services" aria-label={t("Our Services")}>
        <ServiceCarousel key={current?.slug ?? "all"} items={services} initial={index >= 0 ? index : 0} autoplay={!current} />
        <ServiceSpotlight service={netflixService} id="netflix" kicker="Movies & series" logo="/logos/netflix.svg" />
        <ServiceSpotlight service={adultService} id="adults" kicker="18+ only" />
      </section>
      <CtaSection />
    </main>
  );
}

