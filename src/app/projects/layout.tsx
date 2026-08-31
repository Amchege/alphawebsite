import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore custom software systems built by Alpha Tec Solutions — property management, school systems, salon software and more.",
  alternates: {
    canonical: "https://alphatecdesigns.co.ke/projects/",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
