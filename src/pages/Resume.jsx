import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const skills = [
    "Java",
    "C",
    "SQL",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Git",
    "GitHub",
    "REST APIs",
    "JDBC",
    "Python",
    "FastAPI",
    "Firebase",
    "DSA",
    "OOP",
    "DBMS",
  ];

  const projects = [
    {
      title: "Agri AI – Smart Farming System",
      description:
        "AI-powered smart farming platform featuring smart irrigation, crop stress detection, soil nutrition recommendations, agricultural insights, and IoT sensor integration.",
    },
    {
      title: "YOLO Object Detection",
      description:
        "Computer vision project implementing YOLO-based object detection with a deployed web application.",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive portfolio website built using React, TypeScript, Vite, Tailwind CSS, animations, and modern UI components.",
    },
    {
      title: "E-Commerce Mini Project",
      description:
        "Full-stack oriented e-commerce project demonstrating product browsing, UI interactions, and modern frontend development.",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background:
          "radial-gradient(circle at top, #101820 0%, #050505 55%, #000 100%)",
        color: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "18px",
          padding: "40px",
          boxShadow: "0 0 40px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "8px",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Resume
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1rem",
            }}
          >
            A quick overview of my education, skills, projects and experience.
          </p>
        </motion.div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: "14px",
            padding: "25px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              color: "var(--accent)",
              marginBottom: "8px",
            }}
          >
            Siddesh D S
          </h2>

          <h3
            style={{
              color: "#fff",
              marginBottom: "15px",
              fontWeight: 500,
            }}
          >
            Aspiring Java Full Stack Developer
          </h3>

          <p style={{ color: "rgba(255,255,255,0.75)" }}>
            B.E. Computer Science & Engineering student with experience in
            Java, web development, databases, AI projects and full-stack
            development. Interested in backend development, Java development,
            software engineering and building practical technology solutions.
          </p>

          <div
            style={{
              marginTop: "18px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
            }}
          >
            <span>📍 India</span>
            <span>🎓 B.E. Computer Science & Engineering</span>
            <span>📊 CGPA: 8.6</span>
            <span>💻 Java Full Stack</span>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: "35px" }}
        >
          <h2 className="resume-heading">🎓 Education</h2>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "14px",
              padding: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 style={{ color: "var(--accent)" }}>
              Bachelor of Engineering – Computer Science & Engineering
            </h3>

            <p style={{ color: "rgba(255,255,255,0.8)" }}>
              SJM Institute of Technology
            </p>

            <p style={{ color: "rgba(255,255,255,0.65)" }}>
              Expected Graduation: 2027
            </p>

            <p style={{ color: "rgba(255,255,255,0.65)" }}>
              CGPA: 8.6
            </p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: "35px" }}
        >
          <h2 className="resume-heading">💼 Experience</h2>

          <div
            style={{
              display: "grid",
              gap: "15px",
            }}
          >
            <ExperienceCard
              title="Science & Mathematics Teacher"
              company="Vikasa Vidya Samste"
              period="Jul 2024 – Apr 2025"
              description="Taught Science and Mathematics to Classes 5–7 while developing communication, leadership, presentation and classroom-management skills."
            />

            <ExperienceCard
              title="Science & Mathematics Teacher"
              company="Regional English School"
              period="Jul 2025 – Present"
              description="Teaching Science and Mathematics to Classes 8, 9 and State Board Class 10 students, strengthening communication, leadership and problem-solving abilities."
            />

            <ExperienceCard
              title="Full Stack Web Development Intern"
              company="Vault of Codes / AICTE"
              period="Aug 2026 – Sep 2026"
              description="Worked on full-stack web development concepts and practical project implementation."
            />
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: "35px" }}
        >
          <h2 className="resume-heading">🚀 Projects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 20px rgba(0,255,200,0.12)",
                }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    color: "var(--accent)",
                    marginBottom: "10px",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    fontSize: "14px",
                  }}
                >
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ marginTop: "35px" }}
        >
          <h2 className="resume-heading">⚙️ Technical Skills</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.08,
                  color: "#fff",
                  background: "rgba(0,255,200,0.15)",
                }}
                style={{
                  padding: "8px 14px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "13px",
                  cursor: "default",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginTop: "40px",
          }}
        >
          <SocialLink
            text="GitHub"
            url="https://github.com/siddeshds200547-spec"
          />

          <SocialLink
            text="LinkedIn"
            url="https://linkedin.com/in/siddesh-ds-520a54379"
          />
        </motion.div>

        {/* Resume PDF */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: "45px",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Siddesh D S Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download */}
        <div
          style={{
            textAlign: "center",
            marginTop: "22px",
          }}
        >
          <motion.a
            href="/resume.pdf"
            download="Siddesh-DS-Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              padding: "12px 24px",
              borderRadius: "8px",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              color: "#000",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            ⬇️ Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}


/* Experience Card */

function ExperienceCard({ title, company, period, description }) {
  return (
    <motion.div
      whileHover={{
        x: 5,
        boxShadow: "0 0 20px rgba(0,255,200,0.08)",
      }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "20px",
      }}
    >
      <h3 style={{ color: "var(--accent)" }}>{title}</h3>

      <p
        style={{
          color: "#fff",
          margin: "5px 0",
          fontWeight: 500,
        }}
      >
        {company}
      </p>

      <p
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: "13px",
        }}
      >
        {period}
      </p>

      <p
        style={{
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.6,
          marginTop: "8px",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}


/* Social Link */

function SocialLink({ text, url }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.08,
        color: "var(--accent)",
      }}
      style={{
        color: "rgba(255,255,255,0.75)",
        textDecoration: "none",
        padding: "10px 18px",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      {text}
    </motion.a>
  );
}