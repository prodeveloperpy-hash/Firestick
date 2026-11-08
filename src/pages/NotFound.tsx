import { PageHero } from "../components/PageParts";
import { Icon } from "../components/ui";
import { Link, usePageMeta } from "../router";

export function NotFoundPage() {
  usePageMeta("Page not found | Firestick", "The page you’re looking for doesn’t exist.");
  return (
    <main>
      <PageHero
        eyebrow="404"
        title={
          <>
            Page not <em>found.</em>
          </>
        }
        lead="The page you’re looking for doesn’t exist or has moved."
      >
        <div className="hero-actions">
          <Link className="secondary-button" href="/">
            Back to home <Icon name="arrow" size={18} />
          </Link>
        </div>
      </PageHero>
    </main>
  );
}
