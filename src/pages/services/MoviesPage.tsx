import { useMoviesSchema } from "../../components/HomeSchema";
import { services } from "../../data/home";
import { ServiceFullPage } from "./ServiceFullPage";

const service = services.find((item) => item.slug === "movies") ?? services[2];

const photo = (label: string, file: string): [string, string, string, string] => ["film", label, "movies", `/cinema/${file}`];

const groups = [
  {
    title: "Which Cinema Libraries Can You Stream with TVPackages.uk?",
    intro: "Your subscription covers every major world cinema tradition — not just Hollywood. Whether your household watches Bollywood blockbusters, Punjabi Pollywood hits, South Indian Tollywood action, or UK independents, everything is included under a single plan.",
    posters: true,
    items: [
      photo("Hollywood", "hollywood.jpg"),
      photo("Bollywood", "bollywood.jpg"),
      photo("Lollywood", "lollywood.jpg"),
      photo("Tollywood", "tollywood.jpg"),
      photo("Kollywood", "kollywood.jpg"),
      photo("Mollywood", "mollywood.jpg"),
      photo("Sandalwood", "sandalwood.jpg"),
      photo("Pollywood", "pollywood.jpg"),
      photo("Nollywood", "nollywood.jpg"),
      photo("UK movies", "british-cinema.jpg"),
      photo("Korean cinema", "korean-cinema.jpg"),
      photo("Chinese cinema", "chinese-cinema.jpg"),
    ],
  },
  {
    title: "What Movie Genres Are Available on Demand?",
    intro: "Browse by mood or genre. Every major category is available on demand, from edge-of-your-seat thrillers to family-friendly animation.",
    posters: true,
    items: [
      photo("Action", "genre-action.jpg"),
      photo("Comedy", "genre-comedy.jpg"),
      photo("Romance", "genre-romance.jpg"),
      photo("Thriller", "genre-thriller.jpg"),
      photo("Horror", "genre-horror.jpg"),
      photo("Drama", "genre-drama.jpg"),
      photo("Animation", "genre-animation.jpg"),
      photo("Family", "genre-family.jpg"),
      photo("Science fiction", "genre-scifi.jpg"),
      photo("Documentary", "genre-documentary.jpg"),
      photo("Adventure", "genre-adventure.jpg"),
      photo("Classic", "genre-classic.jpg"),
    ],
  },
  {
    title: "Which Studios and Streaming Apps Are Available?",
    intro: "Your TVPackages.uk subscription is compatible with the world’s leading studios and streaming platforms. Our UK-based team configures each app on your device as part of your setup — so you get everything accessible from one screen, without the technical hassle.",
    outro: "Not sure your device is supported? You can check device compatibility in seconds.",
    items: [
      ["film", "Netflix", "netflix"],
      ["film", "HBO", "hbo"],
      ["film", "Max", "max"],
      ["apps", "Disney+", "disney"],
      ["play", "Prime Video", "prime"],
      ["play", "Apple TV", "appletv"],
      ["film", "Paramount+", "paramount"],
      ["film", "Warner Bros.", "warner"],
      ["film", "STARZ", "starz"],
      ["film", "Showtime", "showtime"],
      ["film", "MUBI", "mubi"],
      ["play", "Tubi", "tubi"],
      ["play", "Crunchyroll", "crunchyroll"],
    ],
  },
];

const internalLinks: Record<string, string> = {
  "explore all IPTV packages": "/packages",
  "check device compatibility": "/devices",
  "live TV channels": "/services/live-tv",
};

const moviesFaqs: [string, string][] = [
  [
    "Can I watch Bollywood, Tollywood and South Indian films on TVPackages.uk?",
    "Yes. The movies and TV series service includes cinema from across India — Bollywood (Hindi), Tollywood (Telugu), Kollywood (Tamil), Mollywood (Malayalam), Lollywood (Pakistani/Urdu) and Punjabi Pollywood content. All are available on demand as part of your standard subscription.",
  ],
  [
    "Does TVPackages.uk include Netflix and Disney+ in the subscription?",
    "Netflix, Disney+ and Amazon Prime Video are configured and set up by our UK-based team on your device — but they require your own active subscription to access. Apps like HBO, Max, Paramount+, STARZ, Showtime, MUBI and Tubi are included and do not require a separate subscription.",
  ],
  [
    "Can I watch Korean dramas and Chinese films on TVPackages.uk?",
    "Yes. Korean cinema and K-dramas are available on demand, alongside Mandarin and Cantonese-language films and Chinese series. Crunchyroll is also configured for anime streaming. The service covers a wide range of Asian entertainment for the UK’s multicultural audience.",
  ],
  [
    "What movie genres are available on demand?",
    "Your subscription covers 12 genres on demand: Action, Comedy, Romance, Thriller, Horror, Drama, Animation, Family, Science Fiction, Documentary, Adventure and Classic. Films are searchable by genre, language, and title on your Firestick, Smart TV or Android device.",
  ],
  [
    "Is there a free trial for the movies and TV series service?",
    "Yes — a 24-hour free trial is available via WhatsApp. Contact our UK-based team and you’ll be watching on demand within the hour. No payment details are required. Plans start from £20/month after the trial.",
  ],
];

export function MoviesPage() {
  useMoviesSchema(moviesFaqs);
  return <ServiceFullPage service={service} href="/services/movies" kicker={service.tags[0]} groups={groups} links={internalLinks} meta={{ title: "Movies & TV Series — Stream World Cinema via IPTV", description: "Stream Hollywood, Bollywood, Korean cinema & 12 genres on demand via IPTV. Netflix, HBO, Disney+ & more configured on your device. No contract. Free 24hr trial.", og: { title: "Every Cinema. Every Genre. All On Demand — TVPackages.uk", description: "Hollywood, Bollywood, Korean, South Indian cinema + Netflix, HBO, Disney+ & more — configured on your device by our UK-based team. Free 24-hour trial." } }} faqs={{ heading: "Movies & TV Series IPTV — Frequently Asked Questions", id: "movies-faq", items: moviesFaqs }} />;
}
