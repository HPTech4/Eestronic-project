import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".a-anim", {
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
        y: 32, opacity: 0, duration: 0.75, stagger: 0.07, ease: "power3.out",
      });
      gsap.from(".a-card", {
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
        y: 40, opacity: 0, scale: 0.96, duration: 0.7,
        stagger: { each: 0.07, from: "start" },
        ease: "expo.out",
        clearProps: "transform",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="a-anim flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
          <span className="w-8 h-px bg-foreground" /> ABOUT
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <h2 className="a-anim text-4xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Engineer, builder,{" "}
              <span className="text-gradient-brand italic font-serif">problem-solver.</span>
            </h2>
            <p className="a-anim mt-6 text-lg text-muted-foreground leading-relaxed">
              I design intelligent hardware that lives in the real world — surviving dust, heat,
              spotty connectivity, and the people who use it. My focus is on systems that fuse
              electronics, embedded firmware, and on-device AI to solve genuine, measurable problems.
            </p>
            <p className="a-anim mt-4 text-lg text-muted-foreground leading-relaxed">
              From rural agriculture to smart cities, I take ideas from sketch through schematic,
              PCB, firmware, cloud, and into the hands of users who depend on them.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {[
              { k: "Hardware", v: "ESP32 · STM32\nRaspberry Pi" },
              { k: "Languages", v: "C · C++\nPython" },
              { k: "PCB Design", v: "KiCad · Proteus\nEasyEDA" },
              { k: "Edge AI", v: "TinyML · OpenCV\nTFLite" },
              { k: "Certifications", v: "IoT Specialist\nAI Engineer" },
              { k: "Achievements", v: "Built 50+ Projects\n10+ Years Experience" },
            ].map((it) => (
              <div key={it.k} className="a-card bg-card border border-border rounded-3xl p-5 hover-lift">
                <div className="text-xs font-mono text-brand mb-2">{it.k}</div>
                <div className="text-sm font-medium whitespace-pre-line leading-snug">{it.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
