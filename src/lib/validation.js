/* Ported from js/main.js fieldError() — same rules, same messages, so the
   two forms (newsletter, contact) validate identically to the static site. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export function fieldError({ type, value, checked, required, minLength, msgRequired }) {
  if (type === "checkbox") {
    return required && !checked ? (msgRequired || "Please tick this box to continue.") : "";
  }
  const v = (value || "").trim();
  if (required && !v) return msgRequired || "This field is required.";
  if (!v) return "";
  if (type === "email" && !EMAIL_RE.test(v)) return "Enter a valid email address.";
  if (type === "tel" && !/^[+()\-\s\d]{7,20}$/.test(v)) return "Enter a valid phone number.";
  if (minLength && v.length < minLength) return `Please enter at least ${minLength} characters.`;
  return "";
}
