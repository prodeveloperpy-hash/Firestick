import { useEffect, useRef, useState } from "react";
import { Link, usePath } from "../router";
import { locations } from "../data/locations";
import { BrandMark, Icon, WhatsAppButton } from "./ui";

const beforeLocations = [
  ["Home", "/"],
  ["Services", "/#our-services"],
  ["Devices", "/#compatible-devices"],
  ["Packages", "/#packages"],
];
const afterLocations = [
  ["Blog", "/blog"],
  ["FAQs", "/#faqs"],
  ["Contact", "/#contact"],
];

export function Header() {
  const path = usePath();
  const [menuOpen, setMenuOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus when the page changes.
  useEffect(() => {
    setMenuOpen(false);
    setLocOpen(false);
  }, [path]);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!locOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setLocOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLocOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [locOpen]);

  const close = () => {
    setMenuOpen(false);
    setLocOpen(false);
  };

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
        <Link href="/" className="brand" aria-label="Firestick home">
          <BrandMark />
          <span>
            FIRE<span>STICK</span>
          </span>
        </Link>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {beforeLocations.map(navLink)}
          <div className={`nav-dropdown ${locOpen ? "open" : ""}`} ref={dropdownRef}>
            <button
              type="button"
              className={path.startsWith("/locations") ? "active" : undefined}
              aria-expanded={locOpen}
              aria-haspopup="true"
              onClick={() => setLocOpen(!locOpen)}
            >
              Locations <Icon name="chevron" size={14} />
            </button>
            <div className="dropdown-panel">
              <div className="dropdown-head">
                <Icon name="pin" size={14} /> Pakistan
              </div>
              <div className="dropdown-grid">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    onClick={close}
                    className={path === `/locations/${loc.slug}` ? "active" : undefined}
                  >
                    <strong>{loc.city}</strong>
                    <small>{loc.province}</small>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {afterLocations.map(navLink)}
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
