import { cn } from "@/lib/utils";
import {
  IconCode,
  IconPalette,
  IconDevices,
  IconWindow,
  IconBrowserCheck,
  IconRocket,
  IconApi,
  IconHeadset,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Front-End Development",
      description:
        "I build modern, interactive web applications using React, Next.js, and Tailwind CSS. Clean code, scalable architecture, and maintainable solution.",
      icon: <IconCode />,
      keyFeatures: [
        "React & Next.js applications",
        "TypeScript for type safety",
        "Modern JavaScript (ES6+)",
        "Reusable component libraries",
        "Redux, Zustand, Context API",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "I create intuitive interfaces that users actually enjoy. From wireframes to final designs, I focus on making things simple and functional.",
      icon: <IconPalette />,
      keyFeatures: [
        "Interface design in Figma",
        "User research and testing",
        "Wireframes and prototypes",
        "Design system development",
        "WCAG accessibility standards",
      ],
    },
    {
      title: "Responsive Design",
      description:
        "Your site will look great on any device. I build mobile-first, ensuring everything works smoothly from phones to desktops.",
      icon: <IconDevices />,
      keyFeatures: [
        "Mobile-first development",
        "Flexible grid layouts",
        "Fluid typography",
        "Touch-optimized interactions",
        "Real device testing",
      ],
    },
    {
      title: "Single Page Application (SPA)",
      description:
        "Fast, app-like websites with smooth page transitions. No page reloads, just instant navigation and better user experience.",
      icon: <IconWindow />,
      keyFeatures: [
        "React Router implementation",
        "Lazy loading & code splitting",
        "Client-side state management",
        "Service workers for offline use",
        "Progressive Web App (PWA)",
      ],
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "I test across Chrome, Firefox, Safari, and Edge to ensure your site works everywhere. No surprises for your users.",
      icon: <IconBrowserCheck />,
      keyFeatures: [
        "Multi-browser testing",
        "Autoprefixer for CSS",
        "Polyfills for older browsers",
        "Feature detection fallbacks",
        "Progressive enhancement",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "Speed matters. I optimize load times, reduce bundle sizes, and make sure your site scores well on Google's Core Web Vitals.",
      icon: <IconRocket />,
      keyFeatures: [
        "Code splitting & lazy loading",
        "Image compression & WebP",
        "Smart caching strategies",
        "Minimal bundle sizes",
        "Core Web Vitals tuning",
      ],
    },
    {
      title: "API Integration",
      description:
        "I connect your frontend to any backend or third-party API. REST, GraphQL, or WebSockets—handled with proper error handling and security.",
      icon: <IconApi />,
      keyFeatures: [
        "RESTful API integration",
        "GraphQL queries & mutations",
        "JWT & OAuth authentication",
        "Error handling & retries",
        "WebSocket connections",
      ],
    },
    {
      title: "Consulting & Support",
      description:
        "Need help with an existing project? I review code, identify bottlenecks, and provide practical solutions to improve your application.",
      icon: <IconHeadset />,
      keyFeatures: [
        "Code review & refactoring",
        "Architecture planning",
        "Performance audits",
        "Security best practices",
        "Ongoing technical support",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  keyFeatures,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  keyFeatures: string[];
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 mb-4">
        {description}
      </p>

      {/* Key Features Section */}
      <div className="relative z-10 px-10">
        <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-wide">
          Key Features
        </h4>
        <ul className="space-y-1">
          {keyFeatures.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="text-xs text-neutral-600 dark:text-neutral-300 flex items-center"
            >
              <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
