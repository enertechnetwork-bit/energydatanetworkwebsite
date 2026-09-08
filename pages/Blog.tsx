import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO, pageSEO } from "../components/SEO";
import {
  sanityClient,
  urlFor,
  postsQuery,
  featuredPostQuery,
  categoriesQuery,
} from "../lib/sanity";
import type { Post, Category } from "../lib/sanity";

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [featuredPost, setFeaturedPost] = useState<Post | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, featuredData, categoriesData] = await Promise.all([
          sanityClient.fetch<Post[]>(postsQuery),
          sanityClient.fetch<Post | null>(featuredPostQuery),
          sanityClient.fetch<Category[]>(categoriesQuery),
        ]);
        setPosts(postsData);
        setFeaturedPost(featuredData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredPosts =
    filter === "All"
      ? posts
      : posts.filter((post) =>
          post.categories?.some((cat) => cat.title === filter)
        );

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 pb-10">
      <SEO {...pageSEO.blog} />
      {/* Featured */}
      {featuredPost && (
        <section className="container mx-auto max-w-7xl px-4 mt-8">
          <div className="rounded-xl bg-white/5 p-4 md:p-6 flex flex-col md:flex-row gap-8">
            <div
              className="w-full md:w-1/2 aspect-video rounded-lg bg-cover bg-center bg-gray-800"
              style={{
                backgroundImage: featuredPost.mainImage
                  ? `url("${urlFor(featuredPost.mainImage)}")`
                  : undefined,
              }}
            />
            <div className="flex flex-col justify-center gap-4">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                Featured Insight
              </p>
              <h1 className="text-3xl font-black leading-tight">
                {featuredPost.title}
              </h1>
              <p className="text-muted-foreground">{featuredPost.excerpt}</p>
              <Link
                to={`/blog/${featuredPost.slug?.current}`}
                className="inline-flex h-10 w-fit items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Read Insight
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter("All")}
            className={`h-9 px-4 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === "All"
                ? "bg-primary text-background-dark"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setFilter(cat.title)}
              className={`h-9 px-4 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === cat.title
                  ? "bg-primary text-background-dark"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold mb-6">Latest Insights</h2>
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No insights found. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post._id}
                to={`/blog/${post.slug?.current}`}
                className="group rounded-lg bg-white/5 p-4 hover:bg-white/10 transition-all hover:scale-[1.01] cursor-pointer block"
              >
                <div
                  className="w-full aspect-video rounded-md bg-cover bg-center mb-4 bg-gray-800"
                  style={{
                    backgroundImage: post.mainImage
                      ? `url("${urlFor(post.mainImage)}")`
                      : undefined,
                  }}
                />
                <div>
                  {post.categories && post.categories.length > 0 && (
                    <p className="text-primary text-xs font-bold uppercase tracking-wider">
                      {post.categories[0].title}
                    </p>
                  )}
                  <h3 className="font-bold text-lg leading-tight mt-1 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {post.author?.name && `By ${post.author.name}`}
                    {post.publishedAt && ` - ${formatDate(post.publishedAt)}`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
