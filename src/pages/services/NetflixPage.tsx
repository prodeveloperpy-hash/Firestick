import { useNetflixSchema } from "../../components/HomeSchema";
import { IptvFaqSection } from "../../components/HomeSections";
import { CtaSection } from "../../components/PageParts";
import { Icon, WHATSAPP_URL } from "../../components/ui";
import { netflixService } from "../../data/home";
import { usePageMeta } from "../../router";
import { useSettings } from "../../settings";
import { MoreServices } from "./ServiceFullPage";

const rows: { title: string; items: [string, string, string][] }[] = [
  {
    title: "Bollywood and Hindi films",
    items: [
      ["Bollywood", "Hindi", "/cinema/bollywood.jpg"],
      ["Pollywood", "Punjabi", "/cinema/pollywood.jpg"],
      ["Tollywood", "Telugu", "/cinema/tollywood.jpg"],
      ["Kollywood", "Tamil", "/cinema/kollywood.jpg"],
      ["Mollywood", "Malayalam", "/cinema/mollywood.jpg"],
      ["Sandalwood", "Kannada", "/cinema/sandalwood.jpg"],
    ],
  },
  {
    title: "Hollywood",
    items: [
      ["Hollywood", "USA", "/cinema/hollywood.jpg"],
      ["UK movies", "UK", "/cinema/british-cinema.jpg"],
      ["Classic", "Classics", "/cinema/genre-classic.jpg"],
      ["Action", "Action", "/cinema/genre-action.jpg"],
      ["Adventure", "Adventure", "/cinema/genre-adventure.jpg"],
      ["Science fiction", "Sci-fi", "/cinema/genre-scifi.jpg"],
    ],
  },
  {
    title: "Lollywood and world cinema",
    items: [
      ["Lollywood", "Pakistan", "/cinema/lollywood.jpg"],
      ["Nollywood", "Nigeria", "/cinema/nollywood.jpg"],
      ["Korean cinema", "Korea", "/cinema/korean-cinema.jpg"],
      ["Chinese cinema", "China", "/cinema/chinese-cinema.jpg"],
      ["Thriller", "Thriller", "/cinema/genre-thriller.jpg"],
      ["Drama", "Drama", "/cinema/genre-drama.jpg"],
    ],
  },
  {
    title: "Comedy, family and more",
    items: [
      ["Comedy", "Comedy", "/cinema/genre-comedy.jpg"],
      ["Romance", "Romance", "/cinema/genre-romance.jpg"],
      ["Family", "Family", "/cinema/genre-family.jpg"],
      ["Animation", "Animation", "/cinema/genre-animation.jpg"],
      ["Documentary", "Docs", "/cinema/genre-documentary.jpg"],
      ["Horror", "Horror", "/cinema/genre-horror.jpg"],
    ],
  },
];

const netflixFaqs: [string, string][] = [
  [
    "Is Netflix included in my TVPackages.uk IPTV subscription?",
    "Yes. Netflix is included in every TVPackages.uk IPTV subscription. We install the Netflix app directly onto your Fire TV Stick or Smart TV as part of the setup process.",
  ],
  [
    "Do I need my own Netflix account?",
    "Yes — Netflix is an independent streaming service and requires its own account. Our team can guide you through creating or linking your existing Netflix account via WhatsApp during your setup.",
  ],
  [
    "Which Netflix content can I watch through my IPTV package?",
    "You get access to the full Netflix UK catalogue — including Bollywood and Hindi films, Punjabi and Telugu cinema, Hollywood blockbusters, British series, Korean dramas, Nollywood, Lollywood, plus comedy, romance, family and children’s content.",
  ],
  [
    "Can I watch Netflix on a Firestick through TVPackages.uk?",
    "Yes. We install Netflix directly onto your Amazon Fire TV Stick or Smart TV as part of your IPTV setup. No separate downloads or configurations needed — it’s ready when your device is.",
  ],
  [
    "What is the cheapest way to get Netflix with IPTV in the UK?",
    "TVPackages.uk IPTV subscriptions start from £20 per month. Netflix, Disney+ and Amazon Prime Video are all included in the same package, alongside thousands of live world TV channels — making it one of the most cost-effective ways to access multiple streaming services in the UK.",
  ],
];

export function NetflixPage() {
  const { t } = useSettings();
  useNetflixSchema(netflixFaqs);
  usePageMeta(
    "Watch Netflix on Your TV | Netflix Included in UK IPTV Package",
    "Netflix is included in your TVPackages.uk IPTV subscription. We install it directly on your Fire TV Stick or Smart TV — Bollywood, Hollywood, Korean cinema and more, all set up via WhatsApp.",
    {
      title: "Netflix Included in Your UK IPTV Package | TVPackages.uk",
      description: "No separate app download. No technical setup. We install Netflix directly on your Firestick or Smart TV and configure everything via WhatsApp.",
    },
  );
  return (
    <main>
      <article className="netflix-browse">
        <section className="netflix-billboard">
          <img src="/cinema/bollywood.jpg" alt={netflixService.imageAlt} />
          <div className="netflix-billboard-copy">
            <img className="netflix-mark" src="/logos/netflix.svg" alt="" />
            <h1>{t("Netflix Movies & Series on IPTV")}</h1>
            <p>{t(netflixService.text)}</p>
            <a className="netflix-play" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <Icon name="play" size={18} /> {t("Ask about this service")}
            </a>
          </div>
        </section>
        {rows.map((row) => (
          <section key={row.title} className="netflix-row-block" aria-label={t(row.title)}>
            <h2>{t(row.title)}</h2>
            <div className="netflix-row">
              {row.items.map(([label, badge, src]) => (
                <article key={label} className="netflix-card">
                  <img src={src} alt="" />
                  <span className="netflix-badge">{t(badge)}</span>
                  <strong>{t(label)}</strong>
                </article>
              ))}
            </div>
          </section>
        ))}
        <p className="netflix-note">{t("Netflix is included in your IPTV package, together with Disney+, Amazon Prime Video and all world TV channels.")}</p>
      </article>
      <IptvFaqSection faqs={netflixFaqs} heading="Frequently Asked Questions About Netflix on IPTV" id="netflix-faq" />
      <MoreServices except="/netflix" />
      <CtaSection />
    </main>
  );
}
