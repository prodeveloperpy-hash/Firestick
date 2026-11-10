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
    text: "Enjoy broad streaming app compatibility, subject to supported subscriptions and access.",
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
  text: "Watch Netflix on your Fire TV Stick or smart TV. We install the app and help you sign in with your own subscription.",
  tags: ["Your own subscription", "Movies & series", "On your Fire Stick"],
  showcase: [["film", "Movies", "apps"], ["play", "Series", "apps"], ["layers", "Originals", "apps"], ["tv", "On your Fire Stick", "apps"]],
};

export const adultService = {
  icon: "moon",
  number: "18+",
  image: svcAdults,
  imageAlt: "Adult couple in evening clothes sharing a candlelit dinner",
  title: "18+ Adults",
  text: "A separate adults section for viewers 18 and over, on supported packages and devices.",
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
    name: "Basic Setup",
    label: "ESSENTIAL",
    description: "Get one device up and running with the official free apps.",
    price: "£10",
    features: [
      "1 device (Fire TV Stick, smart TV, tablet or phone)",
      "Wi‑Fi connection and account sign-in",
      "BBC iPlayer, ITVX, Channel 4 and My5",
    ],
  },
  {
    name: "Standard Setup",
    label: "MOST POPULAR",
    description: "Everything in Basic, plus the big streaming apps and family controls.",
    price: "£20",
    features: [
      "Everything in Basic Setup",
      "Netflix, Prime Video and Disney+ installed and signed in",
      "Freely, Pluto TV and Samsung TV Plus where supported",
      "Parental controls and family profiles",
    ],
    featured: true,
  },
  {
    name: "Premium Setup",
    label: "ALL-ROUND",
    description: "A full home setup with extra support after we finish.",
    price: "£30",
    features: [
      "Everything in Standard Setup",
      "Up to 3 devices",
      "NOW, Sky Go and TNT Sports app sign-in (your own subscription needed)",
      "Personal quick-start guide",
      "7 days of follow-up support",
    ],
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

