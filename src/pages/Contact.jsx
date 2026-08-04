import { useState } from "react";
import Icon from "../components/Icon";
import Select from "../components/Select";
import useDocumentHead from "../hooks/useDocumentHead";
import useReveal from "../hooks/useReveal";
import { fieldError } from "../lib/validation";

const CONTACT_LIST = [
  ["mail", "Email Us", <a href="mailto:advisory@varnikaconsulting.com">advisory@varnikaconsulting.com</a>],
  ["phone", "Call Us", <a href="tel:+917483503223">+91 74835 03223</a>],
  ["linkedin", "Connect on LinkedIn", <a href="https://www.linkedin.com/company/varnika-consulting/" target="_blank" rel="noopener">Varnika Consulting (Company Page)</a>],
  ["globe", "Visit Our Website", <a href="/">www.varnikaconsulting.com</a>],
  ["map-pin", "Global Presence", <p>Bengaluru, Karnataka, India<br />Nellore, Andhra Pradesh, India<br />Midland, Texas, USA</p>],
];

const WHY = [
  ["globe", "Global Delivery", "Seamless support across geographies and time zones with a global mindset."],
  ["ship", "Maritime Domain Expertise", "Deep understanding of maritime and logistics operations, processes and regulations."],
  ["users", "Vendor-Neutral Consulting", "Unbiased advice to help you choose and implement the right solutions for your business."],
  ["lightbulb", "AI & Digital Transformation", "Leverage AI, automation and emerging technologies to drive efficiency and innovation."],
  ["chart-line", "Measurable Outcomes", "Focused on delivering tangible business value and continuous performance improvement."],
  ["exchange", "End-to-End Partnership", "From strategy to execution and optimization – we partner with you at every step."],
];

const ROLE_OPTIONS = [
  "Shipping Line / Liner Operator", "NVOCC", "Freight Forwarder", "Shipping Agency",
  "Port / Terminal Operator", "Container Depot", "Logistics Provider / 3PL / 4PL",
  "Customs Broker", "Other",
];

const INITIAL_FIELDS = { name: "", company: "", email: "", phone: "", role: "", message: "", consent: false };
const REQUIRED_MSG = {
  name: "Please enter your name.",
  company: "Please enter your company name.",
  email: "Please enter your email address.",
  role: "Please choose the option that best describes you.",
  message: "Please tell us how we can help.",
  consent: "Please accept the Privacy Policy and Terms of Use.",
};
const FIELD_TYPES = { email: "email", phone: "tel", consent: "checkbox" };
const MIN_LENGTHS = { name: 2, message: 10 };
const REQUIRED_FIELDS = ["name", "company", "email", "role", "message", "consent"];

export default function Contact() {
  useDocumentHead(
    "Contact Us | Varnika Consulting",
    "Talk to Varnika Consulting about maritime and logistics consulting, ERP advisory, EDI integration and digital transformation. Email advisory@varnikaconsulting.com."
  );
  useReveal();

  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  function validate(name, value) {
    return fieldError({
      type: FIELD_TYPES[name] || "text",
      value: typeof value === "string" ? value : "",
      checked: typeof value === "boolean" ? value : undefined,
      required: REQUIRED_FIELDS.includes(name),
      minLength: MIN_LENGTHS[name],
      msgRequired: REQUIRED_MSG[name],
    });
  }

  function update(name, value) {
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: validate(name, value) }));
  }

  function blurCheck(name) {
    setErrors((e) => ({ ...e, [name]: validate(name, fields[name]) }));
  }

  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    let firstBad = null;
    Object.keys(INITIAL_FIELDS).forEach((name) => {
      const msg = validate(name, fields[name]);
      nextErrors[name] = msg;
      if (msg && !firstBad) firstBad = name;
    });
    setErrors(nextErrors);

    if (firstBad) {
      setStatus({ type: "err", text: "Please correct the highlighted fields and try again." });
      document.getElementById(`c-${firstBad}`)?.focus();
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL;
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!apiUrl && !accessKey) {
      setStatus({ type: "err", text: "Form is not configured yet. Please email us directly at advisory@varnikaconsulting.com." });
      return;
    }

    setSubmitting(true);
    try {
      let ok;
      if (apiUrl) {
        // Django backend
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fields.name,
            company: fields.company,
            email: fields.email,
            phone: fields.phone,
            role: fields.role,
            message: fields.message,
          }),
        });
        ok = res.ok;
      } else {
        // Web3Forms fallback
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New consultation request from ${fields.name} (${fields.company})`,
            from_name: "Varnika Consulting Website",
            name: fields.name,
            company: fields.company,
            email: fields.email,
            phone: fields.phone,
            role: fields.role,
            message: fields.message,
          }),
        });
        const data = await res.json();
        ok = data.success;
      }

      if (ok) {
        setStatus({ type: "ok", text: "Thank you — your request has been received. One of our consultants will contact you within 24 business hours." });
        setFields(INITIAL_FIELDS);
        setErrors({});
      } else {
        setStatus({ type: "err", text: "Something went wrong sending your message. Please try again or email advisory@varnikaconsulting.com directly." });
      }
    } catch {
      setStatus({ type: "err", text: "Something went wrong sending your message. Please try again or email advisory@varnikaconsulting.com directly." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="hero hero--contact">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Contact Us</p>
              <h1>Let&rsquo;s Connect.<br />Let&rsquo;s Create Impact.</h1>
              <div className="rule" />
              <p>
                Have a question, need expert advice, or want to explore how
                we can help you transform your operations — we&rsquo;re here to help.
              </p>

              <ul className="contact-list">
                {CONTACT_LIST.map(([icon, title, content]) => (
                  <li key={title}>
                    <span className="contact-list__icon"><Icon name={icon} /></span>
                    <div>
                      <h4>{title}</h4>
                      {content}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="hero-note">
                Serving clients worldwide through remote and on-site consulting engagements.
              </p>
            </div>

            <div className="form-panel">
              <div className="form-panel__head">
                <div className="icon-tile"><Icon name="send" /></div>
                <div>
                  <h2>Send Us a Message</h2>
                  <p>We&rsquo;ll get back to you within <strong>24 business hours.</strong></p>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {status && (
                  <div className={`form-status form-status--${status.type} is-visible`} role="status" aria-live="polite">
                    <Icon name={status.type === "ok" ? "check-circle" : "alert"} />
                    <span>{status.text}</span>
                  </div>
                )}

                <div className="form-grid">
                  <div className={"field field--box" + (errors.name ? " has-error" : "")}>
                    <label htmlFor="c-name">Full Name <span className="req">*</span></label>
                    <input id="c-name" name="name" type="text" autoComplete="name" placeholder="Your full name"
                      value={fields.name} onChange={(e) => update("name", e.target.value)} onBlur={() => blurCheck("name")}
                      aria-invalid={!!errors.name} />
                    <Icon name="user" className="fb-icon" />
                    <span className="error">{errors.name}</span>
                  </div>

                  <div className={"field field--box" + (errors.company ? " has-error" : "")}>
                    <label htmlFor="c-company">Company <span className="req">*</span></label>
                    <input id="c-company" name="company" type="text" autoComplete="organization" placeholder="Company name"
                      value={fields.company} onChange={(e) => update("company", e.target.value)} onBlur={() => blurCheck("company")}
                      aria-invalid={!!errors.company} />
                    <Icon name="building" className="fb-icon" />
                    <span className="error">{errors.company}</span>
                  </div>

                  <div className={"field field--box" + (errors.email ? " has-error" : "")}>
                    <label htmlFor="c-email">Work Email <span className="req">*</span></label>
                    <input id="c-email" name="email" type="email" autoComplete="email" placeholder="you@company.com"
                      value={fields.email} onChange={(e) => update("email", e.target.value)} onBlur={() => blurCheck("email")}
                      aria-invalid={!!errors.email} />
                    <Icon name="mail" className="fb-icon" />
                    <span className="error">{errors.email}</span>
                  </div>

                  <div className={"field field--box" + (errors.phone ? " has-error" : "")}>
                    <label htmlFor="c-phone">Phone</label>
                    <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 XXXX XXXXX"
                      value={fields.phone} onChange={(e) => update("phone", e.target.value)} onBlur={() => blurCheck("phone")}
                      aria-invalid={!!errors.phone} />
                    <Icon name="phone" className="fb-icon" />
                    <span className="error">{errors.phone}</span>
                  </div>

                  <div className={"field field--box field--full field--select" + (errors.role ? " has-error" : "")}>
                    <label htmlFor="c-role">What best describes you? <span className="req">*</span></label>
                    <Select
                      id="c-role"
                      value={fields.role}
                      options={ROLE_OPTIONS}
                      onChange={(v) => update("role", v)}
                      onBlur={() => blurCheck("role")}
                      invalid={!!errors.role}
                    />
                    <span className="error">{errors.role}</span>
                  </div>

                  <div className={"field field--box field--area field--full" + (errors.message ? " has-error" : "")}>
                    <label htmlFor="c-message">How can we help you? <span className="req">*</span></label>
                    <textarea id="c-message" name="message" placeholder="Tell us about your business challenges and goals..."
                      value={fields.message} onChange={(e) => update("message", e.target.value)} onBlur={() => blurCheck("message")}
                      aria-invalid={!!errors.message} />
                    <Icon name="pencil" className="fb-icon" />
                    <span className="error">{errors.message}</span>
                  </div>
                </div>

                <div className={"field consent" + (errors.consent ? " has-error" : "")}>
                  <input id="c-consent" name="consent" type="checkbox"
                    checked={fields.consent} onChange={(e) => update("consent", e.target.checked)} onBlur={() => blurCheck("consent")} />
                  <label htmlFor="c-consent">
                    I agree to the <a href="/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a> and <a href="/terms-of-use" target="_blank" rel="noopener">Terms of Use</a>.
                  </label>
                  <span className="error">{errors.consent}</span>
                </div>

                <button className="btn btn--primary btn--block" type="submit" style={{ marginTop: 12 }} disabled={submitting}>
                  {submitting ? "Sending…" : <>Request Consultation <Icon name="arrow-right" /></>}
                </button>

                <p className="form-secure">
                  <Icon name="lock" />
                  Your information is safe and secure. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 style={{ fontSize: 20, letterSpacing: ".5px", textTransform: "uppercase" }}>Why Clients Work With Varnika</h2>
            <div className="rule" />
          </div>

          <div className="grid grid--6">
            {WHY.map(([icon, title, copy]) => (
              <article className="card card--center" key={title}>
                <div className="card__icon"><Icon name={icon} className="icon-lg" /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
