import React from "react";
import { Link } from "react-router-dom";

const ArticleLayout = ({
  tag,
  title,
  subtitle,
  date,
  readingTime,
  image,
  children,
}) => {
  return (
    <article className="article-page">
      <div className="article-shell">
        <Link to="/blog" className="article-back-link">
          ← Back to Blog
        </Link>

        <header className="article-header">
          {tag && <span className="article-tag">{tag}</span>}

          <h1 className="article-title">{title}</h1>

          {subtitle && <p className="article-subtitle">{subtitle}</p>}

          <div className="article-meta">
            <span>{date}</span>
            <span>·</span>
            <span>{readingTime}</span>
          </div>
        </header>

        {image && (
          <div className="article-hero">
            <img src={image} alt={title} className="article-hero-image" />
          </div>
        )}

        <div className="article-content">{children}</div>
      </div>
    </article>
  );
};

export default ArticleLayout;