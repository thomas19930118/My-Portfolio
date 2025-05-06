"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import H1 from "@/components/typography/h1";
import H3 from "@/components/typography/h3";
import { cn } from "@/lib/utils";
import { NAME, PROFESSION1, PROFESSION2, YEARS_OF_EXPERIENCE } from "@/data/personal";

export default function HeroDescription() {
  const [currentProfession, setCurrentProfession] = useState(PROFESSION1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession(prev => prev === PROFESSION1 ? PROFESSION2 : PROFESSION1);
    }, 4000); // Increased duration to 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
      className="text-center w-full"
    >
      <H1 className="mb-5 mt-5">
        Hello! I&apos;m <span className="text-primary">{NAME}.</span>
      </H1>

      <div className="mb-8 max-w-4xl mx-auto text-center">
        <div className="h-[2em] relative mb-6"> {/* Increased height */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProfession}
              initial={{ y: 40, opacity: 0, scale: 0.9 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.7,
                  ease: [0.6, -0.05, 0.01, 0.99] // Custom easing
                }
              }}
              exit={{ 
                y: -40, 
                opacity: 0, 
                scale: 0.9,
                transition: { 
                  duration: 0.5,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              className="absolute w-full"
            >
              <span className={cn(
                "text-2xl md:text-3xl font-bold",
                currentProfession === PROFESSION2 ? "text-blue-500" : "text-primary"
              )}>
                {currentProfession}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <H3 className="text-muted-foreground">
          <span className="block">
            More than 
            <Highlight className="text-nowrap">
              {" "}{YEARS_OF_EXPERIENCE} years
            </Highlight>
            ' expertise in developing end-to-end full-stack products powered by advanced AI. 
            Solutions are crafted to be innovative, user-centric, and scalable, 
            effectively bridging technology and real-world needs.
          </span>
        </H3>
      </div>
    </motion.div>
  );
}

function Highlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("text-foreground", className)}>{children}</span>;
}
