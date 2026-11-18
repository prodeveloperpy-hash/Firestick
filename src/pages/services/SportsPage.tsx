import { useSportsSchema } from "../../components/HomeSchema";
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

const groups = [
  {
    title: "Which Premium Sports Channels Are Included with TV Packages?",
    intro: "Every major sports channel available to UK viewers is included in your subscription — Sky Sports, TNT Sports and more, all accessible from one plan.",
    items: channels,
  },
];

const after = {
  title: "Why Do UK Sports Fans Choose TV Packages Over Sky?",
  intro: "Sky Ultimate TV costs over £74 per month in 2026. Add TNT Sports separately and the full UK sports package reaches £100+ per month — over £1,200 a year. TVPackages.uk includes both Sky Sports and TNT Sports in a single subscription, without the long-term contract.",
  outro: "Not sure your device is supported? You can check device compatibility in seconds.",
  subtitle: "What you get with TVPackages.uk that Sky can’t offer:",
  points: [
    "All sports in one plan — Sky Sports and TNT Sports together, no add-on fees",
    "No 18-month contract — pay monthly, 6-monthly or annually and cancel any time",
    "Any device — Firestick, Smart TV, Android, iPhone, iPad, MAG box",
    "UK-based WhatsApp setup — a real person sets up your channels, usually within the hour",
    "24-hour free trial — watch live sport before you pay anything",
    "HD and 4K streaming — where available on the channel",
  ],
};

const internalLinks: Record<string, string> = {
  "view our packages and pricing": "/packages",
  "check device compatibility": "/devices",
  "explore all IPTV services": "/services",
  "live TV channels": "/services/live-tv",
};

const sportsFaqs: [string, string][] = [
  [
    "Does TVPackages.uk include all Sky Sports channels?",
    "Yes. Your subscription includes the complete Sky Sports lineup: Sky Sports Main Event, Sky Sports Premier League, Sky Sports Football, Sky Sports Cricket, Sky Sports F1, Sky Sports Golf, Sky Sports Arena and Sky Sports Action. Every Sky Sports channel is included as standard — no bolt-ons required.",
  ],
  [
    "Are TNT Sports and Champions League included?",
    "Yes. TNT Sports 1–4 are included in every plan, covering the UEFA Champions League, Europa League, Conference League, Premier League fixtures, Premiership Rugby, UFC and world championship boxing. The Champions League Final is broadcast on TNT Sports Ultimate, also included.",
  ],
  [
    "Can I watch Formula 1 live on TVPackages.uk?",
    "Yes. The complete Formula 1 season is available via Sky Sports F1 — every practice session, qualifying round and race. No separate F1 subscription is needed. This includes the British Grand Prix at Silverstone and the Abu Dhabi season finale.",
  ],
  [
    "Is there a free trial for the sports package?",
    "Yes — a 24-hour free trial is available via WhatsApp. Contact our UK-based team and you’ll be watching live sport within the hour. No payment details are required to start your trial. Plans start from £20/month after the trial.",
  ],
  [
    "What internet speed do I need to stream HD and 4K sports?",
    "For HD sports streaming, a minimum of 10 Mbps is recommended. For 4K channels such as Sky Sports UHD and TNT Sports Ultimate, 25 Mbps or above is advised. A wired Ethernet connection delivers the most stable experience for live Premier League matches and F1 race days.",
  ],
];

export function SportsPage() {
  useSportsSchema(sportsFaqs);
  return <ServiceFullPage service={service} href="/services/sports" kicker={service.tags[0]} groups={groups} after={after} links={internalLinks} meta={{ title: "Premium Sports Channels UK | Sky Sports & TNT IPTV", description: "Stream Sky Sports, TNT Sports, Premier League, F1, cricket & boxing via IPTV in the UK. HD & 4K. All sports one plan. No contract. Free 24hr trial via WhatsApp.", og: { title: "All UK Sports Channels in One IPTV Plan — TVPackages.uk", description: "Sky Sports, TNT Sports, Premier League, Champions League, F1 & more — streamed in HD and 4K on any device. UK-based setup via WhatsApp. Free 24-hour trial." } }} faqs={{ heading: "UK Sports IPTV — Frequently Asked Questions", id: "sports-faq", items: sportsFaqs }} />;
}
