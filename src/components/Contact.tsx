"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/data";

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

export default function Contact() {
  const ref = useFadeIn();

  return (
    <section id="contact" className="py-24 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Contact</SectionLabel>

        <div className="mt-12 max-w-xl">
          <p className="font-sans text-lg text-muted leading-relaxed mb-10">
            Open to PM internship opportunities at AI-native startups for Summer 2026.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-widest text-gold uppercase w-16">Email</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-sans text-sm text-foreground hover:text-gold transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-widest text-gold uppercase w-16">Phone</span>
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-sans text-sm text-foreground hover:text-gold transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-widest text-gold uppercase w-16">LinkedIn</span>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-foreground hover:text-gold transition-colors"
              >
                {/* TODO: update display text if you use a custom short URL */}
                linkedin.com/in/hanksze
              </a>
            </div>
          </div>
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
