import { useEffect, useState } from "react";
import Icon from "./Icon";

// Floating scroll-to-top button — appears after scrolling past one
// viewport height. Built with Tailwind since it's a standalone element
// with no legacy class to fight.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > window.innerHeight * 0.8); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={
        "fixed bottom-6 right-6 z-50 grid place-items-center w-11 h-11 rounded-full " +
        "bg-gradient-to-br from-orange to-orange-2 text-white ring-4 ring-white shadow-[0_8px_24px_rgba(232,98,44,0.45)] " +
        "transition-all duration-300 hover:shadow-[0_10px_32px_rgba(232,98,44,0.6)] hover:-translate-y-1 " +
        "active:scale-90 print:hidden " +
        (visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none")
      }
    >
      <Icon name="arrow-up" className="!w-5 !h-5" />
    </button>
  );
}
