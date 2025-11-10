import { SectionTitle } from "./ui/SectionTitle";
import { CircularCertifications } from "./ui/circular-certifications";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Nov 2024",
    link: "https://simpli-web.app.link/e/MN2Qvlr4AXb",
    image: "/assets/generative-ai.png",
  },
  {
    title: "HTML",
    issuer: "SoloLearn",
    date: "Jun 2022",
    link: "https://www.sololearn.com/certificates/CT-WPTQIRNJ",
    image: "/assets/html-certificate.jpg",
  },
  {
    title: "Web Development",
    issuer: "Udemy",
    date: "Jun 2023",
    link: "https://www.udemy.com/certificate/UC-0ea34366-7640-4a6b-9a3a-280782bbac61/",
    image: "/assets/web-development.jpg",
  },
  {
    title: "Tailwind CSS",
    issuer: "Udemy",
    date: "Jun 2023",
    link: "https://www.udemy.com/certificate/UC-0cbea771-83bd-44a2-aeb4-469faa175d56/",
    image: "/assets/tailwind-css.jpg",
  },
  {
    title: "JavaScript",
    issuer: "Udemy",
    date: "Jun 2023",
    link: "https://www.udemy.com/certificate/UC-449746e9-97af-435a-9476-01396cbc86d4/",
    image: "/assets/javascript-certificate.jpg",
  },
  {
    title: "HTML & CSS, Zero-to-Hero",
    issuer: "Udemy",
    date: "Jun 2023",
    link: "https://www.udemy.com/certificate/UC-f292b345-8ea4-4ca1-85e6-3728c8f97b22/",
    image: "/assets/html-css-zero-to-advance.jpg",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-10 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            <AnimatedText
              text="Certifications"
              textClassName="text-2xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400"
              underlineClassName="text-red-500"
              underlinePath="M 0,10 Q 100,0 200,10 Q 300,20 400,10"
              underlineHoverPath="M 0,10 Q 100,20 200,10 Q 300,0 400,10"
              underlineDuration={2.0}
            />
          </SectionTitle>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed">
            Industry-validated expertise in modern web technologies and AI
            through Microsoft, LinkedIn Learning, and Udemy certifications.
          </p>
        </motion.div>

        {/* Circular Certifications Carousel */}
        <div className="flex justify-center">
          <CircularCertifications
            certifications={certifications}
            autoplay={true}
            colors={{
              title: "var(--color-title)",
              issuer: "var(--color-issuer)",
              date: "var(--color-date)",
              arrowBackground: "var(--color-arrow-bg)",
              arrowForeground: "var(--color-arrow-fg)",
              arrowHoverBackground: "var(--color-arrow-hover)",
            }}
            fontSizes={{
              title: "2rem",
              issuer: "1.125rem",
              date: "1rem",
            }}
          />
        </div>
      </div>
    </section>
  );
}
