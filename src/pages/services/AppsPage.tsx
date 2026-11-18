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

const appsFaqs: [string, string][] = [
  [
    "What is the best IPTV app for UK viewers in 2026?",
    "The best IPTV app depends on your device. TiviMate is the top choice for Firestick and Android TV users thanks to its fast EPG and smooth live sport performance. IPTV Smarters Pro is the best all-rounder if you use multiple device types. For Samsung Smart TVs, Smart IPTV is the most reliable native option; for LG Smart TVs, SS IPTV. iPhone and Apple TV users are best served by GSE Smart IPTV or IPTV Smarters Pro.",
  ],
  [
    "What is the difference between IPTV Smarters and Smart IPTV?",
    "Despite the similar names, these are entirely different apps. IPTV Smarters Pro is a free, cross-platform player that runs on Android, iOS, Firestick, Windows, Mac, and some Smart TVs. Smart IPTV (also called SIPTV) is a separate app built specifically for Samsung and LG Smart TVs — it installs natively from the TV’s app store and does not require any additional device. If you have a Samsung or LG TV, Smart IPTV is the native option; if you want one app across all your devices, IPTV Smarters Pro is the better fit.",
  ],
  [
    "Is TiviMate free to use in the UK?",
    "TiviMate has a free tier that supports a single M3U playlist and covers basic live TV viewing. The premium version — available as an annual subscription or one-off purchase — adds multiple playlist support, EPG catch-up, channel recording, and picture-in-picture. For most UK viewers who want the full experience, the premium upgrade is worth the small additional cost. TVPackages.uk’s team can help you configure TiviMate Premium as part of WhatsApp onboarding.",
  ],
  [
    "Do I need a Firestick to use IPTV in the UK?",
    "No. While the Amazon Firestick is one of the most popular IPTV devices in the UK, it is not required. Modern Samsung and LG Smart TVs from 2017 onwards support native IPTV apps (Smart IPTV and SS IPTV respectively) without any external hardware. iPhones, iPads, Android phones, Apple TVs, Android boxes, Windows PCs, Macs, and MAG boxes all support IPTV player apps. If you are unsure whether your device is compatible, our team can confirm via WhatsApp before you subscribe.",
  ],
  [
    "How do I set up an IPTV app after subscribing?",
    "Once your TVPackages.uk subscription is active, you will receive your login credentials — either an M3U playlist URL or Xtream Codes server details. You enter these into your chosen player app (TiviMate, IPTV Smarters Pro, etc.) and your channels load automatically. If you prefer not to do this yourself, our UK-based team sets up the app for you step by step via WhatsApp at no extra charge. Most setups take under ten minutes.",
  ],
];

const groups = [
  {
    title: "What Entertainment Apps Are Included with TVPackages?",
    intro: [
      "Your TVPackages.uk subscription brings the UK’s most popular streaming and entertainment apps into one place. Whether you want Hollywood blockbusters on Netflix, award-winning originals on HBO, family favourites on Disney+, or live British TV on ITVX — it is all accessible from a single subscription, on any screen you own.",
      "Here is what each app brings to your entertainment lineup:",
    ],
    items: channels,
  },
];

export function AppsPage() {
  return <ServiceFullPage service={service} href="/services/apps" kicker={service.tags[0]} groups={groups} meta={{ title: "Entertainment Apps UK — Netflix, Disney+, HBO & More", description: "Access Netflix, Disney+, Prime Video, HBO, Apple TV, Paramount+, NOW and ITVX through one UK IPTV subscription. Free 24-hour trial via WhatsApp. From £20/month.", og: { title: "Netflix. Disney+. HBO. All in One Place — TVPackages.uk", description: "TVPackages.uk brings the UK’s most popular entertainment apps into one IPTV subscription. Set up on any device via WhatsApp. Free 24-hour trial." } }} faqs={{ heading: "Frequently Asked Questions About IPTV Apps", id: "apps-faq", items: appsFaqs }} />;
}
