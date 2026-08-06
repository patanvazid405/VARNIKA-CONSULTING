import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";

// Gradient CTA banner, matching the Home page redesign. `extra` renders
// optional content below the heading (badge list / contact list) that
// varies per page.
export default function CTABand({ icon = "clipboard", heading, copy, ctaLabel, ctaHref = "/contact", extra }) {
  return (
    <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 px-8 py-12 md:px-14 md:py-14">
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-orange/10 blur-3xl" />
      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="grid place-items-center w-16 h-16 rounded-2xl bg-white/10 ring-1 ring-white/20 text-orange shrink-0">
          <Icon name={icon} className="!w-7 !h-7" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="!text-white !text-2xl md:!text-[26px] !mb-2">{heading}</h3>
          {copy && <p className="!text-white/70 !text-[14px] !mb-0">{copy}</p>}
          {extra}
        </div>
        <Link
          to={ctaHref}
          className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange to-orange-2 px-7 py-3.5 font-head text-[13.5px] font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(232,98,44,0.35)] transition-all hover:shadow-[0_10px_32px_rgba(232,98,44,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] shrink-0"
        >
          {ctaLabel}
          <Icon name="arrow-right" className="!w-4 !h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Reveal>
  );
}
