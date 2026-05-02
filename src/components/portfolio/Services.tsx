import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "./data";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".s-head", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        y: 28, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out",
      });
      gsap.from(".s-card", {
        scrollTrigger: { trigger: ".s-grid", start: "top 82%" },
        y: 50, opacity: 0, scale: 0.96, duration: 0.75,
        ease: "expo.out",
        stagger: { each: 0.07, grid: "auto", from: "start" },
        clearProps: "transform",
      });

      // Icon pop on hover per card
      gsap.utils.toArray<HTMLElement>(".s-card").forEach((card) => {
        const icon = card.querySelector(".s-icon");
        card.addEventListener("mouseenter", () => {
          gsap.to(icon, { scale: 1.1, rotate: -6, duration: 0.45, ease: "expo.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, rotate: 0, duration: 0.5, ease: "expo.out" });
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="py-32 px-4 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="s-head inline-flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
            <span className="w-8 h-px bg-foreground" /> SERVICES <span className="w-8 h-px bg-foreground" />
          </div>
          <h2 className="s-head text-4xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
            How I can help you{" "}
            <span className="text-gradient-brand italic font-serif">ship.</span>
          </h2>
        </div>

        <div className="s-grid grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="s-card group bg-card border border-border rounded-3xl p-7 hover-lift"
            >
              <div className="flex items-start justify-between mb-8">
              <div className="s-icon w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-2xl">
                {s.icon}
              </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
