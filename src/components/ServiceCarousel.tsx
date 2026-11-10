import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSettings } from "../settings";
import { Icon, IPTVLogo, WHATSAPP_URL } from "./ui";
import { ServiceBrandTile } from "./ServiceBrandTile";

type Service = { icon: string; number: string; image: string; imageAlt: string; title: string; text: string; tags: string[]; showcase: string[][] };

const supportedDevices = [["tv", "Fire Stick"], ["tv", "Smart TV"], ["phone", "Android"], ["box", "MAG / Msg Box"], ["tablet", "Tablet"], ["phone", "iPhone"], ["tablet", "iPad"]];

export function ServiceCarousel({ items, initial = 0, autoplay = true }: { items: Service[]; initial?: number; autoplay?: boolean }) {
  const { t } = useSettings();
  const [active, setActive] = useState(initial);
  const [position, setPosition] = useState(initial + 1);
  const [resetting, setResetting] = useState(false);
  const moving = useRef(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const go = useCallback((index: number) => {
    if (moving.current || resetting) return;
    const next = (index + items.length) % items.length;
    if (next === active) return;
    moving.current = !reducedMotion;
    setActive(next);
    setPosition(reducedMotion ? next + 1 : index < 0 ? 0 : index >= items.length ? items.length + 1 : next + 1);
  }, [active, items.length, reducedMotion, resetting]);

  const finishTransition = () => {
    moving.current = false;
    if (position === 0 || position === items.length + 1) {
      setResetting(true);
      setPosition(position === 0 ? items.length : 1);
    }
  };

  useLayoutEffect(() => {
    if (!resetting) return;
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => setResetting(false));
    });
    return () => { cancelAnimationFrame(firstFrame); cancelAnimationFrame(secondFrame); };
  }, [resetting]);

  useEffect(() => {
    if (reducedMotion) {
      moving.current = false;
      setPosition(active + 1);
    }
  }, [reducedMotion, active]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (root.current) observer.observe(root.current);
    return () => { query.removeEventListener("change", update); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!autoplay || hovered || focused || !visible || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) go(active + 1);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [autoplay, hovered, focused, visible, reducedMotion, active, go]);

  return (
    <div ref={root} className="service-carousel" role="region" aria-roledescription="carousel" aria-label={t("What we offer")}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className="service-category-tabs" aria-label={t("Choose a service")}>
        {items.map((service, index) => <button type="button" key={service.title} onClick={() => go(index)} aria-pressed={index === active}>
          <Icon name={service.icon} size={24} /><span>{t(service.title)}</span>
        </button>)}
      </div>
      <div className="service-carousel-window"
        onTouchStart={(event) => { touchX.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchX.current !== null) {
            const distance = touchX.current - event.changedTouches[0].clientX;
            if (Math.abs(distance) > 50) go(active + (distance > 0 ? 1 : -1));
          }
          touchX.current = null;
        }}>
        <div className="service-carousel-track" style={{ transform: `translateX(-${position * 100}%)`, transition: resetting ? "none" : undefined }}
          onTransitionEnd={(event) => { if (event.target === event.currentTarget && event.propertyName === "transform") finishTransition(); }}>
          {[items[items.length - 1], ...items, items[0]].map((service, index) => (
            <article key={`${service.title}-${index}`} className="service-slide" aria-roledescription="slide" aria-label={`${(index - 1 + items.length) % items.length + 1} / ${items.length}: ${t(service.title)}`} aria-hidden={index !== position} inert={index !== position}>
              <img className="service-slide-image" src={service.image} alt={service.imageAlt} loading={index <= 1 ? "eager" : "lazy"} />
              <IPTVLogo className="service-slide-logo" />
              <div className="service-showcase" aria-label={t("Channels and apps")}>
                {service.showcase.map(([icon, label, brand, photo]) => (
                  <ServiceBrandTile key={label} icon={icon} label={label} brand={brand} photo={photo} />
                ))}
              </div>
              <div className="service-slide-copy">
                <span className="service-slide-kicker"><Icon name={service.icon} size={20} /> {service.number} / {String(items.length).padStart(2, "0")}</span>
                <h3>{t(service.title)}</h3>
                <p>{t(service.text)}</p>
                <ul>{service.tags.map((tag) => <li key={tag}><Icon name="check" size={15} />{t(tag)}</li>)}</ul>
                <div className="service-supported-devices">
                  <span>{t("Load your compatible device")}</span>
                  <div>{supportedDevices.map(([icon, label]) => <span key={label}><Icon name={icon} size={16} />{label}</span>)}</div>
                </div>
                <a className="secondary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">{t("Ask about this service")} <Icon name="arrow" size={18} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="service-carousel-controls">
        <button type="button" onClick={() => go(active - 1)} aria-label={t("Previous service")}><Icon name="back" size={20} /></button>
        <div className="service-carousel-dots">{items.map((service, index) => (
          <button type="button" key={service.title} onClick={() => go(index)} aria-label={t(service.title)} aria-current={index === active ? "true" : undefined}><span /></button>
        ))}</div>
        <button type="button" onClick={() => go(active + 1)} aria-label={t("Next service")}><Icon name="arrow" size={20} /></button>
      </div>
    </div>
  );
}

export function ServiceSpotlight({ service, id, kicker, logo }: { service: Service; id: string; kicker: string; logo?: string }) {
  const { t } = useSettings();
  return (
    <section className="service-carousel service-spotlight" id={id} aria-label={t(service.title)}>
      <article className="service-slide">
        <img className="service-slide-image" src={service.image} alt={service.imageAlt} loading="lazy" />
        <IPTVLogo className="service-slide-logo" />
        <div className="service-showcase" aria-label={t(service.title)}>
          {service.showcase.map(([icon, label, brand, photo]) => (
            <ServiceBrandTile key={label} icon={icon} label={label} brand={brand} photo={photo} />
          ))}
        </div>
        <div className="service-slide-copy">
          <span className="service-slide-kicker">{logo ? <img className="spotlight-logo" src={logo} alt="" /> : <Icon name={service.icon} size={20} />} {t(kicker)}</span>
          <h3>{t(service.title)}</h3>
          <p>{t(service.text)}</p>
          <ul>{service.tags.map((tag) => <li key={tag}><Icon name="check" size={15} />{t(tag)}</li>)}</ul>
          <a className="secondary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">{t("Ask about this service")} <Icon name="arrow" size={18} /></a>
        </div>
      </article>
    </section>
  );
}
