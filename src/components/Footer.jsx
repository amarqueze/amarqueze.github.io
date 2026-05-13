import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Alan Márquez Escorcia</p>
      <div className="social-links">
        <a href="https://github.com/amarqueze" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/amarqueze" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a target="_blank" 
          rel="noreferrer"
          aria-disabled="true"
          style={{ color: "gray", cursor: "not-allowed" }}
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;