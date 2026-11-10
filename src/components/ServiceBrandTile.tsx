import { Icon } from "./ui";

const logos: Record<string, string> = {
  sky: "/logos/sky.svg",
  tnt: "/logos/tntsports.svg",
  ufc: "/logos/ufc.svg",
  netflix: "/logos/netflix.svg",
  hbo: "/logos/hbo.svg",
  disney: "/logos/disneyplus.svg",
  prime: "/logos/amazonprime.svg",
  channel4: "/logos/channel4.svg",
  itvx: "/logos/itvx.svg",
  now: "/logos/now.svg",
  cnn: "/logos/cnn.svg",
  fox: "/logos/fox.svg",
  dazn: "/logos/dazn.svg",
  paramount: "/logos/paramountplus.svg",
  appletv: "/logos/appletv.svg",
  premierleague: "/logos/premierleague.svg",
  wwe: "/logos/wwe.svg",
  animalplanet: "/logos/animalplanet.svg",
  crunchyroll: "/logos/crunchyroll.svg",
  mubi: "/logos/mubi.svg",
  showtime: "/logos/showtime.svg",
  starz: "/logos/starz.svg",
  max: "/logos/max.svg",
  warner: "/logos/warnerbros.svg",
  tubi: "/logos/tubi.svg",
  nba: "/logos/nba.svg",
  bilibili: "/logos/bilibili.svg",
  rakuten: "/logos/rakuten.svg",
  jio: "/logos/jio.svg",
  fubo: "/logos/fubo.svg",
  youtubetv: "/logos/youtubetv.svg",
};

export function ServiceBrandTile({ icon, label, brand, photo, caption, poster }: { icon: string; label: string; brand: string; photo?: string; caption?: boolean; poster?: boolean }) {
  const logo = logos[brand];
  return (
    <div className={`service-brand-tile service-brand-${brand}${photo ? " has-photo" : ""}${poster ? " is-poster" : ""}`}>
      {photo ? <img className="service-person" src={photo} alt={label} width="480" height="640" loading="lazy" /> : null}
      {logo && !photo ? <img className="service-channel-logo" src={logo} alt="" width="180" height="80" loading="lazy" /> : photo ? <strong>{label}</strong> : <><Icon name={icon} size={26} /><strong>{label}</strong></>}
      {caption && logo && !photo ? <strong className="channel-caption">{label}</strong> : null}
    </div>
  );
}
