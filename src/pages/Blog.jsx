import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Clever ways to invest in product to organize your portfolio",
    excerpt:
      "Discover smart investment strategies to streamline and organize your portfolio.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/system-design",
  },
  {
    title: "How to grow your profit through systematic investment",
    excerpt:
      "Unlock the power of systematic investment with a disciplined approach.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    title: "Why system design matters in modern teams",
    excerpt:
      "A practical view on architecture decisions and long-term maintainability.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    title: "Learning AI without losing engineering fundamentals",
    excerpt:
      "How to explore AI while keeping strong backend foundations.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
];

const Blog = () => {
  return (
    <section className="page-section blog-page">
      <div className="blog-header">
        <h2>Blog</h2>
        <p className="blog-description">
          Thoughts on systems, engineering and continuous learning.
        </p>
      </div>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <article className="latest-writing-card" key={index}>
            <img
              src={post.image}
              alt={post.title}
              className="latest-writing-card-image"
            />

            <h3 className="latest-writing-card-title">
              <Link to={post.href}>{post.title}</Link>
            </h3>

            <p className="latest-writing-card-excerpt">{post.excerpt}</p>

            <Link to={post.href} className="latest-writing-card-link">
              Read more <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;