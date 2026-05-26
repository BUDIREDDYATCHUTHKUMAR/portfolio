export const profile = {
  name: "Budireddy Atchuth Kumar",
  roleLine: "I build scalable backend systems and AI-powered applications.",
  summary:
    "Software engineer focused on backend development, API design, and practical AI systems. Most of my work is around building reliable services, shaping clean data flow, and improving systems once they start handling real usage.",
  location: "India",
  email: "budireddyatchuthkumar@gmail.com",
  links: {
    github: "https://github.com/BUDIREDDYATCHUTHKUMAR",
    linkedin: "https://www.linkedin.com/in/atchuthkumar-budireddy-bb25922b7/"
  },
  targetRoles: [
    "Software Engineer",
    "Python Developer",
    "AI / ML Engineer"
  ],
  highlights: [
    {
      label: "Primary stack",
      value: "Python, Django, REST APIs, PostgreSQL"
    },
    {
      label: "Systems focus",
      value: "Backend design, database workflows, retrieval pipelines"
    },
    {
      label: "Working style",
      value: "Design clearly, debug methodically, and ship maintainable systems"
    }
  ]
};

export const skills = {
  Languages: ["Python", "JavaScript", "SQL"],
  Backend: ["Django", "Django REST Framework", "REST APIs", "Node.js", "System Design"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  "AI/ML": ["RAG Systems", "LLM Integration", "scikit-learn", "Pandas", "Model Evaluation"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "Linux", "CI/CD"]
};

export const buildProcess = [
  {
    stage: "Design",
    detail:
      "Start with the data flow, edge cases, and interface boundaries before implementation."
  },
  {
    stage: "Build",
    detail:
      "Prefer modular services, explicit validation, and APIs that are straightforward to test."
  },
  {
    stage: "Optimize",
    detail:
      "Measure query cost, response time, and processing latency before changing internals."
  },
  {
    stage: "Debug",
    detail:
      "Use logs, controlled reproductions, and instrumentation to isolate issues instead of guessing."
  },
  {
    stage: "Ship",
    detail:
      "Document important assumptions so the system remains maintainable after delivery."
  }
];

export const projects = [
  {
    slug: "urbanhome",
    name: "UrbanHome",
    category: "Django backend platform",
    featured: true,
    status: "Backend-first product system",
    repoUrl: "https://github.com/BUDIREDDYATCHUTHKUMAR",
    summary:
      "Django backend for property listings, user flows, and booking-related API operations.",
    problem:
      "Real-estate workflows usually grow into fragmented CRUD services. The challenge was to keep listing, user, and transaction flows consistent while exposing APIs that could support both an admin panel and user-facing clients.",
    design:
      "Structured the system around Django apps with clear domain boundaries for authentication, listings, booking workflows, and admin controls. APIs were normalized around reusable serializers and validation paths so business rules lived in one place instead of being duplicated across endpoints.",
    stack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JWT Auth"],
    challenges: [
      {
        title: "Cross-module validation",
        solution:
          "Centralized validation rules in service-layer functions to keep booking and listing state transitions consistent."
      },
      {
        title: "Query-heavy listing views",
        solution:
          "Reduced redundant joins with selective prefetching, indexed filters, and paginated API responses."
      }
    ],
    metrics: [
      "Improved listing response time by tuning queries and introducing consistent pagination.",
      "Reduced repeated validation logic by moving business checks into shared service paths.",
      "Made admin-side operations easier to manage with clearer listing lifecycle handling."
    ]
  },
  {
    slug: "ai-rag-assistant",
    name: "AI RAG Assistant",
    category: "LLM + retrieval system",
    featured: true,
    status: "Applied AI system",
    repoUrl: "https://github.com/BUDIREDDYATCHUTHKUMAR",
    summary:
      "Retrieval-based assistant that fetches supporting context before generating responses.",
    problem:
      "Basic prompt-only assistants hallucinate when asked domain-specific questions. The system needed retrieval, source grounding, and a response path that could stay useful even when context quality varied.",
    design:
      "Built an ingestion pipeline that chunks documents, stores embeddings, and retrieves top matches before generation. The runtime path separates retrieval, prompt assembly, and answer generation so each step can be inspected and improved independently.",
    stack: ["Python", "LLM APIs", "Vector Retrieval", "Embedding Pipeline", "FastAPI"],
    challenges: [
      {
        title: "Noisy retrieval output",
        solution:
          "Adjusted chunking strategy and ranking thresholds to improve context precision before generation."
      },
      {
        title: "Latency across retrieval + generation",
        solution:
          "Cached repeated queries and trimmed prompt context to reduce unnecessary model tokens."
      }
    ],
    metrics: [
      "Improved answer relevance by refining chunk size, ranking thresholds, and prompt assembly.",
      "Reduced repeated-query latency by caching retrieval results where it made sense.",
      "Made the pipeline easier to debug by recording retrieved context and prompt inputs."
    ]
  },
  {
    slug: "chest-disease-detection",
    name: "Chest Disease Detection",
    category: "Machine learning pipeline",
    featured: true,
    status: "ML classification workflow",
    repoUrl: "https://github.com/BUDIREDDYATCHUTHKUMAR",
    summary:
      "Medical image classification workflow with emphasis on preprocessing quality and evaluation discipline.",
    problem:
      "Raw datasets were noisy and imbalanced, which made raw model accuracy misleading. The system had to emphasize preprocessing quality, validation discipline, and interpretable evaluation metrics.",
    design:
      "Created a preprocessing and training flow with dataset cleaning, split control, augmentation, and metric tracking. The emphasis was on repeatable evaluation rather than chasing a single headline metric.",
    stack: ["Python", "TensorFlow", "NumPy", "Pandas", "Model Evaluation"],
    challenges: [
      {
        title: "Class imbalance",
        solution:
          "Applied augmentation and balanced sampling to reduce bias toward majority classes."
      },
      {
        title: "Unstable training behavior",
        solution:
          "Standardized preprocessing and tuned learning-rate schedules to make training runs reproducible."
      }
    ],
    metrics: [
      "Improved validation stability by standardizing preprocessing and data split strategy.",
      "Improved recall on minority classes through augmentation and balanced sampling.",
      "Tracked precision, recall, and confusion trends instead of relying on headline accuracy."
    ]
  },
  {
    slug: "employee-management-system",
    name: "Employee Management System",
    category: "CRUD + workflow system",
    featured: false,
    status: "Business operations app",
    repoUrl: "https://github.com/BUDIREDDYATCHUTHKUMAR",
    summary:
      "Internal operations system for employee records, attendance, and role-based actions.",
    problem:
      "Even straightforward internal tools become unreliable when access rules, validations, and reporting logic are scattered. The system needed predictable workflows and maintainable APIs.",
    design:
      "Modeled employee, department, and attendance workflows with role-based operations and normalized database relationships. Focused on predictable API behavior and simpler administrative reporting.",
    stack: ["Python", "Django", "MySQL", "REST APIs"],
    challenges: [
      {
        title: "Role-based action control",
        solution:
          "Mapped permission checks into reusable middleware and service functions."
      },
      {
        title: "Reporting consistency",
        solution:
          "Kept attendance and employee records normalized to avoid duplicated reporting logic."
      }
    ],
    metrics: [
      "Reduced manual record handling by centralizing employee and attendance workflows.",
      "Improved reporting consistency with cleaner normalized relationships."
    ]
  },
  {
    slug: "trading-bot",
    name: "Trading Bot",
    category: "Automation + market data",
    featured: false,
    status: "Strategy automation prototype",
    repoUrl: "https://github.com/BUDIREDDYATCHUTHKUMAR",
    summary:
      "Automated trading prototype combining data ingestion, strategy rules, and execution safeguards.",
    problem:
      "Automated trading systems fail quickly when signal logic, execution logic, and risk constraints are mixed together. The goal was to separate the moving parts so strategy iteration stayed safe and testable.",
    design:
      "Separated market data ingestion, signal generation, and trade execution into distinct modules. This made it easier to backtest strategy logic without coupling it directly to live execution behavior.",
    stack: ["Python", "APIs", "Pandas", "Scheduling", "Risk Rules"],
    challenges: [
      {
        title: "Noisy market signals",
        solution:
          "Added threshold-based filters and cooldown rules to limit overtrading."
      },
      {
        title: "Execution safety",
        solution:
          "Applied position limits and stop-loss constraints as first-class checks."
      }
    ],
    metrics: [
      "Reduced noisy trade triggers with threshold filters and cooldown logic.",
      "Made strategy iteration safer by separating backtest logic from execution behavior."
    ]
  }
];

export const featuredProjectSlugs = projects
  .filter((project) => project.featured)
  .map((project) => project.slug);
