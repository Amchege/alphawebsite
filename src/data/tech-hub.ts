import type { TechGuide } from "@/types/tech-guide";

export const techHubSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "New to working with us? Start here to understand how we operate and what to expect from day one.",
    icon: "rocket" as const,
  },
  {
    id: "client-guides",
    title: "Client Guides",
    description: "Practical guides to help you prepare, collaborate, and get the most out of your project with us.",
    icon: "book" as const,
  },
  {
    id: "technical-guides",
    title: "Technical Guides",
    description: "In-depth technical resources covering integration, deployment, security, and performance.",
    icon: "code" as const,
  },
  {
    id: "tools-templates",
    title: "Tools & Templates",
    description: "Ready-to-use templates to streamline your project planning and technical documentation.",
    icon: "template" as const,
  },
];

export const techGuides: TechGuide[] = [
  // ─────────────────────────────────────────────
  // GETTING STARTED
  // ─────────────────────────────────────────────
  {
    id: "th-001",
    title: "How We Work",
    slug: "how-we-work",
    shortDescription: "Our approach to building software — from first conversation to deployed product.",
    section: "getting-started",
    description: "A clear breakdown of how Alpha Tec Solutions approaches software development projects. We follow a structured but flexible process designed to keep you informed, reduce risk, and deliver software that actually works for your business.",
    content: [
      {
        heading: "Discovery First, Code Second",
        body: "Every project starts with understanding. Before we write a single line of code, we spend time learning about your business, your users, your workflows, and the problems you're trying to solve. This isn't a formal document handoff — it's a conversation. We ask questions, challenge assumptions, and make sure we're solving the right problem before investing in a solution.",
      },
      {
        heading: "Transparent, Iterative Development",
        body: "We don't disappear for weeks and reappear with a finished product. We work in iterations — building, showing, and refining. You'll see progress regularly, provide feedback, and watch the system take shape. This approach catches issues early, reduces wasted effort, and ensures the final product reflects what you actually need.",
      },
      {
        heading: "Engineering Over Hype",
        body: "We choose technology based on what's appropriate for your project, not what's trending. Our stack is modern and proven — React, Next.js, Node.js, PostgreSQL — but the specific architecture is always driven by your requirements. We prioritize reliability, maintainability, and performance over technical novelty.",
      },
      {
        heading: "Built to Be Handed Over",
        body: "Every system we build is documented, structured, and deployable independently. We don't hold your code hostage. You get full source code access, deployment documentation, and the knowledge to continue development with any team — including your own.",
      },
      {
        heading: "Communication That Works",
        body: "We use structured updates — not endless meetings. You'll receive clear status updates, have a dedicated point of contact, and can reach us when you need to. We adapt to your preferred communication style, whether that's email, calls, or project management tools.",
      },
    ],
    keyTakeaways: [
      "Every project starts with discovery, not coding",
      "Development is iterative — you see progress and provide feedback throughout",
      "Technology choices are driven by your requirements, not trends",
      "You own the code and get full documentation",
      "Communication is structured but adaptable to your preferences",
    ],
    order: 1,
    seo: {
      title: "How We Work | Alpha Tec Solutions",
      description: "Learn how Alpha Tec Solutions approaches software development — from discovery through delivery. Transparent, iterative, and built to last.",
    },
  },
  {
    id: "th-002",
    title: "What to Expect When You Work With Us",
    slug: "what-to-expect",
    shortDescription: "A realistic overview of timelines, communication, and deliverables at each stage.",
    section: "getting-started",
    description: "Setting clear expectations is one of the most important parts of any project. This guide outlines what a typical engagement looks like — from timeline to communication to what you'll receive at the end.",
    content: [
      {
        heading: "Typical Project Timeline",
        body: "Project timelines vary significantly based on scope, but here's a realistic framework. Discovery and planning typically take 1–2 weeks. Development for a focused MVP usually runs 4–8 weeks. Larger systems with multiple modules can take 8–16 weeks or more. We'll give you a specific timeline during the discovery phase — and we update it as the project progresses.",
        items: [
          "Discovery & Planning: 1–2 weeks",
          "Design & Architecture: 1–2 weeks",
          "Core Development: 4–8 weeks (MVP scope)",
          "Testing & Refinement: 1–2 weeks",
          "Deployment & Handoff: 1 week",
        ],
      },
      {
        heading: "Communication Cadence",
        body: "You'll receive structured updates at regular intervals — typically weekly or biweekly depending on the project phase. These updates include what was completed, what's next, any blockers, and questions for you. Between updates, you can reach us anytime via your preferred channel. We don't require you to manage us — we manage ourselves and keep you informed.",
      },
      {
        heading: "What You'll Receive",
        body: "At the end of every project, you receive the complete source code in a Git repository, deployment documentation, a technical overview of the architecture, and any credentials or access needed to manage the system. If the project includes a handoff to another team, we provide a walkthrough and written documentation to make the transition smooth.",
        items: [
          "Full source code (Git repository)",
          "Deployment documentation",
          "Architecture overview",
          "System credentials and access",
          "Optional: team walkthrough session",
        ],
      },
      {
        heading: "What We Need From You",
        body: "The quality of the final product depends heavily on the quality of input we receive. We need timely feedback on deliverables, access to relevant systems or data, decisions when options are presented, and clarity on priorities. We don't need you to be technical — we need you to be available and decisive about your business requirements.",
      },
      {
        heading: "What We Don't Do",
        body: "Transparency includes being honest about what's outside our scope. We don't do graphic design as a standalone service — we build functional interfaces, not brand identities. We don't manage your ongoing IT infrastructure. We don't guarantee specific business outcomes — we build the tools, you drive the business. We're upfront about all of this from the start.",
      },
    ],
    keyTakeaways: [
      "Typical MVP projects run 6–12 weeks from start to finish",
      "Expect structured weekly or biweekly updates",
      "You receive full source code, docs, and deployment access",
      "Timely feedback and decisions from your side are critical",
      "We're transparent about what's in and out of scope",
    ],
    order: 2,
    seo: {
      title: "What to Expect | Alpha Tec Solutions",
      description: "Understand timelines, communication, deliverables, and responsibilities when working with Alpha Tec Solutions on a software project.",
    },
  },
  {
    id: "th-003",
    title: "Starting a Project: Step by Step",
    slug: "starting-a-project",
    shortDescription: "The exact steps from your first inquiry to project kickoff.",
    section: "getting-started",
    description: "A practical walkthrough of how a project begins — from your initial contact through to the first development sprint. No ambiguity, no surprises.",
    content: [
      {
        heading: "Step 1: Initial Contact",
        body: "Reach out through our contact form, email, or phone. Tell us what you're trying to build or solve — it doesn't need to be formal or detailed. A few sentences about your business and the problem is enough to start the conversation. We respond within one business day.",
      },
      {
        heading: "Step 2: Discovery Conversation",
        body: "We schedule a 30–60 minute call to understand your situation. We'll ask about your business, your users, current workflows, pain points, and what success looks like. This isn't a sales call — it's a genuine attempt to understand whether we're the right fit and what approach makes sense.",
      },
      {
        heading: "Step 3: Proposal & Scope",
        body: "Based on the discovery conversation, we prepare a written proposal. This includes the recommended approach, key features, estimated timeline, and cost. The proposal is specific enough to be useful but flexible enough to accommodate the inevitable adjustments that come with software projects.",
      },
      {
        heading: "Step 4: Agreement & Onboarding",
        body: "Once the proposal is approved, we formalize the engagement with a simple agreement covering scope, timeline, payment terms, and ownership. We then set up communication channels, share access to any project management tools we'll use, and schedule the kickoff.",
      },
      {
        heading: "Step 5: Kickoff & Deep Dive",
        body: "The kickoff is a focused session where we dive deep into the specifics. We map workflows, define data structures, outline user roles, and establish priorities. By the end of kickoff, both teams have a shared understanding of what we're building and why.",
      },
      {
        heading: "Step 6: Development Begins",
        body: "With a clear plan in place, development starts. You'll receive your first update within the first week, showing initial progress and confirming we're on track. From here, the iterative cycle begins — build, review, refine, repeat.",
      },
    ],
    keyTakeaways: [
      "Start with a simple inquiry — no formal document needed",
      "Discovery call takes 30–60 minutes and is obligation-free",
      "Written proposal covers approach, features, timeline, and cost",
      "Kickoff session aligns both teams on specifics before coding starts",
      "You'll see progress within the first week of development",
    ],
    order: 3,
    seo: {
      title: "Starting a Project | Alpha Tec Solutions",
      description: "Step-by-step guide to starting a software project with Alpha Tec Solutions — from initial contact to first development sprint.",
    },
  },

  // ─────────────────────────────────────────────
  // CLIENT GUIDES
  // ─────────────────────────────────────────────
  {
    id: "th-004",
    title: "How to Prepare Your Project Brief",
    slug: "preparing-your-project-brief",
    shortDescription: "A framework for describing your project clearly so development starts on the right foot.",
    section: "client-guides",
    description: "A well-prepared project brief dramatically reduces miscommunication and helps us hit the ground running. This guide shows you what to include and how to structure it — no technical knowledge required.",
    content: [
      {
        heading: "Why a Brief Matters",
        body: "Starting a software project without a clear brief is like building a house without blueprints. The brief doesn't need to be technical or exhaustive — it needs to capture what you know about your business, your users, and the problem. The more clearly you articulate these, the faster and more accurately we can respond.",
      },
      {
        heading: "The Essential Sections",
        body: "A solid project brief covers five areas. You don't need to write pages for each — even bullet points work.",
        items: [
          "Business Context: What does your business do? Who are your customers? What's the current situation?",
          "The Problem: What specific problem are you trying to solve? What happens now that shouldn't happen? What doesn't happen that should?",
          "The Users: Who will use this system? What are their roles? What do they need to accomplish?",
          "Desired Outcome: What does success look like? How will you know the project worked?",
          "Constraints: Budget range, timeline preferences, existing systems that must integrate, any hard requirements.",
        ],
      },
      {
        heading: "Common Mistakes to Avoid",
        body: "The most common mistake is prescribing a solution instead of describing a problem. Telling us 'I need a mobile app with a dashboard' is less useful than telling us 'my field agents can't update customer records while on site, which causes delays and data errors.' Let us figure out the best technical approach — your job is to describe the business reality.",
      },
      {
        heading: "How Much Detail Is Enough?",
        body: "Think of it this way: if you were explaining the project to a smart colleague who doesn't work in your department, what would they need to understand? That level of detail is usually sufficient. You can always add more during the discovery conversation — the brief is a starting point, not a final specification.",
      },
      {
        heading: "Use Our Template",
        body: "We've created a Project Brief Template that structures all of this for you. Download it from the Tools & Templates section, fill it in at your own pace, and send it to us when you're ready. It's designed to be completed in 30–60 minutes.",
      },
    ],
    keyTakeaways: [
      "Describe the problem, not the solution you imagine",
      "Cover business context, problem, users, desired outcome, and constraints",
      "Bullet points are fine — this doesn't need to be a formal document",
      "Avoid the common mistake of over-specifying technical solutions",
      "Use our template to structure your thoughts efficiently",
    ],
    order: 4,
    seo: {
      title: "Preparing a Project Brief | Alpha Tec Solutions",
      description: "Learn how to write a clear project brief for your software development project. Framework, essential sections, and common mistakes to avoid.",
    },
  },
  {
    id: "th-005",
    title: "Understanding the Development Process",
    slug: "understanding-development-process",
    shortDescription: "What happens during development and how to be an effective collaborator.",
    section: "client-guides",
    description: "Software development can feel opaque if you're not technical. This guide demystifies the process and explains how you can contribute meaningfully without writing code.",
    content: [
      {
        heading: "The Development Cycle",
        body: "Development isn't a single phase — it's a repeating cycle. We plan a piece of work, build it, show it to you, get feedback, and refine it. Each cycle typically covers a focused set of features or improvements. This means you're never waiting weeks to see progress, and course corrections happen early when they're cheap.",
      },
      {
        heading: "What 'Iteration' Actually Means",
        body: "In practice, iteration means we might build a basic version of a feature, show it to you, and then enhance it based on your reaction. For example, a reporting feature might start with simple data tables, evolve to include charts, and eventually get filtering and export options. Each iteration adds value — you're not waiting for the 'final' version to get something useful.",
      },
      {
        heading: "How to Give Useful Feedback",
        body: "The best feedback is specific and tied to business outcomes. 'I don't like it' isn't actionable. 'The approval workflow takes too many clicks — our managers approve 50+ requests daily and this will slow them down' gives us exactly what we need to improve it. Focus on what's not working for your users and why.",
        items: [
          "Be specific about what's wrong and why",
          "Tie feedback to user behavior or business impact",
          "Distinguish between 'nice to have' and 'critical'",
          "It's okay to change your mind — just tell us early",
          "If something looks wrong, say so immediately rather than waiting",
        ],
      },
      {
        heading: "Handling Changes and New Ideas",
        body: "It's normal for new ideas to emerge during development. When they do, we assess the impact on timeline and scope, present you with options, and let you decide. Small changes are usually absorbed without issue. Larger changes may require adjusting the timeline or phasing the work. We never surprise you with scope creep — every change is discussed before it's implemented.",
      },
      {
        heading: "Testing: What We Do and What We Need From You",
        body: "We test functionality, performance, and security throughout development. But we can't test business logic we don't fully understand. We'll ask you to verify workflows, check that outputs match your expectations, and confirm edge cases. Your domain expertise is irreplaceable — our testing catches technical issues, your testing catches business issues.",
      },
    ],
    keyTakeaways: [
      "Development is a repeating cycle of build, review, and refine",
      "Each iteration delivers usable progress — you don't wait for 'final'",
      "Give specific, business-focused feedback rather than vague opinions",
      "New ideas are welcome — we'll assess impact before implementing",
      "Your domain expertise is essential for business-logic testing",
    ],
    order: 5,
    seo: {
      title: "Understanding the Development Process | Alpha Tec Solutions",
      description: "A non-technical guide to how software development works at Alpha Tec Solutions — iterations, feedback, handling changes, and testing.",
    },
  },
  {
    id: "th-006",
    title: "Project Handoff & Delivery Guide",
    slug: "project-handoff-delivery",
    shortDescription: "What happens when the project is done and how we ensure a smooth transition.",
    section: "client-guides",
    description: "Project delivery isn't just sending files. It's a structured process to make sure you can actually use, manage, and continue developing your system after we're done.",
    content: [
      {
        heading: "What Delivery Includes",
        body: "Every project delivery includes the complete source code, a deployment guide, system architecture documentation, and all necessary credentials and access. If you have an internal or third-party team taking over, we also provide a structured handoff session.",
        items: [
          "Complete source code in a Git repository",
          "Step-by-step deployment documentation",
          "Architecture and data model overview",
          "Environment variables and configuration reference",
          "All third-party service credentials and API keys",
          "Optional: live handoff session with your team",
        ],
      },
      {
        heading: "The Handoff Session",
        body: "If you're transitioning to another development team, we schedule a live session where we walk through the codebase, explain the architecture, demonstrate deployment, and answer questions. This session is typically 1–2 hours and is recorded so your team can reference it later. We also provide a written handoff document that covers the same ground.",
      },
      {
        heading: "Post-Delivery Support Period",
        body: "After delivery, we provide a support window (typically 2–4 weeks, depending on the project) where we address any issues that arise from the deployed system. This covers bugs and deployment issues — not new features. The support period ensures the system is stable and functioning correctly in its production environment before we formally close the project.",
      },
      {
        heading: "What Happens to the Code",
        body: "You own the code. Full stop. The Git repository is yours, the deployment infrastructure is yours, and there are no licensing restrictions or lock-in mechanisms. You can continue development with any team — including us, your internal team, or a different vendor. We build systems to be maintainable, not to create dependency.",
      },
      {
        heading: "Common Handoff Pitfalls",
        body: "The most common issue during handoff is missing context. We mitigate this by documenting decisions, not just code. When we made a particular architectural choice, we note why. When a workaround was implemented, we note what the ideal solution would be. This context is what allows a new team to be productive quickly.",
      },
    ],
    keyTakeaways: [
      "Delivery includes code, docs, credentials, and optional live handoff",
      "Handoff sessions are recorded and supplemented with written docs",
      "A post-delivery support window covers bugs and deployment issues",
      "You own 100% of the code with no restrictions",
      "We document decisions and context, not just code structure",
    ],
    order: 6,
    seo: {
      title: "Project Handoff & Delivery | Alpha Tec Solutions",
      description: "What to expect when your software project is delivered — code handoff, documentation, support period, and ownership details.",
    },
  },
  {
    id: "th-007",
    title: "Post-Launch Support & Maintenance",
    slug: "post-launch-support",
    shortDescription: "What happens after deployment and how to keep your system running smoothly.",
    section: "client-guides",
    description: "Launching a system is a beginning, not an end. This guide covers the post-launch period, ongoing maintenance options, and how to plan for the long-term health of your software.",
    content: [
      {
        heading: "The Initial Support Window",
        body: "Every project includes a post-launch support window — typically 2–4 weeks. During this period, we monitor the system, address any bugs or deployment issues that surface, and make small adjustments based on real-world usage. This isn't a feature development phase — it's a stabilization phase.",
      },
      {
        heading: "Ongoing Maintenance Options",
        body: "After the support window, we offer ongoing maintenance arrangements tailored to your needs. These range from basic monitoring and emergency fixes to regular updates, performance reviews, and incremental improvements. We discuss maintenance options during the project so there's no gap between project end and maintenance start.",
        items: [
          "Basic: Monitoring + emergency bug fixes",
          "Standard: Regular updates, security patches, minor improvements",
          "Active: Scheduled feature enhancements, performance optimization, proactive improvements",
        ],
      },
      {
        heading: "Planning for Updates",
        body: "Software needs to evolve. Users find new workflows, business requirements change, and technology advances. We recommend planning update cycles — whether monthly, quarterly, or as-needed — rather than treating every change as a new project. This keeps costs predictable and ensures the system stays aligned with your business.",
      },
      {
        heading: "When to Call Us vs. When to Wait",
        body: "Not every issue requires an immediate response. A typo in a label can wait for the next scheduled update. A payment processing failure cannot. We help you establish severity levels during the project so you know when to escalate and when to batch issues for the next cycle.",
      },
      {
        heading: "Long-Term System Health",
        body: "Over time, dependencies need updating, databases need optimizing, and usage patterns change. We can conduct periodic health checks — reviewing system performance, security posture, and code quality — to identify issues before they become problems. Think of it as a medical checkup for your software.",
      },
    ],
    keyTakeaways: [
      "Post-launch support window covers stabilization, not new features",
      "Ongoing maintenance plans are available at different levels",
      "Plan regular update cycles rather than treating changes as new projects",
      "Establish severity levels to know when to escalate vs. batch",
      "Periodic health checks prevent small issues from becoming big problems",
    ],
    order: 7,
    seo: {
      title: "Post-Launch Support & Maintenance | Alpha Tec Solutions",
      description: "What happens after your software launches — support windows, maintenance plans, update planning, and long-term system health.",
    },
  },

  // ─────────────────────────────────────────────
  // TECHNICAL GUIDES
  // ─────────────────────────────────────────────
  {
    id: "th-008",
    title: "API Integration Overview",
    slug: "api-integration-overview",
    shortDescription: "How we approach API design, integration, and data flow between systems.",
    section: "technical-guides",
    description: "APIs are the connective tissue between software systems. This guide covers our approach to API design, common integration patterns, and what to consider when connecting your system to external services.",
    content: [
      {
        heading: "Our API Philosophy",
        body: "We design APIs that are predictable, well-documented, and resilient. Every endpoint has a clear purpose, consistent error handling, and returns data in a standard format. We follow RESTful conventions where appropriate and deviate only when there's a clear benefit. The goal is an API that other developers can integrate with quickly and confidently.",
      },
      {
        heading: "Common Integration Patterns",
        body: "Most integrations fall into a few patterns. Understanding which pattern applies to your situation helps set expectations for complexity and reliability.",
        items: [
          "Request-Response: Your system calls an external API and waits for a result (e.g., payment processing, data lookup)",
          "Webhooks: An external system sends data to your system when events occur (e.g., payment confirmations, status updates)",
          "Polling: Your system periodically checks an external system for changes (used when webhooks aren't available)",
          "Event-Driven: Asynchronous message-based communication between system components",
        ],
      },
      {
        heading: "Error Handling & Reliability",
        body: "External APIs fail — that's a given. We build integrations with retry logic, timeout handling, and fallback behavior. When an external service is unavailable, your system should degrade gracefully, not crash. We also implement logging so that integration failures are visible and diagnosable.",
      },
      {
        heading: "Authentication & Security",
        body: "All API integrations use appropriate authentication — API keys, OAuth tokens, or mutual TLS depending on the service. Credentials are never hardcoded. We use environment variables and secure secret management. All external communication happens over HTTPS.",
      },
      {
        heading: "Data Transformation",
        body: "Different systems structure data differently. We build a transformation layer that converts between your internal data model and the format required by external services. This keeps your core system clean and isolated from the quirks of third-party APIs.",
      },
    ],
    keyTakeaways: [
      "APIs follow RESTful conventions with consistent error handling",
      "Four main patterns: request-response, webhooks, polling, event-driven",
      "Every integration has retry logic, timeouts, and graceful degradation",
      "Authentication uses API keys, OAuth, or mTLS — never hardcoded credentials",
      "A transformation layer isolates your system from third-party API quirks",
    ],
    order: 8,
    seo: {
      title: "API Integration Overview | Alpha Tec Solutions",
      description: "How Alpha Tec Solutions designs and implements API integrations — patterns, error handling, security, and data transformation.",
    },
  },
  {
    id: "th-009",
    title: "Deployment & Hosting Guide",
    slug: "deployment-hosting-guide",
    shortDescription: "How we deploy applications and what hosting infrastructure looks like.",
    section: "technical-guides",
    description: "Getting software from development to production requires reliable deployment processes and appropriate hosting infrastructure. This guide covers our standard approach to deployment and the hosting options we recommend.",
    content: [
      {
        heading: "Our Deployment Process",
        body: "We use automated deployment pipelines to minimize human error. Code changes go through a consistent process: committed to Git, built, tested, and deployed to the target environment. This means deployments are repeatable, auditable, and reversible. If something goes wrong, we can roll back to the previous version quickly.",
      },
      {
        heading: "Environment Strategy",
        body: "We recommend at least two environments: a staging environment that mirrors production, and the production environment itself. Developers and clients test on staging first. Once verified, the same build is deployed to production. This eliminates 'it works on my machine' problems.",
        items: [
          "Development: Where active development happens",
          "Staging: Mirror of production for final testing",
          "Production: The live environment your users access",
        ],
      },
      {
        heading: "Hosting Options",
        body: "We recommend cloud hosting for most projects. The specific provider depends on your requirements, budget, and preferences. We have experience with multiple platforms and will recommend the best fit rather than pushing a specific vendor.",
        items: [
          "Vercel: Ideal for Next.js applications with global CDN",
          "AWS: Flexible, scalable, suitable for complex architectures",
          "DigitalOcean: Cost-effective for straightforward deployments",
          "Shared/Reseller Hosting: For smaller projects with limited traffic",
        ],
      },
      {
        heading: "Domain & SSL",
        body: "Every production deployment includes HTTPS via SSL/TLS certificates. We can manage DNS configuration if needed, or work with your existing DNS setup. Certificate renewal is automated where possible to prevent expired certificate issues.",
      },
      {
        heading: "Monitoring & Alerts",
        body: "We set up basic monitoring for every production deployment — typically uptime checks and error logging. For more complex systems, we can implement application performance monitoring (APM), log aggregation, and alerting so issues are caught before users notice them.",
      },
    ],
    keyTakeaways: [
      "Automated deployment pipelines ensure repeatable, reversible releases",
      "Staging environment mirrors production for reliable testing",
      "Hosting recommendation is based on your requirements, not vendor preference",
      "HTTPS is standard on every production deployment",
      "Basic monitoring included; advanced APM available for complex systems",
    ],
    order: 9,
    seo: {
      title: "Deployment & Hosting Guide | Alpha Tec Solutions",
      description: "How Alpha Tec Solutions deploys and hosts applications — automated pipelines, environment strategy, hosting options, and monitoring.",
    },
  },
  {
    id: "th-010",
    title: "Security Best Practices",
    slug: "security-best-practices",
    shortDescription: "How we approach security in every project — from authentication to data protection.",
    section: "technical-guides",
    description: "Security isn't a feature you add at the end — it's a consideration at every stage of development. This guide covers the security practices we implement as standard and what you should expect from any properly built business application.",
    content: [
      {
        heading: "Authentication & Authorization",
        body: "Every application with user accounts implements proper authentication — password hashing with bcrypt, session management with secure tokens, and role-based access control. We don't build custom authentication from scratch when established solutions exist — we use proven libraries and patterns.",
      },
      {
        heading: "Input Validation & Sanitization",
        body: "Every piece of data entering the system is validated and sanitized. This prevents SQL injection, cross-site scripting (XSS), and other injection attacks. We validate on both the frontend (for user experience) and the backend (for security — frontend validation can always be bypassed).",
      },
      {
        heading: "Data Protection",
        body: "Sensitive data is encrypted at rest and in transit. Passwords are never stored in plain text. Personal data is handled according to applicable data protection regulations. We minimize data collection — only storing what's necessary for the application to function.",
      },
      {
        heading: "API Security",
        body: "All API endpoints require appropriate authentication. Rate limiting prevents abuse. CORS is configured to allow only intended origins. Sensitive operations require re-authentication or additional verification. API responses don't expose internal system details in error messages.",
      },
      {
        heading: "Infrastructure Security",
        body: "Servers are configured with security in mind — firewall rules, minimal exposed ports, disabled unnecessary services, and regular security updates. Environment variables store secrets — never in code repositories. Access to production environments is restricted and logged.",
      },
      {
        heading: "What We Don't Claim",
        body: "No system is perfectly secure, and we won't claim otherwise. We implement industry-standard practices that significantly reduce risk, but security requires ongoing attention. We recommend periodic security reviews, especially as the system evolves and new vulnerabilities are discovered.",
      },
    ],
    keyTakeaways: [
      "Authentication uses proven libraries, not custom implementations",
      "All input is validated on both frontend and backend",
      "Sensitive data is encrypted at rest and in transit",
      "APIs have authentication, rate limiting, and proper CORS configuration",
      "Security is ongoing — periodic reviews are recommended",
    ],
    order: 10,
    seo: {
      title: "Security Best Practices | Alpha Tec Solutions",
      description: "Security practices implemented in every Alpha Tec Solutions project — authentication, input validation, data protection, and infrastructure security.",
    },
  },
  {
    id: "th-011",
    title: "Performance Optimization Tips",
    slug: "performance-optimization",
    shortDescription: "How we ensure applications are fast, responsive, and scalable.",
    section: "technical-guides",
    description: "Performance is a feature. A slow application frustrates users and undermines trust. This guide covers the performance considerations we build into every project and what you should look for when evaluating your system's speed.",
    content: [
      {
        heading: "Frontend Performance",
        body: "The fastest request is the one that never happens. We minimize unnecessary network requests through code splitting, lazy loading, and efficient caching. Images are optimized and served in modern formats. The initial page load delivers only what's needed — additional resources load as required.",
        items: [
          "Code splitting: Load only the JavaScript needed for the current page",
          "Image optimization: Modern formats (WebP), responsive sizes, lazy loading",
          "Font optimization: Subset fonts, preload critical ones",
          "Caching: Browser caching and CDN caching for static assets",
        ],
      },
      {
        heading: "Backend Performance",
        body: "Database queries are the most common performance bottleneck. We design efficient queries, use appropriate indexes, and avoid N+1 query patterns. For read-heavy workloads, we implement caching layers. For write-heavy operations, we use efficient batch processing and queue systems.",
      },
      {
        heading: "API Response Optimization",
        body: "APIs return only the data that's needed — no over-fetching. Pagination prevents sending large datasets in single responses. For complex data, we offer field selection so clients can request exactly what they need. Response compression (gzip/brotli) reduces transfer sizes.",
      },
      {
        heading: "Scalability Considerations",
        body: "Performance at 10 users is different from performance at 10,000. We design systems that can scale — using stateless architectures, horizontal scaling patterns, and efficient resource utilization. But we don't over-engineer for hypothetical scale. We build for your expected load with a clear path to scale when needed.",
      },
      {
        heading: "Monitoring Performance",
        body: "You can't optimize what you don't measure. We implement performance tracking — page load times, API response times, and database query durations. This data identifies bottlenecks and validates that optimizations are having the intended effect.",
      },
    ],
    keyTakeaways: [
      "Frontend: code splitting, image optimization, and aggressive caching",
      "Backend: efficient queries, proper indexing, and caching layers",
      "APIs return only needed data with pagination and compression",
      "Scalability is designed for expected load with a path to grow",
      "Performance monitoring identifies bottlenecks and validates improvements",
    ],
    order: 11,
    seo: {
      title: "Performance Optimization | Alpha Tec Solutions",
      description: "How Alpha Tec Solutions builds fast applications — frontend optimization, backend efficiency, API design, and scalability considerations.",
    },
  },

  // ─────────────────────────────────────────────
  // TOOLS & TEMPLATES
  // ─────────────────────────────────────────────
  {
    id: "th-012",
    title: "Project Brief Template",
    slug: "project-brief-template",
    shortDescription: "A structured template to describe your project before approaching a development team.",
    section: "tools-templates",
    description: "Use this template to organize your thoughts before starting a software project. It's designed to be completed in 30–60 minutes and gives any development team — including ours — a solid foundation to work from.",
    content: [
      {
        heading: "Section 1: Business Overview",
        body: "Describe your business in 3–5 sentences. What do you do? Who are your customers? How do you make money? This context helps us understand the environment the software will operate in.",
        items: [
          "Company name and industry",
          "Core products or services",
          "Target customers or users",
          "Current team size and structure",
        ],
      },
      {
        heading: "Section 2: The Problem",
        body: "What specific problem are you trying to solve? Be concrete. Instead of 'we need better software,' describe the actual situation: what happens now, why it's a problem, and what it costs you in time, money, or opportunity.",
        items: [
          "Current situation: What exists now?",
          "Pain points: What specifically doesn't work?",
          "Impact: What does this cost your business?",
          "Trigger: Why now? What changed?",
        ],
      },
      {
        heading: "Section 3: Users & Roles",
        body: "Who will use this system? List each user role and what they need to accomplish. Don't forget admin users, managers, and any external users (customers, partners).",
        items: [
          "Role name (e.g., 'Field Agent', 'Admin', 'Customer')",
          "What they need to do in the system",
          "Their technical comfort level",
          "How often they'll use the system",
        ],
      },
      {
        heading: "Section 4: Desired Outcome",
        body: "What does success look like in 6 months? In 12 months? Be specific about measurable outcomes where possible — 'reduce manual data entry by 80%' is better than 'improve efficiency.'",
      },
      {
        heading: "Section 5: Constraints & Requirements",
        body: "List any hard constraints — budget range, deadline, existing systems that must integrate, compliance requirements, or technical limitations. Also note any 'nice to have' features that could be deferred.",
        items: [
          "Budget range or constraints",
          "Target launch date or deadline",
          "Existing systems to integrate with",
          "Compliance or regulatory requirements",
          "Must-have vs. nice-to-have features",
        ],
      },
    ],
    keyTakeaways: [
      "Complete in 30–60 minutes — don't overthink it",
      "Focus on describing the problem, not prescribing a solution",
      "Be specific about impact and desired outcomes",
      "Distinguish must-haves from nice-to-haves",
      "This is a starting point — details will be refined during discovery",
    ],
    order: 12,
    seo: {
      title: "Project Brief Template | Alpha Tec Solutions",
      description: "Free project brief template for software development projects. Structure your ideas before approaching a development team.",
    },
  },
  {
    id: "th-013",
    title: "Technical Requirements Template",
    slug: "technical-requirements-template",
    shortDescription: "A framework for documenting technical specifications and system requirements.",
    section: "tools-templates",
    description: "Once a project is scoped, technical requirements translate business needs into engineering specifications. This template provides the structure — you or your technical team can fill it in, or we can complete it together during discovery.",
    content: [
      {
        heading: "Section 1: System Overview",
        body: "High-level description of what the system does, who uses it, and how it fits into the broader technology ecosystem. Include a simple diagram if possible — even a hand-drawn sketch photographed and attached is valuable.",
        items: [
          "System purpose in 2–3 sentences",
          "Primary user roles and approximate count",
          "Relationship to existing systems",
          "High-level architecture diagram (even rough)",
        ],
      },
      {
        heading: "Section 2: Functional Requirements",
        body: "List what the system must do. Group by module or feature area. Each requirement should be testable — 'the system shall send email notifications when an order status changes' is better than 'the system should have good notifications.'",
        items: [
          "Feature/module name",
          "Specific requirement (the system shall...)",
          "Priority: Must / Should / Could",
          "Acceptance criteria: How do we know it's done?",
        ],
      },
      {
        heading: "Section 3: Data Requirements",
        body: "What data does the system store? List the main entities and their key fields. Don't worry about exact data types — describe the information conceptually. 'Each property has a name, address, unit count, and manager' is sufficient at this stage.",
      },
      {
        heading: "Section 4: Integration Requirements",
        body: "List all external systems the application needs to communicate with. For each, note the direction of data flow, frequency, and any known API documentation.",
        items: [
          "External system name",
          "Data flow direction (inbound, outbound, both)",
          "Frequency: Real-time, scheduled, on-demand",
          "API documentation link or contact",
        ],
      },
      {
        heading: "Section 5: Non-Functional Requirements",
        body: "Performance, security, availability, and scalability expectations. Be realistic — 'the system must never go down' isn't helpful. '99.5% uptime during business hours, recovery within 30 minutes' is specific and actionable.",
        items: [
          "Expected concurrent users",
          "Response time expectations",
          "Uptime/availability requirements",
          "Data retention and backup needs",
          "Compliance requirements (GDPR, etc.)",
        ],
      },
    ],
    keyTakeaways: [
      "Functional requirements should be testable and specific",
      "Data requirements are conceptual — exact types come later",
      "Document all external integrations with data flow direction",
      "Non-functional requirements must be realistic and measurable",
      "This template can be completed collaboratively during discovery",
    ],
    order: 13,
    seo: {
      title: "Technical Requirements Template | Alpha Tec Solutions",
      description: "Framework for documenting technical specifications — functional requirements, data models, integrations, and non-functional requirements.",
    },
  },
  {
    id: "th-014",
    title: "API Specification Template",
    slug: "api-specification-template",
    shortDescription: "A structured format for defining API endpoints before development begins.",
    section: "tools-templates",
    description: "Clear API specifications prevent misunderstandings between frontend and backend teams, and between your team and external integration partners. This template provides a consistent format for documenting any API.",
    content: [
      {
        heading: "Section 1: API Overview",
        body: "Start with the basics — what the API does, who consumes it, and how it's accessed. Include the base URL, authentication method, and any global conventions.",
        items: [
          "API purpose and primary consumers",
          "Base URL (e.g., api.yourdomain.com/v1)",
          "Authentication method (API key, OAuth, etc.)",
          "Rate limiting policy",
          "Response format (JSON) and error format",
        ],
      },
      {
        heading: "Section 2: Endpoint Specification",
        body: "For each endpoint, document the following structure. Be consistent — every endpoint should use the same documentation format.",
        items: [
          "Method: GET, POST, PUT, PATCH, DELETE",
          "Path: /api/v1/resource/{id}",
          "Description: What this endpoint does",
          "Authentication: Required? Which role?",
          "Request: Headers, path params, query params, body (with field types)",
          "Response: Success status code, response body structure",
          "Errors: Error status codes and response body for each",
          "Example: A sample request and response",
        ],
      },
      {
        heading: "Section 3: Data Models",
        body: "Define the shared data structures used across multiple endpoints. A 'User' object, for example, might appear in multiple responses. Define it once and reference it. Include field names, types, whether they're required, and brief descriptions.",
        items: [
          "Model name (e.g., 'User', 'Order', 'Payment')",
          "Fields: name, type, required?, description",
          "Relationships to other models",
          "Enum values if applicable",
        ],
      },
      {
        heading: "Section 4: Error Handling Convention",
        body: "Define a standard error response format used across all endpoints. This makes error handling predictable for consumers.",
        items: [
          "Error response structure: { error: { code, message, details? } }",
          "Standard error codes and their meanings",
          "Validation error format (field-level errors)",
          "Rate limit error format",
        ],
      },
      {
        heading: "Section 5: Versioning Strategy",
        body: "APIs evolve. Define how versioning will work — URL path versioning (/v1/, /v2/), header-based versioning, or query parameter versioning. Also document the deprecation policy — how much notice consumers get before a version is retired.",
      },
    ],
    keyTakeaways: [
      "Every endpoint uses the same documentation format for consistency",
      "Include examples — they prevent more confusion than descriptions alone",
      "Define shared data models once, reference them everywhere",
      "Standard error format makes client-side error handling predictable",
      "Versioning strategy prevents breaking changes from surprising consumers",
    ],
    order: 14,
    seo: {
      title: "API Specification Template | Alpha Tec Solutions",
      description: "Structured template for defining API endpoints, data models, error handling, and versioning before development begins.",
    },
  },
];

export function getTechGuideBySlug(slug: string): TechGuide | undefined {
  return techGuides.find((g) => g.slug === slug);
}

export function getGuidesBySection(sectionId: string): TechGuide[] {
  return techGuides
    .filter((g) => g.section === sectionId)
    .sort((a, b) => a.order - b.order);
}

export function getRelatedGuides(currentSlug: string, count = 3): TechGuide[] {
  const current = techGuides.find((g) => g.slug === currentSlug);
  if (!current) return [];

  return techGuides
    .filter((g) => g.slug !== currentSlug && g.section === current.section)
    .sort((a, b) => a.order - b.order)
    .slice(0, count);
}