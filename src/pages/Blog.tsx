import { useEffect, type ReactNode } from "react";
import { CtaSection, PageHero } from "../components/PageParts";
import { Icon } from "../components/ui";
import { blogCategories, categorySlug, formatDate, posts, type Post, type PostBlock } from "../data/posts";
import { Link, usePageMeta } from "../router";
import { NotFoundPage } from "./NotFound";

function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <Link href={`/blog/${post.slug}`} className="post-card-link">
        <div className="post-cover">
          <img src={post.image} alt={post.imageAlt} loading="lazy" />
        </div>
        <div className="post-meta">
          <span className="post-tag">{post.category}</span>
          <span>
            <Icon name="clock" size={13} /> {post.readTime}
          </span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="post-foot">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="read-more">
            Read article <Icon name="arrow" size={16} />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function BlogPage({ categorySlug: activeSlug }: { categorySlug?: string } = {}) {
  const category = blogCategories.find((c) => c.slug === activeSlug);
  usePageMeta(
    category ? `${category.label} Articles | TV Packages Blog` : "Blog | TV Packages",
    category?.blurb ?? "Setup guides, streaming tips and device advice to help you get the most from your IPTV entertainment.",
  );
  if (activeSlug && !category) return <NotFoundPage />;
  const list = category ? posts.filter((p) => categorySlug(p.category) === category.slug) : posts;

  return (
    <main>
      <PageHero
        eyebrow="Tv Packages blog"
        title={
          category ? (
            <>
              {category.label} <em>articles.</em>
            </>
          ) : (
            <>
              Guides, tips & <em>streaming advice.</em>
            </>
          )
        }
        lead={category?.blurb ?? "Helpful articles to get you set up quickly and enjoy smoother viewing on every screen."}
      />
      <section className="section blog-section">
        <div className="container">
          <nav className="blog-filter" aria-label="Blog categories">
            <Link href="/blog" className={!category ? "active" : undefined}>
              All
            </Link>
            {blogCategories.map((c) => (
              <Link key={c.slug} href={`/blog/category/${c.slug}`} className={c.slug === category?.slug ? "active" : undefined}>
                {c.label}
              </Link>
            ))}
          </nav>
          <div className="post-grid">
            {list.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </main>
  );
}

/** Renders inline [label](href) links and **bold** inside article text. */
function Rich({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[3] !== undefined) parts.push(<strong key={m.index}>{m[3]}</strong>);
    else if (m[2].startsWith("/")) parts.push(<Link key={m.index} href={m[2]}>{m[1]}</Link>);
    else parts.push(<a key={m.index} href={m[2]} target="_blank" rel="noreferrer">{m[1]}</a>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "p":
      return (
        <p>
          <Rich text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>
              <Rich text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>
              <Rich text={item} />
            </li>
          ))}
        </ol>
      );
    case "checklist":
      return (
        <ul className="post-checklist">
          {block.items.map((item) => (
            <li key={item}>
              <span className="check-box" aria-hidden="true">
                <Icon name="check" size={13} />
              </span>
              <span>
                <Rich text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className={`post-callout ${block.variant}`}>
          <strong className="callout-title">{block.title}</strong>
          {block.text && (
            <p>
              <Rich text={block.text} />
            </p>
          )}
          {block.items && (
            <ul>
              {block.items.map((item) => (
                <li key={item}>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          )}
        </aside>
      );
    case "table":
      return (
        <div className="post-table-wrap">
          <table className="post-table">
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row">
                        {cell}
                      </th>
                    ) : (
                      <td key={c}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "faq":
      return (
        <div className="post-faq">
          {block.items.map(([q, a]) => (
            <div className="post-faq-item" key={q}>
              <h3>{q}</h3>
              <p>
                <Rich text={a} />
              </p>
            </div>
          ))}
        </div>
      );
    case "cta":
      return (
        <div className="post-cta">
          <p>{block.text}</p>
          <div className="post-cta-buttons">
            {block.buttons.map((b) => (
              <Link key={b.label} href={b.href} className={`post-cta-btn${b.secondary ? " secondary" : ""}`}>
                {b.label} <Icon name="arrow" size={16} />
              </Link>
            ))}
          </div>
        </div>
      );
  }
}

const SITE = "https://tvpackages.uk";
const abs = (src: string) => (src.startsWith("http") ? src : SITE + src);

/** Article JSON-LD (BlogPosting, FAQPage, BreadcrumbList) added to <head> and removed on leave. */
function usePostSchema(post: Post | undefined) {
  useEffect(() => {
    if (!post?.faqs) return;
    const url = `${SITE}/blog/${post.slug}`;
    const image = abs(post.image);
    const graphs: object[] = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url,
        image: [image],
        thumbnailUrl: image,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "en-GB",
        author: { "@type": "Organization", name: "TVPackages.uk", url: SITE + "/" },
        publisher: {
          "@type": "Organization",
          name: "TVPackages.uk",
          url: SITE + "/",
          logo: { "@type": "ImageObject", url: SITE + "/logo-mark.svg" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        keywords: post.keywords,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: SITE + "/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: url, image },
        ],
      },
    ];
    const tags = graphs.map((g) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.text = JSON.stringify(g);
      document.head.appendChild(el);
      return el;
    });
    return () => tags.forEach((el) => el.remove());
  }, [post]);
}

export function BlogPostPage({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug);
  usePageMeta(
    post ? (post.seoTitle ?? `${post.title} | TV Packages Blog`) : "Article not found | TV Packages",
    post?.excerpt ?? "",
    post?.ogTitle ? { title: post.ogTitle, description: post.ogDescription ?? post.excerpt } : undefined,
  );
  usePostSchema(post);
  if (!post) return <NotFoundPage />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <PageHero
        eyebrow={
          <Link href="/blog" className="back-link">
            <Icon name="back" size={14} /> Back to blog
          </Link>
        }
        title={post.title}
      >
        <div className="post-meta hero-meta">
          <span className="post-tag">{post.category}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>
            <Icon name="clock" size={13} /> {post.readTime}
          </span>
        </div>
      </PageHero>
      <section className="section article-section">
        <div className="container">
          <article className="prose">
            <figure className="article-cover">
              <img src={post.image} alt={post.imageAlt} />
            </figure>
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section related-section">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow">Keep reading</div>
              <h2>
                More from the <em>blog.</em>
              </h2>
            </div>
            <div className="post-grid two">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaSection />
    </main>
  );
}
