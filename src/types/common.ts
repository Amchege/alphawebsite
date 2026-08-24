/** Reusable SEO metadata shape for content entries */
export interface SeoFields {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

/** Generic media asset structure */
export interface MediaAsset {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

/** Status of a project or content piece */
export type ContentStatus = "draft" | "published" | "archived";