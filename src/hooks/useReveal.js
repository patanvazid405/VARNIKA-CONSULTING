import { useEffect } from "react";

/* Scroll-reveal: adds .reveal only at runtime (so content already in the
   JSX is fully visible if this hook never runs) then .is-visible once an
   element crosses into view. A safety-net timeout force-reveals anything
   the observer doesn't catch within 2.5s, so nothing can stay invisible
   regardless of scroll pattern. Ported from the static site's initReveal(). */
export default function useReveal(deps = []) {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll(
      ".section-head, .card, .article-card, .industry-strip a, " +
      ".hero-stats .stat, .stats-bar .stat, .values-panel, .step, .flow__node"
    );
    if (!targets.length) return;

    targets.forEach((el) => el.classList.add("reveal"));

    const seen = [];
    targets.forEach((el) => {
      const parent = el.parentElement;
      let bucket = seen.find((s) => s.parent === parent);
      if (!bucket) { bucket = { parent, count: 0 }; seen.push(bucket); }
      el.style.setProperty("--reveal-delay", Math.min(bucket.count * 70, 280) + "ms");
      bucket.count++;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -20px 0px" }
    );
    targets.forEach((el) => io.observe(el));

    const safety = setTimeout(() => {
      targets.forEach((el) => el.classList.add("is-visible"));
      io.disconnect();
    }, 2500);

    return () => { io.disconnect(); clearTimeout(safety); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
