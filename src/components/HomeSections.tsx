import { useState } from "react";
import { faqs, steps } from "../data/home";
import { useSettings } from "../settings";
import { Icon, IPTVLogo, WhatsAppButton, WhatsAppIcon } from "./ui";

export function HowItWorksSection({ showHeading = true }: { showHeading?: boolean }) {
  const { t } = useSettings();
  return (
    <section className="section process-section" id="how-it-works">
      <div className="container">
        {showHeading && (
          <div className="section-heading centered">
            <div className="eyebrow">{t("Recommended steps")}</div>
            <h2>{t("Watching tonight in ")}<em>{t("four easy steps.")}</em></h2>
            <p>{t("Follow our recommended setup. Our team is with you on WhatsApp at every step.")}</p>
          </div>
        )}
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card why-card" key={step.title}>
              <div className="step-visual">
                {step.visual}
                <IPTVLogo className="iptv-media-badge" />
                <span className="step-badge">{t("Step")} {String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="step-body">
                <div className="icon-box">{step.icon === "message" ? <WhatsAppIcon /> : <Icon name={step.icon} />}</div>
                <h3>{t(step.title)}</h3>
                <p>{t(step.text)}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="steps-cta"><WhatsAppButton>Start Step 1 on WhatsApp</WhatsAppButton></div>
      </div>
    </section>
  );
}

export function FaqSection({ showIntro = true }: { showIntro?: boolean }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { t } = useSettings();
  return (
    <section className="section faq-section" id="faqs">
      <div className={`container faq-layout${showIntro ? "" : " faq-layout-full"}`}>
        {showIntro && (
          <div className="faq-intro">
            <div className="eyebrow">{t("Common questions")}</div>
            <h2>{t("Everything you need to ")}<em>{t("know.")}</em></h2>
            <p>{t("Can’t find your answer? Send us a message and our team will be happy to help.")}</p>
            <WhatsAppButton>Ask Us on WhatsApp</WhatsAppButton>
          </div>
        )}
        <div className="accordion">
          {faqs.map(([question, answer], index) => (
            <article className={`faq-item ${openFaq === index ? "active" : ""}`} key={question}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>{t(question)}
                <i><Icon name={openFaq === index ? "close" : "chevron"} size={18} /></i>
              </button>
              <div className="faq-answer" id={`faq-answer-${index}`}><p>{t(answer)}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const IPTV_FAQS: [string, string][] = [
  [
    "What is the best IPTV service in the UK?",
    "TV Packages provides UK-based IPTV setup support and subscription guidance, with live TV, sports, movies and 4K on-demand from £10/month, on any device, with no contract. We set everything up for you via WhatsApp.",
  ],
  [
    "Is IPTV legal in the UK?",
    "IPTV technology itself is legal. The legality depends on whether the service holds the correct broadcast licences. TV Packages guides customers towards legitimate, properly licensed IPTV services only. We always advise on the legal position before recommending a service.",
  ],
  [
    "How much does IPTV cost in the UK?",
    "UK IPTV subscriptions typically cost £10 to £20 per month, compared to £80 to £120 per month for a full Sky TV package with sports. Our plans start from £10/month with no long-term contract.",
  ],
  [
    "What internet speed do I need for IPTV?",
    "A minimum of 10 Mbps for HD streaming, and 25 Mbps or above for 4K. Most standard UK broadband connections are more than sufficient. We'll check your connection speed as part of the setup process.",
  ],
  [
    "Can I use IPTV on a Firestick?",
    "Yes. IPTV works on all Amazon Firestick models. We'll install the right app (TiviMate or IPTV Smarters Pro) and configure everything via WhatsApp, with no technical knowledge needed on your end.",
  ],
];

export const SERVICES_FAQS: [string, string][] = [
  [
    "What does a UK IPTV service include?",
    "A UK IPTV service includes live TV channels (BBC, ITV, Channel 4, Sky Sports, TNT Sports), Premier League and Champions League football, movies, series and catch-up TV, all streamed over your broadband connection with no satellite dish or cable contract.",
  ],
  [
    "Do I need a TV licence to use IPTV in the UK?",
    "Yes. If you watch or record live TV on any channel, including through IPTV, you legally need a TV licence in the UK. This is a requirement under the Communications Act, regardless of which device or service you use.",
  ],
  [
    "What is the difference between IPTV and a Firestick package?",
    "IPTV is the technology, it delivers TV channels over the internet. A Firestick is a device that plays IPTV. You need both: an IPTV subscription for the channels, and a compatible device such as a Firestick, Smart TV or phone to watch them on. TVPackages.uk supplies both the subscription and the device setup.",
  ],
  [
    "Does IPTV include Netflix and Disney+?",
    "No. Netflix, Disney+, Prime Video and similar services are separate subscriptions paid directly to those providers. IPTV gives you live TV channels and on-demand content, it does not replace or include Netflix or Disney+. We help you set them up alongside your IPTV service.",
  ],
  [
    "Can I use IPTV on more than one device at the same time?",
    "This depends on your plan. Message us on WhatsApp and we'll confirm how many devices your plan covers and help you set up each one.",
  ],
];

export const PACKAGES_FAQS: [string, string][] = [
  [
    "How much does IPTV setup cost in the UK?",
    "TVPackages.uk charges a one-off setup support fee, we configure your chosen device via WhatsApp so it is ready to stream. Your IPTV subscription (the channels) is a separate cost paid directly to the provider, typically £10–£20 per month. Everything is confirmed transparently before you pay.",
  ],
  [
    "What is included in the TVPackages.uk setup service?",
    "Our setup service includes: device configuration via WhatsApp, IPTV app installation (TiviMate, IPTV Smarters or the right app for your device), subscription credential entry, EPG (TV guide) setup, and a test stream to confirm all channels and sports are working correctly.",
  ],
  [
    "Do I need to pay a monthly fee to TVPackages.uk?",
    "No. TVPackages.uk charges a one-off setup support fee. Your monthly IPTV subscription payment goes directly to your provider, we do not take ongoing fees. We are available on WhatsApp if you need help at any point after setup.",
  ],
  [
    "What happens if my IPTV stops working after setup?",
    "Message us on WhatsApp and our UK-based team will troubleshoot the issue with you. Common fixes include refreshing your subscription credentials, reconnecting to Wi-Fi, or clearing the app cache.",
  ],
];

export const DEVICES_FAQS: [string, string][] = [
  [
    "What devices can I use IPTV on in the UK?",
    "IPTV works on Amazon Firestick (all models), Samsung Smart TVs (Tizen OS), LG Smart TVs (webOS), Android TV boxes, Sony TVs (Android TV), iPhones and iPads, Android smartphones and tablets, and Windows PCs. Any device with an internet connection and an IPTV app can run a UK IPTV subscription.",
  ],
  [
    "How do I set up IPTV on a Firestick?",
    "Enable apps from unknown sources in Firestick settings. Download the Downloader app. Use it to install TiviMate or IPTV Smarters Pro. Enter your subscription credentials (M3U URL or Xtream Codes). TVPackages.uk completes this entire process for you via WhatsApp, no technical knowledge required.",
  ],
  [
    "What is the best IPTV app for Firestick UK?",
    "Popular IPTV apps for Firestick in the UK include TiviMate and IPTV Smarters Pro, both known for a clear TV guide (EPG) and easy channel switching. We install and configure the right app for you via WhatsApp.",
  ],
  [
    "Does IPTV work on Samsung Smart TV?",
    "Yes. IPTV works on Samsung Smart TVs running Tizen OS. TVPackages.uk provides WhatsApp setup support for Samsung Smart TVs and will check that your model is compatible.",
  ],
  [
    "What internet speed do I need for IPTV in 4K?",
    "For 4K IPTV streaming, a minimum of 25 Mbps download speed is recommended. For HD (1080p), 10 Mbps is sufficient. We'll check your connection speed as part of the setup process.",
  ],
];

export function IptvFaqSection({
  faqs = IPTV_FAQS,
  heading = "Frequently Asked Questions About IPTV in the UK",
  id = "iptv-faq",
}: { faqs?: [string, string][]; heading?: string; id?: string } = {}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section faq-section iptv-faq" id={id}>
      <div className="container faq-layout faq-layout-full">
        <div className="section-heading">
          <h2>{heading}</h2>
        </div>
        <div className="accordion">
          {faqs.map(([question, answer], index) => (
            <article className={`faq-item ${open === index ? "active" : ""}`} key={question}>
              <h3>
                <button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} aria-controls={`iptv-faq-answer-${index}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>{question}
                  <i><Icon name={open === index ? "close" : "chevron"} size={18} /></i>
                </button>
              </h3>
              <div className="faq-answer" id={`iptv-faq-answer-${index}`}><p>{answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
