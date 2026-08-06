import Icon from "../components/Icon";
import Card from "../components/Card";
import CTABand from "../components/CTABand";
import Reveal from "../components/Reveal";
import StatRow from "../components/StatRow";
import useDocumentHead from "../hooks/useDocumentHead";
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

const CTA_BADGES = [
  ["check-circle", "Expert Guidance"],
  ["gear", "Tailored Solutions"],
  ["chart-bar", "Measurable Impact"],
  ["handshake", "Long-term Partnership"],
];

export default function About() {
  useDocumentHead(
    "About Us | Varnika Consulting",
    "Varnika Consulting is a specialized business and technology consulting firm helping maritime and logistics organizations navigate change and achieve sustainable growth."
  );
  useCounters();

  return (
    <>
      <section className="hero hero--about">
        <div className="container">
          <div className="grid gap-12 py-14 lg:py-16 lg:grid-cols-[1.5fr_1fr] items-start">
            <div>
              <Reveal className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 ring-1 ring-white/20 backdrop-blur-sm mb-5">
                <span className="font-head text-[11px] font-semibold uppercase tracking-[2px] text-orange">About Us</span>
              </Reveal>
              <Reveal as="h1" delay={1} className="!text-4xl lg:!text-[2.75rem] !font-bold !leading-[1.1] !tracking-tight !mb-5 max-w-xl">
                Your Trusted Partner in Maritime &amp; Logistics Transformation
              </Reveal>
              <Reveal delay={2} className="!max-w-xl !text-[15px] !leading-relaxed !text-white/85 !mb-7">
                Varnika Consulting is a specialized business and technology consulting firm
                helping maritime and logistics organizations navigate change, optimize
                operations and achieve sustainable growth.
              </Reveal>
              <Reveal delay={3} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-lg">
                {CAPS.map(([icon, label]) => (
                  <div key={label} className="flex items-center gap-2.5 text-[13.5px] font-medium text-white/90">
                    <Icon name={icon} className="!w-[18px] !h-[18px] text-orange shrink-0" />
                    {label}
                  </div>
                ))}
              </Reveal>
            </div>

            <Reveal delay={2} className="rounded-2xl bg-white/[0.07] backdrop-blur-xl ring-1 ring-white/15 shadow-2xl p-6">
              <p className="font-head text-[11px] font-semibold uppercase tracking-[2px] text-orange mb-4">Our Core Values</p>
              <div className="flex flex-col gap-4">
                {VALUES.map(([icon, title, copy]) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 text-orange shrink-0">
                      <Icon name={icon} className="!w-[18px] !h-[18px]" />
                    </span>
                    <div>
                      <h4 className="!text-white !text-[13.5px] !font-semibold !mb-0.5">{title}</h4>
                      <p className="!text-white/60 !text-[12px] !leading-snug !mb-0">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-slate-200">
        <div className="container">
          <StatRow stats={STATS} />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Why Choose Varnika Consulting?</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map(([icon, title, copy], i) => (
              <Card key={title} icon={icon} title={title} copy={copy} delay={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <Reveal className="flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-[#f5f7fb] p-8">
            <p className="font-head text-[12.5px] font-semibold uppercase tracking-wide text-navy-800 shrink-0 md:pr-8 md:border-r border-slate-200">
              Powered by<br className="hidden sm:block" /> leading technologies
            </p>
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

      <section className="pb-20">
        <div className="container">
          <CTABand
            heading="Let's work together to solve complex challenges and unlock new opportunities for your business."
            ctaLabel="Schedule a Discovery Call"
            extra={
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 justify-center md:justify-start">
                {CTA_BADGES.map(([icon, label]) => (
                  <span key={label} className="inline-flex items-center gap-2 text-[12px] text-white/70">
                    <Icon name={icon} className="!w-4 !h-4 text-orange" />
                    {label}
                  </span>
                ))}
              </div>
            }
          />
        </div>
      </section>
    </>
  );
}
