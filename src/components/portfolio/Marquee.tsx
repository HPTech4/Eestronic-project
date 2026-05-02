import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  "ESP32", "Raspberry Pi", "STM32", "Arduino", "KiCad", "Proteus",
  "TensorFlow Lite", "OpenCV", "MQTT", "Firebase", "ROS", "EasyEDA",
];

export function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: { trigger: ref.current, start: "top 92%" },
        opacity: 0, y: 24, duration: 0.7, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="py-12 border-y border-border bg-surface overflow-hidden">
      <div className="text-center text-xs font-mono text-muted-foreground mb-6">
        TECH STACK · TRUSTED TOOLING
      </div>
      <div className="relative overflow-hidden">
        <div className="flex marquee gap-12 w-max">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="text-2xl font-semibold tracking-tight text-muted-foreground whitespace-nowrap">
              {l} <span className="text-brand">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
