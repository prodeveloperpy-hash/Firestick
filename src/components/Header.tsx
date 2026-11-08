import { useEffect, useState } from "react";
import { Link, usePath } from "../router";
import { BrandMark, Icon, WhatsAppButton } from "./ui";

const navItems = [
  ["Home", "/"],
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

  // Close the menu when the page changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const close = () => setMenuOpen(false);

  const navLink = ([label, href]: string[]) => {
    const active = href === "/blog" ? path.startsWith("/blog") : false;
    return (
      <Link key={label} href={href} onClick={close} className={active ? "active" : undefined}>
        {label}
      </Link>
    );
  };

  return (
    <header className="navbar">
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
        <div className="nav-actions">
          <WhatsAppButton className="nav-chat">Chat With Us</WhatsAppButton>
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
