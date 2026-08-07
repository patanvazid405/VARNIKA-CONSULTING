import { useState } from "react";
import Icon from "./Icon";

// Placeholder floating chat button — swap this out once Zoho SalesIQ is
// configured. To wire up the real widget:
//   1. Get the SalesIQ embed script from Zoho (Settings → Installation).
//   2. Add it to index.html before </body>, OR load it here via a
//      useEffect that injects the script tag on mount.
//   3. Delete this component (and its <ChatWidget /> in Layout.jsx) —
//      SalesIQ renders its own floating launcher button.
export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    // Mobile: bottom-right, stacked above BackToTop (same corner, clear
    // vertical gap) — bottom-left on mobile sat directly over full-width
    // form submit buttons on tall pages like Contact. Desktop keeps the
    // original bottom-left spot since there's no such overlap there.
    <div className="fixed bottom-28 right-5 md:bottom-6 md:left-6 md:right-auto z-50 flex flex-col items-end md:items-start gap-3 print:hidden">
      {open && (
        <div className="w-72 max-w-[calc(100vw-2.5rem)] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden animate-fade-in-up">
          <div className="bg-gradient-to-br from-navy-900 to-navy-700 px-5 py-4 flex items-start gap-3">
            <div className="grid place-items-center w-9 h-9 rounded-full bg-white/10 text-orange shrink-0">
              <Icon name="headset" className="!w-[18px] !h-[18px]" />
            </div>
            <div>
              <p className="!text-white text-[13.5px] font-semibold font-head mb-0.5">Varnika Consulting</p>
              <p className="!text-white/60 text-[12px] mb-0">We typically reply within a few hours</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-[13px] text-body leading-relaxed mb-4">
              Live chat isn&rsquo;t connected yet — in the meantime, drop us a message and
              we&rsquo;ll get back to you within 24 business hours.
            </p>
            <a
              href="/contact"
              className="block text-center rounded-lg bg-gradient-to-r from-orange to-orange-2 px-5 py-2.5 font-head text-[12.5px] font-semibold uppercase tracking-wide text-white transition-shadow hover:shadow-[0_8px_20px_rgba(232,98,44,0.4)]"
            >
              Send a Message
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-navy-800 to-navy-600 text-white shadow-[0_10px_30px_rgba(15,36,68,0.35)] transition-transform hover:-translate-y-1 active:scale-90"
      >
        <Icon name={open ? "close" : "headset"} className="!w-6 !h-6" />
      </button>
    </div>
  );
}
