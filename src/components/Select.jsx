import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

// Custom-styled dropdown replacing the native <select> — browsers render the
// open option list using OS chrome (e.g. Windows' blue highlight) that CSS
// can't restyle, so this renders our own list to match the site's design.
export default function Select({ id, value, options, placeholder = "Select an option", onChange, onBlur, invalid }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
        onBlur?.();
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") {
        setOpen(false);
        onBlur?.();
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onBlur]);

  function toggle() {
    setOpen((o) => {
      const next = !o;
      if (!next) onBlur?.();
      return next;
    });
  }

  function pick(opt) {
    onChange(opt);
    setOpen(false);
    onBlur?.();
  }

  return (
    <div className={"custom-select" + (open ? " is-open" : "") + (invalid ? " has-error" : "")} ref={rootRef}>
      <button
        type="button"
        id={id}
        className="custom-select__control"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggle}
      >
        <span className={value ? "" : "custom-select__placeholder"}>{value || placeholder}</span>
        <Icon name="chevron-down" className="custom-select__chevron" />
      </button>
      {open && (
        <ul className="custom-select__list" role="listbox" tabIndex={-1}>
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              className={"custom-select__option" + (opt === value ? " is-selected" : "")}
              onClick={() => pick(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
