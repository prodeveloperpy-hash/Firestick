import { Link, usePageMeta } from "../router";
import { useSettings } from "../settings";
import { Icon, IPTVLogo, WhatsAppButton, WhatsAppIcon } from "../components/ui";
import { Typewriter } from "../components/Typewriter";
import { ServiceCarousel, ServiceSpotlight } from "../components/ServiceCarousel";
import { CompatibilityGrid } from "../components/CompatibilityGrid";
import { PopularProducts } from "../components/PopularProducts";
import { RetainedSection, HeroNotes, BrandStrip } from "../components/RetainedSections";
import { FaqSection, HowItWorksSection } from "../components/HomeSections";
import { adultService, netflixService, services, why, highlightFeatures, HERO_PHRASES } from "../data/home";
import heroStick from "../assets/hero-stick.png";
import heroStickLight from "../assets/hero-stick-light.png";
import hlPortable from "../assets/highlights/portable.jpg";
import { photos } from "../photos";

export function HomePage() {
  const { t, lang, theme } = useSettings();
  usePageMeta("Tv Packages | " + t("Premium IPTV Entertainment"), "Explore IPTV entertainment, compatible devices, and flexible plans, then contact a UK-based provider on WhatsApp for personalized guidance.");

  return <main>
    <section className="hero" id="home">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span />{t("Premium IPTV Entertainment")}</div>
          <h1 aria-label={t("Your Ultimate Entertainment, ") + t("All in One Place.")}><span aria-hidden="true">{t("Your Ultimate Entertainment, ")}</span><Typewriter key={lang} phrases={HERO_PHRASES.map(t)} /></h1>
          <p className="hero-lead">{t("Enjoy live TV, sports, movies and entertainment across your favourite devices with flexible IPTV solutions.")}</p>
          <div className="hero-actions"><WhatsAppButton>Enquire on WhatsApp</WhatsAppButton><Link className="secondary-button" href="/services">{t("Explore Our Services")}<Icon name="arrow" size={18} /></Link></div>
          <HeroNotes />
          <div className="trust-line"><span className="avatar-stack"><i>UK</i><i>+</i></span><span><strong>{t("Friendly, personal support")}</strong><small>{t("Helping viewers across the UK & beyond")}</small></span></div>
        </div>
        <div className="hero-visual"><IPTVLogo className="iptv-hero" /><div className="visual-glow" /><div className="hero-stick"><img src={theme === "light" ? heroStickLight : heroStick} alt="Tv Packages streaming stick and voice remote" /></div></div>
      </div>
    </section>

    <CompatibilityGrid />

    <section className="trust-strip" aria-label={t("Why customers choose us")}><div className="container trust-strip-inner">{[["message", "WhatsApp-first support"], ["devices", "Works on 7+ device types"], ["clock", "Guided setup in minutes"], ["globe", "UK & worldwide entertainment"]].map(([icon, label]) => <div key={label}><Icon name={icon} size={20} /><span>{t(label)}</span></div>)}</div></section>
    <BrandStrip />

    <section className="section services" id="our-services"><div className="container"><div className="section-heading centered"><div className="eyebrow">{t("What we offer")}</div><h2>{t("Everything You Love. ")}<em>{t("All in One Place.")}</em></h2><p>{t("A complete entertainment experience designed around the way you watch.")}</p></div></div><ServiceCarousel items={services} /><ServiceSpotlight service={netflixService} id="netflix" kicker="Movies & series" logo="/logos/netflix.svg" /><ServiceSpotlight service={adultService} id="adults" kicker="18+ only" /></section>

    <RetainedSection kind="discovery" />
    <RetainedSection kind="apps" />

    <section className="section product-section" id="product">
      <div className="container product-layout">
        <div className="product-visual"><IPTVLogo className="iptv-section-image" /><div className="product-glow" /><div className="image-frame"><img src={photos.product} alt="Tv Packages streaming stick and remote in front of a television" /><div className="tv-screen" aria-label={t("Channels on your TV")}>{[["Netflix", "/logos/netflix.svg"], ["Sky", "/logos/sky.svg"], ["TNT Sports", "/logos/tntsports.svg"], ["Football", ""], ["Disney+", "/logos/disneyplus.svg"], ["Prime Video", "/logos/amazonprime.svg"], ["HBO", "/logos/hbo.svg"]].map(([name, src]) => <span key={name}>{src ? <img src={src} alt="" /> : <Icon name="trophy" size={22} />}{name}</span>)}</div></div><div className="floating-card product-chip chip-top"><Icon name="play" size={16} /><span><strong>{t("HD & 4K streaming")}</strong><small>{t("On supported models")}</small></span></div><div className="floating-card product-chip chip-bottom"><Icon name="check" size={16} /><span><strong>{t("Setup in minutes")}</strong><small>{t("Guided on WhatsApp")}</small></span></div></div>
        <div className="product-copy"><div className="eyebrow"><span />{t("IPTv product overview")}</div><h2>Tv Packages. <em>{t("Stream. Watch. Enjoy.")}</em></h2><p>{t("Discover IPTv with a compact streaming stick that turns any TV with an HDMI port into a smart entertainment hub. Plug it in, connect to Wi-Fi and you’re ready for live TV, sports, movies and series.")}</p><div className="product-features">{[["play", "Stream in HD", "Crisp picture, 4K on supported models"], ["sliders", "Fast performance", "Quick, smooth navigation"], ["box", "Portable design", "Take it anywhere with a TV"], ["globe", "Wi-Fi ready", "Connects to your home network"]].map(([icon, title, text]) => <div className="product-feature" key={title}><span><Icon name={icon} size={18} /></span><div><strong>{t(title)}</strong><small>{t(text)}</small></div></div>)}</div><div className="hero-actions"><WhatsAppButton>Ask About IPTv Packages</WhatsAppButton><Link className="secondary-button" href="/how-it-works">{t("How It Works")}<Icon name="arrow" size={18} /></Link></div></div>
      </div>
    </section>
    <PopularProducts />

    <section className="section hardware-section" aria-labelledby="hardware-title"><div className="container hardware-layout"><div className="hardware-copy"><div className="eyebrow"><span />{t("A closer look")}</div><h2 id="hardware-title">{t("Inside the ")}<em>{t("stick & remote.")}</em></h2><p>{t("See how the streaming stick and remote fit together, from their outer shells to the circuit boards and components inside.")}</p><div className="hardware-details"><span><Icon name="layers" size={22} />{t("Exploded hardware view")}</span><span><Icon name="box" size={22} />{t("Streaming stick & remote")}</span></div></div><div className="hardware-video-frame"><IPTVLogo className="iptv-section-image" /><video className="product-video" src="/FireStick.mp4" autoPlay muted loop playsInline controls={false} disablePictureInPicture preload="metadata" aria-label="Exploded view showing the internal components of a streaming stick and remote" /></div></div></section>

    <section className="section highlights-section"><div className="container hl-layout"><div className="hl-copy"><div className="eyebrow"><span />{t("Why Tv Packages")}</div><h2>{t("Small device. ")}<em>{t("Big entertainment.")}</em></h2><div className="hl-features">{highlightFeatures.map(([icon, title, text]) => <div className="hl-feature" key={title}><span><Icon name={icon} size={22} /></span><div><strong>{t(title)}</strong><small>{t(text)}</small></div></div>)}</div><WhatsAppButton>Ask About IPTv Packages</WhatsAppButton></div><div className="hl-visual"><IPTVLogo className="iptv-section-image" /><div className="hl-glow" /><figure className="hl-frame"><img src={hlPortable} alt="Compact and portable: take your entertainment anywhere" loading="lazy" /></figure><div className="hl-chip hl-chip-top"><Icon name="box" size={18} /><span><strong>{t("Portable design")}</strong><small>{t("Take it anywhere with a TV")}</small></span></div><div className="hl-chip hl-chip-bottom"><Icon name="clock" size={18} /><span><strong>{t("Setup in minutes")}</strong><small>{t("Guided on WhatsApp")}</small></span></div></div></div></section>

    <RetainedSection kind="devices" />
    <RetainedSection kind="support" />

    <section className="section why-section"><div className="container"><div className="section-heading split"><div><div className="eyebrow">{t("The Tv Packages difference")}</div><h2>{t("Entertainment made ")}<em>{t("simple.")}</em></h2></div><p>{t("Premium viewing should feel effortless. From your first message to getting set up, we keep everything clear and personal.")}</p></div>{photos.home && <div className="home-banner"><img src={photos.home} alt="Family enjoying entertainment together at home" loading="lazy" /><div className="home-banner-copy"><strong>{t("Home entertainment, upgraded.")}</strong><span>{t("Movies, sports and live TV for the whole family.")}</span></div></div>}<div className="difference-path"><svg className="difference-connector" viewBox="0 0 1200 300" preserveAspectRatio="none" fill="none" aria-hidden="true"><path className="difference-track" d="M-150 230C0 230 0 70 150 70S300 230 450 230S600 70 750 70S900 230 1050 230S1200 70 1350 70" /><path className="difference-flow" d="" /></svg>{why.map(([icon, title, text], index) => <article className="difference-stop" key={title} style={{ animationDelay: `${index * 180}ms` }}><div className="difference-node"><span className="difference-ring">{icon === "message" ? <WhatsAppIcon size={30} /> : <Icon name={icon} size={30} />}</span><span className="difference-number">0{index + 1}</span></div><h3>{t(title)}</h3><p>{t(text)}</p></article>)}</div></div></section>

    <HowItWorksSection />

    <RetainedSection kind="plans" />

    <FaqSection />

    <RetainedSection kind="final" />
  </main>;
}
