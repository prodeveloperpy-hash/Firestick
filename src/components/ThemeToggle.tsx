import { useSettings } from "../settings";
import { Icon } from "./ui";

/** Sliding sun/moon switch. Dark = thumb at the moon end, Light = thumb at the sun end. */
export function ThemeToggle() {
  const { theme, setTheme, t } = useSettings();
  const isLight = theme === "light";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={`${t("Appearance")}: ${t(isLight ? "Light" : "Dark")}`}
      title={t(isLight ? "Dark" : "Light")}
      className={`theme-switch-pro ${isLight ? "is-light" : ""}`}
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      <span className="ts-icon ts-moon">
        <Icon name="moon" size={14} />
      </span>
      <span className="ts-icon ts-sun">
        <Icon name="sun" size={14} />
      </span>
      <span className="ts-thumb" aria-hidden="true">
        <Icon name={isLight ? "sun" : "moon"} size={14} />
      </span>
    </button>
  );
}
