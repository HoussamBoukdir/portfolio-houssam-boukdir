"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-electric-gradient rounded-sm rotate-45 opacity-70" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-xs z-10">
                HB
              </span>
            </div>
            <div>
              <p className="font-display font-semibold text-sm text-snow">Houssam Boukdir</p>
              <p className="font-mono text-xs text-ghost">Full-Stack Developer · Casablanca</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-xs text-ghost hover:text-snow transition-colors hover-underline"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/HoussamBoukdir"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-surface border border-border hover:border-electric/50 hover:bg-electric/10 transition-all duration-200 clip-corner-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-ghost hover:text-snow transition-colors">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/houssam-boukdir-082922343"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-surface border border-border hover:border-electric/50 hover:bg-electric/10 transition-all duration-200 clip-corner-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-ghost hover:text-snow transition-colors">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:boukdir.houssam166@gmail.com"
              className="w-9 h-9 flex items-center justify-center bg-surface border border-border hover:border-electric/50 hover:bg-electric/10 transition-all duration-200 clip-corner-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current text-ghost hover:text-snow transition-colors" strokeWidth={1.5}>
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-ghost/50">
            © {year} Houssam Boukdir. Built with Next.js & Framer Motion.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="font-mono text-xs text-ghost/50">Available for hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
