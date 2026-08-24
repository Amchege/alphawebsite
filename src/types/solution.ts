import type { SeoFields, ContentStatus } from "./common";

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionUseCase {
  title: string;
  description: string;
  projectSlug?: string;
}

export interface CapabilityGroup {
  label: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SystemFlowStep {
  layer: string;
  detail?: string;
}

export interface Solution {
  id: string;
  title: string;
  slug: string;
  shortTitle: string;
  shortDescription: string;
  description: string;
  category: string;
  problem: string;
  solution: string;
  useCases: SolutionUseCase[];
  capabilities: CapabilityGroup[];
  workflow: ProcessStep[];
  systemFlow: SystemFlowStep[];
  technology: {
    frontend: string[];
    backend: string[];
    database: string[];
    apis: string[];
    infrastructure: string[];
    analytics: string[];
  };
  integrations: string[];
  architecture: string;
  businessBenefits: string[];
  whoItsFor: string[];
  faqs: SolutionFaq[];
  relatedProjects: string[];
  relatedSolutions: string[];
  seo: SeoFields;
  featured: boolean;
  order: number;
  status: ContentStatus;
}