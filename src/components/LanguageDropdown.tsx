import { useEffect, useRef, useState } from "react";
import { useSettings } from "../settings";
import { LANGUAGES } from "../translations";
import { Icon } from "./ui";

export function LanguageDropdown() {
  const { lang, setLang, t } = useSettings();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={`lang-dropdown ${open ? "open" : ""}`} ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t("Language")}: ${current.label}`}
        onClick={() => setOpen(!open)}
      >
        <Icon name="globe" size={16} />
        <span className="lang-code">{lang.toUpperCase()}</span>
        <i className="lang-chevron">
          <Icon name="chevron" size={14} />
        </i>
      </button>
      {open && (
        <div className="lang-menu">
          <div className="lang-menu-head">{t("Language")}</div>
          <ul role="listbox" aria-label={t("Language")}>
            {LANGUAGES.map((l, i) => (
              <li key={l.code} role="option" aria-selected={l.code === lang} style={{ ["--i" as string]: i }}>
                <button
                  type="button"
                  lang={l.code}
                  className={l.code === lang ? "active" : undefined}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                >
                  <b>{l.code.toUpperCase()}</b>
                  <span>
                    <strong>{l.native}</strong>
                    <small>{l.label}</small>
                  </span>
                  <em>
                    <Icon name="check" size={14} />
                  </em>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
