import useInView from "../hooks/useInView";

// Fade/slide-up wrapper driven by useInView — staggered by 70ms per sibling
// (capped at 280ms), matching the legacy useReveal hook's timing but works
// with any Tailwind-styled element instead of a hardcoded selector list.
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={
        className +
        " transition-all duration-700 ease-out will-change-transform " +
        (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
      }
      style={{ transitionDelay: `${Math.min(delay * 70, 280)}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
