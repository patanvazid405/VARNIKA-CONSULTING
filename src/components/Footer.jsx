import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { FOOTER_COLS } from "../nav-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>
              Helping maritime and logistics organizations improve operational
              efficiency, modernize technology and achieve measurable business
              outcomes through business consulting and digital transformation.
            </p>
            <div className="social">
              <a href="https://www.linkedin.com/company/varnika-consulting/" target="_blank" rel="noopener" aria-label="Varnika Consulting on LinkedIn"><Icon name="linkedin" /></a>
              <a href="mailto:advisory@varnikaconsulting.com" aria-label="Email Varnika Consulting"><Icon name="mail" /></a>
              <a href="#" aria-label="Varnika Consulting on YouTube"><Icon name="youtube" /></a>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div
              key={col.title}
              className={"footer-col" + (col.split ? " footer-col--split" : "") + (col.chev ? " footer-col--chev" : "")}
            >
              <h4>{col.title}</h4>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={label}><Link to={href}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li><Icon name="mail" /><a href="mailto:advisory@varnikaconsulting.com">advisory@varnikaconsulting.com</a></li>
              <li><Icon name="phone" /><a href="tel:+917483503223">+91 74835 03223</a></li>
              <li><Icon name="globe" /><Link to="/">www.varnikaconsulting.com</Link></li>
              <li>
                <Icon name="map-pin" />
                <span>
                  <strong style={{ color: "#fff", fontWeight: 600 }}>Global Presence</strong><br />
                  Bengaluru, Karnataka, India<br />Nellore, Andhra Pradesh, India<br />Midland, Texas, USA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: 26, flexWrap: "wrap" }}>
          <span>&copy; {year} Varnika Consulting. All Rights Reserved.</span>
          <span className="sep">|</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="sep">|</span>
          <Link to="/terms-of-use">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
