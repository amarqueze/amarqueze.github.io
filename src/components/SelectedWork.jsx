import React from "react";

const projects = [
  {
    title: "Internal dashboard for product operations",
    description:
      "A lightweight MVP to centralize operational workflows, reporting, and internal visibility for cross-functional teams.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    href: "#",
    status: "MVP",
  },
  {
    title: "AI research assistant for backend teams",
    description:
      "A proof of concept focused on accelerating investigation workflows, documenting findings, and validating technical ideas faster.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    href: "#",
    status: "POC",
  },
];

const SelectedWork = () => {
  return (
    <section className="selected-work">
      <div className="selected-work-header">
        <h2 className="selected-work-title">Portfolio</h2>
        <p className="selected-work-description">
          A curated view of concepts, experiments, and product-focused work in
          progress.
        </p>
      </div>

      <div className="selected-work-list">
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

              <a href={project.href} className="selected-work-card-link">
                Read More
                <span className="selected-work-card-link-icon" aria-hidden="true">
                  →
                </span>
              </a>
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