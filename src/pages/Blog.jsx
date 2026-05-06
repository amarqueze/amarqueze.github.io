import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Complete Guide to Getting Started with LangChain",
    excerpt:
      "Architecture, RAG, agents, real applications and how LangChain connects LLMs with production software systems.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/langchain-guide",
    accent: true
  }
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