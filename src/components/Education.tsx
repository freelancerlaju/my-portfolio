import { SectionTitle } from "./ui/SectionTitle";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Users,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const educationItems = [
  {
    id: "1",
    title: "Bachelor of Science in Computer Science & Engineering",
    description:
      "Currently studying at BUET, one of the top engineering universities in Bangladesh. Learning how to build software, solve complex problems, and create amazing web applications. Gaining real-world skills in programming, databases, and modern web technologies that help me build better digital solutions.",
    timestamp: new Date("2022-01-01"),
    status: "active" as const,
    icon: GraduationCap,
    gradient: "from-indigo-500 to-purple-600",
    color: "indigo",
  },
  {
    id: "2",
    title: "Higher Secondary Certificate (HSC) - Science",
    description: "Graduated with perfect grades (GPA 5.00) from Notre Dame College in Dhaka. Focused on science subjects like Physics, Chemistry, and Math which taught me how to think logically and solve problems step by step. This foundation helps me approach coding challenges with confidence and precision.",
    timestamp: new Date("2021-06-01"),
    status: "completed" as const,
    icon: Award,
    gradient: "from-indigo-500 to-purple-600",
    color: "indigo",
  },
  {
    id: "3",
    title: "Secondary School Certificate (SSC) - Science",
    description: "Finished high school with perfect grades (GPA 5.00) from Dhaka Residential Model College. Built a strong foundation in math and science that sparked my interest in technology. These early achievements showed me the value of hard work and attention to detail in everything I do.",
    timestamp: new Date("2019-05-01"),
    status: "completed" as const,
    icon: Award,
    gradient: "from-indigo-500 to-purple-600",
    color: "indigo",
  },
];

const experienceItems = [
  {
    id: "1",
    title: "Freelance Front-End Developer",
    description:
      "Working independently to help businesses bring their ideas to life through beautiful, fast websites. I use modern tools like React and TypeScript to create user-friendly interfaces that people actually enjoy using. Every project teaches me something new, and I love turning complex requirements into simple, elegant solutions.",
    timestamp: new Date("2023-08-01"),
    status: "active" as const,
    icon: Code,
    gradient: "from-indigo-500 to-purple-600",
    color: "indigo",
  },
  {
    id: "2",
    title: "Junior Front-End Developer",
    description:
      "Built and improved websites for online stores using React and Next.js. Worked closely with designers and other developers to make sure everything looked great and worked smoothly. Learned how to write clean code, fix bugs quickly, and make websites load faster for better user experience.",
    timestamp: new Date("2023-01-01"),
    status: "completed" as const,
    icon: Briefcase,
    gradient: "from-indigo-500 to-purple-600",
    color: "indigo",
  },
  {
    id: "3",
    title: "Web Development Intern",
    description:
      "Got my first taste of real-world web development by working on actual client projects. Learned the basics of building responsive websites and how professional developers work together as a team. This experience showed me that coding is not just about writing code, but about solving real problems for real people.",
    timestamp: new Date("2022-06-01"),
    status: "completed" as const,
    icon: Users,
    gradient: "from-indigo-500 to-purple-600",
    color: "indigo",
  },
];

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

interface TimelineCardProps {
  item: typeof educationItems[0];
  index: number;
  isLast: boolean;
}

const TimelineCard = ({ item, index, isLast }: TimelineCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = item.icon;

  // Check if description is long enough to need "Show More"
  const descriptionLength = item.description.length;
  const needsShowMore = descriptionLength > 150; // Approximate threshold for 3 lines

  return (
    <motion.div
      className="relative group mb-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline Container */}
      <div className="relative flex items-start">
        {/* Timeline Line - Left Side */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center z-0">
          {/* Timeline Dot */}
          <motion.div
            className={`relative w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-2 shadow-lg flex items-center justify-center z-10 transition-colors duration-300 ${
              isHovered 
                ? 'border-indigo-500 dark:border-indigo-400' 
                : 'border-gray-200 dark:border-gray-700'
            }`}
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Inner Gradient Circle */}
            <motion.div
              className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-4 h-4 text-white" />
            </motion.div>

            {/* Active Pulse Ring */}
            {item.status === "active" && (
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient}`}
                animate={{
                  scale: [1, 1.8, 1.8],
                  opacity: [0.6, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}
          </motion.div>

          {/* Vertical Timeline Line */}
          {!isLast && (
            <motion.div
              className="relative mt-2"
              initial={{ height: 0 }}
              whileInView={{ height: "auto" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
            >
              <div className={`w-1 h-full bg-gradient-to-b ${item.gradient} opacity-20 rounded-full`} style={{ minHeight: "140px" }} />
              
              {/* Animated Glow Line */}
              <motion.div
                className={`absolute top-0 left-0 w-1 bg-gradient-to-b ${item.gradient} opacity-60 rounded-full`}
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.6, duration: 1 }}
                style={{ minHeight: "140px" }}
              />
            </motion.div>
          )}
        </div>

        {/* Connecting Line from Timeline to Card */}
        <div className="absolute left-6 top-6 h-0.5 w-10 z-0">
          <motion.div
            className={`h-full bg-gradient-to-r ${item.gradient} opacity-60`}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
          />
        </div>

        {/* Card - Right Side */}
        <motion.div
          className="ml-16 flex-1 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative h-full min-h-[220px] flex flex-col"
          whileHover={{ x: 8 }}
        >
          {/* Left Border Accent */}
          <motion.div
            className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.gradient} rounded-l-xl`}
            animate={{
              width: isHovered ? 3 : 2,
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Gradient Background on Hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col flex-grow">
            {/* Header */}
            <div className="mb-3">
              {/* Date and Status Row */}
              <div className="flex items-center justify-between mb-2">
                {/* Date */}
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold shadow-md`}>
                  <Calendar className="w-3 h-3" />
                  {formatDate(item.timestamp)}
                </div>

                {/* Status Badge */}
                <motion.div
                  animate={{
                    scale: isHovered ? [1, 1.15, 1] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                >
                  {item.status === "active" ? (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                        Active
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                      <CheckCircle2 className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                        Completed
                      </span>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <div className="mb-3 flex-grow">
              <p className={`text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                {item.description}
              </p>
              
              {/* Show More/Less Button */}
              {needsShowMore && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`mt-2 flex items-center gap-1 text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} hover:opacity-80 transition-opacity`}
                >
                  {isExpanded ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="w-3 h-3" />
                    </>
                  ) : (
                    <>
                      <span>Show More</span>
                      <ChevronDown className="w-3 h-3" />
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200/50 dark:border-gray-700/50 mt-auto">
              <div className={`h-0.5 w-16 bg-gradient-to-r ${item.gradient} rounded-full shadow-sm`} />
              
              {/* Gradient Line */}
              <motion.div
                className={`h-0.5 w-12 bg-gradient-to-r ${item.gradient} rounded-full`}
                animate={{
                  width: isHovered ? [48, 60, 48] : 48,
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
            animate={{
              x: isHovered ? ["-100%", "100%"] : "-100%",
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export function Education() {
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

  return (
    <section
      id="education"
      className="py-10 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            <AnimatedText
              text="Education & Experience"
              textClassName="text-2xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400"
              underlineClassName="text-red-500"
              underlinePath="M 0,10 Q 100,0 200,10 Q 300,20 400,10"
              underlineHoverPath="M 0,10 Q 100,20 200,10 Q 300,0 400,10"
              underlineDuration={2.0}
            />
          </SectionTitle>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed">
            My educational journey and professional development in computer
            science and web technologies.
          </p>
        </motion.div>

        {/* Two Column Layout with Timeline */}
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Education Section */}
            <motion.div variants={containerVariants}>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
                  Education
                </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Academic achievements
                </p>
              </div>
                </div>
              </motion.div>
              <div>
                {educationItems.map((item, index) => (
                  <TimelineCard
                    key={item.id}
                    item={item}
                    index={index}
                    isLast={index === educationItems.length - 1}
                  />
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={containerVariants}>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
                  Experience
                </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Professional journey
                </p>
              </div>
                </div>
              </motion.div>
              <div>
                {experienceItems.map((item, index) => (
                  <TimelineCard
                    key={item.id}
                    item={item}
                    index={index}
                    isLast={index === experienceItems.length - 1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
