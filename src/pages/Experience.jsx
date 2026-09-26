import React from "react";

export default function Experience() {
  const experiences = [
    {
      type: "Teaching Experience",
      role: "Science & Mathematics Teacher",
      organization: "Regional English School",
      period: "Jul 2025 – Present",
      description:
        "Teaching Science and Mathematics to Classes 8, 9 and State Board Class 10 students while developing communication, confidence, classroom management and leadership skills.",
      skills: [
        "Teaching",
        "Communication",
        "Leadership",
        "Mathematics",
        "Science",
        "Classroom Management",
      ],
    },

    {
      type: "Teaching Experience",
      role: "Science & Mathematics Teacher",
      organization: "Vikasa Vidya Samste",
      period: "Jul 2024 – Apr 2025",
      description:
        "Taught Science and Mathematics to Classes 5–7, focusing on clear explanations, student engagement, problem solving and effective communication.",
      skills: [
        "Teaching",
        "Communication",
        "Problem Solving",
        "Science",
        "Mathematics",
      ],
    },

    {
      type: "Internship",
      role: "Full Stack Web Development Intern",
      organization: "Future Interns",
      period: "Nov 2025 – Dec 2025",
      description:
        "Worked on full-stack web development tasks and gained practical experience in building and improving web applications.",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Full Stack Development",
      ],
    },

    {
      type: "Internship",
      role: "Full Stack Web Development Intern",
      organization: "Vault of Codes / AICTE",
      period: "Aug 2026 – Sep 2026",
      description:
        "Worked on full-stack development projects and strengthened practical skills in modern web development, project implementation and deployment.",
      skills: [
        "React",
        "JavaScript",
        "Full Stack",
        "Web Development",
        "GitHub",
      ],
    },
  ];

  return (
    <section className="experience-page">

      <div className="experience-header">
        <span className="section-label">
          MY EXPERIENCE
        </span>

        <h1>Experience & Growth</h1>

        <p>
          My journey through teaching, internships, software development,
          and continuous learning.
        </p>
      </div>

      <div className="experience-container">

        {experiences.map((experience, index) => (
          <div
            className="experience-item"
            key={`${experience.organization}-${index}`}
          >

            <div className="timeline">

              <div className="timeline-dot">
                {index + 1}
              </div>

              {index !== experiences.length - 1 && (
                <div className="timeline-line" />
              )}

            </div>

            <article className="experience-card">

              <div className="experience-top">

                <div>
                  <span className="experience-type">
                    {experience.type}
                  </span>

                  <h2>{experience.role}</h2>

                  <h3>{experience.organization}</h3>
                </div>

                <span className="experience-period">
                  {experience.period}
                </span>

              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="experience-skills">
                {experience.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </article>

          </div>
        ))}

      </div>

      <div className="experience-highlight">

        <div className="highlight-icon">
          ✦
        </div>

        <div>
          <h2>
            What I gained beyond technical skills
          </h2>

          <p>
            Teaching has strengthened my ability to communicate complex
            ideas clearly, work with different people, manage responsibilities,
            and lead with confidence. I now bring these skills into software
            development and team-based projects.
          </p>
        </div>

      </div>

      <style>{`

        .experience-page {
          min-height: 100vh;
          background: #070b12;
          color: #ffffff;
          padding: 110px 7% 80px;
        }

        .experience-header {
          max-width: 850px;
          margin: 0 auto 70px;
          text-align: center;
        }

        .section-label {
          display: inline-block;
          color: #00ffc8;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          margin-bottom: 18px;
        }

        .experience-header h1 {
          margin: 0;
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .experience-header p {
          margin: 20px auto 0;
          max-width: 700px;
          color: rgba(255,255,255,0.58);
          line-height: 1.8;
        }

        .experience-container {
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
        }

        .experience-item {
          display: grid;
          grid-template-columns: 55px 1fr;
          gap: 25px;
        }

        .timeline {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .timeline-dot {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(0,255,200,0.4);
          background: rgba(0,255,200,0.08);
          color: #00ffc8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          z-index: 2;
        }

        .timeline-line {
          position: absolute;
          top: 38px;
          width: 1px;
          height: calc(100% + 25px);
          background: linear-gradient(
            to bottom,
            rgba(0,255,200,0.35),
            rgba(255,255,255,0.04)
          );
        }

        .experience-card {
          margin-bottom: 35px;
          padding: 30px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          background: linear-gradient(
            145deg,
            rgba(255,255,255,0.045),
            rgba(255,255,255,0.015)
          );
          box-shadow: 0 15px 45px rgba(0,0,0,0.25);
          transition: 0.3s ease;
        }

        .experience-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0,255,200,0.28);
        }

        .experience-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 25px;
        }

        .experience-type {
          display: inline-block;
          color: #00ffc8;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .experience-card h2 {
          margin: 0;
          font-size: 1.35rem;
        }

        .experience-card h3 {
          margin: 8px 0 0;
          color: rgba(255,255,255,0.55);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .experience-period {
          white-space: nowrap;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.65);
          font-size: 0.72rem;
        }

        .experience-description {
          margin: 22px 0;
          color: rgba(255,255,255,0.58);
          line-height: 1.75;
          font-size: 0.92rem;
        }

        .experience-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .experience-skills span {
          padding: 7px 11px;
          border-radius: 8px;
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.62);
          font-size: 0.72rem;
        }

        .experience-highlight {
          max-width: 1050px;
          margin: 45px auto 0;
          padding: 28px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          border-radius: 18px;
          border: 1px solid rgba(0,255,200,0.12);
          background: rgba(0,255,200,0.025);
        }

        .highlight-icon {
          min-width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00ffc8;
          background: rgba(0,255,200,0.08);
        }

        .experience-highlight h2 {
          margin: 0 0 8px;
          font-size: 1.05rem;
        }

        .experience-highlight p {
          margin: 0;
          color: rgba(255,255,255,0.52);
          line-height: 1.7;
          font-size: 0.88rem;
        }

        @media (max-width: 700px) {

          .experience-page {
            padding: 90px 5% 60px;
          }

          .experience-item {
            grid-template-columns: 35px 1fr;
            gap: 12px;
          }

          .timeline-dot {
            width: 30px;
            height: 30px;
          }

          .timeline-line {
            top: 30px;
          }

          .experience-card {
            padding: 22px;
          }

          .experience-top {
            flex-direction: column;
            gap: 15px;
          }

          .experience-period {
            white-space: normal;
          }

          .experience-highlight {
            flex-direction: column;
          }
        }

      `}</style>

    </section>
  );
}