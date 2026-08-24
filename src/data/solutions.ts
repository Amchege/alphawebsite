import type { Solution } from "@/types/solution";

export const solutions: Solution[] = [
  {
    id: "sol-001",
    title: "Business Software Built Around How You Work",
    slug: "business-software",
    shortTitle: "Business Software",
    shortDescription:
      "Custom software designed around your operational workflows, not the other way around.",
    description:
      "Replace disconnected processes and manual workflows with software designed around your organization's actual operations.",
    category: "Business Software",
    problem:
      "As businesses grow, operations often become a collection of disconnected tools—spreadsheets, email chains, paper records, and standalone applications that don't communicate with each other. Teams spend significant time moving data between systems, reconciling information, and working around software limitations instead of focusing on their actual work. The result is operational friction, limited visibility, and processes that don't scale.",
    solution:
      "Instead of forcing your business into generic software, we build systems around the way your organization actually operates. This means understanding your workflows, your data, your users, and your goals—then designing software that connects these elements into one coherent system. The result is a platform that fits your business rather than requiring your business to fit the platform.",
    useCases: [
      {
        title: "Business Management Platforms",
        description: "Centralized systems for managing operations, users, and workflows.",
        projectSlug: "property-management-system",
      },
      {
        title: "Internal Operational Systems",
        description: "Platforms that streamline day-to-day business operations.",
      },
      {
        title: "Workflow Management",
        description: "Systems that track, route, and automate business processes.",
      },
      {
        title: "Customer Management",
        description: "Applications for managing customer relationships and interactions.",
      },
      {
        title: "Administration Platforms",
        description: "Systems for administrative tasks, approvals, and record-keeping.",
        projectSlug: "school-management-system",
      },
      {
        title: "Industry-Specific Applications",
        description: "Software tailored to the unique requirements of specific industries.",
        projectSlug: "car-wash-management-system",
      },
    ],
    capabilities: [
      {
        label: "Frontend",
        items: [
          "Responsive web interfaces",
          "Role-based dashboards",
          "Data entry forms",
          "Interactive reporting",
        ],
      },
      {
        label: "Backend",
        items: [
          "Business logic implementation",
          "REST API development",
          "Authentication and authorization",
          "Workflow automation",
        ],
      },
      {
        label: "Data",
        items: [
          "Database design and modeling",
          "Data validation and integrity",
          "Reporting and analytics",
          "Data export capabilities",
        ],
      },
      {
        label: "Integrations",
        items: [
          "Third-party API connections",
          "Payment processing",
          "Notification systems",
          "External data synchronization",
        ],
      },
    ],
    workflow: [
      { number: "01", title: "Discover", description: "Understand the business, its operations, and where current processes create friction." },
      { number: "02", title: "Map", description: "Document workflows, data flows, and requirements in detail." },
      { number: "03", title: "Design", description: "Create the user experience and system architecture." },
      { number: "04", title: "Build", description: "Develop the frontend, backend, database, and integrations." },
      { number: "05", title: "Test", description: "Validate functionality, security, and usability." },
      { number: "06", title: "Deploy", description: "Prepare the system for production use." },
      { number: "07", title: "Improve", description: "Iterate based on feedback and evolving needs." },
    ],
    systemFlow: [
      { layer: "Users", detail: "Staff, managers, administrators" },
      { layer: "Web Application", detail: "Interface and user experience" },
      { layer: "API Layer", detail: "Business logic and data handling" },
      { layer: "Database", detail: "Structured data storage" },
      { layer: "Integrations", detail: "External systems and services" },
      { layer: "Reporting", detail: "Business insights and analytics" },
    ],
    technology: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "TypeScript"],
      database: ["PostgreSQL", "Prisma"],
      apis: ["REST APIs", "Authentication"],
      infrastructure: ["Cloud hosting", "CI/CD"],
      analytics: ["Custom dashboards", "Data visualization"],
    },
    integrations: ["Payment systems", "Email services", "Third-party APIs", "Notification platforms"],
    architecture: "A layered web application architecture with a responsive frontend, REST API backend, relational database, and integration points for external services.",
    businessBenefits: [
      "Centralized operations in one system",
      "Better visibility into business performance",
      "Reduced manual data handling",
      "Improved workflow efficiency",
      "Organized, searchable records",
      "Scalable digital infrastructure",
    ],
    whoItsFor: [
      "Growing businesses outgrowing spreadsheets",
      "Organizations with complex operational workflows",
      "Companies using multiple disconnected tools",
      "Businesses needing custom internal platforms",
      "SMEs requiring operational management systems",
    ],
    faqs: [
      { question: "Can you build software around our existing workflow?", answer: "Yes. We start by understanding how your business actually operates, then design the software to support and improve those workflows—not replace them with a generic template." },
      { question: "Can the system integrate with tools we already use?", answer: "We design systems with integration in mind. Whether it's payment processors, email services, or internal tools, we can build connections to keep data flowing between systems." },
      { question: "Can we start with a smaller version and expand later?", answer: "Absolutely. We recommend building core functionality first, then expanding based on actual usage and feedback. This reduces risk and ensures the system grows with your needs." },
      { question: "Can the application support multiple user roles?", answer: "Yes. We implement role-based access control so different users see different interfaces and capabilities based on their responsibilities." },
      { question: "Do you work with international clients?", answer: "Yes. We're based in Nairobi, Kenya and work with clients globally using modern collaboration tools and practices." },
    ],
    relatedProjects: [
      "property-management-system",
      "school-management-system",
      "car-wash-management-system",
      "salon-barbershop-management-system",
    ],
    relatedSolutions: ["management-systems", "business-automation"],
    seo: {
      title: "Custom Business Software Development | Alpha Tec Solutions",
      description: "We design and build custom business software around your operational workflows. Management platforms, internal systems, and workflow automation.",
    },
    featured: true,
    order: 1,
    status: "published",
  },
  {
    id: "sol-002",
    title: "Web Applications Designed for Your Users and Business Goals",
    slug: "custom-web-applications",
    shortTitle: "Web Applications",
    shortDescription:
      "Powerful web applications built with modern architecture, thoughtful UX, and business logic that works.",
    description:
      "Web applications that serve real business purposes—from customer portals to internal platforms to data-driven dashboards.",
    category: "Web Applications",
    problem:
      "Off-the-shelf web applications often don't fit the specific ways a business operates. Custom forms, unique data structures, role-based access, and specific workflows get forced into generic interfaces that create more work rather than less. Meanwhile, building a custom application requires expertise in frontend development, backend engineering, database design, and security—capabilities that many organizations don't have in-house.",
    solution:
      "We build web applications from the ground up, designed for your users, your workflows, and your business goals. This means creating interfaces that match how your team actually works, backend logic that handles your specific business rules, and data structures that organize information the way you think about it. The result is an application that feels like it was made for your organization—because it was.",
    useCases: [
      { title: "Customer Portals", description: "Self-service platforms for customers to access information, make requests, or manage accounts." },
      { title: "Internal Platforms", description: "Staff-facing applications for operations, management, and collaboration." },
      { title: "Dashboards", description: "Data visualization interfaces for monitoring KPIs and business performance." },
      { title: "Booking Systems", description: "Scheduling and reservation platforms for services and appointments.", projectSlug: "salon-barbershop-management-system" },
      { title: "Workflow Applications", description: "Applications that guide users through multi-step business processes." },
      { title: "Data-Driven Applications", description: "Applications that collect, process, and present business data." },
    ],
    capabilities: [
      {
        label: "User Experience",
        items: [
          "Responsive design for all devices",
          "Intuitive navigation and workflows",
          "Accessible interfaces",
          "Fast, smooth interactions",
        ],
      },
      {
        label: "Architecture",
        items: [
          "Scalable application structure",
          "Clean API design",
          "State management",
          "Error handling and recovery",
        ],
      },
      {
        label: "Security",
        items: [
          "Authentication and authorization",
          "Data encryption",
          "Input validation",
          "Secure session management",
        ],
      },
      {
        label: "Performance",
        items: [
          "Optimized loading",
          "Efficient data fetching",
          "Caching strategies",
          "Database query optimization",
        ],
      },
    ],
    workflow: [
      { number: "01", title: "Requirements", description: "Understand the application's purpose, users, and business objectives." },
      { number: "02", title: "Architecture", description: "Design the technical structure, data models, and API contracts." },
      { number: "03", title: "UI/UX Design", description: "Create wireframes, prototypes, and visual designs." },
      { number: "04", title: "Development", description: "Build the frontend, backend, and database components." },
      { number: "05", title: "Testing", description: "Test functionality, performance, and user experience." },
      { number: "06", title: "Deployment", description: "Deploy to production and monitor performance." },
    ],
    systemFlow: [
      { layer: "Users", detail: "Browser, mobile, tablet" },
      { layer: "Frontend", detail: "React / Next.js application" },
      { layer: "API", detail: "Request handling and business logic" },
      { layer: "Services", detail: "External integrations and processing" },
      { layer: "Database", detail: "Data persistence and queries" },
    ],
    technology: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
      backend: ["Node.js", "Express", "TypeScript"],
      database: ["PostgreSQL", "Prisma"],
      apis: ["REST APIs", "Webhooks"],
      infrastructure: ["Cloud hosting", "CDN", "SSL"],
      analytics: [],
    },
    integrations: ["Authentication providers", "Payment gateways", "Email services", "Third-party APIs"],
    architecture: "A modern web application stack with a React-based frontend, Node.js API backend, PostgreSQL database, and integration layer for external services.",
    businessBenefits: [
      "Application that fits your exact workflows",
      "Better user adoption through intuitive design",
      "Scalable architecture for growth",
      "Secure handling of business data",
      "Fast, reliable performance",
    ],
    whoItsFor: [
      "Businesses needing custom web-based tools",
      "Organizations with complex user workflows",
      "Companies requiring customer-facing portals",
      "Teams needing internal management platforms",
      "Organizations outgrowing spreadsheet-based processes",
    ],
    faqs: [
      { question: "Can you build both the frontend and backend?", answer: "Yes. We're a full-stack development team, so we handle the entire application—from the user interface to the database and everything in between." },
      { question: "Will the application work on mobile devices?", answer: "We build responsive web applications that work on desktops, tablets, and mobile browsers. For cases where a native mobile app is needed, we can discuss that separately." },
      { question: "How do you handle application security?", answer: "We implement authentication, authorization, input validation, encryption for sensitive data, and follow security best practices throughout development." },
      { question: "Can the application be expanded later?", answer: "We design applications with extensibility in mind. Adding new features, integrations, or user roles is part of the architecture from the start." },
    ],
    relatedProjects: [
      "property-management-system",
      "salon-barbershop-management-system",
      "car-wash-management-system",
    ],
    relatedSolutions: ["business-software", "management-systems"],
    seo: {
      title: "Custom Web Application Development | Alpha Tec Solutions",
      description: "We build custom web applications—portals, dashboards, booking systems, and internal platforms—designed for your users and business goals.",
    },
    featured: true,
    order: 2,
    status: "published",
  },
  {
    id: "sol-003",
    title: "Turn Repetitive Business Processes Into Digital Workflows",
    slug: "business-automation",
    shortTitle: "Business Automation",
    shortDescription:
      "Replace manual, repetitive tasks with connected digital workflows that run reliably.",
    description:
      "Business process automation that connects your operations, reduces manual work, and keeps information flowing.",
    category: "Automation",
    problem:
      "Many businesses spend significant staff hours on repetitive tasks—copying data between systems, sending notifications manually, generating reports by hand, routing approvals through email, and reconciling records across spreadsheets. These tasks aren't just time-consuming; they're error-prone, difficult to track, and they don't scale. As volume increases, the manual approach breaks down.",
    solution:
      "We identify the repetitive, rule-based processes in your operations and replace them with automated digital workflows. This might mean automatically sending notifications when an event occurs, routing approvals through a digital workflow, synchronizing data between systems, or generating reports on a schedule. The goal isn't to automate everything—it's to automate the tasks that don't require human judgment so your team can focus on work that does.",
    useCases: [
      { title: "Notification Automation", description: "Automatic alerts and notifications based on business events." },
      { title: "Data Synchronization", description: "Keeping data consistent across multiple systems automatically." },
      { title: "Approval Workflows", description: "Digital routing and approval processes instead of email chains." },
      { title: "Report Generation", description: "Automated creation and distribution of regular reports." },
      { title: "Task Routing", description: "Automatically assigning tasks based on rules and conditions." },
      { title: "Data Entry Automation", description: "Reducing manual data entry through integrations and validation." },
    ],
    capabilities: [
      {
        label: "Triggers",
        items: [
          "Event-based automation",
          "Scheduled tasks",
          "Condition-based rules",
          "Manual trigger options",
        ],
      },
      {
        label: "Actions",
        items: [
          "Send notifications",
          "Update records",
          "Create tasks",
          "Call external APIs",
        ],
      },
      {
        label: "Flow Control",
        items: [
          "Conditional branching",
          "Parallel execution",
          "Error handling",
          "Retry logic",
        ],
      },
      {
        label: "Monitoring",
        items: [
          "Execution logs",
          "Failure alerts",
          "Performance tracking",
          "Audit trails",
        ],
      },
    ],
    workflow: [
      { number: "01", title: "Identify", description: "Map current manual processes and identify automation opportunities." },
      { number: "02", title: "Design", description: "Design automated workflows with triggers, conditions, and actions." },
      { number: "03", title: "Build", description: "Implement the automation logic and integrations." },
      { number: "04", title: "Test", description: "Validate automation behavior with real scenarios." },
      { number: "05", title: "Deploy", description: "Activate automation in the production environment." },
      { number: "06", title: "Monitor", description: "Track automation performance and handle exceptions." },
    ],
    systemFlow: [
      { layer: "Business Event", detail: "Trigger condition met" },
      { layer: "Automation Engine", detail: "Rule evaluation and execution" },
      { layer: "Actions", detail: "Notifications, updates, API calls" },
      { layer: "Systems", detail: "Connected business systems" },
      { layer: "Monitoring", detail: "Logs and alerts" },
    ],
    technology: {
      frontend: ["React", "TypeScript"],
      backend: ["Node.js", "Express", "TypeScript"],
      database: ["PostgreSQL"],
      apis: ["Webhooks", "REST APIs", "Cron jobs"],
      infrastructure: ["Background processing", "Queue systems"],
      analytics: ["Execution logs", "Success rates"],
    },
    integrations: ["Email systems", "Slack/Teams notifications", "Internal APIs", "Third-party webhooks"],
    architecture: "An event-driven automation layer that sits alongside your business application, monitoring for triggers and executing defined workflows.",
    businessBenefits: [
      "Reduced time on repetitive tasks",
      "Fewer manual errors",
      "Consistent process execution",
      "Faster response to business events",
      "Better visibility into operations",
    ],
    whoItsFor: [
      "Businesses with high-volume repetitive tasks",
      "Organizations using email for process routing",
      "Companies manually synchronizing data between systems",
      "Teams spending significant time on reporting",
      "Operations with approval chains that slow work down",
    ],
    faqs: [
      { question: "What kind of processes can be automated?", answer: "Any rule-based, repetitive process—notifications, data movement, approvals, report generation, and task assignment are common candidates." },
      { question: "Will automation break if something unexpected happens?", answer: "We build in error handling, retry logic, and failure notifications so that exceptions are caught and flagged rather than silently failing." },
      { question: "Can we see what the automation is doing?", answer: "Yes. We implement logging and monitoring so you can see what ran, when it ran, and whether it succeeded." },
    ],
    relatedProjects: [
      "property-management-system",
      "school-management-system",
    ],
    relatedSolutions: ["business-software", "api-integrations"],
    seo: {
      title: "Business Process Automation Software | Alpha Tec Solutions",
      description: "We automate repetitive business processes—notifications, approvals, data sync, and reporting—with reliable digital workflows.",
    },
    featured: true,
    order: 3,
    status: "published",
  },
  {
    id: "sol-004",
    title: "One Connected System for the Operations That Keep Your Business Moving",
    slug: "management-systems",
    shortTitle: "Management Systems",
    shortDescription:
      "Centralized platforms that bring properties, students, customers, or operations into one system.",
    description:
      "Management systems designed for specific industries and operational contexts—built around real workflows, not generic templates.",
    category: "Management Systems",
    problem:
      "Management in many industries still relies on spreadsheets, paper records, and disconnected tools. A property manager might track units in one spreadsheet, tenants in another, and payments in a third. A school might have student records in a database, grades in spreadsheets, and communication through messaging apps. This fragmentation makes it difficult to see the full picture, respond quickly to issues, and make informed decisions.",
    solution:
      "We build management systems that bring the key aspects of an operation into one connected platform. Instead of switching between tools, staff can manage records, track status, handle transactions, and generate reports from one place. The system is designed around the specific workflows of the industry—whether that's property management, school administration, or service booking—so it feels natural to use rather than forced.",
    useCases: [
      { title: "Property Management", description: "Units, tenants, rent, maintenance, and reporting in one platform.", projectSlug: "property-management-system" },
      { title: "School Administration", description: "Students, staff, academics, fees, and communication.", projectSlug: "school-management-system" },
      { title: "Service Business Management", description: "Appointments, customers, staff, and business performance.", projectSlug: "car-wash-management-system" },
      { title: "Salon & Barbershop Management", description: "Bookings, services, staff scheduling, and reporting.", projectSlug: "salon-barbershop-management-system" },
      { title: "Hospitality Management", description: "Reservations, guests, services, and revenue tracking." },
      { title: "Professional Services", description: "Clients, projects, time tracking, and invoicing." },
    ],
    capabilities: [
      {
        label: "Records",
        items: [
          "Entity management (properties, students, customers)",
          "Relationship tracking",
          "Status and history logging",
          "Search and filtering",
        ],
      },
      {
        label: "Operations",
        items: [
          "Transaction recording",
          "Status updates",
          "Task assignment",
          "Workflow management",
        ],
      },
      {
        label: "Financial",
        items: [
          "Payment tracking",
          "Invoice generation",
          "Financial summaries",
          "Reconciliation",
        ],
      },
      {
        label: "Reporting",
        items: [
          "Operational dashboards",
          "Performance metrics",
          "Exportable reports",
          "Trend analysis",
        ],
      },
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Learn the industry, the workflows, and what needs to be managed." },
      { number: "02", title: "Structure", description: "Design the data model and relationships." },
      { number: "03", title: "Build", description: "Develop the management interfaces and business logic." },
      { number: "04", title: "Test", description: "Validate with real operational scenarios." },
      { number: "05", title: "Deploy", description: "Launch and train users on the system." },
    ],
    systemFlow: [
      { layer: "Users", detail: "Managers, staff, clients" },
      { layer: "Management Interface", detail: "Dashboards, forms, and workflows" },
      { layer: "Business Logic", detail: "Rules, validation, and processing" },
      { layer: "Database", detail: "Centralized records and relationships" },
      { layer: "Reporting", detail: "Insights and analytics" },
    ],
    technology: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "TypeScript"],
      database: ["PostgreSQL", "Prisma"],
      apis: ["REST APIs"],
      infrastructure: ["Cloud hosting"],
      analytics: ["Recharts", "Custom dashboards"],
    },
    integrations: ["Payment systems", "Email/SMS notifications", "Calendar systems", "Export to accounting software"],
    architecture: "A centralized management platform with role-based access, a relational database designed for the specific domain, and reporting layer for operational insights.",
    businessBenefits: [
      "All operational data in one place",
      "Faster access to information",
      "Better decision-making with clear data",
      "Reduced time on manual record-keeping",
      "Improved operational consistency",
    ],
    whoItsFor: [
      "Property managers handling multiple units and tenants",
      "Schools managing students, staff, and academics",
      "Service businesses with bookings and customer management",
      "Organizations currently using spreadsheets for core operations",
      "Growing businesses needing structured management tools",
    ],
    faqs: [
      { question: "Can you build a management system for our specific industry?", answer: "Yes. We design systems around the workflows and data structures of specific industries rather than using generic templates." },
      { question: "Can multiple staff members use the system?", answer: "Yes. We implement role-based access so different users have appropriate permissions and see relevant information." },
      { question: "Can we get reports out of the system?", answer: "We build reporting and export capabilities so you can generate the reports your business needs and export data when required." },
    ],
    relatedProjects: [
      "property-management-system",
      "school-management-system",
      "car-wash-management-system",
      "salon-barbershop-management-system",
    ],
    relatedSolutions: ["business-software", "data-business-intelligence"],
    seo: {
      title: "Custom Management System Development | Alpha Tec Solutions",
      description: "We build industry-specific management systems—property, school, service, and operational platforms—designed around real workflows.",
    },
    featured: true,
    order: 4,
    status: "published",
  },
  {
    id: "sol-005",
    title: "Connect the Systems Your Business Depends On",
    slug: "api-integrations",
    shortTitle: "API Integrations",
    shortDescription:
      "Connect your software with payments, third-party services, and internal systems through reliable APIs.",
    description:
      "API development and system integration that keeps data flowing between the tools your business uses.",
    category: "Integrations",
    problem:
      "Modern businesses rely on multiple systems—payment processors, accounting software, communication tools, CRM platforms, and internal applications. When these systems don't communicate, staff end up manually copying data, reconciling records, and working around integration gaps. This creates delays, errors, and operational overhead that could be eliminated with proper connections.",
    solution:
      "We build the API connections and integration logic that allow your systems to communicate. This might mean connecting your application to a payment processor, synchronizing data between your system and an accounting platform, building an API that allows third parties to interact with your system, or creating internal APIs that connect different parts of your technology stack. The goal is reliable, secure data flow between systems.",
    useCases: [
      { title: "Payment Integration", description: "Connect your application to M-Pesa, card processors, or other payment systems." },
      { title: "Data Synchronization", description: "Keep data consistent between your system and external platforms." },
      { title: "Internal API Development", description: "Build APIs that allow different parts of your system to communicate." },
      { title: "Third-Party API Integration", description: "Connect to external services like email, SMS, or analytics platforms." },
      { title: "Webhook Handling", description: "Receive and process events from external systems." },
      { title: "API for Clients", description: "Build APIs that allow your customers or partners to integrate with your system." },
    ],
    capabilities: [
      {
        label: "API Design",
        items: [
          "RESTful API architecture",
          "Clear documentation",
          "Versioning strategy",
          "Error handling standards",
        ],
      },
      {
        label: "Security",
        items: [
          "API authentication",
          "Rate limiting",
          "Input validation",
          "Secure data transmission",
        ],
      },
      {
        label: "Reliability",
        items: [
          "Retry logic for failures",
          "Idempotent operations",
          "Logging and monitoring",
          "Error recovery",
        ],
      },
      {
        label: "Integration Patterns",
        items: [
          "Request-response",
          "Webhooks",
          "Polling",
          "Event-driven",
        ],
      },
    ],
    workflow: [
      { number: "01", title: "Map", description: "Identify the systems, data flows, and integration requirements." },
      { number: "02", title: "Design", description: "Design the API contracts and integration architecture." },
      { number: "03", title: "Build", description: "Implement the APIs, connectors, and data transformation logic." },
      { number: "04", title: "Test", description: "Validate integrations with real data and edge cases." },
      { number: "05", title: "Deploy", description: "Go live with monitoring and alerting in place." },
    ],
    systemFlow: [
      { layer: "Your Application", detail: "Triggers integration" },
      { layer: "API Layer", detail: "Handles request and transformation" },
      { layer: "External System", detail: "Third-party service or API" },
      { layer: "Response Handler", detail: "Processes and stores response" },
    ],
    technology: {
      frontend: [],
      backend: ["Node.js", "Express", "TypeScript"],
      database: ["PostgreSQL"],
      apis: ["REST", "Webhooks", "OAuth", "Third-party SDKs"],
      infrastructure: ["Queue processing", "Retry mechanisms"],
      analytics: ["API logs", "Success/failure tracking"],
    },
    integrations: ["M-Pesa", "Payment gateways", "Email services", "SMS providers", "Accounting software", "CRM platforms"],
    architecture: "An integration layer that handles API calls, data transformation, error handling, and logging—connecting your application with external systems reliably.",
    businessBenefits: [
      "Eliminated manual data copying",
      "Faster, more reliable data flow",
      "Reduced errors from manual entry",
      "Better connectivity between systems",
      "Automated processes that depend on external data",
    ],
    whoItsFor: [
      "Businesses using multiple software systems that don't communicate",
      "Organizations needing payment processing in their application",
      "Companies wanting to expose APIs for partners or customers",
      "Teams manually synchronizing data between systems",
      "Businesses building platforms that connect to third-party services",
    ],
    faqs: [
      { question: "Can you integrate with M-Pesa?", answer: "Yes. We have experience integrating with M-Pesa and other payment systems commonly used in Kenya and the region." },
      { question: "What happens if an external API goes down?", answer: "We implement retry logic, error handling, and alerting so that temporary outages don't cause data loss and issues are flagged for attention." },
      { question: "Can you build an API that other applications can use?", answer: "Yes. We design and document APIs that can be consumed by other applications, whether internal or external." },
    ],
    relatedProjects: [
      "property-management-system",
      "car-wash-management-system",
    ],
    relatedSolutions: ["business-software", "business-automation"],
    seo: {
      title: "API Integration Services | Alpha Tec Solutions",
      description: "We build API integrations that connect your software with payments, third-party services, and internal systems for reliable data flow.",
    },
    featured: true,
    order: 5,
    status: "published",
  },
  {
    id: "sol-006",
    title: "Turn Business Data Into Information Your Team Can Act On",
    slug: "data-business-intelligence",
    shortTitle: "Data & BI",
    shortDescription:
      "Dashboards and reporting systems that turn operational data into clear, actionable insights.",
    description:
      "Business intelligence and reporting solutions that make your data visible, understandable, and useful for decision-making.",
    category: "Data & BI",
    problem:
      "Many businesses collect data but struggle to turn it into useful information. Reports are generated manually by pulling data from multiple sources, dashboards don't exist or are outdated, and decisions are made based on intuition rather than evidence. By the time a report is compiled, it may already be out of date. The result is a business that's data-rich but insight-poor.",
    solution:
      "We build dashboards and reporting systems that connect to your operational data and present it in ways that are immediately useful. This means real-time dashboards for monitoring key metrics, scheduled reports for regular reviews, and the ability to drill down into data when you need more detail. The goal is to make it easy for your team to see what's happening and make informed decisions without waiting for someone to compile a report.",
    useCases: [
      { title: "Operational Dashboards", description: "Real-time views of key business metrics and status.", projectSlug: "property-management-system" },
      { title: "Financial Reporting", description: "Revenue, expenses, and financial performance tracking." },
      { title: "Performance Analytics", description: "KPI tracking and trend analysis over time.", projectSlug: "salon-barbershop-management-system" },
      { title: "Operational Reports", description: "Regular reports on business activities and outcomes." },
      { title: "Data Visualization", description: "Charts, graphs, and visual representations of business data." },
      { title: "Export & Distribution", description: "Automated report generation and distribution." },
    ],
    capabilities: [
      {
        label: "Dashboards",
        items: [
          "Real-time metric displays",
          "Interactive filtering and drill-down",
          "Role-based views",
          "Customizable layouts",
        ],
      },
      {
        label: "Reports",
        items: [
          "Scheduled report generation",
          "Multiple format exports (PDF, Excel, CSV)",
          "Automated distribution",
          "Template-based formatting",
        ],
      },
      {
        label: "Analytics",
        items: [
          "Trend analysis",
          "Comparisons and benchmarks",
          "Anomaly detection",
          "Forecasting basics",
        ],
      },
      {
        label: "Data Layer",
        items: [
          "Data aggregation",
          "Calculation logic",
          "Data validation",
          "Historical tracking",
        ],
      },
    ],
    workflow: [
      { number: "01", title: "Identify", description: "Determine the metrics and insights the business needs." },
      { number: "02", title: "Source", description: "Identify where the data lives and how to access it." },
      { number: "03", title: "Model", description: "Design the calculations, aggregations, and visualizations." },
      { number: "04", title: "Build", description: "Implement dashboards, reports, and data pipelines." },
      { number: "05", title: "Validate", description: "Verify accuracy and usefulness with stakeholders." },
    ],
    systemFlow: [
      { layer: "Data Sources", detail: "Databases, APIs, files" },
      { layer: "Data Processing", detail: "Aggregation and calculation" },
      { layer: "Storage", detail: "Processed data and history" },
      { layer: "Visualization", detail: "Dashboards and charts" },
      { layer: "Distribution", detail: "Reports and alerts" },
    ],
    technology: {
      frontend: ["React", "Recharts", "TypeScript"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL"],
      apis: [],
      infrastructure: ["Scheduled jobs", "Caching"],
      analytics: ["Recharts", "Custom visualizations"],
    },
    integrations: ["Database connections", "API data sources", "Email distribution", "Export systems"],
    architecture: "A data layer that aggregates information from your operational systems and presents it through dashboards and scheduled reports.",
    businessBenefits: [
      "Clear visibility into business performance",
      "Faster decision-making with current data",
      "Reduced time spent compiling reports",
      "Better tracking of KPIs and trends",
      "Data-driven culture enabled",
    ],
    whoItsFor: [
      "Businesses making decisions without clear data",
      "Teams spending significant time on manual reporting",
      "Organizations needing real-time operational visibility",
      "Companies wanting to track performance over time",
      "Management needing dashboards for key metrics",
    ],
    faqs: [
      { question: "Can the dashboards update in real-time?", answer: "Yes. We can build dashboards that update as operational data changes, giving you a current view of key metrics." },
      { question: "Can reports be sent automatically?", answer: "Yes. We can set up scheduled reports that are generated and distributed (via email, for example) on a defined schedule." },
      { question: "Can we export the data?", answer: "We build export capabilities so you can get data out in formats like PDF, Excel, or CSV when needed." },
    ],
    relatedProjects: [
      "property-management-system",
      "salon-barbershop-management-system",
    ],
    relatedSolutions: ["business-software", "management-systems"],
    seo: {
      title: "Business Dashboards & Reporting | Alpha Tec Solutions",
      description: "We build dashboards and reporting systems that turn operational data into clear, actionable insights for better decision-making.",
    },
    featured: true,
    order: 6,
    status: "published",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.filter((s) => s.status === "published").map((s) => s.slug);
}

export function getRelatedSolutions(currentSlug: string, count = 3): Solution[] {
  const current = solutions.find((s) => s.slug === currentSlug);
  if (!current) return [];

  const related = current.relatedSolutions
    .map((slug) => solutions.find((s) => s.slug === slug))
    .filter((s): s is Solution => s !== undefined && s.status === "published");

  return related.slice(0, count);
}