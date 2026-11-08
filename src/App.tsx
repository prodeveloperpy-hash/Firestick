import { useState } from "react";
import heroStick from "./assets/hero-stick.png";
import heroStickLight from "./assets/hero-stick-light.png";
import deviceLineup from "./assets/devices-multi.jpg";
import stepProduct from "./assets/steps/get-stick.jpg";
import stepInstallation from "./assets/steps/easy-setup.jpg";
import stepHome from "./assets/steps/endless.jpg";
import stepSupport from "./assets/steps/whatsapp-support.jpg";
import hlPortable from "./assets/highlights/portable.jpg";
import svcLive from "./assets/services/live-tv.jpg";
import svcSports from "./assets/services/sports.jpg";
import svcMovies from "./assets/services/movies-series.jpg";
import svcApps from "./assets/services/apps.jpg";
import { photos } from "./photos";
import { Icon, IPTVLogo, WHATSAPP_URL, WhatsAppButton, WhatsAppIcon } from "./components/ui";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BlogPage, BlogPostPage } from "./pages/Blog";
import { NotFoundPage } from "./pages/NotFound";
import { useInitialHashScroll, usePageMeta, usePath } from "./router";
import { Typewriter } from "./components/Typewriter";
import { ServiceCarousel } from "./components/ServiceCarousel";
import { CompatibilityGrid } from "./components/CompatibilityGrid";
import { PopularProducts } from "./components/PopularProducts";
import { useScrollReveal } from "./components/useScrollReveal";
import { useDifferencePath } from "./components/useDifferencePath";
import { useSettings } from "./settings";

const steps = [
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

const highlightFeatures = [
  ["box", "Portable design", "Take it anywhere with a TV"],
  ["play", "Stream in HD", "Crisp picture, 4K on supported models"],
  ["globe", "Wi‑Fi ready", "Connects to your home network"],
  ["clock", "Setup in minutes", "Guided on WhatsApp"],
];

const HERO_PHRASES = [
  "All in One Place.",
  "Live Sports & IPTV.",
  "Movies & Series.",
  "On Every Screen.",
];

const services = [
  {
    icon: "tv",
    number: "01",
    image: svcLive,
    imageAlt: "Tv Packages IPTv live television guide with news, entertainment and international programmes",
    title: "Live TV Channels",
    text: "Stay connected to the programmes that matter, from familiar UK favourites to international entertainment.",
    tags: ["UK + worldwide live TV", "All Sky channels", "News & entertainment"],
    showcase: [["tv", "UK + Worldwide", "live"], ["tv", "sky", "sky"], ["film", "Entertainment", "live"], ["globe", "International TV", "live"]],
  },
  {
    icon: "trophy",
    number: "02",
    image: svcSports,
    imageAlt: "Friends watching live football on their television with Tv Packages IPTv",
    title: "Premium Sports",
    text: "Follow football, combat sports and major live events on supported sports channels and services.",
    tags: ["All sports channels", "All football events", "PPV events"],
    showcase: [["trophy", "TNT Sports", "tnt"], ["trophy", "UFC", "ufc"], ["trophy", "Boxing + PPV", "sports"], ["trophy", "Football", "sports"]],
  },
  {
    icon: "film",
    number: "03",
    image: svcMovies,
    imageAlt: "Tv Packages IPTv movie and TV series library on a living-room television",
    title: "Movies & TV Series",
    text: "Settle in for on-demand movies, binge-worthy series and entertainment for every mood.",
    tags: ["Movies", "TV series", "On-demand content"],
    showcase: [["film", "NETFLIX", "netflix"], ["film", "HBO", "hbo"], ["film", "Disney+", "disney"], ["play", "prime video", "prime"]],
  },
  {
    icon: "apps",
    number: "04",
    image: svcApps,
    imageAlt: "Streaming app icons on a television with a Tv Packages IPTv device and remote",
    title: "Entertainment Apps",
    text: "Enjoy broad streaming app compatibility, subject to supported subscriptions and access.",
    tags: ["Streaming apps", "Multi-device access", "18+ adult content"],
    showcase: [["apps", "NETFLIX", "netflix"], ["apps", "Disney+", "disney"], ["play", "Amazon Prime", "prime"], ["film", "18+ Adults", "adults"]],
  },
];

const devices = [
  ["tv", "Amazon Fire TV Stick"],
  ["tv", "Smart TVs"],
  ["box", "Android TV Boxes"],
  ["phone", "Android Smartphones"],
  ["tablet", "Tablets"],
  ["phone", "iPhone"],
  ["tablet", "iPad"],
];

const why = [
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

const plans = [
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

const faqs = [
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

export default function App() {
  const path = usePath().replace(/\/+$/, "") || "/";
  const { t } = useSettings();
  useScrollReveal(path);
  useDifferencePath(path);

  let page;
  if (path === "/") {
    page = <HomePage />;
  } else if (path === "/blog") {
    page = <BlogPage />;
  } else if (path.startsWith("/blog/")) {
    page = <BlogPostPage slug={path.slice("/blog/".length)} />;
  } else {
    page = <NotFoundPage />;
  }

  return (
    <div className="site-shell">
      <Header />
      {page}
      <Footer />
      <a
        className="floating-whatsapp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={t("Chat with us on WhatsApp")}
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}

function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const { t, lang, theme } = useSettings();
  usePageMeta(
    "Tv Packages | " + t("Premium IPTV Entertainment"),
    "Explore IPTV entertainment, compatible devices, and flexible plans, then contact a UK-based provider on WhatsApp for personalized guidance.",
  );
  useInitialHashScroll();

  return (
    <main>
      <section className="hero" id="home">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span /> {t("Premium IPTV Entertainment")}
            </div>
            <h1 aria-label={t("Your Ultimate Entertainment, ") + t("All in One Place.")}>
              <span aria-hidden="true">{t("Your Ultimate Entertainment, ")}</span>
              <Typewriter key={lang} phrases={HERO_PHRASES.map(t)} />
            </h1>
            <p className="hero-lead">
              {t(
                "Enjoy live TV, sports, movies and entertainment across your favourite devices with flexible IPTV solutions.",
              )}
            </p>
            <div className="hero-features">
              {[
                "UK & Worldwide Live TV",
                "Sports & IPTV Events",
                "Movies & TV Series",
                "Multi-Device Compatibility",
              ].map((x) => (
                <div key={x}>
                  <span>
                    <Icon name="check" size={14} />
                  </span>
                  {t(x)}
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <WhatsAppButton>Enquire on WhatsApp</WhatsAppButton>
              <a className="secondary-button" href="#our-services">
                {t("Explore Our Services")} <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="trust-line">
              <span className="avatar-stack">
                <i>UK</i>
                <i>+</i>
              </span>
              <span>
                <strong>{t("Friendly, personal support")}</strong>
                <small>{t("Helping viewers across the UK & beyond")}</small>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <IPTVLogo className="iptv-hero" />
            <div className="visual-glow" />
            <div className="hero-stick">
              <img src={theme === "light" ? heroStickLight : heroStick} alt="Tv Packages streaming stick and voice remote" />
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <span /> {t("Scroll to explore")}
        </div>
      </section>

      <section className="trust-strip" aria-label={t("Why customers choose us")}>
        <div className="container trust-strip-inner">
          {[
            ["message", "WhatsApp-first support"],
            ["devices", "Works on 7+ device types"],
            ["clock", "Guided setup in minutes"],
            ["globe", "UK & worldwide entertainment"],
          ].map(([icon, label]) => (
            <div key={label}>
              <Icon name={icon} size={20} />
              <span>{t(label)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section product-section" id="product">
        <div className="container product-layout">
          <div className="product-visual">
            <IPTVLogo className="iptv-section-image" />
            <div className="product-glow" />
            <div className="image-frame">
              <img
                src={photos.product}
                alt="Tv Packages streaming stick and remote in front of a television"
              />
            </div>
            <div className="floating-card product-chip chip-top">
              <Icon name="play" size={16} />
              <span>
                <strong>{t("HD & 4K streaming")}</strong>
                <small>{t("On supported models")}</small>
              </span>
            </div>
            <div className="floating-card product-chip chip-bottom">
              <Icon name="check" size={16} />
              <span>
                <strong>{t("Setup in minutes")}</strong>
                <small>{t("Guided on WhatsApp")}</small>
              </span>
            </div>
          </div>
          <div className="product-copy">
            <div className="eyebrow">
              <span /> {t("IPTv product overview")}
            </div>
            <h2>
              Tv Packages. <em>{t("Stream. Watch. Enjoy.")}</em>
            </h2>
            <p>
              {t(
                "Discover IPTv with a compact streaming stick that turns any TV with an HDMI port into a smart entertainment hub. Plug it in, connect to Wi‑Fi and you’re ready for live TV, sports, movies and series.",
              )}
            </p>
            <div className="product-features">
              {[
                ["play", "Stream in HD", "Crisp picture, 4K on supported models"],
                ["sliders", "Fast performance", "Quick, smooth navigation"],
                ["box", "Portable design", "Take it anywhere with a TV"],
                ["globe", "Wi‑Fi ready", "Connects to your home network"],
              ].map(([icon, title, text]) => (
                <div className="product-feature" key={title}>
                  <span>
                    <Icon name={icon} size={18} />
                  </span>
                  <div>
                    <strong>{t(title)}</strong>
                    <small>{t(text)}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <WhatsAppButton>Ask About IPTv Packages</WhatsAppButton>
              <a className="secondary-button" href="#how-it-works">
                {t("How It Works")} <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <PopularProducts />

      <section className="section hardware-section" aria-labelledby="hardware-title">
        <div className="container hardware-layout">
          <div className="hardware-copy">
            <div className="eyebrow"><span /> {t("A closer look")}</div>
            <h2 id="hardware-title">{t("Inside the ")}<em>{t("stick & remote.")}</em></h2>
            <p>{t("See how the streaming stick and remote fit together, from their outer shells to the circuit boards and components inside.")}</p>
            <div className="hardware-details">
              <span><Icon name="layers" size={22} />{t("Exploded hardware view")}</span>
              <span><Icon name="box" size={22} />{t("Streaming stick & remote")}</span>
            </div>
          </div>
          <div className="hardware-video-frame">
            <IPTVLogo className="iptv-section-image" />
            <video className="product-video" src="/FireStick.mp4" autoPlay muted loop playsInline controls={false} disablePictureInPicture preload="metadata" aria-label="Exploded view showing the internal components of a streaming stick and remote" />
          </div>
        </div>
      </section>

      <section className="section highlights-section">
        <div className="container hl-layout">
          <div className="hl-copy">
            <div className="eyebrow">
              <span /> {t("Why Tv Packages")}
            </div>
            <h2>
              {t("Small device. ")}
              <em>{t("Big entertainment.")}</em>
            </h2>
            <div className="hl-features">
              {highlightFeatures.map(([icon, title, text]) => (
                <div className="hl-feature" key={title}>
                  <span>
                    <Icon name={icon} size={22} />
                  </span>
                  <div>
                    <strong>{t(title)}</strong>
                    <small>{t(text)}</small>
                  </div>
                </div>
              ))}
            </div>
            <WhatsAppButton>Ask About IPTv Packages</WhatsAppButton>
          </div>
          <div className="hl-visual">
            <IPTVLogo className="iptv-section-image" />
            <div className="hl-glow" />
            <figure className="hl-frame">
              <img
                src={hlPortable}
                alt="Compact and portable: take your entertainment anywhere."
                loading="lazy"
              />
            </figure>
            <div className="hl-chip hl-chip-top">
              <Icon name="box" size={18} />
              <span>
                <strong>{t("Portable design")}</strong>
                <small>{t("Take it anywhere with a TV")}</small>
              </span>
            </div>
            <div className="hl-chip hl-chip-bottom">
              <Icon name="clock" size={18} />
              <span>
                <strong>{t("Setup in minutes")}</strong>
                <small>{t("Guided on WhatsApp")}</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="our-services">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">{t("What we offer")}</div>
            <h2>
              {t("Everything You Love. ")}
              <em>{t("All in One Place.")}</em>
            </h2>
            <p>{t("A complete entertainment experience designed around the way you watch.")}</p>
          </div>
        </div>
        <ServiceCarousel items={services} />
      </section>

      <section className="section devices-section" id="compatible-devices">
        <div className="container devices-layout">
          <div className="device-image">
            <div className="image-frame">
              <img
                src={deviceLineup}
                alt="Entertainment displayed on a television, laptop, phone and tablet with a streaming device"
              />
            </div>
            <div className="compat-badge">
              <span>
                <Icon name="check" size={17} />
              </span>
              <div>
                <strong>{t("Easy compatibility")}</strong>
                <small>{t("Built around your devices")}</small>
              </div>
            </div>
          </div>
          <div className="devices-copy">
            <div className="eyebrow">{t("Watch your way")}</div>
            <h2>
              {t("Entertainment on ")}
              <em>{t("Every Screen")}</em>
            </h2>
            <p>
              {t(
                "Enjoy your entertainment across compatible devices—at home, on the move, and wherever you feel most comfortable.",
              )}
            </p>
            <div className="device-grid">
              {devices.map(([icon, label]) => (
                <div className="device-pill" key={label}>
                  <span>
                    <Icon name={icon} />
                  </span>
                  {t(label)}
                </div>
              ))}
            </div>
            <p className="small-note">
              <Icon name="check" size={15} />{" "}
              {t("Not sure if your device is compatible? We’ll help you check.")}
            </p>
            <WhatsAppButton>Check My Device</WhatsAppButton>
          </div>
        </div>
      </section>

      <CompatibilityGrid />

      <section className="section why-section">
        <div className="container">
          <div className="section-heading split">
            <div>
              <div className="eyebrow">{t("The Tv Packages difference")}</div>
              <h2>
                {t("Entertainment made ")}
                <em>{t("simple.")}</em>
              </h2>
            </div>
            <p>
              {t(
                "Premium viewing should feel effortless. From your first message to getting set up, we keep everything clear and personal.",
              )}
            </p>
          </div>
          {photos.home && (
            <div className="home-banner">
              <img
                src={photos.home}
                alt="Family enjoying entertainment together at home"
                loading="lazy"
              />
              <div className="home-banner-copy">
                <strong>{t("Home entertainment, upgraded.")}</strong>
                <span>{t("Movies, sports and live TV for the whole family.")}</span>
              </div>
            </div>
          )}
          <div className="difference-path">
            <svg className="difference-connector" viewBox="0 0 1200 300" preserveAspectRatio="none" fill="none" aria-hidden="true">
              <path className="difference-track" d="M-150 230C0 230 0 70 150 70S300 230 450 230S600 70 750 70S900 230 1050 230S1200 70 1350 70" />
              <path className="difference-flow" d="" />
            </svg>
            {why.map(([icon, title, text], i) => (
              <article className="difference-stop" key={title} style={{ animationDelay: `${i * 180}ms` }}>
                <div className="difference-node">
                  <span className="difference-ring">
                    {icon === "message" ? <WhatsAppIcon size={30} /> : <Icon name={icon} size={30} />}
                  </span>
                  <span className="difference-number">0{i + 1}</span>
                </div>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="how-it-works">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">{t("Recommended steps")}</div>
            <h2>
              {t("Watching tonight in ")}
              <em>{t("four easy steps.")}</em>
            </h2>
            <p>{t("Follow our recommended setup. Our team is with you on WhatsApp at every step.")}</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <article className="step-card why-card" key={step.title}>
                <div className="step-visual">
                  {step.visual}
                  <IPTVLogo className="iptv-media-badge" />
                  <span className="step-badge">
                    {t("Step")} {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="step-body">
                  <div className="icon-box">
                    {step.icon === "message" ? <WhatsAppIcon /> : <Icon name={step.icon} />}
                  </div>
                  <h3>{t(step.title)}</h3>
                  <p>{t(step.text)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="steps-cta">
            <WhatsAppButton>Start Step 1 on WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="packages">
        <div className="pricing-glow" />
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">{t("Setup packages")}</div>
            <h2>
              {t("Choose Your ")}
              <em>{t("Setup Package")}</em>
            </h2>
            <p>{t("Simple one-off pricing. Tell us your device and we’ll help you pick the right fit.")}</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
                {plan.featured && <span className="popular">{t("Most popular")}</span>}
                <span className="plan-label">{t(plan.label)}</span>
                <h3>{t(plan.name)}</h3>
                <p>{t(plan.description)}</p>
                <div className="price">
                  {plan.price} <span>{t("one-off setup fee")}</span>
                </div>
                <div className="divider" />
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <span>
                        <Icon name="check" size={14} />
                      </span>
                      {t(f)}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton>Order on WhatsApp</WhatsAppButton>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            {t(
              "Setup fees only. Streaming subscriptions such as Netflix, Sky, NOW and TNT Sports are paid directly to those providers.",
            )}
          </p>
        </div>
      </section>

      <section className="section faq-section" id="faqs">
        <div className="container faq-layout">
          <div className="faq-intro">
            <div className="eyebrow">{t("Common questions")}</div>
            <h2>
              {t("Everything you need to ")}
              <em>{t("know.")}</em>
            </h2>
            <p>{t("Can’t find your answer? Send us a message and our team will be happy to help.")}</p>
            <WhatsAppButton>Ask Us on WhatsApp</WhatsAppButton>
          </div>
          <div className="accordion">
            {faqs.map(([q, a], i) => (
              <article className={`faq-item ${openFaq === i ? "active" : ""}`} key={q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {t(q)}
                  <i>
                    <Icon name={openFaq === i ? "close" : "chevron"} size={18} />
                  </i>
                </button>
                <div className="faq-answer">
                  <p>{t(a)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-orb">
              <WhatsAppIcon size={32} />
            </div>
            <div>
              <div className="eyebrow">{t("We’re ready when you are")}</div>
              <h2>{t("Ready to Upgrade Your Entertainment?")}</h2>
              <p>
                {t(
                  "Tell us which device you use and what entertainment you’re looking for. Our team is ready to help.",
                )}
              </p>
            </div>
            <WhatsAppButton>Enquire Now on WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
}

