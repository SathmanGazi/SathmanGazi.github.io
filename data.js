const PORTFOLIO_DATA = {
  name: "Gazi Musa Al Sathman",
  title: "Software Engineer & Co-Founder",
  tagline: "I build production systems that don't break. When they do, I find out why.",
  location: "Dhaka, Bangladesh",
  email: "sathmangazi1@gmail.com",
  github: "https://github.com/SathmanGazi",
  linkedin: "https://linkedin.com/in/musa-al-sathman-gazi",
  cv_url: "./assets/Gazi_Resume.pdf",

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
      role: "Co-Founder & CTO",
      org: "InsurTech BD",
      location: "Dhaka, Bangladesh",
      period: "Jan 2026 – Present",
      type: "startup",
      description: "Building a multi-tenant B2B SaaS platform for Bangladesh's insurance sector. Designed full system architecture, claims state machine, regulatory compliance integration, and automated test infrastructure from the ground up.",
      tags: ["FastAPI", "PostgreSQL 15", "Next.js", "TypeScript", "pytest", "GitHub Actions", "AWS"]
    },
    {
      role: "Software Quality Engineer",
      org: "Novanta",
      location: "Bedford, MA (H-1B)",
      period: "May 2024 – Jan 2026",
      type: "industry",
      description: "Owned full software quality lifecycle for 3 production applications serving 50+ daily users across 6 cross-functional teams. Built CI/CD pipelines, Python data pipelines sustaining zero unplanned downtime over 5 months, and REST API validation infrastructure. Reduced quality deviations from ~2–3/month to zero.",
      tags: ["Python", "GitHub Actions", "MSSQL", "REST APIs", "Power BI", "Jira", "Agile"]
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
      link: ""
    },
    {
      name: "Medical Document Classifier",
      subtitle: "Senior Capstone — JP Morgan Partnership",
      period: "Aug – Dec 2023",
      description: "TensorFlow-based document classification system achieving 98% F1 score. Built end-to-end: data preprocessing, model architecture, feature engineering, hyperparameter tuning, and systematic error analysis.",
      tags: ["TensorFlow", "Python", "scikit-learn", "ML Evaluation"],
      link: ""
    },
    {
      name: "LiteMES",
      subtitle: "Manufacturing Execution System — Novanta",
      period: "2024 – 2025",
      description: "Python desktop application (PySide6 + MSSQL) serving 50+ daily users, replacing manual Excel workflows with automated NCR, MRB, and red-tag processing. Improved sprint delivery rate from ~90% to ~97%.",
      tags: ["Python", "PySide6", "MSSQL", "GitHub Actions"],
      link: ""
    },
    {
      name: "Riddhow Pottery",
      subtitle: "Full-Stack E-Commerce Platform",
      period: "Oct 2025 – Jan 2026",
      description: "Full-stack web application for product management, order processing, and admin workflows. Built with React/Next.js and Node.js with automated CI/CD pipelines and API response validation.",
      tags: ["React", "Next.js", "Node.js", "GitHub Actions"],
      link: ""
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
