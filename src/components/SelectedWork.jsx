import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Asienta",
    description:
      "A configurable accounting platform that transforms business operations into automated accounting workflows through an event-driven engine and reusable templates.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio/asienta",
    status: "In-Progress",
  },
  {
    title: "Multi-Tenant Authentication Scaffold",
    description:
      "A reusable backend scaffold for multi-tenant enterprise applications, with support for Google, Microsoft and local account authentication.",
    image:
      "https://images.unsplash.com/photo-1659782229445-19a69f10f6d8?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio/multitenant-auth-scaffold",
    status: "MVP",
    hidden: true,
  },
];

const SelectedWork = () => {
  return (
    <section className="selected-work">
      <div className="selected-work-header">
        <h2 className="selected-work-title">Portfolio</h2>
        <p className="selected-work-description">
          A selection of product ideas, experiments and technical work.
        </p>
      </div>

      <div className="selected-work-list">
        {projects.filter(project => !project.hidden).map((project, index) => (
          <article className="selected-work-card" key={index}>
            <div className="selected-work-card-content">
              <span
                className={`project-status-tag status-${project.status.toLowerCase()}`}
              >
                {project.status}
              </span>

              <h3 className="selected-work-card-title">{project.title}</h3>

              <p className="selected-work-card-text">{project.description}</p>

              <Link to={project.href} className="selected-work-card-link">
                Read More
                <span className="selected-work-card-link-icon" aria-hidden="true">
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

export default SelectedWork;