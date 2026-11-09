import { useLayoutEffect } from "react";

const SELECTOR = [
  ".section-heading",
  ".page-hero-inner",
  ".devices-copy",
  ".faq-intro",
  ".faq-item",
  ".cta-panel",
  ".prose",
  ".service-card",
  ".why-card",
  ".process-card",
  ".price-card",
  ".post-card",
  ".location-card",
  ".difference-path",
  ".home-banner",
  ".channel-strip",
  ".trust-strip-inner > div",
  ".ph-hero-bottom",
  ".service-carousel",
  ".product-visual",
  ".product-copy",
  ".hardware-copy",
  ".hardware-video-frame",
  ".hl-copy",
  ".hl-visual",
  ".popular-product",
  ".ph-copy",
  ".ph-double-phones",
  ".ph-app-visual",
  ".ph-device-scene",
  ".ph-chat",
  ".ph-centered",
  ".ph-price-card",
  ".ph-final-panel > div",
  ".footer-grid > div",
  ".footer-bottom",
].join(",");

/** Fades each section, card and column up as it scrolls into view. */
export function useScrollReveal(path: string) {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("reveal-ready");
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

    // Stagger siblings inside the same grid.
    els.forEach((el) => {
      el.classList.add("reveal");
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      el.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(el), 5) * 90}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => {
      if (!el.classList.contains("revealed")) io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);
}
