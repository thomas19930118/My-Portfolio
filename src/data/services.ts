import { createElement, type ReactElement } from "react";
import { 
  BsCpu, 
  BsCloud, 
  BsCodeSlash, 
  BsBarChart, 
  BsChatDots, 
  BsDatabase 
} from "react-icons/bs";  // Using Bootstrap icons instead

type Service = {
  title: string;
  description: string;
  icon?: ReactElement;
};

const ICON_ATTRIBUTES = {
  className: "h-8 w-8",
};

const SERVICES: Service[] = [
  {
    title: "Full Stack Development",
    description: "End-to-end web applications using React, Django, and Node.js with focus on scalability and performance.",
    icon: createElement(BsCodeSlash, ICON_ATTRIBUTES),
  },
  {
    title: "AI & Machine Learning Solutions",
    description: "Custom AI solutions including NLP, computer vision, and deep learning models for business automation.",
    icon: createElement(BsCpu, ICON_ATTRIBUTES),
  },
  {
    title: "Cloud Architecture & MLOps",
    description: "AWS-based cloud solutions with expertise in SageMaker, Lambda, and containerized deployments.",
    icon: createElement(BsCloud, ICON_ATTRIBUTES),
  },
  {
    title: "Data Analytics & Processing",
    description: "Building data pipelines and analytics solutions using Apache Kafka, Airflow, and modern databases.",
    icon: createElement(BsBarChart, ICON_ATTRIBUTES),
  },
  {
    title: "AI-Powered Chatbots",
    description: "Developing intelligent conversational interfaces using NLP and machine learning for enhanced user engagement.",
    icon: createElement(BsChatDots, ICON_ATTRIBUTES),
  },
  {
    title: "Healthcare Technology Solutions",
    description: "HIPAA-compliant healthcare applications with focus on patient data processing and automation.",
    icon: createElement(BsDatabase, ICON_ATTRIBUTES),
  },
];

export default SERVICES;
