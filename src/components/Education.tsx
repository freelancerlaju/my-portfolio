import { SectionTitle } from "./ui/SectionTitle";
import { Timeline } from "./ui/timeline";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Users,
  Lightbulb,
} from "lucide-react";

const educationItems = [
  {
    id: "1",
    title: "BSc in Computer Science & Engineering",
    description:
      "Bangladesh University of Engineering and Technology (BUET), Dhaka",
    timestamp: new Date("2022-01-01"),
    status: "active" as const,
    icon: <GraduationCap className="h-3 w-3" />,
  },
  {
    id: "2",
    title: "Higher Secondary Certificate (HSC)",
    description: "Notre Dame College, Dhaka - GPA 5.00",
    timestamp: new Date("2021-06-01"),
    status: "completed" as const,
    icon: <Award className="h-3 w-3" />,
  },
  {
    id: "3",
    title: "Secondary School Certificate (SSC)",
    description: "Dhaka Residential Model College - GPA 5.00",
    timestamp: new Date("2019-05-01"),
    status: "completed" as const,
    icon: <Award className="h-3 w-3" />,
  },
  {
    id: "4",
    title: "Front-End Development Certification",
    description:
      "Complete Web Development Course - HTML, CSS, JavaScript & React",
    timestamp: new Date("2022-12-01"),
    status: "completed" as const,
    icon: <Code className="h-3 w-3" />,
  },
];

const experienceItems = [
  {
    id: "1",
    title: "Freelance Front-End Developer",
    description:
      "Building responsive web applications with React, TypeScript, and Tailwind CSS",
    timestamp: new Date("2023-08-01"),
    status: "active" as const,
    icon: <Code className="h-3 w-3" />,
  },
  {
    id: "2",
    title: "Junior Front-End Developer",
    description:
      "Developed user interfaces for e-commerce platforms using React and Next.js",
    timestamp: new Date("2023-01-01"),
    status: "completed" as const,
    icon: <Briefcase className="h-3 w-3" />,
  },
  {
    id: "3",
    title: "Web Development Intern",
    description:
      "Collaborated with teams on client projects, implemented responsive designs",
    timestamp: new Date("2022-06-01"),
    status: "completed" as const,
    icon: <Users className="h-3 w-3" />,
  },
  {
    id: "4",
    title: "Open Source Contributor",
    description:
      "Contributing to React and JavaScript open source projects on GitHub",
    timestamp: new Date("2022-01-01"),
    status: "completed" as const,
    icon: <Lightbulb className="h-3 w-3" />,
  },
];

export function Education() {
  return (
    <section
      id="education"
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
              text="Education & Experience"
              textClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              underlineClassName="text-blue-500"
              underlinePath="M 0,10 Q 100,0 200,10 Q 300,20 400,10"
              underlineHoverPath="M 0,10 Q 100,20 200,10 Q 300,0 400,10"
              underlineDuration={2.0}
            />
          </SectionTitle>
          <p className="text-base sm:text-lg md:text-xl text-left md:text-center text-gray-600 dark:text-gray-300 mt-3 md:mt-4 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            My educational journey and professional development in computer
            science and web technologies.
          </p>
        </div>

        {/* Two Column Layout - Education & Experience */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Education Section */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Education
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Academic achievements and qualifications
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                <Timeline items={educationItems} variant="spacious" />
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  Experience
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Professional journey and skill development
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                <Timeline items={experienceItems} variant="spacious" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
