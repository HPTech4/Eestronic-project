import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".c-shell", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        y: 50, opacity: 0, scale: 0.97, duration: 0.9, ease: "expo.out",
        clearProps: "transform",
      });
      gsap.from(".c-anim", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 24, opacity: 0, duration: 0.65, stagger: 0.07, ease: "power3.out",
        delay: 0.15,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="c-shell relative bg-foreground text-background rounded-[2rem] overflow-hidden p-10 md:p-16">
          <div className="absolute inset-0 dot-bg opacity-10" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12">
            <div>
              <div className="c-anim text-xs font-mono opacity-70 mb-4">— LET'S BUILD</div>
              <h2 className="c-anim text-4xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
                Have an idea?{" "}
                <span className="italic font-serif text-brand">Let's make it real.</span>
              </h2>
              <p className="c-anim mt-6 text-lg opacity-80 max-w-md leading-relaxed">
                Hardware, IoT, edge AI, or research collaboration — drop me a note and
                I'll respond within 24 hours.
              </p>

              <div className="c-anim mt-10 space-y-4">
                {[
                  { k: "Email", v: "blessing@esstronics.dev" },
                  { k: "Based in", v: "Available worldwide · remote-first" },
                  { k: "Response", v: "Within 24 hours" },
                ].map((c) => (
                  <div key={c.k} className="flex items-baseline gap-4 border-b border-background/15 pb-3">
                    <div className="text-xs font-mono opacity-60 w-20">{c.k}</div>
                    <div className="text-sm font-medium">{c.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <form
              className="c-anim bg-background text-foreground rounded-3xl p-7 space-y-4"
              onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3500); }}
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-muted-foreground">Name</label>
                  <input required className="mt-1 w-full bg-secondary border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-foreground transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground">Email</label>
                  <input required type="email" className="mt-1 w-full bg-secondary border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-foreground transition-colors" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground">Subject</label>
                <input required className="mt-1 w-full bg-secondary border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-foreground transition-colors" placeholder="Project type" />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground">Message</label>
                <textarea required rows={5} className="mt-1 w-full bg-secondary border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-foreground transition-colors resize-none" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
                {sent ? "✓ Message sent" : "Send message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
