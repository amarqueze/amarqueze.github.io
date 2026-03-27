import React from "react";
import ArticleLayout from "../../components/ArticleLayout.jsx";

const SystemDesignPost = () => {
  return (
    <ArticleLayout
      tag="Systems"
      title="Why system design still matters in modern teams"
      subtitle="A practical perspective on scalability, tradeoffs and long-term maintainability."
      date="March 2026"
      readingTime="5 min read"
      image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
    >
      <p>
        System design is not only about scale. It is also about clarity,
        maintainability and making better technical decisions over time.
      </p>

      <h2>Start with the problem</h2>
      <p>
        Before choosing tools or patterns, it is important to understand the
        real problem. Good design starts with context, constraints and expected
        growth.
      </p>

      <h2>Tradeoffs matter</h2>
      <p>
        Every architecture choice comes with tradeoffs. Simplicity, delivery
        speed and operational cost are often more important than theoretical
        perfection.
      </p>

      <h2>Design for change</h2>
      <p>
        Systems evolve. A good design is one that can adapt without becoming too
        fragile or too expensive to maintain.
      </p>
    </ArticleLayout>
  );
};

export default SystemDesignPost;