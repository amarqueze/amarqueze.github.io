import React, { useEffect, useMemo, useState } from "react";

const posts = [
  {
    title: "Clever ways to invest in product to organize your portfolio",
    excerpt:
      "Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your long-term growth.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    href: "#",
    accent: false,
  },
  {
    title: "How to grow your profit through systematic investment with us",
    excerpt:
      "Unlock the power of systematic investment with a disciplined approach and build a clearer path toward your financial goals over time.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    href: "#",
    accent: false,
  },
  {
    title: "Why thoughtful systems design still matters in modern teams",
    excerpt:
      "A practical view on architecture decisions, tradeoffs, and how to keep software systems maintainable as complexity grows.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    href: "#",
    accent: false,
  },
  {
    title: "Learning AI in public without losing focus on engineering",
    excerpt:
      "How to explore modern AI tools while still building strong fundamentals in backend, product thinking, and system design.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    href: "#",
    accent: false,
  },
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
                  <a href={post.href}>{post.title}</a>
                </h3>

                <p className="latest-writing-card-excerpt">{post.excerpt}</p>

                <a href={post.href} className="latest-writing-card-link">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWriting;