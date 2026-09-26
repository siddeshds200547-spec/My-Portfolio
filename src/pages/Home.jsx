import React from "react";
import { motion } from "framer-motion";
import "../index.css";
import "../CSS/Home.css";

export default function Home() {
  const professions = [
    "Aspiring Java Full Stack Developer",
    "Software Developer",
    "AI & ML Enthusiast",
    "Backend Developer",
    "Data & Technology Enthusiast",
  ];

  const quickLinks = [
    {
      img: "/github.png",
      title: "GitHub",
      link: "https://github.com/siddeshds200547-spec",
      external: true,
    },
    {
      img: "/linkedin.png",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/siddesh-ds-520a54379/",
      external: true,
    },
    {
      img: "/gmail.png",
      title: "Email",
      link: "mailto:siddeshds200547@gmail.com",
      external: false,
    },
    {
      img: "/whatsapp.png",
      title: "WhatsApp",
      link: "https://wa.me/919535389863",
      external: true,
    },
    {
      img: "/insta.png",
      title: "Instagram",
      link: "https://www.instagram.com/siddu_ds_siddu/",
      external: true,
    },
  ];

  return (
    <section className="home-section">

      {/* ================= TYPING ANIMATION ================= */}
      <style>
        {`
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }
        `}
      </style>

      {/* ================= MAIN HERO ================= */}
      <div className="home-top">

        {/* ================= PROFILE PHOTO ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="photo-ring"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="photo-frame"
          >
            <motion.img
              src="/photo.jpg"
              alt="Siddesh D S"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* ================= INTRODUCTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >

          <p
            style={{
              color: "var(--accent)",
              fontSize: "0.9rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Welcome to my portfolio
          </p>

          <h1 className="home-title">
            Hi, I'm{" "}
            <motion.span
              animate={{
                backgroundPositionX: ["0%", "200%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="home-name"
            >
              Siddesh D S
            </motion.span>
          </h1>

          {/* ================= MAIN ROLE ================= */}
          <p className="typing-effect">
            Aspiring Java Full Stack Developer | AI Enthusiast | Software
            Developer
          </p>

          {/* ================= PROFESSIONAL TAGS ================= */}
          <motion.div className="profession-tags">
            {professions.map((role, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(90deg,var(--accent),var(--accent-2))",
                  color: "#000",
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* ================= SHORT INTRO ================= */}
          <p
            style={{
              marginTop: "1.5rem",
              maxWidth: "680px",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
          >
            I'm a Computer Science Engineering student passionate about
            building practical software solutions, intelligent applications
            and modern web experiences. I'm currently strengthening my skills
            in Java, DSA, SQL, backend development, AI and data technologies.
          </p>

          {/* ================= INFO CARDS ================= */}
          <motion.div className="info-cards">

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="info-card"
            >
              <strong>🎓 Education</strong>
              <p>
                B.E. Computer Science Engineering
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="info-card"
            >
              <strong>💻 Focus</strong>
              <p>
                Java • Full Stack • AI
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="info-card"
            >
              <strong>🚀 Goal</strong>
              <p>
                Software Development Career
              </p>
            </motion.div>

          </motion.div>

          {/* ================= ACTION BUTTONS ================= */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1.7rem",
            }}
          >

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                padding: "0.75rem 1.3rem",
                borderRadius: "9px",
                background: "var(--accent)",
                color: "#050505",
                fontWeight: 700,
                fontSize: "0.9rem",
              }}
            >
              View Resume ↗
            </a>

            <a
              href="/contact"
              style={{
                textDecoration: "none",
                padding: "0.75rem 1.3rem",
                borderRadius: "9px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              Contact Me
            </a>

          </div>

        </motion.div>
      </div>

      {/* ================= SOCIAL LINKS ================= */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.8,
        }}
        className="quick-links"
      >

        <h2 className="quick-links-title">
          Connect with me
        </h2>

        <div className="quick-links-list">

          {quickLinks.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              title={item.title}
              target={item.external ? "_blank" : undefined}
              rel={
                item.external
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={item.title}
              whileHover={{
                scale: 1.15,
                rotate: 5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
            >

              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter:
                    "drop-shadow(0 0 15px var(--accent)) brightness(1.2)",
                }}
                className="quick-link-img"
              />

            </motion.a>
          ))}

        </div>

      </motion.div>

    </section>
  );
}