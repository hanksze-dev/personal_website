"use client";

import { useEffect, useRef } from "react";
import { education } from "@/lib/data";

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

export default function Education() {
  const ref = useFadeIn();

  return (
    <section id="education" className="py-24 px-6 bg-surface" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Education</SectionLabel>

        <div className="mt-12 space-y-0">
          {education.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[220px_1fr] gap-0 md:gap-10 border-t border-border py-8 last:border-b"
            >
              <div className="mb-2 md:mb-0">
                <p className="font-mono text-xs tracking-widest text-gold uppercase">
                  {item.period}
                </p>
              </div>
              <div>
                <h3 className="font-sans text-base font-semibold text-foreground">
                  {item.school}
                </h3>
                <p className="font-sans text-sm text-muted mt-1">{item.degree}</p>
                {item.notes && (
                  <p className="font-mono text-xs text-muted/60 mt-2 tracking-wide">
                    {item.notes}
                  </p>
                )}
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
