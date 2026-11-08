import { CtaSection, PageHero } from "../components/PageParts";
import { Icon } from "../components/ui";
import { formatDate, posts, type Post, type PostBlock } from "../data/posts";
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

export function BlogPage() {
  usePageMeta(
    "Blog | Tv Packages",
    "Setup guides, streaming tips and device advice to help you get the most from your IPTV entertainment.",
  );

  return (
    <main>
      <PageHero
        eyebrow="Tv Packages blog"
        title={
          <>
            Guides, tips & <em>streaming advice.</em>
          </>
        }
        lead="Helpful articles to get you set up quickly and enjoy smoother viewing on every screen."
      />
      <section className="section blog-section">
        <div className="container">
          <div className="post-grid">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </main>
  );
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
  }
}

export function BlogPostPage({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug);
  usePageMeta(
    post ? `${post.title} | Tv Packages Blog` : "Article not found | Tv Packages",
    post?.excerpt ?? "",
  );
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
