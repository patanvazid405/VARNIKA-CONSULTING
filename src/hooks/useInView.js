import { useEffect, useRef, useState } from "react";

// Fires once when the element scrolls into view, then disconnects — used to
// drive Tailwind opacity/translate transitions on the redesigned Home page
// (independent of the legacy class-toggling useReveal hook, which targets
// hardcoded selectors from the old design).
export default function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );
    io.observe(el);

    const safety = setTimeout(() => setInView(true), 2500);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}
