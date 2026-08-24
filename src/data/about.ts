import { COMPANY } from "@/config/company";
import { founder } from "@/data/founder";
import type { ProcessStage } from "@/types/process";
import { processStages } from "@/data/process";
import { projects } from "@/data/projects";

export const brandStory = {
  headline: "From Web Development to Business Software",
  paragraphs: [
    "What started as web development work evolved into a focused practice: building complete software systems that solve real operational problems for businesses.",
    "Instead of just building websites, the focus shifted to understanding how businesses actually operate — the workflows, the data, the pain points — and engineering systems that address those challenges directly.",
    "Today, that means building management platforms, custom web applications, automation systems, and integrated digital systems that connect the moving parts of a business into one coherent system.",
  ],
};

export const softwarePhilosophy = {
  headline: "Software Should Fit the Business",
  description:
    "Every business has different workflows, teams, approval processes, and operational challenges. Forcing a business into a fixed software template often creates more problems than it solves.",
  points: [
    "Different teams need different interfaces",
    "Different approval processes exist",
    "Data flows between departments in unique ways",
    "Customers have different expectations",
    "Operational challenges vary by industry",
    "Growth happens in unpredictable ways",
  ],
  conclusion:
    "Sometimes the better approach is to build software around the business rather than forcing the business into the software.",
};

export const principles = [
  {
    number: "01",
    title: "Understand the Business",
    description:
      "Software starts with understanding workflows, users, goals, pain points, constraints, data, and desired outcomes — not with choosing a framework.",
  },
  {
    number: "02",
    title: "Design the Right System",
    description:
      "The architecture should be designed around users, workflows, data, integrations, security, and future growth — not just what's technically popular.",
  },
  {
    number: "03",
    title: "Engineer the Software",
    description:
      "Build the frontend, backend, database, APIs, authentication, and integrations — with code that remains maintainable as the system evolves.",
  },
  {
    number: "04",
    title: "Build for What Comes Next",
    description:
      "Businesses evolve. The software should be designed to handle new features, users, workflows, and integrations without requiring a complete rebuild.",
  },
];

export const workingWithClients = {
  headline: "Built With the People Who Understand the Business",
  description:
    "Good software comes from genuine collaboration between business knowledge and engineering expertise. We work with the people who understand the problem to build the solution.",
  clientContributes: [
    "Domain knowledge and operational experience",
    "Business requirements and success criteria",
    "Workflow information and constraints",
    "Feedback and priority decisions",
  ],
  alphaTecContributes: [
    "Technical architecture and engineering",
    "UX design and implementation",
    "Development, testing and delivery",
    "Implementation guidance and documentation",
  ],
};

export const techCapabilities = {
  frontend: {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Responsive interfaces", "Interactive dashboards"],
  },
  backend: {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Business logic", "Authentication", "Permissions"],
  },
  data: {
    label: "Data",
    items: ["PostgreSQL", "Prisma", "Database architecture", "Reporting", "Data modeling"],
  },
  integrations: {
    label: "Integrations",
    items: ["REST APIs", "Payment integrations", "Third-party services", "Notification systems"],
  },
};

export const workingPrinciples = [
  "Build with purpose — solve real problems, not just write code.",
  "Keep it understandable — complex systems should still be usable.",
  "Engineer for maintainability — code that can be extended by any developer.",
  "Design for people — technology must work for the humans using it.",
  "Be honest about the software — don't exaggerate capabilities or results.",
  "Think beyond launch — design with future expansion in mind.",
];

export const aboutFaqs = [
  {
    question: "What types of software do you build?",
    answer:
      "We build business management systems, custom web applications, automation systems, API integrations, and data-driven dashboards for organizations that need more than off-the-shelf software.",
  },
  {
    question: "Do you work with clients outside Kenya?",
    answer:
      "Yes. We're based in Nairobi and collaborate remotely with businesses in other locations using modern project management tools.",
  },
  {
    question: "Do you work with specific industries?",
    answer:
      "We've built systems for property management, education, automotive services, and personal care. Our approach is adaptable to different operational contexts rather than industry-specific.",
  },
  {
    question: "Can you work with existing systems?",
    answer:
      "Yes. We can extend existing applications, integrate with current tools, or replace parts of a system that no longer serve the business.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Our focus is on building the system. Post-launch support can be discussed as a separate engagement based on the project's needs.",
  },
  {
    question: "How do projects typically start?",
    answer:
      "It starts with a conversation about the business problem. We then move into discovery — understanding workflows, defining requirements, and creating an architecture before any code is written.",
  },
  {
    question: "Can a project be developed in phases?",
    answer:
      "Yes. We recommend starting with core functionality, validating it works in production, then expanding based on real usage and feedback.",
  },
];