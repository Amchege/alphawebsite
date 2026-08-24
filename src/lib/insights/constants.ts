import { Category, Topic, Author } from './types';

export const INSIGHTS_CATEGORIES: Category[] = [
  {
    slug: 'business-software',
    name: 'Business Software',
    description: 'Understanding custom business software, when to build it, and how it drives operational efficiency.',
    order: 1,
  },
  {
    slug: 'software-development',
    name: 'Software Development',
    description: 'How software is built, from architecture to deployment, explained for business decision makers.',
    order: 2,
  },
  {
    slug: 'business-automation',
    name: 'Business Automation',
    description: 'Identifying and automating repetitive processes to reduce manual work and improve accuracy.',
    order: 3,
  },
  {
    slug: 'management-systems',
    name: 'Management Systems',
    description: 'Building and choosing management systems that scale with growing businesses.',
    order: 4,
  },
  {
    slug: 'web-applications',
    name: 'Web Applications',
    description: 'Custom web applications that solve specific business problems and improve user experience.',
    order: 5,
  },
  {
    slug: 'api-integrations',
    name: 'API & Integrations',
    description: 'Connecting business systems through APIs and understanding integration architecture.',
    order: 6,
  },
  {
    slug: 'data-reporting',
    name: 'Data & Reporting',
    description: 'Dashboards, reporting systems, and using data to improve business visibility.',
    order: 7,
  },
  {
    slug: 'software-strategy',
    name: 'Software Strategy',
    description: 'Strategic decisions about software investment, build vs buy, and digital transformation.',
    order: 8,
  },
  {
    slug: 'industry-insights',
    name: 'Industry Insights',
    description: 'Software solutions and trends specific to industries we serve.',
    order: 9,
  },
];

export const INSIGHTS_TOPICS: Topic[] = [
  { slug: 'custom-software', name: 'Custom Software' },
  { slug: 'business-automation', name: 'Business Automation' },
  { slug: 'digital-transformation', name: 'Digital Transformation' },
  { slug: 'workflow-management', name: 'Workflow Management' },
  { slug: 'react', name: 'React' },
  { slug: 'nextjs', name: 'Next.js' },
  { slug: 'nodejs', name: 'Node.js' },
  { slug: 'postgresql', name: 'PostgreSQL' },
  { slug: 'apis', name: 'APIs' },
  { slug: 'dashboards', name: 'Dashboards' },
  { slug: 'management-systems', name: 'Management Systems' },
  { slug: 'software-architecture', name: 'Software Architecture' },
  { slug: 'property-management', name: 'Property Management' },
  { slug: 'education-software', name: 'Education Software' },
  { slug: 'automotive-software', name: 'Automotive Software' },
  { slug: 'salon-software', name: 'Salon Software' },
];

export const ALPHA_TEC_AUTHORS: Author[] = [
  {
    name: 'Alpha Tec Solutions',
    role: 'Full-Stack Software Development Team',
    bio: 'We build custom business software, management systems, and web applications that solve real operational problems.',
    image: '/images/team/alpha-tec-default.jpg',
    linkedin: 'https://linkedin.com/company/alpha-tec-solutions',
    github: 'https://github.com/alpha-tec-solutions',
    website: 'https://alphatecsolutions.com',
  },
];

export const CONTENT_TYPES = {
  ARTICLE: 'article',
  GUIDE: 'guide',
  CASE_STUDY: 'case-study',
  TECHNICAL: 'technical',
  OPINION: 'opinion',
} as const;