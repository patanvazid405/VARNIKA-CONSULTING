import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import useDocumentHead from "../hooks/useDocumentHead";

const CAPABILITIES = [
  "Business Consulting",
  "Maritime ERP",
  "AI Advisory",
  "EDI & Integration",
  "Operational Excellence",
  "Financial Integration",
  "Digital Transformation",
];

const SERVICES = [
  { icon: "users", title: "Business Consulting", copy: "Strategy, process improvement and technology advisory to drive business performance.", href: "/services#business-consulting" },
  { icon: "ship", title: "Maritime ERP Advisory", copy: "ERP strategy, assessment, selection and implementation for maritime operations.", href: "/services#maritime-erp" },
  { icon: "exchange", title: "EDI & Integration", copy: "Seamless data exchange across partners, systems and supply chain.", href: "/services#edi-integration" },
  { icon: "brain", title: "AI Advisory", copy: "AI readiness, use cases and automation to unlock intelligence and efficiency.", href: "/services#ai-advisory" },
  { icon: "dollar", title: "Financial Integration", copy: "Integrate operations with finance for accurate reporting, controls and profitability.", href: "/services#financial-integration" },
  { icon: "rocket", title: "Digital Transformation", copy: "Modernize processes, automate workflows and build future-ready digital ecosystems.", href: "/services#digital-transformation" },
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

  return (
    <>
      {/* ---------------------------------------------------------------- HERO */}
      <section className="hero hero--home">
        <div className="container">
          <div className="grid gap-12 py-16 lg:py-20 lg:grid-cols-[1.85fr_1fr] items-center">
            {/* Copy column */}
            <div>
              <Reveal className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 ring-1 ring-white/20 backdrop-blur-sm mb-6">
                <Icon name="compass" className="!w-4 !h-4 text-orange" />
                <span className="font-head text-[11px] font-semibold uppercase tracking-[2px] text-orange">
                  Transforming Maritime &amp; Logistics
                </span>
              </Reveal>

              <Reveal as="h1" delay={1} className="!text-4xl sm:!text-5xl lg:!text-[3.4rem] !font-bold !leading-[1.08] !tracking-tight !mb-6 max-w-2xl">
                Transforming Maritime &amp;{" "}
                <span className="bg-gradient-to-r from-orange to-orange-2 bg-clip-text text-transparent">
                  Logistics
                </span>{" "}
                Through Technology
              </Reveal>

              <Reveal delay={2} className="!max-w-xl !text-[15.5px] md:!text-base !leading-relaxed !text-white/85 !mb-8">
                We help maritime and logistics organizations optimize operations,
                modernize systems, integrate data and accelerate growth through
                consulting and technology.
              </Reveal>

              <Reveal delay={3} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-9 max-w-xl">
                {CAPABILITIES.map((c) => (
                  <div key={c} className="flex items-center gap-2.5 text-[13.5px] font-medium text-white/90">
                    <Icon name="check-circle" className="!w-[18px] !h-[18px] text-orange shrink-0" />
                    {c}
                  </div>
                ))}
              </Reveal>

              <Reveal delay={4} className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange to-orange-2 px-7 py-3.5 font-head text-[13.5px] font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(232,98,44,0.35)] transition-all hover:shadow-[0_10px_32px_rgba(232,98,44,0.5)] hover:-translate-y-0.5"
                >
                  Request Consultation
                  <Icon name="arrow-right" className="!w-4 !h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-7 py-3.5 font-head text-[13.5px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/15 hover:border-white/50"
                >
                  Explore Services
                </Link>
              </Reveal>
            </div>

            {/* Flow diagram card */}
            <Reveal
              delay={2}
              as="div"
              className="rounded-2xl bg-white/[0.07] backdrop-blur-xl ring-1 ring-white/15 shadow-2xl p-5 sm:p-6"
              aria-label="Systems we connect and the industry-standard messages that flow between them"
            >
              <div className="flex flex-col gap-2.5">
                {FLOW_NODES.map(([icon, label, active], i) => (
                  <div
                    key={label}
                    className={
                      "relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[12.5px] font-semibold font-head transition-colors " +
                      (active
                        ? "bg-gradient-to-r from-orange/90 to-orange-2/90 text-white shadow-[0_6px_18px_rgba(232,98,44,0.35)]"
                        : "bg-white/[0.06] text-white ring-1 ring-white/10 hover:bg-white/[0.1]")
                    }
                  >
                    <span
                      className={
                        "grid place-items-center w-7 h-7 rounded-lg shrink-0 " +
                        (active ? "bg-white/20" : "bg-white/10")
                      }
                    >
                      <Icon name={icon} className="!w-[15px] !h-[15px]" />
                    </span>
                    {label}
                    {i < FLOW_NODES.length - 1 && (
                      <span className="absolute left-[26px] -bottom-2.5 h-2.5 w-px bg-gradient-to-b from-orange/60 to-transparent" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-white/10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {FLOW_CODES.map((code) => (
                    <span
                      key={code}
                      className="rounded-full border border-orange/50 bg-orange/10 px-2.5 py-1 font-head text-[10px] font-semibold tracking-wide text-orange"
                    >
                      {code}
                    </span>
                  ))}
                </div>
                <p className="text-[11.5px] leading-snug text-white/60">
                  Industry Standard Messages Powering Global Trade
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ TRUST BAR */}
      <section className="bg-[#f5f7fb] py-10">
        <div className="container">
          <Reveal className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-3 shrink-0 md:pr-8 md:border-r border-slate-200">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-orange-soft text-orange">
                <Icon name="handshake" className="!w-5 !h-5" />
              </div>
              <p className="font-head text-[12.5px] font-semibold uppercase tracking-wide text-navy-800 leading-snug">
                Trusted by leading organizations<br className="hidden sm:block" />&amp; powered by technology
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 flex-1 w-full">
              {LOGOS.map(([file, alt, label, cls]) => (
                <div key={file} className="flex items-center justify-center gap-2 grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100">
                  <img
                    className={cls === "lg" ? "h-6" : cls === "ic" ? "h-5 w-5" : "h-5"}
                    src={`/images/logos/${file}`}
                    alt={alt}
                    loading="lazy"
                  />
                  {label && <span className="text-[13px] font-semibold text-navy-700">{label}</span>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- SERVICES */}
      <section className="py-16 md:py-20">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Our Services &amp; Expertise</p>
            <h2 className="!mb-0">Integrated Expertise. Measurable Impact.</h2>
            <div className="rule" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i} as={Link} to={s.href} className="group block rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-orange/30">
                <div className="grid place-items-center w-14 h-14 rounded-xl bg-gradient-to-br from-navy-800 to-navy-600 text-white mb-5 transition-transform group-hover:scale-105">
                  <Icon name={s.icon} className="!w-6 !h-6" />
                </div>
                <h3 className="!mb-2.5 !text-[17px] !text-navy-800">{s.title}</h3>
                <p className="!text-[13.5px] !mb-4 !text-body">{s.copy}</p>
                <span className="inline-flex items-center gap-1.5 font-head text-[12.5px] font-semibold uppercase tracking-wide text-orange">
                  Learn more
                  <Icon name="arrow-right" className="!w-3.5 !h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ INDUSTRIES */}
      <section className="pb-16 md:pb-20">
        <div className="container">
          <Reveal className="mb-8">
            <p className="eyebrow !mb-0">Industries We Serve</p>
          </Reveal>

          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map(([slug, icon, label], i) => (
              <Reveal
                key={slug}
                delay={i}
                as={Link}
                to={`/industries#${slug}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-medium text-navy-700 shadow-sm transition-all hover:border-orange hover:text-orange hover:shadow-md"
              >
                <Icon name={icon} className="!w-4 !h-4" />
                {label}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- CTA BAND */}
      <section className="pb-20">
        <div className="container">
          <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 px-8 py-12 md:px-14 md:py-14">
            <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-orange/10 blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="grid place-items-center w-16 h-16 rounded-2xl bg-white/10 ring-1 ring-white/20 text-orange shrink-0">
                <Icon name="clipboard" className="!w-7 !h-7" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="!text-white !text-2xl md:!text-[26px] !mb-2">
                  Let&rsquo;s build smarter, connected and future-ready operations together.
                </h3>
                <p className="!text-white/70 !text-[14px]">
                  Talk to our maritime and logistics specialists about where to start.
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange to-orange-2 px-7 py-3.5 font-head text-[13.5px] font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(232,98,44,0.35)] transition-all hover:shadow-[0_10px_32px_rgba(232,98,44,0.5)] hover:-translate-y-0.5 shrink-0"
              >
                Request Consultation
                <Icon name="arrow-right" className="!w-4 !h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
