import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactLinks = [
    {
      icon: "/github.png",
      title: "GitHub",
      text: "View my projects and code",
      link: "https://github.com/siddeshds200547-spec",
    },
    {
      icon: "/linkedin.png",
      title: "LinkedIn",
      text: "Connect with me professionally",
      link: "https://www.linkedin.com/in/siddesh-ds-520a54379/",
    },
    {
      icon: "/gmail.png",
      title: "Email",
      text: "Send me an email",
      link: "mailto:siddeshds200547@gmail.com",
    },
    {
      icon: "/whatsapp.png",
      title: "WhatsApp",
      text: "Chat with me directly",
      link: "https://wa.me/919535389863",
    },
    {
      icon: "/insta.png",
      title: "Instagram",
      text: "Follow my journey",
      link: "https://www.instagram.com/siddu_ds_siddu/",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "5rem 2rem",
        background:
          "radial-gradient(circle at 30% 20%, rgba(0,255,200,0.08), transparent 45%), #050505",
        color: "#fff",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "0.85rem",
          }}
        >
          Get In Touch
        </p>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            margin: "0.5rem 0 1rem",
            background:
              "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let's Connect
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.8,
          }}
        >
          I'm open to internship opportunities, software development roles,
          collaborations, technical projects and interesting conversations
          around technology.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "3rem auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.2rem",
        }}
      >
        {contactLinks.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.link}
            target={item.title === "Email" ? "_self" : "_blank"}
            rel={
              item.title === "Email"
                ? undefined
                : "noopener noreferrer"
            }
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -7,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "1.5rem",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.045)",
              border: "1px solid rgba(255,255,255,0.09)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <img
              src={item.icon}
              alt={`${item.title} icon`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />

            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  color: "var(--accent)",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: "5px 0 0",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.88rem",
                }}
              >
                {item.text}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Developer Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        style={{
          maxWidth: "1000px",
          margin: "3rem auto 0",
          padding: "2rem",
          textAlign: "center",
          borderRadius: "18px",
          background: "rgba(255,255,255,0.035)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
          }}
        >
          Looking for a Developer?
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: "650px",
            margin: "0 auto 1.5rem",
          }}
        >
          If you're looking for someone interested in Java development,
          full-stack development, backend systems, AI/ML projects or
          collaborative software projects, feel free to reach out.
        </p>

        <motion.a
          href="mailto:siddeshds200547@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            padding: "0.8rem 1.5rem",
            borderRadius: "9px",
            background: "var(--accent)",
            color: "#050505",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Send Me an Email
        </motion.a>
      </motion.div>

      {/* Footer */}
      <p
        style={{
          textAlign: "center",
          marginTop: "3rem",
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.85rem",
        }}
      >
        © {new Date().getFullYear()} Siddesh D S · Open to opportunities
      </p>
    </section>
  );
}