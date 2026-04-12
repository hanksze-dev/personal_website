"use client";

import { useEffect, useRef } from "react";
import { skillGroups } from "@/lib/data";

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

export default function Skills() {
  const ref = useFadeIn();

  return (
    <section id="skills" className="py-24 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>

        <div className="mt-12 grid sm:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <div key={i}>
              <p className="font-mono text-xs tracking-widest text-gold uppercase mb-5">
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.skills.map((skill, j) => (
                  <li key={j} className="font-sans text-sm text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
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
