import { CompatibilityGrid } from "../components/CompatibilityGrid";
import { DEVICES_FAQS, FaqSection, HowItWorksSection, IptvFaqSection, PACKAGES_FAQS } from "../components/HomeSections";
import { useDevicesSchema, usePackagesSchema } from "../components/HomeSchema";
import { CtaSection, PageHero } from "../components/PageParts";
import { PopularProducts } from "../components/PopularProducts";
import { RetainedSection } from "../components/RetainedSections";
import { usePageMeta } from "../router";
import { useSettings } from "../settings";

export function DevicesPage() {
  const { t } = useSettings();
  usePageMeta(
    "IPTV on Firestick UK: All Compatible Devices Listed | TVPackages.uk",
    "Set up IPTV on Firestick, Samsung Smart TV, LG, iPhone, Android box and more. UK-based WhatsApp setup support included with every plan. Any device, any room.",
  );
  useDevicesSchema();
  return (
    <main>
      <PageHero
        eyebrow={t("Compatible devices and players")}
        title={t("IPTV on Firestick UK: Set Up IPTV on Any Device With Our Help")}
        lead={t("IPTV works on Amazon Firestick, Samsung and LG Smart TVs, Android TV boxes, iPhones, iPads, Android phones, and Windows PCs. Any device with an internet connection and an IPTV app can run a UK subscription. TVPackages.uk sets up IPTV on any of these devices via WhatsApp, no technical knowledge needed.")}
      />
      <CompatibilityGrid />
      <RetainedSection kind="devices" />
      <PopularProducts />
      <IptvFaqSection faqs={DEVICES_FAQS} heading="Frequently Asked Questions: IPTV Devices UK" id="devices-faq" />
      <CtaSection />
    </main>
  );
}

export function PackagesPage() {
  const { t } = useSettings();
  usePageMeta(
    "IPTV Setup UK: Packages & Pricing | TVPackages.uk",
    "Choose your IPTV setup package. One-off UK-based installation support via WhatsApp: Firestick, Smart TV or any device. Flexible plans, no long-term contract.",
  );
  usePackagesSchema();
  return (
    <main>
      <PageHero
        eyebrow={t("A LITTLE HELP GOES A LONG WAY")}
        title={t("IPTV Setup UK: Choose Your Package & Get Started Today")}
        lead={t("UK IPTV subscriptions typically cost £10–£20 per month, compared to £80–£120/month for a full Sky TV package with sports. TVPackages.uk offers flexible plans with no long-term contract, plus one-off setup support so your chosen device is ready to stream on the same day.")}
      />
      <RetainedSection kind="plans" />
      <IptvFaqSection faqs={PACKAGES_FAQS} heading="Frequently Asked Questions: Pricing & Setup" id="packages-faq" />
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
