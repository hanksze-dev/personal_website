"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/lib/data";

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

export default function Experience() {
  const ref = useFadeIn();

  return (
    <section id="experience" className="py-24 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>

        <div className="mt-12 space-y-0">
          {experience.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[220px_1fr] gap-0 md:gap-10 border-t border-border py-10 last:border-b"
            >
              {/* Left: date + company */}
              <div className="mb-4 md:mb-0">
                <p className="font-mono text-xs tracking-widest text-gold uppercase mb-1">
                  {item.period}
                </p>
                <p className="font-mono text-sm text-foreground font-semibold">
                  {item.company}
                </p>
                {item.location && (
                  <p className="font-mono text-xs text-muted mt-0.5">{item.location}</p>
                )}
              </div>

              {/* Right: role + bullets */}
              <div>
                <h3 className="font-sans text-lg font-medium text-foreground mb-4">
                  {item.role}
                </h3>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-gold mt-1.5 shrink-0 text-xs">▸</span>
                      <span className="font-sans text-sm text-muted leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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
