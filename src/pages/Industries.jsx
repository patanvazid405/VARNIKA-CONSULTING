import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import useDocumentHead from "../hooks/useDocumentHead";
import useReveal from "../hooks/useReveal";
import useCounters from "../hooks/useCounters";

const INDUSTRIES = [
  ["nvoccs", "shipping-line", "NVOCCs", "Streamline consolidation, documentation and operations with integrated solutions."],
  ["shipping-lines", "ship", "Shipping Lines", "Enhance fleet operations, schedule reliability and end-to-end visibility."],
  ["freight-forwarders", "truck", "Freight Forwarders", "Optimize shipments, automate workflows and improve customer satisfaction."],
  ["shipping-agencies", "anchor", "Shipping Agencies", "Improve port operations, vessel handling and communication efficiency."],
  ["liner-operators", "shipping-line", "Liner Operators", "Drive operational excellence with better planning, visibility and control."],
  ["ports-terminals", "crane", "Ports & Terminals", "Digitize terminal operations, yard management and resource utilization."],
  ["container-depots", "warehouse", "Container Depots", "Manage inventory, equipment and movements with real-time accuracy."],
  ["logistics-providers", "truck", "Logistics Providers", "Optimize transport, warehousing and distribution across the supply chain."],
  ["customs-brokers", "shield", "Customs Brokers", "Ensure compliance, automate filings and reduce clearance turnaround time."],
  ["3pl-4pl", "users", "3PL / 4PL Providers", "Improve collaboration, visibility and performance across the network."],
];

const STATS = [
  ["award", "21+", "Years of Maritime Industry Experience"],
  ["users", "100+", "Projects & Engagements Delivered"],
  ["globe", "Global", "Delivery Experience"],
  ["chart-bar", "Measurable", "Business Outcomes"],
];

const TRUST = [
  ["shield", "Domain Expertise"],
  ["check-circle", "Proven Methodologies"],
  ["users", "Technology-Driven"],
  ["globe", "Global Delivery"],
  ["shield", "Secure & Compliant"],
  ["target", "Focused on Outcomes"],
];

export default function Industries() {
  useDocumentHead(
    "Industries We Serve | Varnika Consulting",
    "Industry-specific maritime and logistics solutions for NVOCCs, shipping lines, freight forwarders, ports, terminals, depots, customs brokers and 3PL/4PL providers."
  );
  useReveal();
  useCounters();

  return (
    <>
      <section className="hero hero--compact hero--industries">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevron-right" />
            <span className="current" aria-current="page">Industries</span>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Industries We Serve</h1>
              <div className="rule" />
              <p>
                We understand the unique challenges of the maritime and logistics
                ecosystem and deliver industry-specific solutions that drive
                efficiency, compliance and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--5">
            {INDUSTRIES.map(([id, icon, title, copy]) => (
              <article className="card card--center card--underline" id={id} key={id}>
                <div className="card__icon"><Icon name={icon} className="icon-lg" /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <Link className="learn-more" to="/contact">Learn more <Icon name="arrow-right" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel">
            <div className="panel-split">
              <div>
                <h3 style={{ textAlign: "center" }}>Our Impact in Numbers</h3>
                <div className="rule" style={{ marginBottom: 22 }} />
                <ul className="impact-stats">
                  {STATS.map(([icon, num, label]) => (
                    <li className="stat" key={label}>
                      <span className="stat__icon"><Icon name={icon} className="icon-lg" /></span>
                      <span><span className="stat__num">{num}</span><span className="stat__label">{label}</span></span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel-split__divider" style={{ display: "flex", gap: 22, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 240px" }}>
                  <h3>Ready to Transform Your Industry?</h3>
                  <p style={{ fontSize: 13 }}>
                    Let us help you overcome challenges and unlock new opportunities
                    with our domain expertise.
                  </p>
                  <Link className="btn btn--primary" to="/contact">Talk to an Expert <Icon name="arrow-right" /></Link>
                </div>

                <svg className="panel__art" viewBox="0 0 200 110" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10 92h180" />
                  <path d="M22 92V18h58M22 34l40-16M62 18v22M62 40a8 8 0 008 8h6" />
                  <rect x="52" y="56" width="24" height="16" rx="2" />
                  <path d="M62 48v8" />
                  <path d="M96 84l6-18h72l6 18" />
                  <path d="M104 66V52h62v14M120 52V42h30v10M135 42V32" />
                  <path d="M96 84c6 0 6 6 12 6s6-6 12-6 6 6 12 6 6-6 12-6 6 6 12 6 6-6 12-6" />
                  <path d="M10 74h26M14 62h18" strokeDasharray="4 5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <ul className="trust-row">
            {TRUST.map(([icon, label]) => (
              <li key={label}><Icon name={icon} />{label}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
