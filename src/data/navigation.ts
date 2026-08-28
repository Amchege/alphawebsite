import type { NavLink, FooterColumn } from "@/types/navigation";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "How We Build", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Custom Software", href: "/solutions/business-software/" },
      { label: "Business Automation", href: "/solutions/business-automation/" },
      { label: "Data & Analytics", href: "/solutions/data-business-intelligence/" },
      { label: "API Integrations", href: "/solutions/api-integrations/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Our Process", href: "/process/" },
      { label: "Insights", href: "/insights/" },
      { label: "Tech Hub", href: "/tech-hub/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];