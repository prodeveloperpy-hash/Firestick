import { useEffect } from "react";

const SELECTOR = [
  ".section-heading",
  ".page-hero-inner",
  ".devices-copy",
  ".faq-intro",
  ".cta-panel",
  ".prose",
  ".service-card",
  ".why-card",
  ".process-card",
  ".price-card",
  ".post-card",
  ".location-card",
].join(",");

/** Fades text and cards up as they scroll into view. Re-runs on every page change. */
export function useScrollReveal(path: string) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("reveal-ready");
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

    // Stagger siblings inside the same grid.
    els.forEach((el) => {
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
