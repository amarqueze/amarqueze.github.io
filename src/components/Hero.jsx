import React from "react";
import avatar from "../assets/avatar.png";

const defaultAvatar =
  "https://ui-avatars.com/api/?name=Alan+Marquez+Escorcia&background=F5F5F7&color=1D1D1F&size=200";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={defaultAvatar}
        alt="Alan Márquez Escorcia"
        className="hero-avatar"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = defaultAvatar;
        }}
      />

      <h1>Alan Márquez Escorcia</h1>

      <h2>Senior Software Engineer</h2>

      <p className="hero-description">
        Designing and building scalable systems across frontend, backend with a focus on performance, reliability and clean architecture.
      </p>

      <p className="tagline">Continuous learning and system thinking.</p>

      <div className="hero-links">
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

export default Hero;