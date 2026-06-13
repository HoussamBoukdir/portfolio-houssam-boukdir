"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "Full-Stack Developer",
  "React.js Engineer",
  "Laravel Architect",
  "UI/UX Implementer",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < current.length) {
            setDisplayText(current.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(current.slice(0, charIndex - 1));
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="text-gradient font-display">
      {displayText}
      <span
        className="text-electric"
        style={{ animation: "blink 1s ease-in-out infinite" }}
      >
        |
      </span>
    </span>
  );
}

const orbitItems = [
  { label: "React", color: "#61DAFB", angle: 0 },
  { label: "Laravel", color: "#FF2D20", angle: 90 },
  { label: "MySQL", color: "#4479A1", angle: 180 },
  { label: "TypeScript", color: "#3178C6", angle: 270 },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden scan-container"
      id="home"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="scan-line" />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)",
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          x: mousePos.x * 80,
          y: mousePos.y * 80,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-px h-16 bg-gradient-to-b from-transparent via-electric/40 to-transparent" />
      <div className="absolute top-24 left-6 w-16 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
      <div className="absolute bottom-24 right-6 w-px h-16 bg-gradient-to-b from-transparent via-cyan/40 to-transparent" />
      <div className="absolute bottom-24 right-6 w-16 h-px bg-gradient-to-l from-transparent via-cyan/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-surface border border-border"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="font-mono text-xs text-ghost tracking-widest uppercase">
                Open to opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-display font-bold leading-none mb-4">
                <span className="block text-5xl md:text-7xl text-snow mb-2">
                  HOUSSAM
                </span>
                <span className="block text-5xl md:text-7xl text-gradient-white">
                  BOUKDIR
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl font-display font-medium mb-6 h-10 flex items-center"
            >
              <TypewriterText texts={ROLES} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-ghost text-base leading-relaxed mb-10 max-w-lg"
            >
              Crafting high-performance web applications with React.js and
              Laravel. Passionate about clean architecture, fluid user
              experiences, and shipping products that actually work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group relative clip-corner overflow-hidden bg-electric-gradient px-8 py-3.5 font-display font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-electric/30"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="clip-corner border border-electric/40 hover:border-electric/80 text-snow px-8 py-3.5 font-display font-medium text-sm tracking-wide transition-all duration-300 hover:bg-electric/10"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-8 pt-6 border-t border-border"
            >
              {[
                { value: "3+", label: "Projects Shipped" },
                { value: "2yr", label: "Development" },
                { value: "5+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-2xl text-snow">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-ghost mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center h-80 lg:h-auto"
          >
            {/* Orbit rings */}
            <div className="absolute w-72 h-72 rounded-full border border-electric/10 animate-spin-slow" />
            <div className="absolute w-96 h-96 rounded-full border border-cyan/5 animate-spin-reverse" />

            {/* Orbit dots */}
            <div className="absolute w-72 h-72 flex items-center justify-center">
              {orbitItems.map(({ label, color, angle }) => (
                <div
                  key={label}
                  className="absolute flex items-center"
                  style={{
                    transform: `rotate(${angle}deg) translateX(136px) rotate(-${angle}deg)`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full animate-pulse-slow"
                    style={{ backgroundColor: color }}
                  />
                  <span
                    className="ml-2 font-mono text-xs whitespace-nowrap opacity-70"
                    style={{ color }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Central avatar */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="absolute inset-0 rounded-full bg-electric/20 blur-2xl scale-110" />
              <div className="absolute inset-0 rounded-full bg-cyan/10 blur-3xl scale-125 animate-pulse-slow" />

              <div className="relative w-52 h-52 md:w-60 md:h-60">
                <div className="absolute inset-0 rounded-full p-0.5 bg-electric-gradient">
                  <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/houssam.jpg"
                      alt="Houssam Boukdir"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-electric" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-ghost/50 tracking-widest uppercase">
            scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-electric/50 to-transparent animate-pulse-slow" />
        </motion.div>
      </div>
    </section>
  );
}
