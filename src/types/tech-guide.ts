export interface TechGuideSection {
  heading: string;
  body: string;
  items?: string[];
}

export interface TechGuide {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  section: "getting-started" | "client-guides" | "technical-guides" | "tools-templates";
  description: string;
  content: TechGuideSection[];
  keyTakeaways: string[];
  order: number;
  seo: {
    title: string;
    description: string;
  };
}