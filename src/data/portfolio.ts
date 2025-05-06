import type { StaticImageData } from "next/image";

// Import existing project images with new names
import medicalOcr from "@/../public/portfolio/crown-clothing.png";  // Repurpose for Medical OCR
import healthchatbot from "@/../public/portfolio/forkify.png";      // Repurpose for Healthcare Chatbot
import retailAnalytics from "@/../public/portfolio/omnifood.png";   // Repurpose for Retail Analytics
import patientPlatform from "@/../public/portfolio/antheia.png";    // Repurpose for Patient Platform
import retailDashboard from "@/../public/portfolio/triform.png";    // Repurpose for Retail Dashboard
import mlOps from "@/../public/portfolio/natours.png";             // Repurpose for ML Ops
import microservices from "@/../public/portfolio/bankist.png";     // Repurpose for Microservices

const PROJECT_TYPES = {
  AI_ML: "AI & Machine Learning",
  FULL_STACK: "Full Stack Applications",
  CLOUD_INFRA: "Cloud Infrastructure"
} as const;

export type ProjectType = (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES];

export type PortfolioItem = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: StaticImageData;
};

type Portfolios = {
  [key in ProjectType]: PortfolioItem[];
};

const PORTFOLIO: Portfolios = {
  [PROJECT_TYPES.AI_ML]: [
    {
      title: "Medical Document OCR System",
      description: "AI-powered patient onboarding platform with deep learning models for document verification, reducing processing time by 30%. Features automated data extraction and HIPAA compliance.",
      technologies: [
        "PyTorch",
        "spaCy",
        "fastText",
        "AWS Sagemaker",
        "Docker",
        "Python"
      ],
      imageUrl: medicalOcr,
    },
    {
      title: "Healthcare Chatbot",
      description: "Intelligent appointment management system using AWS services. Increased patient engagement by 25% through automated scheduling and reminders.",
      technologies: [
        "AWS Lambda",
        "Amazon Lex",
        "Python",
        "NLP",
        "AWS CloudFormation"
      ],
      imageUrl: healthchatbot,
    },
    {
      title: "Retail Analytics Engine",
      description: "Advanced retail forecasting system using computer vision and predictive analytics, improving inventory management and campaign effectiveness.",
      technologies: [
        "PyTorch",
        "TensorFlow",
        "Computer Vision",
        "D3.js",
        "Python"
      ],
      imageUrl: retailAnalytics,
    }
  ],

  [PROJECT_TYPES.FULL_STACK]: [
    {
      title: "Patient Management Platform",
      description: "Comprehensive healthcare platform with real-time data processing, secure authentication, and EHR integration. HIPAA-compliant with multi-factor authentication.",
      technologies: [
        "React",
        "TypeScript",
        "Django",
        "GraphQL",
        "AWS Cognito",
        "Apache Kafka"
      ],
      imageUrl: patientPlatform,
    },
    {
      title: "Retail Dashboard System",
      description: "Real-time analytics dashboard providing predictive insights for retail operations. Features interactive visualizations and automated reporting.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "GraphQL",
        "MongoDB",
        "D3.js"
      ],
      imageUrl: retailDashboard,
    }
  ],

  [PROJECT_TYPES.CLOUD_INFRA]: [
    {
      title: "ML Operations Pipeline",
      description: "Automated ML model training and deployment infrastructure using AWS services. Streamlined development workflow with CI/CD integration.",
      technologies: [
        "AWS Sagemaker",
        "Docker",
        "Terraform",
        "GitHub Actions",
        "AWS CodePipeline"
      ],
      imageUrl: mlOps,
    },
    {
      title: "Microservices Architecture",
      description: "Scalable Kubernetes-based microservices infrastructure with automated scaling and monitoring. Improved system reliability and deployment speed.",
      technologies: [
        "Kubernetes",
        "Docker",
        "AWS ECS",
        "Terraform",
        "Prometheus",
        "Grafana"
      ],
      imageUrl: microservices,
    }
  ]
} as const;

export default PORTFOLIO;
