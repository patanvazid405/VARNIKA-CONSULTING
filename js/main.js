/* ==========================================================================
   VARNIKA CONSULTING — Shared site script
   --------------------------------------------------------------------------
   Everything that must stay identical across all 7 pages lives here:

     1. ICON SPRITE   — one inline <symbol> set, used via <svg><use href="#i-x">
     2. HEADER        — logo, nav, Services dropdown, CTA, mobile hamburger
     3. FOOTER        — brand blurb, link columns, contact, social, copyright
     4. BEHAVIOUR     — mobile drawer, dropdown, insights filter, form validation

   Each page only needs:
       <body data-page="home">            <- drives the orange active underline
       <div id="site-header"></div>
       ... page content ...
       <div id="site-footer"></div>
       <script src="js/main.js"></script>

   Edit the templates below once and every page updates.
   ========================================================================== */
(function () {
  "use strict";

  /* =======================================================================
     1. ICON SPRITE
     Stroke-based 24x24 icons. Colour is inherited via `currentColor`,
     stroke width / linecaps come from the `.icon` class in styles.css.
     ======================================================================= */
  var SPRITE = [
    // --- navigation / ui ---
    ["arrow-right", '<path d="M4 12h15M13 6l6 6-6 6"/>'],
    ["arrow-down", '<path d="M12 4v15M6 13l6 6 6-6"/>'],
    ["chevron-down", '<path d="M5 9l7 7 7-7"/>'],
    ["chevron-right", '<path d="M9 5l7 7-7 7"/>'],
    ["menu", '<path d="M4 7h16M4 12h16M4 17h16"/>'],
    ["close", '<path d="M6 6l12 12M18 6L6 18"/>'],
    ["search", '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>'],
    ["calendar", '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'],
    ["check-circle", '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.2l2.4 2.4 4.6-4.9"/>'],
    ["info", '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/>'],
    ["alert", '<circle cx="12" cy="12" r="8.5"/><path d="M12 8v5M12 16h.01"/>'],

    // --- maritime & logistics ---
    ["ship", '<path d="M3 18.5l1.6-5.4a1 1 0 01.96-.72h12.88a1 1 0 01.96.72L21 18.5"/><path d="M3 18.5c1.6 0 1.6 1.6 3.2 1.6s1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6 1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6"/><path d="M7.5 12.4V8.2h9v4.2M12 8.2V4.6M9.5 4.6h5"/>'],
    ["anchor", '<circle cx="12" cy="5" r="2.2"/><path d="M12 7.2V21M5 12.5H3.6a8.4 8.4 0 0016.8 0H19M8.5 10.5h7"/>'],
    ["truck", '<path d="M2.5 6.5h10.2v10H2.5zM12.7 10h3.6l3.2 3.2v3.3h-6.8z"/><circle cx="6.4" cy="18" r="1.7"/><circle cx="16.6" cy="18" r="1.7"/>'],
    ["container", '<rect x="3" y="7.5" width="18" height="10.5" rx="1"/><path d="M7 7.5v10.5M11 7.5v10.5M15 7.5v10.5M19 7.5v10.5"/>'],
    ["crane", '<path d="M3 20.5h18M7 20.5V4.5M4 7.2h16M7 4.5l4.6 2.7"/><path d="M16.8 7.2v5.9"/><rect x="14.6" y="13.1" width="4.4" height="3.6" rx=".6"/>'],
    ["warehouse", '<path d="M3.5 20V9.4L12 5l8.5 4.4V20"/><path d="M3.5 20h17M8 20v-6.5h8V20M8 16.5h8"/>'],
    ["port", '<path d="M3 20h18M5 20V8l7-4 7 4v12"/><path d="M9 20v-4.5h6V20M9 11.5h2M13 11.5h2"/>'],
    ["shipping-line", '<path d="M4 17.5h16l-1.8 3H5.8z"/><path d="M6 17.5v-5.2h12v5.2M9 12.3V8.5h6v3.8M12 8.5V5M9.6 5h4.8"/>'],
    ["globe", '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.5 3.6 8.5s-1.2 5.9-3.6 8.5c-2.4-2.6-3.6-5.5-3.6-8.5S9.6 6.1 12 3.5z"/>'],
    ["map-pin", '<path d="M12 21s6.5-5.6 6.5-10.2A6.5 6.5 0 005.5 10.8C5.5 15.4 12 21 12 21z"/><circle cx="12" cy="10.6" r="2.4"/>'],

    // --- services ---
    ["users", '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19.5c0-3.2 2.7-5.2 6-5.2s6 2 6 5.2"/><path d="M16.2 6.2a3 3 0 010 5.6M17.5 14.9c2 .8 3.5 2.4 3.5 4.6"/>'],
    ["exchange", '<path d="M20.2 11.4a8.2 8.2 0 00-14.1-5.2L3.8 8.4"/><path d="M3.5 4.2v4.4h4.4"/><path d="M3.8 12.6a8.2 8.2 0 0014.1 5.2l2.3-2.2"/><path d="M20.5 19.8v-4.4h-4.4"/>'],
    // Head-in-profile with a circuit node — reads clearly as "AI" at 24px.
    ["brain", '<path d="M15.6 20.4v-2.3a6.7 6.7 0 10-7.2 0v2.3"/><path d="M8.4 21.9h7.2"/><circle cx="12" cy="11.4" r="2.1"/><path d="M12 6.6v2.7M12 13.5v2.6M8.6 9.5l1.6 1M13.8 12.3l1.6 1M15.4 9.5l-1.6 1M10.2 12.3l-1.6 1"/>'],
    ["dollar", '<circle cx="12" cy="12" r="8.5"/><path d="M14.6 9.2c-.5-.9-1.5-1.4-2.6-1.4-1.5 0-2.6.8-2.6 2s1 1.7 2.6 2.1c1.7.4 2.8 1 2.8 2.2s-1.2 2.1-2.8 2.1c-1.2 0-2.2-.5-2.7-1.4M12 6.4v11.2"/>'],
    ["rocket", '<path d="M13.8 4.9c2.9-1.6 5.6-1.3 5.6-1.3s.3 2.7-1.3 5.6c-1.3 2.4-4.8 5.3-6.6 6.7l-4.4-4.4c1.4-1.8 4.3-5.3 6.7-6.6z"/><circle cx="14.9" cy="9.1" r="1.5"/><path d="M7.1 11.5l-2.6.6-.9 2.9 2.5.4M12.5 16.9l-.6 2.6-2.9.9-.4-2.5M4.2 19.8l2.6-2.6"/>'],
    ["gear", '<circle cx="12" cy="12" r="3.1"/><path d="M19.6 14.3a1.6 1.6 0 00.3 1.8l.1.1a1.9 1.9 0 11-2.7 2.7l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5v.2a1.9 1.9 0 11-3.8 0v-.1a1.6 1.6 0 00-1-1.5 1.6 1.6 0 00-1.8.3l-.1.1a1.9 1.9 0 11-2.7-2.7l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1h-.2a1.9 1.9 0 010-3.8h.1a1.6 1.6 0 001.5-1 1.6 1.6 0 00-.3-1.8l-.1-.1a1.9 1.9 0 112.7-2.7l.1.1a1.6 1.6 0 001.8.3h.1a1.6 1.6 0 001-1.5v-.2a1.9 1.9 0 013.8 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a1.9 1.9 0 112.7 2.7l-.1.1a1.6 1.6 0 00-.3 1.8v.1a1.6 1.6 0 001.5 1h.2a1.9 1.9 0 010 3.8h-.1a1.6 1.6 0 00-1.5 1z"/>'],
    ["chart-bar", '<path d="M4 20h16"/><rect x="5" y="12" width="3.4" height="6" rx=".5"/><rect x="10.3" y="7.5" width="3.4" height="10.5" rx=".5"/><rect x="15.6" y="4" width="3.4" height="14" rx=".5"/>'],
    ["chart-line", '<path d="M4 4v16h16"/><path d="M7.5 15l3.3-3.9 2.8 2.3 4.4-5.4"/>'],
    ["network", '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18.5" r="2.2"/><circle cx="19" cy="18.5" r="2.2"/><path d="M12 7.2v4.6M12 11.8L6.4 16.8M12 11.8l5.6 5"/>'],
    ["layers", '<path d="M12 3.5l8.5 4.4-8.5 4.4L3.5 7.9z"/><path d="M3.5 12.2l8.5 4.4 8.5-4.4M3.5 16.3l8.5 4.4 8.5-4.4"/>'],
    ["cloud", '<path d="M7 18.5a4 4 0 01-.4-8A5.5 5.5 0 0117.4 11a3.8 3.8 0 01-.4 7.5z"/><path d="M12 16.5v-5M9.7 13.3L12 11l2.3 2.3"/>'],
    ["headset", '<path d="M4.5 14v-2a7.5 7.5 0 0115 0v2"/><rect x="2.8" y="13.4" width="4" height="5.6" rx="1.6"/><rect x="17.2" y="13.4" width="4" height="5.6" rx="1.6"/><path d="M19.2 19v.6a2.4 2.4 0 01-2.4 2.4H13"/>'],
    ["target", '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/>'],
    ["compass", '<circle cx="12" cy="12" r="8.5"/><path d="M15.4 8.6l-1.8 5-5 1.8 1.8-5z"/>'],
    ["puzzle", '<path d="M10 4.5h4v1.8a1.6 1.6 0 103.2 0V4.5h2.3v4.4h-1.7a1.6 1.6 0 100 3.2h1.7v7.4h-4.4v-1.7a1.6 1.6 0 10-3.2 0v1.7H4.5v-4.4h1.8a1.6 1.6 0 100-3.2H4.5V8.9h5.5z"/>'],
    ["shield", '<path d="M12 3.2l7 2.6v5.6c0 4.2-2.9 7.7-7 9.4-4.1-1.7-7-5.2-7-9.4V5.8z"/><path d="M9.2 12.1l1.9 1.9 3.7-3.9"/>'],
    ["award", '<circle cx="12" cy="9.3" r="5.3"/><path d="M8.5 13.6L7 21l5-2.4 5 2.4-1.5-7.4"/><path d="M12 7l.9 1.7 1.9.3-1.4 1.3.3 1.9-1.7-.9-1.7.9.3-1.9-1.4-1.3 1.9-.3z" stroke-width="1.1"/>'],
    ["star", '<path d="M12 3.6l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9z"/>'],
    ["lightbulb", '<path d="M9.2 17.5a6 6 0 115.6 0v1.9H9.2z"/><path d="M9.8 21.5h4.4"/>'],
    ["handshake", '<path d="M3 11l3-3 3.4 3.4a1.6 1.6 0 002.3 0L14 9.2 21 15"/><path d="M14 9.2L11.2 6.4a2 2 0 00-2.8 0L6 8.8M21 15l-2.5 2.5-2.6-2.6M15.9 17.4l-1.9 1.9-2.5-2.5M13.5 19.3l-1.6 1.6-2.4-2.4"/>'],
    ["hand-heart", '<path d="M12.2 8.6l-.7-.7a2.1 2.1 0 00-3 3l3.7 3.6 3.7-3.6a2.1 2.1 0 00-3-3z"/><path d="M3.5 20.5v-5a2 2 0 012-2h1.3l2 2h3.4a1.4 1.4 0 010 2.8H10M20.5 15.5l-5 5H7"/>'],
    ["clipboard", '<rect x="5.5" y="4.5" width="13" height="16" rx="1.8"/><path d="M9 4.5V3.4h6v1.1"/><path d="M9 10.5h6M9 14h6M9 17.2h3.5"/>'],
    ["mail", '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.6 7l7.3 5.4a2 2 0 002.2 0L20.4 7"/>'],
    ["mail-open", '<path d="M3 10.5L12 4l9 6.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M3 10.5l9 6 9-6"/>'],
    ["phone", '<path d="M6.6 3.6h3l1.5 3.7-1.9 1.4a11.5 11.5 0 005.1 5.1l1.4-1.9 3.7 1.5v3a1.8 1.8 0 01-2 1.8A15.6 15.6 0 014.8 5.6a1.8 1.8 0 011.8-2z"/>'],
    ["linkedin", '<rect x="3.5" y="3.5" width="17" height="17" rx="2.6"/><path d="M8 10.5v6M8 7.4v.1M12 16.5v-3.4a2 2 0 014 0v3.4M12 16.5v-6"/>'],
    ["youtube", '<rect x="2.8" y="5.5" width="18.4" height="13" rx="3.6"/><path d="M10.4 9.6l4.6 2.4-4.6 2.4z"/>'],
    ["sliders", '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.1"/><circle cx="9" cy="17" r="2.1"/>'],
    ["download", '<path d="M12 3.5v11M8 11l4 4 4-4"/><path d="M4.5 16.5v2.2a1.8 1.8 0 001.8 1.8h11.4a1.8 1.8 0 001.8-1.8v-2.2"/>'],
    ["clock", '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.5 2"/>'],
    ["send", '<path d="M20.5 3.5L10.8 13.2M20.5 3.5l-6.2 17-3.5-7.3-7.3-3.5z"/>'],
    ["lock", '<rect x="4.5" y="10.5" width="15" height="9.5" rx="2"/><path d="M8 10.5V8a4 4 0 018 0v2.5"/>'],
    ["user", '<circle cx="12" cy="8.2" r="3.6"/><path d="M4.8 20c0-3.6 3.2-6 7.2-6s7.2 2.4 7.2 6"/>'],
    ["building", '<path d="M4.5 20.5V5a1.5 1.5 0 011.5-1.5h7A1.5 1.5 0 0114.5 5v15.5M14.5 9.5h4A1.5 1.5 0 0120 11v9.5M3 20.5h18"/><path d="M7.5 7.5h4M7.5 11h4M7.5 14.5h4M17 13.5v.01M17 17v.01"/>'],
    ["pencil", '<path d="M4 20l.9-4 11-11a2.2 2.2 0 013.1 3.1l-11 11z"/><path d="M13.5 6.5l4 4"/>'],

  ];

  function buildSprite() {
    var symbols = SPRITE.map(function (item) {
      return '<symbol id="i-' + item[0] + '" viewBox="0 0 24 24">' + item[1] + "</symbol>";
    }).join("");

    var host = document.createElement("div");
    host.id = "svg-sprite";
    host.setAttribute("aria-hidden", "true");
    host.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + symbols + "</svg>";
    document.body.insertBefore(host, document.body.firstChild);
  }

  /* Shorthand for an <svg> icon reference. */
  function icon(name, cls) {
    return (
      '<svg class="icon' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="#i-' +
      name + '"></use></svg>'
    );
  }

  /* =======================================================================
     2. SHARED DATA — single source of truth for nav + footer links
     ======================================================================= */
  var NAV = [
    { key: "home", label: "Home", href: "index.html" },
    {
      key: "services", label: "Services", href: "services.html",
      menu: [
        { label: "Business Consulting", href: "services.html#business-consulting", icon: "users" },
        { label: "Maritime ERP Advisory", href: "services.html#maritime-erp", icon: "ship" },
        { label: "EDI & Integration", href: "services.html#edi-integration", icon: "exchange" },
        { label: "AI Advisory", href: "services.html#ai-advisory", icon: "brain" },
        { label: "Financial Integration", href: "services.html#financial-integration", icon: "dollar" },
        { label: "Digital Transformation", href: "services.html#digital-transformation", icon: "rocket" },
        { label: "Operational Excellence", href: "services.html#operational-excellence", icon: "gear" },
        { label: "Business Intelligence", href: "services.html#business-intelligence", icon: "chart-bar" },
      ],
    },
    { key: "industries", label: "Industries", href: "industries.html" },
    { key: "solutions", label: "Solutions", href: "solutions.html" },
    { key: "about", label: "About Us", href: "about.html" },
    { key: "insights", label: "Insights", href: "insights.html" },
    { key: "contact", label: "Contact Us", href: "contact.html" },
  ];

  /* The Varnika "V" mark. Kept as a file so the client can drop their
     official vector straight over images/logo-mark.svg. The wordmark stays
     as HTML text so it can recolour for the navy footer (.logo--light). */
  function logoMark(light) {
    // The mark is largely navy, so the footer needs the white-on-navy variant.
    var file = light ? "images/logo-mark-light.svg" : "images/logo-mark.svg";
    return '<img class="logo__mark" src="' + file + '" alt="" width="46" height="35">';
  }

  /* Renders the composed lockup (mark + wordmark + tagline) by default, and
     automatically swaps to the client's own artwork the moment it exists:

         images/logo-full.png        used in the header
         images/logo-full-light.png  used in the footer (navy background)

     A display:none <img> is still fetched, so onload only fires when the file
     is really there — no flash, no code change needed to switch over.
     .svg works too: change the extension below. */
  function logo(light) {
    var full = light ? "images/logo-full-light.png" : "images/logo-full.png";
    return (
      '<a class="logo' + (light ? " logo--light" : "") + '" href="index.html" aria-label="Varnika Consulting — home">' +
        '<img class="logo__full" src="' + full + '" alt="Varnika Consulting" ' +
          "onload=\"this.closest('.logo').classList.add('logo--has-full')\" " +
          'onerror="this.remove()">' +
        logoMark(light) +
        '<span class="logo__text">' +
          '<span class="logo__name">VARNIKA</span>' +
          '<span class="logo__sub">CONSULTING</span>' +
          '<span class="logo__tag">Your Partner in Maritime Excellence</span>' +
        "</span>" +
      "</a>"
    );
  }

  /* =======================================================================
     3. HEADER TEMPLATE
     ======================================================================= */
  function headerHTML(active) {
    var items = NAV.map(function (item) {
      var isActive = item.key === active;
      var hasMenu = !!item.menu;

      var link =
        '<a class="nav__link" href="' + item.href + '"' +
        (isActive ? ' aria-current="page"' : "") + ">" +
          item.label +
          (hasMenu ? icon("chevron-down", "nav__caret") : "") +
        "</a>";

      var menu = "";
      if (hasMenu) {
        menu =
          '<div class="nav__menu">' +
            item.menu.map(function (sub) {
              return '<a href="' + sub.href + '">' + icon(sub.icon) + sub.label + "</a>";
            }).join("") +
          "</div>";
      }

      return (
        '<li class="nav__item' +
          (isActive ? " nav__item--active" : "") +
          (hasMenu ? " nav__item--has-menu" : "") + '">' +
          link + menu +
        "</li>"
      );
    }).join("");

    var cta =
      '<div class="header-cta">' +
        '<a class="btn btn--primary" href="contact.html">Request Consultation' + icon("arrow-right") + "</a>" +
      "</div>";

    return (
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<header class="site-header">' +
        '<div class="container">' +
          logo(false) +
          '<nav aria-label="Primary">' +
            '<ul class="nav" id="primary-nav">' + items + "<li>" + cta + "</li></ul>" +
          "</nav>" +
          cta +
          '<button class="nav-toggle" type="button" aria-controls="primary-nav" ' +
                  'aria-expanded="false" aria-label="Toggle navigation menu">' +
            icon("menu", "icon-menu") + icon("close", "icon-close") +
          "</button>" +
        "</div>" +
      "</header>" +
      '<div class="nav-scrim" hidden></div>'
    );
  }

  /* =======================================================================
     4. FOOTER TEMPLATE
     ======================================================================= */
  var FOOTER_COLS = [
    {
      title: "Services",
      chev: true, // orange "›" bullets, as in the reference footer
      links: [
        ["Business Consulting", "services.html#business-consulting"],
        ["Maritime ERP Advisory", "services.html#maritime-erp"],
        ["EDI & Integration", "services.html#edi-integration"],
        ["AI Advisory", "services.html#ai-advisory"],
        ["Financial Integration", "services.html#financial-integration"],
        ["Operational Excellence", "services.html#operational-excellence"],
        ["Digital Transformation", "services.html#digital-transformation"],
      ],
    },
    {
      title: "Industries",
      split: true,
      links: [
        ["Shipping Lines", "industries.html#shipping-lines"],
        ["Ports & Terminals", "industries.html#ports-terminals"],
        ["NVOCCs", "industries.html#nvoccs"],
        ["Container Depots", "industries.html#container-depots"],
        ["Freight Forwarders", "industries.html#freight-forwarders"],
        ["Logistics Providers", "industries.html#logistics-providers"],
        ["Shipping Agencies", "industries.html#shipping-agencies"],
        ["Customs Brokers", "industries.html#customs-brokers"],
        ["Liner Operators", "industries.html#liner-operators"],
        ["3PL / 4PL Providers", "industries.html#3pl-4pl"],
      ],
    },
    {
      title: "Solutions",
      links: [
        ["Zoho Solutions", "solutions.html"],
        ["ERP Implementation", "solutions.html#maritime-erp"],
        ["System Integration", "solutions.html#edi-integration"],
        ["Process Automation", "solutions.html#digital-transformation"],
        ["Data & Analytics", "solutions.html#ai-advisory"],
        ["Cloud & Infrastructure", "solutions.html"],
      ],
    },
    {
      title: "Resources",
      links: [
        ["Insights", "insights.html"],
        ["Case Studies", "insights.html"],
        ["Articles", "insights.html"],
        ["Whitepapers", "insights.html"],
        ["Downloads", "insights.html"],
      ],
    },
  ];

  function footerHTML() {
    var cols = FOOTER_COLS.map(function (col) {
      return (
        '<div class="footer-col' + (col.split ? " footer-col--split" : "") +
          (col.chev ? " footer-col--chev" : "") + '">' +
          "<h4>" + col.title + "</h4>" +
          "<ul>" +
            col.links.map(function (l) {
              return '<li><a href="' + l[1] + '">' + l[0] + "</a></li>";
            }).join("") +
          "</ul>" +
        "</div>"
      );
    }).join("");

    return (
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div class="footer-brand">' +
              logo(true) +
              "<p>Helping maritime and logistics organizations improve operational " +
              "efficiency, modernize technology and achieve measurable business " +
              "outcomes through business consulting and digital transformation.</p>" +
              '<div class="social">' +
                '<a href="#" aria-label="Varnika Consulting on LinkedIn">' + icon("linkedin") + "</a>" +
                '<a href="mailto:advisory@varnikaconsulting.com" aria-label="Email Varnika Consulting">' + icon("mail") + "</a>" +
                '<a href="#" aria-label="Varnika Consulting on YouTube">' + icon("youtube") + "</a>" +
              "</div>" +
            "</div>" +
            cols +
            '<div class="footer-col">' +
              "<h4>Contact Us</h4>" +
              '<ul class="footer-contact">' +
                "<li>" + icon("mail") + '<a href="mailto:advisory@varnikaconsulting.com">advisory@varnikaconsulting.com</a></li>' +
                // Plain text, not a tel: link, until the real number is supplied.
                "<li>" + icon("phone") + "<span>+91 XXXX XXXXX</span></li>" +
                "<li>" + icon("globe") + '<a href="index.html">www.varnikaconsulting.com</a></li>' +
                "<li>" + icon("map-pin") +
                  "<span><strong style=\"color:#fff;font-weight:600\">Global Presence</strong><br>" +
                  "Bengaluru, Karnataka, India<br>Nellore, Andhra Pradesh, India</span></li>" +
              "</ul>" +
            "</div>" +
          "</div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          '<div class="container" style="display:flex;justify-content:center;gap:26px;flex-wrap:wrap">' +
            "<span>&copy; 2024 Varnika Consulting. All Rights Reserved.</span>" +
            '<span class="sep">|</span>' +
            '<a href="#">Privacy Policy</a>' +
            '<span class="sep">|</span>' +
            '<a href="#">Terms of Use</a>' +
          "</div>" +
        "</div>" +
      "</footer>"
    );
  }

  /* =======================================================================
     5. BEHAVIOUR
     ======================================================================= */

  /* --- Mobile drawer + Services dropdown ------------------------------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var scrim = document.querySelector(".nav-scrim");
    if (!toggle) return;

    function setOpen(open) {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      if (scrim) scrim.hidden = !open;
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    if (scrim) scrim.addEventListener("click", function () { setOpen(false); });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        setOpen(false);
        document.querySelectorAll(".nav__item--has-menu.is-open")
          .forEach(function (i) { i.classList.remove("is-open"); });
      }
    });

    // Reset drawer state when resizing back up to desktop.
    // Must match the hamburger breakpoint in styles.css (max-width: 1100px)
    var mq = window.matchMedia("(min-width: 1101px)");
    (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(
      function (e) { if (e.matches) setOpen(false); }
    );

    /* Services dropdown.
       Desktop: CSS :hover opens it, the click below toggles it for
       keyboard/touch users. Mobile: the parent link becomes an accordion
       trigger instead of a navigation link. */
    document.querySelectorAll(".nav__item--has-menu").forEach(function (item) {
      var link = item.querySelector(".nav__link");
      link.addEventListener("click", function (e) {
        var isMobile = !mq.matches;
        // On mobile the caret opens the submenu rather than navigating.
        if (isMobile) {
          e.preventDefault();
          item.classList.toggle("is-open");
        }
      });
      // Touch devices on desktop widths: first tap opens, second follows link.
      link.addEventListener("touchstart", function (e) {
        if (mq.matches && !item.classList.contains("is-open")) {
          e.preventDefault();
          item.classList.add("is-open");
        }
      }, { passive: false });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav__item--has-menu")) {
        document.querySelectorAll(".nav__item--has-menu.is-open")
          .forEach(function (i) { i.classList.remove("is-open"); });
      }
    });
  }

  /* --- Insights category filter ---------------------------------------- */
  function initFilters() {
    var tags = document.querySelectorAll("[data-filter]");
    var cards = document.querySelectorAll("[data-category]");
    if (!tags.length || !cards.length) return;

    tags.forEach(function (tag) {
      tag.addEventListener("click", function () {
        var value = tag.getAttribute("data-filter");

        tags.forEach(function (t) {
          t.classList.toggle("is-active", t === tag);
          t.setAttribute("aria-pressed", String(t === tag));
        });

        var shown = 0;
        cards.forEach(function (card) {
          var match = value === "all" || card.getAttribute("data-category") === value;
          card.hidden = !match;
          if (match) shown++;
        });

        var empty = document.getElementById("insights-empty");
        if (empty) empty.hidden = shown !== 0;
      });
    });
  }

  /* --- Product showcase tabs (solutions.html) ---------------------------- */
  function initShowcase() {
    var tabs = document.querySelectorAll("[data-tab]");
    var panels = document.querySelectorAll("[data-panel]");
    if (!tabs.length || !panels.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var value = tab.getAttribute("data-tab");

        tabs.forEach(function (t) {
          var active = t === tab;
          t.classList.toggle("is-active", active);
          t.setAttribute("aria-selected", String(active));
        });

        panels.forEach(function (panel) {
          panel.classList.toggle("is-active", panel.getAttribute("data-panel") === value);
        });
      });
    });
  }

  /* --- Form validation -------------------------------------------------
     Any <form data-validate> is handled here. Rules come from the inputs
     themselves (required / type="email" / minlength). No backend call is
     made yet — on success we show an inline confirmation and reset.
     REPLACE: post to your endpoint inside the success branch below.      */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

  function fieldError(input) {
    // Checkboxes validate on checked state — an unchecked box still has a value.
    if (input.type === "checkbox") {
      return input.hasAttribute("required") && !input.checked
        ? input.getAttribute("data-msg-required") || "Please tick this box to continue."
        : "";
    }
    var value = (input.value || "").trim();
    if (input.hasAttribute("required") && !value) {
      return input.getAttribute("data-msg-required") || "This field is required.";
    }
    if (!value) return "";
    if (input.type === "email" && !EMAIL_RE.test(value)) {
      return "Enter a valid email address.";
    }
    if (input.type === "tel" && !/^[+()\-\s\d]{7,20}$/.test(value)) {
      return "Enter a valid phone number.";
    }
    var min = parseInt(input.getAttribute("minlength"), 10);
    if (min && value.length < min) {
      return "Please enter at least " + min + " characters.";
    }
    return "";
  }

  function showFieldError(input, message) {
    var wrap = input.closest(".field") || input.parentElement;
    var slot = wrap.querySelector(".error");
    wrap.classList.toggle("has-error", !!message);
    input.setAttribute("aria-invalid", message ? "true" : "false");
    if (slot) slot.textContent = message;
  }

  function setStatus(form, type, message) {
    var box = form.querySelector(".form-status");
    if (!box) return;
    box.className = "form-status form-status--" + type + " is-visible";
    box.innerHTML = icon(type === "ok" ? "check-circle" : "alert") + "<span>" + message + "</span>";
  }

  function initForms() {
    document.querySelectorAll("form[data-validate]").forEach(function (form) {
      var inputs = form.querySelectorAll("input, textarea, select");

      // Re-validate a field once it has been touched.
      inputs.forEach(function (input) {
        input.addEventListener("blur", function () {
          showFieldError(input, fieldError(input));
        });
        input.addEventListener("change", function () {
          showFieldError(input, fieldError(input));
        });
        input.addEventListener("input", function () {
          if ((input.closest(".field") || input.parentElement).classList.contains("has-error")) {
            showFieldError(input, fieldError(input));
          }
        });
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var firstBad = null;

        inputs.forEach(function (input) {
          var msg = fieldError(input);
          showFieldError(input, msg);
          if (msg && !firstBad) firstBad = input;
        });

        if (firstBad) {
          setStatus(form, "err", "Please correct the highlighted fields and try again.");
          firstBad.focus();
          return;
        }

        // --- Success. No backend wired up yet. ---
        setStatus(form, "ok", form.getAttribute("data-success") ||
          "Thank you — your message has been received. We'll be in touch shortly.");
        form.reset();
        inputs.forEach(function (i) { showFieldError(i, ""); });
      });
    });
  }

  /* --- Footer year ------------------------------------------------------ */
  function initYear() {
    var y = new Date().getFullYear();
    document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = y; });
  }

  /* =======================================================================
     6. BOOT
     ======================================================================= */
  /* Safari before 12 only honours xlink:href on <use>, so every icon would be
     blank there. Mirror href onto xlink:href once the sprite is in place —
     harmless on modern browsers, which prefer href. */
  function shimUseHref() {
    var XLINK = "http://www.w3.org/1999/xlink";
    document.querySelectorAll("use[href]").forEach(function (u) {
      if (!u.getAttributeNS(XLINK, "href")) {
        u.setAttributeNS(XLINK, "xlink:href", u.getAttribute("href"));
      }
    });
  }

  function init() {
    buildSprite();

    var headerHost = document.getElementById("site-header");
    var footerHost = document.getElementById("site-footer");
    var active = document.body.getAttribute("data-page") || "";

    if (headerHost) headerHost.innerHTML = headerHTML(active);
    if (footerHost) footerHost.innerHTML = footerHTML();

    shimUseHref();
    initNav();
    initFilters();
    initShowcase();
    initForms();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose the icon helper so pages can build markup with matching icons.
  window.VARNIKA = { icon: icon };
})();
