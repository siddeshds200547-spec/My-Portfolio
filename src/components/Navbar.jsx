import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Gallery", to: "/gallery" },
  { label: "Certificates", to: "/certificates" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="portfolio-navbar">

        {/* ================= BRAND ================= */}
        <NavLink to="/" className="navbar-brand">
          <motion.div
            className="brand-mark"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 180,
            }}
          >
            SD
          </motion.div>

          <div className="brand-text">
            <strong>Siddesh D S</strong>
            <span>Java Full Stack Developer</span>
          </div>
        </NavLink>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="desktop-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {({ isActive }) => (
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="nav-active-line"
                    />
                  )}
                </motion.span>
              )}
            </NavLink>
          ))}
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {/* MOBILE HEADER */}
            <div className="mobile-menu-header">
              <span>Siddesh D S</span>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation"
              >
                ✕
              </button>
            </div>

            {/* MOBILE LINKS */}
            <div className="mobile-links">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* MOBILE FOOTER */}
            <div className="mobile-footer">
              <span>Java • AI • Data • Full Stack</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= NAVBAR CSS ================= */}
      <style>{`

        .portfolio-navbar {
          position: sticky;
          top: 0;
          z-index: 1000;

          width: 100%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0.9rem 2.5rem;

          background: rgba(7, 11, 18, 0.78);

          border-bottom:
            1px solid rgba(255,255,255,0.07);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        /* ================= BRAND ================= */

        .navbar-brand {
          display: flex;
          align-items: center;

          gap: 0.75rem;

          color: white;
          text-decoration: none;

          flex-shrink: 0;
        }

        .brand-mark {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;

          color: #04110e;

          background: #00ffc8;

          font-size: 0.9rem;
          font-weight: 900;

          box-shadow:
            0 0 25px rgba(0,255,200,0.15);
        }

        .brand-text {
          display: flex;
          flex-direction: column;

          gap: 2px;
        }

        .brand-text strong {
          font-size: 0.92rem;
          color: #fff;
        }

        .brand-text span {
          font-size: 0.62rem;
          color: rgba(255,255,255,0.45);
        }

        /* ================= DESKTOP NAV ================= */

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 1.25rem;

          margin-left: auto;
        }

        .nav-link {
          position: relative;

          color: rgba(255,255,255,0.65);

          text-decoration: none;

          font-size: 0.75rem;
          font-weight: 600;

          transition:
            color 0.25s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #00ffc8;
        }

        .nav-link > span {
          position: relative;

          display: inline-flex;

          flex-direction: column;

          align-items: center;
        }

        .nav-active-line {
          width: 18px;
          height: 2px;

          margin-top: 5px;

          border-radius: 99px;

          background: #00ffc8;

          box-shadow:
            0 0 8px rgba(0,255,200,0.7);
        }

        /* ================= MOBILE BUTTON ================= */

        .mobile-menu-button {
          display: none;

          border: 0;

          background: transparent;

          color: white;

          font-size: 1.7rem;

          cursor: pointer;
        }

        /* ================= MOBILE MENU ================= */

        .mobile-menu {
          position: fixed;

          inset: 0;

          z-index: 2000;

          display: flex;

          flex-direction: column;

          padding: 1.2rem;

          background:
            radial-gradient(
              circle at 50% 10%,
              rgba(0,255,200,0.08),
              transparent 35%
            ),
            #070b12;

          backdrop-filter: blur(20px);
        }

        .mobile-menu-header {
          display: flex;

          align-items: center;
          justify-content: space-between;

          padding: 0.5rem;
        }

        .mobile-menu-header span {
          color: #00ffc8;

          font-size: 1rem;

          font-weight: 800;
        }

        .mobile-menu-header button {
          border: 0;

          background: transparent;

          color: white;

          font-size: 1.5rem;

          cursor: pointer;
        }

        .mobile-links {
          display: flex;

          flex-direction: column;

          margin-top: 3rem;

          overflow-y: auto;
        }

        .mobile-nav-link {
          padding: 1rem;

          border-bottom:
            1px solid rgba(255,255,255,0.06);

          color:
            rgba(255,255,255,0.75);

          text-decoration: none;

          text-align: center;

          font-size: 1rem;

          font-weight: 600;
        }

        .mobile-nav-link.active {
          color: #00ffc8;
        }

        .mobile-footer {
          margin-top: auto;

          padding: 1.5rem;

          text-align: center;

          color:
            rgba(255,255,255,0.3);

          font-size: 0.7rem;

          letter-spacing: 0.08em;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1200px) {

          .desktop-nav {
            gap: 0.9rem;
          }

          .portfolio-navbar {
            padding:
              0.9rem 1.5rem;
          }

          .nav-link {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 950px) {

          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .portfolio-navbar {
            padding:
              0.8rem 1.2rem;
          }
        }

      `}</style>
    </>
  );
}