import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import SystemDesignPost from './pages/blog/SystemDesignPost.jsx';
import InternalDashboardProject from './pages/portfolio/InternalDashboardProject.jsx';
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/blog/system-design" element={<SystemDesignPost />} />

          <Route path="/portfolio/internal-dashboard" element={<InternalDashboardProject />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;