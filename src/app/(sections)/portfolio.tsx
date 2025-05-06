"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import H2 from "@/components/typography/h2";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PORTFOLIO, {
  type PortfolioItem,
  type ProjectType,
} from "@/data/portfolio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = Object.keys(PORTFOLIO) as ProjectType[];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 pt-28">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <H2 className="mx-auto mb-12 w-max text-center">Featured Projects</H2>
      </motion.div>

      <Tabs
        className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-[max-content_minmax(0,1fr)]"
        defaultValue={Object.keys(PORTFOLIO)[0]}
      >
        <TabsList className="h-min flex-col items-start justify-start rounded-xl border-2 p-4 shadow-lg bg-background">
          {PROJECT_TYPES.map((projectType) => (
            <TabsTrigger
              className="w-full justify-start text-lg py-3 font-medium"
              key={projectType}
              value={projectType}
            >
              {projectType}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="overflow-hidden rounded-xl border-2 bg-background pt-6">
          <ScrollArea className="pb-8">
            <ScrollBar orientation="horizontal" />
            {PROJECT_TYPES.map((projectType) => (
              <TabsContent
                className="m-0 flex w-max gap-6"
                key={projectType}
                value={projectType}
              >
                {PORTFOLIO[projectType].map((portfolioItem, i) => (
                  <PortfolioCard
                    key={portfolioItem.title}
                    portfolioItem={portfolioItem}
                    isLastCard={i === PORTFOLIO[projectType].length - 1}
                    index={i}
                  />
                ))}
              </TabsContent>
            ))}
          </ScrollArea>
        </div>
      </Tabs>
    </section>
  );
}

function PortfolioCard({
  portfolioItem: { description, imageUrl, technologies, title },
  isLastCard = false,
  index
}: {
  portfolioItem: PortfolioItem;
  isLastCard: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        className={cn(
          "ml-4 w-[350px] transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1",
          isLastCard && "mr-4",
        )}
      >
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-sm line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-0 px-0">
          <div className="relative h-[200px] w-full overflow-hidden">
            <Image 
              priority={true} 
              src={imageUrl} 
              alt={title} 
              quality={100}
              className="object-cover"
              fill
            />
          </div>
        </CardContent>
        <CardFooter className="flex-wrap gap-2">
          {technologies.map((technology) => (
            <Badge 
              key={technology}
              className="bg-primary/10 text-primary hover:bg-primary/20"
            >
              {technology}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
