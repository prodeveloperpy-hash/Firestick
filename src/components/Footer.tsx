import { Link } from "../router";
import { BrandMark, Icon, WHATSAPP_URL, WhatsAppIcon } from "./ui";

export function Footer() {
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
          <p>
            Flexible IPTV entertainment solutions with friendly, personal support for viewers across
            the UK and beyond.
          </p>
          <div className="region">
            <Icon name="globe" size={18} /> UK based • Worldwide entertainment
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/">Home</Link>
          <Link href="/#our-services">Our Services</Link>
          <Link href="/#compatible-devices">Compatible Devices</Link>
          <Link href="/#packages">Packages</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <h4>Get in touch</h4>
          <a className="footer-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <span>
              <WhatsAppIcon size={18} />
            </span>
            <div>
              <small>WhatsApp us</small>
              <strong>Chat with our team</strong>
            </div>
          </a>
          <p className="support-hours">Friendly support, 7 days a week</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Tv Packages. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <p>
          Services and availability are subject to supported subscriptions, access and applicable
          rights.
        </p>
      </div>
    </footer>
  );
}
