import { useState, useEffect, useRef } from "react";

interface CircularProgressBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

export function CircularProgressBar({
  name,
  percentage,
  color = "#3b82f6",
  delay = 0,
}: CircularProgressBarProps) {
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
        const current = Math.floor(start + (end - start) * easedProgress);

        setAnimatedPercentage(current);

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

  // Convert percentage to degrees for conic-gradient
  const degree = (animatedPercentage / 100) * 360;
  const startDegree = -90; // Start from top

  return (
    <div ref={progressRef} className="flex flex-col items-center w-full group">
      {/* Modern Glassmorphism Card Container */}
      <div className="relative w-full max-w-[180px] aspect-square bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-gray-800/40 dark:via-gray-900/30 dark:to-gray-900/20 backdrop-blur-xl rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center border border-white/20 dark:border-gray-700/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:border-white/30 dark:hover:border-gray-600/50 overflow-hidden">
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`,
          }}
        />

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

        {/* Circular Progress Bar */}
        <div className="relative w-[120px] h-[120px] mb-5 z-10">
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            style={{
              background: `conic-gradient(from ${startDegree}deg, ${color} ${degree}deg, transparent 0deg)`,
            }}
          />

          {/* Main Progress Ring */}
          <div className="absolute inset-0 rounded-full">
            {/* Background track */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200/20 to-gray-300/10 dark:from-gray-700/30 dark:to-gray-800/20 backdrop-blur-sm" />

            {/* Progress fill */}
            <div
              className="absolute inset-0 rounded-full transition-all duration-300"
              style={{
                background: `conic-gradient(from ${startDegree}deg, ${color} ${degree}deg, ${color}33 ${degree}deg, rgba(156,163,175,0.2) ${degree}deg)`,
                filter: "drop-shadow(0 0 8px rgba(59,130,246,0.5))",
              }}
            >
              {/* Progress glow effect */}
              <div
                className="absolute inset-0 rounded-full opacity-60"
                style={{
                  background: `conic-gradient(from ${startDegree}deg, ${color}88 ${degree}deg, transparent ${degree}deg)`,
                  filter: "blur(8px)",
                }}
              />
            </div>

            {/* Inner shadow for depth */}
            <div className="absolute inset-[8px] rounded-full bg-gradient-to-br from-white/5 to-transparent dark:from-gray-900/50 dark:to-gray-800/30 shadow-inner" />

            {/* Inner Circle - Glassmorphism */}
            <div className="absolute inset-[12px] rounded-full flex items-center justify-center overflow-hidden">
              {/* Background with gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/20 to-white/10 dark:from-gray-800/60 dark:via-gray-900/40 dark:to-gray-900/20 backdrop-blur-md" />

              {/* Inner glow */}
              <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
                }}
              />

              {/* Percentage Text with gradient */}
              <span
                className="relative z-10 font-extrabold tabular-nums transition-all duration-300 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent group-hover:scale-110"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  lineHeight: "1",
                  filter: `drop-shadow(0 0 8px ${color}80)`,
                }}
              >
                {animatedPercentage}%
              </span>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50" />
            </div>

            {/* Animated progress indicator dot */}
            {animatedPercentage > 0 && (
              <div
                className="absolute top-0 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 transition-all duration-300"
                style={{
                  transform: `rotate(${
                    degree + startDegree
                  }deg) translateY(-6px) translateX(-50%)`,
                  background: `radial-gradient(circle, ${color}, ${color}aa)`,
                  boxShadow: `0 0 12px ${color}, 0 0 24px ${color}88`,
                  filter: "blur(0.5px)",
                }}
              />
            )}
          </div>
        </div>

        {/* Skill Name with modern styling */}
        <span className="relative z-10 text-gray-700 dark:text-gray-200 uppercase font-bold tracking-wider text-center text-sm transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-105">
          {name}
        </span>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            boxShadow: `0 0 10px ${color}80`,
          }}
        />
      </div>
    </div>
  );
}

interface CircularProgressSectionProps {
  skills: Array<{
    name: string;
    percentage: number;
    color?: string;
  }>;
}

export function CircularProgressSection({
  skills,
}: CircularProgressSectionProps) {
  return (
    <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] w-full flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80" />

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-pink-400/20 via-transparent to-blue-400/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      {/* Floating orbs decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid layout for circular progress bars */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <CircularProgressBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              color={skill.color || "#3b82f6"}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
