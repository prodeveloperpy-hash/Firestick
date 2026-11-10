import { services } from "../../data/home";
import { ServiceFullPage } from "./ServiceFullPage";

const service = services.find((item) => item.slug === "movies") ?? services[2];

const photo = (label: string, file: string): [string, string, string, string] => ["film", label, "movies", `/cinema/${file}`];

const groups = [
  {
    title: "Hollywood, Bollywood and every cinema",
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
    title: "All movie categories",
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
    title: "Studios and apps",
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

export function MoviesPage() {
  return <ServiceFullPage service={service} href="/services/movies" kicker={service.tags[0]} groups={groups} />;
}
