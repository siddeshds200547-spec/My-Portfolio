import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import "../CSS/projects.css";

const PROJECTS = [
  {
    id: 1,
    title: "Agri AI",
    category: "Final Year Project",
    description:
      "An AI-powered smart farming platform designed to help farmers with smart irrigation, crop analysis, soil recommendations, and practical agricultural decision-making.",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "MongoDB",
      "AI",
      "IoT",
    ],
    github: "https://github.com/siddeshds200547-spec",
    live: null,
    status: "In Development",
    icon: "🌱",
  },

  {
    id: 2,
    title: "YOLO Object Detection",
    category: "Computer Vision",
    description:
      "A computer vision application using YOLO for object detection with a deployed web interface. The project demonstrates real-time image processing and AI-based object recognition.",
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "ONNX Runtime",
      "FastAPI",
    ],
    github:
      "https://github.com/siddeshds200547-spec/yolo-object-detection",
    live: null,
    status: "Completed",
    icon: "🤖",
  },

  {
    id: 3,
    title: "Hackathon YOLO Project",
    category: "AI / Hackathon",
    description:
      "A deployed AI computer-vision project developed for a hackathon, featuring YOLO-based image detection and a web interface for uploading images and viewing detection results.",
    technologies: [
      "Python",
      "YOLO",
      "FastAPI",
      "ONNX Runtime",
      "Computer Vision",
    ],
    github:
      "https://github.com/siddeshds200547-spec/Hackathon-YOLO-Project",
    live: "https://hackathon-yolo-project.onrender.com/",
    status: "Live",
    icon: "🚀",
  },

  {
    id: 4,
    title: "E-Commerce Mini Project",
    category: "Full Stack Web",
    description:
      "A responsive e-commerce web application focused on product browsing, user-friendly interfaces, and modern frontend development practices.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github:
      "https://github.com/siddeshds200547-spec/FUTURE_FS_02",
    live: null,
    status: "Completed",
    icon: "🛒",
  },

  {
    id: 5,
    title: "Website Builder Platform",
    category: "Web Development",
    description:
      "A web-based platform concept for creating and managing websites with a modern developer-focused interface and reusable UI components.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/siddeshds200547-spec",
    live: null,
    status: "Development",
    icon: "🧩",
  },

  {
    id: 6,
    title: "Personal Portfolio Website",
    category: "Portfolio",
    description:
      "My latest developer portfolio showcasing my skills, projects, certificates, achievements, teaching experience, gallery, blog, resume, and professional contact options.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "CSS",
      "Framer Motion",
    ],
    github:
      "https://github.com/siddeshds200547-spec/My-Portfolio",
    live:
      "https://siddesh-portfoli0.netlify.app/",
    status: "Live",
    icon: "💻",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
    >
      {/* Top */}
      <div className="project-card-top">
        <div className="project-icon">{project.icon}</div>

        <span
          className={`project-status ${
            project.status === "Live"
              ? "live"
              : project.status === "In Development" ||
                project.status === "Development"
              ? "development"
              : ""
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Category */}
      <p className="project-category">{project.category}</p>

      {/* Title */}
      <h3>{project.title}</h3>

      {/* Description */}
      <p className="project-description">{project.description}</p>

      {/* Technologies */}
      <div className="project-tech">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {/* Buttons */}
      <div className="project-actions">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn github-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Github size={17} />
            GitHub
          </motion.a>
        )}

        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn live-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <ExternalLink size={17} />
            Live Project
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="projects-heading-icon">
            <FolderGit2 size={22} />
          </div>

          <p className="projects-eyebrow">
            MY WORK
          </p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <div className="projects-line"></div>

          <p className="projects-subtitle">
            A selection of projects I have built while exploring software
            development, AI, computer vision, full-stack development, and
            real-world problem solving.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
