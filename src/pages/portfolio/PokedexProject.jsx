import React from "react";
import ProjectLayout from "../../components/ProjectLayout.jsx";
import pokedexImage from "../../assets/pokedex-pokeball.png";

const PokedexProject = () => {
  return (
    <ProjectLayout
      tag="POC"
      title="Pokedex"
      description="A client-side Angular SPA for exploring Pokemon data from PokeAPI, with simulated trainer authentication, live search, pagination, and type-based cards."
      image={pokedexImage}
      githubUrl="https://github.com/amarqueze/pokedex"
      liveUrl=""
    >
      <h2>Overview</h2>
      <p>
        Pokedex is a single-page Angular application for browsing Pokemon data
        from the public PokeAPI. It combines a simulated trainer authentication
        flow with a private dashboard where users can search, paginate, and
        scan Pokemon cards styled by their primary type.
      </p>

      <h2>Problem</h2>
      <p>
        API-driven frontend demos can easily stay at the level of a simple list
        or a single component. This project turns the data integration into a
        fuller application flow, including form validation, local persistence,
        authenticated and unauthenticated views, and reusable UI components.
      </p>

      <h2>Solution</h2>
      <p>
        I built a client-only SPA where registered users and the active session
        are stored in browser localStorage. The root component switches between
        the landing experience and the dashboard, while the dashboard loads
        Pokemon data, filters by name prefix, paginates results in fixed-size
        groups, and delegates each card to a reusable Pokemon card component.
      </p>

      <h2>Tech Stack</h2>
      <ul className="project-tech-stack">
        <li>Angular 13</li>
        <li>TypeScript</li>
        <li>RxJS</li>
        <li>Reactive Forms</li>
        <li>HttpClient</li>
        <li>SCSS</li>
        <li>PokeAPI</li>
        <li>Docker</li>
        <li>Nginx</li>
      </ul>

      <h2>Highlights</h2>
      <ul>
        <li>Simulated trainer registration, login, session restore, and logout</li>
        <li>Public PokeAPI integration through an Angular service layer</li>
        <li>Live name-prefix search and client-side pagination</li>
        <li>Reusable Pokemon card, profile, and search input components</li>
        <li>Type-based card styling for visual feedback while browsing</li>
        <li>Multi-stage Docker build that serves the production bundle with Nginx</li>
      </ul>

      <h2>Limitations and Next Steps</h2>
      <ul>
        <li>Replace simulated client-side authentication before handling real users</li>
        <li>Move the PokeAPI base URL into Angular environment configuration</li>
        <li>Introduce Angular routing and guards for clearer navigation boundaries</li>
        <li>Reduce per-card detail requests by batching or caching detail data</li>
        <li>Add focused tests for validators, pagination, filtering, and auth flow</li>
      </ul>
    </ProjectLayout>
  );
};

export default PokedexProject;
