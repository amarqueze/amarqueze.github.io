import React from "react";
import { Link } from "react-router-dom";
import pokedexImage from "../assets/pokedex-pokeball.png";
import dexterImage from "../assets/super_Ball.png";

const maxVisibleTechTags = 5;
const workBoardImage =
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80";

const projects = [
  {
    title: "Asienta",
    description:
      "A configurable accounting platform that transforms business operations into automated accounting workflows through an event-driven engine and reusable templates.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio/asienta",
    status: "In-Progress",
    techTags: ["Java", "Spring Boot", "PostgreSQL", "NextJs", "Python"]
  },
  {
    title: "Dexter",
    description:
      "Dexter is a Pokemon search app where users can explore and discover information about all Pokemon.",
    image: dexterImage,
    href: "/portfolio/dexter",
    status: "POC",
    techTags: ["React", "TypeScript", "Axios", "PokeAPI"],
  },
  {
    title: "WorkBoard",
    description:
      "A full-stack task management POC with a Django REST API, React frontend, JWT authentication, task assignment, state changes, and Docker Compose setup.",
    image: workBoardImage,
    href: "/portfolio/workboard",
    status: "POC",
    techTags: ["Django", "DRF", "React", "TypeScript", "Docker"],
  },
  {
    title: "Pokedex",
    description:
      "A client-side Angular SPA for exploring Pokemon data from PokeAPI, with simulated trainer authentication, live search, pagination, and type-based cards.",
    image: pokedexImage,
    href: "/portfolio/pokedex",
    status: "POC",
    techTags: ["Angular 13", "TypeScript", "RxJS", "PokeAPI"],
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
  {
    title: "MCP Server for Inventory Management Integration",
    description:
      "An MCP server that connects inventory management systems with custom ChatGPT assistants, enabling AI-driven inventory queries and operational workflows through natural language.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio/inventory-mcp-server",
    status: "POC",
    hidden: true,
  }
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

              <ul
                className="selected-work-card-tags"
                aria-hidden={!project.techTags?.length}
                aria-label={
                  project.techTags?.length
                    ? `${project.title} technologies`
                    : undefined
                }
              >
                {(project.techTags ?? []).slice(0, maxVisibleTechTags).map((tag) => (
                  <li className="selected-work-card-tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>

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
