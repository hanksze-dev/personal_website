"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="max-w-5xl mx-auto w-full" ref={containerRef}>
        {/* Overline label */}
        <p className="font-mono text-xs tracking-widest text-gold uppercase mb-6">
          Product Manager · Stanford GSB · San Francisco
        </p>

        {/* Name — italic serif */}
        <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl leading-[1.05] text-foreground mb-8">
          {siteConfig.name}
        </h1>

        {/* Tagline */}
        <p className="font-sans text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-12">
          {siteConfig.tagline}
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href={siteConfig.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Resume PDF
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="cta-ghost"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
