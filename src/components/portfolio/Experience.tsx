import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience, skills } from "./data";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".e-anim", {
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
        y: 28, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out",
      });
      gsap.from(".e-card", {
        scrollTrigger: { trigger: ref.current, start: "top 72%" },
        x: -20, y: 20, opacity: 0, duration: 0.65,
        stagger: 0.08, ease: "expo.out", clearProps: "transform",
      });
      gsap.from(".sk-bar", {
        scrollTrigger: { trigger: ".sk-list", start: "top 82%" },
        scaleX: 0, duration: 1.2, stagger: 0.07,
        ease: "expo.out", transformOrigin: "left center",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-32 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <div className="e-anim flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
            <span className="w-8 h-px bg-foreground" /> EXPERIENCE
          </div>
          <h2 className="e-anim text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] mb-10">
            A track record of{" "}
            <span className="text-gradient-brand italic font-serif">building.</span>
          </h2>

          <div className="space-y-3">
            {experience.map((e) => (
              <div key={e.role} className="e-card bg-card border border-border rounded-2xl p-5 hover-lift">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-semibold tracking-tight">{e.role}</h3>
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{e.period}</span>
                </div>
                <div className="text-sm text-brand mb-2">{e.org}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div id="skills">
          <div className="e-anim flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
            <span className="w-8 h-px bg-foreground" /> EXPERTISE
          </div>
          <h2 className="e-anim text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] mb-10">
            Sharpened by{" "}
            <span className="text-gradient-brand italic font-serif">practice.</span>
          </h2>

          <div className="sk-list bg-card border border-border rounded-3xl p-6 space-y-5">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-sm font-medium">{s.name}</span>
                  <span className="text-xs font-mono text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="sk-bar h-full rounded-full bg-foreground"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
