import React, { useCallback, useEffect, useRef, ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
  enableGlow?: boolean; // New prop to disable glow effect for performance
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

// Throttle function for performance
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  let lastExecTime = 0;
  return function (...args: any[]) {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
  enableGlow = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const throttledSyncPointer = useCallback(
    throttle((e: PointerEvent) => {
      if (!enableGlow || !cardRef.current) return;

      const { clientX: x, clientY: y } = e;
      cardRef.current.style.setProperty("--x", x.toFixed(2));
      cardRef.current.style.setProperty(
        "--xp",
        (x / window.innerWidth).toFixed(2)
      );
      cardRef.current.style.setProperty("--y", y.toFixed(2));
      cardRef.current.style.setProperty(
        "--yp",
        (y / window.innerHeight).toFixed(2)
      );
    }, 16), // ~60fps
    [enableGlow]
  );

  useEffect(() => {
    if (!enableGlow) return;

    document.addEventListener("pointermove", throttledSyncPointer, {
      passive: true,
    });
    return () =>
      document.removeEventListener("pointermove", throttledSyncPointer);
  }, [throttledSyncPointer, enableGlow]);

  const { base, spread } = glowColorMap[glowColor];

  const getSizeClasses = () => {
    if (customSize) {
      return "";
    }
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties = {
      "--base": base,
      "--spread": spread,
      "--radius": "14",
      "--border": "2",
      "--backdrop": "hsl(0 0% 60% / 0.08)",
      "--backup-border": "var(--backdrop)",
      "--size": "150",
      "--border-size": "calc(var(--border, 2) * 1px)",
      "--spotlight-size": "calc(var(--size, 120) * 1px)",
      backgroundColor: "var(--backdrop, transparent)",
      border: "var(--border-size) solid var(--backup-border)",
      position: "relative",
      touchAction: "none",
    };

    if (enableGlow) {
      baseStyles["--hue"] =
        "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))";
      baseStyles.backgroundImage = `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / 0.05), transparent
      )`;
      baseStyles.backgroundSize =
        "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))";
      baseStyles.backgroundPosition = "50% 50%";
      baseStyles.backgroundAttachment = "fixed";
    }

    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = enableGlow
    ? `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.6) calc(var(--spotlight-size) * 0.6) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / 0.3), transparent 100%
      );
      filter: brightness(1.5);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.4) calc(var(--spotlight-size) * 0.4) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / 0.2), transparent 100%
      );
    }
  `
    : "";

  return (
    <>
      {enableGlow && (
        <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      )}
      <div
        ref={cardRef}
        data-glow={enableGlow ? "" : undefined}
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? "aspect-[3/4]" : ""}
          rounded-2xl 
          relative 
          flex 
          flex-col
          shadow-lg
          backdrop-blur-sm
          overflow-hidden
          transition-all duration-300 ease-out
          ${className}
        `}
      >
        {enableGlow && <div ref={innerRef} data-glow></div>}
        {children}
      </div>
    </>
  );
};

export { GlowCard };
