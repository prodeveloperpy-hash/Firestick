import { useEffect, useState } from "react";

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Types each phrase, pauses, deletes it, then moves on to the next.
 * A hidden copy of the longest phrase reserves space so the layout never jumps.
 */
export function Typewriter({
  phrases,
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 1800,
}: {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reducedMotion() ? phrases[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion()) return;
    const full = phrases[index % phrases.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === full) delay = pause;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause]);

  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="typer">
      <span className="typer-ghost" aria-hidden="true">
        <em>{longest}</em>
      </span>
      <span className="typer-live" aria-hidden="true">
        <em>{text}</em>
        <span className="caret" />
      </span>
    </span>
  );
}
