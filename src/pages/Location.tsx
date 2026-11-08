import { CtaSection, PageHero } from "../components/PageParts";
import { Icon, WhatsAppButton } from "../components/ui";
import { locations } from "../data/locations";
import { Link, usePageMeta } from "../router";
import { NotFoundPage } from "./NotFound";

const devices = [
  ["tv", "Amazon Fire TV Stick"],
  ["tv", "Smart TVs"],
  ["box", "Android TV Boxes"],
  ["phone", "Android & iPhone"],
  ["tablet", "Tablets & iPad"],
];

export function LocationPage({ slug }: { slug: string }) {
  const loc = locations.find((l) => l.slug === slug);
  usePageMeta(
    loc ? `IPTV in ${loc.city}, Pakistan | Firestick` : "Location not found | Firestick",
    loc
      ? `Premium IPTV entertainment for viewers in ${loc.city}. Live TV, sports, movies and series on your Fire TV Stick, Smart TV or phone, with friendly WhatsApp support.`
      : "",
  );
  if (!loc) return <NotFoundPage />;

  const highlights = [
    [
      "tv",
      "Live TV & International Channels",
      `Enjoy UK, Pakistani and international entertainment from home in ${loc.city}.`,
    ],
    [
      "trophy",
      "Sports & Big Events",
      "Ask us about cricket, football, boxing and UFC coverage on your selected service.",
    ],
    [
      "film",
      "Movies & TV Series",
      "On-demand films, dramas and binge-worthy series for the whole family.",
    ],
    [
      "message",
      "WhatsApp Setup Support",
      `Our team guides viewers in ${loc.city} through setup, step by step, on WhatsApp.`,
    ],
  ];

  const others = locations.filter((l) => l.slug !== loc.slug);

  return (
    <main>
      <PageHero
        eyebrow={
          <>
            <Icon name="pin" size={14} /> {loc.city}, {loc.province}
          </>
        }
        title={
          <>
            Premium IPTV in <em>{loc.city}.</em>
          </>
        }
        lead={`Live TV, sports, movies and series for viewers across ${loc.city}, on your Fire TV Stick, Smart TV, Android box or phone. Message us on WhatsApp and we’ll help you choose the right option.`}
      >
        <div className="hero-actions">
          <WhatsAppButton>Enquire on WhatsApp</WhatsAppButton>
          <Link className="secondary-button" href="/#packages">
            View Packages <Icon name="arrow" size={18} />
          </Link>
        </div>
      </PageHero>

      <section className="section why-section">
        <div className="container">
          <div className="section-heading split">
            <div>
              <div className="eyebrow">Why viewers in {loc.city} choose us</div>
              <h2>
                Entertainment made <em>simple.</em>
              </h2>
            </div>
            <p>
              From your first message to getting set up, we keep everything clear, personal and easy
              to follow, wherever you are in {loc.city}.
            </p>
          </div>
          <div className="why-grid">
            {highlights.map(([icon, title, text], i) => (
              <article className="why-card" key={title}>
                <span className="why-number">0{i + 1}</span>
                <div className="icon-box">
                  <Icon name={icon} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section location-details">
        <div className="container location-grid">
          <div className="location-card">
            <div className="eyebrow">Areas we help</div>
            <h3>Across {loc.city}</h3>
            <p>
              We support viewers throughout the city, including these areas and their surroundings:
            </p>
            <div className="area-chips">
              {loc.areas.map((a) => (
                <span key={a}>
                  <Icon name="pin" size={13} /> {a}
                </span>
              ))}
            </div>
          </div>
          <div className="location-card">
            <div className="eyebrow">Compatible devices</div>
            <h3>Watch on your screens</h3>
            <p>Not sure your device will work? Send us the model and we’ll check for you.</p>
            <div className="device-grid">
              {devices.map(([icon, label]) => (
                <div className="device-pill" key={label}>
                  <span>
                    <Icon name={icon} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section other-locations">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">Across Pakistan</div>
            <h2>
              Other cities we <em>serve.</em>
            </h2>
          </div>
          <div className="city-links">
            {others.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`}>
                <Icon name="pin" size={15} />
                <span>
                  <strong>{l.city}</strong>
                  <small>{l.province}</small>
                </span>
                <Icon name="arrow" size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`Ready to start watching in ${loc.city}?`}
        text="Tell us which device you use and what you love to watch. Our team will recommend the right option and help you get set up."
      />
    </main>
  );
}
