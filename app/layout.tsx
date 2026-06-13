import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Houssam Boukdir — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React.js, Laravel, TypeScript and modern web technologies. Based in Casablanca, Morocco.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-snow antialiased">
        {children}
      </body>
    </html>
  );
}
