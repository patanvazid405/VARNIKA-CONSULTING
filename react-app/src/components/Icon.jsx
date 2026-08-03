import { ICONS } from "../icons";

/* Renders one stroke icon. Equivalent to the static site's
   <svg class="icon"><use href="#i-name"></use></svg> — no sprite/symbol
   indirection needed in React, so it just injects the path data directly. */
export default function Icon({ name, className = "" }) {
  const svg = ICONS[name];
  if (!svg) return null;
  return (
    <svg
      className={className ? `icon ${className}` : "icon"}
      viewBox="0 0 24 24"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
