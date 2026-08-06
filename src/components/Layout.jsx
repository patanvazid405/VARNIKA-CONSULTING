import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import BackToTop from "./BackToTop";
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

  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
