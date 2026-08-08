import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { pathname, hash } = useLocation();

  // Router-driven equivalent of a normal page navigation: jump to the
  // top on a plain route change, or to the target section for a #hash link.
  useLayoutEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  // Zoho SalesIQ (index.html) renders its own floating launcher — no
  // component needed here. Back-to-top button removed per client request
  // (it overlapped the SalesIQ launcher in the bottom-right corner).
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
