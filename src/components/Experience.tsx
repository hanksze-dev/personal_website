"use client";

import { useEffect, useRef } from "react";
import { experience, ExperienceItem } from "@/lib/data";

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
      { threshold: 0.05 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Experience() {
  const ref = useFadeIn();

  return (
    <section
      id="experience"
      className="py-24 px-6"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-16">
          Selected work
        </h2>

        <div>
          {experience.map((item, i) => (
            <WorkRow key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkRow({ item }: { item: ExperienceItem }) {
  const hasImage = !!(item.heroImages?.length || item.spotlight?.imageUrl);

  return (
    <div className="border-t border-border py-16 grid md:grid-cols-[5fr_6fr] gap-10 md:gap-16 items-start last:border-b">
      {/* Left: visual */}
      <div className="w-full">
        {item.heroImages?.length ? (
          <PhoneHero images={item.heroImages} />
        ) : item.spotlight?.imageUrl ? (
          <SingleImage item={item} src={item.spotlight.imageUrl} />
        ) : (
          <StatVisual item={item} />
        )}
      </div>

      {/* Right: text */}
      <div className="flex flex-col gap-5">
        <p className="font-sans text-sm text-muted">
          <span className="font-semibold text-foreground">{item.role}</span>
          {", "}
          {item.company}
          {", "}
          {item.period}
        </p>

        <h3 className="font-serif text-3xl sm:text-4xl text-foreground leading-snug">
          {item.product}
        </h3>

        <p className="font-sans text-base text-muted leading-relaxed">
          {item.summary}
        </p>

        {/* Metrics — only show here when there's an image on the left */}
        {hasImage && (
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-1">
            {item.metrics.map((m, j) => (
              <div key={j} className="flex flex-col">
                <span className="font-serif text-2xl text-foreground leading-none">
                  {m.value}
                </span>
                <span className="font-sans text-xs text-muted mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {item.spotlight?.productUrl && (
          <a
            href={item.spotlight.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-foreground underline underline-offset-4 hover:text-gold transition-colors w-fit mt-1"
          >
            {item.spotlight.productLabel ?? "Learn more →"}
          </a>
        )}

        {item.spotlight?.quote && (
          <blockquote className="border-l-2 border-border pl-4 mt-2">
            <p className="font-sans text-sm text-muted italic leading-relaxed">
              &ldquo;{item.spotlight.quote}&rdquo;
            </p>
            {item.spotlight.quoteAuthor && (
              <cite className="font-sans text-xs text-muted not-italic mt-2 block">
                — {item.spotlight.quoteAuthor}
              </cite>
            )}
          </blockquote>
        )}
      </div>
    </div>
  );
}

/* Two phone screenshots rising from bottom */
function PhoneHero({ images }: { images: string[] }) {
  const [img1, img2] = images;
  return (
    <div className="relative flex items-end justify-center gap-3 bg-surface rounded-sm overflow-hidden px-6 pt-8 pb-0 min-h-[340px]">
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent z-10" />
      <div className="w-[46%] rounded-t-2xl overflow-hidden shadow-md border border-border/60 translate-y-2">
        <img src={img1} alt="" className="w-full object-cover object-top" />
      </div>
      <div className="w-[46%] rounded-t-2xl overflow-hidden shadow-md border border-border/60 -translate-y-2">
        <img src={img2} alt="" className="w-full object-cover object-top" />
      </div>
    </div>
  );
}

/* Single product screenshot */
function SingleImage({ item, src }: { item: ExperienceItem; src: string }) {
  return (
    <div className="overflow-hidden rounded-sm bg-surface">
      <img
        src={src}
        alt={item.spotlight?.imageAlt ?? item.product}
        className="w-full object-cover object-top"
      />
    </div>
  );
}

/* For entries with no image — large editorial stat display */
function StatVisual({ item }: { item: ExperienceItem }) {
  const primary = item.metrics[0];
  const rest = item.metrics.slice(1);
  return (
    <div className="bg-surface rounded-sm p-8 min-h-[220px] flex flex-col justify-between">
      <p className="font-sans text-xs text-muted uppercase tracking-widest">
        {item.company}
      </p>
      <div>
        <div className="font-serif text-7xl text-foreground leading-none mb-1">
          {primary.value}
        </div>
        <div className="font-sans text-sm text-muted mb-6">{primary.label}</div>
        <div className="flex gap-6">
          {rest.map((m, i) => (
            <div key={i}>
              <div className="font-serif text-2xl text-foreground leading-none">{m.value}</div>
              <div className="font-sans text-xs text-muted mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
