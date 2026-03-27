import React from "react";
import ProjectLayout from "../../components/ProjectLayout.jsx";

const InternalDashboardProject = () => {
  return (
    <ProjectLayout
      tag="MVP"
      title="Internal Dashboard for Product Operations"
      description="A lightweight MVP to centralize workflows, reporting and operational visibility for cross-functional teams."
      image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80"
      githubUrl="https://github.com/amarqueze"
      liveUrl=""
    >
      <h2>Overview</h2>
      <p>
        This project was created to centralize internal workflows and improve
        visibility across teams. The goal was to reduce manual work and provide
        a clearer operational view in one place.
      </p>

      <h2>Problem</h2>
      <p>
        Teams were using different tools and manual processes to manage tasks,
        reporting and internal follow-up. This created friction, duplicated work
        and limited visibility.
      </p>

      <h2>Solution</h2>
      <p>
        I designed a lightweight dashboard that brings together key workflows,
        reporting and operational data into a single interface. The product was
        planned as an MVP, focused on clarity, simplicity and future growth.
      </p>

      <h2>Tech Stack</h2>
      <ul className="project-tech-stack">
        <li>React</li>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>PostgreSQL</li>
      </ul>

      <h2>Highlights</h2>
      <ul>
        <li>Centralized operational workflows</li>
        <li>Improved reporting visibility</li>
        <li>Reduced manual coordination</li>
        <li>Designed with scalability in mind</li>
      </ul>
    </ProjectLayout>
  );
};

export default InternalDashboardProject;