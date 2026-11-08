import { useEffect, useRef, type ReactNode } from "react";
import { useSettings } from "../settings";
import { Icon } from "./ui";

export function LogoRail({ items }: { items: ReactNode[] }) {
  const { t } = useSettings();
  const rail = useRef<HTMLDivElement>(null);
  const offset = useRef(0);

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = 0;
    const tick = (now: number) => {
      const elapsed = previous ? Math.min(now - previous, 50) : 0;
      previous = now;
      if (!motion.matches && !document.hidden) {
        const midpoint = (element.children[items.length] as HTMLElement)?.offsetLeft;
        if (midpoint) {
          // Accumulate fractional pixels instead of losing them to scrollLeft rounding.
          offset.current = (offset.current + elapsed * .045) % midpoint;
          element.scrollLeft = offset.current;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [items.length]);

  const move = (direction: number) => {
    const element = rail.current;
    if (!element) return;
    const midpoint = (element.children[items.length] as HTMLElement)?.offsetLeft ?? 0;
    if (!midpoint) return;
    offset.current = (offset.current + direction * 300 + midpoint) % midpoint;
    element.scrollLeft = offset.current;
  };

  return (
      <div className="channel-strip">
        <div className="channel-rail" ref={rail} tabIndex={0} role="region" aria-label={t("Compatible devices and players")}>
          {[...items, ...items].map((item, index) => (
            <div key={index} className="channel-logo-card" aria-hidden={index >= items.length}>
              {item}
            </div>
          ))}
        </div>
        <button className="channel-arrow channel-arrow-prev" type="button" onClick={() => move(-1)} aria-label={t("Previous devices")}><Icon name="back" /></button>
        <button className="channel-arrow channel-arrow-next" type="button" onClick={() => move(1)} aria-label={t("Next devices")}><Icon name="arrow" /></button>
      </div>
  );
}
