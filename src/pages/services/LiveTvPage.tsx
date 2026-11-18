import { useLiveTvSchema } from "../../components/HomeSchema";
import { services } from "../../data/home";
import { ServiceFullPage } from "./ServiceFullPage";

const service = services.find((item) => item.slug === "live-tv") ?? services[0];

const liveTvFaqs: [string, string][] = [
  [
    "What UK channels are included in a TVPackages.uk live TV subscription?",
    "Your subscription includes the complete UK free-to-air lineup — BBC One to Four (all UK regions), ITV1–ITV4, Channel 4, E4, Film4, Channel 5 and its variants — alongside premium pay channels including Sky Sports (all channels), TNT Sports 1–4, Sky Atlantic, Sky Cinema and Sky Max. International channels are also included.",
  ],
  [
    "Does TVPackages.uk IPTV include Sky Sports and TNT Sports?",
    "Yes. All Sky Sports channels (Main Event, Premier League, Football, F1, Cricket, Golf) and TNT Sports 1–4 are included in every plan. You can watch Premier League football, Formula 1, Champions League, cricket and rugby without a separate Sky or TNT Sports subscription.",
  ],
  [
    "What internet speed do I need for UK live TV IPTV streaming?",
    "For HD streaming, a minimum of 10 Mbps is recommended. For 4K channels, 25 Mbps or above is advised. A wired Ethernet connection delivers the most stable experience for live sports. Most standard UK broadband connections are more than sufficient.",
  ],
  [
    "Can I watch live TV on more than one device at the same time?",
    "Supported connections depend on your chosen plan. Contact us via WhatsApp to confirm multi-screen options for your household. Our team will recommend the most suitable plan based on how many devices you need.",
  ],
  [
    "Is there a free trial for the live TV service?",
    "Yes — a 24-hour free trial is available. Send us a message on WhatsApp and your trial will typically be active within the hour. No payment details are required to start your trial.",
  ],
];

const groups = [
  {
    title: "Which UK Live TV Channels Are Included with TVPackages.uk?",
    intro: "Every major UK channel is included as standard — no bolt-ons, no extras to buy. Your subscription covers the full free-to-air lineup alongside the premium pay-TV channels you’d normally pay Sky or Virgin Media separately to access.",
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
    title: "Can I Watch Asian and International Channels via IPTV in the UK?",
    intro: "Yes — alongside your full UK channel lineup, TVPackages.uk includes hundreds of channels from South Asia, East Asia and beyond.",
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
    title: "Which Movie and Series Apps Are Available on Your IPTV Service?",
    intro: "Your TVPackages.uk subscription is compatible with the world’s leading streaming apps — installed directly onto your device by our team as part of setup. We configure each app and help you sign in with your own existing account, so everything is accessible from one screen.",
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
  useLiveTvSchema(liveTvFaqs);
  return <ServiceFullPage service={service} href="/services/live-tv" kicker={service.tags[0]} groups={groups} meta={{ title: "Live TV Channels UK | IPTV BBC, ITV & Sky Sports", description: "Stream 10,000+ live UK TV channels via IPTV — BBC, ITV, Sky Sports, TNT Sports & international. HD & 4K. No contract. Free trial via WhatsApp. UK-based setup.", og: { title: "Watch Live UK TV on Any Device — TVPackages.uk", description: "BBC, ITV, Sky Sports, TNT Sports, Asian channels and streaming apps — all in one IPTV subscription. HD & 4K. No contract. Free 24-hour trial." } }} cta={{ title: "Ready to Watch Live UK TV Without a Satellite Dish or Contract?", text: "Skip the 18-month Sky contract. Skip the engineer visit. Skip the dish. TVPackages.uk gives you live BBC, ITV, Sky Sports, TNT Sports and 10,000+ channels over your existing broadband — set up by a real UK-based team, guided via WhatsApp, usually within the hour." }} faqs={{ heading: "Live TV UK IPTV — Frequently Asked Questions", id: "live-tv-faq", items: liveTvFaqs }} about={{ label: "About TVPackages.uk Live TV Service:", text: "TVPackages.uk is a UK-based IPTV provider offering live television streaming via broadband across the UK. The service includes 10,000+ live channels covering UK free-to-air television (BBC, ITV, Channel 4, Channel 5), premium pay channels (Sky Sports, TNT Sports, Sky Cinema, Sky Atlantic), Asian and international channels (Jio, Bilibili, Crunchyroll), and compatibility with major streaming apps (Netflix, Disney+, Amazon Prime Video, HBO). Channels stream in Full HD and 4K on Amazon Firestick, Smart TV, Android, MAG boxes, iPhone and iPad. Subscription plans start from £20/month with no long-term contract. A 24-hour free trial is available via WhatsApp. Setup is guided by a UK-based team. Website: tvpackages.uk" }} />;
}
