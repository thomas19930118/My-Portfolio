import Blockquote from "@/components/typography/blockquote";
import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Testimonial } from "@/data/testimonials";
import TESTIMONIALS from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto mb-16 max-w-4xl px-4 pt-28">
      <H2 className="mx-auto mb-2 max-w-max">Professional Recommendations</H2>
      <P className="text-center mb-8 text-muted-foreground">
        Feedback from industry leaders and colleagues
      </P>

      <Carousel className="mx-auto">
        <CarouselContent>
          {TESTIMONIALS.map((testimonial) => (
            <CarouselItem key={testimonial.review}>
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>
    </section>
  );
}

function TestimonialCard({
  testimonial: { name, role, company, review },
}: {
  testimonial: Testimonial;
}) {
  return (
    <Blockquote className="bg-card p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-primary text-primary-foreground">
            {name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <P className="font-semibold">{name}</P>
          <P className="text-sm text-muted-foreground">{role}</P>
          <P className="text-sm text-muted-foreground">{company}</P>
        </div>
      </div>
      <P className="italic text-muted-foreground">&quot;{review}&quot;</P>
    </Blockquote>
  );
}
