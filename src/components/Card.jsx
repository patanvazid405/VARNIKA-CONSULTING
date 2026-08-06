import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";

// Icon + title + copy card, matching the Home page redesign. `href` makes
// the whole card a link (service/industry cards); omit it for a static
// card (About's "Why Choose Us" grid).
export default function Card({ icon, title, copy, href, delay = 0, id }) {
  const inner = (
    <>
      <div className="grid place-items-center w-14 h-14 rounded-xl bg-gradient-to-br from-navy-800 to-navy-600 text-white mb-5 transition-transform group-hover:scale-105">
        <Icon name={icon} className="!w-6 !h-6" />
      </div>
      <h3 className="!mb-2.5 !text-[16px] !text-navy-800">{title}</h3>
      <p className="!text-[13.5px] !mb-4 !text-body">{copy}</p>
      {href && (
        <span className="inline-flex items-center gap-1.5 font-head text-[12.5px] font-semibold uppercase tracking-wide text-orange">
          Learn more
          <Icon name="arrow-right" className="!w-3.5 !h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </>
  );

  const className =
    "group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(232,98,44,0.25)] hover:border-orange/30 active:translate-y-0 active:scale-[0.98]";

  if (href) {
    return (
      <Reveal as={Link} to={href} id={id} delay={delay} className={className}>
        {inner}
      </Reveal>
    );
  }
  return (
    <Reveal as="article" id={id} delay={delay} className={className}>
      {inner}
    </Reveal>
  );
}
