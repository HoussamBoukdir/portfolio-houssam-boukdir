"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    title: "Web Development Intern",
    org: "FMDD – Formation & Management du Développement Durable",
    location: "Casablanca, Morocco",
    date: "March 2026 · 1 Month",
    color: "#6C63FF",
    icon: "💼",
    description:
      "Applied full-stack web development skills in a professional environment. Worked on real web tasks using HTML, CSS, JavaScript and Laravel fundamentals. Collaborated with team members, met deadlines, and operated within professional workflows.",
    achievements: [
      "Shipped improvements to live company web infrastructure",
      "Collaborated with cross-functional team on time-sensitive deliverables",
      "Earned Soft Skills Certificate upon completion",
    ],
  },
  {
    title: "Retail Sales Associate & Customer Advisor",
    org: "Magasin de proximité",
    location: "Casablanca, Morocco",
    date: "Before 2024 · Practical Experience",
    color: "#00D4FF",
    icon: "🏪",
    description:
      "Daily customer interaction building strong advising and communication skills. Managed product stock, handled cash transactions, and maintained store organization.",
    achievements: [
      "Developed active listening and customer satisfaction mindset",
      "Managed inventory and cash operations independently",
      "Built confidence in high-pressure, people-facing situations",
    ],
  },
];

const education = [
  {
    degree: "Technicien Spécialisé Full-Stack",
    school: "ISFO – Institut Spécialisé de Formation de l'Offshoring",
    location: "Casablanca, Morocco",
    date: "2024 – 2026 · In Progress",
    color: "#A78BFA",
    icon: "🎓",
    subjects: ["React.js", "Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS", "Git", "UML", "Algorithmique"],
    progress: 75,
  },
  {
    degree: "Baccalauréat Scientifique – SVT",
    school: "Lycée Omar El Farouk",
    location: "Casablanca, Morocco",
    date: "2023 – 2024",
    color: "#34D399",
    icon: "📚",
    subjects: ["Sciences", "Mathematics", "Physics"],
    progress: 100,
  },
];

const certifications = [
  {
    title: "Soft Skills Certificate",
    issuer: "FMDD, Casablanca",
    date: "March 2026",
    icon: "🏆",
    color: "#6C63FF",
  },
  {
    title: "2nd Place — Drawing Competition",
    issuer: "Centre du Dessin, Casablanca",
    date: "Achievement",
    icon: "🎨",
    color: "#F59E0B",
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink/20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-electric/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-electric text-sm tracking-widest">04</span>
          <div className="h-px w-14 bg-electric/40" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-snow">Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs text-ghost tracking-widest uppercase mb-8"
            >
              Work History
            </motion.p>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                    className="relative pl-12"
                  >
                    <div
                      className="absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm"
                      style={{
                        borderColor: item.color,
                        backgroundColor: `${item.color}18`,
                      }}
                    >
                      {item.icon}
                    </div>

                    <div className="bg-surface border border-border clip-corner p-5 hover:border-electric/30 transition-all duration-300 card-hover">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-display font-semibold text-snow text-base">
                            {item.title}
                          </h3>
                          <p className="font-body text-sm mt-0.5" style={{ color: item.color }}>
                            {item.org}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-ghost px-2.5 py-1 bg-muted rounded-sm shrink-0">
                          {item.date}
                        </span>
                      </div>

                      <p className="font-body text-sm text-ghost leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <ul className="space-y-1.5">
                        {item.achievements.map((a) => (
                          <li key={a} className="flex items-start gap-2">
                            <span
                              className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="font-body text-xs text-ghost">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education + Certs */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs text-ghost tracking-widest uppercase mb-8"
            >
              Education
            </motion.p>

            <div className="space-y-6 mb-12">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                  className="bg-surface border border-border clip-corner p-6 hover:border-electric/30 transition-all duration-300 card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                      style={{ backgroundColor: `${edu.color}20` }}
                    >
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-snow text-sm leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="font-body text-sm mt-1" style={{ color: edu.color }}>
                        {edu.school}
                      </p>
                      <p className="font-mono text-xs text-ghost mt-1">{edu.date}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono text-xs text-ghost/60">Progress</span>
                      <span className="font-mono text-xs" style={{ color: edu.color }}>
                        {edu.progress}%
                      </span>
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${edu.progress}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: edu.color }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-xs px-2 py-1 bg-muted/50 border border-border text-ghost rounded-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="font-mono text-xs text-ghost tracking-widest uppercase mb-5"
            >
              Certifications & Achievements
            </motion.p>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-surface border border-border clip-corner-sm hover:border-electric/30 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-sm text-snow">{cert.title}</p>
                    <p className="font-body text-xs text-ghost mt-0.5">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: cert.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
