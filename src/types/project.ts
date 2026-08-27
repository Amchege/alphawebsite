import type { SeoFields, MediaAsset, ContentStatus } from "./common";

export type ClientType = "corporate" | "sme" | "startup" | "other";

export interface ProjectResult {
  metric: string;
  value: string;
  description?: string;
}

export interface ProjectFeatureGroup {
  label: string;
  features: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface SystemFlowStep {
  label: string;
  detail?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  liveUrl?: string;
  shortTitle?: string;
  shortDescription: string;
  longDescription: string;
  industry: string;
  category: string;
  clientType: ClientType;
  projectType: string;
  status: ContentStatus;
  featured: boolean;
  order: number;

  challenge: string;
  solution: string;
  overview: string;

  features: ProjectFeatureGroup[];
  workflow: WorkflowStep[];
  systemFlow: SystemFlowStep[];

  technologies: string[];
  frontendTechnologies: string[];
  backendTechnologies: string[];
  databaseTechnologies: string[];
  otherTechnologies: string[];
  integrations: string[];

  screenshots: MediaAsset[];
  heroImage: MediaAsset | null;
  showcaseVideo?: string;
  architectureImage: MediaAsset | null;

  results: ProjectResult[];
  valuePoints: string[];

  futureImprovements: string[];
  limitations: string[];

  seo: SeoFields;
  publishedAt: string;
  updatedAt: string;
}