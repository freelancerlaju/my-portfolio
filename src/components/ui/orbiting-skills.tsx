"use client";
import React, { useEffect, useState, memo } from "react";

// --- Type Definitions ---
type IconType =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "redux"
  | "tailwind"
  | "typescript"
  | "nextjs"
  | "git"
  | "github"
  | "vscode"
  | "figma";

type GlowColor = "cyan" | "purple" | "green";

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<
  IconType,
  { component: () => React.JSX.Element; color: string }
> = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
          fill="#E34F26"
        />
      </svg>
    ),
    color: "#E34F26",
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z"
          fill="#1572B6"
        />
      </svg>
    ),
    color: "#1572B6",
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E" />
        <path
          d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
          fill="#323330"
        />
      </svg>
    ),
    color: "#F7DF1E",
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
    color: "#61DAFB",
  },
  redux: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061c-.923.047-1.66.84-1.614 1.801.047.485.236.9.517 1.195-1.096 2.145-2.77 3.715-5.355 4.975-1.757.855-3.561 1.17-5.318.947-1.473-.195-2.627-.797-3.374-1.801-.997-1.33-1.097-2.798-.235-4.27.612-1.05 1.566-1.801 2.192-2.191-.095-.281-.236-.797-.33-1.172-4.766 3.436-4.294 8.09-2.864 10.283 1.048 1.647 3.186 2.66 5.588 2.66.614 0 1.228-.047 1.843-.188 4.388-.89 7.702-3.623 9.514-7.835zm5.39-3.62c-2.099-2.473-5.184-3.857-8.697-3.857h-.425c-.236-.514-.798-.856-1.425-.856h-.061c-.923.047-1.66.84-1.614 1.801.047.915.797 1.648 1.709 1.648h.061c.661-.047 1.191-.42 1.379-.99h.472c2.098 0 4.102.607 5.963 1.801 1.425.9 2.45 2.098 3.045 3.529.517 1.238.47 2.427-.142 3.434-.894 1.473-2.38 2.286-4.246 2.286-1.238 0-2.427-.376-3.043-.658-.33.283-.895.753-1.286 1.027 1.238.564 2.521.939 3.756.939 2.8 0 4.86-1.555 5.684-3.11.895-1.754.801-4.77-1.66-7.612zM6.46 17.348c.047.914.797 1.648 1.71 1.648h.06c.923-.047 1.66-.84 1.614-1.801-.047-.914-.796-1.648-1.709-1.648h-.061c-.047 0-.142 0-.189.047-1.048-1.754-1.473-3.656-1.331-5.697.095-1.567.566-2.942 1.425-4.102.707-1.006 2.05-1.507 2.994-1.554 2.627-.062 3.734 3.246 3.828 4.582.33.094.942.33 1.379.518-.33-4.37-2.897-6.658-5.64-6.658-2.475 0-4.767 1.801-5.827 4.441-1.378 3.434-.893 6.753.754 9.372-.236.235-.377.658-.33 1.05z"
          fill="#764ABC"
        />
      </svg>
    ),
    color: "#764ABC",
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          fill="#06B6D4"
        />
      </svg>
    ),
    color: "#06B6D4",
  },
  typescript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#3178C6" rx="2" />
        <path
          d="M13.5 16.5v3.25c.42.26.91.47 1.47.61.56.15 1.15.22 1.78.22.63 0 1.22-.07 1.77-.22s1.03-.36 1.44-.65c.41-.28.73-.64.96-1.07.23-.43.35-.93.35-1.5 0-.47-.09-.88-.27-1.23-.18-.35-.43-.66-.74-.91-.31-.26-.67-.48-1.08-.67-.4-.19-.83-.36-1.28-.51-.34-.12-.64-.23-.89-.35-.25-.11-.46-.24-.63-.37-.17-.14-.3-.29-.38-.45-.09-.16-.13-.35-.13-.56 0-.23.05-.44.15-.62.1-.18.24-.34.42-.47.18-.13.39-.23.64-.3.25-.07.52-.11.82-.11.22 0 .45.02.68.07.23.04.46.11.68.19.22.09.43.19.63.31.2.12.38.26.54.41l.95-1.49c-.38-.29-.79-.53-1.24-.71-.45-.19-.91-.33-1.39-.43-.48-.1-.96-.15-1.44-.15-.64 0-1.23.08-1.77.25-.54.17-1 .41-1.38.72-.38.31-.68.69-.89 1.13-.21.44-.31.94-.31 1.49 0 .53.09.98.28 1.37.19.39.44.72.76 1 .32.28.69.52 1.1.72.42.2.85.38 1.3.54.34.12.65.24.91.36.27.12.49.25.68.39.18.14.32.3.42.48.09.18.14.38.14.61 0 .25-.05.47-.16.67-.11.2-.26.37-.45.51-.19.14-.42.25-.68.33-.27.08-.56.12-.88.12-.38 0-.75-.06-1.11-.17-.36-.12-.69-.28-.99-.49v.02zM6.25 9.5h3.13v9.25h1.87V9.5h3.13V7.75H6.25V9.5z"
          fill="white"
        />
      </svg>
    ),
    color: "#3178C6",
  },
  nextjs: {
    component: () => (
      <svg viewBox="0 0 180 180" fill="none" className="w-full h-full">
        <mask
          id="mask0_408_139"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_408_139)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="url(#paint0_linear_408_139)"
          />
          <rect
            x="115"
            y="54"
            width="12"
            height="72"
            fill="url(#paint1_linear_408_139)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_408_139"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_408_139"
            x1="121"
            y1="54"
            x2="120.799"
            y2="106.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color: "#000000",
  },
  git: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
          fill="#F05032"
        />
      </svg>
    ),
    color: "#F05032",
  },
  github: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          fill="#181717"
        />
      </svg>
    ),
    color: "#181717",
  },
  vscode: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M17.99.5l-5.524 5.52-4.482-3.48L4.5 3.91v16.18l3.484 1.37 4.482-3.48 5.524 5.52L22 22.09V1.91L17.99.5zm.01 4.75v13.5L13.5 14l4.5-4.75zm-6.485 6.75L8.031 15l-2.03-1.575v-2.85L8.031 9l3.484 3z"
          fill="#007ACC"
        />
      </svg>
    ),
    color: "#007ACC",
  },
  figma: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
          fill="#0ACF83"
        />
        <path
          d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
          fill="#A259FF"
        />
        <path
          d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
          fill="#F24E1E"
        />
        <path
          d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
          fill="#FF7262"
        />
        <path
          d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
          fill="#1ABCFE"
        />
      </svg>
    ),
    color: "#F24E1E",
  },
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = "SkillIcon";

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit (Cyan) - 3 icons
  {
    id: "html",
    orbitRadius: 140,
    size: 50,
    speed: 1,
    iconType: "html",
    phaseShift: 0,
    glowColor: "cyan",
    label: "HTML5",
  },
  {
    id: "css",
    orbitRadius: 140,
    size: 55,
    speed: 1,
    iconType: "css",
    phaseShift: (2 * Math.PI) / 3,
    glowColor: "cyan",
    label: "CSS3",
  },
  {
    id: "javascript",
    orbitRadius: 140,
    size: 50,
    speed: 1,
    iconType: "javascript",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "cyan",
    label: "JavaScript",
  },
  // Outer Orbit (Purple) - 8 icons
  {
    id: "react",
    orbitRadius: 240,
    size: 55,
    speed: -0.6,
    iconType: "react",
    phaseShift: 0,
    glowColor: "purple",
    label: "React",
  },
  {
    id: "typescript",
    orbitRadius: 240,
    size: 52,
    speed: -0.6,
    iconType: "typescript",
    phaseShift: (2 * Math.PI) / 8,
    glowColor: "purple",
    label: "TypeScript",
  },
  {
    id: "nextjs",
    orbitRadius: 240,
    size: 50,
    speed: -0.6,
    iconType: "nextjs",
    phaseShift: (4 * Math.PI) / 8,
    glowColor: "purple",
    label: "Next.js",
  },
  {
    id: "tailwind",
    orbitRadius: 240,
    size: 48,
    speed: -0.6,
    iconType: "tailwind",
    phaseShift: (6 * Math.PI) / 8,
    glowColor: "purple",
    label: "Tailwind CSS",
  },
  {
    id: "redux",
    orbitRadius: 240,
    size: 52,
    speed: -0.6,
    iconType: "redux",
    phaseShift: (8 * Math.PI) / 8,
    glowColor: "purple",
    label: "Redux",
  },
  {
    id: "git",
    orbitRadius: 240,
    size: 50,
    speed: -0.6,
    iconType: "git",
    phaseShift: (10 * Math.PI) / 8,
    glowColor: "purple",
    label: "Git",
  },
  {
    id: "github",
    orbitRadius: 240,
    size: 48,
    speed: -0.6,
    iconType: "github",
    phaseShift: (12 * Math.PI) / 8,
    glowColor: "purple",
    label: "GitHub",
  },
  {
    id: "vscode",
    orbitRadius: 240,
    size: 50,
    speed: -0.6,
    iconType: "vscode",
    phaseShift: (14 * Math.PI) / 8,
    glowColor: "purple",
    label: "VS Code",
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = "OrbitingSkill";

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(
  ({
    radius,
    glowColor = "cyan",
    animationDelay = 0,
  }: GlowingOrbitPathProps) => {
    const glowColors = {
      cyan: {
        primary: "rgba(6, 182, 212, 0.4)",
        secondary: "rgba(6, 182, 212, 0.2)",
        border: "rgba(6, 182, 212, 0.3)",
      },
      purple: {
        primary: "rgba(147, 51, 234, 0.4)",
        secondary: "rgba(147, 51, 234, 0.2)",
        border: "rgba(147, 51, 234, 0.3)",
      },
      green: {
        primary: "rgba(34, 197, 94, 0.4)",
        secondary: "rgba(34, 197, 94, 0.2)",
        border: "rgba(34, 197, 94, 0.3)",
      },
    };

    const colors = glowColors[glowColor] || glowColors.cyan;

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        {/* Glowing background */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
            boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
            animation: "pulse 4s ease-in-out infinite",
            animationDelay: `${animationDelay}s`,
          }}
        />

        {/* Static ring for depth */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 20px ${colors.secondary}`,
          }}
        />
      </div>
    );
  }
);
GlowingOrbitPath.displayName = "GlowingOrbitPath";

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        setScale(0.75);
      } else if (width < 768) {
        // Small tablets
        setScale(0.85);
      } else if (width < 1024) {
        // Tablets
        setScale(0.9);
      } else {
        // Desktop
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{
    radius: number;
    glowColor: GlowColor;
    delay: number;
  }> = [
    { radius: 140 * scale, glowColor: "cyan", delay: 0 },
    { radius: 240 * scale, glowColor: "purple", delay: 1.5 },
  ];

  // Responsive skill config
  const responsiveSkillsConfig = skillsConfig.map((skill) => ({
    ...skill,
    orbitRadius: skill.orbitRadius * scale,
    size: skill.size * scale,
  }));

  return (
    <main className="w-full flex items-center justify-center overflow-hidden">
      <div
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Central Profile Image with enhanced glow */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full flex items-center justify-center z-10 relative shadow-2xl overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div
            className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <img
            src="/assets/profile.jpeg"
            alt="Profile"
            className="relative z-10 w-full h-full object-cover rounded-full ring-4 ring-blue-500/50 dark:ring-purple-500/50"
          />
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {responsiveSkillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill key={config.id} config={config} angle={angle} />
          );
        })}
      </div>
    </main>
  );
}
