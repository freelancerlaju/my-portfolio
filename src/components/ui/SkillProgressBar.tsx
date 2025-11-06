import { useState, useEffect, useRef } from "react";

interface SkillProgressBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

export function SkillProgressBar({
  name,
  percentage,
  color = "#e91e63",
  delay = 0,
}: SkillProgressBarProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateProgress = () => {
      const start = 0;
      const end = percentage;
      const duration = 2000;
      const easing = (t: number) => t * (2 - t); // Ease-out function
      const startTime = Date.now();

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);
        const current = start + (end - start) * easedProgress;

        setAnimatedPercentage(Math.round(current * 10) / 10); // Round to 1 decimal place

        if (progress >= 1) {
          setAnimatedPercentage(end);
          clearInterval(timer);
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
    <div ref={progressRef} className="relative mb-3 sm:mb-4">
      {/* Skill Name - Responsive text color */}
      <div className="mb-1.5 sm:mb-2">
        <span className="text-gray-900 dark:text-white text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide">
          {name}
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="relative w-full h-1.5 sm:h-2 md:h-2.5 flex items-center">
        {/* Background Track - Light Gray */}
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-full" />

        {/* Filled Progress Bar */}
        <div
          className="relative h-full rounded-full transition-all duration-1000 ease-out z-0"
          style={{
            width: `${animatedPercentage}%`,
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}60, 0 0 16px ${color}40`,
          }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full" />

          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
            }}
          />
        </div>

        {/* Percentage Circle Indicator - Overlaps the unfilled part */}
        <div
          className="absolute rounded-full border-2 transition-all duration-1000 ease-out shadow-lg backdrop-blur-sm"
          style={{
            left: `${animatedPercentage}%`,
            transform: "translateX(-50%)",
            zIndex: 10,
            width: "clamp(1.25rem, 2vw, 1.75rem)", // Responsive: 20px (mobile) to 28px (desktop)
            height: "clamp(1.25rem, 2vw, 1.75rem)",
            borderColor: color,
            backgroundColor: color,
            boxShadow: `0 0 12px ${color}80, 0 0 24px ${color}60, 0 2px 8px rgba(0,0,0,0.3)`,
            padding: 0,
            margin: 0,
          }}
        >
          {/* Dark overlay for better text contrast on light colors */}
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              backgroundColor: "#000000",
            }}
          />

          {/* Percentage Text - Perfectly centered */}
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] sm:text-[10px] md:text-xs font-bold tabular-nums leading-none whitespace-nowrap"
            style={{
              color: "#ffffff",
              textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.3)",
            }}
          >
            {Math.round(animatedPercentage)}%
          </span>
        </div>
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
    <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg transition-colors duration-300">
      {/* Progress Bars */}
      <div className="space-y-3 sm:space-y-4">
        {skills.map((skill, index) => (
          <SkillProgressBar
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            color={skill.color}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}
