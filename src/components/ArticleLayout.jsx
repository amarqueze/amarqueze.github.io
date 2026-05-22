import React from "react";
import { Link } from "react-router-dom";

const ArticleLayout = ({
  tag,
  title,
  subtitle,
  date,
  updated,
  readingTime,
  image,
  children,
}) => {
  const metaItems = [
    date && `Published ${date}`,
    updated && `Updated ${updated}`,
    readingTime,
  ].filter(Boolean);

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

          {metaItems.length > 0 && (
            <div className="article-meta">
              {metaItems.map((item, index) => (
                <React.Fragment key={`${item}-${index}`}>
                  {index > 0 && <span aria-hidden="true">/</span>}
                  <span>{item}</span>
                </React.Fragment>
              ))}
            </div>
          )}
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
