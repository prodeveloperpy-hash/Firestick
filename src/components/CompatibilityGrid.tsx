import { useSettings } from "../settings";
import { Icon } from "./ui";
import { LogoRail } from "./ChannelStrip";

const platforms = [
  { name: "Fire TV Stick", label: "fire tv stick", icon: "tv", color: "#df6500" },
  { name: "Samsung Smart TV", label: "SAMSUNG", detail: "SMART TV", icon: "tv", color: "#1428a0" },
  { name: "IPTV Smarters", label: "IPTV", detail: "SMARTERS", icon: "play", color: "#6941ad" },
  { name: "Web Player", label: "WEB PLAYER", icon: "play", color: "#7928b9" },
  { name: "Xbox", label: "XBOX", icon: "xbox", color: "#107c10" },
  { name: "NVIDIA Shield", label: "NVIDIA", detail: "SHIELD", icon: "box", color: "#5a8c00" },
  { name: "Android", label: "android", icon: "android", color: "#397d32" },
  { name: "LG Smart TV", label: "LG", detail: "SMART TV", icon: "tv", color: "#a50034" },
  { name: "Android TV", label: "android tv", icon: "android", color: "#397d32" },
  { name: "iPhone and iPad", label: "iOS", detail: "iPhone · iPad", icon: "tablet", color: "#202124" },
  { name: "Windows", label: "Windows", icon: "windows", color: "#0078d4" },
  { name: "Infomir MAG Box", label: "infomir", detail: "MAG BOX", icon: "box", color: "#bd234b" },
];

function PlatformIcon({ name }: { name: string }) {
  if (name === "windows") return <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true"><path d="m3 8 19-3v18H3Zm22-3L45 2v21H25ZM3 26h19v18L3 41Zm22 0h20v21l-20-3Z" /></svg>;
  if (name === "android") return <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true"><path d="m13 9-4-6m26 6 4-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M8 21a16 16 0 0 1 32 0Z" /><rect x="8" y="24" width="32" height="16" rx="3" /><path d="M15 38v6m18-6v6M3 25v11m42-11v11" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /><circle cx="17" cy="15" r="2" fill="#0b0d14" /><circle cx="31" cy="15" r="2" fill="#0b0d14" /></svg>;
  if (name === "xbox") return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><circle cx="24" cy="24" r="21" /><path d="M9 39Q24 12 37 7M39 39Q24 12 11 7" /></svg>;
  return <Icon name={name} size={46} />;
}

export function CompatibilityGrid() {
  const { t } = useSettings();
  return (
    <section className="section platform-section" aria-labelledby="platform-title">
      <div className="container">
        <div className="section-heading centered">
          <div className="eyebrow">{t("Compatible with all popular devices")}</div>
          <h2 id="platform-title">{t("Everything you need for perfect ")}<em>{t("IPTV entertainment.")}</em></h2>
        </div>
        <LogoRail items={platforms.map((platform) => (
            <div className="platform-tile" key={platform.name} style={{ color: platform.color }} aria-label={platform.name}>
              <div className="platform-symbol"><PlatformIcon name={platform.icon} /></div>
              <strong>{platform.label}</strong>
              {platform.detail && <span>{platform.detail}</span>}
            </div>
          ))} />
      </div>
    </section>
  );
}
