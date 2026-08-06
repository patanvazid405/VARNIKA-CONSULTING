import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Card from "../components/Card";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import StatRow from "../components/StatRow";
import useDocumentHead from "../hooks/useDocumentHead";
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
  useCounters();

  return (
    <>
      <PageHero
        heroClass="hero--industries"
        breadcrumb="Industries"
        title="Industries We Serve"
        description="We understand the unique challenges of the maritime and logistics ecosystem and deliver industry-specific solutions that drive efficiency, compliance and growth."
      />

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {INDUSTRIES.map(([id, icon, title, copy], i) => (
              <Card key={id} id={id} icon={icon} title={title} copy={copy} href="/contact" delay={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container">
          <Reveal className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-center md:text-left !mb-4">Our Impact in Numbers</h3>
              <StatRow stats={STATS} />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-8 md:border-l md:border-slate-200 md:pl-10">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="!mb-2 !text-lg">Ready to Transform Your Industry?</h3>
                <p className="!text-[13.5px] !mb-4">
                  Let us help you overcome challenges and unlock new opportunities with our domain expertise.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange to-orange-2 px-6 py-3 font-head text-[13px] font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(232,98,44,0.3)] transition-all hover:shadow-[0_10px_32px_rgba(232,98,44,0.45)] hover:-translate-y-0.5"
                >
                  Talk to an Expert
                  <Icon name="arrow-right" className="!w-4 !h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container">
          <Reveal className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {TRUST.map(([icon, label]) => (
              <span key={label} className="inline-flex items-center gap-2 text-[13px] font-medium text-navy-700">
                <Icon name={icon} className="!w-4 !h-4 text-orange" />
                {label}
              </span>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
