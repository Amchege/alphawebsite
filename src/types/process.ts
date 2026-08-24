export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  deliverable: string;
  icon: string;
}

export interface ProcessFaq {
  question: string;
  answer: string;
}

export interface ProcessExpectation {
  title: string;
  description: string;
}

export interface CollaborationPoint {
  client: string;
  alphaTec: string;
}