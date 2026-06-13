"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    color: "#6C63FF",
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript ES6+", level: 88 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "Backend & API",
    color: "#00D4FF",
    skills: [
      { name: "Laravel (MVC)", level: 82 },
      { name: "PHP", level: 80 },
      { name: "RESTful API Design", level: 80 },
      { name: "Eloquent ORM", level: 78 },
      { name: "Sanctum Auth", level: 75 },
      { name: "Python", level: 60 },
    ],
  },
  {
    category: "Data & Tools",
    color: "#A78BFA",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Git / GitHub / GitLab", level: 85 },
      { name: "UML", level: 72 },
      { name: "Database Design", level: 78 },
      { name: "VS Code", level: 95 },
      { name: "Agile Basics", level: 65 },
    ],
  },
];

const conceptTags = [
  "SPA Architecture",
  "MVC Pattern",
  "Full-Stack Development",
  "Responsive Design",
  "CRUD Operations",
  "Axios / HTTP",
  "React Router",
  "useState / useEffect",
  "Component Design",
  "Query Optimization",
  "API Integration",
  "Version Control",
];

function SkillBar({
  name,
  level,
  color,
  index,
  isInView,
}: {
  name: string;
  level: number;
  color: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm text-silver group-hover:text-snow transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs text-ghost">{level}%</span>
      </div>
      <div className="h-1 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.06, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-electric text-sm tracking-widest">02</span>
          <div className="h-px w-14 bg-electric/40" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-snow">Skills</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="bg-surface border border-border clip-corner p-6 hover:border-electric/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <span
                  className="font-display font-semibold text-sm tracking-wide"
                  style={{ color: group.color }}
                >
                  {group.category}
                </span>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    index={si}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="font-mono text-xs text-ghost tracking-widest uppercase mb-5">
            Concepts & Methodologies
          </p>
          <div className="flex flex-wrap gap-3">
            {conceptTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
                className="clip-corner-sm px-4 py-2 bg-muted/50 border border-border hover:border-electric/40 hover:bg-electric/10 font-mono text-xs text-ghost hover:text-electric transition-all duration-200 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
