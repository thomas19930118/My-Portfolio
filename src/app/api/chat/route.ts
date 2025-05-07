import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { resumeData } from '@/data/resume';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Convert resume data to a structured format for the system message
const resumeContext = `
PERSONAL INFORMATION:
Name: ${resumeData.personalInfo.name}
Title: ${resumeData.personalInfo.title}
Location: ${resumeData.personalInfo.location}
Contact: ${resumeData.personalInfo.email} | ${resumeData.personalInfo.phone}

PROFESSIONAL SUMMARY:
${resumeData.summary}

WORK EXPERIENCE:

1. ${resumeData.experience[0].title} at ${resumeData.experience[0].company} (${resumeData.experience[0].period})
Key Achievements and Responsibilities:
${resumeData.experience[0].responsibilities.map(r => `• ${r}`).join('\n')}

2. ${resumeData.experience[1].title} at ${resumeData.experience[1].company} (${resumeData.experience[1].period})
Key Achievements and Responsibilities:
${resumeData.experience[1].responsibilities.map(r => `• ${r}`).join('\n')}

3. ${resumeData.experience[2].title} at ${resumeData.experience[2].company} (${resumeData.experience[2].period})
Key Achievements and Responsibilities:
${resumeData.experience[2].responsibilities.map(r => `• ${r}`).join('\n')}

TECHNICAL SKILLS:

Frontend Development:
${resumeData.skills.frontend.join(', ')}

Backend Development:
${resumeData.skills.backend.join(', ')}

AI & Machine Learning:
${resumeData.skills.ai_ml.join(', ')}

Cloud & DevOps:
${resumeData.skills.cloud_devops.join(', ')}

Testing:
${resumeData.skills.testing.join(', ')}

EDUCATION:
${resumeData.education[0].degree}
Institution: ${resumeData.education[0].institution}
Graduation Year: ${resumeData.education[0].year}
GPA: ${resumeData.education[0].gpa}

CERTIFICATIONS:
${resumeData.certifications[0].name} - ${resumeData.certifications[0].issuer}
`;

// System message to set the context for the AI
const systemMessage = {
  role: "system",
  content: `You are an AI assistant representing ${resumeData.personalInfo.name}, a ${resumeData.personalInfo.title}. You have access to the following detailed resume information:

${resumeContext}

Instructions for responding:
1. Provide detailed, accurate responses based ONLY on the resume information above
2. Highlight relevant experience and technical skills when answering specific questions
3. For technical questions, emphasize hands-on experience with specific technologies and frameworks
4. When discussing projects, mention quantifiable achievements and business impact
5. For questions about AI/ML capabilities, reference specific implementations and tools used
6. If asked about something not in the resume, respond yourself suitable for all people so that they can feel this the response is right.
7. Keep responses professional, concise, and focused on demonstrating expertise
8. When relevant, mention the scale of projects (e.g., team size, user base, performance improvements)
9. Highlight leadership and mentoring experience when appropriate
10. Emphasize experience with modern technologies and best practices

Key strengths to emphasize:
- 8+ years of experience in full stack development and AI
- Strong background in healthcare, retail, and education sectors
- Expertise in both traditional web development and cutting-edge AI/ML
- Proven track record of improving system performance and user engagement
- Experience with cloud architecture and DevOps practices
- Leadership in implementing new technologies and methodologies`
};

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 500,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    return NextResponse.json({
      message: response.choices[0].message.content,
    });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Failed to get AI response' },
      { status: 500 }
    );
  }
}
