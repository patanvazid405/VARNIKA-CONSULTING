/* Ported 1:1 from js/main.js NAV / FOOTER_COLS — single source of truth
   for the header nav and footer link columns. */
export const NAV = [
  { key: "home", label: "Home", href: "/" },
  {
    key: "services", label: "Services", href: "/services",
    menu: [
      { label: "Business Consulting", href: "/services#business-consulting", icon: "users" },
      { label: "Maritime ERP Advisory", href: "/services#maritime-erp", icon: "ship" },
      { label: "EDI & Integration", href: "/services#edi-integration", icon: "exchange" },
      { label: "AI Advisory", href: "/services#ai-advisory", icon: "brain" },
      { label: "Financial Integration", href: "/services#financial-integration", icon: "dollar" },
      { label: "Digital Transformation", href: "/services#digital-transformation", icon: "rocket" },
      { label: "Operational Excellence", href: "/services#operational-excellence", icon: "gear" },
      { label: "Business Intelligence", href: "/services#business-intelligence", icon: "chart-bar" },
    ],
  },
  { key: "industries", label: "Industries", href: "/industries" },
  { key: "solutions", label: "Solutions", href: "/solutions" },
  { key: "about", label: "About Us", href: "/about" },
  { key: "insights", label: "Insights", href: "/insights" },
  { key: "contact", label: "Contact Us", href: "/contact" },
];

export const FOOTER_COLS = [
  {
    title: "Services",
    chev: true,
    links: [
      ["Business Consulting", "/services#business-consulting"],
      ["Maritime ERP Advisory", "/services#maritime-erp"],
      ["EDI & Integration", "/services#edi-integration"],
      ["AI Advisory", "/services#ai-advisory"],
      ["Financial Integration", "/services#financial-integration"],
      ["Operational Excellence", "/services#operational-excellence"],
      ["Digital Transformation", "/services#digital-transformation"],
    ],
  },
  {
    title: "Industries",
    split: true,
    links: [
      ["Shipping Lines", "/industries#shipping-lines"],
      ["Ports & Terminals", "/industries#ports-terminals"],
      ["NVOCCs", "/industries#nvoccs"],
      ["Container Depots", "/industries#container-depots"],
      ["Freight Forwarders", "/industries#freight-forwarders"],
      ["Logistics Providers", "/industries#logistics-providers"],
      ["Shipping Agencies", "/industries#shipping-agencies"],
      ["Customs Brokers", "/industries#customs-brokers"],
      ["Liner Operators", "/industries#liner-operators"],
      ["3PL / 4PL Providers", "/industries#3pl-4pl"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Zoho Solutions", "/solutions"],
      ["ERP Implementation", "/solutions#maritime-erp"],
      ["System Integration", "/solutions#edi-integration"],
      ["Process Automation", "/solutions#digital-transformation"],
      ["Data & Analytics", "/solutions#ai-advisory"],
      ["Cloud & Infrastructure", "/solutions"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Insights", "/insights"],
      ["Case Studies", "/insights"],
      ["Articles", "/insights"],
      ["Whitepapers", "/insights"],
      ["Downloads", "/insights"],
    ],
  },
];
