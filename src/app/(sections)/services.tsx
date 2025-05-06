import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SERVICES from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="px-4 pt-28">
      <H2 className="mx-auto mb-4 w-max">Professional Services</H2>
      <P className="text-center mb-8 max-w-2xl mx-auto text-muted-foreground">
        Leveraging 8+ years of experience in full-stack development and AI to deliver
        cutting-edge solutions for complex business challenges.
      </P>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ title, description, icon }) => (
          <Card 
            className="group flex cursor-default flex-col overflow-hidden border-2 hover:border-primary transition-all duration-300" 
            key={title}
          >
            <CardHeader className="pb-4">
              <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              <CardTitle className="text-xl transition-colors group-hover:text-primary">
                {title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="text-base transition-colors group-hover:text-foreground">
                {description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
