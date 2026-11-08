import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LANGUAGES, translate, type Lang } from "./translations";

export type Theme = "dark" | "light";

type SettingsValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Translate an English source string into the active language. */
  t: (text: string) => string;
  modalOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
};

const SettingsContext = createContext<SettingsValue | null>(null);

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable (private mode etc.) — setting just won't persist */
  }
}

function initialTheme(): Theme {
  return read("tvp-theme") === "light" ? "light" : "dark";
}

function initialLang(): Lang {
  const stored = read("tvp-lang");
  if (LANGUAGES.some((l) => l.code === stored)) return stored as Lang;
  const nav = typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "en";
  return LANGUAGES.some((l) => l.code === nav) ? (nav as Lang) : "en";
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const meta = LANGUAGES.find((l) => l.code === lang)!;
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
  }, [lang]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    write("tvp-theme", next);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    write("tvp-lang", next);
  }, []);

  const value = useMemo<SettingsValue>(
    () => ({
      theme,
      setTheme,
      lang,
      setLang,
      t: (text: string) => translate(lang, text),
      modalOpen,
      openSettings: () => setModalOpen(true),
      closeSettings: () => setModalOpen(false),
    }),
    [theme, setTheme, lang, setLang, modalOpen],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside <SettingsProvider>");
  return ctx;
}
