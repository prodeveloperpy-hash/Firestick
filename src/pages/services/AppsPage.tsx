import { services } from "../../data/home";
import { ServiceFullPage } from "./ServiceFullPage";

const service = services.find((item) => item.slug === "apps") ?? services[3];

const channels = [
  ["apps", "Netflix", "netflix"],
  ["apps", "Disney+", "disney"],
  ["play", "Prime Video", "prime"],
  ["film", "HBO", "hbo"],
  ["play", "Apple TV", "appletv"],
  ["film", "Paramount+", "paramount"],
  ["play", "NOW", "now"],
  ["tv", "ITVX", "itvx"],
] as [string, string, string][];

export function AppsPage() {
  return <ServiceFullPage service={service} href="/services/apps" kicker={service.tags[0]} channels={channels} />;
}
