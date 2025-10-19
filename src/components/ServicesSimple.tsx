import React, { memo } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { FeaturesSectionWithHoverEffects } from "./ui/feature-section-with-hover-effects";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

const Services = memo(() => {
  return (
    <section
      id="services"
      className="py-10 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <AnimatedText
            text="Services"
            textClassName="text-2xl md:text-4xl font-extrabold text-blue-600"
            underlineClassName="text-red-500"
            underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            underlineDuration={2.0}
          />
        </SectionTitle>
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
});

Services.displayName = "Services";

export { Services as ServicesSimple };
