import { IptvFaqSection } from "../../components/HomeSections";
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
  heading?: string;
  pageText?: string;
  text: string;
  tags: string[];
  showcase: string[][];
};

type ChannelTile = [string, string, string, string?];

type GuideGroup = { title: string; intro?: string | string[]; subtitle?: string; outro?: string; items: ChannelTile[]; posters?: boolean };

const serviceLinks = [
  ...services.map((service) => ({ label: service.title, href: `/services/${service.slug}`, icon: service.icon })),
  { label: netflixService.title, href: "/netflix", icon: netflixService.icon },
  { label: adultService.title, href: "/adults", icon: adultService.icon },
];

/** Turns each anchor phrase found in `text` into an internal link; everything else stays plain text. */
function linkify(text: string, links?: Record<string, string>) {
  if (!links) return text;
  const phrases = Object.keys(links);
  if (phrases.length === 0) return text;
  const escaped = phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return text.split(new RegExp(`(${escaped.join("|")})`)).map((part, index) =>
    links[part] ? <Link key={index} href={links[part]}>{part}</Link> : part,
  );
}

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

export function ServiceFullPage({ service, href, kicker, logo, channels, groups, about, faqs, cta, meta, after, links }: { service: ServicePageData; href: string; kicker: string; logo?: string; channels?: ChannelTile[]; groups?: GuideGroup[]; about?: { label: string; text: string }; links?: Record<string, string>; after?: { title: string; intro: string; subtitle: string; points: string[]; outro?: string }; meta?: { title: string; description: string; og?: { title: string; description: string } }; cta?: { title: string; text: string }; faqs?: { heading: string; id: string; items: [string, string][] } }) {
  const { t } = useSettings();
  const tiles = channels ?? service.showcase;
  usePageMeta(meta?.title ?? `${service.title} | TV Packages`, meta?.description ?? service.text, meta?.og);
  return (
    <main>
      <article className="service-full">
        <div className="service-full-hero">
          <img className="service-full-photo" src={service.image} alt={service.imageAlt} />
        </div>
        <div className="container service-full-copy">
          <div className="eyebrow">{logo ? <img className="spotlight-logo" src={logo} alt="" /> : <Icon name={service.icon} size={18} />} {t(kicker)}</div>
          <h1>{t(service.heading ?? service.title)}</h1>
          <p>{linkify(t(service.pageText ?? service.text), links)}</p>
          <ul className="service-full-tags">{service.tags.map((tag) => <li key={tag}><Icon name="check" size={15} />{t(tag)}</li>)}</ul>
          {about && <aside className="service-about"><p><strong>{t(about.label)}</strong> {t(about.text)}</p></aside>}
          {groups ? groups.map((group) => (
            <section key={group.title} className="channel-group" aria-label={t(group.title)}>
              <h2>{t(group.title)}</h2>
              {[group.intro ?? []].flat().map((paragraph) => <p key={paragraph}>{t(paragraph)}</p>)}
              {group.subtitle && <p className="channel-group-subtitle"><strong>{t(group.subtitle)}</strong></p>}
              <div className={`service-full-tiles${group.posters ? " is-posters" : ""}`}>
                {group.items.map(([icon, label, brand, photo]) => (
                  <ServiceBrandTile key={label} icon={icon} label={t(label)} brand={brand} photo={photo} caption poster={Boolean(group.posters && photo)} />
                ))}
              </div>
              {group.outro && <p className="channel-group-outro">{linkify(t(group.outro), links)}</p>}
            </section>
          )) : (
            <div className="service-full-tiles" aria-label={t(service.title)}>
              {tiles.map(([icon, label, brand, photo]) => (
                <ServiceBrandTile key={label} icon={icon} label={t(label)} brand={brand} photo={photo} caption />
              ))}
            </div>
          )}
          <div className="service-actions">
            <a className="secondary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">{t("Ask about this service")} <Icon name="arrow" size={18} /></a>
            <Link className="packages-button" href="/packages">{t("Our Packages")} <Icon name="arrow" size={18} /></Link>
          </div>
          {after && (
            <section className="channel-group service-after" aria-label={t(after.title)}>
              <h2>{t(after.title)}</h2>
              <p>{linkify(t(after.intro), links)}</p>
              <p className="channel-group-subtitle"><strong>{t(after.subtitle)}</strong></p>
              <ul className="service-after-list">
                {after.points.map((point) => {
                  const [lead, ...rest] = point.split(" — ");
                  return <li key={point}><Icon name="check" size={16} /><span><strong>{t(lead)}</strong>{rest.length > 0 && <> — {t(rest.join(" — "))}</>}</span></li>;
                })}
              </ul>
              {after.outro && <p className="service-after-outro">{linkify(t(after.outro), links)}</p>}
            </section>
          )}
        </div>
      </article>
      {faqs && <IptvFaqSection faqs={faqs.items} heading={faqs.heading} id={faqs.id} />}
      <MoreServices except={href} />
      <CtaSection title={cta?.title} text={cta?.text} />
    </main>
  );
}
