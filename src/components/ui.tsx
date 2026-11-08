import type { ReactNode } from "react";
import { useSettings } from "../settings";

export const WHATSAPP_URL =
  "https://wa.me/447000000000?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20IPTV%20services.";

export const Icon = ({ name, size = 22 }: { name: string; size?: number }) => {
  const paths: Record<string, ReactNode> = {
    play: (
      <>
        <path d="m9 7 8 5-8 5Z" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    check: <path d="m5 12 4 4L19 7" />,
    tv: (
      <>
        <rect x="3" y="5" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </>
    ),
    trophy: (
      <>
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0Z" />
        <path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4" />
      </>
    ),
    film: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4" />
      </>
    ),
    apps: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    devices: (
      <>
        <rect x="2" y="4" width="15" height="11" rx="2" />
        <path d="M6 20h7M9.5 15v5" />
        <rect x="17" y="10" width="5" height="10" rx="1" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 6h10M18 6h2M14 4v4M4 12h2M10 12h10M6 10v4M4 18h8M16 18h4M12 16v4" />
      </>
    ),
    message: (
      <>
        <path d="M21 11.5a8.5 8.5 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.8-4.5A9 9 0 1 1 21 11.5Z" />
        <path d="M8 9.5c1 2.5 2 3.5 4.5 4.5" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    chevron: <path d="m8 10 4 4 4-4" />,
    phone: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    tablet: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    box: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="M8 12h.01M16 12h.01" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    back: <path d="M19 12H5M10 7l-5 5 5 5" />,
    moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

export const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="-1 -1 26 26" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.45-5.02c0-5.2 4.24-9.44 9.45-9.44a9.38 9.38 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.45 9.43m8.04-17.47A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.07c0 2 .52 3.96 1.52 5.68L.58 23.65l6.03-1.58a11.35 11.35 0 0 0 5.43 1.38h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.33-8.05" />
  </svg>
);

export function WhatsAppButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { t } = useSettings();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`whatsapp-button ${className}`}
    >
      <WhatsAppIcon size={19} />
      {typeof children === "string" ? t(children) : children}
      <Icon name="arrow" size={18} />
    </a>
  );
}

export function IPTVLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`iptv-logo ${className}`}>
      <svg viewBox="0 0 120 100" fill="currentColor" role="img" aria-label="IPTV">
        <path d="M24 41V30c0-10 7-16 18-16h55c10 0 16 6 16 16v47c0 10-6 16-16 16H42c-11 0-18-6-18-16" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="m58 15-7-13 15 10L79 0l-3 15Z" />
        <text x="4" y="70" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="900" letterSpacing="-2">IPTV</text>
      </svg>
    </span>
  );
}

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src="/logo-mark.svg" width="54" height="44" alt="" />
    </span>
  );
}
