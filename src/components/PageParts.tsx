import type { ReactNode } from "react";
import { useSettings } from "../settings";
import { WhatsAppButton, WhatsAppIcon } from "./ui";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="ambient ambient-one" />
      <div className="container page-hero-inner">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {lead && <p className="hero-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function CtaSection({
  title = "Ready to Upgrade Your Entertainment?",
  text = "Tell us which device you use and what entertainment you’re looking for. Our team is ready to help.",
}: {
  title?: string;
  text?: string;
}) {
  const { t } = useSettings();
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-orb">
            <WhatsAppIcon size={32} />
          </div>
          <div>
            <div className="eyebrow">{t("We’re ready when you are")}</div>
            <h2>{t(title)}</h2>
            <p>{t(text)}</p>
          </div>
          <WhatsAppButton>Enquire Now on WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
