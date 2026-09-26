import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaChalkboardTeacher,
  FaBrain,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Software Development",
      text: "Focused on Java, SQL, web development and building practical software projects.",
    },
    {
      icon: <FaBrain />,
      title: "AI & Data",
      text: "Exploring AI, computer vision, data analytics and intelligent applications.",
    },
    {
      icon: <FaDatabase />,
      title: "Database & Backend",
      text: "Working with SQL, MongoDB, REST APIs and backend development concepts.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Teaching & Leadership",
      text: "Teaching Science and Mathematics while developing communication, leadership and mentoring skills.",
    },
  ];

  const education = [
    {
      icon: <FaGraduationCap />,
      title: "B.E. Computer Science Engineering",
      institution: "SJM Institute of Technology",
      details: "CGPA: 8.6",
      year: "Expected Graduation: 2027",
    },
    {
      icon: <FaGraduationCap />,
      title: "Pre-University Education",
      institution: "Government PU College for Boys",
      details: "PCMB — 94%",
      year: "Completed",
    },
    {
      icon: <FaGraduationCap />,
      title: "School Education",
      institution: "SJMR CBSE School",
      details: "CBSE — 62%",
      year: "Completed",
    },
  ];

  const experience = [
    {
      title: "Science & Mathematics Teacher",
      organization: "Vikasa Vidya Samste",
      period: "Jul 2024 – Apr 2025",
      description:
        "Taught Science and Mathematics for Classes 5–7, while developing classroom management, communication and mentoring skills.",
    },
    {
      title: "Science & Mathematics Teacher",
      organization: "Regional English School",
      period: "Jul 2025 – Present",
      description:
        "Teaching Science and Mathematics for Classes 8, 9 and State Board Class 10, strengthening communication, leadership and problem-solving abilities.",
    },
  ];

  const workshops = [
    "Amazon AI for Bharat",
    "Microsoft M365 Bengaluru Conference",
    "Google Agentic AI Workshop",
    "Hacknight Bengaluru — Elastic Technologies",
    "AI & Robotics Workshop",
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "5rem 1.5rem",
        background:
          "radial-gradient(circle at top, rgba(0,255,200,0.08), transparent 45%), #050505",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              color: "var(--accent)",
              fontSize: "0.9rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "0.7rem",
            }}
          >
            Get to know me
          </p>

          <h1
            style={{
              fontSize: "clamp(2.3rem, 5vw, 4rem)",
              margin: 0,
              fontWeight: 800,
            }}
          >
            About{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), var(--accent-2))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Me
            </span>
          </h1>
        </motion.div>

        {/* INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          style={{
            background: "rgba(255,255,255,0.045)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "22px",
            padding: "2.5rem",
            backdropFilter: "blur(14px)",
            boxShadow: "0 0 35px rgba(0,255,200,0.06)",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              color: "var(--accent)",
              marginTop: 0,
              fontSize: "1.8rem",
            }}
          >
            Hi, I'm Siddesh D S 👋
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.9,
              fontSize: "1.05rem",
            }}
          >
            I am a Computer Science Engineering student at{" "}
            <strong>SJM Institute of Technology</strong>, currently pursuing
            my B.E. with a CGPA of <strong>8.6</strong> and expected to
            graduate in 2027.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.9,
              fontSize: "1.05rem",
            }}
          >
            My current focus is on becoming a strong software developer with
            a foundation in <strong>Java, SQL, web development, databases,
            APIs and problem solving</strong>. Alongside software development,
            I am exploring AI, data analytics and intelligent applications.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              marginBottom: 0,
            }}
          >
            I enjoy turning ideas into working projects and continuously
            learning through internships, workshops, hackathons and hands-on
            development.
          </p>
        </motion.div>

        {/* HIGHLIGHTS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
              whileHover={{
                y: -7,
                borderColor: "var(--accent)",
              }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "18px",
                padding: "1.5rem",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  color: "var(--accent)",
                  fontSize: "1.7rem",
                  marginBottom: "0.8rem",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 0.6rem",
                  fontSize: "1.1rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                  fontSize: "0.92rem",
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* EDUCATION */}
        <section style={{ marginBottom: "3rem" }}>
          <SectionTitle title="Education" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                style={{
                  display: "flex",
                  gap: "1.2rem",
                  alignItems: "center",
                  padding: "1.5rem",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <FaGraduationCap
                  style={{
                    color: "var(--accent)",
                    fontSize: "2rem",
                    flexShrink: 0,
                  }}
                />

                <div>
                  <h3
                    style={{
                      margin: "0 0 0.35rem",
                      color: "var(--accent)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: "0 0 0.25rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.institution}
                  </p>

                  <p
                    style={{
                      margin: "0 0 0.2rem",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {item.details}
                  </p>

                  <p
                    style={{
                      margin: 0,
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TEACHING EXPERIENCE */}
        <section style={{ marginBottom: "3rem" }}>
          <SectionTitle title="Teaching Experience" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {experience.map((item, index) => (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  padding: "1.6rem",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <FaChalkboardTeacher
                  style={{
                    color: "var(--accent)",
                    fontSize: "1.7rem",
                    marginBottom: "0.8rem",
                  }}
                />

                <h3 style={{ margin: "0 0 0.4rem" }}>
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "var(--accent)",
                    margin: "0 0 0.3rem",
                    fontWeight: 600,
                  }}
                >
                  {item.organization}
                </p>

                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.9rem",
                    margin: "0 0 0.8rem",
                  }}
                >
                  {item.period}
                </p>

                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WORKSHOPS */}
        <section style={{ marginBottom: "2rem" }}>
          <SectionTitle title="Workshops & Technical Exposure" />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.8rem",
            }}
          >
            {workshops.map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  scale: 1.04,
                  borderColor: "var(--accent)",
                }}
                style={{
                  padding: "0.8rem 1.1rem",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        {/* FINAL STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: "3rem",
            padding: "2rem",
            textAlign: "center",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(0,255,200,0.08), rgba(120,80,255,0.08))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <FaLaptopCode
            style={{
              fontSize: "2rem",
              color: "var(--accent)",
              marginBottom: "0.8rem",
            }}
          />

          <h2 style={{ margin: "0 0 0.6rem" }}>
            Building. Learning. Growing.
          </h2>

          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            My goal is to transform my skills and projects into meaningful
            software solutions and build a strong career in technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

function SectionTitle({ title }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={{
        fontSize: "1.8rem",
        marginBottom: "1.3rem",
        background:
          "linear-gradient(90deg, var(--accent), var(--accent-2))",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {title}
    </motion.h2>
  );
}

export default About;