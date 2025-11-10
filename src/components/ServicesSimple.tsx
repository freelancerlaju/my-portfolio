import React, { memo } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { FeaturesSectionWithHoverEffects } from "./ui/feature-section-with-hover-effects";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

const Services = memo(() => {
  return (
    <section
      id="services"
      className="py-10 relative overflow-hidden"
    >
      {/* Background with animated gradient orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle>
          <AnimatedText
            text="Services"
            textClassName="text-2xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400"
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
