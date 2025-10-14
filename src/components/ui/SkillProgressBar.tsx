import { useState, useEffect, useRef } from "react";

// Add custom CSS animations
const progressBarStyles = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 20px currentColor; }
    50% { box-shadow: 0 0 30px currentColor, 0 0 40px currentColor; }
  }
  
  @keyframes dot-bounce {
    0%, 100% { transform: translateY(-50%) scale(1); }
    50% { transform: translateY(-50%) scale(1.1); }
  }
  
  @keyframes glass-shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes progress-glow {
    0%, 100% { 
      box-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
    }
    50% { 
      box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
    }
  }
  
  .shimmer-animation {
    animation: shimmer 2s infinite;
  }
  
  .glow-pulse {
    animation: glow-pulse 2s ease-in-out infinite;
  }
  
  .dot-bounce {
    animation: dot-bounce 1s ease-in-out infinite;
  }
  
  .glass-shimmer {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    background-size: 200% 100%;
    animation: glass-shimmer 3s infinite;
  }
  
  .progress-glow {
    animation: progress-glow 2s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = progressBarStyles;
  document.head.appendChild(styleSheet);
}

interface SkillProgressBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

export function SkillProgressBar({
  name,
  percentage,
  color = "#3b82f6",
  delay = 0,
}: SkillProgressBarProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateProgress = () => {
      let start = 0;
      const end = percentage;
      const duration = 1500; // 1.5 seconds - faster animation
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setAnimatedPercentage(end);
          clearInterval(timer);
        } else {
          setAnimatedPercentage(Math.floor(start));
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            animateProgress();
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [delay, isVisible, percentage]);

  return (
    <div ref={progressRef} className="mb-2 sm:mb-3 lg:mb-4 group">
      <div className="flex justify-between items-center mb-1.5 sm:mb-2">
        <span className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 dark:text-gray-200 tracking-wide truncate pr-2">
          {name}
        </span>
        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
          <span className="text-xs sm:text-sm lg:text-lg font-bold text-gray-900 dark:text-gray-100 tabular-nums">
            {animatedPercentage}%
          </span>
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>

      <div className="relative">
        {/* Glass background track */}
        <div className="w-full relative rounded-full h-2.5 sm:h-3 lg:h-4 overflow-hidden">
          {/* Glass effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 dark:from-gray-800/30 dark:to-gray-700/20 backdrop-blur-sm border border-white/20 dark:border-gray-600/20 rounded-full shadow-inner" />

          {/* Progress fill with glass effect */}
          <div
            className="h-2.5 sm:h-3 lg:h-4 rounded-full relative overflow-hidden transition-all duration-1500 ease-out progress-glow"
            style={{
              width: `${animatedPercentage}%`,
              background: `linear-gradient(135deg, ${color}dd, ${color}bb, ${color}99)`,
              boxShadow: `0 0 20px ${color}60, inset 0 1px 0 rgba(255,255,255,0.3)`,
            }}
          >
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 glass-shimmer rounded-full" />

            {/* Inner glow */}
            <div
              className="absolute inset-0 rounded-full blur-sm opacity-70"
              style={{ backgroundColor: color }}
            />

            {/* Highlight line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
          </div>
        </div>

        {/* Modern progress indicator dot */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-1500 ease-out dot-bounce"
          style={{
            left: `calc(${animatedPercentage}% - 6px)`,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), ${color})`,
            boxShadow: `0 0 20px ${color}80, 0 0 40px ${color}40, inset 0 1px 0 rgba(255,255,255,0.5)`,
            border: `2px solid rgba(255,255,255,0.3)`,
          }}
        />
      </div>
    </div>
  );
}

interface SkillsProgressSectionProps {
  skills: Array<{
    name: string;
    percentage: number;
    color?: string;
  }>;
}

export function SkillsProgressSection({ skills }: SkillsProgressSectionProps) {
  return (
    <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[450px]">
      {/* Advanced glassmorphism background decoration */}
      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div
        className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Modern glassmorphism container */}
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-900/30 dark:to-gray-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-white/20 dark:border-gray-700/30 shadow-2xl min-h-full flex flex-col justify-between">
        {/* Glass overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="space-y-1 sm:space-y-2 lg:space-y-3">
            {skills.map((skill, index) => (
              <SkillProgressBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                delay={index * 100} // Faster stagger delay
              />
            ))}
          </div>
        </div>

        {/* Modern bottom decoration */}
        <div className="mt-2 sm:mt-3 lg:mt-4 flex justify-center relative z-10">
          <div className="flex space-x-1 sm:space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-sm border border-white/20 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-gray-100/5 pointer-events-none" />
      </div>
    </div>
  );
}
