import { useState } from "react";
import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  const [hasFull, setHasFull] = useState(false);
  const markFile = light ? "/images/logo-mark-light.svg" : "/images/logo-mark.svg";
  const fullFile = light ? "/images/logo-full-light.png" : "/images/logo-full.png";

  return (
    <Link
      className={"logo" + (light ? " logo--light" : "") + (hasFull ? " logo--has-full" : "")}
      to="/"
      aria-label="Varnika Consulting — home"
    >
      <img
        className="logo__full"
        src={fullFile}
        alt="Varnika Consulting"
        onLoad={() => setHasFull(true)}
        onError={(e) => e.currentTarget.remove()}
      />
      <img className="logo__mark" src={markFile} alt="" width="46" height="35" />
      <span className="logo__text">
        <span className="logo__name">VARNIKA</span>
        <span className="logo__sub">CONSULTING</span>
        <span className="logo__tag">Your Partner in Maritime Excellence</span>
      </span>
    </Link>
  );
}
