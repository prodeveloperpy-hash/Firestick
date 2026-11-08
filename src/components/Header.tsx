import { useEffect, useState } from "react";
import { Link, usePath } from "../router";
import { useSettings } from "../settings";
import { BrandMark, Icon, WhatsAppButton } from "./ui";
import { LanguageDropdown } from "./LanguageDropdown";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  ["Home", "/"],
  ["Products", "/#popular-products"],
  ["Services", "/#our-services"],
  ["Devices", "/#compatible-devices"],
  ["Packages", "/#packages"],
  ["Blog", "/blog"],
  ["FAQs", "/#faqs"],
  ["Contact", "/#contact"],
];

export function Header() {
  const path = usePath();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useSettings();
  const [scrolled, setScrolled] = useState(false);

  // Close the menu when the page changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  // Condense the navbar once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  const navLink = ([label, href]: string[]) => {
    const active = href === "/blog" ? path.startsWith("/blog") : false;
    return (
      <Link key={label} href={href} onClick={close} className={active ? "active" : undefined}>
        {t(label)}
      </Link>
    );
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Tv Packages home">
          <BrandMark />
          <span>
            TV <span>PACKAGES</span>
          </span>
        </Link>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {navItems.map(navLink)}
        </nav>
        <span className="nav-divider nav-divider-links" aria-hidden="true" />
        <div className="nav-actions">
          <div className="nav-tools">
            <ThemeToggle />
            <span className="nav-tools-sep" aria-hidden="true" />
            <LanguageDropdown />
          </div>
          <span className="nav-divider nav-divider-chat" aria-hidden="true" />
          <WhatsAppButton className="nav-chat">Contact Us</WhatsAppButton>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
