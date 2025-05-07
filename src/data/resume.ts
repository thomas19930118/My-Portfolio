export const resumeData = {
  personalInfo: {
    name: "Thomas Jepson",
    title: "Senior Full Stack Developer & AI Expert | AWS Certified – Machine Learning",
    location: "Los Angeles, CA 91406",
    phone: "(818) 570-5099",
    email: "thomasj19930118@email.com"
  },

  summary: `Results-driven Senior Full Stack Developer and AI Expert with 8+ years of experience designing 
and implementing reliable, efficient, and intelligent software solutions. Deep expertise in 
modern web development, backend systems, and machine learning architecture, specializing in 
bringing together robust APIs, engaging front-ends, and advanced artificial intelligence to 
create scalable, data-driven applications. Adept at deploying cloud-native solutions, automating 
workflows, and optimizing performance for real-world impact. Highly skilled at cross-team 
collaboration, solving complex business problems, and leading adoption of new technologies 
for digital transformation.`,
  
  experience: [
    {
      title: "Lead Full Stack & AI Engineer",
      company: "HealthSync Systems",
      period: "April 2021 – Present",
      responsibilities: [
        "Architected and delivered a patient onboarding platform using React (TypeScript), Django REST API, and deep learning models for OCR and document verification, cutting onboarding times by 30%",
        "Built production-grade NLP pipelines (spaCy, fastText) for extracting structured medical data, enhancing downstream analytics and reporting",
        "Led the deployment and scaling of conversational AI chatbots on AWS Lambda and Amazon Lex for appointment management, increasing patient engagement by 25%",
        "Automated model training, validation, and deployment using AWS Sagemaker, Docker, and Terraform, enabling swift iteration and reproducibility",
        "Integrated SSO and multi-factor authentication using AWS Cognito and Auth0 to ensure HIPAA-compliant security throughout the platform",
        "Established real-time event streaming with Apache Kafka for seamless integration with external EHR systems",
        "Championed adoption of Agile methodologies and set up efficient CI/CD pipelines using GitHub Actions and AWS CodePipeline for rapid development cycles",
        "Mentored a team of 6 engineers in best practices across frontend (React/Redux), backend (Django, FastAPI), and ML operations"
      ]
    },
    {
      title: "Senior Full Stack Engineer & AI Specialist",
      company: "RetailVision Analytics",
      period: "August 2016 – March 2021",
      responsibilities: [
        "Designed and deployed predictive analytics dashboards for retail forecasting, integrating React with D3.js visualizations and GraphQL APIs for real-time insights",
        "Developed recommendation engines and computer vision modules in PyTorch for personalized promotions and image-based inventory tracking, increasing campaign conversion rates",
        "Built microservices with Node.js (Express) and Python (Flask), connecting to both PostgreSQL and MongoDB, ensuring modularity and scalability",
        "Automated infrastructure provisioning and scaling on AWS EC2, S3, DynamoDB and Lambda, reducing ops workload and optimizing costs",
        "Pioneered the migration to Kubernetes for container orchestration, enhancing resilience and deployment speed",
        "Introduced automated testing strategies (Jest, Mocha, pytest) that improved project quality and stability, attaining 90%+ test coverage",
        "Integrated Stripe and PayPal for payment processing and set up real-time monitoring using Datadog and AWS CloudWatch"
      ]
    },
    {
      title: "Full Stack Developer & AI Engineer",
      company: "EduVerse Labs",
      period: "July 2014 – July 2016",
      responsibilities: [
        "Built an adaptive e-learning platform with Angular and Django, using collaborative filtering and NLP-driven content recommendations for over 20,000 users",
        "Led the design of RESTful APIs for mobile and web clients, and developed backend services for quiz grading and live chat using Socket.io",
        "Implemented data pipelines for ingesting and processing large-scale learning analytics using Apache Airflow",
        "Optimized application performance through efficient SQL query design, Redis caching, and CDN integration",
        "Collaborated with cross-functional teams to deliver iterative features and improve platform accessibility"
      ]
    }
  ],
  
  skills: {
    frontend: [
      "React",
      "TypeScript",
      "Angular",
      "Redux",
      "D3.js",
      "HTML5",
      "CSS3"
    ],
    backend: [
      "Django",
      "FastAPI",
      "Node.js",
      "Express",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "RESTful APIs",
      "Socket.io"
    ],
    ai_ml: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "PyTorch",
      "spaCy",
      "fastText",
      "AWS SageMaker"
    ],
    cloud_devops: [
      "AWS (EC2, Lambda, S3, DynamoDB, Cognito, Lex)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "GitHub Actions",
      "AWS CodePipeline",
      "Apache Kafka",
      "Apache Airflow"
    ],
    testing: [
      "Jest",
      "Mocha",
      "pytest",
      "Automated Testing"
    ]
  },
  
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Los Angeles (UCLA)",
      year: "2014",
      gpa: "3.7/4.0"
    }
  ],

  certifications: [
    {
      name: "AWS Certified – Machine Learning",
      issuer: "Amazon Web Services"
    }
  ]
}; 