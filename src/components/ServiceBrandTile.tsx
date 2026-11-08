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

export function ServiceBrandTile({ icon, label, brand }: { icon: string; label: string; brand: string }) {
  const logo = logos[brand];
  return (
    <div className={`service-brand-tile service-brand-${brand}`}>
      {logo ? <img className="service-channel-logo" src={logo} alt={label} width="180" height="80" loading="lazy" /> : <><Icon name={icon} size={26} /><strong>{label}</strong></>}
    </div>
  );
}
