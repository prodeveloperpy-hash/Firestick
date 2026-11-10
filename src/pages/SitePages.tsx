import { CompatibilityGrid } from "../components/CompatibilityGrid";
import { FaqSection, HowItWorksSection } from "../components/HomeSections";
import { CtaSection, PageHero } from "../components/PageParts";
import { PopularProducts } from "../components/PopularProducts";
import { RetainedSection } from "../components/RetainedSections";
import { usePageMeta } from "../router";
import { useSettings } from "../settings";

export function DevicesPage() {
  const { t } = useSettings();
  usePageMeta(
    "Devices | Tv Packages",
    "Order a Fire TV Stick or use your own smart TV, phone or tablet. Tv Packages helps you check the device and get set up.",
  );
  return (
    <main>
      <PageHero
        eyebrow={t("Compatible devices and players")}
        title={<>{t("At home.")} {t("On the move.")}</>}
        lead={t("You don’t have to start from scratch. Our services work with a range of popular streaming devices, smart TVs, phones and tablets. We’ll help you check yours.")}
      />
      <CompatibilityGrid />
      <RetainedSection kind="devices" />
      <PopularProducts />
      <CtaSection />
    </main>
  );
}

export function PackagesPage() {
  const { t } = useSettings();
  usePageMeta(
    "Packages | Tv Packages",
    "Compare Basic, Standard and Premium setup help from Tv Packages. Setup fees are separate from your own streaming subscriptions.",
  );
  return (
    <main>
      <PageHero
        eyebrow={t("A LITTLE HELP GOES A LONG WAY")}
        title={<>{t("Make your setup")} <em>{t("feel premium.")}</em></>}
        lead={t("Choose the level of setup support that suits you. Clear one-off fees, friendly guidance, and your own streaming subscriptions.")}
      />
      <RetainedSection kind="plans" />
      <CtaSection />
    </main>
  );
}

export function FaqsPage() {
  const { t } = useSettings();
  usePageMeta(
    "FAQs | Tv Packages",
    "Answers about supported devices, channels, UK and international entertainment, and how Tv Packages setup works.",
  );
  return (
    <main>
      <PageHero
        eyebrow={t("Common questions")}
        title={<>{t("Everything you need to ")}<em>{t("know.")}</em></>}
        lead={t("Can’t find your answer? Send us a message and our team will be happy to help.")}
      />
      <FaqSection showIntro={false} />
      <CtaSection />
    </main>
  );
}

export function ContactPage() {
  const { t } = useSettings();
  usePageMeta(
    "Contact | Tv Packages",
    "Message the Tv Packages team on WhatsApp. Tell us your device and what you want to watch.",
  );
  return (
    <main>
      <PageHero
        eyebrow={t("Get in touch")}
        title={<>{t("More to watch.")} <em>{t("Less to figure out.")}</em></>}
        lead={t("Tell us your device and what you love. We’ll take it from there.")}
      />
      <RetainedSection kind="final" />
    </main>
  );
}

export function HowItWorksPage() {
  const { t } = useSettings();
  usePageMeta(
    "How It Works | Tv Packages",
    "Four steps to get set up with Tv Packages: get a device, plug it in, message us on WhatsApp, and start watching.",
  );
  return (
    <main>
      <PageHero
        eyebrow={t("Recommended steps")}
        title={<>{t("Watching tonight in ")}<em>{t("four easy steps.")}</em></>}
        lead={t("Follow our recommended setup. Our team is with you on WhatsApp at every step.")}
      />
      <HowItWorksSection showHeading={false} />
      <CtaSection />
    </main>
  );
}

export function PrivacyPage() {
  const { t } = useSettings();
  usePageMeta(
    "Privacy Policy | Tv Packages",
    "How Tv Packages handles messages you send on WhatsApp and the information shown on this website.",
  );
  return (
    <main>
      <PageHero
        eyebrow={t("Privacy Policy")}
        title={<>Privacy <em>Policy.</em></>}
        lead={t("This website shares information about Tv Packages. It does not ask you to create an account.")}
      />
      <section className="section">
        <div className="container legal-copy">
          <p>{t("If you message us on WhatsApp, that conversation is handled by WhatsApp under their own privacy terms. We use it to answer questions about devices, setup and packages.")}</p>
          <p>{t("We do not sell customer lists from this website. Questions about your messages can be sent to the same WhatsApp chat.")}</p>
        </div>
      </section>
    </main>
  );
}

export function TermsPage() {
  const { t } = useSettings();
  usePageMeta(
    "Terms & Conditions | Tv Packages",
    "Setup help from Tv Packages is separate from streaming subscriptions, which you pay to each provider.",
  );
  return (
    <main>
      <PageHero
        eyebrow={t("Terms & Conditions")}
        title={<>Terms & <em>Conditions.</em></>}
        lead={t("Setup fees only. Streaming subscriptions are paid directly to their providers.")}
      />
      <section className="section">
        <div className="container legal-copy">
          <p>{t("Device setup and guidance are the services described on this site. Apps such as Netflix, Disney+ and Prime Video need your own subscription.")}</p>
          <p>{t("What you can watch depends on your device, your subscriptions, and the access rules of each service. Message us on WhatsApp before you order if you want to check a device or a package.")}</p>
        </div>
      </section>
    </main>
  );
}
