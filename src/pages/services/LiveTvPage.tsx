import { services } from "../../data/home";
import { ServiceFullPage } from "./ServiceFullPage";

const service = services.find((item) => item.slug === "live-tv") ?? services[0];

const groups = [
  {
    title: "UK channels",
    items: [
      ["tv", "Sky", "sky"],
      ["tv", "Channel 4", "channel4"],
      ["tv", "ITVX", "itvx"],
      ["play", "NOW", "now"],
      ["trophy", "TNT Sports", "tnt"],
      ["tv", "CNN", "cnn"],
      ["tv", "FOX", "fox"],
    ],
  },
  {
    title: "Asia and international",
    items: [
      ["play", "Jio", "jio"],
      ["play", "Bilibili", "bilibili"],
      ["play", "Crunchyroll", "crunchyroll"],
      ["play", "Rakuten", "rakuten"],
      ["tv", "YouTube TV", "youtubetv"],
      ["tv", "Animal Planet", "animalplanet"],
    ],
  },
  {
    title: "Movies and series apps",
    items: [
      ["film", "Netflix", "netflix"],
      ["apps", "Disney+", "disney"],
      ["play", "Prime Video", "prime"],
      ["film", "HBO", "hbo"],
      ["film", "Max", "max"],
      ["film", "Paramount+", "paramount"],
      ["play", "Apple TV", "appletv"],
      ["film", "STARZ", "starz"],
      ["film", "Showtime", "showtime"],
      ["film", "MUBI", "mubi"],
      ["play", "Tubi", "tubi"],
      ["film", "Warner Bros.", "warner"],
    ],
  },
] as { title: string; items: [string, string, string][] }[];

export function LiveTvPage() {
  return <ServiceFullPage service={service} href="/services/live-tv" kicker={service.tags[0]} groups={groups} />;
}
