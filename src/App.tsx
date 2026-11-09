import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WHATSAPP_URL, WhatsAppIcon } from "./components/ui";
import { BlogPage, BlogPostPage } from "./pages/Blog";
import { NotFoundPage } from "./pages/NotFound";
import { HomePage } from "./pages/Home";
import { useInitialHashScroll, usePageMeta, usePath } from "./router";
import { ServiceCarousel, ServiceSpotlight } from "./components/ServiceCarousel";
import { PageHero, CtaSection } from "./components/PageParts";
import { useScrollReveal } from "./components/useScrollReveal";
import { useDifferencePath } from "./components/useDifferencePath";
import { useSettings } from "./settings";
import { adultService, netflixService, services } from "./data/home";

export default function App() {
  const path = usePath().replace(/\/+$/, "") || "/";
  const { t } = useSettings();
  useScrollReveal(path);
  useDifferencePath(path);

  let page;
  if (path === "/") {
    page = <HomePage />;
  } else if (path === "/services") {
    page = <ServicesPage />;
  } else if (path === "/blog") {
    page = <BlogPage />;
  } else if (path.startsWith("/blog/")) {
    page = <BlogPostPage slug={path.slice("/blog/".length)} />;
  } else {
    page = <NotFoundPage />;
  }

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
  usePageMeta("Services | Tv Packages", "Explore live TV, sports, movies, series and entertainment apps with Tv Packages. Get compatible-device guidance and personal support on WhatsApp.");
  useInitialHashScroll();
  return (
    <main>
      <PageHero eyebrow={t("Our Services")} title={<>{t("Everything You Love. ")}<em>{t("All in One Place.")}</em></>} lead={t("Explore live TV, premium sports, movies, series and entertainment apps across your compatible devices.")} />
      <section className="services services-page-carousel" id="our-services" aria-label={t("Our Services")}>
        <ServiceCarousel items={services} />
        <ServiceSpotlight service={netflixService} id="netflix" kicker="Movies & series" logo="/logos/netflix.svg" />
        <ServiceSpotlight service={adultService} id="adults" kicker="18+ only" />
      </section>
      <CtaSection />
    </main>
  );
}

