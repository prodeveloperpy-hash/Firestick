import { services } from "../../data/home";
import { ServiceFullPage } from "./ServiceFullPage";

const service = services.find((item) => item.slug === "sports") ?? services[1];

const channels = [
  ["trophy", "TNT Sports", "tnt"],
  ["tv", "Sky", "sky"],
  ["trophy", "DAZN", "dazn"],
  ["trophy", "Premier League", "premierleague"],
  ["trophy", "UFC", "ufc"],
  ["trophy", "WWE", "wwe"],
  ["trophy", "NBA", "nba"],
  ["play", "Fubo", "fubo"],
  ["tv", "FOX", "fox"],
] as [string, string, string][];

export function SportsPage() {
  return <ServiceFullPage service={service} href="/services/sports" kicker={service.tags[0]} channels={channels} />;
}
