import stepProduct from "../assets/steps/get-stick.jpg";
import stepInstallation from "../assets/steps/easy-setup.jpg";
import stepHome from "../assets/steps/endless.jpg";
import stepSupport from "../assets/steps/whatsapp-support.jpg";
import hlPortable from "../assets/highlights/portable.jpg";
import svcLive from "../assets/services/live-tv.jpg";
import svcSports from "../assets/services/sports.jpg";
import svcMovies from "../assets/services/movies-series.jpg";
import svcApps from "../assets/services/apps.jpg";
import svcAdults from "../assets/services/adults.jpg";
import svcNetflix from "../assets/services/netflix.jpg";
import adultOne from "../assets/services/adult-1.jpg";
import adultTwo from "../assets/services/adult-2.jpg";
import adultThree from "../assets/services/adult-3.jpg";

export const steps = [
  {
    icon: "tv",
    title: "Get Your Tv Packages Device",
    text: "Any recent Fire TV Stick works, including 4K models. Not sure which one? Ask us first.",
    visual: <img src={stepProduct} alt="Tv Packages IPTv streaming stick and remote on a coffee table" loading="lazy" />,
  },
  {
    icon: "devices",
    title: "Plug It Into Your TV",
    text: "Connect the stick to your TV's HDMI port and power, then join your Wi‑Fi. Easy installation in minutes.",
    visual: (
      <img
        src={stepInstallation}
        alt="Connecting a Tv Packages IPTv streaming stick to a television HDMI port"
        loading="lazy"
      />
    ),
  },
  {
    icon: "message",
    title: "Message Us on WhatsApp",
    text: "Tell us your device and what you love to watch. We recommend a plan and send your setup details.",
    visual: (
      <>
        <img src={stepSupport} alt="Messaging a support adviser from a smartphone at home" loading="lazy" />
      </>
    ),
  },
  {
    icon: "layers",
    title: "Enjoy at Home",
    text: "Entertainment for the whole family, with friendly WhatsApp support whenever you need it.",
    visual: (
      <img
        src={stepHome}
        alt="Couple viewing Tv Packages IPTv and streaming service apps on their living-room television"
        loading="lazy"
      />
    ),
  },
];

export const highlightFeatures = [
  ["box", "Portable design", "Take it anywhere with a TV"],
  ["play", "Stream in HD", "Crisp picture, 4K on supported models"],
  ["globe", "Wi‑Fi ready", "Connects to your home network"],
  ["clock", "Setup in minutes", "Guided on WhatsApp"],
];

export const HERO_PHRASES = [
  "All in One Place.",
  "Live Sports & IPTV.",
  "Movies & Series.",
  "On Every Screen.",
];

export const services = [
  {
    icon: "tv",
    slug: "live-tv",
    number: "01",
    image: svcLive,
    imageAlt: "Broadcast news studio with London skyline and a world map",
    title: "Live TV Channels",
    text: "Stay connected to the programmes that matter, from familiar UK favourites to international entertainment.",
    detail: "Live TV Channels are the foundation of any good IPTV package. TV Packages gives you access to 10,000+ live channels covering UK free-to-air television (BBC One, ITV, Channel 4, Channel 5), premium UK channels (Sky Atlantic, Sky Cinema, BT Sport), and international content across Europe, the Middle East, South Asia and beyond. Every channel streams in HD or Full HD, with 4K available on selected content.",
    tags: ["UK + worldwide live TV", "All Sky channels", "News & entertainment"],
    showcase: [["tv", "UK + Worldwide", "live"], ["tv", "sky", "sky"], ["film", "Entertainment", "live"], ["globe", "International TV", "live"]],
  },
  {
    icon: "trophy",
    slug: "sports",
    number: "02",
    image: svcSports,
    imageAlt: "Live football match in a floodlit stadium",
    title: "Premium Sports",
    text: "Follow football, combat sports and major live events on supported sports channels and services.",
    detail: "Premium Sports is where IPTV genuinely outperforms traditional TV packages. Rather than paying £43/month just for Sky Sports or £40/month for a BT Sport add-on, our service includes all major UK sports channels as standard — Sky Sports Main Event, Sky Sports Premier League, TNT Sports 1–4, and Sky Sports Golf. Watch Premier League football, Formula 1, boxing, cricket, rugby and tennis without paying per-sport bolt-on fees.",
    tags: ["All sports channels", "All football events", "PPV events"],
    showcase: [["trophy", "TNT Sports", "tnt"], ["trophy", "UFC", "ufc"], ["trophy", "Boxing + PPV", "sports"], ["trophy", "Football", "sports"]],
  },
  {
    icon: "film",
    slug: "movies",
    number: "03",
    image: svcMovies,
    imageAlt: "Professional cinema camera on a film production set",
    title: "Movies & TV Series",
    text: "Settle in for on-demand movies, binge-worthy series and entertainment for every mood.",
    detail: "Movies & TV Series gives you on-demand access to thousands of titles — including content from Sky Cinema, Netflix originals, HBO, Disney+ and Amazon Prime — all included in one IPTV package, with no separate subscriptions for each platform. New releases are added weekly. Watch at your own pace, pause and resume across devices, and never miss a release because you forgot to record it.",
    tags: ["Movies", "TV series", "On-demand content"],
    showcase: [["film", "NETFLIX", "netflix"], ["film", "HBO", "hbo"], ["film", "Disney+", "disney"], ["play", "prime video", "prime"]],
  },
  {
    icon: "apps",
    slug: "apps",
    number: "04",
    image: svcApps,
    imageAlt: "Remote, phone and tablet ready for home entertainment",
    title: "Entertainment Apps",
    text: "Netflix, Disney+, Amazon Prime Video and all world TV channels, included in one IPTV package.",
    detail: "Entertainment Apps round out the experience. Our service is compatible with every major streaming app and device — Amazon Firestick, Smart TVs (Samsung, LG, Sony), Android boxes, MAG devices and Apple TV — meaning you keep everything you already use and simply add a smarter, more affordable TV layer on top.",
    tags: ["Streaming apps", "Multi-device access", "Popular apps"],
    showcase: [["apps", "NETFLIX", "netflix"], ["apps", "Disney+", "disney"], ["play", "Amazon Prime", "prime"], ["film", "HBO", "hbo"]],
  },
];

export const netflixService = {
  icon: "play",
  number: "N",
  image: svcNetflix,
  imageAlt: "Television in a dark living room ready for Netflix",
  title: "Netflix",
  text: "Netflix is included in your IPTV package. We install the Netflix app directly onto your Fire TV Stick or Smart TV and set you up to watch. You get full access to Netflix movies, series and originals, alongside Disney+, Amazon Prime Video and all world TV channels, all in one package. No switching between devices. No technical setup on your part. Our WhatsApp-guided installation takes minutes.",
  tags: ["Included in your package", "Movies & series", "On your Fire Stick"],
  showcase: [["film", "Movies", "apps"], ["play", "Series", "apps"], ["layers", "Originals", "apps"], ["tv", "On your Fire Stick", "apps"]],
};

export const adultService = {
  icon: "moon",
  number: "18+",
  image: svcAdults,
  imageAlt: "Adult couple in evening clothes sharing a candlelit dinner",
  title: "18+ Adults",
  text: "TV Packages includes a separate 18+ adults section available on supported packages and compatible devices. This includes adult channels, late-night programming and adult movies, all accessible from your existing device with no additional hardware required. The 18+ section is PIN-protected and enabled only for verified adult subscribers. Available on Fire Stick, Smart TV, Android box and MAG devices.",
  tags: ["18+ only", "Adult channels", "Late night"],
  showcase: [["moon", "18+ Channels", "adults", adultOne], ["film", "Adult movies", "adults", adultTwo], ["play", "Late night", "adults", adultThree], ["tv", "On your device", "adults", svcAdults]],
};

export const devices = [
  ["tv", "Amazon Fire TV Stick"],
  ["tv", "Smart TVs"],
  ["box", "Android TV Boxes"],
  ["phone", "Android Smartphones"],
  ["tablet", "Tablets"],
  ["phone", "iPhone"],
  ["tablet", "iPad"],
];

export const why = [
  [
    "layers",
    "Wide Entertainment Selection",
    "A world of live and on-demand entertainment, thoughtfully brought together.",
  ],
  [
    "devices",
    "Multiple Device Compatibility",
    "Watch at home or on the move across your compatible everyday devices.",
  ],
  [
    "sliders",
    "Flexible Service Options",
    "Discuss your viewing needs and find a service option that feels right for you.",
  ],
  [
    "message",
    "Friendly WhatsApp Support",
    "Real people, clear answers and helpful setup guidance when you need it.",
  ],
];

export const plans = [
  {
    name: "1 Month",
    label: "STARTER",
    description: "Try the full package with no long-term commitment.",
    price: "£15",
    period: "for 1 month",
    features: [
      "1 month of full access",
      "All TV channels",
      "All sports channels",
      "Netflix",
      "All adults (18+)",
      "Disney+ and Amazon Prime Video included",
      "WhatsApp-guided setup on your device",
    ],
  },
  {
    name: "3 Months",
    label: "POPULAR",
    description: "A flexible short-term plan for the season.",
    price: "£25",
    period: "for 3 months",
    features: [
      "3 months of full access",
      "All TV channels",
      "All sports channels",
      "Netflix",
      "All adults (18+)",
      "Disney+ and Amazon Prime Video included",
      "WhatsApp-guided setup on your device",
    ],
  },
  {
    name: "6 Months",
    label: "GREAT VALUE",
    description: "Half a year of entertainment at a lower monthly cost.",
    price: "£35",
    period: "for 6 months",
    features: [
      "6 months of full access",
      "All TV channels",
      "All sports channels",
      "Netflix",
      "All adults (18+)",
      "Disney+ and Amazon Prime Video included",
      "WhatsApp-guided setup on your device",
    ],
  },
  {
    name: "1 Year",
    label: "BEST VALUE",
    description: "Our lowest price per month for a full year.",
    price: "£60",
    period: "for 1 year",
    features: [
      "12 months of full access",
      "All TV channels",
      "All sports channels",
      "Netflix",
      "All adults (18+)",
      "Disney+ and Amazon Prime Video included",
      "WhatsApp-guided setup on your device",
    ],
    featured: true,
  },
];

export const faqs = [
  [
    "What devices are supported?",
    "Our services work with many popular devices, including Fire TV Stick, compatible Smart TVs, Android TV boxes, Android phones, iPhone, iPad and tablets.",
  ],
  [
    "Which channels are available?",
    "Channel availability depends on your selected service. Message us on WhatsApp with what you enjoy watching and we’ll explain the current options.",
  ],
  [
    "Do you offer UK and international channels?",
    "Yes, available service options can include a mix of UK and international entertainment. Contact us to discuss the regions and categories you need.",
  ],
  [
    "How can I enquire about packages?",
    "Tap any WhatsApp button on this page to start a conversation. Tell us your device and viewing preferences and our team will guide you.",
  ],
  [
    "How does the setup process work?",
    "After choosing a suitable service, we provide clear setup guidance for your compatible device so you can get started confidently.",
  ],
  [
    "Is customer support available?",
    "Yes. Our friendly team provides WhatsApp support for enquiries and setup guidance.",
  ],
];

