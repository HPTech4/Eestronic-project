import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollUtilities() {
  const barRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    setMounted(true);

    // Smooth progress bar via rAF + GSAP tween (no jitter on layout shifts)
    const computeProgress = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      return total > 0 ? Math.min(1, Math.max(0, h.scrollTop / total)) : 0;
    };

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const p = computeProgress();
      if (barRef.current) {
        gsap.to(barRef.current, {
          scaleX: p,
          duration: 0.25,
          ease: "power2.out",
          overwrite: true,
        });
      }

      // Back-to-top visibility (driven off scroll, not section timing)
      const shouldShow = window.scrollY > window.innerHeight * 0.6;
      if (shouldShow !== visibleRef.current && btnRef.current) {
        visibleRef.current = shouldShow;
        gsap.to(btnRef.current, {
          autoAlpha: shouldShow ? 1 : 0,
          y: shouldShow ? 0 : 16,
          scale: shouldShow ? 1 : 0.85,
          duration: 0.4,
          ease: shouldShow ? "expo.out" : "power2.in",
          pointerEvents: shouldShow ? "auto" : "none",
        });
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    // Recompute when fonts/images/sections finish animating in (height changes)
    const refresh = () => {
      ScrollTrigger.refresh();
      update();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", refresh);
    ScrollTrigger.addEventListener("refreshInit", update);
    ScrollTrigger.addEventListener("refresh", update);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", refresh);
      ScrollTrigger.removeEventListener("refreshInit", update);
      ScrollTrigger.removeEventListener("refresh", update);
    };
  }, []);

  const scrollTop = () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 0.9, ease: "expo.inOut" });
    // Fallback for environments without ScrollToPlugin
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent pointer-events-none">
        <div
          ref={barRef}
          className="h-full bg-brand origin-left"
          style={{ transform: "scaleX(0)", width: "100%" }}
        />
      </div>
      <button
        ref={btnRef}
        onClick={scrollTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-foreground text-background border border-border shadow-elevated flex items-center justify-center text-base hover:bg-brand hover:text-brand-foreground transition-colors"
        style={{ opacity: 0, visibility: mounted ? "visible" : "hidden", transform: "translateY(16px) scale(0.85)" }}
      >
        ↑
      </button>
    </>
  );
}
