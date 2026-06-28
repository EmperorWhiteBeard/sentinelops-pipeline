export const skills = {
  cloud: {
    title: "Cloud",
    icon: "Cloud",
    items: [
      { name: "AWS", level: 85 },
      { name: "EC2", level: 80 },
      { name: "S3", level: 85 },
      { name: "IAM", level: 75 },
      { name: "CloudFront", level: 70 },
      { name: "CloudWatch", level: 75 },
      { name: "CodePipeline", level: 80 },
      { name: "CodeBuild", level: 80 },
      { name: "Lambda", level: 65 },
      { name: "Secrets Manager", level: 75 },
    ],
  },
  devops: {
    title: "DevOps",
    icon: "GitBranch",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "GitHub Actions", level: 85 },
      { name: "Jenkins", level: 70 },
      { name: "CI/CD", level: 85 },
    ],
  },
  containers: {
    title: "Containers",
    icon: "Container",
    items: [
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 65 },
    ],
  },
  iac: {
    title: "Infrastructure as Code",
    icon: "Code",
    items: [
      { name: "Terraform", level: 80 },
      { name: "Ansible", level: 60 },
    ],
  },
  monitoring: {
    title: "Monitoring",
    icon: "Activity",
    items: [
      { name: "CloudWatch", level: 75 },
      { name: "Prometheus", level: 60 },
      { name: "Grafana", level: 60 },
    ],
  },
  scripting: {
    title: "Scripting",
    icon: "Terminal",
    items: [
      { name: "Python", level: 75 },
      { name: "Bash", level: 80 },
      { name: "Linux", level: 85 },
    ],
  },
}

export const certifications = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "2026",
    badge: "AWS",
    color: "#FF9900",
    pdf: "#",
  },
  {
    name: "AWS Educate Introduction to Generative AI",
    issuer: "Amazon Web Services",
    date: "2026",
    badge: "AWS",
    color: "#FF9900",
    pdf: "#",
  },
  {
    name: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services",
    date: "2026",
    badge: "AWS",
    color: "#FF9900",
    pdf: "#",
  },
  {
    name: "Cisco Network Fundamentals",
    issuer: "Cisco",
    date: "2026",
    badge: "Cisco",
    color: "#1BA0D7",
    pdf: "#",
  },
  {
    name: "Intel AI For All",
    issuer: "Intel",
    date: "2025",
    badge: "Intel",
    color: "#0071C5",
    pdf: "#",
  },
]

export const projects = [
  {
    title: "THROW — Multi-App CI/CD & Cloud Infrastructure",
    description:
      "Production-style CI/CD platform for a 3-app Flutter delivery marketplace. Automated deployment pipelines with secure secret management and CloudFront distribution.",
    image: "/throw-cicd-architecture.png",
    architecture: "/throw-cicd-architecture.png",
    tags: [
      "AWS",
      "CodePipeline",
      "CodeBuild",
      "Terraform",
      "S3",
      "CloudFront",
      "Secrets Manager",
      "CloudWatch",
      "SNS",
    ],
    github: "https://github.com/EmperorWhiteBeard/",
    docs: "/Throw_Project_Documentation.pdf",
    demo: "#",
    challenges: [
      "Build pipeline failures due to environment inconsistencies",
      "Hard-coded credentials in configuration files",
      "Manual deployment processes causing delays",
    ],
    solutions: [
      "Standardized build environments using AWS CodeBuild",
      "Migrated all secrets to AWS Secrets Manager",
      "Implemented fully automated CI/CD with CodePipeline",
    ],
    learnings: [
      "Infrastructure as Code best practices with Terraform",
      "Secure secret rotation and management",
      "CloudFront distribution optimization for S3",
    ],
    metrics: [
      { label: "Deployment Time", value: "-80%" },
      { label: "Build Reliability", value: "99%" },
      { label: "Apps Deployed", value: "3" },
    ],
    featured: true,
  },
]

export const devOpsLabs = [
  {
    title: "Docker Projects",
    description: "Containerization labs with Docker Compose, multi-stage builds, and registry management.",
    icon: "Container",
    github: "https://github.com/EmperorWhiteBeard/",
    docs: "#",
    category: "Docker",
  },
  {
    title: "Terraform Projects",
    description: "Infrastructure as Code labs provisioning AWS resources with modular Terraform configurations.",
    icon: "Boxes",
    github: "https://github.com/EmperorWhiteBeard/",
    docs: "#",
    category: "Terraform",
  },
  {
    title: "GitHub Actions Projects",
    description: "Workflow automation labs for CI/CD, testing, and deployment pipelines.",
    icon: "Workflow",
    github: "https://github.com/EmperorWhiteBeard/",
    docs: "#",
    category: "CI/CD",
  },
  {
    title: "Jenkins Pipelines",
    description: "Jenkins pipeline labs for building, testing, and deploying applications.",
    icon: "GitBranch",
    github: "https://github.com/EmperorWhiteBeard/",
    docs: "#",
    category: "Jenkins",
  },
  {
    title: "Linux Automation Scripts",
    description: "Bash and Python automation scripts for system administration and DevOps tasks.",
    icon: "Terminal",
    github: "https://github.com/EmperorWhiteBeard/",
    docs: "#",
    category: "Linux",
  },
  {
    title: "AWS Labs",
    description: "Hands-on AWS labs covering EC2, S3, IAM, Lambda, and serverless architectures.",
    icon: "Cloud",
    github: "https://github.com/EmperorWhiteBeard/",
    docs: "#",
    category: "AWS",
  },
  {
    title: "Ansible Automation",
    description: "Configuration management and automation labs using Ansible playbooks and roles.",
    icon: "FileCode",
    github: "https://github.com/EmperorWhiteBeard/",
    docs: "#",
    category: "Ansible",
  },
  {
    title: "Kubernetes Labs",
    description: "Kubernetes labs covering deployments, services, ingress, and cluster management.",
    icon: "Hexagon",
    github: "https://github.com/EmperorWhiteBeard/",
    docs: "#",
    category: "Kubernetes",
  },
]

export const docs = [
  {
    title: "THROW CI/CD Pipeline Documentation",
    category: "CI/CD",
    description: "Complete technical documentation for the THROW multi-app CI/CD pipeline architecture.",
    pdf: "/Throw_Project_Documentation.pdf",
    date: "2024",
  },
  {
    title: "AWS Infrastructure with Terraform",
    category: "Terraform",
    description: "Terraform modules and infrastructure design patterns for AWS deployments.",
    pdf: "#",
    date: "2026",
  },
  {
    title: "Docker Containerization Guide",
    category: "Docker",
    description: "Best practices for Docker containerization, multi-stage builds, and compose orchestration.",
    pdf: "#",
    date: "2026",
  },
  {
    title: "Kubernetes Deployment Strategies",
    category: "Kubernetes",
    description: "Rolling updates, blue-green deployments, and canary releases with Kubernetes.",
    pdf: "#",
    date: "2026",
  },
  {
    title: "AWS Monitoring & Alerting",
    category: "Monitoring",
    description: "CloudWatch dashboards, alarms, and SNS notification setup guide.",
    pdf: "#",
    date: "2026",
  },
  {
    title: "Linux Automation Cookbook",
    category: "Linux",
    description: "Essential Bash and Python scripts for Linux system administration automation.",
    pdf: "#",
    date: "2026",
  },
  {
    title: "Ansible Configuration Management",
    category: "Ansible",
    description: "Playbook design, role structure, and idempotent automation patterns.",
    pdf: "#",
    date: "2026",
  },
  {
    title: "AWS Security Best Practices",
    category: "AWS",
    description: "IAM policies, security groups, and Secrets Manager implementation patterns.",
    pdf: "#",
    date: "2026",
  },
]

export const architectureDiagrams = [
  {
    title: "THROW CI/CD Architecture",
    category: "CI/CD",
    image: "/throw-cicd-architecture.png",
  },
  {
    title: "AWS Infrastructure Layout",
    category: "AWS",
    image: "/throw-cicd-architecture.png",
  },
  {
    title: "Docker Microservices",
    category: "Docker",
    image: "/placeholder-diagram.jpg",
  },
  {
    title: "Kubernetes Cluster",
    category: "Kubernetes",
    image: "/placeholder-diagram.jpg",
  },
  {
    title: "Terraform Module Structure",
    category: "Terraform",
    image: "/placeholder-diagram.jpg",
  },
  {
    title: "Monitoring Stack",
    category: "Monitoring",
    image: "/placeholder-diagram.jpg",
  },
]

export const timeline = [
  {
    year: "2026",
    title: "BCA Graduation",
    description: "Completed Bachelor of Computer Applications with focus on cloud computing and automation.",
    icon: "GraduationCap",
  },
  {
    year: "2026",
    title: "AWS Cloud Practitioner",
    description: "Earned AWS Cloud Practitioner certification and began deep AWS services exploration.",
    icon: "Cloud",
  },
  {
    year: "2026",
    title: "Cisco Networking",
    description: "Completed Cisco Network Fundamentals and expanded networking knowledge.",
    icon: "Network",
  },
  {
    year: "2026",
    title: "DevOps Projects",
    description: "Built production-style CI/CD pipelines and Infrastructure as Code projects.",
    icon: "GitBranch",
  },
  {
    year: "2026",
    title: "Cloud Infrastructure",
    description: "Designed and deployed scalable cloud infrastructure on AWS with Terraform.",
    icon: "Server",
  },
  {
    year: "2026",
    title: "Future Goal",
    description: "DevOps Engineer / Cloud Engineer / SRE — continuing to build and automate.",
    icon: "Target",
  },
]

export const githubStats = {
  username: "EmperorWhiteBeard",
  repos: 12,
  stars: 8,
  commits: 340,
  languages: [
    { name: "Python", percent: 35, color: "#3572A5" },
    { name: "HCL", percent: 25, color: "#844FBA" },
    { name: "Shell", percent: 20, color: "#89E051" },
    { name: "YAML", percent: 15, color: "#CB171E" },
    { name: "JavaScript", percent: 5, color: "#F7DF1E" },
  ],
}
