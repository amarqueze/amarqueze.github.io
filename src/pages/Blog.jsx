import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Complete Guide to Getting Started with LangChain",
    excerpt:
      "Architecture, RAG, agents, real applications and how LangChain connects LLMs with production software systems.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/langchain-guide",
    updated: "January 15 2026",
    accent: true
  },
  {
    title: "Understanding Java Versions: A Practical Guide for Developers",
    excerpt:
      "A practical guide to Java versions, important features, code examples, and interview topics from Java 7 to Java 25.",
    image: "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/java-versions-guide",
    updated: "November 25 2025",
    accent: true
  },
  {
    title: "Event-Driven Architecture with Spring Boot",
    excerpt:
      "Exploring domain events, Spring application events, Kafka integration, and event-driven patterns in modern Java applications.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/event-driven-architecture-spring-boot",
    updated: "August 7 2025",
    accent: true
  },
  {
    title: "How to Structure a Spring Boot Project Using DDD",
    excerpt:
      "A practical guide to Domain-Driven Design concepts, Spring Boot layers, and a multi-module project structure for real backend systems.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/spring-boot-ddd-structure",
    updated: "May 22 2026",
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

            {post.updated && (
              <p className="latest-writing-card-updated">
                Updated {post.updated}
              </p>
            )}

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
