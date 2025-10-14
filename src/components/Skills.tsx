import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import { IconCloud } from "./ui/interactive-icon-cloud";
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
const iconSlugs = [
  // Core Web Technologies
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "tailwindcss",
  "redux",

  // Backend & Databases
  "nodedotjs",
  "express",
  "python",
  "mongodb",
  "postgresql",
  "firebase",
  "prisma",
  "graphql",

  // Cloud & DevOps
  "docker",
  "kubernetes",
  "amazonaws",
  "vercel",
  "netlify",
  "githubactions",

  // Development Tools
  "microsoftvisualstudiocode",
  "git",
  "github",
  "postman",
  "vite",
  "webpack",

  // Testing & Quality
  "jest",
  "cypress",
  "eslint",
  "prettier",

  // Design & Mobile
  "figma",
  "flutter",
  "android",
  "ios",

  // Package Managers & OS
  "npm",
  "yarn",
  "linux",
  "microsoft",
  "macos",

  // Additional Popular Tools
  "slack",
  "notion",
  "stripe",
  "shopify",
  "wordpress",
  "unity",
  "tensorflow",
  "ethereum",
];

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

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-7xl mx-auto mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Interactive Icon Cloud */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative flex size-full max-w-md items-center justify-center overflow-hidden rounded-lg bg-background px-8 pb-8 pt-4 shadow-lg">
                <IconCloud iconSlugs={iconSlugs} />
              </div>
            </div>

            {/* Right side - Skill Cards Grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
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
        </div>
      </div>
    </section>
  );
}
