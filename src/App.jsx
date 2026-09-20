import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import LangChainPost from "./pages/blog/LangChainPost.jsx";
import InventoryMcpServerProject from "./pages/portfolio/InventoryMcpServerProject.jsx";
import AsientaProject from "./pages/portfolio/AsientaProject.jsx";
import MultitenantAuthScaffoldProject from "./pages/portfolio/MultitenantAuthScaffoldProject.jsx";
import PokedexProject from "./pages/portfolio/PokedexProject.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import JavaVersionsPost from "./pages/blog/JavaVersionsPost.jsx";
import SpringBootDddPost from "./pages/blog/SpringBootDddPost.jsx";
import EventDrivenArchitecturePost from "./pages/blog/EventDrivenArchitecturePost.jsx";

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

          <Route path="/blog/langchain-guide" element={<LangChainPost />} />
          <Route path="/blog/java-versions-guide" element={<JavaVersionsPost />} />
          <Route path="/blog/event-driven-architecture-spring-boot" element={<EventDrivenArchitecturePost />} />
          <Route path="/blog/spring-boot-ddd-structure" element={<SpringBootDddPost />} />

          <Route path="/portfolio/inventory-mcp-server" element={<InventoryMcpServerProject />}/>
          <Route path="/portfolio/asienta" element={<AsientaProject />}/>
          <Route path="/portfolio/multitenant-auth-scaffold" element={<MultitenantAuthScaffoldProject />}/>
          <Route path="/portfolio/pokedex" element={<PokedexProject />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
