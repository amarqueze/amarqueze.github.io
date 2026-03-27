import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Internal dashboard for product operations",
    description:
      "A lightweight MVP to centralize operational workflows, reporting and internal visibility for cross-functional teams.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio/internal-dashboard",
    status: "MVP",
  },
  {
    title: "AI research assistant for backend teams",
    description:
      "A proof of concept focused on accelerating investigation workflows, documenting findings and validating technical ideas faster.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    href: "#",
    status: "POC",
  },
  {
    title: "View my projects on GitHub",
    description:
      "Explore more projects, experiments and ideas I’ve been building across backend, frontend and AI.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    href: "https://github.com/amarqueze",
    status: "Investigation",
  },
];

const Portfolio = () => {
  return (
    <section className="page-section portfolio-page">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <p className="portfolio-description">
          A selection of product ideas, experiments and technical work.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <article className="selected-work-card" key={index}>
            <div className="selected-work-card-content">
              <span
                className={`project-status-tag status-${project.status.toLowerCase()}`}
              >
                {project.status}
              </span>

              <h3 className="selected-work-card-title">{project.title}</h3>

              <p className="selected-work-card-text">{project.description}</p>

              <Link
                to={project.href}
                className="selected-work-card-link"
              >
                Read More
                <span
                  className="selected-work-card-link-icon"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="selected-work-card-media">
              <img
                src={project.image}
                alt={project.title}
                className="selected-work-card-image"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;