import { useEffect } from "react";

/* Animated count-up for .stat__num text like "21+"/"100+" — text-only
   stats ("Global", "Measurable") are left untouched. Ported from
   initCounters() on the static site. */
export default function useCounters(deps = []) {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const nums = document.querySelectorAll(".stat__num");
    if (!nums.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);

          const el = entry.target;
          const match = el.textContent.trim().match(/^(\d+)(.*)$/);
          if (!match) return;

          const target = parseInt(match[1], 10);
          const suffix = match[2];
          let start = null;
          const duration = 1100;

          function tick(ts) {
            if (start === null) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
