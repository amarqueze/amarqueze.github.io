import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Multi-Tenant Authentication Scaffold",
    description:
      "A reusable backend scaffold for multi-tenant enterprise applications, with support for Google, Microsoft and local account authentication.",
    image:
      "https://images.unsplash.com/photo-1659782229445-19a69f10f6d8?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio/multitenant-auth-scaffold",
    status: "MVP",
  },
  {
    title: "MCP Server for Inventory Management Integration",
    description:
      "An MCP server that connects inventory management systems with custom ChatGPT assistants, enabling AI-driven inventory queries and operational workflows through natural language.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio/inventory-mcp-server",
    status: "POC",
  },
  {
    title: "Chatbot Assistant for Insurance Operations",
    description:
      "An AI-powered chatbot assistant for insurance workflows, designed to support automated form completion, contextual conversations and enterprise data retrieval.",
    image:
      "https://images.unsplash.com/photo-1662974770404-468fd9660389?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio/insurance-chatbot-assistant",
    status: "POC",
  },
];

const Portfolio = () => {
  return (
    <section className="page-section portfolio-page">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <p className="portfolio-description">
          A curated view of concepts, experiments, and product-focused work in progress.
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