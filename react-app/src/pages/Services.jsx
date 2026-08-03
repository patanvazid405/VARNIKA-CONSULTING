import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import useDocumentHead from "../hooks/useDocumentHead";
import useReveal from "../hooks/useReveal";
import useCounters from "../hooks/useCounters";

const STATS = [
  ["users", "21+", "Years of Maritime Industry Experience"],
  ["clipboard", "100+", "Projects & Engagements Delivered"],
  ["globe", "Global", "Delivery Experience"],
  ["chart-line", "Measurable", "Business Outcomes"],
];

const SERVICES = [
  ["business-consulting", "users", "Business Consulting", "Strategy, process improvement and technology advisory to drive operational excellence and business growth."],
  ["maritime-erp", "ship", "Maritime ERP Advisory", "ERP strategy, assessment, selection and implementation for maritime and logistics operations."],
  ["edi-integration", "exchange", "EDI & Integration", "Seamless data exchange across partners, systems and platforms using global EDI standards."],
  ["ai-advisory", "brain", "AI Advisory", "AI readiness assessment, use case identification, and automation to unlock intelligence and efficiency."],
  ["financial-integration", "dollar", "Financial Integration", "Integrate operations with finance for accurate reporting, controls, compliance and profitability."],
  ["digital-transformation", "rocket", "Digital Transformation", "Modernize processes, automate workflows and build future-ready, connected digital ecosystems."],
  ["operational-excellence", "gear", "Operational Excellence", "Optimize processes, eliminate waste, improve performance and deliver sustainable operational excellence."],
  ["business-intelligence", "chart-bar", "Business Intelligence", "Actionable insights through dashboards, analytics and reporting to support smarter decision making."],
];

export default function Services() {
  useDocumentHead(
    "Services | Varnika Consulting",
    "Comprehensive maritime and logistics services — business consulting, maritime ERP advisory, EDI and integration, AI advisory, financial integration, digital transformation, operational excellence and business intelligence."
  );
  useReveal();
  useCounters();

  return (
    <>
      <section className="hero hero--compact hero--services">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Our Services</p>
              <h1>Comprehensive Consulting &amp; Technology<br />Services for Maritime &amp; Logistics</h1>
              <div className="rule" />
              <p>
                From strategy and consulting to implementation and optimization —
                we deliver end-to-end solutions that drive efficiency, visibility
                and measurable business impact.
              </p>

              <ul className="hero-stats">
                {STATS.map(([icon, num, label]) => (
                  <li className="stat" key={label}>
                    <span className="stat__icon"><Icon name={icon} className="icon-lg" /></span>
                    <span><span className="stat__num">{num}</span><span className="stat__label">{label}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--4">
            {SERVICES.map(([id, icon, title, copy]) => (
              <article className="card card--center" id={id} key={id}>
                <div className="card__icon"><Icon name={icon} className="icon-lg" /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <Link className="learn-more" to="/contact">Learn more <Icon name="arrow-right" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel" style={{ display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
            <div className="icon-tile" style={{ width: 60, height: 60 }}>
              <Icon name="target" className="icon-lg" />
            </div>

            <div style={{ flex: "1 1 280px" }}>
              <h3 style={{ marginBottom: 6 }}>Not Sure Where to Start?</h3>
              <p style={{ fontSize: 13, margin: 0 }}>
                Let our experts assess your current state and recommend the right
                solutions for your business goals.
              </p>
            </div>

            <Link className="btn btn--primary" to="/contact">Schedule a Discovery Call <Icon name="arrow-right" /></Link>

            <ul className="cta-badges" style={{ flex: "0 1 380px" }}>
              <li style={{ color: "var(--body)" }}><Icon name="shield" />Vendor-Neutral Advice</li>
              <li style={{ color: "var(--body)" }}><Icon name="star" />Industry Best Practices</li>
              <li style={{ color: "var(--body)" }}><Icon name="check-circle" />Proven Frameworks</li>
              <li style={{ color: "var(--body)" }}><Icon name="chart-bar" />Measurable Impact</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
