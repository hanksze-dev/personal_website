"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/lib/data";

function useFadeIn() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Projects() {
  const ref = useFadeIn();

  return (
    <section id="projects" className="py-24 px-6 bg-surface" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Projects &amp; Ventures</SectionLabel>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group border border-border rounded-sm p-6 hover:border-gold transition-colors duration-300 bg-background"
            >
              <p className="font-mono text-[10px] tracking-widest text-gold uppercase mb-3">
                {p.badge}
              </p>
              <h3 className="font-sans text-base font-semibold text-foreground mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs tracking-widest text-gold uppercase">{children}</span>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}
