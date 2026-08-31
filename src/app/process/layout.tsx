import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Development Process",
  description: "Learn how Alpha Tec Solutions builds custom software — from discovery and design through development, testing and deployment.",
  alternates: {
    canonical: "https://alphatecdesigns.co.ke/process/",
  },
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
