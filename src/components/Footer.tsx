import { Link } from "../router";
import { useSettings } from "../settings";
import { BrandMark, Icon, IPTVLogo, WHATSAPP_URL, WhatsAppIcon } from "./ui";

export function Footer() {
  const { t } = useSettings();
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-about">
          <Link href="/" className="brand" aria-label="Tv Packages home">
            <BrandMark />
            <span>
              TV <span>PACKAGES</span>
            </span>
          </Link>
          <IPTVLogo className="iptv-footer" />
          <p>
            {t(
              "Flexible IPTV entertainment solutions with friendly, personal support for viewers across the UK and beyond.",
            )}
          </p>
          <div className="region">
            <Icon name="globe" size={18} /> {t("UK based • Worldwide entertainment")}
          </div>
        </div>
        <div>
          <h4>{t("Explore")}</h4>
          <Link href="/">{t("Home")}</Link>
          <Link href="/#our-services">{t("Our Services")}</Link>
          <Link href="/#compatible-devices">{t("Compatible Devices")}</Link>
          <Link href="/#packages">{t("Packages")}</Link>
          <Link href="/blog">{t("Blog")}</Link>
        </div>
        <div>
          <h4>{t("Get in touch")}</h4>
          <a className="footer-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <span>
              <WhatsAppIcon size={18} />
            </span>
            <div>
              <small>{t("WhatsApp us")}</small>
              <strong>{t("Chat with our team")}</strong>
            </div>
          </a>
          <p className="support-hours">{t("Friendly support, 7 days a week")}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Tv Packages. {t("All rights reserved.")}
        </span>
        <div>
          <a href="#">{t("Privacy Policy")}</a>
          <a href="#">{t("Terms & Conditions")}</a>
        </div>
        <p>
          {t(
            "Services and availability are subject to supported subscriptions, access and applicable rights.",
          )}
        </p>
      </div>
    </footer>
  );
}
