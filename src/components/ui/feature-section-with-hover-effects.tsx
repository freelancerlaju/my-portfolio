import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
import { useState } from "react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Front-End Development",
      description:
        "I build modern, interactive web applications using React, Next.js, and Tailwind CSS. Clean code, scalable architecture, and maintainable solution.",
      icon: IconCode,
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
      icon: IconPalette,
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
      icon: IconDevices,
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
      icon: IconWindow,
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
      icon: IconBrowserCheck,
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
      icon: IconRocket,
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
      icon: IconApi,
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
      icon: IconHeadset,
      keyFeatures: [
        "Code review & refactoring",
        "Architecture planning",
        "Performance audits",
        "Security best practices",
        "Ongoing technical support",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 relative z-10 py-6 sm:py-8 lg:py-10 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} variants={itemVariants} />
      ))}
    </motion.div>
  );
}

const Feature = ({
  title,
  description,
  icon: Icon,
  index,
  keyFeatures,
  variants,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
  keyFeatures: string[];
  variants: any;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={variants}
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <motion.div
        className="relative h-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
        whileHover={{ y: -10 }}
      >
        {/* Top Gradient Strip */}
        <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />

        {/* Background Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Content */}
        <div className="relative z-10 p-4 sm:p-5 flex flex-col flex-grow">
          {/* Icon Section */}
          <div className="mb-3">
            <motion.div
              className="relative inline-block"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon Container */}
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                <Icon className="w-6 h-6 text-white relative z-10" />
                
                {/* Animated Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur-lg opacity-50"
                  animate={{
                    opacity: isHovered ? 0.8 : 0.5,
                    scale: isHovered ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Floating Number */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white dark:border-gray-800"
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                {index + 1}
              </motion.div>
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 dark:group-hover:from-indigo-400 dark:group-hover:to-purple-400 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
            {description}
          </p>

          {/* Features List */}
          <div className="mt-auto space-y-2">
            {keyFeatures.slice(0, 3).map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: featureIndex * 0.05 }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex-shrink-0 shadow-sm"
                  animate={{
                    scale: isHovered ? [1, 1.5, 1] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    delay: featureIndex * 0.15,
                  }}
                />
                <span className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Accent Line */}
          <motion.div
            className="mt-4 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
          />
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            x: isHovered ? ["-100%", "100%"] : "-100%",
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        />

        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  );
};
