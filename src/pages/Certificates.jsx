import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Award } from "lucide-react";

const CERTS = {
  technical: [
    {
      title: "Generative AI",
      organization: "Generative AI Program",
      year: "2025",
      image: "/certs/GEN AI.png",
    },
    {
      title: "AI Workshop",
      organization: "Artificial Intelligence Workshop",
      year: "2025",
      image: "/certs/AI WORKSHOP.jpg",
    },
    {
      title: "Future Interns",
      organization: "Future Interns",
      year: "2025",
      image: "/certs/FutureIntrrns.jpg",
    },
    {
      title: "Kaggle Certification",
      organization: "Kaggle",
      year: "2025",
      image: "/certs/Kaggle 1.jpg",
    },
    {
      title: "Kaggle Certification",
      organization: "Kaggle",
      year: "2025",
      image: "/certs/Kaggle 2.jpg",
    },
  ],

  achievements: [
    {
      title: "Unstop Quizzer",
      organization: "Unstop",
      year: "2026",
      image: "/certs/Unstop.jpg",
      link: "https://www.linkedin.com/posts/siddesh-ds-520a54379_unstop-quizzer-learning-activity-7491155673016180736-BHmk",
    },
    {
      title: "Hackathon / AIT",
      organization: "AIT",
      year: "2025",
      image: "/certs/AIT.jpg",
      link: "https://www.linkedin.com/posts/siddesh-ds-520a54379_hackathon-ait-googlestudentambassador-activity-7393010698659860480-2H1-",
    },
    {
      title: "GCEM Hackathon",
      organization: "GCEM",
      year: "2025",
      image: "/certs/GCEM.jpg",
      link: "https://www.linkedin.com/posts/siddesh-ds-520a54379_hackathon-innovation-technology-activity-7384097005137985536-0yhm",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("technical");
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = CERTS[tab];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "70px 20px",
        background:
          "radial-gradient(circle at top, rgba(0,255,200,0.08), transparent 35%), #050505",
        color: "#fff",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "var(--accent)",
            fontSize: "0.85rem",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          My Achievements
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            background:
              "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Certificates & Achievements
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "15px auto 0",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
          }}
        >
          A collection of my technical learning, workshops, internships,
          hackathons and other achievements.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          margin: "35px auto 40px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setTab("technical")}
          style={{
            padding: "10px 24px",
            borderRadius: "30px",
            border:
              tab === "technical"
                ? "1px solid var(--accent)"
                : "1px solid rgba(255,255,255,0.12)",
            background:
              tab === "technical"
                ? "rgba(0,255,200,0.12)"
                : "rgba(255,255,255,0.04)",
            color: tab === "technical" ? "var(--accent)" : "#aaa",
            cursor: "pointer",
            fontWeight: 600,
            transition: "0.3s",
          }}
        >
          Technical
        </button>

        <button
          onClick={() => setTab("achievements")}
          style={{
            padding: "10px 24px",
            borderRadius: "30px",
            border:
              tab === "achievements"
                ? "1px solid var(--accent)"
                : "1px solid rgba(255,255,255,0.12)",
            background:
              tab === "achievements"
                ? "rgba(0,255,200,0.12)"
                : "rgba(255,255,255,0.04)",
            color: tab === "achievements" ? "var(--accent)" : "#aaa",
            cursor: "pointer",
            fontWeight: 600,
            transition: "0.3s",
          }}
        >
          Achievements
        </button>
      </motion.div>

      {/* Certificate Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.4 }}
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "22px",
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 40px rgba(0,255,200,0.12)",
              }}
              style={{
                background: "rgba(255,255,255,0.045)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "18px",
                padding: "16px",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
              }}
            >
              {/* Certificate Image */}
              <div
                onClick={() => setSelectedCert(cert)}
                style={{
                  height: "190px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "#111",
                  cursor: "pointer",
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Information */}
              <div style={{ padding: "15px 4px 5px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "7px",
                  }}
                >
                  <Award
                    size={18}
                    color="var(--accent)"
                  />

                  <h3
                    style={{
                      margin: 0,
                      fontSize: "1.05rem",
                      color: "#fff",
                    }}
                  >
                    {cert.title}
                  </h3>
                </div>

                <p
                  style={{
                    margin: "4px 0",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.9rem",
                  }}
                >
                  {cert.organization}
                </p>

                <p
                  style={{
                    margin: "4px 0 14px",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.82rem",
                  }}
                >
                  {cert.year}
                </p>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={() => setSelectedCert(cert)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.06)",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 14px",
                        borderRadius: "8px",
                        background: "var(--accent)",
                        color: "#050505",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                      }}
                    >
                      LinkedIn
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.88)",
              backdropFilter: "blur(8px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
              zIndex: 9999,
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "1000px",
                maxHeight: "90vh",
                background: "#0b0b0b",
                borderRadius: "16px",
                padding: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-15px",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "#111",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <X size={20} />
              </button>

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                style={{
                  display: "block",
                  maxWidth: "90vw",
                  maxHeight: "82vh",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}