import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-4 pt-28 text-justify text-muted-foreground"
    >
      <H2 className="mx-auto w-max text-foreground">About Me</H2>
      <P>
        As a <strong>Senior Full Stack Developer and AI Expert</strong> with over{" "}
        <strong>8 years of experience</strong>, I specialize in designing and implementing{" "}
        <em>reliable, efficient, and intelligent software solutions</em>. Based in{" "}
        <em>Los Angeles</em>, I bring deep expertise in modern web development, 
        backend systems, and machine learning architecture.
      </P>
      <P>
        My technical arsenal includes <strong>Python</strong> (TensorFlow, PyTorch, Django, FastAPI),{" "}
        <strong>JavaScript</strong> (React, Node.js, TypeScript), and various cloud technologies, 
        particularly <strong>AWS</strong> where I&apos;m certified in Machine Learning. I specialize in 
        bringing together <em>robust APIs</em>, <em>engaging front-ends</em>, and{" "}
        <em>advanced artificial intelligence</em> to create scalable, data-driven applications.
      </P>
      <P>
        Currently leading development at <strong>HealthSync Systems</strong>, I&apos;ve successfully 
        architected patient onboarding platforms, built NLP pipelines, and deployed conversational 
        AI chatbots. My experience spans across healthcare, retail analytics, and education sectors, 
        consistently delivering solutions that drive real business impact. I&apos;m passionate about{" "}
        <em>mentoring other developers</em> and <em>championing best practices</em> in software 
        development and MLOps.
      </P>
      <P>
        With expertise in both traditional development stacks and cutting-edge AI technologies, 
        I&apos;m well-equipped to tackle complex technical challenges and deliver innovative solutions. 
        Whether you need a scalable web application, an AI-powered feature, or a complete digital 
        transformation, let&apos;s collaborate to bring your vision to life!
      </P>
    </section>
  );
}
