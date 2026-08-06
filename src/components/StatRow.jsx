import Icon from "./Icon";
import Reveal from "./Reveal";

// Icon + animated number + label, used in hero/impact stat rows. Keeps the
// legacy `stat__num` class so useCounters (targets that selector) still
// drives the count-up animation without modification.
export default function StatRow({ stats, dark = false, className = "" }) {
  return (
    <div className={"flex flex-wrap gap-x-8 gap-y-6 " + className}>
      {stats.map(([icon, num, label], i) => (
        <Reveal key={label} delay={i} className="flex items-center gap-3.5 flex-1 min-w-[190px]">
          <span className={"grid place-items-center w-11 h-11 rounded-xl shrink-0 " + (dark ? "bg-white/10 text-orange" : "bg-orange-soft text-orange")}>
            <Icon name={icon} className="!w-5 !h-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className={"stat__num font-head text-xl font-bold " + (dark ? "text-white" : "text-navy-800")}>{num}</span>
            <span className={"text-[11.5px] max-w-[150px] " + (dark ? "text-white/60" : "text-body-light")}>{label}</span>
          </span>
        </Reveal>
      ))}
    </div>
  );
}
