const PORTFOLIO_DATA = {
  name: "Gazi Musa Al Sathman",
  title: "Software Quality Engineer / CS Researcher",
  tagline: "Building reliable systems. Studying why they fail.",
  location: "Dhaka, Bangladesh",
  email: "sathmangazi1@gmail.com",
  github: "https://github.com/SathmanGazi",
  linkedin: "https://linkedin.com/in/musa-al-sathman-gazi",
  cv_url: "./assets/Gazi_Academic_CV.pdf", // drop your CV PDF in /assets folder

  research_interests: [
    "ML System Reliability & Quality Assurance",
    "Automated Testing for Evolving AI Pipelines",
    "Software Traceability in Regulated Systems",
    "Applied ML for FinTech / InsurTech",
    "Concept Drift Detection in Production"
  ],

  education: [
    {
      school: "University of South Florida",
      degree: "B.S. Computer Science",
      gpa: "3.75",
      location: "Tampa, FL",
      year: "2024"
    }
  ],

  experience: [
    {
      role: "Co-Founder & CTO",
      org: "InsurTech BD",
      location: "Dhaka, Bangladesh",
      period: "Jan 2026 – Present",
      type: "research",
      description: "Building a multi-tenant claims automation platform for Bangladesh's 82 licensed insurance companies. Research focus: reliability and auditability of ML-driven decision pipelines in regulatory environments.",
      tags: ["FastAPI", "PostgreSQL 15", "Next.js", "pytest-asyncio", "CI/CD"]
    },
    {
      role: "Software Quality Engineer",
      org: "Novanta",
      location: "Bedford, MA",
      period: "May 2024 – Jan 2026",
      type: "industry",
      description: "Owned full QA lifecycle for 3 production applications serving 6 cross-functional teams. Built CI/CD pipelines, Python data pipelines (zero downtime, 5 months), and automated regression testing infrastructure.",
      tags: ["GitHub Actions", "Python", "MSSQL", "REST APIs", "Power BI"]
    }
  ],

  research: [
    {
      role: "Undergraduate Research Assistant",
      lab: "AMHR Research Lab",
      org: "University of South Florida",
      period: "Jan 2023 – May 2024",
      description: "NLP/transformer benchmarking research. Developed Python data pipelines and applied empirical evaluation methods — controlled benchmarking, ablation testing, error analysis — to ML systems.",
      tags: ["NLP", "Transformers", "Python", "Empirical Evaluation"]
    }
  ],

  projects: [
    {
      name: "Medical Document Classifier",
      subtitle: "Senior Capstone — JP Morgan Partnership",
      period: "Aug – Dec 2023",
      description: "TensorFlow-based document classification system achieving 98% F1 score through systematic feature engineering, ablation studies, and failure-case analysis.",
      tags: ["TensorFlow", "Python", "ML Evaluation"],
      link: ""
    },
    {
      name: "Riddhow Pottery",
      subtitle: "Full-Stack E-Commerce Platform",
      period: "Oct 2025 – Jan 2026",
      description: "Full-stack web application with React/Next.js frontend, Node.js backend, and automated GitHub Actions CI/CD pipelines including API validation.",
      tags: ["React", "Next.js", "Node.js", "GitHub Actions"],
      link: ""
    }
  ],

  certifications: [
    "AWS Cloud Practitioner"
  ],

  skills: {
    "Languages": ["Python", "Java", "SQL", "JavaScript", "C#", "C++"],
    "ML & Research": ["TensorFlow", "NLP", "Transformer Benchmarking", "Empirical Evaluation"],
    "Testing & QA": ["pytest", "pytest-asyncio", "Regression Testing", "CI/CD Quality Gates"],
    "Databases": ["PostgreSQL", "MSSQL", "MongoDB", "Firebase"],
    "Cloud & DevOps": ["AWS (EC2, S3, Lambda)", "Docker", "Git", "GitHub Actions"]
  }
};
