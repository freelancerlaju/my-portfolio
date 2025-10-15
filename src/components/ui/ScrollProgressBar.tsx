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
    <div className="fixed top-0 left-0 w-full h-0.5 z-50">
      {/* Glass background track */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-md border-b border-white/10 dark:border-white/5" />

      {/* Progress bar container */}
      <div
        className="h-full relative overflow-hidden"
        style={{
          width: `${scrollProgress}%`,
        }}
      >
        {/* Glass progress bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm border-r border-white/20 dark:border-white/10">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-500/50" />

          {/* Glass highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          {/* Subtle shimmer */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              transform: `translateX(${scrollProgress * 2}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>
      </div>

      {/* Professional indicator dot */}
      {scrollProgress > 5 && (
        <div
          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/90 dark:bg-white/70 shadow-lg backdrop-blur-sm border border-white/40 dark:border-white/30"
          style={{
            left: `${scrollProgress}%`,
            transform: "translate(-50%, -50%)",
            boxShadow:
              "0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(99, 102, 241, 0.3), 0 0 24px rgba(147, 51, 234, 0.2)",
          }}
        />
      )}
    </div>
  );
}
