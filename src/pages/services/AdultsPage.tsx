import { adultService } from "../../data/home";
import { ServiceFullPage } from "./ServiceFullPage";

export function AdultsPage() {
  return <ServiceFullPage service={adultService} href="/adults" kicker="18+ only" />;
}
