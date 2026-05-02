import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type Project } from "./data";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".p-head", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        y: 28, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out",
      });

      // Bento cards: scale + lift reveal that respects asymmetric layout
      gsap.from(".p-card", {
        scrollTrigger: { trigger: ".p-grid", start: "top 82%" },
        y: 60,
        opacity: 0,
        scale: 0.94,
        duration: 0.85,
        ease: "expo.out",
        stagger: { each: 0.07, from: "start" },
        clearProps: "transform",
      });

      // Per-card hover micro-interactions (icon parallax)
      const cards = gsap.utils.toArray<HTMLElement>(".p-card");
      cards.forEach((card) => {
        const icon = card.querySelector(".p-icon");
        const arrow = card.querySelector(".p-arrow");
        const enter = () => {
          gsap.to(icon, { scale: 1.12, rotate: -4, duration: 0.5, ease: "expo.out" });
          gsap.to(arrow, { rotate: 45, scale: 1.05, duration: 0.4, ease: "expo.out" });
        };
        const leave = () => {
          gsap.to(icon, { scale: 1, rotate: 0, duration: 0.6, ease: "expo.out" });
          gsap.to(arrow, { rotate: 0, scale: 1, duration: 0.5, ease: "expo.out" });
        };
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  // Modal open animation
  useEffect(() => {
    if (!active || !modalRef.current || !overlayRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current,
      { opacity: 0, backdropFilter: "blur(0px)" },
      { opacity: 1, backdropFilter: "blur(8px)", duration: 0.35, ease: "power2.out" }
    ).fromTo(modalRef.current,
      { scale: 0.92, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.55, ease: "expo.out" },
      "-=0.25"
    ).from(modalRef.current.querySelectorAll(".m-anim"),
      { y: 16, opacity: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" },
      "-=0.3"
    );
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const closeModal = () => {
    if (closingRef.current || !modalRef.current || !overlayRef.current) {
      setActive(null);
      return;
    }
    closingRef.current = true;
    const tl = gsap.timeline({
      onComplete: () => {
        closingRef.current = false;
        setActive(null);
      },
    });
    tl.to(modalRef.current, {
      scale: 0.94, opacity: 0, y: 20, duration: 0.3, ease: "power2.in",
    }).to(overlayRef.current, {
      opacity: 0, backdropFilter: "blur(0px)", duration: 0.25, ease: "power2.in",
    }, "-=0.2");
  };

  return (
    <section id="work" ref={ref} className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="p-head flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
              <span className="w-8 h-px bg-foreground" /> SELECTED WORK
            </div>
            <h2 className="p-head text-4xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Real products,<br/>
              <span className="text-gradient-brand italic font-serif">real impact.</span>
            </h2>
          </div>
          <p className="p-head text-muted-foreground max-w-sm">
            Eight hardware products designed end-to-end — from concept and PCB to firmware,
            cloud, and field deployment.
          </p>
        </div>

        {/* Bento-style asymmetric grid */}
        <div className="p-grid grid grid-cols-1 md:grid-cols-6 auto-rows-[260px] gap-4">
          {projects.map((p, i) => {
            const spans = [
              "md:col-span-4 md:row-span-2",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-2",
              "md:col-span-2 md:row-span-2",
              "md:col-span-4",
            ];
            return (
              <article
                key={p.id}
                onClick={() => setActive(p)}
                className={`p-card relative group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card hover-lift ${spans[i]}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-90`} />
                <div className="absolute inset-0 grid-bg-subtle opacity-30" />
                <div className="absolute top-5 left-5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] font-mono">
                  {p.category}
                </div>
                <div className="p-arrow absolute top-5 right-5 w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-sm">
                  ↗
                </div>
                <div className="p-icon absolute right-5 top-1/2 -translate-y-1/2 text-7xl opacity-90">
                  {p.icon}
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl md:text-2xl font-semibold text-background drop-shadow-sm tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-background/85 mt-1 line-clamp-2 max-w-md">
                    {p.short}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {active && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/40"
          onClick={closeModal}
          style={{ opacity: 0 }}
        >
          <div
            ref={modalRef}
            className="bg-card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`m-anim relative h-64 bg-gradient-to-br ${active.gradient} rounded-t-3xl overflow-hidden`}>
              <div className="absolute inset-0 grid-bg-subtle opacity-30" />
              <div className="absolute right-8 top-1/2 -translate-y-1/2 text-9xl">{active.icon}</div>
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background hover:rotate-90 transition-all duration-300"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-mono">
                {active.category}
              </div>
              <div className="absolute bottom-6 left-6 right-20">
                <h3 className="text-3xl md:text-4xl font-semibold text-background tracking-tight">{active.title}</h3>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="m-anim">
                <div className="text-xs font-mono text-brand mb-2">THE PROBLEM</div>
                <p className="text-muted-foreground leading-relaxed">{active.problem}</p>
              </div>
              <div className="m-anim">
                <div className="text-xs font-mono text-brand mb-2">THE SOLUTION</div>
                <p className="text-muted-foreground leading-relaxed">{active.solution}</p>
              </div>
              <div className="m-anim">
                <div className="text-xs font-mono text-brand mb-3">TECHNOLOGIES</div>
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
