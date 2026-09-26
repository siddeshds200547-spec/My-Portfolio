import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "FastAPI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];

const ROWS = [
  [
    {
      title: "Programming Languages",
      items: ["Java", "Python", "C", "JavaScript", "TypeScript"],
    },
    {
      title: "Web Technologies",
      items: ["HTML5", "CSS3", "React.js", "Vite", "Tailwind CSS"],
    },
    {
      title: "Backend & APIs",
      items: ["Java Backend", "REST APIs", "FastAPI", "JDBC", "Authentication"],
    },
  ],
  [
    {
      title: "Databases & Tools",
      items: ["SQL", "MySQL", "MongoDB", "Firebase", "Git", "GitHub"],
    },
    {
      title: "Core Computer Science",
      items: [
        "OOP",
        "Data Structures & Algorithms",
        "DBMS",
        "Problem Solving",
        "Software Development",
      ],
    },
    {
      title: "AI & Development",
      items: [
        "Machine Learning",
        "Computer Vision",
        "YOLO Object Detection",
        "AI Integration",
        "IoT & ESP32",
      ],
    },
  ],
];

export default function Skills() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const circles = Array.from(
      stage.querySelectorAll(".skill-circle")
    );

    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;

        return (
          Math.sqrt(dx * dx + dy * dy) <
          p.size / 2 + size / 2 + 35
        );
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;

      let x;
      let y;
      let tries = 0;

      do {
        x = Math.random() * Math.max(0, rect.width - size - 20);
        y = Math.random() * Math.max(0, rect.height - size - 20);

        tries++;
      } while (
        isOverlapping(x, y, size) &&
        tries < 150
      );

      placed.push({
        x,
        y,
        size,
      });

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 80;
      const dy = (Math.random() - 0.5) * 80;

      circle.animate(
        [
          {
            transform: "translate(0, 0)",
          },
          {
            transform: `translate(${dx}px, ${dy}px)`,
          },
        ],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });

    return () => {
      circles.forEach((circle) => {
        circle.getAnimations().forEach((animation) => {
          animation.cancel();
        });
      });
    };
  }, []);

  return (
    <section className="skills-container" id="skills">

      {/* HEADER */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl text-cyan-400 font-semibold mb-3">
          My Skills
        </h2>

        <div className="w-28 h-[2px] bg-cyan-400 mx-auto mb-6"></div>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A combination of Java Full Stack development,
          backend technologies, databases, AI and problem-solving skills.
        </p>
      </motion.div>

      {/* FLOATING SKILLS */}
      <motion.div
        ref={stageRef}
        className="skills-stage relative mx-auto mb-20"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "550px",
          borderRadius: "25px",
          background:
            "radial-gradient(circle at 50% 50%, #0a0a0a, #101010)",
          overflow: "hidden",
          boxShadow:
            "inset 0 0 60px rgba(0,255,255,0.07)",
          position: "relative",
        }}
      >

        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-circle"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.25,
              boxShadow:
                "0 0 35px 10px rgba(0,255,255,0.45)",
              background:
                "rgba(0,255,255,0.12)",
              zIndex: 20,
            }}
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              position: "absolute",

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              background:
                "rgba(0,255,255,0.06)",

              border:
                "1px solid rgba(0,255,255,0.25)",

              backdropFilter: "blur(8px)",

              cursor: "pointer",

              transition:
                "box-shadow 0.4s ease, background 0.4s ease",

              zIndex: 2,
            }}
          >

            <motion.img
              src={skill.logo}
              alt={skill.name}
              loading="lazy"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
                marginBottom: "6px",
                filter:
                  "drop-shadow(0 0 8px rgba(0,255,255,0.35)) brightness(1.15)",
              }}
              whileHover={{
                rotate: [0, 6, -6, 0],
                filter:
                  "drop-shadow(0 0 12px rgba(0,255,255,0.9)) brightness(1.5)",
              }}
              transition={{
                duration: 0.5,
              }}
            />

            <span
              style={{
                color: "rgba(200,255,255,0.95)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.3px",
                textAlign: "center",
              }}
            >
              {skill.name}
            </span>

          </motion.div>
        ))}

      </motion.div>

      {/* SKILLS CATEGORIES */}
      <div className="skills-table">

        {ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="skills-row"
          >

            {row.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                className="skill-box"

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 0 25px rgba(0,255,200,0.12)",
                }}

                transition={{
                  duration: 0.6,
                  delay:
                    (rowIndex + columnIndex) * 0.1,
                }}
              >

                <h3>{column.title}</h3>

                <ul>
                  {column.items.map(
                    (item, index) => (
                      <motion.li
                        key={index}
                        whileHover={{
                          x: 6,
                          color: "#00ffc8",
                        }}
                      >
                        {item}
                      </motion.li>
                    )
                  )}
                </ul>

              </motion.div>
            ))}

          </div>
        ))}

      </div>

    </section>
  );
}