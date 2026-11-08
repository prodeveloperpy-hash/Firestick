import { useState } from "react";
import heroStick from "./assets/hero-stick.png";
import deviceLineup from "./assets/devices-multi.jpg";
import stepProduct from "./assets/steps/get-stick.jpg";
import stepInstallation from "./assets/steps/easy-setup.jpg";
import stepHome from "./assets/steps/endless.jpg";
import stepCompatibility from "./assets/steps/streaming-apps.jpg";
import hlPortable from "./assets/highlights/portable.jpg";
import { photos } from "./photos";
import { Icon, WHATSAPP_URL, WhatsAppButton, WhatsAppIcon } from "./components/ui";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BlogPage, BlogPostPage } from "./pages/Blog";
import { LocationPage } from "./pages/Location";
import { NotFoundPage } from "./pages/NotFound";
import { useInitialHashScroll, usePageMeta, usePath } from "./router";
import { Typewriter } from "./components/Typewriter";
import { useScrollReveal } from "./components/useScrollReveal";

const steps = [
  {
    icon: "tv",
    title: "Get Your Fire TV Stick",
    text: "Any recent Fire TV Stick works, including 4K models. Not sure which one? Ask us first.",
    visual: <img src={stepProduct} alt="Fire TV Stick and remote close-up" loading="lazy" />,
  },
  {
    icon: "devices",
    title: "Plug It Into Your TV",
    text: "Connect the stick to your TV's HDMI port and power, then join your Wi‑Fi. Easy installation in minutes.",
    visual: (
      <img
        src={stepInstallation}
        alt="Fire TV Stick plugged into the HDMI port of a TV"
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
        <img src={stepCompatibility} alt="Popular streaming apps on Fire TV Stick: Prime Video, Netflix, YouTube and more" loading="lazy" />
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
        alt="Family enjoying entertainment together in their living room"
        loading="lazy"
      />
    ),
  },
];

const highlights = [
  { src: hlPortable, alt: "Compact and portable: take your entertainment anywhere." },
];

const HERO_PHRASES = [
  "All in One Place.",
  "Live Sports & PPV.",
  "Movies & Series.",
  "On Every Screen.",
];

const services = [
  {
    icon: "tv",
    number: "01",
    title: "Live TV Channels",
    text: "Stay connected to the programmes that matter, from familiar UK favourites to international entertainment.",
    tags: ["UK channels", "International TV", "News & entertainment"],
  },
  {
    icon: "trophy",
    number: "02",
    title: "Premium Sports",
    text: "Follow football, combat sports and major live events on supported sports channels and services.",
    tags: ["Football", "TNT Sports", "UFC, Boxing & PPV"],
  },
  {
    icon: "film",
    number: "03",
    title: "Movies & TV Series",
    text: "Settle in for on-demand movies, binge-worthy series and entertainment for every mood.",
    tags: ["Movies", "TV series", "On-demand content"],
  },
  {
    icon: "apps",
    number: "04",
    title: "Entertainment Apps",
    text: "Enjoy broad streaming app compatibility, subject to supported subscriptions and access.",
    tags: ["Flexible access", "Easy navigation", "Popular apps"],
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
  useScrollReveal(path);

  let page;
  if (path === "/") {
    page = <HomePage />;
  } else if (path === "/blog") {
    page = <BlogPage />;
  } else if (path.startsWith("/blog/")) {
    page = <BlogPostPage slug={path.slice("/blog/".length)} />;
  } else if (path.startsWith("/locations/")) {
    page = <LocationPage slug={path.slice("/locations/".length)} />;
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
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon size={24} />
        <span>Chat with us</span>
      </a>
    </div>
  );
}

function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  usePageMeta(
    "Firestick | Premium IPTV Entertainment",
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
              <span /> Premium IPTV Entertainment
            </div>
            <h1 aria-label="Your Ultimate Entertainment, All in One Place.">
              <span aria-hidden="true">Your Ultimate Entertainment, </span>
              <Typewriter phrases={HERO_PHRASES} />
            </h1>
            <p className="hero-lead">
              Enjoy live TV, sports, movies and entertainment across your favourite devices with
              flexible IPTV solutions.
            </p>
            <div className="hero-features">
              {[
                "UK & Worldwide Live TV",
                "Sports & PPV Events",
                "Movies & TV Series",
                "Multi-Device Compatibility",
              ].map((x) => (
                <div key={x}>
                  <span>
                    <Icon name="check" size={14} />
                  </span>
                  {x}
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <WhatsAppButton>Enquire on WhatsApp</WhatsAppButton>
              <a className="secondary-button" href="#our-services">
                Explore Our Services <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="trust-line">
              <span className="avatar-stack">
                <i>UK</i>
                <i>PK</i>
                <i>+</i>
              </span>
              <span>
                <strong>Friendly, personal support</strong>
                <small>Helping viewers across the UK & beyond</small>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="hero-stick">
              <img src={heroStick} alt="Fire TV Stick with its voice remote glowing in orange light" />
            </div>
            <div className="floating-card live-card">
              <span className="pulse" />
              <span>
                <strong>Live entertainment</strong>
                <small>Across your favourite screens</small>
              </span>
            </div>
            <div className="floating-card quality-card">
              <Icon name="play" size={18} />
              <span>
                <strong>Premium viewing</strong>
                <small>Simple. Flexible. Supported.</small>
              </span>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <span /> Scroll to explore
        </div>
      </section>

      <section className="trust-strip" aria-label="Why customers choose us">
        <div className="container trust-strip-inner">
          {[
            ["message", "WhatsApp-first support"],
            ["devices", "Works on 7+ device types"],
            ["clock", "Guided setup in minutes"],
            ["globe", "UK & worldwide entertainment"],
          ].map(([icon, label]) => (
            <div key={label}>
              <Icon name={icon} size={20} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section product-section" id="product">
        <div className="container product-layout">
          <div className="product-visual">
            <div className="product-glow" />
            <div className="image-frame">
              <img
                src={photos.product}
                alt="Fire TV Stick and remote in front of a TV showing a premium streaming home screen"
              />
            </div>
            <div className="floating-card product-chip chip-top">
              <Icon name="play" size={16} />
              <span>
                <strong>HD & 4K streaming</strong>
                <small>On supported models</small>
              </span>
            </div>
            <div className="floating-card product-chip chip-bottom">
              <Icon name="check" size={16} />
              <span>
                <strong>Setup in minutes</strong>
                <small>Guided on WhatsApp</small>
              </span>
            </div>
          </div>
          <div className="product-copy">
            <div className="eyebrow">
              <span /> Product overview
            </div>
            <h2>
              Fire TV Stick. <em>Stream. Watch. Enjoy.</em>
            </h2>
            <p>
              A compact streaming stick that turns any TV with an HDMI port into a smart
              entertainment hub. Plug it in, connect to Wi‑Fi and you’re ready for live TV, sports,
              movies and series.
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
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <WhatsAppButton>Ask About Fire TV Stick</WhatsAppButton>
              <a className="secondary-button" href="#how-it-works">
                How It Works <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section highlights-section">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">Why Fire TV Stick</div>
            <h2>
              Small device. <em>Big entertainment.</em>
            </h2>
          </div>
          <div className="highlights-grid">
            {highlights.map((h) => (
              <figure className="highlight-tile why-card" key={h.alt}>
                <img src={h.src} alt={h.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section services" id="our-services">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">What we offer</div>
            <h2>
              Everything You Love. <em>All in One Place.</em>
            </h2>
            <p>A complete entertainment experience designed around the way you watch.</p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <article className="service-card" key={s.title}>
                <span className="card-number">{s.number}</span>
                <div className="icon-box">
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.tags.map((t) => (
                    <li key={t}>
                      <Icon name="check" size={14} />
                      {t}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Ask about this service <Icon name="arrow" size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
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
                <strong>Easy compatibility</strong>
                <small>Built around your devices</small>
              </div>
            </div>
          </div>
          <div className="devices-copy">
            <div className="eyebrow">Watch your way</div>
            <h2>
              Entertainment on <em>Every Screen</em>
            </h2>
            <p>
              Enjoy your entertainment across compatible devices—at home, on the move, and wherever
              you feel most comfortable.
            </p>
            <div className="device-grid">
              {devices.map(([icon, label]) => (
                <div className="device-pill" key={label}>
                  <span>
                    <Icon name={icon} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
            <p className="small-note">
              <Icon name="check" size={15} /> Not sure if your device is compatible? We’ll help you
              check.
            </p>
            <WhatsAppButton>Check My Device</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-heading split">
            <div>
              <div className="eyebrow">The Firestick difference</div>
              <h2>
                Entertainment made <em>simple.</em>
              </h2>
            </div>
            <p>
              Premium viewing should feel effortless. From your first message to getting set up, we
              keep everything clear and personal.
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
                <strong>Home entertainment, upgraded.</strong>
                <span>Movies, sports and live TV for the whole family.</span>
              </div>
            </div>
          )}
          <div className="why-grid">
            {why.map(([icon, title, text], i) => (
              <article className="why-card" key={title}>
                <span className="why-number">0{i + 1}</span>
                <div className="icon-box">
                  <Icon name={icon} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="how-it-works">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">Recommended steps</div>
            <h2>
              Watching tonight in <em>four easy steps.</em>
            </h2>
            <p>Follow our recommended setup. Our team is with you on WhatsApp at every step.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <article className="step-card why-card" key={step.title}>
                <div className="step-visual">
                  {step.visual}
                  <span className="step-badge">Step {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="step-body">
                  <div className="icon-box">
                    <Icon name={step.icon} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
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
            <div className="eyebrow">Setup packages</div>
            <h2>
              Choose Your <em>Setup Package</em>
            </h2>
            <p>Simple one-off pricing. Tell us your device and we’ll help you pick the right fit.</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
                {plan.featured && <span className="popular">Most popular</span>}
                <span className="plan-label">{plan.label}</span>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="price">
                  {plan.price} <span>one-off setup fee</span>
                </div>
                <div className="divider" />
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <span>
                        <Icon name="check" size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton>Order on WhatsApp</WhatsAppButton>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            Setup fees only. Streaming subscriptions such as Netflix, Sky, NOW and TNT Sports are
            paid directly to those providers.
          </p>
        </div>
      </section>

      <section className="section faq-section" id="faqs">
        <div className="container faq-layout">
          <div className="faq-intro">
            <div className="eyebrow">Common questions</div>
            <h2>
              Everything you need to <em>know.</em>
            </h2>
            <p>Can’t find your answer? Send us a message and our team will be happy to help.</p>
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
                  {q}
                  <i>
                    <Icon name={openFaq === i ? "close" : "chevron"} size={18} />
                  </i>
                </button>
                <div className="faq-answer">
                  <p>{a}</p>
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
              <div className="eyebrow">We’re ready when you are</div>
              <h2>Ready to Upgrade Your Entertainment?</h2>
              <p>
                Tell us which device you use and what entertainment you’re looking for. Our team is
                ready to help.
              </p>
            </div>
            <WhatsAppButton>Enquire Now on WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
}

