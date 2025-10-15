import React, { memo } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { FeaturesSectionWithHoverEffects } from "./ui/feature-section-with-hover-effects";

const Services = memo(() => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Services</SectionTitle>
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
});

Services.displayName = "Services";

export { Services as ServicesSimple };
