import type { ProcessStage, ProcessFaq, ProcessExpectation, CollaborationPoint } from "@/types/process";

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the Business",
    description:
      "We start with the business problem, not the technology. Before writing any code, we need to understand how the organization operates, where processes break down, and what outcomes matter most.",
    details: [
      "Current workflows and operational processes",
      "Business objectives and success criteria",
      "Users and their roles in the workflow",
      "Pain points and inefficiencies",
      "Existing tools and their limitations",
      "Operational constraints and requirements",
      "Desired outcomes and success metrics",
    ],
    deliverable: "Business Understanding Document",
    icon: "search",
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Turn Problems Into Requirements",
    description:
      "We translate business understanding into structured requirements—what the system needs to do, who needs to use it, and how information should flow through it.",
    details: [
      "User roles and permissions",
      "Functional requirements",
      "Business rules and validations",
      "Workflow definitions",
      "Data requirements and relationships",
      "Integration points with existing systems",
      "Feature prioritization",
    ],
    deliverable: "Requirements & Workflow Map",
    icon: "list",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Design the Experience",
    description:
      "Before building the application, we define how users will interact with it. Good design makes complex workflows feel simple and intuitive.",
    details: [
      "Information architecture",
      "User flows and task flows",
      "Wireframes and screen layouts",
      "Interface design and visual system",
      "Responsive behavior across devices",
      "Accessibility considerations",
    ],
    deliverable: "Product Experience",
    icon: "pen-tool",
  },
  {
    number: "04",
    title: "Architect",
    subtitle: "Design the System Behind the Interface",
    description:
      "We think beyond the UI. The architecture defines how the frontend, backend, database, and integrations work together to create a reliable, maintainable system.",
    details: [
      "Frontend application architecture",
      "Backend API design",
      "Database schema and data modeling",
      "Authentication and authorization",
      "Integration architecture",
      "Reporting and analytics structure",
      "Infrastructure considerations",
    ],
    deliverable: "Software Architecture",
    icon: "layout",
  },
  {
    number: "05",
    title: "Build",
    subtitle: "Turn Architecture Into Software",
    description:
      "With a clear architecture and design in place, development becomes structured and predictable. We build the system layer by layer, integrating as we go.",
    details: [
      "Frontend component development",
      "Backend API implementation",
      "Database schema implementation",
      "Authentication and authorization",
      "Business logic implementation",
      "Integration development",
      "Responsive interface development",
    ],
    deliverable: "Working Software",
    icon: "code",
  },
  {
    number: "06",
    title: "Test",
    subtitle: "Make Sure It Works in the Real World",
    description:
      "We validate that the software works as expected—not just in development, but in the conditions users will actually encounter.",
    details: [
      "Functional testing across workflows",
      "Responsive testing on devices",
      "Cross-browser compatibility",
      "Input validation and error handling",
      "User acceptance testing",
      "Performance assessment",
      "Security-conscious review",
    ],
    deliverable: "Validated System",
    icon: "check-circle",
  },
  {
    number: "07",
    title: "Deploy",
    subtitle: "Prepare for Real Users",
    description:
      "Deployment is more than moving code to a server. It's about making sure the production environment is configured correctly and the system is ready for real-world use.",
    details: [
      "Production environment configuration",
      "Database setup and migration",
      "Domain and SSL configuration",
      "Application deployment",
      "Monitoring setup",
      "Backup configuration",
      "Final validation",
    ],
    deliverable: "Production System",
    icon: "rocket",
  },
  {
    number: "08",
    title: "Improve",
    subtitle: "Software Doesn't Stop at Launch",
    description:
      "After launch, businesses evolve. The software may need new features, workflow improvements, performance optimization, or additional integrations based on real usage.",
    details: [
      "New feature development",
      "Workflow improvements",
      "Performance optimization",
      "Additional integrations",
      "Reporting enhancements",
      "User feedback implementation",
      "Security updates",
    ],
    deliverable: "Evolved System",
    icon: "trending-up",
  },
];

export const processFaqs: ProcessFaq[] = [
  {
    question: "How do we start a software project?",
    answer: "It starts with a conversation about your business—what you're trying to achieve, where current processes break down, and what a successful outcome looks like. From there, we move into discovery and requirements.",
  },
  {
    question: "What information do you need before development begins?",
    answer: "We need a clear understanding of the business problem, the users, the current workflow, and the desired outcomes. You don't need to have everything figured out—that's part of our discovery process.",
  },
  {
    question: "Can you work with an existing system?",
    answer: "Yes. Whether it's extending an existing application, replacing part of a system, or integrating with what you already have, we work with your current technology where it makes sense.",
  },
  {
    question: "Can you build both the frontend and backend?",
    answer: "Yes. We're a full-stack team, so we handle the entire application—from the user interface through the API to the database. This allows for better integration and faster development.",
  },
  {
    question: "Can the software be developed in phases?",
    answer: "Absolutely. Many projects benefit from starting with core functionality, validating it works, and then expanding. We can plan the architecture to support this from the start.",
  },
  {
    question: "How involved do we need to be during development?",
    answer: "We work with whatever level of involvement works for you. Some clients prefer regular check-ins and feedback sessions, others prefer to see progress at defined milestones. We'll agree on the approach upfront.",
  },
  {
    question: "Can the system integrate with other platforms?",
    answer: "Yes. We design systems with integration in mind—whether it's payment processors, email services, third-party APIs, or your existing internal tools.",
  },
  {
    question: "Do you work with clients outside Kenya?",
    answer: "Yes. We're based in Nairobi but work with clients globally using modern collaboration tools and practices.",
  },
];

export const processExpectations: ProcessExpectation[] = [
  { title: "Clear Communication", description: "Regular updates and transparent project status." },
  { title: "Structured Development", description: "A clear process from discovery through deployment." },
  { title: "Transparent Requirements", description: "Documented decisions so nothing is assumed." },
  { title: "Thoughtful Architecture", description: "Systems designed to work reliably and scale." },
  { title: "Responsive Design", description: "Interfaces that work on all devices." },
  { title: "Maintainable Code", description: "Code that can be extended by other developers." },
  { title: "Business-Focused Thinking", description: "Technology decisions driven by business needs." },
  { title: "Iterative Improvement", description: "Software that can evolve with your business." },
];

export const collaborationPoints: CollaborationPoint[] = [
  { client: "Business knowledge and domain expertise", alphaTec: "Technical architecture and engineering" },
  { client: "Goals and success criteria", alphaTec: "Implementation roadmap and planning" },
  { client: "Workflow information and requirements", alphaTec: "User experience and interface design" },
  { client: "Feedback and priorities", alphaTec: "Development, testing, and delivery" },
];

export const architectureLayers = [
  { layer: "User Experience", tech: "React / Next.js", description: "Interfaces users interact with" },
  { layer: "Application", tech: "Node.js / Express", description: "Business logic and API layer" },
  { layer: "Data", tech: "PostgreSQL / Prisma", description: "Structured data storage and queries" },
  { layer: "Integrations", tech: "REST APIs / Webhooks", description: "External services and connections" },
];