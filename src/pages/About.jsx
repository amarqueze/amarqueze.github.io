import React from "react";

const stats = [
  {
    value: "8+ YEARS",
    label: "Software Engineering",
  },
  {
    value: "4+ YEARS",
    label: "USA Clients",
  },
];

const processSteps = ["Understand", "Analyze", "Design", "Build", "Measure"];

const journey = [
  {
    period: "2025 - PRESENT",
    company: "ZAGA LABS / WHIP MEDIA",
    focus: "Media, Data & Automation",
    description: [
      "Working with production applications and data-processing workflows supporting media and entertainment operations.",
      "Building backend services, APIs and automation while working with workflows that ingest, validate and transform hundreds of files daily.",
    ],
    technologies: [
      "Python",
      "Django",
      "Java",
      "Spring Boot",
      "NextJs",
      "Databricks",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    period: "2022 - 2025",
    company: "SLABCODE / CLEARGOV",
    focus: "Financial & Regulatory Systems",
    description: [
      "Built applications supporting complex government financial and regulatory workflows.",
      "Worked across Python/Django backend services, APIs, React applications and databases, including performance optimization and production troubleshooting.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    period: "2022",
    company: "HIBOT",
    focus: "Messaging & System Integrations",
    description: [
      "Worked on a multichannel communication platform connecting services such as WhatsApp, Facebook and Telegram.",
      "Built backend integrations and worked with asynchronous, distributed communication workflows.",
    ],
    technologies: ["Node.js", "Python", "Angular", "RabbitMQ", "MongoDB"],
  },
  {
    period: "2020 - 2022",
    company: "SOPHOS SOLUTIONS / BANCOLOMBIA",
    focus: "Digital Marketplaces",
    description: [
      "Worked on digital marketplace solutions within Bancolombia's innovation ecosystem, including TU360.",
      "Built web applications, APIs and distributed services supporting marketplace and provider-facing workflows.",
    ],
    technologies: ["Java", "Spring Boot", "Node.js", "Angular", "TypeScript"],
  },
  {
    period: "2018 - 2020",
    company: "ZEUS TECNOLOGIA",
    focus: "Enterprise Software & Modernization",
    description: [
      "Started my professional career working with accounting, inventory and payroll systems.",
      "Helped modernize legacy applications and build backend and batch-processing solutions for enterprise business workflows.",
    ],
    technologies: ["Java", "Spring", "Spring Batch", "Oracle"],
  },
];

const capabilities = [
  {
    title: "Build",
    text: "Web applications, backend services and APIs.",
  },
  {
    title: "Automate",
    text: "Manual and repetitive business workflows.",
  },
  {
    title: "Integrate",
    text: "Applications, APIs, data and external systems.",
  },
  {
    title: "Improve",
    text: "Performance, reliability and scalability.",
  },
];

const toolbox = [
  {
    category: "Backend",
    tools: "Python / Django / FastAPI / Java / Spring Boot / Node.js",
  },
  {
    category: "Frontend",
    tools: "React / Next.js / TypeScript / Angular",
  },
  {
    category: "Data",
    tools: "PostgreSQL / MongoDB / Databricks / Spark",
  },
  {
    category: "Cloud & Infrastructure",
    tools: "AWS / Docker / Kubernetes / CI/CD",
  },
  {
    category: "AI",
    tools: "LangChain / LLM Integrations / MCP / AI Workflows",
  },
];

const About = () => {
  return (
    <section className="page-section about-page">
      <header className="about-hero">
        <p className="about-eyebrow">About Me</p>
        <h1>I understand the problem first.</h1>
        <p className="about-hero-lede">
          Then I build the technology to solve it.
        </p>

        <div className="about-intro">
          <p>
            I'm a Senior Software Engineer with 8+ years of experience turning
            business and operational problems into practical technology
            solutions.
          </p>
          <p>
            My main strength is connecting the business problem with the
            technical solution. I work across backend, frontend, data and cloud
            systems, which allows me to understand the complete workflow instead
            of only one part of an application.
          </p>
        </div>
      </header>

      <div className="about-divider" />

      <div className="about-stats" aria-label="Professional highlights">
        {stats.map((stat) => (
          <div className="about-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <p className="about-scope">BACKEND / FRONTEND / DATA / CLOUD / AI</p>

      <div className="about-divider" />

      <section className="about-section">
        <p className="about-section-kicker">How I Think</p>
        <div className="about-process" aria-label="Problem solving process">
          {processSteps.map((step, index) => (
            <React.Fragment key={step}>
              <span>{step}</span>
              {index < processSteps.length - 1 && (
                <span className="about-process-arrow" aria-hidden="true">
                  &rarr;
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
        <p>
          I prefer to understand the business problem before choosing the
          technology. What are we trying to improve? Where is the bottleneck?
          Who is affected? What would success look like?
        </p>
        <p className="about-emphasis">
          Technology comes after understanding the problem.
        </p>
      </section>

      <div className="about-divider" />

      <section className="about-section">
        <p className="about-section-kicker">My Journey</p>

        <div className="about-timeline">
          {journey.map((item) => (
            <article
              className="about-timeline-item"
              key={`${item.period}-${item.company}`}
            >
              <div className="about-timeline-marker" aria-hidden="true" />
              <div className="about-timeline-content">
                <p className="about-timeline-period">{item.period}</p>
                <h2>{item.company}</h2>
                <h3>{item.focus}</h3>
                {item.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="about-tech-line">
                  {item.technologies.join(" / ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="about-divider" />

      <section className="about-section">
        <p className="about-section-kicker">What I Can Help With</p>
        <div className="about-capabilities">
          {capabilities.map((capability) => (
            <article className="about-capability" key={capability.title}>
              <h2>{capability.title}</h2>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="about-divider" />

      <section className="about-section">
        <p className="about-section-kicker">My Toolbox</p>
        <dl className="about-toolbox">
          {toolbox.map((group) => (
            <div className="about-toolbox-row" key={group.category}>
              <dt>{group.category}</dt>
              <dd>{group.tools}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="about-divider" />

      <section className="about-section">
        <p className="about-section-kicker">Beyond The Code</p>
        <p>
          Outside of work, I'm happily married and enjoy staying active through
          sports, especially football.
        </p>
        <p>
          I also enjoy reading manga, comics, fantasy and mystery stories, and
          playing video games whenever I get the chance.
        </p>
      </section>

      <div className="about-divider" />

      <section className="about-cta">
        <p className="about-section-kicker">Have A Problem Worth Solving?</p>
        <h2>Let's talk about it.</h2>
        <div className="about-cta-actions">
          <a href="mailto:alanmarquez@outlook.com" className="about-primary-link">
            Let's Connect
          </a>
          <a
            href="https://www.linkedin.com/in/amarqueze"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/amarqueze" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </section>
  );
};

export default About;
