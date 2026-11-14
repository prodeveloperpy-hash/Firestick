import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "../router";
import { useSettings } from "../settings";
import { Icon, IPTVLogo, WhatsAppButton, WhatsAppIcon, WHATSAPP_URL } from "./ui";
import { plans } from "../data/home";
import sports from "../assets/services/sports.jpg";
import live from "../assets/services/live-tv.jpg";
import movies from "../assets/services/movies-series.jpg";
import adults from "../assets/services/adults.jpg";
import family from "../assets/steps/endless.jpg";
import "./retained-sections.css";

const brands = [
  { name: "Sky", file: "sky", className: "sky" },
  { name: "TNT Sports", file: "tntsports", className: "tnt" },
  { name: "Netflix", file: "netflix", className: "netflix" },
  { name: "HBO", file: "hbo", className: "hbo" },
  { name: "Disney+", file: "disneyplus", className: "disney" },
  { name: "Amazon Prime", file: "amazonprime", className: "prime" },
];

function BrandTiles({ compact = false }: { compact?: boolean }) {
  return <div className={`ph-brand-tiles ${compact ? "compact" : ""}`}>
    {brands.map(brand => <div className={`ph-brand-tile ${brand.className}`} key={brand.name}><img src={`/logos/${brand.file}.svg`} alt={brand.name} width="120" height="48" loading="lazy" /></div>)}
  </div>;
}

function Kicker({ children }: { children: ReactNode }) { return <div className="ph-kicker"><span />{children}</div>; }

function ViewingPreview({ small = false }: { small?: boolean }) {
  const [selected, setSelected] = useState(0);
  const options = [
    { label: "Live TV", image: live, title: "A world of television.", subtitle: "UK favourites. International entertainment.", icon: "tv" },
    { label: "Sports", image: sports, title: "Bring match day home.", subtitle: "Football, combat sports & the big moments.", icon: "trophy" },
    { label: "Movies & series", image: movies, title: "Make tonight a movie night.", subtitle: "Entertainment for every kind of evening.", icon: "film" },
    { label: "18+", image: adults, title: "Adults only.", subtitle: "A separate 18+ section on supported packages.", icon: "moon" },
  ];
  const current = options[selected];
  return <div className={`ph-preview ${small ? "ph-preview-small" : ""}`}>
    <div className="ph-preview-bar"><span className="ph-preview-brand"><img src="/logo-mark.svg" width="32" height="26" alt="" /><span>TV<span>PACKAGES</span></span></span><div className="ph-window-dots"><i /><i /><i /></div></div>
    <div className="ph-preview-nav" aria-label="Viewing preview categories">{options.map((option, index) => <button type="button" key={option.label} aria-pressed={selected === index} onClick={() => setSelected(index)}>{option.label}</button>)}</div>
    <div className="ph-preview-feature">
      <img src={current.image} alt="" />
      <div><span className="ph-mini-label"><Icon name={current.icon} size={12} /> IPTV ENTERTAINMENT</span><h3>{current.title}</h3><p>{current.subtitle}</p><Link href="/services" className="ph-preview-button">Explore <Icon name="arrow" size={13} /></Link></div>
    </div>
    <div className="ph-preview-lower"><span>Your entertainment, together</span><BrandTiles compact /></div>
    <div className="ph-preview-foot"><span><i /> Viewing layout preview</span><span>Live TV · Movies · Sports · 18+</span></div>
  </div>;
}

function PhonePreview({ guide = false }: { guide?: boolean }) {
  return <div className={`ph-phone ${guide ? "ph-phone-guide" : ""}`}>
    <div className="ph-phone-camera" /><div className="ph-phone-top"><span>9:41</span><span>••• ▰</span></div>
    <div className="ph-phone-heading">{guide ? "Your TV guide" : "Watch your way"}<small>TV PACKAGES</small></div>
    {guide ? <div className="ph-phone-list">{brands.slice(0, 5).map((brand, i) => <div key={brand.name}><div className="ph-phone-channel"><img src={`/logos/${brand.file}.svg`} alt={brand.name} /></div><span>{["Live entertainment", "Sports & events", "Movies & series", "Drama & discovery", "Family favourites"][i]}<small>Explore available options</small><i /></span></div>)}</div> : <><div className="ph-phone-picture"><img src={sports} alt="Football match in a stadium" /><span>LIVE SPORTS<strong>The big moments.<br />On your screen.</strong></span></div><div className="ph-phone-label">Explore more</div><div className="ph-phone-apps">{brands.slice(2, 6).map(b => <div key={b.name}><img src={`/logos/${b.file}.svg`} alt={b.name} /></div>)}</div></>}
    <div className="ph-phone-bottom"><Icon name="tv" size={17} /><Icon name="film" size={17} /><Icon name="trophy" size={17} /><Icon name="apps" size={17} /></div>
  </div>;
}



function PricingGrid() {
  const { t } = useSettings();
  const ref = useRef<HTMLDivElement>(null);
  // On the mobile carousel, start with the featured (Standard) plan centred.
  useEffect(() => {
    const grid = ref.current;
    const card = grid?.querySelector<HTMLElement>(".ph-price-card.featured");
    if (!grid || !card || grid.scrollWidth <= grid.clientWidth) return;
    grid.scrollLeft = card.offsetLeft - (grid.clientWidth - card.offsetWidth) / 2;
  }, []);
  return <div className="ph-pricing-grid" ref={ref}>{plans.map(plan => <article key={plan.name} className={`ph-price-card ${plan.featured ? "featured" : ""}`}><span className="ph-plan-label">{t(plan.label)}</span><h3>{t(plan.name)}</h3><p>{t(plan.description)}</p><div className="ph-plan-price">{plan.price}<span>{t("one-off setup")}</span></div><ul>{plan.features.map(feature => <li key={feature}><Icon name="check" size={16} />{t(feature)}</li>)}</ul><WhatsAppButton>Choose This Setup</WhatsAppButton></article>)}</div>;
}

export function RetainedSection({kind}:{kind:"discovery"|"apps"|"devices"|"support"|"plans"|"final"}) {
  const { t }=useSettings();
  switch(kind) { case "discovery": return (<section className="retained-ui ph-section ph-discovery">
      <div className="ph-wrap ph-split ph-reverse"><div className="ph-double-phones"><PhonePreview /><PhonePreview guide /><span className="ph-device-caption">{t("Illustrative viewing layouts")}</span></div><div className="ph-copy"><Kicker>{t("A LITTLE MORE PERSONAL")}</Kicker><h2>{t("Your favourites.")}<br /><span>{t("Never far away.")}</span></h2><p>{t("A big-screen evening at home. A little entertainment on your tablet. Tell us how you watch and we’ll help you find an option that fits.")}</p><div className="ph-mini-features"><div><Icon name="devices" /><strong>{t("Across your devices")}</strong><span>{t("Fire Stick, smart TV, Android, iPhone and iPad.")}</span></div><div><Icon name="message" /><strong>{t("Help when you need it")}</strong><span>{t("Clear setup guidance from a real person on WhatsApp.")}</span></div></div><WhatsAppButton>Check My Device</WhatsAppButton></div></div>
    </section>);
case "apps": return (<section className="retained-ui ph-section ph-apps">
      <div className="ph-wrap ph-app-panel"><div className="ph-copy"><Kicker>{t("THE APPS YOU KNOW")}</Kicker><h2>{t("Familiar names.")}<br /><span>{t("A better-connected setup.")}</span></h2><p>{t("Our IPTV package brings the apps you know into one place. Sky, TNT Sports, Netflix, HBO, Disney+ and Amazon Prime Video, plus all world TV channels, are included in a single IPTV package on the same device. We help you configure everything so live TV, sports and on-demand content are all accessible from a single device without juggling remotes or logins. App availability depends on your device.")}</p><Link href="/services" className="ph-text-link">{t("Explore entertainment apps")}<Icon name="arrow" size={17} /></Link></div><div className="ph-app-visual"><BrandTiles /><div className="ph-app-visual-footer"><span className="ph-live-dot" />{t("YOUR ENTERTAINMENT, TOGETHER")}</div></div></div>
    </section>);
case "devices": return (<section className="retained-ui ph-section ph-devices" id="compatible-devices"><div className="ph-wrap ph-split"><div className="ph-copy"><Kicker>{t("YOUR PLAYER. YOUR SCREEN. YOUR WORLD.")}</Kicker><h2>{t("At home.")}<br />{t("On the move.")}<br /><span>{t("On your terms.")}</span></h2><p>{t("You don’t have to start from scratch. Our services work with a range of popular streaming devices, smart TVs, phones and tablets. We’ll help you check yours.")}</p><WhatsAppButton>Check My Device</WhatsAppButton></div><div className="ph-device-scene"><div className="ph-device-desktop"><ViewingPreview small /></div><div className="ph-device-mobile"><PhonePreview /></div><div className="ph-device-tags"><span><Icon name="tv" size={16} /> Smart TV</span><span><Icon name="box" size={16} /> Fire Stick & MAG</span><span><Icon name="phone" size={16} /> Android & iOS</span></div></div></div></section>);
case "support": return (<section className="retained-ui ph-section ph-support"><div className="ph-wrap ph-support-panel"><div className="ph-copy"><Kicker>{t("MADE BETTER, TOGETHER")}</Kicker><h2>{t("A person to help.")}<br /><span>{t("Not another problem to solve.")}</span></h2><p>{t("Not sure about a device? Want to know which service fits? Just send a message. We’ll keep the answers clear, the setup straightforward, and the support personal.")}</p><WhatsAppButton>Talk to Our Team</WhatsAppButton></div><div className="ph-chat"><div className="ph-chat-head"><span><WhatsAppIcon size={24} /></span><div>Tv Packages<small>{t("Setup conversation preview")}</small></div></div><div className="ph-chat-message outgoing">{t("Hi! Can you help me get started on my smart TV?")}<small>✓✓</small></div><div className="ph-chat-message">{t("Of course. Send us your TV model and tell us what you enjoy watching. We’ll guide you from there.")}</div><div className="ph-chat-chips"><span><Icon name="check" size={13} />{t("Device guidance")}</span><span><Icon name="check" size={13} />{t("Personal support")}</span></div></div></div></section>);
case "plans": return (<section className="retained-ui ph-section ph-plans" id="packages"><div className="ph-wrap"><div className="ph-centered"><Kicker>{t("A LITTLE HELP GOES A LONG WAY")}</Kicker><h2>{t("Make your setup")}<br /><span>{t("feel premium.")}</span></h2><p>{t("Choose the level of setup support that suits you. Clear one-off fees, friendly guidance, and Netflix, Disney+, Amazon Prime and all world TV channels in one package.")}</p></div><PricingGrid /><p className="ph-price-note">{t("Netflix, Disney+, Amazon Prime and all world TV channels are included in your IPTV package.")}</p></div></section>);
case "final": return (<section className="retained-ui ph-section ph-final" id="contact"><div className="ph-wrap ph-final-panel"><div><Kicker>{t("YOUR NEXT GREAT NIGHT IN STARTS HERE")}</Kicker><h2>{t("More to watch.")}<br /><span>{t("Less to figure out.")}</span></h2><p>{t("Tell us your device and what you love. We’ll take it from there.")}</p><WhatsAppButton>Let’s Get You Set Up</WhatsAppButton><a className="ph-contact-number" href={WHATSAPP_URL}>+44 7395 667292</a></div><div className="ph-final-image"><img src={family} alt="Couple exploring entertainment apps on their television at home" loading="lazy" /><IPTVLogo /></div></div></section>); }
}
export function HeroNotes(){const {t}=useSettings();return <div className="retained-ui retained-hero-notes">          <div className="ph-hero-notes"><span><Icon name="check" size={14} />{t("UK & worldwide TV")}</span><span><Icon name="check" size={14} />{t("Multi-device setup")}</span><span><Icon name="check" size={14} />{t("WhatsApp support")}</span></div>
          <div className="ph-hero-platforms"><Icon name="tv" size={18} /><span>Fire Stick</span><Icon name="phone" size={18} /><span>Android & iOS</span><Icon name="devices" size={18} /><span>Smart TVs</span></div></div>;}
export function BrandStrip(){const {t}=useSettings();return <div className="retained-ui retained-brand-strip">      <div className="ph-wrap ph-hero-bottom"><span>{t("FAMILIAR ENTERTAINMENT. MORE POSSIBILITIES.")}</span><div>{brands.map(b => <img key={b.name} src={`/logos/${b.file}.svg`} alt={b.name} width="100" height="30" />)}</div></div></div>;}
