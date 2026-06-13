"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: "⚡",
    title: "Fast Learner",
    desc: "Picked up React, Laravel, and TypeScript through intensive self-study and hands-on projects",
  },
  {
    icon: "⚽",
    title: "Team Player",
    desc: "Football mindset — collaboration, communication and shared goals drive better outcomes",
  },
  {
    icon: "🎯",
    title: "Precision-Oriented",
    desc: "2nd place in a drawing competition reflects my eye for detail and commitment to craft",
  },
  {
    icon: "🌍",
    title: "Multilingual",
    desc: "Native Arabic, professional French, and intermediate English — ready for international teams",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-electric/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-electric text-sm tracking-widest">01</span>
          <div className="h-px w-14 bg-electric/40" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-snow">About</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-sm">
              <div className="absolute -inset-4 border border-border clip-corner opacity-40" />
              <div className="absolute -inset-8 border border-electric/10 clip-corner" />

              <div className="relative h-full clip-corner overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/houssam.jpg"
                  alt="Houssam Boukdir"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display font-bold text-xl text-snow">Houssam Boukdir</p>
                  <p className="font-mono text-electric text-sm mt-1">Full-Stack Developer</p>
                  <p className="font-body text-ghost text-xs mt-1">📍 Casablanca, Morocco</p>
                </div>
              </div>

              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-electric" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-surface border border-border clip-corner-sm p-4 max-w-[190px]"
            >
              <p className="font-mono text-xs text-ghost mb-1">Currently</p>
              <p className="font-display font-semibold text-sm text-snow">ISFO — Full-Stack</p>
              <p className="font-body text-xs text-ghost mt-0.5">2024 – 2026 · In Progress</p>
              <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "75%" } : {}}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="h-full bg-electric-gradient rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-display font-bold text-2xl text-snow mb-6">
              Building the web,{" "}
              <span className="text-gradient">one line at a time.</span>
            </h3>

            <div className="space-y-4 mb-10">
              <p className="font-body text-ghost leading-relaxed">
                I&apos;m a motivated Full-Stack developer from Casablanca,
                specializing in{" "}
                <span className="text-silver font-medium">React.js and Laravel</span>.
                I build end-to-end web applications — from architecting REST APIs
                to crafting pixel-perfect interfaces.
              </p>
              <p className="font-body text-ghost leading-relaxed">
                Currently completing my Technicien Spécialisé Full-Stack diploma
                at ISFO, I&apos;ve already shipped real-world projects including a
                mechanic booking platform and various full-stack applications. I
                thrive in{" "}
                <span className="text-silver font-medium">
                  collaborative, fast-paced environments
                </span>{" "}
                — the same way I play football.
              </p>
              <p className="font-body text-ghost leading-relaxed">
                My internship at FMDD gave me hands-on exposure to professional
                workflows, and I came back with a Soft Skills Certificate and a
                hunger for the next challenge.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="p-4 bg-surface border border-border hover:border-electric/40 clip-corner-sm transition-all duration-300 card-hover"
                >
                  <span className="text-xl block mb-2">{item.icon}</span>
                  <p className="font-display font-semibold text-sm text-snow mb-1">{item.title}</p>
                  <p className="font-body text-xs text-ghost leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
