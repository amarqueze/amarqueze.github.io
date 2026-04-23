import React from "react";

const About = () => {
  return (
    <section className="page-section about-page">
      <h2>About Me</h2>

      <p>
        I design and build scalable software systems, focusing on backend
        architecture, distributed systems and AI-driven solutions.
      </p>

      <p>
        With over 6 years of experience, I specialize in creating reliable
        backend services, integrating systems and improving workflows through
        automation. My goal is to build solutions that are not only functional,
        but also maintainable, adaptable and ready to scale as the business
        grows.
      </p>

      <p>
        My work is centered around solving real operational and technical
        problems. I design backend systems that can handle complexity over time,
        structure APIs that are easy to integrate, and build workflows that
        reduce manual effort and improve efficiency across teams. Most of my
        work is built with Java (Spring Boot) and Python (FastAPI), where I
        focus on creating robust, scalable backend systems, microservices and
        automation workflows. I design systems that prioritize performance,
        reliability and long-term maintainability, while remaining flexible to
        evolve with business needs.
      </p>

      <p>
        On the frontend side, I have experience working with Angular and React
        to build user interfaces that integrate seamlessly with backend
        services. I focus on creating clean, maintainable interfaces that
        support complex workflows and provide a good user experience, especially
        in data-driven and enterprise environments. I also use Node.js when
        flexibility and speed are required, especially for building lightweight
        services, integrations and rapid prototypes that connect different
        systems.
      </p>

      <p>
        More recently, I have been exploring and implementing AI-driven
        solutions, including intelligent agents that can automate repetitive
        tasks, assist decision-making processes and enhance existing systems. I
        use AWS to design and deploy cloud-native architectures, ensuring
        scalability, resilience and efficient system integration.
      </p>

      <p>
        I’m especially
        interested in system design, clean architecture and building software
        that aligns with real business needs. I focus on creating solutions
        that are clear, reliable and capable of evolving over time without
        becoming difficult to maintain.
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
        <a href="https://github.com/amarqueze" 
          target="_blank" 
          rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/amarqueze"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/alan.marqueze"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/573205221083?text=Hi%20Alan%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default About;