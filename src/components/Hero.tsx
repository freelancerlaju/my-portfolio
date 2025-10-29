import { motion } from "framer-motion";
import { TypeWriter } from "./ui/TypeWriter";
import { SocialLinks } from "./hero/SocialLinks";
// import { ContactInfo } from "./hero/ContactInfo";
import { ActionButtons } from "./hero/ActionButtons";
import OrbitingSkills from "./ui/orbiting-skills";

// import ScrollDown from "./ui/ScrollDown";

export function Hero() {
  const roles = [
    "Web Developer",
    "Self Learner",
    "Problem Solver",
    "Web Designer",
    "Tech Innovator",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-x-hidden"
    >
      {/* Animated background with particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-0 md:px-12  pb-4 md:pt-20 md:pb-8 relative z-10 h-full w-full max-w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center h-full px-4 md:px-0">
          {/* Left Column - Content */}
          <motion.div
            className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4 md:space-y-6 order-2 md:order-1 w-full md:pr-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="space-y-2 md:space-y-4 w-full"
              variants={itemVariants}
            >
              <motion.div
                className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="inline-block origin-[70%_70%] animate-wave">
                  👋
                </span>{" "}
                Hey! Programmer
              </motion.div>

              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-gray-600 dark:text-gray-300 font-[Poppins] leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Laju
                </span>
              </h1>

              <div className="text-3xl py-2 sm:text-2xl md:text-3xl lg:text-[3rem] font-bold text-gray-600 dark:text-gray-300 font-[Poppins]">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-[Roboto Condensed] font-light">
                I'm a front-end developer from bangladesh. I love learning how
                to build fast, accessible and scalable web applications. I
                always keep an eye on the JavaScript ecosystem for what comes
                next and I'm excited to continue.
              </p>
            </motion.div>

            {/* <ContactInfo /> */}
            <motion.div variants={itemVariants}>
              <ActionButtons />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Column - Orbiting Skills */}
          <motion.div
            className="relative order-1 md:order-2 flex items-center justify-center w-full h-auto my-4 md:my-0 mt-14 md:mt-0 md:w-full md:h-full md:min-h-[400px] overflow-hidden"
            variants={rightSlideVariants}
            initial="hidden"
            animate="visible"
          >
            <OrbitingSkills />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div> */}

        {/* <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2">
          <ScrollDown />
        </div> */}
      </div>
    </section>
  );
}
