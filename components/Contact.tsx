"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactItems = [
  {
    icon: "📧",
    label: "Email",
    value: "boukdir.houssam166@gmail.com",
    href: "mailto:boukdir.houssam166@gmail.com",
    color: "#6C63FF",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+212 632 47 77 77",
    href: "tel:+212632477777",
    color: "#00D4FF",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "houssam-boukdir-082922343",
    href: "https://linkedin.com/in/houssam-boukdir-082922343",
    color: "#A78BFA",
  },
  {
    icon: "⌨️",
    label: "GitHub",
    value: "HoussamBoukdir",
    href: "https://github.com/HoussamBoukdir",
    color: "#34D399",
  },
];

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 fill-none stroke-current"
      strokeWidth={2}
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section ref={ref} id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink/40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-electric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-electric text-sm tracking-widest">05</span>
          <div className="h-px w-14 bg-electric/40" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-snow">Contact</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body text-ghost text-base mb-16 ml-16"
        >
          Open to full-time roles, internships, and freelance projects. Let&apos;s build something remarkable together.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-display font-semibold text-xl text-snow mb-8">
              Let&apos;s talk <span className="text-gradient">→</span>
            </h3>

            <div className="space-y-4 mb-10">
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group flex items-center gap-4 p-4 bg-surface border border-border clip-corner-sm hover:border-electric/40 transition-all duration-300 card-hover"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-xs text-ghost uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <p
                      className="font-body text-sm truncate group-hover:text-snow transition-colors"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </p>
                  </div>
                  <span className="text-ghost group-hover:text-snow opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    <ArrowUpRight />
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="p-4 bg-surface/50 border border-border clip-corner-sm"
            >
              <p className="font-mono text-xs text-ghost uppercase tracking-widest mb-2">
                Based In
              </p>
              <p className="font-display font-semibold text-snow">Casablanca, Morocco</p>
              <p className="font-body text-xs text-ghost mt-1">
                Available for remote work worldwide · On-site in Morocco
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-surface border border-electric/30 clip-corner"
              >
                <div className="w-16 h-16 rounded-full bg-electric/20 flex items-center justify-center text-3xl mb-6">
                  ✓
                </div>
                <h3 className="font-display font-bold text-2xl text-snow mb-3">
                  Message sent!
                </h3>
                <p className="font-body text-ghost text-sm leading-relaxed">
                  Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormState({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-8 font-mono text-sm text-electric hover:text-snow transition-colors hover-underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label className="block font-mono text-xs text-ghost uppercase tracking-widest mb-2">
                        {field}
                        <span className="text-electric ml-1">*</span>
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formState[field]}
                        onChange={handleChange}
                        required
                        placeholder={field === "email" ? "you@company.com" : "Your name"}
                        className="w-full bg-surface border border-border clip-corner-sm px-4 py-3 font-body text-sm text-snow placeholder:text-ghost/40 focus:outline-none focus:border-electric/60 transition-all duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block font-mono text-xs text-ghost uppercase tracking-widest mb-2">
                    Subject <span className="text-electric">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's on your mind?"
                    className="w-full bg-surface border border-border clip-corner-sm px-4 py-3 font-body text-sm text-snow placeholder:text-ghost/40 focus:outline-none focus:border-electric/60 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-ghost uppercase tracking-widest mb-2">
                    Message <span className="text-electric">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    className="w-full bg-surface border border-border clip-corner-sm px-4 py-3 font-body text-sm text-snow placeholder:text-ghost/40 focus:outline-none focus:border-electric/60 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative w-full clip-corner bg-electric-gradient px-8 py-4 font-display font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-electric/30 disabled:opacity-60 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-none stroke-current group-hover:translate-x-1 transition-transform"
                          strokeWidth={2}
                        >
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
