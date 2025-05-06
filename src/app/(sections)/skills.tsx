import type { ReactNode } from "react";
import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import SKILLS, { type SkillKeyType } from "@/data/skills";
import { cn } from "@/lib/utils";

const keys = Object.keys(SKILLS) as SkillKeyType[];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 pt-28"
    >
      <H2 className="mx-auto mb-8 w-max">Technical Expertise</H2>
      <P className="text-center mb-8 text-muted-foreground">
        AWS Certified in Machine Learning, with extensive experience across full-stack development,
        AI/ML, and cloud technologies.
      </P>
      <Accordion
        type="multiple"
        defaultValue={[]}
        className="w-full rounded-lg border px-4 shadow-lg"
      >
        {keys.map((key, i) => (
          <AccordionItem
            className={cn("p-4", i === keys.length - 1 && "border-b-0")}
            value={key}
            key={key}
          >
            <AccordionTrigger className="flex w-full items-center justify-between gap-2 text-lg font-medium hover:no-underline">
              {key}
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="flex flex-wrap gap-3">
                {SKILLS[key].map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function SkillBadge({ children }: { children: ReactNode }) {
  return (
    <Badge 
      className="cursor-default rounded-lg shadow hover:bg-primary transition-colors px-3 py-1.5"
      variant="secondary"
    >
      <P className="text-sm font-medium">{children}</P>
    </Badge>
  );
}
