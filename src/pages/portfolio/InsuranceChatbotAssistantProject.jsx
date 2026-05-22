import React from "react";
import ProjectLayout from "../../components/ProjectLayout.jsx";

const InsuranceChatbotAssistantProject = () => {
  return (
    <ProjectLayout
      tag="POC"
      title="Chatbot Assistant for Insurance Operations"
      description="An AI-powered chatbot assistant for insurance workflows, designed to support automated form completion, contextual conversations and enterprise data retrieval."
      image="https://images.unsplash.com/photo-1662974770404-468fd9660389?auto=format&fit=crop&w=1400&q=80"
      githubUrl=""
      liveUrl=""
    >
      <h2>Overview</h2>
      <p>
        This project focuses on applying AI to insurance operations, where users
        often need to complete forms, retrieve client information and follow
        structured workflows.
      </p>

      <h2>Problem</h2>
      <p>
        Insurance processes can involve repetitive data entry, document review
        and back-and-forth communication. This can increase operational time and
        create a poor user experience.
      </p>

      <h2>Solution</h2>
      <p>
        I built an AI assistant using LangChain and OpenAI integrations to guide
        users through insurance workflows, retrieve relevant data and help
        complete forms through contextual conversations.
      </p>

      <h2>Tech Stack</h2>
      <ul className="project-tech-stack">
        <li>Python</li>
        <li>Fast API</li>
        <li>LangChain</li>
        <li>OpenAI APIs</li>
        <li>PostgreSQL</li>
      </ul>

      <h2>Highlights</h2>
      <ul>
        <li>Automated form completion flows</li>
        <li>Enabled contextual AI conversations</li>
        <li>Integrated enterprise data retrieval</li>
        <li>Explored AI assistance for operational workflows</li>
      </ul>
    </ProjectLayout>
  );
};

export default InsuranceChatbotAssistantProject;