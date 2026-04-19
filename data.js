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
      org: "Lance",
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
      name: "InsurTech BD Platform",
      subtitle: "Lance — B2B SaaS Claims Automation",
      period: "2026 – Present",
      description: "B2B SaaS platform for insurance claims workflow automation in Bangladesh. Built for licensed insurance companies to enforce IDRA's 90-day claims settlement mandate (Insurance Act 2010) with zero prior digital infrastructure.",
      tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Redis", "Celery", "AWS S3", "Next.js 14", "TypeScript", "Tailwind CSS", "Docker", "GitHub Actions"],
      github: "https://github.com/insurtech-bd/platform",
      github_private: true,
      details: [
        "Multi-tenant FastAPI backend with PostgreSQL, Redis/Celery, and AWS S3; every DB table scoped by tenant_id",
        "Claim status state machine enforcing IDRA's 17-action Claims Management Guideline 2024 with immutable audit trail",
        "Automated escalation alerts at 60/75/85-day thresholds; XBRL/JSON compliance reporting",
        "IDRA UMP API integration for policy verification, e-KYC, and SMS notifications",
        "CI/CD via GitHub Actions with PostgreSQL + Redis test containers; Next.js 14 frontend with Bengali i18n"
      ]
    },
    {
      name: "Smart Drone Traffic Analyzer",
      subtitle: "Computer Vision Pipeline",
      period: "2025",
      description: "End-to-end computer vision pipeline for analyzing aerial/drone video footage — detects, tracks, and de-duplicates vehicle counts with an annotated output video and CSV/XLSX reports.",
      tags: ["Python", "FastAPI", "YOLOv8", "ByteTrack", "OpenCV", "supervision", "pandas", "WebSockets", "Next.js 14", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/SathmanGazi/ants_smart_drone",
      github_private: false,
      details: [
        "YOLOv8 + ByteTrack pipeline with custom de-duplication logic (confirmation threshold, displacement gate, soft re-ID fallback, majority-vote class assignment)",
        "Real-time WebSocket progress streaming from FastAPI background task to Next.js frontend",
        "Generates annotated MP4 (H.264 via ffmpeg), result JSON, CSV, and XLSX reports per job",
        "Stateless, interface-driven architecture with deliberate seams for Redis/Celery/S3 swap-in"
      ]
    },
    {
      name: "Fin — Office Accounting ERP",
      subtitle: "MERN-Stack ERP & Payroll System",
      period: "2025",
      description: "MERN-stack office accounting and light ERP system with role-based access, multi-step expense approval workflows, client ledgers, asset/vehicle registers, real-time notifications, and HR/payroll module.",
      tags: ["Node.js", "Express", "MongoDB", "Mongoose", "React 18", "Tailwind CSS", "Socket.io", "JWT", "Recharts", "Cloudflare Pages", "Render"],
      github: "https://github.com/insurtech-bd/fin-accounting",
      github_private: true,
      live_url: "https://fin-accounting.pages.dev",
      details: [
        "Role-based access control (Admin / Director / Accounts / Employee) with JWT auth",
        "Full expense lifecycle: submit → approve/reject → mark paid with FIN reference numbers",
        "Real-time Socket.io notifications; client debit/credit ledger with dues tracking",
        "HR & Payroll module: monthly cash payroll, advance/loan tracking, employee payslip printing",
        "Deployed on Cloudflare Pages (frontend) + Render (backend) + MongoDB Atlas with business-hours keepalive"
      ]
    },
    {
      name: "Medical Document Classifier",
      subtitle: "Senior Capstone — JP Morgan Partnership",
      period: "Aug – Dec 2023",
      description: "TensorFlow-based document classification system achieving 98% F1 score. Built end-to-end: data preprocessing, model architecture, feature engineering, hyperparameter tuning, and systematic error analysis.",
      tags: ["TensorFlow", "Python", "scikit-learn", "ML Evaluation"],
      github: "https://github.com/SathmanGazi/JPMorgan-2",
      github_private: true,
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
