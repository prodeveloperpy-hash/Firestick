import { useEffect, useState } from "react";
import { Link, usePath } from "../router";
import { useSettings } from "../settings";
import { BrandMark, Icon, WhatsAppButton } from "./ui";
import { LanguageDropdown } from "./LanguageDropdown";
import { ThemeToggle } from "./ThemeToggle";
import { blogCategories } from "../data/posts";
import { adultService, netflixService, services } from "../data/home";

const serviceMenu = [
  ...services.map((service) => ({ label: service.title, href: `/services/${service.slug}`, icon: service.icon })),
  { label: netflixService.title, href: "/netflix", icon: netflixService.icon },
  { label: adultService.title, href: "/adults", icon: adultService.icon },
];

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Packages", "/packages"],
  ["Blogs", "/blog"],
  ["FAQs", "/faqs"],
  ["Contact", "/contact"],
];

export function Header() {
  const path = usePath().replace(/\/+$/, "") || "/";
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
  const servicesActive = path.startsWith("/services") || path === "/netflix" || path === "/adults";

  const navLink = ([label, href]: string[]) => {
    const active = href === "/" ? path === "/" : href === "/blog" ? path.startsWith("/blog") : path === href;
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
          {navItems.map(([label, href]) =>
            label === "Services" ? (
              <div className="nav-dropdown" key={label}>
                <Link href="/services" onClick={close} className={servicesActive ? "active" : undefined} aria-haspopup="true">
                  {t("Services")} <Icon name="chevron" size={14} />
                </Link>
                <div className="services-menu" role="menu" aria-label={t("Services")}>
                  {serviceMenu.map((item) => (
                    <Link key={item.href} href={item.href} role="menuitem" onClick={close} className={path === item.href ? "active" : undefined}>
                      <Icon name={item.icon} size={16} />
                      <span>{t(item.label)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : label === "Blogs" ? (
              <div className="nav-dropdown" key={label}>
                <Link href="/blog" onClick={close} className={path.startsWith("/blog") ? "active" : undefined} aria-haspopup="true">
                  {t("Blogs")} <Icon name="chevron" size={14} />
                </Link>
                <div className="services-menu blogs-menu" role="menu" aria-label={t("Blogs")}>
                  {blogCategories.map((c) => (
                    <Link key={c.slug} href={`/blog/category/${c.slug}`} role="menuitem" onClick={close} className={path === `/blog/category/${c.slug}` ? "active" : undefined}>
                      <Icon name={c.slug === "guide" ? "layers" : "sliders"} size={16} />
                      <span>{t(c.label)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              navLink([label, href])
            ),
          )}
          <div className="nav-menu-tools">
            <ThemeToggle />
            <LanguageDropdown />
          </div>
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
