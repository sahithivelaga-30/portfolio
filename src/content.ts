/**
 * THE DATA PALACE — single source of truth.
 * All resume content lives here as typed objects. Components only render this.
 * Titles and metrics are kept exactly as provided — do not inflate.
 */

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  valueProp: string;
  proofPoint: string;
  links: { label: string; href: string }[];
  resumeUrl: string;
  openTo: string;
}

export interface Metric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  accent?: boolean;
}

export interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  client?: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Optional before/after performance story (Experian only). */
  performance?: {
    before: { title: string; points: string[] };
    after: { title: string; points: string[] };
    metric: string;
  };
}

export interface Project {
  title: string;
  blurb: string;
  outcome: string;
  stack: string[];
  published?: string;
  motif?: "forecast" | "bars" | "web";
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export const profile: Profile = {
  name: "Sahithi Velaga",
  role: "Data Engineer",
  location: "Arlington, TX",
  email: "sahithivelaga@gmail.com",
  phone: "(469) 653-5291",
  valueProp: "I turn raw data into scalable, cost-efficient cloud pipelines.",
  proofPoint: "40% reduction in AWS EMR cluster resource consumption.",
  links: [
    // TODO: replace # with real profile URLs (or remove a button in Contact).
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
  resumeUrl: "/resume.pdf",
  openTo:
    "Open to data engineering, software engineering, and analytics-engineering roles.",
};

export const snapshot: Metric[] = [
  { value: 3, suffix: " yrs", label: "across data + cloud" },
  { value: 40, suffix: "%", prefix: "−", label: "EMR cost cut", accent: true },
  { value: 4, suffix: "", label: "production stacks tested" },
  { value: 3, suffix: "", label: "published works" },
];

export const snapshotTags: string[] = [
  "PySpark / Java / AWS",
  "M.S. CS, UTA",
  "Azure AI-900",
];

export const experience: ExperienceEntry[] = [
  {
    company: "Experian",
    title: "Software Engineering Intern",
    period: "Aug 2024 – Nov 2025",
    summary:
      "Migrated and benchmarked data-processing logic across PySpark, Java, and Python, and built the DevHub developer portal — while tuning AWS EMR for a 40% resource cut.",
    highlights: [
      "Migrated Python logic to PySpark (filters, attributes, UDFs) for the India region → faster execution and better resource efficiency.",
      "Migrated Python logic to Java for the Italy bureau; ran comparative performance testing across Python UDFs, PySpark, and Java to pick the production stack.",
      "Built the DevHub developer-portal frontend from Figma, integrating Backstage and Wayfarer components.",
      "Optimized AWS EMR clusters → 40% reduction in cluster resource consumption.",
      "Git / Bitbucket for version control and continuous delivery.",
    ],
    stack: ["PySpark", "Java", "Python", "AWS EMR", "Backstage", "Bitbucket"],
    performance: {
      before: {
        title: "Before",
        points: [
          "Python UDF bottlenecks",
          "Heavy, untuned cluster load",
          "Single-language assumptions",
        ],
      },
      after: {
        title: "After",
        points: [
          "PySpark + Java-tested production stack",
          "Tuned AWS EMR clusters",
          "−40% cluster resource consumption",
        ],
      },
      metric: "−40% EMR resources",
    },
  },
  {
    company: "TCS",
    title: "Assistant System Engineer",
    period: "Nov 2021 – Sep 2022",
    client: "Ecolab",
    summary:
      "Built an ETL system that processed raw data into golden records for downstream BI reporting.",
    highlights: [
      "Client: Ecolab. Designed and built an ETL pipeline with Oracle, IDQ, and Talend.",
      "Transformed raw source data into clean golden records for downstream BI reporting.",
    ],
    stack: ["Oracle", "IDQ", "Talend", "ETL"],
  },
  {
    company: "Exposys Data Labs",
    title: "Data Science Intern",
    period: "Aug 2020 – Sep 2020",
    summary:
      "Customer segmentation using K-Means clustering and the elbow method.",
    highlights: [
      "Customer segmentation with K-Means + elbow method (WCSS).",
      "Analyzed income and spending-score attributes to define segments.",
    ],
    stack: ["Python", "K-Means", "Pandas"],
  },
];

export const devhub = {
  title: "DevHub Developer Portal",
  blurb:
    "Built the DevHub frontend from Figma, integrating Backstage + Wayfarer components.",
  modules: [
    { name: "Service Catalog", detail: "Ownership & metadata for every service" },
    { name: "Docs", detail: "TechDocs rendered inline" },
    { name: "API Registry", detail: "Discover and try internal APIs" },
    { name: "Deployments", detail: "Pipeline status at a glance" },
    { name: "Ownership", detail: "Teams mapped to systems" },
    { name: "Templates", detail: "Scaffold new services" },
  ],
};

export const projects: Project[] = [
  {
    title: "COVID-19 Outbreak Analysis & Prediction (India)",
    blurb:
      "Kaggle / JHU / WHO data explored with bar charts, scatter, and interactive plots; FB Prophet forecasting.",
    outcome: "Forecasted outbreak trajectories with FB Prophet time-series models.",
    stack: ["Python", "FB Prophet", "Pandas", "Matplotlib"],
    published: "Published — ICICI-21, M.S. University of Baroda (ISSN 00250422)",
    motif: "forecast",
  },
  {
    title: "Electronics Sales Data Analysis",
    blurb:
      "Analyzed 2019 Kaggle sales data in Python to surface commercial patterns.",
    outcome: "Surfaced best-selling products, top location, and peak periods.",
    stack: ["Python", "Pandas", "Matplotlib"],
    motif: "bars",
  },
  {
    title: "Web App for Ayurvedic Medication Seekers",
    blurb:
      "A web application helping users find Ayurvedic medication information.",
    outcome: "Delivered a published, usable medication-discovery web app.",
    stack: ["Web", "JavaScript"],
    published: "Published in IJRAR, Vol 7 Issue 3, Sep 2020",
    motif: "web",
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", skills: ["PySpark", "Scala", "Python", "Java", "SQL"] },
  {
    label: "Python stack",
    skills: ["NumPy", "Pandas", "Seaborn", "Matplotlib", "SciPy", "PyTorch"],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS (S3, EMR, EC2, IAM)",
      "Azure",
      "Docker",
      "Jenkins",
      "Git",
      "Bitbucket",
      "Maven",
    ],
  },
  {
    label: "Databases",
    skills: ["Oracle", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Data & Platforms",
    skills: ["Tableau", "Informatica PowerCenter", "Node.js", "React", "Backstage"],
  },
];

export const education: Education[] = [
  {
    degree: "M.S. Computer Science",
    school: "University of Texas at Arlington",
    year: "2024",
  },
  {
    degree: "B.Tech Computer Science & Engineering",
    school: "VR Siddhartha Engineering College",
    year: "2021",
  },
];

export const certifications: Certification[] = [
  { name: "Microsoft Azure AI Fundamentals (AI-900)", issuer: "Microsoft" },
];

export const coursework: string[] = [
  "Cloud Computing & Big Data",
  "Distributed Systems",
  "Machine Learning",
  "Artificial Intelligence",
  "Computer Vision",
  "Data Mining",
  "Design & Analysis of Algorithms",
];

export const sections = [
  { id: "hero", label: "Entrance" },
  { id: "snapshot", label: "Snapshot" },
  { id: "experience", label: "Experience" },
  { id: "devhub", label: "DevHub" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
