import React, { useEffect, useMemo, useState } from "react";
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
    updated: "May 22 2025",
    accent: true
  }
];

const getVisibleCards = () => {
  if (typeof window === "undefined") return 2;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1200) return 2;
  return 2;
};

const LatestWriting = () => {
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = useMemo(() => {
    return Math.max(posts.length - visibleCards, 0);
  }, [visibleCards]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === maxIndex;

  return (
    <section className="latest-writing">
      <div className="latest-writing-grid">
        <div className="latest-writing-intro">
          <h2 className="latest-writing-title">
            Latest <span className="latest-writing-title-accent">blogs</span>
          </h2>

          <p className="latest-writing-description">
            Welcome to my blog section, where knowledge meets inspiration.
            Explore insightful articles, expert tips, and the latest trends in
            my field.
          </p>

          <div className="latest-writing-actions">
            <a href="#/blog" className="latest-writing-button">
              View Blog
            </a>

            <div className="latest-writing-arrows">
              <button
                type="button"
                className={`latest-writing-arrow${
                  isPrevDisabled ? " is-disabled" : ""
                }`}
                onClick={handlePrev}
                disabled={isPrevDisabled}
                aria-label="Previous articles"
              >
                ←
              </button>

              <button
                type="button"
                className={`latest-writing-arrow${
                  !isNextDisabled ? " is-active" : " is-disabled"
                }`}
                onClick={handleNext}
                disabled={isNextDisabled}
                aria-label="Next articles"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="latest-writing-slider">
          <div
            className="latest-writing-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {posts.map((post, index) => (
              <article className="latest-writing-card" key={index}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="latest-writing-card-image"
                />

                <h3
                  className={`latest-writing-card-title${
                    post.accent ? " is-accent" : ""
                  }`}
                >
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
        </div>
      </div>
    </section>
  );
};

export default LatestWriting;
