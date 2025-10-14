import { useState, useEffect } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollProgress(scrollPercent);
    };

    // Initial calculation
    updateScrollProgress();

    // Add scroll event listener with throttling for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      {/* Background track */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-gray-300/20 dark:from-gray-800/30 dark:to-gray-700/30 backdrop-blur-sm" />

      {/* Progress bar */}
      <div
        className="h-full relative overflow-hidden transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
        }}
      >
        {/* Main gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{
            boxShadow: `0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(147, 51, 234, 0.3), 0 0 30px rgba(236, 72, 153, 0.2)`,
          }}
        />

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-sm" />

        {/* Highlight line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* Animated dots */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0 flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
            style={{
              animationDelay: `${i * 0.2}s`,
              opacity: scrollProgress > 90 ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
