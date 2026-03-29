const PORTFOLIO_DATA = {
  name: "Gazi Musa Al Sathman",
  title: "Software Engineer",
  tagline: "I build production systems that don't break. When they do, I find out why.",
  location: "Dhaka, Bangladesh",
  email: "sathmangazi1@gmail.com",
  github: "https://github.com/SathmanGazi",
  linkedin: "https://linkedin.com/in/musa-al-sathman-gazi",
  cv_url: "./assets/Musa_Resume (1).pdf",

  expertise: [
    "Production Systems Engineering",
    "CI/CD & Quality Automation",
    "Python Data Pipelines",
    "REST API Design & Testing",
    "ML System Integration",
    "Cloud Infrastructure (AWS)"
  ],

  experience: [
    {
      role: "Lead Software Engineer",
      org: "InsurTech BD",
      location: "Dhaka, Bangladesh",
      period: "Jan 2026 – Present",
      type: "industry",
      description: "Building a multi-tenant B2B SaaS claims automation platform for Bangladesh's insurance sector. Designed full system architecture, claims state machine, regulatory compliance integration, and automated test infrastructure from the ground up.",
      tags: ["FastAPI", "PostgreSQL 15", "Next.js", "TypeScript", "pytest", "GitHub Actions", "AWS"],
      details: [
        "Built multi-tenant claims automation platform in FastAPI, PostgreSQL 15, and Next.js/TypeScript with full Bengali/English bilingual support and JWT authentication",
        "Designed claims state machine with surveyor dispatch, urgency classification, and 90-day deadline tracking with append-only audit trail",
        "Prototyped regulatory compliance integration layer against Bangladesh's national insurance data platform for 82 licensed insurers",
        "Shipped 23/23 pytest-asyncio critical path tests covering tenant isolation, API integration, urgency band logic, and status transitions",
        "Set up GitHub Actions CI/CD pipeline with automated test gates enforced on every push",
        "Conducting stakeholder validation and product research in an underserved B2B insurance software market"
      ]
    },
    {
      role: "Software Quality Engineer",
      org: "Novanta",
      location: "Bedford, MA (H-1B)",
      period: "May 2024 – Jan 2026",
      type: "industry",
      description: "Owned full software quality lifecycle for 3 production applications serving 50+ daily users across 6 cross-functional teams. Built CI/CD pipelines, Python data pipelines sustaining zero unplanned downtime over 5 months, and REST API validation infrastructure. Reduced quality deviations from ~2–3/month to zero.",
      tags: ["Python", "GitHub Actions", "MSSQL", "REST APIs", "Power BI", "Jira", "Agile"],
      details: [
        "Owned full software quality lifecycle for 3 production applications (LiteMES, PCN Tracker, Training Matrix) serving 6 cross-functional teams across engineering, quality, and operations — from requirements through deployment and production support",
        "Built LiteMES (Python PySide6 + MSSQL) serving 50+ daily users, replacing manual Excel NCR, MRB, and red-tag workflows — sprint delivery improved from ~90% to ~97%",
        "Implemented CI/CD pipelines using GitHub Actions to enforce quality gates, automate regression testing, and reduce manual release effort across all internal tools",
        "Designed PCN impact identification tool with automated part-to-customer mapping, reducing quality deviations from ~2–3/month to zero over 5 months",
        "Built scalable Python data pipelines processing manufacturing data across multiple systems, maintaining zero unplanned downtime over 5 months in production",
        "Created 5 Power BI dashboards integrating Arena PLM data via REST APIs, reducing meeting prep time from 30 minutes to 2 minutes through automated real-time reporting"
      ]
    }
  ],

  education: [
    {
      school: "University of South Florida",
      degree: "B.S. Computer Science",
      gpa: "3.75",
      location: "Tampa, FL",
      year: "2024",
      note: "AMHR Research Lab · ICPC Regionals · SHPE, GDSC, MSA (Executive Officer)"
    }
  ],

  projects: [
    {
      name: "Claims Automation Platform",
      subtitle: "InsurTech BD — Live Production System",
      period: "2026 – Present",
      description: "Multi-tenant SaaS platform for insurance claims processing. Features JWT auth, Bengali/English bilingual support, surveyor dispatch, urgency classification, and an append-only audit trail against Bangladesh's national insurance data platform.",
      tags: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript", "pytest-asyncio"],
      github: "", // TODO: add repo URL if public
      github_private: false,
      details: [
        "Multi-tenant architecture with full tenant isolation enforced at both database and API layer",
        "JWT authentication with role-based access control for insurers, surveyors, and administrators",
        "Full Bengali/English bilingual support across all UI flows and notification systems",
        "Claims state machine with surveyor dispatch, urgency classification, and 90-day deadline tracking",
        "Append-only audit trail for regulatory compliance against Bangladesh's national insurance data platform",
        "23/23 pytest-asyncio critical path tests covering tenant isolation, API integration, urgency band logic, and status transitions",
        "GitHub Actions CI/CD pipeline with automated test gates on every push"
      ]
    },
    {
      name: "Medical Document Classifier",
      subtitle: "Senior Capstone — JP Morgan Partnership",
      period: "Aug – Dec 2023",
      description: "TensorFlow-based document classification system achieving 98% F1 score. Built end-to-end: data preprocessing, model architecture, feature engineering, hyperparameter tuning, and systematic error analysis.",
      tags: ["TensorFlow", "Python", "scikit-learn", "ML Evaluation"],
      github: "https://github.com/SathmanGazi/JPMorgan-2",
      github_private: false,
      details: [
        "Built and evaluated a TensorFlow-based medical document classification system in partnership with JP Morgan for USF senior capstone",
        "Achieved 98% F1 score on validation data through systematic feature engineering and hyperparameter tuning",
        "End-to-end pipeline: data preprocessing, normalization, tokenization, model architecture design, and training",
        "Conducted systematic error analysis to identify failure modes and iteratively improve model reliability",
        "Applied scikit-learn for evaluation metrics, data splitting, and baseline model comparison"
      ]
    },
    {
      name: "LiteMES",
      subtitle: "Manufacturing Execution System — Novanta",
      period: "2024 – 2025",
      description: "Python desktop application (PySide6 + MSSQL) serving 50+ daily users, replacing manual Excel workflows with automated NCR, MRB, and red-tag processing. Improved sprint delivery rate from ~90% to ~97%.",
      tags: ["Python", "PySide6", "MSSQL", "GitHub Actions"],
      github: "https://github.com/SathmanGazi/Lite-MES-Project",
      github_private: true,
      details: [
        "Production desktop application serving 50+ daily users across 6 cross-functional teams at Novanta's Bedford, MA facility",
        "Replaced error-prone manual Excel NCR, MRB, and red-tag processing with automated workflows",
        "Improved sprint delivery rate from ~90% to ~97% through automation and process standardization",
        "Integrated with MSSQL for persistent storage and cross-system manufacturing data processing",
        "GitHub Actions CI/CD pipeline for automated build, test, and release management",
        "Part of a broader internal suite alongside PCN Tracker and Training Matrix — all under single quality lifecycle ownership"
      ]
    },
    {
      name: "Riddhow Pottery",
      subtitle: "Full-Stack E-Commerce Platform",
      period: "Oct 2025 – Jan 2026",
      description: "Full-stack web application for product management, order processing, and admin workflows. Built with React/Next.js and Node.js with automated CI/CD pipelines and API response validation.",
      tags: ["React", "Next.js", "Node.js", "GitHub Actions"],
      github: "https://github.com/RiddhowPottery/riddhowpottery",
      github_private: false,
      details: [
        "Full-stack architecture supporting product catalog management, order processing, and administrative workflows",
        "React/Next.js frontend with responsive UI and component-driven architecture",
        "Node.js backend with RESTful API design principles and response validation",
        "GitHub Actions CI/CD pipeline automating build, test, and deployment on every push",
        "Biweekly stakeholder review sessions for iterative feature improvement and feedback integration"
      ]
    }
  ],

  skills: {
    "Languages": ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C#", "C++"],
    "Backend & APIs": ["FastAPI", "Node.js", "REST APIs", "ETL Pipelines", "PostgreSQL", "MSSQL", "MongoDB"],
    "Frontend": ["React", "Next.js", "AngularJS"],
    "DevOps & Cloud": ["GitHub Actions", "Docker", "AWS (EC2, S3, Lambda, CloudFormation)", "Git"],
    "Testing & QA": ["pytest", "pytest-asyncio", "Automated Regression", "Defect Triage", "CI/CD Gates"],
    "Tools": ["Jira", "Confluence", "Power BI", "Arena PLM/QMS"]
  },

  certifications: [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" }
  ]
};
