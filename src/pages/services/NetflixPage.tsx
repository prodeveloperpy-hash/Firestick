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

export function NetflixPage() {
  const { t } = useSettings();
  usePageMeta(`${netflixService.title} | TV Packages`, netflixService.text);
  return (
    <main>
      <article className="netflix-browse">
        <section className="netflix-billboard">
          <img src="/cinema/bollywood.jpg" alt={netflixService.imageAlt} />
          <div className="netflix-billboard-copy">
            <img className="netflix-mark" src="/logos/netflix.svg" alt="" />
            <h1>{t("Movies & series")}</h1>
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
      <MoreServices except="/netflix" />
      <CtaSection />
    </main>
  );
}
