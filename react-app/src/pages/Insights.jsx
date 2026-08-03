import { useMemo, useRef, useState } from "react";
import Icon from "../components/Icon";
import useDocumentHead from "../hooks/useDocumentHead";
import useReveal from "../hooks/useReveal";
import { fieldError } from "../lib/validation";

const FILTERS = [
  ["all", "All Insights"],
  ["maritime-erp", "Maritime ERP"],
  ["edi", "EDI & Integration"],
  ["digital", "Digital Transformation"],
  ["operational", "Operational Excellence"],
  ["financial", "Financial Integration"],
  ["ai", "AI & Analytics"],
];

const ARTICLES = [
  { cat: "maritime-erp", img: "insight-erp", tag: "Maritime ERP", title: "Choosing the Right ERP for Maritime & Logistics Operations", copy: "Key considerations and best practices to select and implement an ERP that fits your business.", date: "May 10, 2024" },
  { cat: "edi", img: "insight-edi", tag: "EDI & Integration", title: "The Future of EDI in a Connected Maritime World", copy: "How modern EDI and API integrations improve visibility, compliance and collaboration.", date: "May 02, 2024" },
  { cat: "digital", img: "insight-digital", tag: "Digital Transformation", title: "Digital Transformation Roadmap for Logistics Companies", copy: "A step-by-step approach to modernize processes, enable automation and deliver measurable outcomes.", date: "Apr 25, 2024" },
  { cat: "ai", img: "insight-ai", tag: "AI & Analytics", title: "AI in Logistics: From Insight to Impact", copy: "Leveraging AI and analytics to optimize operations, predict disruptions and improve decision-making.", date: "Apr 18, 2024" },
  { cat: "financial", img: "insight-finance", tag: "Financial Integration", title: "Integrating Finance with Operations", copy: "Bridging operational and financial data for accurate reporting, better control and improved profitability.", date: "Apr 11, 2024" },
  { cat: "operational", img: "insight-operations", tag: "Operational Excellence", title: "Building Operational Excellence in Maritime Operations", copy: "Proven frameworks and strategies to eliminate waste, improve performance and drive sustainable growth.", date: "Apr 04, 2024" },
];

const TOPICS = [
  ["maritime-erp", "ship", "Maritime ERP"],
  ["edi", "exchange", "EDI & Integration"],
  ["digital", "rocket", "Digital Transformation"],
  ["operational", "gear", "Operational Excellence"],
  ["financial", "dollar", "Financial Integration"],
  ["ai", "globe", "AI & Analytics"],
];

function ArticleImage({ slug, tag }) {
  const [broken, setBroken] = useState(false);
  return (
    <div className="article-card__media" style={{ backgroundImage: `url('/images/${slug}.svg')` }}>
      {!broken && <img src={`/images/${slug}.jpg`} alt="" loading="lazy" onError={() => setBroken(true)} />}
      <span className="article-card__tag">{tag}</span>
    </div>
  );
}

export default function Insights() {
  useDocumentHead(
    "Insights | Varnika Consulting",
    "Expert perspectives, industry trends and practical insights on maritime ERP, EDI integration, digital transformation, operational excellence, financial integration and AI."
  );
  useReveal([]);

  const [filter, setFilter] = useState("all");
  const filterBarRef = useRef(null);
  const visible = useMemo(
    () => (filter === "all" ? ARTICLES : ARTICLES.filter((a) => a.cat === filter)),
    [filter]
  );

  function jumpToTopic(cat) {
    setFilter(cat);
    filterBarRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  // Newsletter form — same validation rules as the static site's initForms().
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const msg = fieldError({ type: "email", value: email, required: true, msgRequired: "Please enter your email address." });
    setError(msg);
    if (msg) {
      setStatus({ type: "err", text: "Please correct the highlighted fields and try again." });
      return;
    }
    setStatus({ type: "ok", text: "You're subscribed — thanks for joining." });
    setEmail("");
  }

  return (
    <>
      <section className="hero hero--compact hero--insights">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Insights</p>
              <h1>Insights That Navigate<br />Complexity</h1>
              <div className="rule" />
              <p>
                Stay informed with expert perspectives, industry trends and practical
                insights to help you make confident, data-driven decisions.
              </p>

              <div className="filter-tags" role="group" aria-label="Filter insights by category" ref={filterBarRef}>
                {FILTERS.map(([value, label]) => (
                  <button
                    key={value}
                    className={"filter-tag" + (filter === value ? " is-active" : "")}
                    type="button"
                    aria-pressed={filter === value}
                    onClick={() => setFilter(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="insights-layout">
            <div>
              <div className="grid grid--3">
                {visible.map((a) => (
                  <article className="article-card" data-category={a.cat} key={a.title}>
                    <ArticleImage slug={a.img} tag={a.tag} />
                    <div className="article-card__body">
                      <h3><a href="#top">{a.title}</a></h3>
                      <p>{a.copy}</p>
                    </div>
                    <div className="article-card__meta">
                      <span className="article-card__date"><Icon name="calendar" />{a.date}</span>
                      <a className="learn-more" href="#top">Read More <Icon name="arrow-right" /></a>
                    </div>
                  </article>
                ))}
              </div>

              {visible.length === 0 && (
                <p style={{ textAlign: "center", padding: "40px 0" }}>
                  No insights in this category yet — check back soon.
                </p>
              )}
            </div>

            <aside>
              <div className="sidebar-box">
                <h3>Popular Topics</h3>
                <ul className="topic-list">
                  {TOPICS.map(([cat, icon, label]) => (
                    <li key={cat}>
                      <a href="#top" onClick={(e) => { e.preventDefault(); jumpToTopic(cat); }}>
                        <Icon name={icon} />{label}<Icon name="arrow-right" className="topic-arrow" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="newsletter">
                <div className="newsletter__head">
                  <div>
                    <h3>Stay Ahead with Expert Insights</h3>
                    <p>Subscribe to our newsletter and receive the latest updates.</p>
                  </div>
                  <Icon name="mail-open" />
                </div>

                <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
                  <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!error}
                  />
                  <button type="submit">Subscribe</button>
                  {status && (
                    <div className={`form-status form-status--${status.type} is-visible`}>
                      <Icon name={status.type === "ok" ? "check-circle" : "alert"} />
                      <span>{status.text}</span>
                    </div>
                  )}
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
