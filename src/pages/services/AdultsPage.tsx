import { useAdultsSchema } from "../../components/HomeSchema";
import { adultService } from "../../data/home";
import { ServiceFullPage } from "./ServiceFullPage";

const groups = [
  {
    title: "What’s Included in the 18+ Section",
    intro: "The adults section covers four content areas — 18+ channels, adult movies, late-night programming and on-device access — all included within your existing TV Packages IPTV subscription. There is nothing extra to subscribe to and nothing extra to download. Our UK-based team enables the section during your WhatsApp setup, locks it behind a PIN of your choice, and keeps it completely separate from the main channel list. Whether you watch on a Fire TV Stick, Smart TV or Android box, the 18+ section is ready on your device from day one.",
    items: adultService.showcase as [string, string, string, string?][],
  },
];

const adultsFaqs: [string, string][] = [
  [
    "Is the 18+ adult section included in my TV Packages subscription?",
    "Yes. The 18+ adults section is included in supported TV Packages IPTV packages. It is enabled by our team during your WhatsApp-guided setup and is available to verified adult subscribers only.",
  ],
  [
    "Is the adult section PIN-protected?",
    "Yes. The 18+ section is PIN-protected and kept completely separate from the main channel list. Only authorised adults who have set up and know the PIN can access the content. This is configured during your initial device setup.",
  ],
  [
    "Do I need any additional hardware to access the 18+ section?",
    "No. The adult section is accessible from your existing Fire TV Stick, Smart TV, Android box or MAG device. No additional hardware, no separate app and no additional downloads are required.",
  ],
  [
    "Which devices support the 18+ adult section?",
    "The 18+ section is available on Amazon Fire TV Stick, Smart TV (Samsung, LG and Android-based), Android TV boxes and MAG devices. Our team confirms compatibility during your WhatsApp setup conversation.",
  ],
  [
    "Is adult content on IPTV legal in the UK?",
    "IPTV as a technology is legal in the UK. TV Packages provides access to adult content as part of its subscription service for verified adult subscribers aged 18 and over. Access is restricted by PIN and limited to eligible subscribers only.",
  ],
];

export function AdultsPage() {
  useAdultsSchema(adultsFaqs);
  return (
    <ServiceFullPage
      service={adultService}
      href="/adults"
      kicker="18+ only"
      groups={groups}
      meta={{
        title: "18+ Adult Channels on IPTV UK | PIN-Protected, No Extra Hardware",
        description: "TV Packages includes a separate 18+ adults section in your IPTV package. PIN-protected, late-night channels and adult movies — installed on your Firestick or Smart TV via WhatsApp. UK subscribers only.",
        og: {
          title: "18+ Adult Channels Included in Your UK IPTV Package | TVPackages.uk",
          description: "A separate, PIN-protected 18+ section available on supported IPTV packages. Installed directly on your device — no additional hardware required. Available to verified adult subscribers in the UK.",
        },
      }}
      faqs={{ heading: "Frequently Asked Questions — 18+ Adult Content on IPTV", id: "adults-faq", items: adultsFaqs }}
    />
  );
}
