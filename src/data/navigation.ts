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
      { label: "Business Management Systems", href: "/solutions/business-software" },
      { label: "Custom Web Applications", href: "/solutions/custom-web-applications" },
      { label: "SaaS Development", href: "/solutions/saas-development" },
      { label: "Business Automation", href: "/solutions/business-automation" },
      { label: "API Integrations", href: "/solutions/api-integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "How We Build", href: "/process" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];