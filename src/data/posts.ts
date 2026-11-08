import firestickRemote from "../assets/firestick-remote.jpg";
import heroDevices from "../assets/hero-devices.jpg";
import deviceLineup from "../assets/device-lineup.jpg";

export type PostBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date
  readTime: string;
  image: string;
  imageAlt: string;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "how-to-set-up-iptv-on-fire-tv-stick",
    image: firestickRemote,
    imageAlt: "Amazon Fire TV Stick and remote",
    title: "How to Set Up IPTV on an Amazon Fire TV Stick",
    excerpt:
      "A simple, step-by-step walkthrough for getting your Fire TV Stick ready for IPTV, from first power-on to your first channel.",
    category: "Setup Guides",
    date: "2026-10-28",
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "The Amazon Fire TV Stick is one of the easiest and most affordable ways to enjoy IPTV on any TV with an HDMI port. This guide covers the general steps; our team will send you the exact app and login details for your service over WhatsApp.",
      },
      { type: "h2", text: "What you’ll need" },
      {
        type: "ul",
        items: [
          "An Amazon Fire TV Stick (any recent model) plugged into your TV and power",
          "A stable internet connection, ideally 15 Mbps or faster",
          "Your Amazon account to sign in to the device",
          "The player app name and login details provided by our team",
        ],
      },
      { type: "h2", text: "Step-by-step setup" },
      {
        type: "ol",
        items: [
          "Plug in your Fire TV Stick, connect to Wi‑Fi and sign in with your Amazon account.",
          "Go to Settings → My Fire TV → About and install any available system updates.",
          "Enable Developer Options: in Settings → My Fire TV → About, select your device name seven times until you see a confirmation.",
          "Open Settings → My Fire TV → Developer Options and allow app installation for the app you’ll use to download the player (for example, Downloader).",
          "Install the player app we recommend for your service.",
          "Open the app and enter the login details we send you on WhatsApp.",
          "Give the channel list a moment to load, then start watching.",
        ],
      },
      { type: "h2", text: "Tips for the best experience" },
      {
        type: "ul",
        items: [
          "Use the 5 GHz Wi‑Fi band if your router supports it, or an Ethernet adapter for a wired connection.",
          "Restart the Fire TV Stick every few days to clear memory.",
          "Keep the player app updated when a new version is available.",
        ],
      },
      {
        type: "p",
        text: "Stuck at any step? Send us a message on WhatsApp with a photo of your screen and we’ll guide you through it.",
      },
    ],
  },
  {
    slug: "internet-speed-for-smooth-streaming",
    image: heroDevices,
    imageAlt: "Streaming entertainment on a TV, laptop, tablet and phone",
    title: "What Internet Speed Do You Need for Smooth Streaming?",
    excerpt:
      "Buffering is usually a connection problem, not a service problem. Here’s how much speed you really need for HD and 4K, and how to get more from your setup.",
    category: "Streaming Tips",
    date: "2026-10-14",
    readTime: "4 min read",
    body: [
      {
        type: "p",
        text: "Smooth streaming depends heavily on your home connection. The good news: most modern broadband and fibre packages are more than enough, as long as your Wi‑Fi setup is working well.",
      },
      { type: "h2", text: "Recommended speeds" },
      {
        type: "ul",
        items: [
          "SD viewing: around 3–5 Mbps",
          "HD (720p/1080p): around 8–10 Mbps",
          "4K / Ultra HD: around 25 Mbps or more",
          "Multiple screens at once: add the speed for each screen together",
        ],
      },
      { type: "h2", text: "How to check your speed" },
      {
        type: "p",
        text: "Run a speed test on the same device you watch on, at the time you usually watch. Evening speeds are often slower than daytime speeds because more people in your area are online.",
      },
      { type: "h2", text: "Quick fixes for buffering" },
      {
        type: "ol",
        items: [
          "Move your router closer to the TV, or use a Wi‑Fi extender or mesh system.",
          "Switch to the 5 GHz Wi‑Fi band, or connect with an Ethernet cable.",
          "Pause large downloads and updates on other devices while you watch.",
          "Restart your router and streaming device.",
          "If you’re still buffering, ask us on WhatsApp. We can suggest settings that suit your connection.",
        ],
      },
    ],
  },
  {
    slug: "fire-tv-stick-vs-android-box-vs-smart-tv",
    image: deviceLineup,
    imageAlt: "A TV, laptop, tablet, phone and Fire TV Stick side by side",
    title: "Fire TV Stick vs Android TV Box vs Smart TV: Which Is Best for IPTV?",
    excerpt:
      "Not sure which device to use? We compare the three most popular options on price, ease of use and performance.",
    category: "Devices",
    date: "2026-09-30",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Our services work with a wide range of devices, but some are easier to set up than others. Here’s a quick comparison to help you choose.",
      },
      { type: "h2", text: "Amazon Fire TV Stick" },
      {
        type: "p",
        text: "Affordable, compact and simple to use. It plugs straight into your TV’s HDMI port and works with most popular player apps. For 4K TVs, choose a 4K model.",
      },
      {
        type: "ul",
        items: [
          "Best for: most households",
          "Pros: low cost, easy setup, portable",
          "Cons: limited storage on older models",
        ],
      },
      { type: "h2", text: "Android TV Box" },
      {
        type: "p",
        text: "Android boxes offer more storage, more ports and wide app compatibility. Quality varies between brands, so stick with well-known models that receive updates.",
      },
      {
        type: "ul",
        items: [
          "Best for: power users and multiple apps",
          "Pros: flexible, Ethernet port on most models",
          "Cons: quality varies, slightly more setup",
        ],
      },
      { type: "h2", text: "Smart TV" },
      {
        type: "p",
        text: "Many Samsung, LG and Android-based Smart TVs support IPTV player apps directly, with no extra device needed. App availability depends on the TV’s operating system.",
      },
      {
        type: "ul",
        items: [
          "Best for: a clean setup with one remote",
          "Pros: nothing extra to buy",
          "Cons: app choice depends on the TV brand",
        ],
      },
      { type: "h2", text: "Our recommendation" },
      {
        type: "p",
        text: "For most people, a Fire TV Stick gives the best balance of price and simplicity. Tell us which TV you have on WhatsApp and we’ll confirm the best option for you.",
      },
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
