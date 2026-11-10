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
