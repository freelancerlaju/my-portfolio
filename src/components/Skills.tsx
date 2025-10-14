import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import { SkillsProgressSection } from "./ui/SkillProgressBar";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#e34f26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572b6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#ffd600",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178c6",
    url: "https://www.typescriptlang.org/",
  },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#",
    url: "https://nextjs.org/",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764abc",
    url: "https://redux.js.org/",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "#007acc",
    url: "https://code.visualstudio.com/",
  },

  { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#000000",
    url: "https://github.com/",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
    url: "https://vercel.com/",
  },
];

const skillLevels = [
  { name: "HTML", percentage: 95, color: "#e34f26" },
  { name: "CSS", percentage: 90, color: "#1572b6" },
  { name: "JavaScript", percentage: 88, color: "#ffd600" },
  { name: "TypeScript", percentage: 85, color: "#3178c6" },
  { name: "React", percentage: 90, color: "#61dafb" },
  { name: "Next.js", percentage: 80, color: "#000000" },
  { name: "TailwindCSS", percentage: 92, color: "#38bdf8" },
  { name: "Redux", percentage: 75, color: "#764abc" },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Left side - Skill Cards Grid */}
            <div className="min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] flex flex-col">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 flex-1">
                {skills.map((tech) => (
                  <SkillCard
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    color={tech.color}
                    url={tech.url}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Skills Progress Bar */}
            <div className="w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[450px]">
              <SkillsProgressSection skills={skillLevels} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
