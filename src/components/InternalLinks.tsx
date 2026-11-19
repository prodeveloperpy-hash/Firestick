import { Link } from "../router";
import { useSettings } from "../settings";
import { Icon } from "./ui";

/** Small pill-style link used at the end of USP items and FAQ answers. */
export function LinkChip({ href, children, className = "" }: { href: string; children: string; className?: string }) {
  const { t } = useSettings();
  return (
    <Link href={href} className={`link-chip ${className}`}>
      {t(children)}<Icon name="arrow" size={14} />
    </Link>
  );
}
