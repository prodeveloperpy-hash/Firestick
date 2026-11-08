import { useEffect } from "react";

export function useDifferencePath(page: string) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".difference-path");
    const route = root?.querySelector<SVGPathElement>(".difference-track");
    const flow = root?.querySelector<SVGPathElement>(".difference-flow");
    const svg = route?.ownerSVGElement;
    const nodes = Array.from(root?.querySelectorAll<HTMLElement>(".difference-node") ?? []);
    if (!root || !route || !flow || !svg || !nodes.length) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const length = route.getTotalLength();
    const crossed = nodes.map(() => -1);
    nodes.forEach((node) => node.classList.remove("difference-node-active"));
    flow.setAttribute("d", "");
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: .2 });
    observer.observe(root);
    let frame = 0;
    let previous = 0;
    let elapsed = 0;
    const tick = (now: number) => {
      const delta = previous ? Math.min(now - previous, 50) : 0;
      previous = now;
      if (visible && !document.hidden && !motion.matches && svg.getClientRects().length && root.classList.contains("revealed")) {
        elapsed += delta;
        const travel = elapsed / 9000;
        const lap = Math.floor(travel);
        flow.style.stroke = lap % 2 === 0 ? "var(--fire)" : "#b69bff";
        const head = travel - lap;
        const tail = Math.max(0, head - .08);
        // Draw the actual segment. Its last point is also the collision point,
        // so stroke-dash scaling cannot put the trigger ahead of the visible line.
        const points = Array.from({ length: 49 }, (_, index) => route.getPointAtLength(length * (tail + (head - tail) * index / 48)));
        flow.setAttribute("d", points.map((point, index) => `${index ? "L" : "M"}${point.x},${point.y}`).join(" "));
        const tip = points[points.length - 1];
        const bounds = svg.getBoundingClientRect();
        const view = svg.viewBox.baseVal;
        // Use rendered bounds to include the site's CSS zoom and responsive stretch.
        const tipX = bounds.left + (tip.x - view.x) * bounds.width / view.width;
        const tipY = bounds.top + (tip.y - view.y) * bounds.height / view.height;
        nodes.forEach((node, index) => {
          if (crossed[index] === lap) return;
          const rect = node.getBoundingClientRect();
          const radius = Math.min(rect.width, rect.height) / 2;
          const distance = Math.hypot(tipX - rect.left - rect.width / 2, tipY - rect.top - rect.height / 2);
          if (distance <= radius) {
            node.classList.toggle("difference-node-active");
            crossed[index] = lap;
          }
        });
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [page]);
}
