"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "Allo-Méchanic",
    subtitle: "Full-Stack Booking Platform",
    status: "Production",
    statusColor: "#00D4FF",
    problem:
      "Car owners in Morocco face frustration finding reliable mechanics with no transparent pricing or appointment system — calls go unanswered, quality is unpredictable.",
    solution:
      "Built a full-stack platform connecting car owners with verified mechanics. Users can browse profiles, book appointments, and track service status in real time.",
    result:
      "End-to-end CRUD operations with authenticated multi-role system. RESTful API consumed by a dynamic React frontend with live booking management.",
    tech: ["React.js", "Laravel", "REST API", "MySQL", "Sanctum", "Axios"],
    accentColor: "#6C63FF",
    gradientFrom: "rgba(108,99,255,0.15)",
    gradientTo: "rgba(0,212,255,0.08)",
    github: "https://github.com/HoussamBoukdir/allo-pechanic",
    highlights: ["Multi-role auth", "Real-time booking", "Mechanic profiles", "Service management"],
  },
  {
    id: "02",
    title: "Ashokai Restau",
    subtitle: "Sushi Restaurant Platform",
    status: "Case Study",
    statusColor: "#A78BFA",
    problem:
      "Traditional restaurant websites are static brochures. Customers can't explore the menu or make reservations without picking up the phone.",
    solution:
      "Designed an immersive sushi restaurant experience with dynamic menu browsing, reservation flow, and visual-first design capturing Japanese culinary culture.",
    result:
      "Polished, responsive frontend with smooth animations, interactive menu filtering, and a seamless reservation UX that elevates the brand.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "REST API"],
    accentColor: "#A78BFA",
    gradientFrom: "rgba(167,139,250,0.15)",
    gradientTo: "rgba(236,72,153,0.08)",
    github: "https://github.com/HoussamBoukdir",
    highlights: ["Interactive menu", "Reservation system", "Mobile-first", "Animation-driven UX"],
  },
  {
    id: "03",
    title: "Charity Platform",
    subtitle: "WordPress Nonprofit Solution",
    status: "Delivered",
    statusColor: "#34D399",
    problem:
      "A local nonprofit needed an accessible online presence to collect donations, showcase impact stories, and mobilize volunteers without a large technical budget.",
    solution:
      "Architected a custom WordPress solution with donation integration, volunteer sign-up forms, impact tracking, and SEO-optimized content structure.",
    result:
      "Full nonprofit digital presence — fast, easy to update by non-technical staff, and built to convert visitors into donors and volunteers.",
    tech: ["WordPress", "PHP", "CSS3", "JavaScript", "WooCommerce"],
    accentColor: "#34D399",
    gradientFrom: "rgba(52,211,153,0.12)",
    gradientTo: "rgba(20,184,166,0.08)",
    github: "https://github.com/HoussamBoukdir",
    highlights: ["Donation flow", "Volunteer portal", "CMS-managed", "SEO optimized"],
  },
  {
    id: "04",
    title: "FMDD Platform",
    subtitle: "Formation & Sustainable Dev",
    status: "Internship",
    statusColor: "#F59E0B",
    problem:
      "FMDD needed a modern web presence for their training programs — the existing solution was outdated, hard to navigate, and not mobile-responsive.",
    solution:
      "During my internship at FMDD, contributed to developing and improving their web platform using HTML, CSS, JavaScript and Laravel — modernizing the UI and improving performance.",
    result:
      "Delivered practical improvements to live company infrastructure during a 1-month professional internship, earning a Soft Skills Certificate upon completion.",
    tech: ["HTML5", "CSS3", "JavaScript", "Laravel", "PHP"],
    accentColor: "#F59E0B",
    gradientFrom: "rgba(245,158,11,0.12)",
    gradientTo: "rgba(249,115,22,0.08)",
    github: "https://github.com/HoussamBoukdir",
    highlights: ["Production code", "Team workflow", "Responsive redesign", "Live deployment"],
  },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={2}>
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative bg-surface border clip-corner overflow-hidden transition-all duration-500"
        style={{
          borderColor: hovered
            ? `${project.accentColor}60`
            : "rgba(30,30,46,1)",
          boxShadow: hovered
            ? `0 20px 60px ${project.accentColor}18`
            : "none",
        }}
      >
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top left, ${project.gradientFrom}, ${project.gradientTo}, transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        <div className="relative z-10 p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: project.accentColor }}
                >
                  {project.id}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase border"
                  style={{
                    color: project.statusColor,
                    borderColor: `${project.statusColor}40`,
                    backgroundColor: `${project.statusColor}12`,
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: project.statusColor }}
                  />
                  {project.status}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-snow">
                {project.title}
              </h3>
              <p className="font-body text-sm mt-1" style={{ color: project.accentColor }}>
                {project.subtitle}
              </p>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 px-3 py-2 border border-border hover:border-snow/40 clip-corner-sm transition-all duration-200 shrink-0"
            >
              <span className="text-ghost group-hover/btn:text-snow transition-colors">
                <GitHubIcon />
              </span>
              <span className="font-mono text-xs text-ghost group-hover/btn:text-snow transition-colors">
                Code
              </span>
            </a>
          </div>

          {/* Case study */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { label: "Problem", text: project.problem, icon: "⚠" },
              { label: "Solution", text: project.solution, icon: "💡" },
              { label: "Result", text: project.result, icon: "✓" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-mono text-xs text-ghost tracking-widest uppercase">
                    {item.label}
                  </span>
                </div>
                <p className="font-body text-xs text-ghost leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="font-mono text-xs px-3 py-1 rounded-sm border"
                style={{
                  color: project.accentColor,
                  backgroundColor: `${project.accentColor}12`,
                  borderColor: `${project.accentColor}30`,
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Tech */}
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <span className="font-mono text-xs text-ghost/60 tracking-widest uppercase shrink-0">
              Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-silver px-2 py-0.5 bg-muted/50 border border-border rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-electric text-sm tracking-widest">03</span>
          <div className="h-px w-14 bg-electric/40" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-snow">Projects</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-ghost text-base mb-14 ml-16"
        >
          Each project as a case study — problem, solution, and outcome.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
