export const projects = [
  {
    id: 1,
    slug: "ai-code-companion",
    title: "AI Code Companion",
    tagline:
      "A specialized AI assistant for real-time code review and refactoring.",
    description:
      "A powerful tool that integrates with your development workflow to provide instant, context-aware suggestions for code improvement and bug detection.",
    category: "AI/Automation",
    tags: ["React", "OpenAI API", "Tailwind CSS", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    screenshots: [
      "/screenshots/ai-code-companion/1.png",
      "/screenshots/ai-code-companion/2.png",
      "/screenshots/ai-code-companion/3.png",
    ],
    theIdea:
      "The idea was born from the need for a more proactive code review tool that doesn't just point out errors but explains the logic behind improvements, helping developers grow as they code.",
    challenges: [
      {
        challenge:
          "Handling large code snippets without exceeding token limits.",
        solution:
          "Implemented a sliding window approach and intelligent summarization of context to keep prompts focused and cost-effective.",
      },
      {
        challenge: "Maintaining low latency for real-time feedback.",
        solution:
          "Utilized server-sent events (SSE) to stream AI responses directly to the frontend for an instantaneous feel.",
      },
    ],
    whatILearned: [
      "Deep understanding of prompt engineering and LLM context management.",
      "Advanced implementation of streaming data in React applications.",
      "Building robust error handling for external API dependencies.",
    ],
  },
  {
    id: 2,
    slug: "nexus-dashboard",
    title: "Nexus Finance Dashboard",
    tagline: "High-performance financial analytics for modern investors.",
    description:
      "A comprehensive dashboard featuring real-time data visualization, predictive analytics, and automated portfolio balancing.",
    category: "UI/UX",
    tags: ["Next.js", "Recharts", "Framer Motion", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    screenshots: [
      "/screenshots/nexus-dashboard/1.png",
      "/screenshots/nexus-dashboard/2.png",
    ],
    theIdea:
      'Existing finance tools were either too simple or overly complex. Nexus aims to bridge the gap with a clean, "engineer-first" design that prioritizes speed and clarity.',
    challenges: [
      {
        challenge:
          "Visualizing thousands of data points without performance lag.",
        solution:
          "Optimized rendering using React.memo and implemented data downsampling for historical charts.",
      },
      {
        challenge:
          "Creating a truly responsive dark mode with consistent branding.",
        solution:
          "Developed a custom CSS variable-based theme system that adapts seamlessly across all UI components.",
      },
    ],
    whatILearned: [
      "Mastered complex data visualization techniques using Recharts.",
      "Refined my skills in creating high-performance, accessible UI components.",
      "Gained experience in managing large-scale application state.",
    ],
  },
  {
    id: 3,
    slug: "workflow-automator",
    title: "Workflow Automator",
    tagline: "Streamlining repetitive tasks with simple, visual logic.",
    description:
      "A drag-and-drop platform for connecting various web services and automating complex workflows without writing code.",
    category: "Full Stack",
    tags: ["React Flow", "Express", "Redis", "Webhooks"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    screenshots: [
      "/screenshots/workflow-automator/1.png",
      "/screenshots/workflow-automator/2.png",
    ],
    theIdea:
      'Automation should be accessible to everyone. This project focuses on a "nodes and edges" interface that makes logic flow intuitive and visual.',
    challenges: [
      {
        challenge:
          "Designing a flexible database schema for dynamic workflow steps.",
        solution:
          "Utilized JSONB columns in PostgreSQL to store variable configuration data for each step in a workflow.",
      },
      {
        challenge: "Ensuring reliable execution of scheduled tasks.",
        solution:
          "Implemented a robust job queue system using BullMQ and Redis for high-availability task processing.",
      },
    ],
    whatILearned: [
      "Extensive experience with graph-based UI architectures.",
      "Deep dive into asynchronous processing and message queues.",
      "Building scalable backend systems to handle high-frequency webhook data.",
    ],
  },
  {
    id: 4,
    slug: "minimal-weather",
    title: "Atmosphere Weather",
    tagline: "Weather forecasting with a focus on simplicity and accuracy.",
    description:
      "A distraction-free weather app that provides essential information at a glance, powered by global meteorological data.",
    category: "Frontend",
    tags: ["React", "OpenWeatherMap API", "Geolocation", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    screenshots: ["/screenshots/minimal-weather/1.png"],
    theIdea:
      'Most weather apps are cluttered with ads and unnecessary data. Atmosphere focuses on the core question: "What should I wear today?"',
    challenges: [
      {
        challenge: "Managing API rate limits for a growing user base.",
        solution:
          "Implemented client-side caching to reduce unnecessary API calls for users checking the same location frequently.",
      },
    ],
    whatILearned: [
      "Practical application of Geolocation APIs.",
      "Effective use of third-party API integration and error boundary patterns.",
    ],
  },
  {
    id: 5,
    slug: "component-kit",
    title: "Forge Component Kit",
    tagline: "A robust, accessible component library for rapid prototyping.",
    description:
      "A collection of highly reusable React components designed with a focus on accessibility and ease of use.",
    category: "Frontend",
    tags: ["TypeScript", "Tailwind CSS", "Storybook", "Radix UI"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    screenshots: ["/screenshots/component-kit/1.png"],
    theIdea:
      "Consistency is key in design. Forge provides the building blocks for any modern web application, ensuring a cohesive look and feel.",
    challenges: [
      {
        challenge: "Ensuring WCAG 2.1 AA compliance across all components.",
        solution:
          "Leveraged Radix UI primitives and conducted extensive manual testing with screen readers.",
      },
    ],
    whatILearned: [
      "Developing standardized UI systems for team use.",
      "Advanced documentation practices using Storybook.",
    ],
  },
  {
    id: 6,
    slug: "ai-image-gen",
    title: "DreamScape AI",
    tagline: "Transforming text into art using cutting-edge diffusion models.",
    description:
      "An intuitive interface for interacting with Stable Diffusion, featuring prompt history and image editing tools.",
    category: "AI/Automation",
    tags: ["React", "Stable Diffusion API", "Canvas API", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    screenshots: ["/screenshots/ai-image-gen/1.png"],
    theIdea:
      "Generative AI is powerful but often has a high barrier to entry. DreamScape makes it as simple as typing a sentence.",
    challenges: [
      {
        challenge: "Handling large image file uploads and storage.",
        solution:
          "Integrated Firebase Storage with automated image compression for optimized performance.",
      },
    ],
    whatILearned: [
      "Integrating complex machine learning APIs into web frontends.",
      "Building creative tools that leverage the Canvas API.",
    ],
  },
  {
    id: 7,
    slug: "dev-tracker",
    title: "Commit Tracker",
    tagline: "Visualizing your productivity across all your repositories.",
    description:
      "A tool that aggregates data from GitHub to provide insights into your coding habits and project progress.",
    category: "Tool",
    tags: ["GitHub GraphQL API", "React", "Tailwind CSS", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    screenshots: ["/screenshots/dev-tracker/1.png"],
    theIdea:
      'Productivity metrics should be helpful, not stressful. Commit Tracker provides a "big picture" view of your development journey.',
    challenges: [
      {
        challenge: "Authenticating with GitHub securely and efficiently.",
        solution:
          "Implemented OAuth2 flow with secure token storage and automatic refresh mechanisms.",
      },
    ],
    whatILearned: [
      "Advanced data fetching with GraphQL.",
      "Implementing secure authentication flows in modern web apps.",
    ],
  },
  {
    id: 8,
    slug: "crypto-pulse",
    title: "Crypto Pulse",
    tagline: "Real-time monitoring of cryptocurrency market trends.",
    description:
      "A fast, lightweight tracker for monitoring price movements and news in the volatile world of crypto.",
    category: "Frontend",
    tags: ["React", "CoinGecko API", "WebSockets", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    screenshots: ["/screenshots/crypto-pulse/1.png"],
    theIdea:
      "Traders need speed. Crypto Pulse is built for minimal latency, providing real-time updates without page reloads.",
    challenges: [
      {
        challenge: "Managing high-frequency data updates without UI stutter.",
        solution:
          "Implemented a throttled update mechanism to balance real-time data with UI performance.",
      },
    ],
    whatILearned: [
      "Working with WebSockets for real-time data streaming.",
      "Optimizing React renders for high-frequency state changes.",
    ],
  },
  {
    id: 9,
    slug: "zen-notes",
    title: "Zen Notes",
    tagline: "A distraction-free writing environment for deep work.",
    description:
      "A minimalist note-taking app that prioritizes your thoughts, featuring markdown support and local-first storage.",
    category: "Tool",
    tags: ["React", "IndexedDB", "Markdown-it", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    screenshots: ["/screenshots/zen-notes/1.png"],
    theIdea:
      "Your writing space should be a sanctuary. Zen Notes removes all the noise, leaving only you and your words.",
    challenges: [
      {
        challenge: "Providing a seamless offline experience.",
        solution:
          "Utilized IndexedDB for local-first storage, ensuring data is always accessible regardless of connection.",
      },
    ],
    whatILearned: [
      "Implementing local-first data persistence strategies.",
      "Building custom markdown editors with real-time preview.",
    ],
  },
  {
    id: 10,
    slug: "bot-builder",
    title: "OmniBot Builder",
    tagline: "Design and deploy custom AI chatbots in minutes.",
    description:
      "An end-to-end platform for building, training, and deploying AI assistants across multiple channels.",
    category: "AI/Automation",
    tags: ["React", "LangChain", "OpenAI API", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    screenshots: ["/screenshots/bot-builder/1.png"],
    theIdea:
      "Every business needs an AI assistant. OmniBot makes it easy to build one that truly understands your data.",
    challenges: [
      {
        challenge: "Training AI on custom documents accurately.",
        solution:
          "Implemented a vector database with semantic search to provide the AI with relevant context from uploaded files.",
      },
    ],
    whatILearned: [
      "Mastering LangChain for complex AI agent workflows.",
      "Building scalable vector search architectures.",
    ],
  },
  {
    id: 11,
    slug: "portfolio-v1",
    title: "Legacy Portfolio",
    tagline: "My first professional step into the digital world.",
    description:
      "A clean, minimalist portfolio designed to showcase my early projects and growth as a developer.",
    category: "UI/UX",
    tags: ["HTML", "CSS", "JavaScript", "AOS"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    screenshots: ["/screenshots/portfolio-v1/1.png"],
    theIdea:
      "You have to start somewhere. This project was my first attempt at creating a professional online presence.",
    challenges: [
      {
        challenge: "Learning the fundamentals of responsive design.",
        solution:
          "Mastered CSS Flexbox and Media Queries to ensure the site worked on all screen sizes.",
      },
    ],
    whatILearned: [
      "Solid foundation in core web technologies.",
      "Importance of design hierarchy and user experience.",
    ],
  },
  {
    id: 12,
    slug: "blog-platform",
    title: "Ink & Paper",
    tagline: "A modern platform for passionate writers and thinkers.",
    description:
      "A full-stack blogging solution featuring an intuitive editor, comment systems, and SEO optimization.",
    category: "Full Stack",
    tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    screenshots: ["/screenshots/blog-platform/1.png"],
    theIdea:
      "Blogging should be about the content. Ink & Paper provides a premium experience for both writers and readers.",
    challenges: [
      {
        challenge: "Optimizing page load speed for better SEO.",
        solution:
          "Leveraged Next.js Static Site Generation (SSG) for all blog posts, achieving sub-second load times.",
      },
    ],
    whatILearned: [
      "Advanced Next.js patterns for SEO and performance.",
      "Building secure, full-stack applications with user authentication.",
    ],
  },
];
