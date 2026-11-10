import { useEffect, useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent } from "react";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("popstate", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
}

export function usePath() {
  return useSyncExternalStore(subscribe, () => window.location.pathname);
}

function scrollToHash(hash: string) {
  const el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  if (el) el.scrollIntoView();
  else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
}

export function navigate(href: string, options?: { replace?: boolean }) {
  const url = new URL(href, window.location.href);
  const next = url.pathname + url.search + url.hash;
  const current = window.location.pathname + window.location.search + window.location.hash;
  if (next !== current) {
    if (options?.replace) window.history.replaceState(null, "", next);
    else window.history.pushState(null, "", next);
    listeners.forEach((l) => l());
  }
  if (url.pathname === window.location.pathname && url.hash) {
    scrollToHash(url.hash);
  } else {
    // Wait for the new page to render before scrolling.
    setTimeout(() => scrollToHash(url.hash), 0);
  }
}

export function Link({
  href,
  onClick,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    navigate(href);
  }
  return <a href={href} onClick={handleClick} {...rest} />;
}

/** Sets the document title and meta description for the current page. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const named = (name: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      return tag;
    };
    const property = (name: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", name);
        document.head.appendChild(tag);
      }
      return tag;
    };
    named("description").content = description;
    property("og:title").content = title;
    property("og:description").content = description;

    const href = `https://tvpackages.uk${window.location.pathname}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = href;

    property("og:url").content = href;
  }, [title, description]);
}

/** Scrolls to the URL hash on first render (e.g. arriving at /#packages from another page). */
export function useInitialHashScroll() {
  useEffect(() => {
    if (window.location.hash) scrollToHash(window.location.hash);
  }, []);
}
