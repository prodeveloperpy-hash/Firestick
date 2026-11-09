import { Icon } from "./ui";

const logos: Record<string, string> = {
  sky: "/logos/sky.svg",
  tnt: "/logos/tntsports.svg",
  ufc: "/logos/ufc.svg",
  netflix: "/logos/netflix.svg",
  hbo: "/logos/hbo.svg",
  disney: "/logos/disneyplus.svg",
  prime: "/logos/amazonprime.svg",
};

export function ServiceBrandTile({ icon, label, brand, photo }: { icon: string; label: string; brand: string; photo?: string }) {
  const logo = logos[brand];
  return (
    <div className={`service-brand-tile service-brand-${brand}${photo ? " has-photo" : ""}`}>
      {photo ? <img className="service-person" src={photo} alt={label} width="480" height="640" loading="lazy" /> : null}
      {logo && !photo ? <img className="service-channel-logo" src={logo} alt={label} width="180" height="80" loading="lazy" /> : photo ? <strong>{label}</strong> : <><Icon name={icon} size={26} /><strong>{label}</strong></>}
    </div>
  );
}
