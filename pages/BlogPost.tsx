import { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { sanityClient, urlFor } from "../lib/sanity";
import type { Post } from "../lib/sanity";
import { SEO } from "../components/SEO";

// Query to fetch a single post by slug
const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  body,
  "author": author->{
    _id,
    name,
    slug,
    image,
    bio,
    role
  },
  "categories": categories[]->{
    _id,
    title,
    slug,
    color
  }
}`;

// Helper to generate slug from text
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

// Extract text from block children
const getBlockText = (block: any): string => {
  return block.children?.map((child: any) => child.text).join("") || "";
};

// TOC Item interface
interface TocItem {
  id: string;
  text: string;
  level: number;
}

// Table of Contents Component
const TableOfContents = ({
  items,
  activeId,
}: {
  items: TocItem[];
  activeId: string;
}) => {
  if (items.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-white/5 rounded-xl p-6 mb-8 sticky top-24">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h12"
          />
        </svg>
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block py-1 text-sm transition-colors border-l-2 pl-3 ${
                activeId === item.id
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-white/30"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Portable Text renderer with heading IDs
const PortableTextRenderer = ({ blocks }: { blocks: any[] }) => {
  if (!blocks) return null;

  return (
    <div className="prose prose-invert prose-lg max-w-none">
      {blocks.map((block, index) => {
        if (block._type === "block") {
          const style = block.style || "normal";
          const text = getBlockText(block);
          const id = slugify(text);

          const children = block.children?.map((child: any, i: number) => {
            let content: React.ReactNode = child.text;
            if (child.marks?.includes("strong")) {
              content = <strong key={i}>{content}</strong>;
            }
            if (child.marks?.includes("em")) {
              content = <em key={i}>{content}</em>;
            }
            if (child.marks?.includes("code")) {
              content = (
                <code key={i} className="bg-white/10 px-1 rounded">
                  {content}
                </code>
              );
            }
            return <span key={i}>{content}</span>;
          });

          switch (style) {
            case "h1":
              return (
                <h1
                  key={index}
                  id={id}
                  className="text-4xl font-black mt-8 mb-4 scroll-mt-28"
                >
                  {children}
                </h1>
              );
            case "h2":
              return (
                <h2
                  key={index}
                  id={id}
                  className="text-3xl font-bold mt-8 mb-4 scroll-mt-28"
                >
                  {children}
                </h2>
              );
            case "h3":
              return (
                <h3
                  key={index}
                  id={id}
                  className="text-2xl font-bold mt-6 mb-3 scroll-mt-28"
                >
                  {children}
                </h3>
              );
            case "h4":
              return (
                <h4
                  key={index}
                  id={id}
                  className="text-xl font-bold mt-4 mb-2 scroll-mt-28"
                >
                  {children}
                </h4>
              );
            case "blockquote":
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground"
                >
                  {children}
                </blockquote>
              );
            default:
              return (
                <p key={index} className="mb-4 leading-relaxed">
                  {children}
                </p>
              );
          }
        }

        if (block._type === "image" && block.asset) {
          return (
            <figure key={index} className="my-8">
              <img
                src={urlFor(block)}
                alt={block.alt || ""}
                className="rounded-lg w-full"
              />
              {block.caption && (
                <figcaption className="text-center text-sm text-muted-foreground mt-2">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        return null;
      })}
    </div>
  );
};

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  // Extract TOC items from post body
  const tocItems = useMemo((): TocItem[] => {
    if (!post?.body) return [];

    return post.body
      .filter(
        (block) =>
          block._type === "block" && ["h2", "h3", "h4"].includes(block.style)
      )
      .map((block) => {
        const text = getBlockText(block);
        return {
          id: slugify(text),
          text,
          level: parseInt(block.style.replace("h", ""), 10),
        };
      });
  }, [post?.body]);

  // Track active heading on scroll
  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const data = await sanityClient.fetch<Post>(postBySlugQuery, { slug });
        if (data) {
          setPost(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Insight Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The insight you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pb-16">
      <SEO
        title={post.title}
        description={
          post.excerpt ||
          `Read "${post.title}" from Energy Data Technology.`
        }
        keywords={`${
          post.categories?.map((c) => c.title).join(", ") || ""
        }, utility intelligence, power theft detection, revenue protection, ${
          post.author?.name || ""
        }`}
        image={post.mainImage ? urlFor(post.mainImage) : undefined}
      />
      {/* Hero Section */}
      <header className="container mx-auto max-w-4xl px-4 pt-8">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          Back to Insights
        </Link>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mb-4">
            {post.categories.map((cat) => (
              <span
                key={cat._id}
                className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
        )}

        {/* Author & Date */}
        <div className="flex items-center gap-4 mb-8">
          {post.author?.image && (
            <img
              src={urlFor(post.author.image)}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            {post.author?.name && (
              <p className="font-semibold">{post.author.name}</p>
            )}
            {post.author?.role && (
              <p className="text-sm text-muted-foreground">
                {post.author.role}
              </p>
            )}
          </div>
          {post.publishedAt && (
            <span className="text-muted-foreground ml-auto">
              {formatDate(post.publishedAt)}
            </span>
          )}
        </div>

        {/* Main Image */}
        {post.mainImage && (
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={urlFor(post.mainImage)}
              alt={post.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        )}
      </header>

      {/* Content with TOC sidebar */}
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* TOC Sidebar - Desktop */}
          {tocItems.length > 0 && (
            <aside className="hidden lg:block lg:w-72 shrink-0">
              <TableOfContents items={tocItems} activeId={activeId} />
            </aside>
          )}

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            {/* TOC - Mobile (collapsible) */}
            {tocItems.length > 0 && (
              <details className="lg:hidden bg-white/5 rounded-xl p-4 mb-8 group">
                <summary className="flex items-center gap-2 cursor-pointer font-bold">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h12"
                    />
                  </svg>
                  Table of Contents
                  <svg
                    className="w-4 h-4 ml-auto transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <ul className="mt-4 space-y-2">
                  {tocItems.map((item) => (
                    <li
                      key={item.id}
                      style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(item.id);
                          if (element) {
                            const offset = 100;
                            const elementPosition =
                              element.getBoundingClientRect().top;
                            const offsetPosition =
                              elementPosition + window.pageYOffset - offset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth",
                            });
                          }
                        }}
                        className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}

            {/* Article Body */}
            {post.body && <PortableTextRenderer blocks={post.body} />}
          </div>
        </div>
      </div>

      {/* Author Bio */}
      {post.author?.bio && (
        <section className="container mx-auto max-w-3xl px-4 mt-12">
          <div className="bg-white/5 rounded-xl p-6">
            <div className="flex items-start gap-4">
              {post.author.image && (
                <img
                  src={urlFor(post.author.image)}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                  Written by
                </p>
                <p className="font-bold text-lg">{post.author.name}</p>
                {post.author.role && (
                  <p className="text-primary text-sm mb-2">
                    {post.author.role}
                  </p>
                )}
                <p className="text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog CTA */}
      <section className="container mx-auto max-w-3xl px-4 mt-12 text-center">
        <Link
          to="/blog"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to All Insights
        </Link>
      </section>
    </article>
  );
};
