import { CtaSection } from "../../components/PageParts";
import { ServiceBrandTile } from "../../components/ServiceBrandTile";
import { Icon, WHATSAPP_URL } from "../../components/ui";
import { adultService, netflixService, services } from "../../data/home";
import { Link, usePageMeta } from "../../router";
import { useSettings } from "../../settings";

type ServicePageData = {
  icon: string;
  image: string;
  imageAlt: string;
  title: string;
  text: string;
  tags: string[];
  showcase: string[][];
};

type ChannelTile = [string, string, string, string?];

type GuideGroup = { title: string; items: ChannelTile[]; posters?: boolean };

const serviceLinks = [
  ...services.map((service) => ({ label: service.title, href: `/services/${service.slug}`, icon: service.icon })),
  { label: netflixService.title, href: "/netflix", icon: netflixService.icon },
  { label: adultService.title, href: "/adults", icon: adultService.icon },
];

export function MoreServices({ except }: { except: string }) {
  const { t } = useSettings();
  return (
    <section className="section service-more" aria-label={t("More services")}>
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">{t("Our Services")}</div>
          <h2>{t("More services")}</h2>
        </div>
        <div className="service-more-grid">
          {serviceLinks.filter((item) => item.href !== except).map((item) => (
            <Link key={item.href} href={item.href}>
              <Icon name={item.icon} size={18} />
              <span>{t(item.label)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceFullPage({ service, href, kicker, logo, channels, groups }: { service: ServicePageData; href: string; kicker: string; logo?: string; channels?: ChannelTile[]; groups?: GuideGroup[] }) {
  const { t } = useSettings();
  const tiles = channels ?? service.showcase;
  usePageMeta(`${service.title} | TV Packages`, service.text);
  return (
    <main>
      <article className="service-full">
        <div className="service-full-hero">
          <img className="service-full-photo" src={service.image} alt={service.imageAlt} />
        </div>
        <div className="container service-full-copy">
          <div className="eyebrow">{logo ? <img className="spotlight-logo" src={logo} alt="" /> : <Icon name={service.icon} size={18} />} {t(kicker)}</div>
          <h1>{t(service.title)}</h1>
          <p>{t(service.text)}</p>
          <ul className="service-full-tags">{service.tags.map((tag) => <li key={tag}><Icon name="check" size={15} />{t(tag)}</li>)}</ul>
          {groups ? groups.map((group) => (
            <section key={group.title} className="channel-group" aria-label={t(group.title)}>
              <h2>{t(group.title)}</h2>
              <div className={`service-full-tiles${group.posters ? " is-posters" : ""}`}>
                {group.items.map(([icon, label, brand, photo]) => (
                  <ServiceBrandTile key={label} icon={icon} label={t(label)} brand={brand} photo={photo} caption poster={Boolean(group.posters && photo)} />
                ))}
              </div>
            </section>
          )) : (
            <div className="service-full-tiles" aria-label={t(service.title)}>
              {tiles.map(([icon, label, brand, photo]) => (
                <ServiceBrandTile key={label} icon={icon} label={t(label)} brand={brand} photo={photo} caption />
              ))}
            </div>
          )}
          <a className="secondary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">{t("Ask about this service")} <Icon name="arrow" size={18} /></a>
        </div>
      </article>
      <MoreServices except={href} />
      <CtaSection />
    </main>
  );
}
