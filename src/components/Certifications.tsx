import { SectionTitle } from "./ui/SectionTitle";
import { CircularCertifications } from "./ui/circular-certifications";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

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
      className="py-8 md:py-10 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-900/10" />
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-blue-200/10 rounded-full blur-3xl dark:bg-blue-800/10" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-purple-200/10 rounded-full blur-3xl dark:bg-purple-800/10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <SectionTitle>
            <AnimatedText
              text="Certifications"
              textClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              underlineClassName="text-blue-500"
              underlinePath="M 0,10 Q 100,0 200,10 Q 300,20 400,10"
              underlineHoverPath="M 0,10 Q 100,20 200,10 Q 300,0 400,10"
              underlineDuration={2.0}
            />
          </SectionTitle>
          <p className="text-base sm:text-lg md:text-xl text-left md:text-center text-gray-600 dark:text-gray-300 mt-3 md:mt-4 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            Industry-validated expertise in modern web technologies and AI
            through Microsoft, LinkedIn Learning, and Udemy certifications.
          </p>
        </div>

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
