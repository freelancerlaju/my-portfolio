import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { EducationCard } from "./ui/EducationCard";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "St. Andrews Institute of Technology and Management, Gurgaon",
    period: "2022 - 2026",
    score: "80%",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Inter Science College, Hazaribagh",
    period: "2019 - 2021",
    score: "88%",
  },
  {
    degree: "Secondary (X)",
    institution: "St. Paul's School, Hazaribagh",
    period: "2017 - 2019",
    score: "85.6%",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>
          <AnimatedText
            text="Education"
            textClassName="text-2xl md:text-4xl font-extrabold text-blue-600"
            underlineClassName="text-red-500"
            underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            underlineDuration={2.0}
          />
        </SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard
              key={edu.degree}
              {...edu}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
