import { useMemo, useRef, useState } from "react";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import useDocumentHead from "../hooks/useDocumentHead";
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
    <div
      className="relative aspect-video rounded-t-2xl overflow-hidden bg-navy-800 bg-cover bg-center"
      style={{ backgroundImage: `url('/images/${slug}.svg')` }}
    >
      {!broken && (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={`/images/${slug}.jpg`}
          alt=""
          loading="lazy"
          onError={() => setBroken(true)}
        />
      )}
      <span className="absolute left-3 bottom-3 z-[1] rounded bg-orange px-2.5 py-1 font-head text-[10px] font-semibold uppercase tracking-wide text-white">
        {tag}
      </span>
    </div>
  );
}

export default function Insights() {
  useDocumentHead(
    "Insights | Varnika Consulting",
    "Expert perspectives, industry trends and practical insights on maritime ERP, EDI integration, digital transformation, operational excellence, financial integration and AI."
  );

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
      <PageHero
        heroClass="hero--insights"
        eyebrow="Insights"
        title="Insights That Navigate Complexity"
        description="Stay informed with expert perspectives, industry trends and practical insights to help you make confident, data-driven decisions."
      >
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter insights by category" ref={filterBarRef}>
          {FILTERS.map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
              className={
                "rounded-full px-4 py-2 text-[12.5px] font-medium transition-colors " +
                (filter === value
                  ? "bg-gradient-to-r from-orange to-orange-2 text-white"
                  : "bg-white/10 text-white/85 ring-1 ring-white/20 hover:bg-white/20")
              }
            >
              {label}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container grid lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((a, i) => (
                <Reveal
                  as="article"
                  key={a.title}
                  delay={i}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <ArticleImage slug={a.img} tag={a.tag} />
                  <div className="p-5 flex-1">
                    <h3 className="!text-[15px] !mb-2"><a href="#top" className="!text-navy-800 hover:!text-orange transition-colors">{a.title}</a></h3>
                    <p className="!text-[13px] !mb-0 !text-body">{a.copy}</p>
                  </div>
                  <div className="flex items-center justify-between px-5 py-4 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 text-[11.5px] text-body-light">
                      <Icon name="calendar" className="!w-3.5 !h-3.5" />
                      {a.date}
                    </span>
                    <a href="#top" className="inline-flex items-center gap-1.5 font-head text-[11.5px] font-semibold uppercase tracking-wide text-orange">
                      Read More
                      <Icon name="arrow-right" className="!w-3.5 !h-3.5" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            {visible.length === 0 && (
              <p className="text-center py-10 text-body">No insights in this category yet — check back soon.</p>
            )}
          </div>

          <aside className="flex flex-col gap-6">
            <Reveal className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="!text-[15px] !mb-4">Popular Topics</h3>
              <ul className="flex flex-col gap-1">
                {TOPICS.map(([cat, icon, label]) => (
                  <li key={cat}>
                    <a
                      href="#top"
                      onClick={(e) => { e.preventDefault(); jumpToTopic(cat); }}
                      className="group flex items-center gap-2.5 py-2 text-[13px] text-navy-700 hover:text-orange transition-colors"
                    >
                      <Icon name={icon} className="!w-4 !h-4 text-orange shrink-0" />
                      <span className="flex-1">{label}</span>
                      <Icon name="arrow-right" className="!w-3.5 !h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={1} className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 p-6">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="!text-white !text-[15px] !mb-1">Stay Ahead with Expert Insights</h3>
                  <p className="!text-white/60 !text-[12.5px] !mb-0">Subscribe to our newsletter and receive the latest updates.</p>
                </div>
                <Icon name="mail-open" className="!w-6 !h-6 text-orange shrink-0" />
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2.5">
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
                  className={
                    "w-full rounded-lg bg-white/10 px-4 py-2.5 text-[13px] text-white placeholder:text-white/40 ring-1 outline-none transition-colors " +
                    (error ? "ring-red-400" : "ring-white/20 focus:ring-orange")
                  }
                />
                {error && <span className="text-[11.5px] text-red-300">{error}</span>}
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-orange to-orange-2 py-2.5 font-head text-[12.5px] font-semibold uppercase tracking-wide text-white transition-shadow hover:shadow-[0_8px_20px_rgba(232,98,44,0.4)]"
                >
                  Subscribe
                </button>
                {status && (
                  <div className={"rounded-lg px-3 py-2 text-[12px] flex items-center gap-2 " + (status.type === "ok" ? "bg-green-500/15 text-green-300" : "bg-red-500/15 text-red-300")}>
                    <Icon name={status.type === "ok" ? "check-circle" : "alert"} className="!w-4 !h-4 shrink-0" />
                    <span>{status.text}</span>
                  </div>
                )}
              </form>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
