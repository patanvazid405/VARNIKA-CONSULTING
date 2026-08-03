import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { NAV } from "../nav-data";

/* Matches the current route to a NAV entry so the orange active-link
   underline lands on the right item — the static site did this via
   body[data-page], driven by the route here instead. */
function useActiveKey() {
  const { pathname } = useLocation();
  if (pathname === "/") return "home";
  const found = NAV.find((item) => item.href !== "/" && pathname.startsWith(item.href));
  return found ? found.key : "";
}

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [openMenuKey, setOpenMenuKey] = useState(null);
  const active = useActiveKey();
  const headerRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
  }, [navOpen]);

  // Reset the mobile drawer if the viewport grows back past the hamburger
  // breakpoint (matches the 1100px breakpoint in styles.css).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1101px)");
    const onChange = (e) => { if (e.matches) setNavOpen(false); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    function onKeydown(e) {
      if (e.key === "Escape") {
        setNavOpen(false);
        setOpenMenuKey(null);
      }
    }
    function onClick(e) {
      if (!e.target.closest(".nav__item--has-menu")) setOpenMenuKey(null);
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeydown);
      document.removeEventListener("click", onClick);
    };
  }, []);

  // Route changes (clicking a nav link) should always close the drawer.
  const { pathname, hash } = useLocation();
  useEffect(() => { setNavOpen(false); setOpenMenuKey(null); }, [pathname, hash]);

  function handleMenuLinkClick(e, item) {
    const isMobile = window.matchMedia("(max-width: 1100px)").matches;
    if (isMobile) {
      e.preventDefault();
      setOpenMenuKey((k) => (k === item.key ? null : item.key));
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" ref={headerRef}>
        <div className="container">
          <Logo />
          <nav aria-label="Primary">
            <ul className="nav" id="primary-nav">
              {NAV.map((item) => {
                const isActive = item.key === active;
                const hasMenu = !!item.menu;
                return (
                  <li
                    key={item.key}
                    className={
                      "nav__item" +
                      (isActive ? " nav__item--active" : "") +
                      (hasMenu ? " nav__item--has-menu" : "") +
                      (openMenuKey === item.key ? " is-open" : "")
                    }
                  >
                    <Link
                      className="nav__link"
                      to={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={hasMenu ? (e) => handleMenuLinkClick(e, item) : undefined}
                    >
                      {item.label}
                      {hasMenu && <Icon name="chevron-down" className="nav__caret" />}
                    </Link>
                    {hasMenu && (
                      <div className="nav__menu">
                        {item.menu.map((sub) => (
                          <Link key={sub.label} to={sub.href}>
                            <Icon name={sub.icon} />
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
              <li>
                <div className="header-cta">
                  <Link className="btn btn--primary" to="/contact">
                    Request Consultation
                    <Icon name="arrow-right" />
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
          <div className="header-cta">
            <Link className="btn btn--primary" to="/contact">
              Request Consultation
              <Icon name="arrow-right" />
            </Link>
          </div>
          <button
            className="nav-toggle"
            type="button"
            aria-controls="primary-nav"
            aria-expanded={navOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            <Icon name="menu" className="icon-menu" />
            <Icon name="close" className="icon-close" />
          </button>
        </div>
      </header>
      <div className="nav-scrim" hidden={!navOpen} onClick={() => setNavOpen(false)} />
    </>
  );
}
