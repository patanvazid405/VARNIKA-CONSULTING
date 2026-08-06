import { useState, Fragment } from "react";
import Card from "../components/Card";
import CTABand from "../components/CTABand";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import useDocumentHead from "../hooks/useDocumentHead";
import useReveal from "../hooks/useReveal";

const ORBIT_PINS = ["67% 20.6%", "83.5% 44.1%", "76% 71.9%", "50% 84%", "24% 71.9%", "16.5% 44.1%"];

const ORBIT_NODES = [
  { cls: "", x: "78%", y: "2%", icon: "users", label: <>Strategy &amp;<br />Consulting</> },
  { cls: "", x: "96%", y: "26%", icon: "gear", label: <>Implementation<br />&amp; Integration</> },
  { cls: "", x: "92%", y: "66%", icon: "sliders", label: <>Operations<br />Optimization</> },
  { cls: " orbit__node--center", x: "55%", y: "97%", icon: "cloud", label: <>Technology<br />Enablement</> },
  { cls: " orbit__node--left", x: "8%", y: "66%", icon: "chart-bar", label: <>Data &amp;<br />Analytics</> },
  { cls: " orbit__node--left", x: "2%", y: "26%", icon: "headset", label: <>Support &amp;<br />Continuous<br />Improvement</> },
];

const SOLUTION_AREAS = [
  ["business-consulting", "users", "Business Consulting", "Strategy, process improvement and technology advisory to drive operational excellence and sustainable growth.", "/services#business-consulting"],
  ["maritime-erp", "ship", "Maritime ERP Advisory", "End-to-end ERP strategy, assessment, selection and implementation for maritime and logistics operations.", "/services#maritime-erp"],
  ["edi-integration", "exchange", "EDI & Integration", "Seamless data exchange across partners, systems and platforms using global EDI standards and modern integration technologies.", "/services#edi-integration"],
  ["ai-advisory", "brain", "AI Advisory", "AI readiness assessment, use case identification and automation solutions to unlock intelligence and efficiency.", "/services#ai-advisory"],
  ["financial-integration", "dollar", "Financial Integration", "Integrate operations with finance for accurate reporting, controls, compliance and improved profitability.", "/services#financial-integration"],
  ["digital-transformation", "rocket", "Digital Transformation", "Modernize processes, automate workflows and build future-ready, connected digital ecosystems that scale.", "/services#digital-transformation"],
];

const LISTING_ROWS = [
  ["Pacific Star Shipping", "Singapore", "NVOCC", "A. Rao", "active", "Active", "$42,150"],
  ["Meridian Freight Forwarders", "Indonesia", "Forwarder", "S. Tan", "active", "Active", "$28,900"],
  ["Coastal Line Agencies", "Malaysia", "Agency", "A. Rao", "hold", "On Hold", "$11,420"],
  ["TransGlobal Logistics", "Vietnam", "3PL", "M. Reyes", "active", "Active", "$63,780"],
  ["Horizon Marine Agencies", "Philippines", "NVOCC", "S. Tan", "active", "Active", "$19,340"],
];

const STEPS = [
  ["search", "Assess", "Understand your business, challenges and objectives."],
  ["target", "Design", "Design tailored solutions and implementation roadmaps."],
  ["gear", "Implement", "Execute with best practices, tools and technology excellence."],
  ["chart-line", "Optimize", "Continuously monitor, measure and improve performance."],
];

export default function Solutions() {
  useDocumentHead(
    "Solutions | Varnika Consulting",
    "End-to-end solutions for maritime and logistics excellence — strategy, ERP, EDI integration, AI, financial integration and digital transformation."
  );
  useReveal();
  const [tab, setTab] = useState("listing");

  return (
    <>
      <section className="hero hero--solutions">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 ring-1 ring-white/20 backdrop-blur-sm mb-5 !mt-0">
                <span className="font-head text-[11px] font-semibold uppercase tracking-[2px] text-orange">Our Solutions</span>
              </Reveal>
              <Reveal as="h1" delay={1} className="!text-4xl lg:!text-[2.6rem] !font-bold !leading-[1.1] !tracking-tight !mb-5">
                End-to-End Solutions for<br />Maritime &amp; Logistics Excellence
              </Reveal>
              <Reveal delay={2} className="!max-w-lg !text-[15px] !leading-relaxed !text-white/85 !mb-7">
                We combine deep domain expertise with technology innovation to deliver
                solutions that drive efficiency, visibility, compliance and growth across
                your operations.
              </Reveal>
              <Reveal delay={3} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-md">
                {[["compass", "Domain Expertise"], ["network", "Technology Innovation"], ["handshake", "Tailored Solutions"], ["chart-line", "Measurable Results"]].map(([icon, label]) => (
                  <div key={label} className="flex items-center gap-2.5 text-[13.5px] font-medium text-white/90">
                    <Icon name={icon} className="!w-[18px] !h-[18px] text-orange shrink-0" />
                    {label}
                  </div>
                ))}
              </Reveal>
            </div>

            <div
              className="orbit"
              role="img"
              aria-label="Integrated solutions, lasting impact — supported by strategy and consulting, implementation and integration, operations optimization, technology enablement, data and analytics, and support and continuous improvement."
            >
              <div className="orbit__ring orbit__ring--outer" aria-hidden="true" />
              <div className="orbit__ring" aria-hidden="true" />

              <div className="orbit__center" aria-hidden="true">
                <Icon name="ship" />
                <strong>INTEGRATED<br />SOLUTIONS.<br />LASTING IMPACT.</strong>
              </div>

              {ORBIT_PINS.map((pos, i) => {
                const [px, py] = pos.split(" ");
                return <span key={i} className="orbit__pin" style={{ "--px": px, "--py": py }} aria-hidden="true" />;
              })}

              {ORBIT_NODES.map((n, i) => (
                <div key={i} className={"orbit__node" + n.cls} style={{ "--x": n.x, "--y": n.y }} aria-hidden="true">
                  <Icon name={n.icon} /><span>{n.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Our Solution Areas</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTION_AREAS.map(([id, icon, title, copy, href], i) => (
              <Card key={id} id={id} icon={icon} title={title} copy={copy} href={href} delay={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="product-showcase">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">See It In Action</p>
            <h2>Inside the Varnika Freight ERP</h2>
            <div className="rule" />
            <p>A look at the kind of customer operations module our Maritime ERP Advisory practice implements and configures for freight forwarders, shipping lines and NVOCCs.</p>
          </div>

          <div className="showcase">
            <div className="showcase__tabs" role="tablist" aria-label="Product showcase views">
              <button className={"showcase__tab" + (tab === "listing" ? " is-active" : "")} role="tab" aria-selected={tab === "listing"} type="button" onClick={() => setTab("listing")}>
                <Icon name="clipboard" />Customer Listing
              </button>
              <button className={"showcase__tab" + (tab === "profile" ? " is-active" : "")} role="tab" aria-selected={tab === "profile"} type="button" onClick={() => setTab("profile")}>
                <Icon name="users" />360&deg; Customer Profile
              </button>
              <button className={"showcase__tab" + (tab === "wizard" ? " is-active" : "")} role="tab" aria-selected={tab === "wizard"} type="button" onClick={() => setTab("wizard")}>
                <Icon name="layers" />Guided Onboarding
              </button>
            </div>

            <div className="showcase__panels">
              {tab === "listing" && (
                <div className="showcase__panel is-active" data-panel="listing">
                  <div className="browser-mock">
                    <div className="browser-mock__bar" aria-hidden="true"><span /><span /><span /></div>
                    <div className="browser-mock__body">
                      <div className="mock-ui" role="img" aria-label="Customer listing screen with search, filters, summary totals and an account table">
                        <div className="mock-toolbar">
                          <span className="mock-search"><Icon name="search" />Search customers…</span>
                          <span className="mock-chip">Type: All</span>
                          <span className="mock-chip">Country: All</span>
                          <span className="mock-chip">Status: Active</span>
                          <span className="mock-btn"><Icon name="download" />Export</span>
                        </div>
                        <div className="mock-stats">
                          <div className="mock-stat"><span className="mock-stat__label">Total Accounts</span><span className="mock-stat__value">148</span></div>
                          <div className="mock-stat"><span className="mock-stat__label">Outstanding Balance</span><span className="mock-stat__value">$1.18M</span></div>
                          <div className="mock-stat"><span className="mock-stat__label">Active Bookings</span><span className="mock-stat__value">37</span></div>
                        </div>
                        <div className="mock-table">
                          <div className="mock-table__row mock-table__row--head">
                            <span>Customer</span><span>Country</span><span>Type</span><span>Sales Exec</span><span>Status</span><span>Balance</span>
                          </div>
                          {LISTING_ROWS.map((row) => (
                            <div className="mock-table__row" key={row[0]}>
                              <span>{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span><span>{row[3]}</span>
                              <span><i className={`mock-badge mock-badge--${row[4]}`}>{row[5]}</i></span>
                              <span>{row[6]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="showcase__points">
                    <li><Icon name="search" />Filter every account by type, country, sales executive, status and payment terms</li>
                    <li><Icon name="chart-bar" />Live totals for outstanding balance, bookings and revenue right at the top of the list</li>
                    <li><Icon name="download" />Bulk import/export plus saved views for the searches your team runs every day</li>
                  </ul>
                </div>
              )}

              {tab === "profile" && (
                <div className="showcase__panel is-active" data-panel="profile">
                  <div className="browser-mock">
                    <div className="browser-mock__bar" aria-hidden="true"><span /><span /><span /></div>
                    <div className="browser-mock__body">
                      <div className="mock-ui mock-ui--profile" role="img" aria-label="360 degree customer profile screen showing business, contact, finance, tax and shipping tabs, with the tax tab open">
                        <div className="mock-profile__head">
                          <div className="mock-avatar"><Icon name="building" /></div>
                          <div>
                            <strong>Meridian Freight Forwarders</strong>
                            <div className="mock-profile__meta"><i className="mock-badge mock-badge--active">Active</i><span>Forwarder &middot; Indonesia</span></div>
                          </div>
                        </div>
                        <div className="mock-tabs">
                          <span>Business Info</span><span>Contacts</span><span>Finance</span><span className="is-active">Tax</span><span>Shipping</span>
                        </div>
                        <div className="mock-fields">
                          <div><label>NPWP</label><strong>01.234.567.8-901.000</strong></div>
                          <div><label>PKP Status</label><strong>Confirmed PKP</strong></div>
                          <div><label>e-Faktur</label><strong>Enabled</strong></div>
                          <div><label>Withholding Tax</label><strong>PPh 23 &middot; 2%</strong></div>
                        </div>
                        <div className="mock-timeline">
                          <div className="mock-timeline__item"><Icon name="check-circle" />Tax profile verified by <strong>A. Rao</strong> &middot; 2 days ago</div>
                          <div className="mock-timeline__item"><Icon name="pencil" />Shipping preference updated &middot; 6 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="showcase__points">
                    <li><Icon name="clipboard" />One record for business details, addresses, contacts, finance, tax and shipping preferences</li>
                    <li><Icon name="shield" />Built-in NPWP/PKP verification, e-Faktur and withholding-tax fields for local compliance</li>
                    <li><Icon name="clock" />Full activity timeline and field-level audit trail on every change, retained for 7 years</li>
                  </ul>
                </div>
              )}

              {tab === "wizard" && (
                <div className="showcase__panel is-active" data-panel="wizard">
                  <div className="browser-mock">
                    <div className="browser-mock__bar" aria-hidden="true"><span /><span /><span /></div>
                    <div className="browser-mock__body">
                      <div className="mock-ui mock-ui--wizard" role="img" aria-label="Eight step guided wizard for creating a new customer, currently on step 3, contacts">
                        <div className="mock-stepper">
                          <span className="is-done" data-n="1"><em>Basic Info</em></span>
                          <span className="is-done" data-n="2"><em>Addresses</em></span>
                          <span className="is-active" data-n="3"><em>Contacts</em></span>
                          <span data-n="4"><em>Finance</em></span>
                          <span data-n="5"><em>Tax</em></span>
                          <span data-n="6"><em>Shipping</em></span>
                          <span data-n="7"><em>Documents</em></span>
                          <span data-n="8"><em>Review</em></span>
                        </div>
                        <div className="mock-form">
                          <div className="mock-field"><label>Contact Name</label><div className="mock-input">Sarah Tan</div></div>
                          <div className="mock-field"><label>Designation</label><div className="mock-input">Operations Manager</div></div>
                          <div className="mock-field"><label>Email</label><div className="mock-input">sarah.tan@meridian-ff.com</div></div>
                          <div className="mock-field"><label>Phone</label><div className="mock-input">+65 6123 4567</div></div>
                        </div>
                        <div className="mock-form__actions">
                          <span className="mock-btn mock-btn--ghost">Save Draft</span>
                          <span className="mock-btn">Continue <Icon name="arrow-right" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="showcase__points">
                    <li><Icon name="check-circle" />8-step guided flow: Basic Info, Addresses, Contacts, Finance, Tax, Shipping, Documents, Review</li>
                    <li><Icon name="download" />Save-as-draft at every step, with document upload and progress tracking built in</li>
                    <li><Icon name="gear" />Auto-generated customer codes and pre-filled defaults cut onboarding time</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="methodology">
            <p className="methodology__title">Our Solution Methodology</p>
            <div className="methodology__steps">
              {STEPS.map(([icon, title, copy], i) => (
                <Fragment key={title}>
                  <div className="step">
                    <div className="step__icon"><Icon name={icon} /></div>
                    <div>
                      <h4>{title}</h4>
                      <p>{copy}</p>
                    </div>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="step__arrow" aria-hidden="true"><Icon name="arrow-right" /></div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <CTABand
            icon="clipboard"
            heading="Let's build smarter, connected and future-ready operations together."
            ctaLabel="Request Consultation"
            extra={
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 justify-center md:justify-start text-[12.5px] text-white/70">
                <a href="mailto:advisory@varnikaconsulting.com" className="inline-flex items-center gap-2 hover:text-orange transition-colors">
                  <Icon name="mail" className="!w-4 !h-4 text-orange" />advisory@varnikaconsulting.com
                </a>
                <a href="tel:+917483503223" className="inline-flex items-center gap-2 hover:text-orange transition-colors">
                  <Icon name="phone" className="!w-4 !h-4 text-orange" />+91 74835 03223
                </a>
                <span className="inline-flex items-center gap-2">
                  <Icon name="globe" className="!w-4 !h-4 text-orange" />www.varnikaconsulting.com
                </span>
                <a href="https://www.linkedin.com/company/varnika-consulting/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-orange transition-colors">
                  <Icon name="linkedin" className="!w-4 !h-4 text-orange" />Varnika Consulting (Company Page)
                </a>
              </div>
            }
          />
        </div>
      </section>
    </>
  );
}
