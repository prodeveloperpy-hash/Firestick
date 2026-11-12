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

export function IptvFaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section faq-section iptv-faq" id="iptv-faq">
      <div className="container faq-layout faq-layout-full">
        <div className="section-heading">
          <h2>Frequently Asked Questions About IPTV in the UK</h2>
        </div>
        <div className="accordion">
          {IPTV_FAQS.map(([question, answer], index) => (
            <article className={`faq-item ${open === index ? "active" : ""}`} key={question}>
              <button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} aria-controls={`iptv-faq-answer-${index}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>{question}
                <i><Icon name={open === index ? "close" : "chevron"} size={18} /></i>
              </button>
              <div className="faq-answer" id={`iptv-faq-answer-${index}`}><p>{answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
