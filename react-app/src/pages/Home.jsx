import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import useDocumentHead from "../hooks/useDocumentHead";
import useReveal from "../hooks/useReveal";

const SERVICES = [
  { icon: "users", navy: false, title: "Business Consulting", copy: "Strategy, process improvement and technology advisory to drive business performance.", href: "/services#business-consulting" },
  { icon: "ship", navy: true, title: "Maritime ERP Advisory", copy: "ERP strategy, assessment, selection and implementation for maritime operations.", href: "/services#maritime-erp" },
  { icon: "exchange", navy: false, title: "EDI & Integration", copy: "Seamless data exchange across partners, systems and supply chain.", href: "/services#edi-integration" },
  { icon: "brain", navy: true, title: "AI Advisory", copy: "AI readiness, use cases and automation to unlock intelligence and efficiency.", href: "/services#ai-advisory" },
  { icon: "dollar", navy: false, title: "Financial Integration", copy: "Integrate operations with finance for accurate reporting, controls and profitability.", href: "/services#financial-integration" },
  { icon: "rocket", navy: true, title: "Digital Transformation", copy: "Modernize processes, automate workflows and build future-ready digital ecosystems.", href: "/services#digital-transformation" },
];

const INDUSTRIES = [
  ["nvoccs", "shipping-line", "NVOCCs"],
  ["shipping-lines", "ship", "Shipping Lines"],
  ["freight-forwarders", "truck", "Freight Forwarders"],
  ["shipping-agencies", "anchor", "Shipping Agencies"],
  ["liner-operators", "shipping-line", "Liner Operators"],
  ["ports-terminals", "crane", "Ports & Terminals"],
  ["container-depots", "warehouse", "Container Depots"],
  ["logistics-providers", "truck", "Logistics Providers"],
  ["customs-brokers", "shield", "Customs Brokers"],
  ["3pl-4pl", "users", "3PL / 4PL Providers"],
];

const FLOW_NODES = [
  ["shipping-line", "Shipping Lines", false],
  ["port", "Port Community Systems", false],
  ["shield", "Customs & Government", false],
  ["chart-bar", "Maritime ERP", true],
  ["crane", "Terminals", false],
  ["warehouse", "Depots", false],
  ["dollar", "Financial Systems", false],
  ["users", "Customers", false],
];

const FLOW_CODES = ["IFTMIN", "COPARN", "COPRAR", "BAPLIE", "MOVINS", "CODECO", "COARRI", "COREOR"];

const LOGOS = [
  ["zoho.svg", "", "Zoho", "ic"],
  ["microsoft.svg", "Microsoft", "", ""],
  ["aws.svg", "Amazon Web Services", "", "lg"],
  ["google-cloud.svg", "", "Google Cloud", "ic"],
  ["openai.svg", "OpenAI", "", ""],
  ["edifact.svg", "EDIFACT", "", ""],
  ["x12-ansi.svg", "X12 ANSI", "", "lg"],
  ["power-bi.svg", "", "Power BI", "ic"],
];

export default function Home() {
  useDocumentHead(
    "Varnika Consulting | Transforming Maritime & Logistics Through Technology",
    "Varnika Consulting helps maritime and logistics organizations optimize operations, modernize systems, integrate data and accelerate growth through consulting and technology."
  );
  useReveal();

  return (
    <>
      <section className="hero hero--home">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Transforming Maritime &amp; Logistics</p>
              <h1>Transforming Maritime &amp;<br />Logistics Through Technology</h1>
              <div className="rule" />
              <p>
                We help maritime and logistics organizations optimize operations,
                modernize systems, integrate data and accelerate growth through
                consulting and technology.
              </p>

              <ul className="hero-tags">
                <li>Business Consulting</li>
                <li>Maritime ERP</li>
                <li>AI Advisory</li>
                <li>EDI &amp; Integration</li>
                <li>Operational Excellence</li>
                <li>Financial Integration</li>
                <li>Digital Transformation</li>
              </ul>

              <div className="hero-actions">
                <Link className="btn btn--primary" to="/contact">Request Consultation</Link>
                <Link className="btn btn--ghost" to="/services">Explore Services</Link>
              </div>
            </div>

            <div className="flow" aria-label="Systems we connect and the industry-standard messages that flow between them">
              <div className="flow__stack">
                {FLOW_NODES.map(([icon, label, active]) => (
                  <div key={label} className={"flow__node" + (active ? " flow__node--active" : "")}>
                    <Icon name={icon} />{label}
                  </div>
                ))}
              </div>

              <div className="flow__spine" aria-hidden="true">
                <div className="flow__dots">
                  {FLOW_NODES.map((_, i) => <span key={i} className="flow__dot" />)}
                </div>
              </div>

              <div className="flow__codes">
                {FLOW_CODES.map((code) => <span key={code} className="flow__code">{code}</span>)}
              </div>

              <p className="flow__caption">Industry Standard Messages<br />Powering Global Trade</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ padding: "16px 0 0" }}>
        <div className="container">
          <div className="logo-strip">
            <div className="logo-strip__label">
              <Icon name="handshake" />
              <span>Trusted by leading organizations<br />&amp; powered by technology</span>
            </div>
            <ul className="logo-strip__items">
              {LOGOS.map(([file, alt, label, cls]) => (
                <li key={file}>
                  <img className={cls || undefined} src={`/images/logos/${file}`} alt={alt} loading="lazy" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: "38px 0 30px" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our Services &amp; Expertise</p>
            <h2>Integrated Expertise. Measurable Impact.</h2>
            <div className="rule" />
          </div>

          <div className="grid grid--6">
            {SERVICES.map((s) => (
              <article className="card card--center" key={s.title}>
                <div className={"card__icon" + (s.navy ? " card__icon--navy" : "")}>
                  <Icon name={s.icon} className="icon-lg" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <Link className="learn-more" to={s.href}>Learn more <Icon name="arrow-right" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Industries We Serve</p>
          </div>

          <nav className="industry-strip" aria-label="Industries we serve">
            {INDUSTRIES.map(([slug, icon, label]) => (
              <Link key={slug} to={`/industries#${slug}`}>
                <Icon name={icon} />{label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar__inner">
              <div className="icon-tile"><Icon name="clipboard" /></div>
              <div className="cta-bar__text">
                <h3>Let&rsquo;s build smarter, connected and future-ready operations together.</h3>
                <p>Talk to our maritime and logistics specialists about where to start.</p>
              </div>
              <Link className="btn btn--primary" to="/contact">Request Consultation <Icon name="arrow-right" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
