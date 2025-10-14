import React, { memo } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js. Responsive, fast, and user-friendly websites that drive results.",
    icon: <Globe className="w-8 h-8" />,
    color: "blue",
    features: [
      "React & Next.js",
      "Node.js & Express",
      "Database Integration",
      "API Development",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using React Native and Flutter. Native performance with shared codebase for iOS and Android platforms.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "purple",
    features: [
      "React Native",
      "Flutter",
      "iOS & Android",
      "App Store Deployment",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that provide exceptional user experiences. From wireframes to pixel-perfect designs.",
    icon: <Palette className="w-8 h-8" />,
    color: "green",
    features: [
      "Figma & Adobe XD",
      "User Research",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    title: "Full Stack Solutions",
    description:
      "End-to-end development services from concept to deployment. Complete solutions that scale with your business needs.",
    icon: <Code className="w-8 h-8" />,
    color: "orange",
    features: [
      "MERN Stack",
      "Cloud Deployment",
      "DevOps",
      "Maintenance & Support",
    ],
  },
];

// Simple ServiceCard without complex animations for better performance
const ServiceCard = memo(
  ({ service, index }: { service: (typeof services)[0]; index: number }) => {
    const colorClasses = {
      blue: "border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/10",
      purple:
        "border-purple-500/20 hover:border-purple-500/40 hover:shadow-purple-500/10",
      green:
        "border-green-500/20 hover:border-green-500/40 hover:shadow-green-500/10",
      orange:
        "border-orange-500/20 hover:border-orange-500/40 hover:shadow-orange-500/10",
    };

    return (
      <div
        className={`
          group relative overflow-hidden rounded-xl border-2 bg-card/50 backdrop-blur-sm
          transition-all duration-300 ease-out hover:shadow-xl
          ${colorClasses[service.color as keyof typeof colorClasses]}
          w-full h-auto
        `}
      >
        <div className="flex flex-col h-full p-5">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mb-4 mx-auto">
            <div className="text-primary">{service.icon}</div>
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 text-center">
              {service.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center flex-1">
              {service.description}
            </p>

            <div className="space-y-1 mb-4">
              {service.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center text-xs text-muted-foreground"
                >
                  <div className="w-1 h-1 rounded-full bg-primary mr-2 flex-shrink-0"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-border/50">
            <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-300 w-full text-center">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

const Services = memo(() => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Services</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";

export { Services as ServicesSimple };
