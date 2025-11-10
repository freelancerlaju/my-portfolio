import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, X } from "lucide-react";

import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
} from "react-icons/si";

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: "#00cfff" },
  node: { icon: SiNodedotjs, name: "Node.js", color: "#228b22" },
  firebase: { icon: SiFirebase, name: "Firebase", color: "#fbbf00" },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06b6d4" },
  typescript: { icon: SiTypescript, name: "TypeScript", color: "#1f6feb" },
  next: { icon: SiNextdotjs, name: "Next.js", color: "#" },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: "#10b981" },
  prisma: { icon: SiPrisma, name: "Prisma", color: "#186997" },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: "#6366f1" },
  framer: { icon: SiFramer, name: "Framer Motion", color: "#2563eb" },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: "#" },
  stripe: { icon: SiStripe, name: "Stripe", color: "#5b4df1" },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: "#ff3d00" },
};

// Project categories
export type ProjectCategory =
  | "All"
  | "Web Design"
  | "Landing Page"
  | "SaaS Platform"
  | "Web Application";

// Define projects data with categories
const projects = [
  {
    title: "LaslesVPN",
    description:
      "LaslesVPN is a private virtual network that has unique features and has high security.Provide a network for all your needs with ease and fun using",
    image: "/assets/project1.png",
    link: "https://next-lasles-vpn-landing-page.vercel.app/",
    github: "https://github.com/freelancerlaju/LaslesVPN-Landing-Page",
    category: "Landing Page" as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.firebase,
    ],
  },

  {
    title: "Jadoo",
    description:
      "The Jadoo landing page is a modern, responsive website. Built with React, TypeScript, and Vite, it offers a sleek user interface optimized for performance",
    image: "/assets/project7.png",
    link: "https://jadoo-react-landing-page.vercel.app/",
    github: "https://github.com/freelancerlaju/jadoo-react-landing-page",
    category: "Landing Page" as ProjectCategory,
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.socket,
      techStacks.mongodb,
    ],
  },

  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, blogs, and contact section with responsive design and modern UI/UX styling.",
    image: "/assets/portfolioProject.png",
    link: "https://www.freelancerlaju.vercel.app",
    github: "https://github.com/freelancerlaju/",
    category: "Web Application" as ProjectCategory,
    techStack: [
      techStacks.next,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
    ],
  },

  {
    title: "Haircut",
    description:
      "Lists various offerings, including Haircut, Beard Trim, Mans Shave, Hair Dyeing, Mustache grooming, and Stacking, with prices starting from $15.",
    image: "/assets/project2.png",
    link: "https://salon-landingpage.vercel.app/",
    github: "https://github.com/freelancerlaju/HairCut-Salon-Landing-Page",
    category: "Landing Page" as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.mongodb,
      techStacks.prisma,
    ],
  },

  {
    title: "Good food",
    description:
      "Provides information about the food offerings, emphasizing quality and variety. Highlights popular items with a promotional offer of 50% off",
    image: "/assets/project3.png",
    link: "https://goid-food-website.vercel.app/",
    github: "https://github.com/freelancerlaju/goid-food-website",
    category: "Web Application" as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.appwrite,
      techStacks.framer,
    ],
  },

  {
    title: "Hospital",
    description:
      "The website Mico Hospital is a free, responsive hospital website template designed to help healthcare providers establish a professional online presence.",
    image: "/assets/project4.png",
    link: "https://mico-hospital-webpage.vercel.app/",
    github: "https://github.com/freelancerlaju/mico-hospital-webpage",
    category: "Web Application" as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
      techStacks.appwrite,
    ],
  },

  {
    title: "Kider",
    description:
      "The Kider Website is a free, responsive landing page designed for educational institutions, particularly kindergartens and preschools. it offers early childhood education services.",
    image: "/assets/project5.png",
    link: "https://kider-landing-page.vercel.app/",
    github: "https://github.com/freelancerlaju/kider-landing-page",
    category: "Landing Page" as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.firebase,
      techStacks.framer,
    ],
  },

  {
    title: "JobEntry",
    description:
      "JobEntry is a sleek, responsive job portal template designed to connect employers and job seekers. Hosted on Vercel, it offers a clean, modern layout suitable for startups, recruitment agencies",
    image: "/assets/project6.png",
    link: "https://jobentry-job-portal-website.vercel.app/",
    github: "https://github.com/freelancerlaju/jobentry-job-portal-website",
    category: "SaaS Platform" as ProjectCategory,
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.prisma,
      techStacks.shadcn,
    ],
  },

  {
    title: "Sine MKT",
    description:
      "Sine MKT is a modern, responsive e-commerce website template designed for furniture retailers. it offers user-friendly layout suitable for showcasing a variety of home furnishings.",
    image: "/assets/project8.png",
    link: "https://sine-mkt.vercel.app/",
    github: "https://github.com/freelancerlaju/sine-mkt",
    category: "Web Application" as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.stripe,
    ],
  },
  {
    title: "Sine MKT",
    description:
      "Sine MKT is a modern, responsive e-commerce website template designed for furniture retailers. it offers user-friendly layout suitable for showcasing a variety of home furnishings.",
    image: "/assets/project8.png",
    link: "https://sine-mkt.vercel.app/",
    github: "https://github.com/freelancerlaju/sine-mkt",
    category: "Web Application" as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.stripe,
    ],
  },
  {
    title: "Sine MKT",
    description:
      "Sine MKT is a modern, responsive e-commerce website template designed for furniture retailers. it offers user-friendly layout suitable for showcasing a variety of home furnishings.",
    image: "/assets/project8.png",
    link: "https://sine-mkt.vercel.app/",
    github: "https://github.com/freelancerlaju/sine-mkt",
    category: "Web Application" as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.stripe,
    ],
  },
  {
    title: "Sine MKT",
    description:
      "Sine MKT is a modern, responsive e-commerce website template designed for furniture retailers. it offers user-friendly layout suitable for showcasing a variety of home furnishings.",
    image: "/assets/project8.png",
    link: "https://sine-mkt.vercel.app/",
    github: "https://github.com/freelancerlaju/sine-mkt",
    category: "Web Application" as ProjectCategory,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.stripe,
    ],
  },
];

const categories: ProjectCategory[] = [
  "All",
  "Web Design",
  "Landing Page",
  "SaaS Platform",
  "Web Application",
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-10 relative overflow-hidden min-h-screen"
    >
      {/* Enhanced Grid Background with Animated Orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] dark:opacity-[0.04]" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/15 dark:bg-pink-600/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            <AnimatedText
              text="Projects"
              textClassName="text-2xl md:text-4xl font-extrabold text-blue-600"
              underlineClassName="text-red-500"
              underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
              underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
              underlineDuration={2.0}
            />
          </SectionTitle>
        </motion.div>

        {/* Enhanced Filter Tabs and Search Bar */}
        <div className="max-w-7xl mx-auto mt-16 mb-12">
          {/* Modern Professional Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="relative group">
              {/* Glassmorphism Container */}
              <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-[0_2px_4px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.2)] group-hover:shadow-[0_4px_6px_rgba(0,0,0,0.12)] dark:group-hover:shadow-[0_4px_6px_rgba(0,0,0,0.25)] transition-all duration-300 overflow-hidden">
                <div className="relative flex items-center px-5 py-4 md:px-6 md:py-5">
                  {/* Search Icon with Animation */}
                  <div className="relative flex-shrink-0 mr-4">
                    <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/30 group-hover:border-blue-400/70 dark:group-hover:border-blue-500/50 transition-all duration-300">
                      <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Input Field */}
                  <Input
                    type="text"
                    placeholder="Search projects by name, description, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-400 text-sm md:text-base font-medium placeholder:font-normal"
                  />

                  {/* Clear Button with Animation */}
                  <AnimatePresence>
                    {searchQuery && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSearchQuery("")}
                        className="ml-3 p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-900/30 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 group/clear"
                        aria-label="Clear search"
                      >
                        <X className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover/clear:text-red-600 dark:group-hover/clear:text-red-400 transition-colors duration-300" />
                      </motion.button>
                    )}
                  </AnimatePresence>

                  {/* Search Indicator */}
                  <AnimatePresence>
                    {searchQuery && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="ml-3 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/30"
                      >
                        {filteredProjects.length}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Modern Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full overflow-x-auto mb-6 sm:mb-8 px-1 sm:px-2 scrollbar-hide"
          >
            <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 md:gap-3 min-w-max sm:flex-wrap pb-1">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.03 }}
                >
                  <Button
                    onClick={() => setSelectedCategory(category)}
                    variant={
                      selectedCategory === category ? "default" : "ghost"
                    }
                    className={`
                      px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 relative overflow-hidden group touch-manipulation
                      ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white shadow-lg shadow-indigo-500/40 dark:shadow-indigo-500/30 scale-100 sm:scale-105"
                          : "bg-white/70 dark:bg-gray-800/70 backdrop-blur-md text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 hover:scale-100 sm:hover:scale-105 hover:shadow-md"
                      }
                    `}
                  >
                    {selectedCategory === category && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600"
                        layoutId="activeCategory"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Showing
              </span>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {filteredProjects.length}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {filteredProjects.length === 1 ? "project" : "projects"}
                {selectedCategory !== "All" && (
                  <>
                    {" "}
                    in{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {selectedCategory}
                    </span>
                  </>
                )}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  layout
                  custom={index}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center min-h-[60vh] px-4"
            >
              <div className="max-w-2xl w-full text-center">
                {/* Large "Oops!" Title with Cosmic Effect */}
                <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-7xl md:text-9xl font-bold mb-4 relative"
                >
                  <span
                    className="relative inline-block bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
                        radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
                        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
                        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                        linear-gradient(135deg, #1e3a8a 0%, #581c87 50%, #1e3a8a 100%)
                      `,
                      backgroundSize:
                        "200% 200%, 150% 150%, 180% 180%, 160% 160%, 100% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
                    }}
                  >
                    Oops!
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-wide"
                >
                  NO PROJECTS FOUND
                </motion.h2>

                {/* Descriptive Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed"
                >
                  We couldn't find any projects matching your current filters or
                  search criteria. Please try adjusting your search terms or
                  selecting a different category to explore more projects.
                </motion.p>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    View All Projects
                  </Button>

                  {searchQuery && (
                    <Button
                      onClick={() => setSearchQuery("")}
                      variant="outline"
                      className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                    >
                      Clear Search
                    </Button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
