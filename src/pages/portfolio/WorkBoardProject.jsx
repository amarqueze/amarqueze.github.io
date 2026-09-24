import React from "react";
import ProjectLayout from "../../components/ProjectLayout.jsx";

const workBoardImage =
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1400&q=80";

const WorkBoardProject = () => {
  return (
    <ProjectLayout
      tag="POC"
      title="WorkBoard"
      description="WorkBoard is a task management application with a Django REST API backend and a React frontend for account workflows, task persistence, assignment, state changes, and task editing."
      image={workBoardImage}
      githubUrl="https://github.com/amarqueze/workboard"
      liveUrl=""
    >
      <h2>Overview</h2>
      <p>
        WorkBoard is a proof of concept for a full-stack task management
        application. The backend owns authentication, account management, task
        persistence, business rules, background processing, and API
        documentation, while the frontend provides the user interface for login,
        home navigation, account creation, task listing, task creation,
        assignment, state changes, and task editing.
      </p>

      <h2>Architecture</h2>
      <p>
        The backend is organized as a Django REST API with modules for accounts
        and task management. Each module separates API concerns, application
        services, selectors, DTOs, repository interfaces, infrastructure
        implementations, models, and business exceptions.
      </p>
      <p>
        The frontend is a Vite React application with protected routing,
        authentication context, API clients, feature hooks, and reusable UI
        components for modals, toasts, accounts, tasks, and task details.
      </p>

      <h2>Tech Stack</h2>
      <ul className="project-tech-stack">
        <li>Python 3.13</li>
        <li>Django</li>
        <li>Django REST Framework</li>
        <li>Simple JWT</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>React Router DOM</li>
        <li>TanStack Query</li>
        <li>React Hook Form</li>
        <li>Zod</li>
        <li>SQLite</li>
        <li>Docker Compose</li>
        <li>Nginx</li>
        <li>Gunicorn</li>
        <li>drf-spectacular</li>
      </ul>

      <h2>Highlights</h2>
      <ul>
        <li>JWT-based authentication with protected frontend routes</li>
        <li>Account registration, login, user lookup, and user listing flows</li>
        <li>Task creation, filtering, updates, deletion, assignment, and state changes</li>
        <li>Background task processing through django-tasks-db and a database worker</li>
        <li>Server-state management with TanStack Query and mutation invalidation</li>
        <li>Validated forms with React Hook Form and Zod</li>
        <li>OpenAPI schema and Swagger UI generated with drf-spectacular</li>
        <li>Docker Compose setup with the React frontend served through Nginx</li>
      </ul>

      <h2>Running Locally</h2>
      <p>
        The complete application can be started with Docker Compose. The
        frontend runs on local port 8080 and reaches the Django backend through
        an Nginx <code>/api/</code> proxy.
      </p>
    </ProjectLayout>
  );
};

export default WorkBoardProject;
