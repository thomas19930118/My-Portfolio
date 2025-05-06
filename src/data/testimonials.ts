import type { StaticImageData } from "next/image";

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  review: string;
  imageUrl?: StaticImageData;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "HealthSync Systems",
    review: "Thomas led the development of our patient onboarding platform, implementing innovative AI solutions that reduced processing times by 30%. His expertise in both full-stack development and machine learning has been invaluable to our digital transformation.",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Engineering",
    company: "HealthSync Systems",
    review: "Working with Thomas has been exceptional. His ability to mentor the team while delivering complex features like our NLP pipeline and chatbot system showcases both his technical expertise and leadership skills.",
  },
  {
    name: "David Park",
    role: "Director of Analytics",
    company: "RetailVision Analytics",
    review: "Thomas's work on our predictive analytics dashboard revolutionized how we handle retail forecasting. His deep understanding of both frontend visualization and backend ML processing created a powerful, user-friendly system.",
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "RetailVision Analytics",
    review: "The recommendation engine Thomas built significantly improved our campaign conversion rates. His attention to detail and ability to translate complex technical solutions into business value is remarkable.",
  },
  {
    name: "James Wilson",
    role: "CEO",
    company: "EduVerse Labs",
    review: "Thomas's contribution to our adaptive learning platform was groundbreaking. He successfully implemented AI-driven content recommendations that significantly improved user engagement for over 20,000 users.",
  }
];

export default TESTIMONIALS;
