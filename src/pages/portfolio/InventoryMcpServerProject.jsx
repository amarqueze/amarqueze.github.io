import React from "react";
import ProjectLayout from "../../components/ProjectLayout.jsx";

const InventoryMcpServerProject = () => {
  return (
    <ProjectLayout
      tag="POC"
      title="MCP Server for Inventory Management Integration"
      description="An MCP server that connects inventory management systems with custom ChatGPT assistants, enabling AI-driven inventory queries and operational workflows through natural language."
      image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
      githubUrl="https://github.com/amarqueze/inventory-mcp-server"
      liveUrl=""
    >
      <h2>Overview</h2>
      <p>
        This project explores how MCP can connect business systems with AI
        assistants. The goal is to let users query inventory data and trigger
        operational workflows through natural language.
      </p>

      <h2>Problem</h2>
      <p>
        Inventory systems often require users to navigate dashboards, reports or
        databases to find simple operational answers. This creates friction and
        slows down decision-making.
      </p>

      <h2>Solution</h2>
      <p>
        I developed an MCP server that exposes inventory operations to a custom
        ChatGPT assistant, allowing users to ask questions, retrieve data and
        interact with inventory workflows conversationally.
      </p>

      <h2>Tech Stack</h2>
      <ul className="project-tech-stack">
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>MCP</li>
        <li>ChatGPT Assistants</li>
      </ul>

      <h2>Highlights</h2>
      <ul>
        <li>Connected inventory data with AI-driven interactions</li>
        <li>Enabled natural language queries over operational data</li>
        <li>Designed a reusable MCP integration pattern</li>
      </ul>
    </ProjectLayout>
  );
};

export default InventoryMcpServerProject;