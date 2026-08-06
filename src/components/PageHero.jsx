import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";

// Single-column page hero (Services, Industries, Insights, legal pages).
// Reuses the .hero/.hero--compact wrapper classes for the proven photo
// background + gradient wash + mobile background-attachment:fixed fix;
// only the inner content is rebuilt with Tailwind.
export default function PageHero({ heroClass = "", eyebrow, title, description, breadcrumb, children }) {
  return (
    <section className={"hero hero--compact " + heroClass}>
      <div className="container">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-[12px] text-white/60 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="!text-white/60 hover:!text-white transition-colors">Home</Link>
            <Icon name="chevron-right" className="!w-3 !h-3" />
            <span className="text-white" aria-current="page">{breadcrumb}</span>
          </nav>
        )}

        <div className="max-w-3xl py-10 md:py-14">
          {eyebrow && (
            <Reveal className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 ring-1 ring-white/20 backdrop-blur-sm mb-5">
              <span className="font-head text-[11px] font-semibold uppercase tracking-[2px] text-orange">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal as="h1" delay={1} className="!text-[2.1rem] sm:!text-4xl lg:!text-[2.75rem] !font-bold !leading-[1.12] !tracking-tight !mb-5">
            {title}
          </Reveal>
          {description && (
            <Reveal delay={2} className="!max-w-xl !text-[15px] !leading-relaxed !text-white/85 !mb-0">
              {description}
            </Reveal>
          )}
          {children && <Reveal delay={3} className="mt-7">{children}</Reveal>}
        </div>
      </div>
    </section>
  );
}
