import React from "react";
import ProjectLayout from "../../components/ProjectLayout.jsx";
import dextericon from "../../assets/super_Ball.png";
import dexterImage from "../../assets/blank_4_Grids_Collage.png";

const DexterProject = () => {
  return (
    <ProjectLayout
      tag="POC"
      title="Dexter"
      description="Dexter is a Pokemon search app where users can explore and discover information about all Pokemon."
      image={dextericon}
      githubUrl="https://github.com/amarqueze/dexter-react"
      liveUrl=""
    >
      <h2>Overview</h2>
      <p>
        Dexter is a React application for browsing Pokemon and moving from
        search results into detailed Pokemon information. The interface includes
        trainer-facing access screens, a searchable Pokemon list, and a detail
        view that keeps stats, types, and abilities easy to scan.
      </p>

      <h2>Problem</h2>
      <p>
        Pokemon data can become noisy when it is presented as a raw API list.
        Dexter focuses the experience around quick discovery, clear search
        results, and a detail page that gives users the most useful information
        without making them dig through dense data.
      </p>

      <h2>Solution</h2>
      <p>
        The app guides users through a simple flow: sign in or create an
        account, browse the Pokemon catalog, search for a specific Pokemon, and
        open a focused detail view. The UI is organized into reusable screens
        and components so the discovery flow stays consistent across the app.
      </p>

      <h2>Result</h2>
      <p>
        The final interface covers the main product states: sign in, account
        creation, searchable results, and individual Pokemon details.
      </p>
      <img
        src={dexterImage}
        alt="Dexter app screens showing sign in, account creation, search results, and Pokemon details"
        className="project-result-image"
      />

      <h2>Tech Stack</h2>
      <ul className="project-tech-stack">
        <li>React</li>
        <li>TypeScript</li>
        <li>Axios</li>
        <li>CSS</li>
      </ul>

      <h2>Highlights</h2>
      <ul>
        <li>Trainer-facing sign-in and account creation screens</li>
        <li>Searchable Pokemon catalog with card-based results</li>
        <li>Dedicated Pokemon detail view with stats, types, and abilities</li>
        <li>Reusable UI structure for authentication, listing, and details</li>
        <li>Responsive visual presentation across the main app states</li>
      </ul>
    </ProjectLayout>
  );
};

export default DexterProject;
