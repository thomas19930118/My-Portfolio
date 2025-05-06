const SKILLS = {
  "Languages & Core Technologies": [
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Java",
    "HTML/CSS"
  ],
  "Frontend Development": [
    "React",
    "Angular",
    "Redux",
    "TypeScript",
    "D3.js",
    "Jest",
    "Mocha",
    "Cypress",
    "Selenium"
  ],
  "Backend & APIs": [
    "Django",
    "FastAPI",
    "Flask",
    "Node.js",
    "Express",
    "GraphQL",
    "REST APIs",
    "Socket.io",
    "Microservices"
  ],
  "AI & Machine Learning": [
    "TensorFlow",
    "PyTorch",
    "scikit-learn",
    "NLP",
    "Computer Vision",
    "Deep Learning",
    "MLOps",
    "SageMaker",
    "spaCy",
    "fastText"
  ],
  "Databases & Data Processing": [
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
    "Redis",
    "Apache Kafka",
    "Apache Airflow",
    "Data Pipelines"
  ],
  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Lambda",
    "EC2",
    "S3",
    "ECS",
    "Cognito",
    "CloudFormation",
    "GitHub Actions",
    "Jenkins",
    "CI/CD"
  ],
  "Tools & Practices": [
    "Agile/Scrum",
    "Git",
    "TDD",
    "BDD",
    "API Design",
    "System Architecture",
    "Performance Optimization",
    "Security Best Practices"
  ]
};

export type SkillsType = typeof SKILLS;
export type SkillKeyType = keyof SkillsType;
export default SKILLS;
