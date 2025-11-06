import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

// Counter component for animated statistics
function Counter({
  value,
  suffix,
  duration = 2000,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCounter = () => {
      const start = 0;
      const end = value;
      const easing = (t: number) => t * (2 - t); // Ease-out function
      const startTime = Date.now();

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);
        const current = Math.floor(start + (end - start) * easedProgress);

        setCount(current);

        if (progress >= 1) {
          setCount(end);
          clearInterval(timer);
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounter();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, isVisible]);

  return (
    <div ref={counterRef} className="mb-2">
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out">
        {count}
      </span>
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 dark:text-orange-400 transition-colors duration-300 ease-in-out">
        {suffix}
      </span>
    </div>
  );
}

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "Front-end developer focused on building clean, responsive UI.",
      "Passionate about design, performance, and user experience.",
    ],
    gradient: "from-blue-500 via-blue-600 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Develop modern web apps with React.js and Next.js.",
      "Write clean, efficient, and scalable front-end code.",
    ],
    gradient: "from-purple-500 via-purple-600 to-pink-600",
    glowColor: "rgba(168, 85, 247, 0.5)",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Create seamless user experiences that scale.",
      "Grow as a front-end expert and contribute to open-source.",
    ],
    gradient: "from-green-500 via-emerald-600 to-teal-600",
    glowColor: "rgba(34, 197, 94, 0.5)",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Good design is invisible.",
      "Code should be simple, readable, and purposeful.",
    ],
    gradient: "from-orange-500 via-amber-600 to-yellow-600",
    glowColor: "rgba(249, 115, 22, 0.5)",
  },
];

const stats = [
  {
    value: 120,
    suffix: "+",
    label: "Completed Projects",
  },
  {
    value: 95,
    suffix: "%",
    label: "Client satisfaction",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of experience",
  },
];

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-10 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle>
          <AnimatedText
            text="About Me"
            textClassName="text-2xl md:text-4xl font-extrabold text-blue-600"
            underlineClassName="text-red-500"
            underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            underlineDuration={2.0}
          />
        </SectionTitle>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column - About Cards Grid */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 h-full">
                {aboutSections.map(
                  ({ icon: Icon, title, description, gradient, glowColor }) => (
                    <motion.div
                      key={title}
                      className="relative group"
                      variants={cardVariants}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Animated Glow Backdrop */}
                      <div
                        className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${glowColor}, transparent)`,
                        }}
                      />

                      {/* Glassmorphism Card */}
                      <div className="relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-gray-200/50 dark:border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out h-full overflow-hidden">
                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${glowColor}, transparent)`,
                          }}
                        />

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Icon Header */}
                          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-2 sm:mb-3 md:mb-4">
                            <div
                              className={`relative p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-md sm:rounded-lg md:rounded-xl bg-gradient-to-br ${gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                            >
                              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white relative z-10" />
                              {/* Icon glow */}
                              <div className="absolute inset-0 bg-white/20 rounded-md sm:rounded-lg md:rounded-xl blur-md" />
                            </div>
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600">
                              {title}
                            </h3>
                          </div>

                          {/* Description List */}
                          <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                            {description.map((point, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start gap-1 sm:gap-1.5 md:gap-2 text-[11px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 ease-in-out"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: index * 0.1,
                                  duration: 0.4,
                                }}
                              >
                                <span
                                  className="mt-1 sm:mt-1.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0"
                                  style={{
                                    background: `linear-gradient(135deg, ${glowColor.replace(
                                      "0.5",
                                      "1"
                                    )}, ${glowColor})`,
                                  }}
                                />
                                <span>{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* Right Column - About Me Content */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 border border-gray-200/50 dark:border-gray-700/30 shadow-2xl h-full flex flex-col transition-all duration-300 ease-in-out">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full blur-2xl" />

                <div className="relative z-10">
                  {/* Heading */}
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5 md:mb-6 transition-colors duration-300 ease-in-out"
                    variants={itemVariants}
                  >
                    About me
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 sm:mb-7 md:mb-8 transition-colors duration-300 ease-in-out"
                    variants={itemVariants}
                  >
                    Believe it or not, I didn't start as a developer. My first
                    creative outlet was photography—capturing moments and
                    telling stories through images. But something clicked when I
                    realized I enjoyed the entire process of creating something
                    from nothing. That's what led me to front-end development.
                    Now, I get to combine my eye for design with code to build
                    websites and apps that people actually enjoy using. Every
                    project is a chance to learn something new, and I love
                    turning great ideas into reality on the web.
                  </motion.p>

                  {/* Statistics */}
                  <motion.div
                    className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-auto"
                    variants={itemVariants}
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                      >
                        <Counter
                          value={stat.value}
                          suffix={stat.suffix}
                          duration={2000}
                        />
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight transition-colors duration-300 ease-in-out">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
