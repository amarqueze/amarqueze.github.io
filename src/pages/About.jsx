import React from "react";

const About = () => {
  return (
    <section className="page-section about-page">
      <h2>About Me</h2>

      <p>
        I’m a Senior Software Engineer with over 6 years of experience building
        scalable backend systems and distributed applications.
      </p>

      <p>
        I mainly work with Java and Spring, building microservices, REST APIs
        and enterprise integrations. I also have experience using Node.js and
        Python, working with asynchronous systems, messaging and secure APIs.
      </p>

      <p>
        I have worked on high-traffic systems in cloud and containerized
        environments, applying concepts like distributed systems, clean
        architecture and reactive programming.
      </p>

      <p>
        I also collaborate across the full stack and explore AI and intelligent
        automation as part of my continuous learning process.
      </p>

      <p>
        Currently working with{" "}
        <a href="https://zagalabs.com" target="_blank" rel="noreferrer">
          Zaga Labs
        </a>{" "}
        on projects for{" "}
        <a href="https://www.whipmedia.com" target="_blank" rel="noreferrer">
          Whip Media
        </a>
        .
      </p>

      <p style={{ marginTop: "2rem" }}>
        <strong>
          Outside of work, I’m happily married and enjoy staying active through
          sports, especially football. I also spend time reading manga, comics and
          fantasy or mystery stories, and playing video games whenever I get the
          chance.
        </strong>
      </p>

      {/* <div className="about-actions">
        <a
          href="/Alan_Marquez_CV.pdf"
          download
          className="cv-download-button"
          aria-disabled="true"
        >
          Download CV
        </a>
      </div> */}

      <h3>Skills</h3>
      <ul className="skills-list">
        <li>Backend Development</li>
        <li>Frontend Development</li>
        <li>AI / Machine Learning</li>
        <li>Distributed Systems</li>
        <li>Microservices</li>
        <li>Cloud & Containers</li>
        <li>Databases (PostgreSQL, MongoDB)</li>
        <li>System Design</li>
      </ul>

      <h3>Connect</h3>
      <div className="social-links">
        <a href="https://github.com/username" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/username"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </section>
  );
};

export default About;