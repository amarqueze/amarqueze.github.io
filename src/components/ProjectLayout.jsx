import React from "react";
import { Link } from "react-router-dom";

const ProjectLayout = ({
  tag,
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  children,
}) => {
  return (
    <section className="project-page">
      <div className="project-shell">
        {/* Back */}
        <Link to="/portfolio" className="project-back">
          ← Back to Portfolio
        </Link>

        {/* Header */}
        <header className="project-header">
          {tag && <span className="project-tag">{tag}</span>}

          <h1 className="project-title">{title}</h1>

          <p className="project-description">{description}</p>

          <div className="project-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}

            <a
              href="mailto:alanmarquez@outlook.com"
              className="project-contact-button"
            >
              Contact me →
            </a>
          </div>
        </header>

        {/* Hero */}
        {image && (
          <div className="project-hero">
            <img src={image} alt={title} />
          </div>
        )}

        {/* Content */}
        <div className="project-content">{children}</div>

        {/* Optional Live Demo */}
        {liveUrl && (
          <div className="project-live">
            <a href={liveUrl} target="_blank" rel="noreferrer">
              View Live Demo →
            </a>
          </div>
        )}

        {/* Footer Links */}
        <div className="project-footer-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}

          <a
            href="mailto:alanmarquez@outlook.com"
            className="project-contact-button"
          >
            Contact me →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectLayout;