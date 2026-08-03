import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import useDocumentHead from "../hooks/useDocumentHead";
import useReveal from "../hooks/useReveal";
import useCounters from "../hooks/useCounters";

const CAPS = [
  ["ship", "Deep Maritime Domain Expertise"],
  ["users", "Business-First Approach"],
  ["target", "Technology to Drive Impact"],
  ["globe", "Global Perspective, Local Understanding"],
];

const VALUES = [
  ["shield", "Integrity", "We are honest, transparent and committed to doing what's right."],
  ["star", "Excellence", "We strive for excellence in everything we do."],
  ["users", "Collaboration", "We believe in the power of partnership and teamwork."],
  ["lightbulb", "Innovation", "We embrace change and create future-ready solutions."],
  ["chart-bar", "Impact", "We are driven by results that deliver real business value."],
];

const STATS = [
  ["award", "21+", "Years of Maritime Industry Experience"],
  ["users", "100+", "Projects & Engagements Delivered"],
  ["globe", "Global", "Delivery Experience"],
  ["chart-bar", "Measurable", "Business Outcomes"],
  ["handshake", "Long-term", "Partnerships Built on Trust & Performance"],
];

const WHY = [
  ["compass", "Industry Expertise", "Deep understanding of maritime operations, processes, regulations and technology landscape."],
  ["puzzle", "Practical Solutions", "Actionable, realistic and business-oriented solutions tailored to your unique challenges."],
  ["check-circle", "Proven Methodologies", "Structured frameworks and best practices that ensure successful outcomes every time."],
  ["users", "Experienced Team", "Seasoned professionals with cross-functional expertise and a passion for excellence."],
  ["globe", "Global Delivery", "Ability to deliver consistently across geographies, time zones and business models."],
  ["hand-heart", "Client Success Focused", "We measure our success by the value and results we create for you."],
];

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

export default function About() {
  useDocumentHead(
    "About Us | Varnika Consulting",
    "Varnika Consulting is a specialized business and technology consulting firm helping maritime and logistics organizations navigate change and achieve sustainable growth."
  );
  useReveal();
  useCounters();

  return (
    <>
      <section className="hero hero--about">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">About Us</p>
              <h1>Your Trusted Partner in<br />Maritime &amp; Logistics Transformation</h1>
              <div className="rule" />
              <p>
                Varnika Consulting is a specialized business and technology consulting firm
                helping maritime and logistics organizations navigate change, optimize
                operations and achieve sustainable growth.
              </p>
              <ul className="hero-caps">
                {CAPS.map(([icon, label]) => <li key={label}><Icon name={icon} />{label}</li>)}
              </ul>
            </div>

            <div className="values-panel">
              <p className="eyebrow">Our Core Values</p>
              <ul>
                {VALUES.map(([icon, title, copy]) => (
                  <li key={title}>
                    <span className="icon-tile"><Icon name={icon} /></span>
                    <div>
                      <h4>{title}</h4>
                      <p>{copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="stats-bar">
            {STATS.map(([icon, num, label]) => (
              <div className="stat" key={label}>
                <span className="stat__icon"><Icon name={icon} className="icon-lg" /></span>
                <span><span className="stat__num">{num}</span><span className="stat__label">{label}</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 14 }}>
        <div className="container">
          <div className="section-head">
            <h2 style={{ fontSize: 20, letterSpacing: ".5px", textTransform: "uppercase" }}>Why Choose Varnika Consulting?</h2>
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

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="logo-strip" style={{ marginTop: 0 }}>
            <div className="logo-strip__label" style={{ flex: "0 1 220px" }}>
              <span>Powered by<br />leading technologies</span>
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

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar__inner">
              <div className="icon-tile"><Icon name="clipboard" /></div>
              <div className="cta-bar__text">
                <h3>Let&rsquo;s work together to solve complex challenges and unlock new opportunities for your business.</h3>
              </div>
              <Link className="btn btn--primary" to="/contact">Schedule a Discovery Call <Icon name="arrow-right" /></Link>

              <ul className="cta-badges">
                <li><Icon name="check-circle" />Expert Guidance</li>
                <li><Icon name="gear" />Tailored Solutions</li>
                <li><Icon name="chart-bar" />Measurable Impact</li>
                <li><Icon name="handshake" />Long-term Partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
