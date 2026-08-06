import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Card from "../components/Card";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import StatRow from "../components/StatRow";
import useDocumentHead from "../hooks/useDocumentHead";
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

const TRUST_BADGES = [
  ["shield", "Vendor-Neutral Advice"],
  ["star", "Industry Best Practices"],
  ["check-circle", "Proven Frameworks"],
  ["chart-bar", "Measurable Impact"],
];

export default function Services() {
  useDocumentHead(
    "Services | Varnika Consulting",
    "Comprehensive maritime and logistics services — business consulting, maritime ERP advisory, EDI and integration, AI advisory, financial integration, digital transformation, operational excellence and business intelligence."
  );
  useCounters();

  return (
    <>
      <PageHero
        heroClass="hero--services"
        eyebrow="Our Services"
        title={<>Comprehensive Consulting &amp; Technology<br className="hidden sm:block" /> Services for Maritime &amp; Logistics</>}
        description="From strategy and consulting to implementation and optimization — we deliver end-to-end solutions that drive efficiency, visibility and measurable business impact."
      >
        <StatRow stats={STATS} dark />
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(([id, icon, title, copy], i) => (
              <Card key={id} id={id} icon={icon} title={title} copy={copy} href="/contact" delay={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container">
          <Reveal className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm flex flex-wrap items-center gap-8">
            <div className="grid place-items-center w-16 h-16 rounded-2xl bg-orange-soft text-orange shrink-0">
              <Icon name="target" className="!w-7 !h-7" />
            </div>
            <div className="flex-1 min-w-[240px]">
              <h3 className="!mb-1.5 !text-lg">Not Sure Where to Start?</h3>
              <p className="!text-[13.5px] !mb-0">
                Let our experts assess your current state and recommend the right solutions for your business goals.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange to-orange-2 px-6 py-3 font-head text-[13px] font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(232,98,44,0.3)] transition-all hover:shadow-[0_10px_32px_rgba(232,98,44,0.45)] hover:-translate-y-0.5 shrink-0"
            >
              Schedule a Discovery Call
              <Icon name="arrow-right" className="!w-4 !h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="flex flex-wrap gap-x-6 gap-y-2 basis-full lg:basis-auto lg:flex-1 lg:justify-end">
              {TRUST_BADGES.map(([icon, label]) => (
                <span key={label} className="inline-flex items-center gap-2 text-[12.5px] text-body">
                  <Icon name={icon} className="!w-4 !h-4 text-orange" />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
