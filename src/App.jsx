import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Certificates from "./pages/Certificates";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="main-content">
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* SKILLS */}
          <Route path="/skills" element={<Skills />} />

          {/* PROJECTS */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/gallery" element={<Gallery />} />
          

          {/* CERTIFICATES */}
          <Route
            path="/certificates"
            element={<Certificates />}
          />

          {/* BLOG */}
          <Route path="/blog" element={<Blog />} />

          {/* RESUME */}
          <Route path="/resume" element={<Resume />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="portfolio-footer">

        <div className="footer-content">

          <div className="footer-brand">
            <strong>Siddesh D S</strong>

            <span>
              Aspiring Java Full Stack Developer
            </span>
          </div>

          <div className="footer-tech">
            Java • React • SQL • AI • Data
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Siddesh D S
          </div>

        </div>

      </footer>

      {/* ================= APP STYLES ================= */}
      <style>{`

        .app {
          min-height: 100vh;

          display: flex;
          flex-direction: column;

          background: #070b12;
        }

        .main-content {
          flex: 1;
          width: 100%;
        }

        .portfolio-footer {
          width: 100%;

          border-top:
            1px solid rgba(255,255,255,0.07);

          background:
            rgba(7,11,18,0.95);

          padding: 2rem 1.5rem;
        }

        .footer-content {
          width: 100%;
          max-width: 1200px;

          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 1.5rem;

          flex-wrap: wrap;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;

          gap: 0.25rem;
        }

        .footer-brand strong {
          color: #00ffc8;

          font-size: 0.9rem;
        }

        .footer-brand span {
          color:
            rgba(255,255,255,0.4);

          font-size: 0.7rem;
        }

        .footer-tech {
          color:
            rgba(255,255,255,0.35);

          font-size: 0.7rem;

          letter-spacing: 0.05em;
        }

        .footer-copy {
          color:
            rgba(255,255,255,0.35);

          font-size: 0.7rem;
        }

        @media (max-width: 700px) {

          .footer-content {
            flex-direction: column;

            text-align: center;
          }

        }

      `}</style>

    </div>
  );
}