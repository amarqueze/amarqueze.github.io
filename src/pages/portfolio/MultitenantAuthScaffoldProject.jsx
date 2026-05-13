import React from "react";
import ProjectLayout from "../../components/ProjectLayout.jsx";

const MultitenantAuthScaffoldProject = () => {
  return (
    <ProjectLayout
      tag="MVP"
      title="Multi-Tenant Authentication Scaffold"
      description="A reusable backend scaffold for multi-tenant enterprise applications, with support for Google, Microsoft and local account authentication."
      image="https://images.unsplash.com/photo-1659782229445-19a69f10f6d8?auto=format&fit=crop&w=1400&q=80"
      githubUrl=""
      liveUrl=""
    >
      <h2>Overview</h2>
      <p>
        This project was designed as a reusable foundation for building secure
        enterprise applications that need multi-tenant support and flexible
        authentication options.
      </p>

      <h2>Problem</h2>
      <p>
        Many enterprise applications require authentication, tenant separation
        and secure user management. Rebuilding this foundation from scratch for
        each product can slow down development.
      </p>

      <h2>Solution</h2>
      <p>
        I designed and implemented a backend scaffold with multi-tenant
        structure, OAuth2 support and local authentication, making it easier to
        start new enterprise applications with a solid security foundation.
      </p>

      <h2>Tech Stack</h2>
      <ul className="project-tech-stack">
        <li>Java</li>
        <li>Spring Boot</li>
        <li>Spring Security</li>
        <li>OAuth2</li>
        <li>PostgreSQL</li>
      </ul>

      <h2>Highlights</h2>
      <ul>
        <li>Reusable authentication foundation</li>
        <li>Support for Google and Microsoft login</li>
        <li>Local account authentication</li>
        <li>Designed for multi-tenant enterprise products</li>
      </ul>
    </ProjectLayout>
  );
};

export default MultitenantAuthScaffoldProject;